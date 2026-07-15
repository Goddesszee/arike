/**
 * ARIKE OTP Client (browser)
 * -----------------------------
 * Wraps @circle-fin/w3s-pw-web-sdk for use from plain HTML (no React/Next
 * bundler in this Console) — bundled separately via scripts/bundle-otp.js
 * and loaded as a plain <script> tag, exposing window.ArikeOTP.
 *
 * Mirrors Circle's official Email OTP quickstart flow exactly:
 * https://developers.circle.com/wallets/user-controlled/create-user-wallets-with-email
 */
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";

interface LoginResult {
  userToken: string;
  encryptionKey: string;
}

let sdk: W3SSdk | null = null;
let deviceId = "";
let loginResult: LoginResult | null = null;
let loginCompleteHandlers: Array<(result: LoginResult | null, error: unknown) => void> = [];

function onLoginComplete(handler: (result: LoginResult | null, error: unknown) => void) {
  loginCompleteHandlers.push(handler);
}

async function init(): Promise<string> {
  const configRes = await fetch("/api/config");
  const config = await configRes.json();
  if (!config.circleAppId) {
    throw new Error("ARIKE_CIRCLE_APP_ID not set in Vercel — see CIRCLE_SETUP.md section on OTP login.");
  }

  sdk = new W3SSdk({ appSettings: { appId: config.circleAppId } }, (error: any, result: any) => {
    if (error || !result) {
      loginResult = null;
      loginCompleteHandlers.forEach((h) => h(null, error));
      return;
    }
    loginResult = { userToken: result.userToken, encryptionKey: result.encryptionKey };
    loginCompleteHandlers.forEach((h) => h(loginResult, null));
  });

  const cached = localStorage.getItem("arike_device_id");
  if (cached) {
    deviceId = cached;
  } else {
    deviceId = await sdk.getDeviceId();
    localStorage.setItem("arike_device_id", deviceId);
  }
  return deviceId;
}

async function requestOtp(email: string): Promise<void> {
  if (!sdk) throw new Error("Call ArikeOTP.init() first");

  const res = await fetch("/api/circle-auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "requestEmailOtp", deviceId, email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.message || "Failed to request OTP");

  const configRes = await fetch("/api/config");
  const config = await configRes.json();

  sdk.updateConfigs({
    appSettings: { appId: config.circleAppId },
    loginConfigs: {
      deviceToken: data.deviceToken,
      deviceEncryptionKey: data.deviceEncryptionKey,
      otpToken: data.otpToken,
    },
  });
}

function verifyOtp(): void {
  if (!sdk) throw new Error("Call ArikeOTP.init() first");
  sdk.verifyOtp(); // opens Circle's hosted OTP entry UI
}

async function initializeUser(userToken: string): Promise<{ ok: boolean; status: number; data: any }> {
  const res = await fetch("/api/circle-auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "initializeUser", userToken }),
  });
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

function executeChallenge(challengeId: string, cb: (err: unknown) => void): void {
  if (!sdk || !loginResult) throw new Error("Not logged in yet");
  sdk.setAuthentication({ userToken: loginResult.userToken, encryptionKey: loginResult.encryptionKey });
  sdk.execute(challengeId, cb);
}

async function listWallets(userToken: string): Promise<any> {
  const res = await fetch("/api/circle-auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "listWallets", userToken }),
  });
  return res.json();
}

(window as any).ArikeOTP = {
  init,
  requestOtp,
  verifyOtp,
  initializeUser,
  executeChallenge,
  listWallets,
  onLoginComplete,
  getLoginResult: () => loginResult,
};
