// Stub replacing `jsonwebtoken` for the browser bundle. The real package
// pulls in Node's `stream`/`util.inherits` in a way that crashes when
// polyfilled for browsers (Object.create on an undefined prototype). It's
// only exercised by the SDK's social-login (Google/Apple) JWT parsing path
// — ARIKE's flow is email-OTP only, so these never get called for real.
// If they somehow are, no-op / throw clearly rather than crash at load time.
export function sign() {
  throw new Error("jsonwebtoken.sign is stubbed out in ARIKE's browser bundle (email-OTP flow doesn't need it)");
}
export function verify() {
  throw new Error("jsonwebtoken.verify is stubbed out in ARIKE's browser bundle (email-OTP flow doesn't need it)");
}
export function decode() {
  return null;
}
export default { sign, verify, decode };
