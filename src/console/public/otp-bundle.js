"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js
  var init_dirname = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/__dirname.js"() {
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/process.js
  var process_exports = {};
  __export(process_exports, {
    _debugEnd: () => _debugEnd,
    _debugProcess: () => _debugProcess,
    _events: () => _events,
    _eventsCount: () => _eventsCount,
    _exiting: () => _exiting,
    _fatalExceptions: () => _fatalExceptions,
    _getActiveHandles: () => _getActiveHandles,
    _getActiveRequests: () => _getActiveRequests,
    _kill: () => _kill,
    _linkedBinding: () => _linkedBinding,
    _maxListeners: () => _maxListeners,
    _preload_modules: () => _preload_modules,
    _rawDebug: () => _rawDebug,
    _startProfilerIdleNotifier: () => _startProfilerIdleNotifier,
    _stopProfilerIdleNotifier: () => _stopProfilerIdleNotifier,
    _tickCallback: () => _tickCallback,
    abort: () => abort,
    addListener: () => addListener,
    allowedNodeEnvironmentFlags: () => allowedNodeEnvironmentFlags,
    arch: () => arch,
    argv: () => argv,
    argv0: () => argv0,
    assert: () => assert,
    binding: () => binding,
    browser: () => browser2,
    chdir: () => chdir,
    config: () => config,
    cpuUsage: () => cpuUsage,
    cwd: () => cwd,
    debugPort: () => debugPort,
    default: () => process,
    dlopen: () => dlopen,
    domain: () => domain,
    emit: () => emit,
    emitWarning: () => emitWarning,
    env: () => env,
    execArgv: () => execArgv,
    execPath: () => execPath,
    exit: () => exit,
    features: () => features,
    hasUncaughtExceptionCaptureCallback: () => hasUncaughtExceptionCaptureCallback,
    hrtime: () => hrtime,
    kill: () => kill,
    listeners: () => listeners,
    memoryUsage: () => memoryUsage,
    moduleLoadList: () => moduleLoadList,
    nextTick: () => nextTick,
    off: () => off,
    on: () => on,
    once: () => once,
    openStdin: () => openStdin,
    pid: () => pid,
    platform: () => platform,
    ppid: () => ppid,
    prependListener: () => prependListener,
    prependOnceListener: () => prependOnceListener,
    reallyExit: () => reallyExit,
    release: () => release,
    removeAllListeners: () => removeAllListeners,
    removeListener: () => removeListener,
    resourceUsage: () => resourceUsage,
    setSourceMapsEnabled: () => setSourceMapsEnabled,
    setUncaughtExceptionCaptureCallback: () => setUncaughtExceptionCaptureCallback,
    stderr: () => stderr,
    stdin: () => stdin,
    stdout: () => stdout,
    title: () => title,
    umask: () => umask,
    uptime: () => uptime,
    version: () => version,
    versions: () => versions
  });
  function unimplemented(name) {
    throw new Error("Node.js process " + name + " is not supported by JSPM core outside of Node.js");
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue)
      return;
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length)
      drainQueue();
  }
  function drainQueue() {
    if (draining)
      return;
    var timeout = setTimeout(cleanUpNextTick, 0);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue)
          currentQueue[queueIndex].run();
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++)
        args[i - 1] = arguments[i];
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining)
      setTimeout(drainQueue, 0);
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function _linkedBinding(name) {
    unimplemented("_linkedBinding");
  }
  function dlopen(name) {
    unimplemented("dlopen");
  }
  function _getActiveRequests() {
    return [];
  }
  function _getActiveHandles() {
    return [];
  }
  function assert(condition, message) {
    if (!condition) throw new Error(message || "assertion error");
  }
  function hasUncaughtExceptionCaptureCallback() {
    return false;
  }
  function uptime() {
    return _performance.now() / 1e3;
  }
  function hrtime(previousTimestamp) {
    var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
    var clocktime = _performance.now() * 1e-3;
    var seconds = Math.floor(clocktime) + baseNow;
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += nanoPerSec;
      }
    }
    return [seconds, nanoseconds];
  }
  function on() {
    return process;
  }
  function listeners(name) {
    return [];
  }
  var queue, draining, currentQueue, queueIndex, title, arch, platform, env, argv, execArgv, version, versions, emitWarning, binding, umask, cwd, chdir, release, browser2, _rawDebug, moduleLoadList, domain, _exiting, config, reallyExit, _kill, cpuUsage, resourceUsage, memoryUsage, kill, exit, openStdin, allowedNodeEnvironmentFlags, features, _fatalExceptions, setUncaughtExceptionCaptureCallback, _tickCallback, _debugProcess, _debugEnd, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, stdout, stderr, stdin, abort, pid, ppid, execPath, debugPort, argv0, _preload_modules, setSourceMapsEnabled, _performance, nowOffset, nanoPerSec, _maxListeners, _events, _eventsCount, addListener, once, off, removeListener, removeAllListeners, emit, prependListener, prependOnceListener, process;
  var init_process = __esm({
    "node_modules/@jspm/core/nodelibs/browser/process.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      arch = "x64";
      platform = "browser";
      env = {
        PATH: "/usr/bin",
        LANG: typeof navigator !== "undefined" ? navigator.language + ".UTF-8" : void 0,
        PWD: "/",
        HOME: "/home",
        TMP: "/tmp"
      };
      argv = ["/usr/bin/node"];
      execArgv = [];
      version = "v16.8.0";
      versions = {};
      emitWarning = function(message, type) {
        console.warn((type ? type + ": " : "") + message);
      };
      binding = function(name) {
        unimplemented("binding");
      };
      umask = function(mask) {
        return 0;
      };
      cwd = function() {
        return "/";
      };
      chdir = function(dir) {
      };
      release = {
        name: "node",
        sourceUrl: "",
        headersUrl: "",
        libUrl: ""
      };
      browser2 = true;
      _rawDebug = noop;
      moduleLoadList = [];
      domain = {};
      _exiting = false;
      config = {};
      reallyExit = noop;
      _kill = noop;
      cpuUsage = function() {
        return {};
      };
      resourceUsage = cpuUsage;
      memoryUsage = cpuUsage;
      kill = noop;
      exit = noop;
      openStdin = noop;
      allowedNodeEnvironmentFlags = {};
      features = {
        inspector: false,
        debug: false,
        uv: false,
        ipv6: false,
        tls_alpn: false,
        tls_sni: false,
        tls_ocsp: false,
        tls: false,
        cached_builtins: true
      };
      _fatalExceptions = noop;
      setUncaughtExceptionCaptureCallback = noop;
      _tickCallback = noop;
      _debugProcess = noop;
      _debugEnd = noop;
      _startProfilerIdleNotifier = noop;
      _stopProfilerIdleNotifier = noop;
      stdout = void 0;
      stderr = void 0;
      stdin = void 0;
      abort = noop;
      pid = 2;
      ppid = 1;
      execPath = "/bin/usr/node";
      debugPort = 9229;
      argv0 = "node";
      _preload_modules = [];
      setSourceMapsEnabled = noop;
      _performance = {
        now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
        timing: typeof performance !== "undefined" ? performance.timing : void 0
      };
      if (_performance.now === void 0) {
        nowOffset = Date.now();
        if (_performance.timing && _performance.timing.navigationStart) {
          nowOffset = _performance.timing.navigationStart;
        }
        _performance.now = () => Date.now() - nowOffset;
      }
      nanoPerSec = 1e9;
      hrtime.bigint = function(time) {
        var diff = hrtime(time);
        if (typeof BigInt === "undefined") {
          return diff[0] * nanoPerSec + diff[1];
        }
        return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
      };
      _maxListeners = 10;
      _events = {};
      _eventsCount = 0;
      addListener = on;
      once = on;
      off = on;
      removeListener = on;
      removeAllListeners = on;
      emit = noop;
      prependListener = on;
      prependOnceListener = on;
      process = {
        version,
        versions,
        arch,
        platform,
        browser: browser2,
        release,
        _rawDebug,
        moduleLoadList,
        binding,
        _linkedBinding,
        _events,
        _eventsCount,
        _maxListeners,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        prependListener,
        prependOnceListener,
        listeners,
        domain,
        _exiting,
        config,
        dlopen,
        uptime,
        _getActiveRequests,
        _getActiveHandles,
        reallyExit,
        _kill,
        cpuUsage,
        resourceUsage,
        memoryUsage,
        kill,
        exit,
        openStdin,
        allowedNodeEnvironmentFlags,
        assert,
        features,
        _fatalExceptions,
        setUncaughtExceptionCaptureCallback,
        hasUncaughtExceptionCaptureCallback,
        emitWarning,
        nextTick,
        _tickCallback,
        _debugProcess,
        _debugEnd,
        _startProfilerIdleNotifier,
        _stopProfilerIdleNotifier,
        stdout,
        stdin,
        stderr,
        abort,
        umask,
        chdir,
        cwd,
        env,
        title,
        argv,
        execArgv,
        pid,
        ppid,
        execPath,
        debugPort,
        hrtime,
        argv0,
        _preload_modules,
        setSourceMapsEnabled
      };
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/process.js
  var init_process2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/process.js"() {
      init_process();
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js
  function dew$2() {
    if (_dewExec$2) return exports$2;
    _dewExec$2 = true;
    exports$2.byteLength = byteLength;
    exports$2.toByteArray = toByteArray;
    exports$2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
    return exports$2;
  }
  function dew$1() {
    if (_dewExec$1) return exports$1;
    _dewExec$1 = true;
    exports$1.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports$1.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
    return exports$1;
  }
  function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    const base64 = dew$2();
    const ieee754 = dew$1();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    })();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
    return exports;
  }
  var exports$2, _dewExec$2, exports$1, _dewExec$1, exports, _dewExec;
  var init_chunk_DtuTasat = __esm({
    "node_modules/@jspm/core/nodelibs/browser/chunk-DtuTasat.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      exports$2 = {};
      _dewExec$2 = false;
      exports$1 = {};
      _dewExec$1 = false;
      exports = {};
      _dewExec = false;
    }
  });

  // node_modules/@jspm/core/nodelibs/browser/buffer.js
  var exports2, Buffer2, INSPECT_MAX_BYTES, kMaxLength;
  var init_buffer = __esm({
    "node_modules/@jspm/core/nodelibs/browser/buffer.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      init_chunk_DtuTasat();
      exports2 = dew();
      exports2["Buffer"];
      exports2["SlowBuffer"];
      exports2["INSPECT_MAX_BYTES"];
      exports2["kMaxLength"];
      Buffer2 = exports2.Buffer;
      INSPECT_MAX_BYTES = exports2.INSPECT_MAX_BYTES;
      kMaxLength = exports2.kMaxLength;
    }
  });

  // node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
  var init_buffer2 = __esm({
    "node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js"() {
      init_buffer();
    }
  });

  // node_modules/tslib/tslib.es6.mjs
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __addDisposableResource: () => __addDisposableResource,
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __disposeResources: () => __disposeResources,
    __esDecorate: () => __esDecorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __propKey: () => __propKey,
    __read: () => __read,
    __rest: () => __rest,
    __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
    __runInitializers: () => __runInitializers,
    __setFunctionName: () => __setFunctionName,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values,
    default: () => tslib_es6_default
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0) continue;
        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
        if (_ = accept(result.get)) descriptor.get = _;
        if (_ = accept(result.set)) descriptor.set = _;
        if (_ = accept(result.init)) initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field") initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  }
  function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f) i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env2, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
      var dispose, inner;
      if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
        if (async) inner = dispose;
      }
      if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
      if (inner) dispose = function() {
        try {
          inner.call(this);
        } catch (e) {
          return Promise.reject(e);
        }
      };
      env2.stack.push({ value, dispose, async });
    } else if (async) {
      env2.stack.push({ async: true });
    }
    return value;
  }
  function __disposeResources(env2) {
    function fail(e) {
      env2.error = env2.hasError ? new _SuppressedError(e, env2.error, "An error was suppressed during disposal.") : e;
      env2.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env2.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env2.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env2.hasError ? Promise.reject(env2.error) : Promise.resolve();
      if (env2.hasError) throw env2.error;
    }
    return next();
  }
  function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
      });
    }
    return path;
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
      init_dirname();
      init_buffer2();
      init_process2();
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      };
      ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      tslib_es6_default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __esDecorate,
        __runInitializers,
        __propKey,
        __setFunctionName,
        __metadata,
        __awaiter,
        __generator,
        __createBinding,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
        __rewriteRelativeImportExtension
      };
    }
  });

  // node_modules/@firebase/util/dist/index.cjs.js
  var require_index_cjs = __commonJS({
    "node_modules/@firebase/util/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,
        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,
        /**
         * Firebase SDK Version
         */
        SDK_VERSION: "${JSCORE_VERSION}"
      };
      var assert2 = function(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      var assertionError = function(message) {
        return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
      };
      var stringToByteArray$1 = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var byteArrayToString = function(bytes) {
        const out = [];
        let pos = 0, c = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
          } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join("");
      };
      var base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length; ) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      var DecodeBase64StringError = class extends Error {
        constructor() {
          super(...arguments);
          this.name = "DecodeBase64StringError";
        }
      };
      var base64Encode = function(str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      var base64urlEncodeWithoutPadding = function(str) {
        return base64Encode(str).replace(/\./g, "");
      };
      var base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      function deepCopy(value) {
        return deepExtend(void 0, value);
      }
      function deepExtend(target, source) {
        if (!(source instanceof Object)) {
          return source;
        }
        switch (source.constructor) {
          case Date:
            const dateValue = source;
            return new Date(dateValue.getTime());
          case Object:
            if (target === void 0) {
              target = {};
            }
            break;
          case Array:
            target = [];
            break;
          default:
            return source;
        }
        for (const prop in source) {
          if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
          }
          target[prop] = deepExtend(target[prop], source[prop]);
        }
        return target;
      }
      function isValidKey(key) {
        return key !== "__proto__";
      }
      function getGlobal() {
        if (typeof self !== "undefined") {
          return self;
        }
        if (typeof window !== "undefined") {
          return window;
        }
        if (typeof global !== "undefined") {
          return global;
        }
        throw new Error("Unable to locate global object.");
      }
      var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
      var getDefaultsFromEnvVariable = () => {
        if (typeof process_exports === "undefined" || typeof process_exports.env === "undefined") {
          return;
        }
        const defaultsJsonString = process_exports.env.__FIREBASE_DEFAULTS__;
        if (defaultsJsonString) {
          return JSON.parse(defaultsJsonString);
        }
      };
      var getDefaultsFromCookie = () => {
        if (typeof document === "undefined") {
          return;
        }
        let match;
        try {
          match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        } catch (e) {
          return;
        }
        const decoded = match && base64Decode(match[1]);
        return decoded && JSON.parse(decoded);
      };
      var getDefaults = () => {
        try {
          return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
        } catch (e) {
          console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
          return;
        }
      };
      var getDefaultEmulatorHost = (productName) => {
        var _a, _b;
        return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
      };
      var getDefaultEmulatorHostnameAndPort = (productName) => {
        const host = getDefaultEmulatorHost(productName);
        if (!host) {
          return void 0;
        }
        const separatorIndex = host.lastIndexOf(":");
        if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
          throw new Error(`Invalid host ${host} with no separate hostname and port!`);
        }
        const port = parseInt(host.substring(separatorIndex + 1), 10);
        if (host[0] === "[") {
          return [host.substring(1, separatorIndex - 1), port];
        } else {
          return [host.substring(0, separatorIndex), port];
        }
      };
      var getDefaultAppConfig = () => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
      };
      var getExperimentalSetting = (name) => {
        var _a;
        return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`];
      };
      var Deferred = class {
        constructor() {
          this.reject = () => {
          };
          this.resolve = () => {
          };
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        /**
         * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
          return (error, value) => {
            if (error) {
              this.reject(error);
            } else {
              this.resolve(value);
            }
            if (typeof callback === "function") {
              this.promise.catch(() => {
              });
              if (callback.length === 1) {
                callback(error);
              } else {
                callback(error, value);
              }
            }
          };
        }
      };
      function createMockUserToken(token, projectId) {
        if (token.uid) {
          throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
        }
        const header = {
          alg: "none",
          type: "JWT"
        };
        const project = projectId || "demo-project";
        const iat = token.iat || 0;
        const sub = token.sub || token.user_id;
        if (!sub) {
          throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
        }
        const payload = Object.assign({
          // Set all required fields to decent defaults
          iss: `https://securetoken.google.com/${project}`,
          aud: project,
          iat,
          exp: iat + 3600,
          auth_time: iat,
          sub,
          user_id: sub,
          firebase: {
            sign_in_provider: "custom",
            identities: {}
          }
        }, token);
        const signature = "";
        return [
          base64urlEncodeWithoutPadding(JSON.stringify(header)),
          base64urlEncodeWithoutPadding(JSON.stringify(payload)),
          signature
        ].join(".");
      }
      function getUA() {
        if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
          return navigator["userAgent"];
        } else {
          return "";
        }
      }
      function isMobileCordova() {
        return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
      }
      function isNode() {
        var _a;
        const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
        if (forceEnvironment === "node") {
          return true;
        } else if (forceEnvironment === "browser") {
          return false;
        }
        try {
          return Object.prototype.toString.call(global.process) === "[object process]";
        } catch (e) {
          return false;
        }
      }
      function isBrowser() {
        return typeof window !== "undefined" || isWebWorker();
      }
      function isWebWorker() {
        return typeof WorkerGlobalScope !== "undefined" && typeof self !== "undefined" && self instanceof WorkerGlobalScope;
      }
      function isCloudflareWorker() {
        return typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";
      }
      function isBrowserExtension() {
        const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
        return typeof runtime === "object" && runtime.id !== void 0;
      }
      function isReactNative() {
        return typeof navigator === "object" && navigator["product"] === "ReactNative";
      }
      function isElectron() {
        return getUA().indexOf("Electron/") >= 0;
      }
      function isIE() {
        const ua = getUA();
        return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
      }
      function isUWP() {
        return getUA().indexOf("MSAppHost/") >= 0;
      }
      function isNodeSdk() {
        return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
      }
      function isSafari() {
        return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
      }
      function isIndexedDBAvailable() {
        try {
          return typeof indexedDB === "object";
        } catch (e) {
          return false;
        }
      }
      function validateIndexedDBOpenable() {
        return new Promise((resolve, reject) => {
          try {
            let preExist = true;
            const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
              request.result.close();
              if (!preExist) {
                self.indexedDB.deleteDatabase(DB_CHECK_NAME);
              }
              resolve(true);
            };
            request.onupgradeneeded = () => {
              preExist = false;
            };
            request.onerror = () => {
              var _a;
              reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
            };
          } catch (error) {
            reject(error);
          }
        });
      }
      function areCookiesEnabled() {
        if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
          return false;
        }
        return true;
      }
      var ERROR_NAME = "FirebaseError";
      var FirebaseError = class _FirebaseError extends Error {
        constructor(code, message, customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          this.name = ERROR_NAME;
          Object.setPrototypeOf(this, _FirebaseError.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      };
      var ErrorFactory = class {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : "Error";
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error = new FirebaseError(fullCode, fullMessage, customData);
          return error;
        }
      };
      function replaceTemplate(template, data) {
        return template.replace(PATTERN, (_, key) => {
          const value = data[key];
          return value != null ? String(value) : `<${key}?>`;
        });
      }
      var PATTERN = /\{\$([^}]+)}/g;
      function jsonEval(str) {
        return JSON.parse(str);
      }
      function stringify(data) {
        return JSON.stringify(data);
      }
      var decode2 = function(token) {
        let header = {}, claims = {}, data = {}, signature = "";
        try {
          const parts = token.split(".");
          header = jsonEval(base64Decode(parts[0]) || "");
          claims = jsonEval(base64Decode(parts[1]) || "");
          signature = parts[2];
          data = claims["d"] || {};
          delete claims["d"];
        } catch (e) {
        }
        return {
          header,
          claims,
          data,
          signature
        };
      };
      var isValidTimestamp = function(token) {
        const claims = decode2(token).claims;
        const now = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
        let validSince = 0, validUntil = 0;
        if (typeof claims === "object") {
          if (claims.hasOwnProperty("nbf")) {
            validSince = claims["nbf"];
          } else if (claims.hasOwnProperty("iat")) {
            validSince = claims["iat"];
          }
          if (claims.hasOwnProperty("exp")) {
            validUntil = claims["exp"];
          } else {
            validUntil = validSince + 86400;
          }
        }
        return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
      };
      var issuedAtTime = function(token) {
        const claims = decode2(token).claims;
        if (typeof claims === "object" && claims.hasOwnProperty("iat")) {
          return claims["iat"];
        }
        return null;
      };
      var isValidFormat = function(token) {
        const decoded = decode2(token), claims = decoded.claims;
        return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
      };
      var isAdmin = function(token) {
        const claims = decode2(token).claims;
        return typeof claims === "object" && claims["admin"] === true;
      };
      function contains(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      function safeGet(obj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return obj[key];
        } else {
          return void 0;
        }
      }
      function isEmpty(obj) {
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }
      function map(obj, fn, contextObj) {
        const res = {};
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
          }
        }
        return res;
      }
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        for (const k of aKeys) {
          if (!bKeys.includes(k)) {
            return false;
          }
          const aProp = a[k];
          const bProp = b[k];
          if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
              return false;
            }
          } else if (aProp !== bProp) {
            return false;
          }
        }
        for (const k of bKeys) {
          if (!aKeys.includes(k)) {
            return false;
          }
        }
        return true;
      }
      function isObject(thing) {
        return thing !== null && typeof thing === "object";
      }
      function promiseWithTimeout(promise, timeInMS = 2e3) {
        const deferredPromise = new Deferred();
        setTimeout(() => deferredPromise.reject("timeout!"), timeInMS);
        promise.then(deferredPromise.resolve, deferredPromise.reject);
        return deferredPromise.promise;
      }
      function querystring(querystringParams) {
        const params = [];
        for (const [key, value] of Object.entries(querystringParams)) {
          if (Array.isArray(value)) {
            value.forEach((arrayVal) => {
              params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
            });
          } else {
            params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
          }
        }
        return params.length ? "&" + params.join("&") : "";
      }
      function querystringDecode(querystring2) {
        const obj = {};
        const tokens = querystring2.replace(/^\?/, "").split("&");
        tokens.forEach((token) => {
          if (token) {
            const [key, value] = token.split("=");
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
          }
        });
        return obj;
      }
      function extractQuerystring(url) {
        const queryStart = url.indexOf("?");
        if (!queryStart) {
          return "";
        }
        const fragmentStart = url.indexOf("#", queryStart);
        return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
      }
      var Sha1 = class {
        constructor() {
          this.chain_ = [];
          this.buf_ = [];
          this.W_ = [];
          this.pad_ = [];
          this.inbuf_ = 0;
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        reset() {
          this.chain_[0] = 1732584193;
          this.chain_[1] = 4023233417;
          this.chain_[2] = 2562383102;
          this.chain_[3] = 271733878;
          this.chain_[4] = 3285377520;
          this.inbuf_ = 0;
          this.total_ = 0;
        }
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */
        compress_(buf, offset) {
          if (!offset) {
            offset = 0;
          }
          const W = this.W_;
          if (typeof buf === "string") {
            for (let i = 0; i < 16; i++) {
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (let i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
          }
          let a = this.chain_[0];
          let b = this.chain_[1];
          let c = this.chain_[2];
          let d = this.chain_[3];
          let e = this.chain_[4];
          let f, k;
          for (let i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 1518500249;
              } else {
                f = b ^ c ^ d;
                k = 1859775393;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
              } else {
                f = b ^ c ^ d;
                k = 3395469782;
              }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
          this.chain_[2] = this.chain_[2] + c & 4294967295;
          this.chain_[3] = this.chain_[3] + d & 4294967295;
          this.chain_[4] = this.chain_[4] + e & 4294967295;
        }
        update(bytes, length) {
          if (bytes == null) {
            return;
          }
          if (length === void 0) {
            length = bytes.length;
          }
          const lengthMinusBlock = length - this.blockSize;
          let n = 0;
          const buf = this.buf_;
          let inbuf = this.inbuf_;
          while (n < length) {
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === "string") {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        }
        /** @override */
        digest() {
          const digest = [];
          let totalBits = this.total_ * 8;
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          let n = 0;
          for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        }
      };
      function createSubscribe(executor, onNoObservers) {
        const proxy = new ObserverProxy(executor, onNoObservers);
        return proxy.subscribe.bind(proxy);
      }
      var ObserverProxy = class {
        /**
         * @param executor Function which can make calls to a single Observer
         *     as a proxy.
         * @param onNoObservers Callback when count of Observers goes to zero.
         */
        constructor(executor, onNoObservers) {
          this.observers = [];
          this.unsubscribes = [];
          this.observerCount = 0;
          this.task = Promise.resolve();
          this.finalized = false;
          this.onNoObservers = onNoObservers;
          this.task.then(() => {
            executor(this);
          }).catch((e) => {
            this.error(e);
          });
        }
        next(value) {
          this.forEachObserver((observer) => {
            observer.next(value);
          });
        }
        error(error) {
          this.forEachObserver((observer) => {
            observer.error(error);
          });
          this.close(error);
        }
        complete() {
          this.forEachObserver((observer) => {
            observer.complete();
          });
          this.close();
        }
        /**
         * Subscribe function that can be used to add an Observer to the fan-out list.
         *
         * - We require that no event is sent to a subscriber synchronously to their
         *   call to subscribe().
         */
        subscribe(nextOrObserver, error, complete) {
          let observer;
          if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
            throw new Error("Missing Observer.");
          }
          if (implementsAnyMethods(nextOrObserver, [
            "next",
            "error",
            "complete"
          ])) {
            observer = nextOrObserver;
          } else {
            observer = {
              next: nextOrObserver,
              error,
              complete
            };
          }
          if (observer.next === void 0) {
            observer.next = noop2;
          }
          if (observer.error === void 0) {
            observer.error = noop2;
          }
          if (observer.complete === void 0) {
            observer.complete = noop2;
          }
          const unsub = this.unsubscribeOne.bind(this, this.observers.length);
          if (this.finalized) {
            this.task.then(() => {
              try {
                if (this.finalError) {
                  observer.error(this.finalError);
                } else {
                  observer.complete();
                }
              } catch (e) {
              }
              return;
            });
          }
          this.observers.push(observer);
          return unsub;
        }
        // Unsubscribe is synchronous - we guarantee that no events are sent to
        // any unsubscribed Observer.
        unsubscribeOne(i) {
          if (this.observers === void 0 || this.observers[i] === void 0) {
            return;
          }
          delete this.observers[i];
          this.observerCount -= 1;
          if (this.observerCount === 0 && this.onNoObservers !== void 0) {
            this.onNoObservers(this);
          }
        }
        forEachObserver(fn) {
          if (this.finalized) {
            return;
          }
          for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
          }
        }
        // Call the Observer via one of it's callback function. We are careful to
        // confirm that the observe has not been unsubscribed since this asynchronous
        // function had been queued.
        sendOne(i, fn) {
          this.task.then(() => {
            if (this.observers !== void 0 && this.observers[i] !== void 0) {
              try {
                fn(this.observers[i]);
              } catch (e) {
                if (typeof console !== "undefined" && console.error) {
                  console.error(e);
                }
              }
            }
          });
        }
        close(err) {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          if (err !== void 0) {
            this.finalError = err;
          }
          this.task.then(() => {
            this.observers = void 0;
            this.onNoObservers = void 0;
          });
        }
      };
      function async(fn, onError) {
        return (...args) => {
          Promise.resolve(true).then(() => {
            fn(...args);
          }).catch((error) => {
            if (onError) {
              onError(error);
            }
          });
        };
      }
      function implementsAnyMethods(obj, methods) {
        if (typeof obj !== "object" || obj === null) {
          return false;
        }
        for (const method of methods) {
          if (method in obj && typeof obj[method] === "function") {
            return true;
          }
        }
        return false;
      }
      function noop2() {
      }
      var validateArgCount = function(fnName, minCount, maxCount, argCount) {
        let argError;
        if (argCount < minCount) {
          argError = "at least " + minCount;
        } else if (argCount > maxCount) {
          argError = maxCount === 0 ? "none" : "no more than " + maxCount;
        }
        if (argError) {
          const error = fnName + " failed: Was called with " + argCount + (argCount === 1 ? " argument." : " arguments.") + " Expects " + argError + ".";
          throw new Error(error);
        }
      };
      function errorPrefix(fnName, argName) {
        return `${fnName} failed: ${argName} argument `;
      }
      function validateNamespace(fnName, namespace, optional) {
        if (optional && !namespace) {
          return;
        }
        if (typeof namespace !== "string") {
          throw new Error(errorPrefix(fnName, "namespace") + "must be a valid firebase namespace.");
        }
      }
      function validateCallback(fnName, argumentName, callback, optional) {
        if (optional && !callback) {
          return;
        }
        if (typeof callback !== "function") {
          throw new Error(errorPrefix(fnName, argumentName) + "must be a valid function.");
        }
      }
      function validateContextObject(fnName, argumentName, context, optional) {
        if (optional && !context) {
          return;
        }
        if (typeof context !== "object" || context === null) {
          throw new Error(errorPrefix(fnName, argumentName) + "must be a valid context object.");
        }
      }
      var stringToByteArray = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c >= 55296 && c <= 56319) {
            const high = c - 55296;
            i++;
            assert2(i < str.length, "Surrogate pair missing trail surrogate.");
            const low = str.charCodeAt(i) - 56320;
            c = 65536 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      var stringLength = function(str) {
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          const c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 55296 && c <= 56319) {
            p += 4;
            i++;
          } else {
            p += 3;
          }
        }
        return p;
      };
      var uuidv4 = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      };
      var DEFAULT_INTERVAL_MILLIS = 1e3;
      var DEFAULT_BACKOFF_FACTOR = 2;
      var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
      var RANDOM_FACTOR = 0.5;
      function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
        const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
        const randomWait = Math.round(
          // A fraction of the backoff value to add/subtract.
          // Deviation: changes multiplication order to improve readability.
          RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
          // if we add or subtract.
          (Math.random() - 0.5) * 2
        );
        return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
      }
      function ordinal(i) {
        if (!Number.isFinite(i)) {
          return `${i}`;
        }
        return i + indicator(i);
      }
      function indicator(i) {
        i = Math.abs(i);
        const cent = i % 100;
        if (cent >= 10 && cent <= 20) {
          return "th";
        }
        const dec = i % 10;
        if (dec === 1) {
          return "st";
        }
        if (dec === 2) {
          return "nd";
        }
        if (dec === 3) {
          return "rd";
        }
        return "th";
      }
      function getModularInstance(service) {
        if (service && service._delegate) {
          return service._delegate;
        } else {
          return service;
        }
      }
      exports3.CONSTANTS = CONSTANTS;
      exports3.DecodeBase64StringError = DecodeBase64StringError;
      exports3.Deferred = Deferred;
      exports3.ErrorFactory = ErrorFactory;
      exports3.FirebaseError = FirebaseError;
      exports3.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
      exports3.RANDOM_FACTOR = RANDOM_FACTOR;
      exports3.Sha1 = Sha1;
      exports3.areCookiesEnabled = areCookiesEnabled;
      exports3.assert = assert2;
      exports3.assertionError = assertionError;
      exports3.async = async;
      exports3.base64 = base64;
      exports3.base64Decode = base64Decode;
      exports3.base64Encode = base64Encode;
      exports3.base64urlEncodeWithoutPadding = base64urlEncodeWithoutPadding;
      exports3.calculateBackoffMillis = calculateBackoffMillis;
      exports3.contains = contains;
      exports3.createMockUserToken = createMockUserToken;
      exports3.createSubscribe = createSubscribe;
      exports3.decode = decode2;
      exports3.deepCopy = deepCopy;
      exports3.deepEqual = deepEqual;
      exports3.deepExtend = deepExtend;
      exports3.errorPrefix = errorPrefix;
      exports3.extractQuerystring = extractQuerystring;
      exports3.getDefaultAppConfig = getDefaultAppConfig;
      exports3.getDefaultEmulatorHost = getDefaultEmulatorHost;
      exports3.getDefaultEmulatorHostnameAndPort = getDefaultEmulatorHostnameAndPort;
      exports3.getDefaults = getDefaults;
      exports3.getExperimentalSetting = getExperimentalSetting;
      exports3.getGlobal = getGlobal;
      exports3.getModularInstance = getModularInstance;
      exports3.getUA = getUA;
      exports3.isAdmin = isAdmin;
      exports3.isBrowser = isBrowser;
      exports3.isBrowserExtension = isBrowserExtension;
      exports3.isCloudflareWorker = isCloudflareWorker;
      exports3.isElectron = isElectron;
      exports3.isEmpty = isEmpty;
      exports3.isIE = isIE;
      exports3.isIndexedDBAvailable = isIndexedDBAvailable;
      exports3.isMobileCordova = isMobileCordova;
      exports3.isNode = isNode;
      exports3.isNodeSdk = isNodeSdk;
      exports3.isReactNative = isReactNative;
      exports3.isSafari = isSafari;
      exports3.isUWP = isUWP;
      exports3.isValidFormat = isValidFormat;
      exports3.isValidTimestamp = isValidTimestamp;
      exports3.isWebWorker = isWebWorker;
      exports3.issuedAtTime = issuedAtTime;
      exports3.jsonEval = jsonEval;
      exports3.map = map;
      exports3.ordinal = ordinal;
      exports3.promiseWithTimeout = promiseWithTimeout;
      exports3.querystring = querystring;
      exports3.querystringDecode = querystringDecode;
      exports3.safeGet = safeGet;
      exports3.stringLength = stringLength;
      exports3.stringToByteArray = stringToByteArray;
      exports3.stringify = stringify;
      exports3.uuidv4 = uuidv4;
      exports3.validateArgCount = validateArgCount;
      exports3.validateCallback = validateCallback;
      exports3.validateContextObject = validateContextObject;
      exports3.validateIndexedDBOpenable = validateIndexedDBOpenable;
      exports3.validateNamespace = validateNamespace;
    }
  });

  // node_modules/@firebase/component/dist/index.cjs.js
  var require_index_cjs2 = __commonJS({
    "node_modules/@firebase/component/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var util = require_index_cjs();
      var Component = (
        /** @class */
        (function() {
          function Component2(name, instanceFactory, type) {
            this.name = name;
            this.instanceFactory = instanceFactory;
            this.type = type;
            this.multipleInstances = false;
            this.serviceProps = {};
            this.instantiationMode = "LAZY";
            this.onInstanceCreated = null;
          }
          Component2.prototype.setInstantiationMode = function(mode) {
            this.instantiationMode = mode;
            return this;
          };
          Component2.prototype.setMultipleInstances = function(multipleInstances) {
            this.multipleInstances = multipleInstances;
            return this;
          };
          Component2.prototype.setServiceProps = function(props) {
            this.serviceProps = props;
            return this;
          };
          Component2.prototype.setInstanceCreatedCallback = function(callback) {
            this.onInstanceCreated = callback;
            return this;
          };
          return Component2;
        })()
      );
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var Provider = (
        /** @class */
        (function() {
          function Provider2(name, container) {
            this.name = name;
            this.container = container;
            this.component = null;
            this.instances = /* @__PURE__ */ new Map();
            this.instancesDeferred = /* @__PURE__ */ new Map();
            this.instancesOptions = /* @__PURE__ */ new Map();
            this.onInitCallbacks = /* @__PURE__ */ new Map();
          }
          Provider2.prototype.get = function(identifier) {
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            if (!this.instancesDeferred.has(normalizedIdentifier)) {
              var deferred = new util.Deferred();
              this.instancesDeferred.set(normalizedIdentifier, deferred);
              if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                try {
                  var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                  if (instance) {
                    deferred.resolve(instance);
                  }
                } catch (e) {
                }
              }
            }
            return this.instancesDeferred.get(normalizedIdentifier).promise;
          };
          Provider2.prototype.getImmediate = function(options) {
            var _a;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
            var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
              try {
                return this.getOrInitializeService({
                  instanceIdentifier: normalizedIdentifier
                });
              } catch (e) {
                if (optional) {
                  return null;
                } else {
                  throw e;
                }
              }
            } else {
              if (optional) {
                return null;
              } else {
                throw Error("Service ".concat(this.name, " is not available"));
              }
            }
          };
          Provider2.prototype.getComponent = function() {
            return this.component;
          };
          Provider2.prototype.setComponent = function(component) {
            var e_1, _a;
            if (component.name !== this.name) {
              throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
            }
            if (this.component) {
              throw Error("Component for ".concat(this.name, " has already been provided"));
            }
            this.component = component;
            if (!this.shouldAutoInitialize()) {
              return;
            }
            if (isComponentEager(component)) {
              try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
              } catch (e) {
              }
            }
            try {
              for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                  var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                  instanceDeferred.resolve(instance);
                } catch (e) {
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          };
          Provider2.prototype.clearInstance = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            this.instancesDeferred.delete(identifier);
            this.instancesOptions.delete(identifier);
            this.instances.delete(identifier);
          };
          Provider2.prototype.delete = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              var services;
              return tslib.__generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    services = Array.from(this.instances.values());
                    return [4, Promise.all(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(services.filter(function(service) {
                      return "INTERNAL" in service;
                    }).map(function(service) {
                      return service.INTERNAL.delete();
                    })), false), tslib.__read(services.filter(function(service) {
                      return "_delete" in service;
                    }).map(function(service) {
                      return service._delete();
                    })), false))];
                  case 1:
                    _a.sent();
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          Provider2.prototype.isComponentSet = function() {
            return this.component != null;
          };
          Provider2.prototype.isInitialized = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            return this.instances.has(identifier);
          };
          Provider2.prototype.getOptions = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            return this.instancesOptions.get(identifier) || {};
          };
          Provider2.prototype.initialize = function(opts) {
            var e_2, _a;
            if (opts === void 0) {
              opts = {};
            }
            var _b = opts.options, options = _b === void 0 ? {} : _b;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
            if (this.isInitialized(normalizedIdentifier)) {
              throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
            }
            if (!this.isComponentSet()) {
              throw Error("Component ".concat(this.name, " has not been registered yet"));
            }
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier,
              options
            });
            try {
              for (var _c = tslib.__values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = tslib.__read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                  instanceDeferred.resolve(instance);
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
            return instance;
          };
          Provider2.prototype.onInit = function(callback, identifier) {
            var _a;
            var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
            var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
            existingCallbacks.add(callback);
            this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
            var existingInstance = this.instances.get(normalizedIdentifier);
            if (existingInstance) {
              callback(existingInstance, normalizedIdentifier);
            }
            return function() {
              existingCallbacks.delete(callback);
            };
          };
          Provider2.prototype.invokeOnInitCallbacks = function(instance, identifier) {
            var e_3, _a;
            var callbacks = this.onInitCallbacks.get(identifier);
            if (!callbacks) {
              return;
            }
            try {
              for (var callbacks_1 = tslib.__values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                  callback(instance, identifier);
                } catch (_b) {
                }
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
          };
          Provider2.prototype.getOrInitializeService = function(_a) {
            var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
            var instance = this.instances.get(instanceIdentifier);
            if (!instance && this.component) {
              instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
              });
              this.instances.set(instanceIdentifier, instance);
              this.instancesOptions.set(instanceIdentifier, options);
              this.invokeOnInitCallbacks(instance, instanceIdentifier);
              if (this.component.onInstanceCreated) {
                try {
                  this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                } catch (_c) {
                }
              }
            }
            return instance || null;
          };
          Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
            if (identifier === void 0) {
              identifier = DEFAULT_ENTRY_NAME;
            }
            if (this.component) {
              return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
            } else {
              return identifier;
            }
          };
          Provider2.prototype.shouldAutoInitialize = function() {
            return !!this.component && this.component.instantiationMode !== "EXPLICIT";
          };
          return Provider2;
        })()
      );
      function normalizeIdentifierForFactory(identifier) {
        return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
      }
      function isComponentEager(component) {
        return component.instantiationMode === "EAGER";
      }
      var ComponentContainer = (
        /** @class */
        (function() {
          function ComponentContainer2(name) {
            this.name = name;
            this.providers = /* @__PURE__ */ new Map();
          }
          ComponentContainer2.prototype.addComponent = function(component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
            }
            provider.setComponent(component);
          };
          ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
            var provider = this.getProvider(component.name);
            if (provider.isComponentSet()) {
              this.providers.delete(component.name);
            }
            this.addComponent(component);
          };
          ComponentContainer2.prototype.getProvider = function(name) {
            if (this.providers.has(name)) {
              return this.providers.get(name);
            }
            var provider = new Provider(name, this);
            this.providers.set(name, provider);
            return provider;
          };
          ComponentContainer2.prototype.getProviders = function() {
            return Array.from(this.providers.values());
          };
          return ComponentContainer2;
        })()
      );
      exports3.Component = Component;
      exports3.ComponentContainer = ComponentContainer;
      exports3.Provider = Provider;
    }
  });

  // node_modules/@firebase/logger/dist/index.cjs.js
  var require_index_cjs3 = __commonJS({
    "node_modules/@firebase/logger/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var _a;
      var instances = [];
      exports3.LogLevel = void 0;
      (function(LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["WARN"] = 3] = "WARN";
        LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
        LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
      })(exports3.LogLevel || (exports3.LogLevel = {}));
      var levelStringToEnum = {
        "debug": exports3.LogLevel.DEBUG,
        "verbose": exports3.LogLevel.VERBOSE,
        "info": exports3.LogLevel.INFO,
        "warn": exports3.LogLevel.WARN,
        "error": exports3.LogLevel.ERROR,
        "silent": exports3.LogLevel.SILENT
      };
      var defaultLogLevel = exports3.LogLevel.INFO;
      var ConsoleMethod = (_a = {}, _a[exports3.LogLevel.DEBUG] = "log", _a[exports3.LogLevel.VERBOSE] = "log", _a[exports3.LogLevel.INFO] = "info", _a[exports3.LogLevel.WARN] = "warn", _a[exports3.LogLevel.ERROR] = "error", _a);
      var defaultLogHandler = function(instance, logType) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        if (logType < instance.logLevel) {
          return;
        }
        var now = (/* @__PURE__ */ new Date()).toISOString();
        var method = ConsoleMethod[logType];
        if (method) {
          console[method].apply(console, tslib.__spreadArray(["[".concat(now, "]  ").concat(instance.name, ":")], args, false));
        } else {
          throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
        }
      };
      var Logger = (
        /** @class */
        (function() {
          function Logger2(name) {
            this.name = name;
            this._logLevel = defaultLogLevel;
            this._logHandler = defaultLogHandler;
            this._userLogHandler = null;
            instances.push(this);
          }
          Object.defineProperty(Logger2.prototype, "logLevel", {
            get: function() {
              return this._logLevel;
            },
            set: function(val) {
              if (!(val in exports3.LogLevel)) {
                throw new TypeError('Invalid value "'.concat(val, '" assigned to `logLevel`'));
              }
              this._logLevel = val;
            },
            enumerable: false,
            configurable: true
          });
          Logger2.prototype.setLogLevel = function(val) {
            this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
          };
          Object.defineProperty(Logger2.prototype, "logHandler", {
            get: function() {
              return this._logHandler;
            },
            set: function(val) {
              if (typeof val !== "function") {
                throw new TypeError("Value assigned to `logHandler` must be a function");
              }
              this._logHandler = val;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(Logger2.prototype, "userLogHandler", {
            get: function() {
              return this._userLogHandler;
            },
            set: function(val) {
              this._userLogHandler = val;
            },
            enumerable: false,
            configurable: true
          });
          Logger2.prototype.debug = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.DEBUG], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.DEBUG], args, false));
          };
          Logger2.prototype.log = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.VERBOSE], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.VERBOSE], args, false));
          };
          Logger2.prototype.info = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.INFO], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.INFO], args, false));
          };
          Logger2.prototype.warn = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.WARN], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.WARN], args, false));
          };
          Logger2.prototype.error = function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.ERROR], args, false));
            this._logHandler.apply(this, tslib.__spreadArray([this, exports3.LogLevel.ERROR], args, false));
          };
          return Logger2;
        })()
      );
      function setLogLevel(level) {
        instances.forEach(function(inst) {
          inst.setLogLevel(level);
        });
      }
      function setUserLogHandler(logCallback, options) {
        var _loop_1 = function(instance2) {
          var customLogLevel = null;
          if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
          }
          if (logCallback === null) {
            instance2.userLogHandler = null;
          } else {
            instance2.userLogHandler = function(instance3, level) {
              var args = [];
              for (var _i2 = 2; _i2 < arguments.length; _i2++) {
                args[_i2 - 2] = arguments[_i2];
              }
              var message = args.map(function(arg) {
                if (arg == null) {
                  return null;
                } else if (typeof arg === "string") {
                  return arg;
                } else if (typeof arg === "number" || typeof arg === "boolean") {
                  return arg.toString();
                } else if (arg instanceof Error) {
                  return arg.message;
                } else {
                  try {
                    return JSON.stringify(arg);
                  } catch (ignored) {
                    return null;
                  }
                }
              }).filter(function(arg) {
                return arg;
              }).join(" ");
              if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance3.logLevel)) {
                logCallback({
                  level: exports3.LogLevel[level].toLowerCase(),
                  message,
                  args,
                  type: instance3.name
                });
              }
            };
          }
        };
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
          var instance = instances_1[_i];
          _loop_1(instance);
        }
      }
      exports3.Logger = Logger;
      exports3.setLogLevel = setLogLevel;
      exports3.setUserLogHandler = setUserLogHandler;
    }
  });

  // node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "node_modules/idb/build/wrap-idb-value.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // node_modules/idb/build/index.js
  var build_exports = {};
  __export(build_exports, {
    deleteDB: () => deleteDB,
    openDB: () => openDB,
    unwrap: () => unwrap,
    wrap: () => wrap
  });
  function openDB(name, version2, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version2);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      init_dirname();
      init_buffer2();
      init_process2();
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // node_modules/@firebase/app/dist/index.cjs.js
  var require_index_cjs4 = __commonJS({
    "node_modules/@firebase/app/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var component = require_index_cjs2();
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var logger$1 = require_index_cjs3();
      var util = require_index_cjs();
      var idb = (init_build(), __toCommonJS(build_exports));
      var PlatformLoggerServiceImpl = (
        /** @class */
        (function() {
          function PlatformLoggerServiceImpl2(container) {
            this.container = container;
          }
          PlatformLoggerServiceImpl2.prototype.getPlatformInfoString = function() {
            var providers = this.container.getProviders();
            return providers.map(function(provider) {
              if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
              } else {
                return null;
              }
            }).filter(function(logString) {
              return logString;
            }).join(" ");
          };
          return PlatformLoggerServiceImpl2;
        })()
      );
      function isVersionServiceProvider(provider) {
        var component2 = provider.getComponent();
        return (component2 === null || component2 === void 0 ? void 0 : component2.type) === "VERSION";
      }
      var name$q = "@firebase/app";
      var version$1 = "0.10.13";
      var logger = new logger$1.Logger("@firebase/app");
      var name$p = "@firebase/app-compat";
      var name$o = "@firebase/analytics-compat";
      var name$n = "@firebase/analytics";
      var name$m = "@firebase/app-check-compat";
      var name$l = "@firebase/app-check";
      var name$k = "@firebase/auth";
      var name$j = "@firebase/auth-compat";
      var name$i = "@firebase/database";
      var name$h = "@firebase/data-connect";
      var name$g = "@firebase/database-compat";
      var name$f = "@firebase/functions";
      var name$e = "@firebase/functions-compat";
      var name$d = "@firebase/installations";
      var name$c = "@firebase/installations-compat";
      var name$b = "@firebase/messaging";
      var name$a = "@firebase/messaging-compat";
      var name$9 = "@firebase/performance";
      var name$8 = "@firebase/performance-compat";
      var name$7 = "@firebase/remote-config";
      var name$6 = "@firebase/remote-config-compat";
      var name$5 = "@firebase/storage";
      var name$4 = "@firebase/storage-compat";
      var name$3 = "@firebase/firestore";
      var name$2 = "@firebase/vertexai-preview";
      var name$1 = "@firebase/firestore-compat";
      var name = "firebase";
      var version2 = "10.14.1";
      var _a$1;
      var DEFAULT_ENTRY_NAME = "[DEFAULT]";
      var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$q] = "fire-core", _a$1[name$p] = "fire-core-compat", _a$1[name$n] = "fire-analytics", _a$1[name$o] = "fire-analytics-compat", _a$1[name$l] = "fire-app-check", _a$1[name$m] = "fire-app-check-compat", _a$1[name$k] = "fire-auth", _a$1[name$j] = "fire-auth-compat", _a$1[name$i] = "fire-rtdb", _a$1[name$h] = "fire-data-connect", _a$1[name$g] = "fire-rtdb-compat", _a$1[name$f] = "fire-fn", _a$1[name$e] = "fire-fn-compat", _a$1[name$d] = "fire-iid", _a$1[name$c] = "fire-iid-compat", _a$1[name$b] = "fire-fcm", _a$1[name$a] = "fire-fcm-compat", _a$1[name$9] = "fire-perf", _a$1[name$8] = "fire-perf-compat", _a$1[name$7] = "fire-rc", _a$1[name$6] = "fire-rc-compat", _a$1[name$5] = "fire-gcs", _a$1[name$4] = "fire-gcs-compat", _a$1[name$3] = "fire-fst", _a$1[name$1] = "fire-fst-compat", _a$1[name$2] = "fire-vertex", _a$1["fire-js"] = "fire-js", _a$1[name] = "fire-js-all", _a$1);
      var _apps = /* @__PURE__ */ new Map();
      var _serverApps = /* @__PURE__ */ new Map();
      var _components = /* @__PURE__ */ new Map();
      function _addComponent(app, component2) {
        try {
          app.container.addComponent(component2);
        } catch (e) {
          logger.debug("Component ".concat(component2.name, " failed to register with FirebaseApp ").concat(app.name), e);
        }
      }
      function _addOrOverwriteComponent(app, component2) {
        app.container.addOrOverwriteComponent(component2);
      }
      function _registerComponent(component2) {
        var e_1, _a2, e_2, _b;
        var componentName = component2.name;
        if (_components.has(componentName)) {
          logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
          return false;
        }
        _components.set(componentName, component2);
        try {
          for (var _c = tslib.__values(_apps.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var app = _d.value;
            _addComponent(app, component2);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        try {
          for (var _e = tslib.__values(_serverApps.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
            var serverApp = _f.value;
            _addComponent(serverApp, component2);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return true;
      }
      function _getProvider(app, name2) {
        var heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
        if (heartbeatController) {
          void heartbeatController.triggerHeartbeat();
        }
        return app.container.getProvider(name2);
      }
      function _removeServiceInstance(app, name2, instanceIdentifier) {
        if (instanceIdentifier === void 0) {
          instanceIdentifier = DEFAULT_ENTRY_NAME;
        }
        _getProvider(app, name2).clearInstance(instanceIdentifier);
      }
      function _isFirebaseApp(obj) {
        return obj.options !== void 0;
      }
      function _isFirebaseServerApp(obj) {
        return obj.settings !== void 0;
      }
      function _clearComponents() {
        _components.clear();
      }
      var _a;
      var ERRORS = (_a = {}, _a[
        "no-app"
        /* AppError.NO_APP */
      ] = "No Firebase App '{$appName}' has been created - call initializeApp() first", _a[
        "bad-app-name"
        /* AppError.BAD_APP_NAME */
      ] = "Illegal App name: '{$appName}'", _a[
        "duplicate-app"
        /* AppError.DUPLICATE_APP */
      ] = "Firebase App named '{$appName}' already exists with different options or config", _a[
        "app-deleted"
        /* AppError.APP_DELETED */
      ] = "Firebase App named '{$appName}' already deleted", _a[
        "server-app-deleted"
        /* AppError.SERVER_APP_DELETED */
      ] = "Firebase Server App has been deleted", _a[
        "no-options"
        /* AppError.NO_OPTIONS */
      ] = "Need to provide options, when not being deployed to hosting via source.", _a[
        "invalid-app-argument"
        /* AppError.INVALID_APP_ARGUMENT */
      ] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", _a[
        "invalid-log-argument"
        /* AppError.INVALID_LOG_ARGUMENT */
      ] = "First argument to `onLog` must be null or a function.", _a[
        "idb-open"
        /* AppError.IDB_OPEN */
      ] = "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-get"
        /* AppError.IDB_GET */
      ] = "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-set"
        /* AppError.IDB_WRITE */
      ] = "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "idb-delete"
        /* AppError.IDB_DELETE */
      ] = "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.", _a[
        "finalization-registry-not-supported"
        /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
      ] = "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.", _a[
        "invalid-server-app-environment"
        /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
      ] = "FirebaseServerApp is not for use in browser environments.", _a);
      var ERROR_FACTORY = new util.ErrorFactory("app", "Firebase", ERRORS);
      var FirebaseAppImpl = (
        /** @class */
        (function() {
          function FirebaseAppImpl2(options, config2, container) {
            var _this = this;
            this._isDeleted = false;
            this._options = tslib.__assign({}, options);
            this._config = tslib.__assign({}, config2);
            this._name = config2.name;
            this._automaticDataCollectionEnabled = config2.automaticDataCollectionEnabled;
            this._container = container;
            this.container.addComponent(new component.Component(
              "app",
              function() {
                return _this;
              },
              "PUBLIC"
              /* ComponentType.PUBLIC */
            ));
          }
          Object.defineProperty(FirebaseAppImpl2.prototype, "automaticDataCollectionEnabled", {
            get: function() {
              this.checkDestroyed();
              return this._automaticDataCollectionEnabled;
            },
            set: function(val) {
              this.checkDestroyed();
              this._automaticDataCollectionEnabled = val;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "name", {
            get: function() {
              this.checkDestroyed();
              return this._name;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "options", {
            get: function() {
              this.checkDestroyed();
              return this._options;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "config", {
            get: function() {
              this.checkDestroyed();
              return this._config;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "container", {
            get: function() {
              return this._container;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FirebaseAppImpl2.prototype, "isDeleted", {
            get: function() {
              return this._isDeleted;
            },
            set: function(val) {
              this._isDeleted = val;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseAppImpl2.prototype.checkDestroyed = function() {
            if (this.isDeleted) {
              throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
            }
          };
          return FirebaseAppImpl2;
        })()
      );
      var FirebaseServerAppImpl = (
        /** @class */
        (function(_super) {
          tslib.__extends(FirebaseServerAppImpl2, _super);
          function FirebaseServerAppImpl2(options, serverConfig, name2, container) {
            var _this = this;
            var automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== void 0 ? serverConfig.automaticDataCollectionEnabled : false;
            var config2 = {
              name: name2,
              automaticDataCollectionEnabled
            };
            if (options.apiKey !== void 0) {
              _this = _super.call(this, options, config2, container) || this;
            } else {
              var appImpl = options;
              _this = _super.call(this, appImpl.options, config2, container) || this;
            }
            _this._serverConfig = tslib.__assign({ automaticDataCollectionEnabled }, serverConfig);
            _this._finalizationRegistry = null;
            if (typeof FinalizationRegistry !== "undefined") {
              _this._finalizationRegistry = new FinalizationRegistry(function() {
                _this.automaticCleanup();
              });
            }
            _this._refCount = 0;
            _this.incRefCount(_this._serverConfig.releaseOnDeref);
            _this._serverConfig.releaseOnDeref = void 0;
            serverConfig.releaseOnDeref = void 0;
            registerVersion(name$q, version$1, "serverapp");
            return _this;
          }
          FirebaseServerAppImpl2.prototype.toJSON = function() {
            return void 0;
          };
          Object.defineProperty(FirebaseServerAppImpl2.prototype, "refCount", {
            get: function() {
              return this._refCount;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseServerAppImpl2.prototype.incRefCount = function(obj) {
            if (this.isDeleted) {
              return;
            }
            this._refCount++;
            if (obj !== void 0 && this._finalizationRegistry !== null) {
              this._finalizationRegistry.register(obj, this);
            }
          };
          FirebaseServerAppImpl2.prototype.decRefCount = function() {
            if (this.isDeleted) {
              return 0;
            }
            return --this._refCount;
          };
          FirebaseServerAppImpl2.prototype.automaticCleanup = function() {
            void deleteApp(this);
          };
          Object.defineProperty(FirebaseServerAppImpl2.prototype, "settings", {
            get: function() {
              this.checkDestroyed();
              return this._serverConfig;
            },
            enumerable: false,
            configurable: true
          });
          FirebaseServerAppImpl2.prototype.checkDestroyed = function() {
            if (this.isDeleted) {
              throw ERROR_FACTORY.create(
                "server-app-deleted"
                /* AppError.SERVER_APP_DELETED */
              );
            }
          };
          return FirebaseServerAppImpl2;
        })(FirebaseAppImpl)
      );
      var SDK_VERSION = version2;
      function initializeApp(_options, rawConfig) {
        var e_1, _a2;
        if (rawConfig === void 0) {
          rawConfig = {};
        }
        var options = _options;
        if (typeof rawConfig !== "object") {
          var name_1 = rawConfig;
          rawConfig = { name: name_1 };
        }
        var config2 = tslib.__assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
        var name2 = config2.name;
        if (typeof name2 !== "string" || !name2) {
          throw ERROR_FACTORY.create("bad-app-name", {
            appName: String(name2)
          });
        }
        options || (options = util.getDefaultAppConfig());
        if (!options) {
          throw ERROR_FACTORY.create(
            "no-options"
            /* AppError.NO_OPTIONS */
          );
        }
        var existingApp = _apps.get(name2);
        if (existingApp) {
          if (util.deepEqual(options, existingApp.options) && util.deepEqual(config2, existingApp.config)) {
            return existingApp;
          } else {
            throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
          }
        }
        var container = new component.ComponentContainer(name2);
        try {
          for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        var newApp = new FirebaseAppImpl(options, config2, container);
        _apps.set(name2, newApp);
        return newApp;
      }
      function initializeServerApp(_options, _serverAppConfig) {
        var e_2, _a2;
        if (util.isBrowser() && !util.isWebWorker()) {
          throw ERROR_FACTORY.create(
            "invalid-server-app-environment"
            /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
          );
        }
        if (_serverAppConfig.automaticDataCollectionEnabled === void 0) {
          _serverAppConfig.automaticDataCollectionEnabled = false;
        }
        var appOptions;
        if (_isFirebaseApp(_options)) {
          appOptions = _options.options;
        } else {
          appOptions = _options;
        }
        var nameObj = tslib.__assign(tslib.__assign({}, _serverAppConfig), appOptions);
        if (nameObj.releaseOnDeref !== void 0) {
          delete nameObj.releaseOnDeref;
        }
        var hashCode = function(s) {
          return tslib.__spreadArray([], tslib.__read(s), false).reduce(function(hash, c) {
            return Math.imul(31, hash) + c.charCodeAt(0) | 0;
          }, 0);
        };
        if (_serverAppConfig.releaseOnDeref !== void 0) {
          if (typeof FinalizationRegistry === "undefined") {
            throw ERROR_FACTORY.create("finalization-registry-not-supported", {});
          }
        }
        var nameString = "" + hashCode(JSON.stringify(nameObj));
        var existingApp = _serverApps.get(nameString);
        if (existingApp) {
          existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
          return existingApp;
        }
        var container = new component.ComponentContainer(nameString);
        try {
          for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        var newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
        _serverApps.set(nameString, newApp);
        return newApp;
      }
      function getApp(name2) {
        if (name2 === void 0) {
          name2 = DEFAULT_ENTRY_NAME;
        }
        var app = _apps.get(name2);
        if (!app && name2 === DEFAULT_ENTRY_NAME && util.getDefaultAppConfig()) {
          return initializeApp();
        }
        if (!app) {
          throw ERROR_FACTORY.create("no-app", { appName: name2 });
        }
        return app;
      }
      function getApps() {
        return Array.from(_apps.values());
      }
      function deleteApp(app) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var cleanupProviders, name2, firebaseServerApp;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                cleanupProviders = false;
                name2 = app.name;
                if (_apps.has(name2)) {
                  cleanupProviders = true;
                  _apps.delete(name2);
                } else if (_serverApps.has(name2)) {
                  firebaseServerApp = app;
                  if (firebaseServerApp.decRefCount() <= 0) {
                    _serverApps.delete(name2);
                    cleanupProviders = true;
                  }
                }
                if (!cleanupProviders) return [3, 2];
                return [4, Promise.all(app.container.getProviders().map(function(provider) {
                  return provider.delete();
                }))];
              case 1:
                _a2.sent();
                app.isDeleted = true;
                _a2.label = 2;
              case 2:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function registerVersion(libraryKeyOrName, version3, variant) {
        var _a2;
        var library = (_a2 = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a2 !== void 0 ? _a2 : libraryKeyOrName;
        if (variant) {
          library += "-".concat(variant);
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version3.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
          var warning = [
            'Unable to register library "'.concat(library, '" with version "').concat(version3, '":')
          ];
          if (libraryMismatch) {
            warning.push('library name "'.concat(library, '" contains illegal characters (whitespace or "/")'));
          }
          if (libraryMismatch && versionMismatch) {
            warning.push("and");
          }
          if (versionMismatch) {
            warning.push('version name "'.concat(version3, '" contains illegal characters (whitespace or "/")'));
          }
          logger.warn(warning.join(" "));
          return;
        }
        _registerComponent(new component.Component(
          "".concat(library, "-version"),
          function() {
            return { library, version: version3 };
          },
          "VERSION"
          /* ComponentType.VERSION */
        ));
      }
      function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== "function") {
          throw ERROR_FACTORY.create(
            "invalid-log-argument"
            /* AppError.INVALID_LOG_ARGUMENT */
          );
        }
        logger$1.setUserLogHandler(logCallback, options);
      }
      function setLogLevel(logLevel) {
        logger$1.setLogLevel(logLevel);
      }
      var DB_NAME = "firebase-heartbeat-database";
      var DB_VERSION = 1;
      var STORE_NAME = "firebase-heartbeat-store";
      var dbPromise = null;
      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
            upgrade: function(db, oldVersion) {
              switch (oldVersion) {
                case 0:
                  try {
                    db.createObjectStore(STORE_NAME);
                  } catch (e) {
                    console.warn(e);
                  }
              }
            }
          }).catch(function(e) {
            throw ERROR_FACTORY.create("idb-open", {
              originalErrorMessage: e.message
            });
          });
        }
        return dbPromise;
      }
      function readHeartbeatsFromIndexedDB(app) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var db, tx, result, e_1, idbGetError;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 4, , 5]);
                return [4, getDbPromise()];
              case 1:
                db = _a2.sent();
                tx = db.transaction(STORE_NAME);
                return [4, tx.objectStore(STORE_NAME).get(computeKey(app))];
              case 2:
                result = _a2.sent();
                return [4, tx.done];
              case 3:
                _a2.sent();
                return [2, result];
              case 4:
                e_1 = _a2.sent();
                if (e_1 instanceof util.FirebaseError) {
                  logger.warn(e_1.message);
                } else {
                  idbGetError = ERROR_FACTORY.create("idb-get", {
                    originalErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                  });
                  logger.warn(idbGetError.message);
                }
                return [3, 5];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
        return tslib.__awaiter(this, void 0, void 0, function() {
          var db, tx, objectStore, e_2, idbGetError;
          return tslib.__generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                _a2.trys.push([0, 4, , 5]);
                return [4, getDbPromise()];
              case 1:
                db = _a2.sent();
                tx = db.transaction(STORE_NAME, "readwrite");
                objectStore = tx.objectStore(STORE_NAME);
                return [4, objectStore.put(heartbeatObject, computeKey(app))];
              case 2:
                _a2.sent();
                return [4, tx.done];
              case 3:
                _a2.sent();
                return [3, 5];
              case 4:
                e_2 = _a2.sent();
                if (e_2 instanceof util.FirebaseError) {
                  logger.warn(e_2.message);
                } else {
                  idbGetError = ERROR_FACTORY.create("idb-set", {
                    originalErrorMessage: e_2 === null || e_2 === void 0 ? void 0 : e_2.message
                  });
                  logger.warn(idbGetError.message);
                }
                return [3, 5];
              case 5:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }
      function computeKey(app) {
        return "".concat(app.name, "!").concat(app.options.appId);
      }
      var MAX_HEADER_BYTES = 1024;
      var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
      var HeartbeatServiceImpl = (
        /** @class */
        (function() {
          function HeartbeatServiceImpl2(container) {
            var _this = this;
            this.container = container;
            this._heartbeatsCache = null;
            var app = this.container.getProvider("app").getImmediate();
            this._storage = new HeartbeatStorageImpl(app);
            this._heartbeatsCachePromise = this._storage.read().then(function(result) {
              _this._heartbeatsCache = result;
              return result;
            });
          }
          HeartbeatServiceImpl2.prototype.triggerHeartbeat = function() {
            var _a2, _b;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var platformLogger, agent, date_1, _c, e_1;
              return tslib.__generator(this, function(_d) {
                switch (_d.label) {
                  case 0:
                    _d.trys.push([0, 3, , 4]);
                    platformLogger = this.container.getProvider("platform-logger").getImmediate();
                    agent = platformLogger.getPlatformInfoString();
                    date_1 = getUTCDateString();
                    if (!(((_a2 = this._heartbeatsCache) === null || _a2 === void 0 ? void 0 : _a2.heartbeats) == null)) return [3, 2];
                    _c = this;
                    return [4, this._heartbeatsCachePromise];
                  case 1:
                    _c._heartbeatsCache = _d.sent();
                    if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    _d.label = 2;
                  case 2:
                    if (this._heartbeatsCache.lastSentHeartbeatDate === date_1 || this._heartbeatsCache.heartbeats.some(function(singleDateHeartbeat) {
                      return singleDateHeartbeat.date === date_1;
                    })) {
                      return [
                        2
                        /*return*/
                      ];
                    } else {
                      this._heartbeatsCache.heartbeats.push({ date: date_1, agent });
                    }
                    this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function(singleDateHeartbeat) {
                      var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                      var now = Date.now();
                      return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                    });
                    return [2, this._storage.overwrite(this._heartbeatsCache)];
                  case 3:
                    e_1 = _d.sent();
                    logger.warn(e_1);
                    return [3, 4];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          HeartbeatServiceImpl2.prototype.getHeartbeatsHeader = function() {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var date, _b, heartbeatsToSend, unsentEntries, headerString, e_2;
              return tslib.__generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 6, , 7]);
                    if (!(this._heartbeatsCache === null)) return [3, 2];
                    return [4, this._heartbeatsCachePromise];
                  case 1:
                    _c.sent();
                    _c.label = 2;
                  case 2:
                    if (((_a2 = this._heartbeatsCache) === null || _a2 === void 0 ? void 0 : _a2.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
                      return [2, ""];
                    }
                    date = getUTCDateString();
                    _b = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _b.heartbeatsToSend, unsentEntries = _b.unsentEntries;
                    headerString = util.base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
                    this._heartbeatsCache.lastSentHeartbeatDate = date;
                    if (!(unsentEntries.length > 0)) return [3, 4];
                    this._heartbeatsCache.heartbeats = unsentEntries;
                    return [4, this._storage.overwrite(this._heartbeatsCache)];
                  case 3:
                    _c.sent();
                    return [3, 5];
                  case 4:
                    this._heartbeatsCache.heartbeats = [];
                    void this._storage.overwrite(this._heartbeatsCache);
                    _c.label = 5;
                  case 5:
                    return [2, headerString];
                  case 6:
                    e_2 = _c.sent();
                    logger.warn(e_2);
                    return [2, ""];
                  case 7:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          return HeartbeatServiceImpl2;
        })()
      );
      function getUTCDateString() {
        var today = /* @__PURE__ */ new Date();
        return today.toISOString().substring(0, 10);
      }
      function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
        var e_3, _a2;
        if (maxSize === void 0) {
          maxSize = MAX_HEADER_BYTES;
        }
        var heartbeatsToSend = [];
        var unsentEntries = heartbeatsCache.slice();
        var _loop_1 = function(singleDateHeartbeat2) {
          var heartbeatEntry = heartbeatsToSend.find(function(hb) {
            return hb.agent === singleDateHeartbeat2.agent;
          });
          if (!heartbeatEntry) {
            heartbeatsToSend.push({
              agent: singleDateHeartbeat2.agent,
              dates: [singleDateHeartbeat2.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
              heartbeatsToSend.pop();
              return "break";
            }
          } else {
            heartbeatEntry.dates.push(singleDateHeartbeat2.date);
            if (countBytes(heartbeatsToSend) > maxSize) {
              heartbeatEntry.dates.pop();
              return "break";
            }
          }
          unsentEntries = unsentEntries.slice(1);
        };
        try {
          for (var heartbeatsCache_1 = tslib.__values(heartbeatsCache), heartbeatsCache_1_1 = heartbeatsCache_1.next(); !heartbeatsCache_1_1.done; heartbeatsCache_1_1 = heartbeatsCache_1.next()) {
            var singleDateHeartbeat = heartbeatsCache_1_1.value;
            var state_1 = _loop_1(singleDateHeartbeat);
            if (state_1 === "break")
              break;
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (heartbeatsCache_1_1 && !heartbeatsCache_1_1.done && (_a2 = heartbeatsCache_1.return)) _a2.call(heartbeatsCache_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return {
          heartbeatsToSend,
          unsentEntries
        };
      }
      var HeartbeatStorageImpl = (
        /** @class */
        (function() {
          function HeartbeatStorageImpl2(app) {
            this.app = app;
            this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
          }
          HeartbeatStorageImpl2.prototype.runIndexedDBEnvironmentCheck = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              return tslib.__generator(this, function(_a2) {
                if (!util.isIndexedDBAvailable()) {
                  return [2, false];
                } else {
                  return [2, util.validateIndexedDBOpenable().then(function() {
                    return true;
                  }).catch(function() {
                    return false;
                  })];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.read = function() {
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, idbHeartbeatObject;
              return tslib.__generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _a2.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [2, { heartbeats: [] }];
                  case 2:
                    return [4, readHeartbeatsFromIndexedDB(this.app)];
                  case 3:
                    idbHeartbeatObject = _a2.sent();
                    if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                      return [2, idbHeartbeatObject];
                    } else {
                      return [2, { heartbeats: [] }];
                    }
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.overwrite = function(heartbeatsObject) {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, existingHeartbeatsObject;
              return tslib.__generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _b.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [
                      2
                      /*return*/
                    ];
                  case 2:
                    return [4, this.read()];
                  case 3:
                    existingHeartbeatsObject = _b.sent();
                    return [2, writeHeartbeatsToIndexedDB(this.app, {
                      lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
                      heartbeats: heartbeatsObject.heartbeats
                    })];
                }
              });
            });
          };
          HeartbeatStorageImpl2.prototype.add = function(heartbeatsObject) {
            var _a2;
            return tslib.__awaiter(this, void 0, void 0, function() {
              var canUseIndexedDB, existingHeartbeatsObject;
              return tslib.__generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this._canUseIndexedDBPromise];
                  case 1:
                    canUseIndexedDB = _b.sent();
                    if (!!canUseIndexedDB) return [3, 2];
                    return [
                      2
                      /*return*/
                    ];
                  case 2:
                    return [4, this.read()];
                  case 3:
                    existingHeartbeatsObject = _b.sent();
                    return [2, writeHeartbeatsToIndexedDB(this.app, {
                      lastSentHeartbeatDate: (_a2 = heartbeatsObject.lastSentHeartbeatDate) !== null && _a2 !== void 0 ? _a2 : existingHeartbeatsObject.lastSentHeartbeatDate,
                      heartbeats: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(existingHeartbeatsObject.heartbeats), false), tslib.__read(heartbeatsObject.heartbeats), false)
                    })];
                }
              });
            });
          };
          return HeartbeatStorageImpl2;
        })()
      );
      function countBytes(heartbeatsCache) {
        return util.base64urlEncodeWithoutPadding(
          // heartbeatsCache wrapper properties
          JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
        ).length;
      }
      function registerCoreComponents(variant) {
        _registerComponent(new component.Component(
          "platform-logger",
          function(container) {
            return new PlatformLoggerServiceImpl(container);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ));
        _registerComponent(new component.Component(
          "heartbeat",
          function(container) {
            return new HeartbeatServiceImpl(container);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ));
        registerVersion(name$q, version$1, variant);
        registerVersion(name$q, version$1, "cjs5");
        registerVersion("fire-js", "");
      }
      registerCoreComponents("node");
      Object.defineProperty(exports3, "FirebaseError", {
        enumerable: true,
        get: function() {
          return util.FirebaseError;
        }
      });
      exports3.SDK_VERSION = SDK_VERSION;
      exports3._DEFAULT_ENTRY_NAME = DEFAULT_ENTRY_NAME;
      exports3._addComponent = _addComponent;
      exports3._addOrOverwriteComponent = _addOrOverwriteComponent;
      exports3._apps = _apps;
      exports3._clearComponents = _clearComponents;
      exports3._components = _components;
      exports3._getProvider = _getProvider;
      exports3._isFirebaseApp = _isFirebaseApp;
      exports3._isFirebaseServerApp = _isFirebaseServerApp;
      exports3._registerComponent = _registerComponent;
      exports3._removeServiceInstance = _removeServiceInstance;
      exports3._serverApps = _serverApps;
      exports3.deleteApp = deleteApp;
      exports3.getApp = getApp;
      exports3.getApps = getApps;
      exports3.initializeApp = initializeApp;
      exports3.initializeServerApp = initializeServerApp;
      exports3.onLog = onLog;
      exports3.registerVersion = registerVersion;
      exports3.setLogLevel = setLogLevel;
    }
  });

  // node_modules/firebase/app/dist/index.cjs.js
  var require_index_cjs5 = __commonJS({
    "node_modules/firebase/app/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var app = require_index_cjs4();
      var name = "firebase";
      var version2 = "10.14.1";
      app.registerVersion(name, version2, "app");
      Object.keys(app).forEach(function(k) {
        if (k !== "default" && !exports3.hasOwnProperty(k)) Object.defineProperty(exports3, k, {
          enumerable: true,
          get: function() {
            return app[k];
          }
        });
      });
    }
  });

  // node_modules/@firebase/auth/dist/browser-cjs/index-e2e765e6.js
  var require_index_e2e765e6 = __commonJS({
    "node_modules/@firebase/auth/dist/browser-cjs/index-e2e765e6.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var app = require_index_cjs4();
      var util = require_index_cjs();
      var logger = require_index_cjs3();
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var component = require_index_cjs2();
      var FactorId = {
        /** Phone as second factor */
        PHONE: "phone",
        TOTP: "totp"
      };
      var ProviderId = {
        /** Facebook provider ID */
        FACEBOOK: "facebook.com",
        /** GitHub provider ID */
        GITHUB: "github.com",
        /** Google provider ID */
        GOOGLE: "google.com",
        /** Password provider */
        PASSWORD: "password",
        /** Phone provider */
        PHONE: "phone",
        /** Twitter provider ID */
        TWITTER: "twitter.com"
      };
      var SignInMethod = {
        /** Email link sign in method */
        EMAIL_LINK: "emailLink",
        /** Email/password sign in method */
        EMAIL_PASSWORD: "password",
        /** Facebook sign in method */
        FACEBOOK: "facebook.com",
        /** GitHub sign in method */
        GITHUB: "github.com",
        /** Google sign in method */
        GOOGLE: "google.com",
        /** Phone sign in method */
        PHONE: "phone",
        /** Twitter sign in method */
        TWITTER: "twitter.com"
      };
      var OperationType = {
        /** Operation involving linking an additional provider to an already signed-in user. */
        LINK: "link",
        /** Operation involving using a provider to reauthenticate an already signed-in user. */
        REAUTHENTICATE: "reauthenticate",
        /** Operation involving signing in a user. */
        SIGN_IN: "signIn"
      };
      var ActionCodeOperation = {
        /** The email link sign-in action. */
        EMAIL_SIGNIN: "EMAIL_SIGNIN",
        /** The password reset action. */
        PASSWORD_RESET: "PASSWORD_RESET",
        /** The email revocation action. */
        RECOVER_EMAIL: "RECOVER_EMAIL",
        /** The revert second factor addition email action. */
        REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
        /** The revert second factor addition email action. */
        VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
        /** The email verification action. */
        VERIFY_EMAIL: "VERIFY_EMAIL"
      };
      function _debugErrorMap() {
        return {
          [
            "admin-restricted-operation"
            /* AuthErrorCode.ADMIN_ONLY_OPERATION */
          ]: "This operation is restricted to administrators only.",
          [
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          ]: "",
          [
            "app-not-authorized"
            /* AuthErrorCode.APP_NOT_AUTHORIZED */
          ]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          [
            "app-not-installed"
            /* AuthErrorCode.APP_NOT_INSTALLED */
          ]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          [
            "captcha-check-failed"
            /* AuthErrorCode.CAPTCHA_CHECK_FAILED */
          ]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          [
            "code-expired"
            /* AuthErrorCode.CODE_EXPIRED */
          ]: "The SMS code has expired. Please re-send the verification code to try again.",
          [
            "cordova-not-ready"
            /* AuthErrorCode.CORDOVA_NOT_READY */
          ]: "Cordova framework is not ready.",
          [
            "cors-unsupported"
            /* AuthErrorCode.CORS_UNSUPPORTED */
          ]: "This browser is not supported.",
          [
            "credential-already-in-use"
            /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
          ]: "This credential is already associated with a different user account.",
          [
            "custom-token-mismatch"
            /* AuthErrorCode.CREDENTIAL_MISMATCH */
          ]: "The custom token corresponds to a different audience.",
          [
            "requires-recent-login"
            /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
          ]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          [
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
          [
            "dynamic-link-not-activated"
            /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */
          ]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          [
            "email-change-needs-verification"
            /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */
          ]: "Multi-factor users must always have a verified email.",
          [
            "email-already-in-use"
            /* AuthErrorCode.EMAIL_EXISTS */
          ]: "The email address is already in use by another account.",
          [
            "emulator-config-failed"
            /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
          ]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
          [
            "expired-action-code"
            /* AuthErrorCode.EXPIRED_OOB_CODE */
          ]: "The action code has expired.",
          [
            "cancelled-popup-request"
            /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
          ]: "This operation has been cancelled due to another conflicting popup being opened.",
          [
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          ]: "An internal AuthError has occurred.",
          [
            "invalid-app-credential"
            /* AuthErrorCode.INVALID_APP_CREDENTIAL */
          ]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          [
            "invalid-app-id"
            /* AuthErrorCode.INVALID_APP_ID */
          ]: "The mobile app identifier is not registered for the current project.",
          [
            "invalid-user-token"
            /* AuthErrorCode.INVALID_AUTH */
          ]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          [
            "invalid-auth-event"
            /* AuthErrorCode.INVALID_AUTH_EVENT */
          ]: "An internal AuthError has occurred.",
          [
            "invalid-verification-code"
            /* AuthErrorCode.INVALID_CODE */
          ]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
          [
            "invalid-continue-uri"
            /* AuthErrorCode.INVALID_CONTINUE_URI */
          ]: "The continue URL provided in the request is invalid.",
          [
            "invalid-cordova-configuration"
            /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
          ]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          [
            "invalid-custom-token"
            /* AuthErrorCode.INVALID_CUSTOM_TOKEN */
          ]: "The custom token format is incorrect. Please check the documentation.",
          [
            "invalid-dynamic-link-domain"
            /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
          ]: "The provided dynamic link domain is not configured or authorized for the current project.",
          [
            "invalid-email"
            /* AuthErrorCode.INVALID_EMAIL */
          ]: "The email address is badly formatted.",
          [
            "invalid-emulator-scheme"
            /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
          ]: "Emulator URL must start with a valid scheme (http:// or https://).",
          [
            "invalid-api-key"
            /* AuthErrorCode.INVALID_API_KEY */
          ]: "Your API key is invalid, please check you have copied it correctly.",
          [
            "invalid-cert-hash"
            /* AuthErrorCode.INVALID_CERT_HASH */
          ]: "The SHA-1 certificate hash provided is invalid.",
          [
            "invalid-credential"
            /* AuthErrorCode.INVALID_CREDENTIAL */
          ]: "The supplied auth credential is incorrect, malformed or has expired.",
          [
            "invalid-message-payload"
            /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */
          ]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          [
            "invalid-multi-factor-session"
            /* AuthErrorCode.INVALID_MFA_SESSION */
          ]: "The request does not contain a valid proof of first factor successful sign-in.",
          [
            "invalid-oauth-provider"
            /* AuthErrorCode.INVALID_OAUTH_PROVIDER */
          ]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          [
            "invalid-oauth-client-id"
            /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */
          ]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
          [
            "unauthorized-domain"
            /* AuthErrorCode.INVALID_ORIGIN */
          ]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          [
            "invalid-action-code"
            /* AuthErrorCode.INVALID_OOB_CODE */
          ]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          [
            "wrong-password"
            /* AuthErrorCode.INVALID_PASSWORD */
          ]: "The password is invalid or the user does not have a password.",
          [
            "invalid-persistence-type"
            /* AuthErrorCode.INVALID_PERSISTENCE */
          ]: "The specified persistence type is invalid. It can only be local, session or none.",
          [
            "invalid-phone-number"
            /* AuthErrorCode.INVALID_PHONE_NUMBER */
          ]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          [
            "invalid-provider-id"
            /* AuthErrorCode.INVALID_PROVIDER_ID */
          ]: "The specified provider ID is invalid.",
          [
            "invalid-recipient-email"
            /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */
          ]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          [
            "invalid-sender"
            /* AuthErrorCode.INVALID_SENDER */
          ]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          [
            "invalid-verification-id"
            /* AuthErrorCode.INVALID_SESSION_INFO */
          ]: "The verification ID used to create the phone auth credential is invalid.",
          [
            "invalid-tenant-id"
            /* AuthErrorCode.INVALID_TENANT_ID */
          ]: "The Auth instance's tenant ID is invalid.",
          [
            "login-blocked"
            /* AuthErrorCode.LOGIN_BLOCKED */
          ]: "Login blocked by user-provided method: {$originalMessage}",
          [
            "missing-android-pkg-name"
            /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
          ]: "An Android Package Name must be provided if the Android App is required to be installed.",
          [
            "auth-domain-config-required"
            /* AuthErrorCode.MISSING_AUTH_DOMAIN */
          ]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          [
            "missing-app-credential"
            /* AuthErrorCode.MISSING_APP_CREDENTIAL */
          ]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          [
            "missing-verification-code"
            /* AuthErrorCode.MISSING_CODE */
          ]: "The phone auth credential was created with an empty SMS verification code.",
          [
            "missing-continue-uri"
            /* AuthErrorCode.MISSING_CONTINUE_URI */
          ]: "A continue URL must be provided in the request.",
          [
            "missing-iframe-start"
            /* AuthErrorCode.MISSING_IFRAME_START */
          ]: "An internal AuthError has occurred.",
          [
            "missing-ios-bundle-id"
            /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
          ]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
          [
            "missing-or-invalid-nonce"
            /* AuthErrorCode.MISSING_OR_INVALID_NONCE */
          ]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          [
            "missing-password"
            /* AuthErrorCode.MISSING_PASSWORD */
          ]: "A non-empty password must be provided",
          [
            "missing-multi-factor-info"
            /* AuthErrorCode.MISSING_MFA_INFO */
          ]: "No second factor identifier is provided.",
          [
            "missing-multi-factor-session"
            /* AuthErrorCode.MISSING_MFA_SESSION */
          ]: "The request is missing proof of first factor successful sign-in.",
          [
            "missing-phone-number"
            /* AuthErrorCode.MISSING_PHONE_NUMBER */
          ]: "To send verification codes, provide a phone number for the recipient.",
          [
            "missing-verification-id"
            /* AuthErrorCode.MISSING_SESSION_INFO */
          ]: "The phone auth credential was created with an empty verification ID.",
          [
            "app-deleted"
            /* AuthErrorCode.MODULE_DESTROYED */
          ]: "This instance of FirebaseApp has been deleted.",
          [
            "multi-factor-info-not-found"
            /* AuthErrorCode.MFA_INFO_NOT_FOUND */
          ]: "The user does not have a second factor matching the identifier provided.",
          [
            "multi-factor-auth-required"
            /* AuthErrorCode.MFA_REQUIRED */
          ]: "Proof of ownership of a second factor is required to complete sign-in.",
          [
            "account-exists-with-different-credential"
            /* AuthErrorCode.NEED_CONFIRMATION */
          ]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          [
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
          [
            "no-auth-event"
            /* AuthErrorCode.NO_AUTH_EVENT */
          ]: "An internal AuthError has occurred.",
          [
            "no-such-provider"
            /* AuthErrorCode.NO_SUCH_PROVIDER */
          ]: "User was not linked to an account with the given provider.",
          [
            "null-user"
            /* AuthErrorCode.NULL_USER */
          ]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
          [
            "operation-not-allowed"
            /* AuthErrorCode.OPERATION_NOT_ALLOWED */
          ]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          [
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          [
            "popup-blocked"
            /* AuthErrorCode.POPUP_BLOCKED */
          ]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          [
            "popup-closed-by-user"
            /* AuthErrorCode.POPUP_CLOSED_BY_USER */
          ]: "The popup has been closed by the user before finalizing the operation.",
          [
            "provider-already-linked"
            /* AuthErrorCode.PROVIDER_ALREADY_LINKED */
          ]: "User can only be linked to one identity for the given provider.",
          [
            "quota-exceeded"
            /* AuthErrorCode.QUOTA_EXCEEDED */
          ]: "The project's quota for this operation has been exceeded.",
          [
            "redirect-cancelled-by-user"
            /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
          ]: "The redirect operation has been cancelled by the user before finalizing.",
          [
            "redirect-operation-pending"
            /* AuthErrorCode.REDIRECT_OPERATION_PENDING */
          ]: "A redirect sign-in operation is already pending.",
          [
            "rejected-credential"
            /* AuthErrorCode.REJECTED_CREDENTIAL */
          ]: "The request contains malformed or mismatching credentials.",
          [
            "second-factor-already-in-use"
            /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */
          ]: "The second factor is already enrolled on this account.",
          [
            "maximum-second-factor-count-exceeded"
            /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */
          ]: "The maximum allowed number of second factors on a user has been exceeded.",
          [
            "tenant-id-mismatch"
            /* AuthErrorCode.TENANT_ID_MISMATCH */
          ]: "The provided tenant ID does not match the Auth instance's tenant ID",
          [
            "timeout"
            /* AuthErrorCode.TIMEOUT */
          ]: "The operation has timed out.",
          [
            "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
          ]: "The user's credential is no longer valid. The user must sign in again.",
          [
            "too-many-requests"
            /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
          ]: "We have blocked all requests from this device due to unusual activity. Try again later.",
          [
            "unauthorized-continue-uri"
            /* AuthErrorCode.UNAUTHORIZED_DOMAIN */
          ]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          [
            "unsupported-first-factor"
            /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */
          ]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          [
            "unsupported-persistence-type"
            /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */
          ]: "The current environment does not support the specified persistence type.",
          [
            "unsupported-tenant-operation"
            /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */
          ]: "This operation is not supported in a multi-tenant context.",
          [
            "unverified-email"
            /* AuthErrorCode.UNVERIFIED_EMAIL */
          ]: "The operation requires a verified email.",
          [
            "user-cancelled"
            /* AuthErrorCode.USER_CANCELLED */
          ]: "The user did not grant your application the permissions it requested.",
          [
            "user-not-found"
            /* AuthErrorCode.USER_DELETED */
          ]: "There is no user record corresponding to this identifier. The user may have been deleted.",
          [
            "user-disabled"
            /* AuthErrorCode.USER_DISABLED */
          ]: "The user account has been disabled by an administrator.",
          [
            "user-mismatch"
            /* AuthErrorCode.USER_MISMATCH */
          ]: "The supplied credentials do not correspond to the previously signed in user.",
          [
            "user-signed-out"
            /* AuthErrorCode.USER_SIGNED_OUT */
          ]: "",
          [
            "weak-password"
            /* AuthErrorCode.WEAK_PASSWORD */
          ]: "The password must be 6 characters long or more.",
          [
            "web-storage-unsupported"
            /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
          ]: "This browser is not supported or 3rd party cookies and data may be disabled.",
          [
            "already-initialized"
            /* AuthErrorCode.ALREADY_INITIALIZED */
          ]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
          [
            "missing-recaptcha-token"
            /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
          ]: "The reCAPTCHA token is missing when sending request to the backend.",
          [
            "invalid-recaptcha-token"
            /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */
          ]: "The reCAPTCHA token is invalid when sending request to the backend.",
          [
            "invalid-recaptcha-action"
            /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */
          ]: "The reCAPTCHA action is invalid when sending request to the backend.",
          [
            "recaptcha-not-enabled"
            /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */
          ]: "reCAPTCHA Enterprise integration is not enabled for this project.",
          [
            "missing-client-type"
            /* AuthErrorCode.MISSING_CLIENT_TYPE */
          ]: "The reCAPTCHA client type is missing when sending request to the backend.",
          [
            "missing-recaptcha-version"
            /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */
          ]: "The reCAPTCHA version is missing when sending request to the backend.",
          [
            "invalid-req-type"
            /* AuthErrorCode.INVALID_REQ_TYPE */
          ]: "Invalid request parameters.",
          [
            "invalid-recaptcha-version"
            /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */
          ]: "The reCAPTCHA version is invalid when sending request to the backend.",
          [
            "unsupported-password-policy-schema-version"
            /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */
          ]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
          [
            "password-does-not-meet-requirements"
            /* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
          ]: "The password does not meet the requirements."
        };
      }
      function _prodErrorMap() {
        return {
          [
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        };
      }
      var debugErrorMap = _debugErrorMap;
      var prodErrorMap = _prodErrorMap;
      var _DEFAULT_AUTH_ERROR_FACTORY = new util.ErrorFactory("auth", "Firebase", _prodErrorMap());
      var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
        ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
        ARGUMENT_ERROR: "auth/argument-error",
        APP_NOT_AUTHORIZED: "auth/app-not-authorized",
        APP_NOT_INSTALLED: "auth/app-not-installed",
        CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
        CODE_EXPIRED: "auth/code-expired",
        CORDOVA_NOT_READY: "auth/cordova-not-ready",
        CORS_UNSUPPORTED: "auth/cors-unsupported",
        CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
        CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
        DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
        DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
        EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
        EMAIL_EXISTS: "auth/email-already-in-use",
        EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
        EXPIRED_OOB_CODE: "auth/expired-action-code",
        EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
        INTERNAL_ERROR: "auth/internal-error",
        INVALID_API_KEY: "auth/invalid-api-key",
        INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
        INVALID_APP_ID: "auth/invalid-app-id",
        INVALID_AUTH: "auth/invalid-user-token",
        INVALID_AUTH_EVENT: "auth/invalid-auth-event",
        INVALID_CERT_HASH: "auth/invalid-cert-hash",
        INVALID_CODE: "auth/invalid-verification-code",
        INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
        INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
        INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
        INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
        INVALID_EMAIL: "auth/invalid-email",
        INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
        INVALID_IDP_RESPONSE: "auth/invalid-credential",
        INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
        INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
        INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
        INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
        INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
        INVALID_OOB_CODE: "auth/invalid-action-code",
        INVALID_ORIGIN: "auth/unauthorized-domain",
        INVALID_PASSWORD: "auth/wrong-password",
        INVALID_PERSISTENCE: "auth/invalid-persistence-type",
        INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
        INVALID_PROVIDER_ID: "auth/invalid-provider-id",
        INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
        INVALID_SENDER: "auth/invalid-sender",
        INVALID_SESSION_INFO: "auth/invalid-verification-id",
        INVALID_TENANT_ID: "auth/invalid-tenant-id",
        MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
        MFA_REQUIRED: "auth/multi-factor-auth-required",
        MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
        MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
        MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
        MISSING_CODE: "auth/missing-verification-code",
        MISSING_CONTINUE_URI: "auth/missing-continue-uri",
        MISSING_IFRAME_START: "auth/missing-iframe-start",
        MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
        MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
        MISSING_MFA_INFO: "auth/missing-multi-factor-info",
        MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
        MISSING_PHONE_NUMBER: "auth/missing-phone-number",
        MISSING_SESSION_INFO: "auth/missing-verification-id",
        MODULE_DESTROYED: "auth/app-deleted",
        NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
        NETWORK_REQUEST_FAILED: "auth/network-request-failed",
        NULL_USER: "auth/null-user",
        NO_AUTH_EVENT: "auth/no-auth-event",
        NO_SUCH_PROVIDER: "auth/no-such-provider",
        OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
        OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
        POPUP_BLOCKED: "auth/popup-blocked",
        POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
        PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
        QUOTA_EXCEEDED: "auth/quota-exceeded",
        REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
        REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
        REJECTED_CREDENTIAL: "auth/rejected-credential",
        SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
        TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
        TIMEOUT: "auth/timeout",
        TOKEN_EXPIRED: "auth/user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
        UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
        UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
        UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
        UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
        UNVERIFIED_EMAIL: "auth/unverified-email",
        USER_CANCELLED: "auth/user-cancelled",
        USER_DELETED: "auth/user-not-found",
        USER_DISABLED: "auth/user-disabled",
        USER_MISMATCH: "auth/user-mismatch",
        USER_SIGNED_OUT: "auth/user-signed-out",
        WEAK_PASSWORD: "auth/weak-password",
        WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
        ALREADY_INITIALIZED: "auth/already-initialized",
        RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "auth/missing-client-type",
        MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
        INVALID_REQ_TYPE: "auth/invalid-req-type"
      };
      var logClient = new logger.Logger("@firebase/auth");
      function _logWarn(msg, ...args) {
        if (logClient.logLevel <= logger.LogLevel.WARN) {
          logClient.warn(`Auth (${app.SDK_VERSION}): ${msg}`, ...args);
        }
      }
      function _logError(msg, ...args) {
        if (logClient.logLevel <= logger.LogLevel.ERROR) {
          logClient.error(`Auth (${app.SDK_VERSION}): ${msg}`, ...args);
        }
      }
      function _fail(authOrCode, ...rest) {
        throw createErrorInternal(authOrCode, ...rest);
      }
      function _createError(authOrCode, ...rest) {
        return createErrorInternal(authOrCode, ...rest);
      }
      function _errorWithCustomMessage(auth, code, message) {
        const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
        const factory = new util.ErrorFactory("auth", "Firebase", errorMap);
        return factory.create(code, {
          appName: auth.name
        });
      }
      function _serverAppCurrentUserOperationNotSupportedError(auth) {
        return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
      }
      function _assertInstanceOf(auth, object, instance) {
        const constructorInstance = instance;
        if (!(object instanceof constructorInstance)) {
          if (constructorInstance.name !== object.constructor.name) {
            _fail(
              auth,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
          }
          throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
        }
      }
      function createErrorInternal(authOrCode, ...rest) {
        if (typeof authOrCode !== "string") {
          const code = rest[0];
          const fullParams = [...rest.slice(1)];
          if (fullParams[0]) {
            fullParams[0].appName = authOrCode.name;
          }
          return authOrCode._errorFactory.create(code, ...fullParams);
        }
        return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
      }
      function _assert(assertion, authOrCode, ...rest) {
        if (!assertion) {
          throw createErrorInternal(authOrCode, ...rest);
        }
      }
      function debugFail(failure) {
        const message = `INTERNAL ASSERTION FAILED: ` + failure;
        _logError(message);
        throw new Error(message);
      }
      function debugAssert(assertion, message) {
        if (!assertion) {
          debugFail(message);
        }
      }
      function _getCurrentUrl() {
        var _a;
        return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
      }
      function _isHttpOrHttps() {
        return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
      }
      function _getCurrentScheme() {
        var _a;
        return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
      }
      function _isOnline() {
        if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
        // This is especially true for Cordova apps which have unreliable
        // navigator.onLine behavior unless cordova-plugin-network-information is
        // installed which overwrites the native navigator.onLine value and
        // defines navigator.connection.
        (_isHttpOrHttps() || util.isBrowserExtension() || "connection" in navigator)) {
          return navigator.onLine;
        }
        return true;
      }
      function _getUserLanguage() {
        if (typeof navigator === "undefined") {
          return null;
        }
        const navigatorLanguage = navigator;
        return (
          // Most reliable, but only supported in Chrome/Firefox.
          navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
          // UI, not the language set in browser settings.
          navigatorLanguage.language || // Couldn't determine language.
          null
        );
      }
      var Delay = class {
        constructor(shortDelay, longDelay) {
          this.shortDelay = shortDelay;
          this.longDelay = longDelay;
          debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
          this.isMobile = util.isMobileCordova() || util.isReactNative();
        }
        get() {
          if (!_isOnline()) {
            return Math.min(5e3, this.shortDelay);
          }
          return this.isMobile ? this.longDelay : this.shortDelay;
        }
      };
      function _emulatorUrl(config2, path) {
        debugAssert(config2.emulator, "Emulator should always be set here");
        const { url } = config2.emulator;
        if (!path) {
          return url;
        }
        return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
      }
      var FetchProvider = class {
        static initialize(fetchImpl, headersImpl, responseImpl) {
          this.fetchImpl = fetchImpl;
          if (headersImpl) {
            this.headersImpl = headersImpl;
          }
          if (responseImpl) {
            this.responseImpl = responseImpl;
          }
        }
        static fetch() {
          if (this.fetchImpl) {
            return this.fetchImpl;
          }
          if (typeof self !== "undefined" && "fetch" in self) {
            return self.fetch;
          }
          if (typeof globalThis !== "undefined" && globalThis.fetch) {
            return globalThis.fetch;
          }
          if (typeof fetch !== "undefined") {
            return fetch;
          }
          debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static headers() {
          if (this.headersImpl) {
            return this.headersImpl;
          }
          if (typeof self !== "undefined" && "Headers" in self) {
            return self.Headers;
          }
          if (typeof globalThis !== "undefined" && globalThis.Headers) {
            return globalThis.Headers;
          }
          if (typeof Headers !== "undefined") {
            return Headers;
          }
          debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static response() {
          if (this.responseImpl) {
            return this.responseImpl;
          }
          if (typeof self !== "undefined" && "Response" in self) {
            return self.Response;
          }
          if (typeof globalThis !== "undefined" && globalThis.Response) {
            return globalThis.Response;
          }
          if (typeof Response !== "undefined") {
            return Response;
          }
          debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
      };
      var SERVER_ERROR_MAP = {
        // Custom token errors.
        [
          "CREDENTIAL_MISMATCH"
          /* ServerError.CREDENTIAL_MISMATCH */
        ]: "custom-token-mismatch",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CUSTOM_TOKEN"
          /* ServerError.MISSING_CUSTOM_TOKEN */
        ]: "internal-error",
        // Create Auth URI errors.
        [
          "INVALID_IDENTIFIER"
          /* ServerError.INVALID_IDENTIFIER */
        ]: "invalid-email",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_CONTINUE_URI"
          /* ServerError.MISSING_CONTINUE_URI */
        ]: "internal-error",
        // Sign in with email and password errors (some apply to sign up too).
        [
          "INVALID_PASSWORD"
          /* ServerError.INVALID_PASSWORD */
        ]: "wrong-password",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_PASSWORD"
          /* ServerError.MISSING_PASSWORD */
        ]: "missing-password",
        // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
        // invalid.
        [
          "INVALID_LOGIN_CREDENTIALS"
          /* ServerError.INVALID_LOGIN_CREDENTIALS */
        ]: "invalid-credential",
        // Sign up with email and password errors.
        [
          "EMAIL_EXISTS"
          /* ServerError.EMAIL_EXISTS */
        ]: "email-already-in-use",
        [
          "PASSWORD_LOGIN_DISABLED"
          /* ServerError.PASSWORD_LOGIN_DISABLED */
        ]: "operation-not-allowed",
        // Verify assertion for sign in with credential errors:
        [
          "INVALID_IDP_RESPONSE"
          /* ServerError.INVALID_IDP_RESPONSE */
        ]: "invalid-credential",
        [
          "INVALID_PENDING_TOKEN"
          /* ServerError.INVALID_PENDING_TOKEN */
        ]: "invalid-credential",
        [
          "FEDERATED_USER_ID_ALREADY_LINKED"
          /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
        ]: "credential-already-in-use",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_REQ_TYPE"
          /* ServerError.MISSING_REQ_TYPE */
        ]: "internal-error",
        // Send Password reset email errors:
        [
          "EMAIL_NOT_FOUND"
          /* ServerError.EMAIL_NOT_FOUND */
        ]: "user-not-found",
        [
          "RESET_PASSWORD_EXCEED_LIMIT"
          /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
        ]: "too-many-requests",
        [
          "EXPIRED_OOB_CODE"
          /* ServerError.EXPIRED_OOB_CODE */
        ]: "expired-action-code",
        [
          "INVALID_OOB_CODE"
          /* ServerError.INVALID_OOB_CODE */
        ]: "invalid-action-code",
        // This can only happen if the SDK sends a bad request.
        [
          "MISSING_OOB_CODE"
          /* ServerError.MISSING_OOB_CODE */
        ]: "internal-error",
        // Operations that require ID token in request:
        [
          "CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
          /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
        ]: "requires-recent-login",
        [
          "INVALID_ID_TOKEN"
          /* ServerError.INVALID_ID_TOKEN */
        ]: "invalid-user-token",
        [
          "TOKEN_EXPIRED"
          /* ServerError.TOKEN_EXPIRED */
        ]: "user-token-expired",
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-token-expired",
        // Other errors.
        [
          "TOO_MANY_ATTEMPTS_TRY_LATER"
          /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
        ]: "too-many-requests",
        [
          "PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
          /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
        ]: "password-does-not-meet-requirements",
        // Phone Auth related errors.
        [
          "INVALID_CODE"
          /* ServerError.INVALID_CODE */
        ]: "invalid-verification-code",
        [
          "INVALID_SESSION_INFO"
          /* ServerError.INVALID_SESSION_INFO */
        ]: "invalid-verification-id",
        [
          "INVALID_TEMPORARY_PROOF"
          /* ServerError.INVALID_TEMPORARY_PROOF */
        ]: "invalid-credential",
        [
          "MISSING_SESSION_INFO"
          /* ServerError.MISSING_SESSION_INFO */
        ]: "missing-verification-id",
        [
          "SESSION_EXPIRED"
          /* ServerError.SESSION_EXPIRED */
        ]: "code-expired",
        // Other action code errors when additional settings passed.
        // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
        // This is OK as this error will be caught by client side validation.
        [
          "MISSING_ANDROID_PACKAGE_NAME"
          /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
        ]: "missing-android-pkg-name",
        [
          "UNAUTHORIZED_DOMAIN"
          /* ServerError.UNAUTHORIZED_DOMAIN */
        ]: "unauthorized-continue-uri",
        // getProjectConfig errors when clientId is passed.
        [
          "INVALID_OAUTH_CLIENT_ID"
          /* ServerError.INVALID_OAUTH_CLIENT_ID */
        ]: "invalid-oauth-client-id",
        // User actions (sign-up or deletion) disabled errors.
        [
          "ADMIN_ONLY_OPERATION"
          /* ServerError.ADMIN_ONLY_OPERATION */
        ]: "admin-restricted-operation",
        // Multi factor related errors.
        [
          "INVALID_MFA_PENDING_CREDENTIAL"
          /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
        ]: "invalid-multi-factor-session",
        [
          "MFA_ENROLLMENT_NOT_FOUND"
          /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
        ]: "multi-factor-info-not-found",
        [
          "MISSING_MFA_ENROLLMENT_ID"
          /* ServerError.MISSING_MFA_ENROLLMENT_ID */
        ]: "missing-multi-factor-info",
        [
          "MISSING_MFA_PENDING_CREDENTIAL"
          /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
        ]: "missing-multi-factor-session",
        [
          "SECOND_FACTOR_EXISTS"
          /* ServerError.SECOND_FACTOR_EXISTS */
        ]: "second-factor-already-in-use",
        [
          "SECOND_FACTOR_LIMIT_EXCEEDED"
          /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
        ]: "maximum-second-factor-count-exceeded",
        // Blocking functions related errors.
        [
          "BLOCKING_FUNCTION_ERROR_RESPONSE"
          /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
        ]: "internal-error",
        // Recaptcha related errors.
        [
          "RECAPTCHA_NOT_ENABLED"
          /* ServerError.RECAPTCHA_NOT_ENABLED */
        ]: "recaptcha-not-enabled",
        [
          "MISSING_RECAPTCHA_TOKEN"
          /* ServerError.MISSING_RECAPTCHA_TOKEN */
        ]: "missing-recaptcha-token",
        [
          "INVALID_RECAPTCHA_TOKEN"
          /* ServerError.INVALID_RECAPTCHA_TOKEN */
        ]: "invalid-recaptcha-token",
        [
          "INVALID_RECAPTCHA_ACTION"
          /* ServerError.INVALID_RECAPTCHA_ACTION */
        ]: "invalid-recaptcha-action",
        [
          "MISSING_CLIENT_TYPE"
          /* ServerError.MISSING_CLIENT_TYPE */
        ]: "missing-client-type",
        [
          "MISSING_RECAPTCHA_VERSION"
          /* ServerError.MISSING_RECAPTCHA_VERSION */
        ]: "missing-recaptcha-version",
        [
          "INVALID_RECAPTCHA_VERSION"
          /* ServerError.INVALID_RECAPTCHA_VERSION */
        ]: "invalid-recaptcha-version",
        [
          "INVALID_REQ_TYPE"
          /* ServerError.INVALID_REQ_TYPE */
        ]: "invalid-req-type"
        /* AuthErrorCode.INVALID_REQ_TYPE */
      };
      var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
      function _addTidIfNecessary(auth, request) {
        if (auth.tenantId && !request.tenantId) {
          return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
        }
        return request;
      }
      async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
        return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
          let body = {};
          let params = {};
          if (request) {
            if (method === "GET") {
              params = request;
            } else {
              body = {
                body: JSON.stringify(request)
              };
            }
          }
          const query = util.querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
          const headers = await auth._getAdditionalHeaders();
          headers[
            "Content-Type"
            /* HttpHeader.CONTENT_TYPE */
          ] = "application/json";
          if (auth.languageCode) {
            headers[
              "X-Firebase-Locale"
              /* HttpHeader.X_FIREBASE_LOCALE */
            ] = auth.languageCode;
          }
          const fetchArgs = Object.assign({
            method,
            headers
          }, body);
          if (!util.isCloudflareWorker()) {
            fetchArgs.referrerPolicy = "no-referrer";
          }
          return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
        });
      }
      async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
        auth._canInitEmulator = false;
        const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
        try {
          const networkTimeout = new NetworkTimeout(auth);
          const response = await Promise.race([
            fetchFn(),
            networkTimeout.promise
          ]);
          networkTimeout.clearNetworkTimeout();
          const json = await response.json();
          if ("needConfirmation" in json) {
            throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
          }
          if (response.ok && !("errorMessage" in json)) {
            return json;
          } else {
            const errorMessage = response.ok ? json.errorMessage : json.error.message;
            const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
            if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
              throw _makeTaggedError(auth, "credential-already-in-use", json);
            } else if (serverErrorCode === "EMAIL_EXISTS") {
              throw _makeTaggedError(auth, "email-already-in-use", json);
            } else if (serverErrorCode === "USER_DISABLED") {
              throw _makeTaggedError(auth, "user-disabled", json);
            }
            const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
            if (serverErrorMessage) {
              throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
            } else {
              _fail(auth, authError);
            }
          }
        } catch (e) {
          if (e instanceof util.FirebaseError) {
            throw e;
          }
          _fail(auth, "network-request-failed", { "message": String(e) });
        }
      }
      async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
        const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
        if ("mfaPendingCredential" in serverResponse) {
          _fail(auth, "multi-factor-auth-required", {
            _serverResponse: serverResponse
          });
        }
        return serverResponse;
      }
      function _getFinalTarget(auth, host, path, query) {
        const base = `${host}${path}?${query}`;
        if (!auth.config.emulator) {
          return `${auth.config.apiScheme}://${base}`;
        }
        return _emulatorUrl(auth.config, base);
      }
      function _parseEnforcementState(enforcementStateStr) {
        switch (enforcementStateStr) {
          case "ENFORCE":
            return "ENFORCE";
          case "AUDIT":
            return "AUDIT";
          case "OFF":
            return "OFF";
          default:
            return "ENFORCEMENT_STATE_UNSPECIFIED";
        }
      }
      var NetworkTimeout = class {
        constructor(auth) {
          this.auth = auth;
          this.timer = null;
          this.promise = new Promise((_, reject) => {
            this.timer = setTimeout(() => {
              return reject(_createError(
                this.auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, DEFAULT_API_TIMEOUT_MS.get());
          });
        }
        clearNetworkTimeout() {
          clearTimeout(this.timer);
        }
      };
      function _makeTaggedError(auth, code, response) {
        const errorParams = {
          appName: auth.name
        };
        if (response.email) {
          errorParams.email = response.email;
        }
        if (response.phoneNumber) {
          errorParams.phoneNumber = response.phoneNumber;
        }
        const error = _createError(auth, code, errorParams);
        error.customData._tokenResponse = response;
        return error;
      }
      function isV2(grecaptcha) {
        return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
      }
      function isEnterprise(grecaptcha) {
        return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
      }
      var RecaptchaConfig = class {
        constructor(response) {
          this.siteKey = "";
          this.recaptchaEnforcementState = [];
          if (response.recaptchaKey === void 0) {
            throw new Error("recaptchaKey undefined");
          }
          this.siteKey = response.recaptchaKey.split("/")[3];
          this.recaptchaEnforcementState = response.recaptchaEnforcementState;
        }
        /**
         * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
         *
         * @param providerStr - The provider whose enforcement state is to be returned.
         * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
         */
        getProviderEnforcementState(providerStr) {
          if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
            return null;
          }
          for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
            if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
              return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
            }
          }
          return null;
        }
        /**
         * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
         *
         * @param providerStr - The provider whose enablement state is to be returned.
         * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
         */
        isProviderEnabled(providerStr) {
          return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
        }
      };
      async function getRecaptchaParams(auth) {
        return (await _performApiRequest(
          auth,
          "GET",
          "/v1/recaptchaParams"
          /* Endpoint.GET_RECAPTCHA_PARAM */
        )).recaptchaSiteKey || "";
      }
      async function getRecaptchaConfig(auth, request) {
        return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
      }
      async function deleteAccount(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
      }
      async function deleteLinkedAccounts(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function getAccountInfo(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
      }
      function utcTimestampToDateString(utcTimestamp) {
        if (!utcTimestamp) {
          return void 0;
        }
        try {
          const date = new Date(Number(utcTimestamp));
          if (!isNaN(date.getTime())) {
            return date.toUTCString();
          }
        } catch (e) {
        }
        return void 0;
      }
      function getIdToken(user, forceRefresh = false) {
        return util.getModularInstance(user).getIdToken(forceRefresh);
      }
      async function getIdTokenResult(user, forceRefresh = false) {
        const userInternal = util.getModularInstance(user);
        const token = await userInternal.getIdToken(forceRefresh);
        const claims = _parseToken(token);
        _assert(
          claims && claims.exp && claims.auth_time && claims.iat,
          userInternal.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
        const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
        return {
          claims,
          token,
          authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
          issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
          expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
          signInProvider: signInProvider || null,
          signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
        };
      }
      function secondsStringToMilliseconds(seconds) {
        return Number(seconds) * 1e3;
      }
      function _parseToken(token) {
        const [algorithm, payload, signature] = token.split(".");
        if (algorithm === void 0 || payload === void 0 || signature === void 0) {
          _logError("JWT malformed, contained fewer than 3 sections");
          return null;
        }
        try {
          const decoded = util.base64Decode(payload);
          if (!decoded) {
            _logError("Failed to decode base64 JWT payload");
            return null;
          }
          return JSON.parse(decoded);
        } catch (e) {
          _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
          return null;
        }
      }
      function _tokenExpiresIn(token) {
        const parsedToken = _parseToken(token);
        _assert(
          parsedToken,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        _assert(
          typeof parsedToken.exp !== "undefined",
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        _assert(
          typeof parsedToken.iat !== "undefined",
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return Number(parsedToken.exp) - Number(parsedToken.iat);
      }
      async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
        if (bypassAuthState) {
          return promise;
        }
        try {
          return await promise;
        } catch (e) {
          if (e instanceof util.FirebaseError && isUserInvalidated(e)) {
            if (user.auth.currentUser === user) {
              await user.auth.signOut();
            }
          }
          throw e;
        }
      }
      function isUserInvalidated({ code }) {
        return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
      }
      var ProactiveRefresh = class {
        constructor(user) {
          this.user = user;
          this.isRunning = false;
          this.timerId = null;
          this.errorBackoff = 3e4;
        }
        _start() {
          if (this.isRunning) {
            return;
          }
          this.isRunning = true;
          this.schedule();
        }
        _stop() {
          if (!this.isRunning) {
            return;
          }
          this.isRunning = false;
          if (this.timerId !== null) {
            clearTimeout(this.timerId);
          }
        }
        getInterval(wasError) {
          var _a;
          if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(
              this.errorBackoff * 2,
              96e4
              /* Duration.RETRY_BACKOFF_MAX */
            );
            return interval;
          } else {
            this.errorBackoff = 3e4;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 3e5;
            return Math.max(0, interval);
          }
        }
        schedule(wasError = false) {
          if (!this.isRunning) {
            return;
          }
          const interval = this.getInterval(wasError);
          this.timerId = setTimeout(async () => {
            await this.iteration();
          }, interval);
        }
        async iteration() {
          try {
            await this.user.getIdToken(true);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
              this.schedule(
                /* wasError */
                true
              );
            }
            return;
          }
          this.schedule();
        }
      };
      var UserMetadata = class {
        constructor(createdAt, lastLoginAt) {
          this.createdAt = createdAt;
          this.lastLoginAt = lastLoginAt;
          this._initializeTime();
        }
        _initializeTime() {
          this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
          this.creationTime = utcTimestampToDateString(this.createdAt);
        }
        _copy(metadata) {
          this.createdAt = metadata.createdAt;
          this.lastLoginAt = metadata.lastLoginAt;
          this._initializeTime();
        }
        toJSON() {
          return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
          };
        }
      };
      async function _reloadWithoutSaving(user) {
        var _a;
        const auth = user.auth;
        const idToken = await user.getIdToken();
        const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
        _assert(
          response === null || response === void 0 ? void 0 : response.users.length,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const coreAccount = response.users[0];
        user._notifyReloadListener(coreAccount);
        const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
        const providerData = mergeProviderData(user.providerData, newProviderData);
        const oldIsAnonymous = user.isAnonymous;
        const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
        const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
        const updates = {
          uid: coreAccount.localId,
          displayName: coreAccount.displayName || null,
          photoURL: coreAccount.photoUrl || null,
          email: coreAccount.email || null,
          emailVerified: coreAccount.emailVerified || false,
          phoneNumber: coreAccount.phoneNumber || null,
          tenantId: coreAccount.tenantId || null,
          providerData,
          metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
          isAnonymous
        };
        Object.assign(user, updates);
      }
      async function reload(user) {
        const userInternal = util.getModularInstance(user);
        await _reloadWithoutSaving(userInternal);
        await userInternal.auth._persistUserIfCurrent(userInternal);
        userInternal.auth._notifyListenersIfCurrent(userInternal);
      }
      function mergeProviderData(original, newData) {
        const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
        return [...deduped, ...newData];
      }
      function extractProviderData(providers) {
        return providers.map((_a) => {
          var { providerId } = _a, provider = tslib.__rest(_a, ["providerId"]);
          return {
            providerId,
            uid: provider.rawId || "",
            displayName: provider.displayName || null,
            email: provider.email || null,
            phoneNumber: provider.phoneNumber || null,
            photoURL: provider.photoUrl || null
          };
        });
      }
      async function requestStsToken(auth, refreshToken) {
        const response = await _performFetchWithErrorHandling(auth, {}, async () => {
          const body = util.querystring({
            "grant_type": "refresh_token",
            "refresh_token": refreshToken
          }).slice(1);
          const { tokenApiHost, apiKey } = auth.config;
          const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
          const headers = await auth._getAdditionalHeaders();
          headers[
            "Content-Type"
            /* HttpHeader.CONTENT_TYPE */
          ] = "application/x-www-form-urlencoded";
          return FetchProvider.fetch()(url, {
            method: "POST",
            headers,
            body
          });
        });
        return {
          accessToken: response.access_token,
          expiresIn: response.expires_in,
          refreshToken: response.refresh_token
        };
      }
      async function revokeToken(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
      }
      var StsTokenManager = class _StsTokenManager {
        constructor() {
          this.refreshToken = null;
          this.accessToken = null;
          this.expirationTime = null;
        }
        get isExpired() {
          return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(response) {
          _assert(
            response.idToken,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.idToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof response.refreshToken !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
          this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
        }
        updateFromIdToken(idToken) {
          _assert(
            idToken.length !== 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const expiresIn = _tokenExpiresIn(idToken);
          this.updateTokensAndExpiration(idToken, null, expiresIn);
        }
        async getToken(auth, forceRefresh = false) {
          if (!forceRefresh && this.accessToken && !this.isExpired) {
            return this.accessToken;
          }
          _assert(
            this.refreshToken,
            auth,
            "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
          );
          if (this.refreshToken) {
            await this.refresh(auth, this.refreshToken);
            return this.accessToken;
          }
          return null;
        }
        clearRefreshToken() {
          this.refreshToken = null;
        }
        async refresh(auth, oldToken) {
          const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
          this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
        }
        updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
          this.refreshToken = refreshToken || null;
          this.accessToken = accessToken || null;
          this.expirationTime = Date.now() + expiresInSec * 1e3;
        }
        static fromJSON(appName, object) {
          const { refreshToken, accessToken, expirationTime } = object;
          const manager = new _StsTokenManager();
          if (refreshToken) {
            _assert(typeof refreshToken === "string", "internal-error", {
              appName
            });
            manager.refreshToken = refreshToken;
          }
          if (accessToken) {
            _assert(typeof accessToken === "string", "internal-error", {
              appName
            });
            manager.accessToken = accessToken;
          }
          if (expirationTime) {
            _assert(typeof expirationTime === "number", "internal-error", {
              appName
            });
            manager.expirationTime = expirationTime;
          }
          return manager;
        }
        toJSON() {
          return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
          };
        }
        _assign(stsTokenManager) {
          this.accessToken = stsTokenManager.accessToken;
          this.refreshToken = stsTokenManager.refreshToken;
          this.expirationTime = stsTokenManager.expirationTime;
        }
        _clone() {
          return Object.assign(new _StsTokenManager(), this.toJSON());
        }
        _performRefresh() {
          return debugFail("not implemented");
        }
      };
      function assertStringOrUndefined(assertion, appName) {
        _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
      }
      var UserImpl = class _UserImpl {
        constructor(_a) {
          var { uid, auth, stsTokenManager } = _a, opt = tslib.__rest(_a, ["uid", "auth", "stsTokenManager"]);
          this.providerId = "firebase";
          this.proactiveRefresh = new ProactiveRefresh(this);
          this.reloadUserInfo = null;
          this.reloadListener = null;
          this.uid = uid;
          this.auth = auth;
          this.stsTokenManager = stsTokenManager;
          this.accessToken = stsTokenManager.accessToken;
          this.displayName = opt.displayName || null;
          this.email = opt.email || null;
          this.emailVerified = opt.emailVerified || false;
          this.phoneNumber = opt.phoneNumber || null;
          this.photoURL = opt.photoURL || null;
          this.isAnonymous = opt.isAnonymous || false;
          this.tenantId = opt.tenantId || null;
          this.providerData = opt.providerData ? [...opt.providerData] : [];
          this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
        }
        async getIdToken(forceRefresh) {
          const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
          _assert(
            accessToken,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
          }
          return accessToken;
        }
        getIdTokenResult(forceRefresh) {
          return getIdTokenResult(this, forceRefresh);
        }
        reload() {
          return reload(this);
        }
        _assign(user) {
          if (this === user) {
            return;
          }
          _assert(
            this.uid === user.uid,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.email = user.email;
          this.emailVerified = user.emailVerified;
          this.phoneNumber = user.phoneNumber;
          this.isAnonymous = user.isAnonymous;
          this.tenantId = user.tenantId;
          this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
          this.metadata._copy(user.metadata);
          this.stsTokenManager._assign(user.stsTokenManager);
        }
        _clone(auth) {
          const newUser = new _UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
          newUser.metadata._copy(this.metadata);
          return newUser;
        }
        _onReload(callback) {
          _assert(
            !this.reloadListener,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.reloadListener = callback;
          if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
          }
        }
        _notifyReloadListener(userInfo) {
          if (this.reloadListener) {
            this.reloadListener(userInfo);
          } else {
            this.reloadUserInfo = userInfo;
          }
        }
        _startProactiveRefresh() {
          this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
          this.proactiveRefresh._stop();
        }
        async _updateTokensIfNecessary(response, reload2 = false) {
          let tokensRefreshed = false;
          if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response);
            tokensRefreshed = true;
          }
          if (reload2) {
            await _reloadWithoutSaving(this);
          }
          await this.auth._persistUserIfCurrent(this);
          if (tokensRefreshed) {
            this.auth._notifyListenersIfCurrent(this);
          }
        }
        async delete() {
          if (app._isFirebaseServerApp(this.auth.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
          }
          const idToken = await this.getIdToken();
          await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
          this.stsTokenManager.clearRefreshToken();
          return this.auth.signOut();
        }
        toJSON() {
          return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId
          }, this.metadata.toJSON()), {
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
          });
        }
        get refreshToken() {
          return this.stsTokenManager.refreshToken || "";
        }
        static _fromJSON(auth, object) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
          const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
          const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
          const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
          const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
          const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
          const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
          const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
          const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
          _assert(
            uid && plainObjectTokenManager,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
          _assert(
            typeof uid === "string",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(displayName, auth.name);
          assertStringOrUndefined(email, auth.name);
          _assert(
            typeof emailVerified === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          _assert(
            typeof isAnonymous === "boolean",
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          assertStringOrUndefined(phoneNumber, auth.name);
          assertStringOrUndefined(photoURL, auth.name);
          assertStringOrUndefined(tenantId, auth.name);
          assertStringOrUndefined(_redirectEventId, auth.name);
          assertStringOrUndefined(createdAt, auth.name);
          assertStringOrUndefined(lastLoginAt, auth.name);
          const user = new _UserImpl({
            uid,
            auth,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
          });
          if (providerData && Array.isArray(providerData)) {
            user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
          }
          if (_redirectEventId) {
            user._redirectEventId = _redirectEventId;
          }
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromServerResponse(idTokenResponse);
          const user = new _UserImpl({
            uid: idTokenResponse.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          await _reloadWithoutSaving(user);
          return user;
        }
        /**
         * Initialize a User from an idToken server response
         * @param auth
         * @param idTokenResponse
         */
        static async _fromGetAccountInfoResponse(auth, response, idToken) {
          const coreAccount = response.users[0];
          _assert(
            coreAccount.localId !== void 0,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
          const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
          const stsTokenManager = new StsTokenManager();
          stsTokenManager.updateFromIdToken(idToken);
          const user = new _UserImpl({
            uid: coreAccount.localId,
            auth,
            stsTokenManager,
            isAnonymous
          });
          const updates = {
            uid: coreAccount.localId,
            displayName: coreAccount.displayName || null,
            photoURL: coreAccount.photoUrl || null,
            email: coreAccount.email || null,
            emailVerified: coreAccount.emailVerified || false,
            phoneNumber: coreAccount.phoneNumber || null,
            tenantId: coreAccount.tenantId || null,
            providerData,
            metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
            isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
          };
          Object.assign(user, updates);
          return user;
        }
      };
      var instanceCache = /* @__PURE__ */ new Map();
      function _getInstance(cls) {
        debugAssert(cls instanceof Function, "Expected a class definition");
        let instance = instanceCache.get(cls);
        if (instance) {
          debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
          return instance;
        }
        instance = new cls();
        instanceCache.set(cls, instance);
        return instance;
      }
      var InMemoryPersistence = class {
        constructor() {
          this.type = "NONE";
          this.storage = {};
        }
        async _isAvailable() {
          return true;
        }
        async _set(key, value) {
          this.storage[key] = value;
        }
        async _get(key) {
          const value = this.storage[key];
          return value === void 0 ? null : value;
        }
        async _remove(key) {
          delete this.storage[key];
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      InMemoryPersistence.type = "NONE";
      var inMemoryPersistence = InMemoryPersistence;
      function _persistenceKeyName(key, apiKey, appName) {
        return `${"firebase"}:${key}:${apiKey}:${appName}`;
      }
      var PersistenceUserManager = class _PersistenceUserManager {
        constructor(persistence, auth, userKey) {
          this.persistence = persistence;
          this.auth = auth;
          this.userKey = userKey;
          const { config: config2, name: name2 } = this.auth;
          this.fullUserKey = _persistenceKeyName(this.userKey, config2.apiKey, name2);
          this.fullPersistenceKey = _persistenceKeyName("persistence", config2.apiKey, name2);
          this.boundEventHandler = auth._onStorageEvent.bind(auth);
          this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
        }
        setCurrentUser(user) {
          return this.persistence._set(this.fullUserKey, user.toJSON());
        }
        async getCurrentUser() {
          const blob = await this.persistence._get(this.fullUserKey);
          return blob ? UserImpl._fromJSON(this.auth, blob) : null;
        }
        removeCurrentUser() {
          return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
          return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
        }
        async setPersistence(newPersistence) {
          if (this.persistence === newPersistence) {
            return;
          }
          const currentUser = await this.getCurrentUser();
          await this.removeCurrentUser();
          this.persistence = newPersistence;
          if (currentUser) {
            return this.setCurrentUser(currentUser);
          }
        }
        delete() {
          this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
        }
        static async create(auth, persistenceHierarchy, userKey = "authUser") {
          if (!persistenceHierarchy.length) {
            return new _PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
          }
          const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (await persistence._isAvailable()) {
              return persistence;
            }
            return void 0;
          }))).filter((persistence) => persistence);
          let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
          const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
          let userToMigrate = null;
          for (const persistence of persistenceHierarchy) {
            try {
              const blob = await persistence._get(key);
              if (blob) {
                const user = UserImpl._fromJSON(auth, blob);
                if (persistence !== selectedPersistence) {
                  userToMigrate = user;
                }
                selectedPersistence = persistence;
                break;
              }
            } catch (_a) {
            }
          }
          const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
          if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
            return new _PersistenceUserManager(selectedPersistence, auth, userKey);
          }
          selectedPersistence = migrationHierarchy[0];
          if (userToMigrate) {
            await selectedPersistence._set(key, userToMigrate.toJSON());
          }
          await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (persistence !== selectedPersistence) {
              try {
                await persistence._remove(key);
              } catch (_a) {
              }
            }
          }));
          return new _PersistenceUserManager(selectedPersistence, auth, userKey);
        }
      };
      function _getBrowserName(userAgent) {
        const ua = userAgent.toLowerCase();
        if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
          return "Opera";
        } else if (_isIEMobile(ua)) {
          return "IEMobile";
        } else if (ua.includes("msie") || ua.includes("trident/")) {
          return "IE";
        } else if (ua.includes("edge/")) {
          return "Edge";
        } else if (_isFirefox(ua)) {
          return "Firefox";
        } else if (ua.includes("silk/")) {
          return "Silk";
        } else if (_isBlackBerry(ua)) {
          return "Blackberry";
        } else if (_isWebOS(ua)) {
          return "Webos";
        } else if (_isSafari(ua)) {
          return "Safari";
        } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
          return "Chrome";
        } else if (_isAndroid(ua)) {
          return "Android";
        } else {
          const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
          const matches = userAgent.match(re);
          if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
            return matches[1];
          }
        }
        return "Other";
      }
      function _isFirefox(ua = util.getUA()) {
        return /firefox\//i.test(ua);
      }
      function _isSafari(userAgent = util.getUA()) {
        const ua = userAgent.toLowerCase();
        return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
      }
      function _isChromeIOS(ua = util.getUA()) {
        return /crios\//i.test(ua);
      }
      function _isIEMobile(ua = util.getUA()) {
        return /iemobile/i.test(ua);
      }
      function _isAndroid(ua = util.getUA()) {
        return /android/i.test(ua);
      }
      function _isBlackBerry(ua = util.getUA()) {
        return /blackberry/i.test(ua);
      }
      function _isWebOS(ua = util.getUA()) {
        return /webos/i.test(ua);
      }
      function _isIOS(ua = util.getUA()) {
        return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
      }
      function _isIOS7Or8(ua = util.getUA()) {
        return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
      }
      function _isIOSStandalone(ua = util.getUA()) {
        var _a;
        return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
      }
      function _isIE10() {
        return util.isIE() && document.documentMode === 10;
      }
      function _isMobileBrowser(ua = util.getUA()) {
        return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
      }
      function _getClientVersion(clientPlatform, frameworks = []) {
        let reportedPlatform;
        switch (clientPlatform) {
          case "Browser":
            reportedPlatform = _getBrowserName(util.getUA());
            break;
          case "Worker":
            reportedPlatform = `${_getBrowserName(util.getUA())}-${clientPlatform}`;
            break;
          default:
            reportedPlatform = clientPlatform;
        }
        const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
        return `${reportedPlatform}/${"JsCore"}/${app.SDK_VERSION}/${reportedFrameworks}`;
      }
      var AuthMiddlewareQueue = class {
        constructor(auth) {
          this.auth = auth;
          this.queue = [];
        }
        pushCallback(callback, onAbort) {
          const wrappedCallback = (user) => new Promise((resolve, reject) => {
            try {
              const result = callback(user);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
          wrappedCallback.onAbort = onAbort;
          this.queue.push(wrappedCallback);
          const index = this.queue.length - 1;
          return () => {
            this.queue[index] = () => Promise.resolve();
          };
        }
        async runMiddleware(nextUser) {
          if (this.auth.currentUser === nextUser) {
            return;
          }
          const onAbortStack = [];
          try {
            for (const beforeStateCallback of this.queue) {
              await beforeStateCallback(nextUser);
              if (beforeStateCallback.onAbort) {
                onAbortStack.push(beforeStateCallback.onAbort);
              }
            }
          } catch (e) {
            onAbortStack.reverse();
            for (const onAbort of onAbortStack) {
              try {
                onAbort();
              } catch (_) {
              }
            }
            throw this.auth._errorFactory.create("login-blocked", {
              originalMessage: e === null || e === void 0 ? void 0 : e.message
            });
          }
        }
      };
      async function _getPasswordPolicy(auth, request = {}) {
        return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
      }
      var MINIMUM_MIN_PASSWORD_LENGTH = 6;
      var PasswordPolicyImpl = class {
        constructor(response) {
          var _a, _b, _c, _d;
          const responseOptions = response.customStrengthOptions;
          this.customStrengthOptions = {};
          this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
          if (responseOptions.maxPasswordLength) {
            this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
          }
          if (responseOptions.containsLowercaseCharacter !== void 0) {
            this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
          }
          if (responseOptions.containsUppercaseCharacter !== void 0) {
            this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
          }
          if (responseOptions.containsNumericCharacter !== void 0) {
            this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
          }
          if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
            this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
          }
          this.enforcementState = response.enforcementState;
          if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
            this.enforcementState = "OFF";
          }
          this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
          this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
          this.schemaVersion = response.schemaVersion;
        }
        validatePassword(password) {
          var _a, _b, _c, _d, _e, _f;
          const status = {
            isValid: true,
            passwordPolicy: this
          };
          this.validatePasswordLengthOptions(password, status);
          this.validatePasswordCharacterOptions(password, status);
          status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
          status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
          status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
          status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
          status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
          status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
          return status;
        }
        /**
         * Validates that the password meets the length options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordLengthOptions(password, status) {
          const minPasswordLength = this.customStrengthOptions.minPasswordLength;
          const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
          if (minPasswordLength) {
            status.meetsMinPasswordLength = password.length >= minPasswordLength;
          }
          if (maxPasswordLength) {
            status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
          }
        }
        /**
         * Validates that the password meets the character options for the policy.
         *
         * @param password Password to validate.
         * @param status Validation status.
         */
        validatePasswordCharacterOptions(password, status) {
          this.updatePasswordCharacterOptionsStatuses(
            status,
            /* containsLowercaseCharacter= */
            false,
            /* containsUppercaseCharacter= */
            false,
            /* containsNumericCharacter= */
            false,
            /* containsNonAlphanumericCharacter= */
            false
          );
          let passwordChar;
          for (let i = 0; i < password.length; i++) {
            passwordChar = password.charAt(i);
            this.updatePasswordCharacterOptionsStatuses(
              status,
              /* containsLowercaseCharacter= */
              passwordChar >= "a" && passwordChar <= "z",
              /* containsUppercaseCharacter= */
              passwordChar >= "A" && passwordChar <= "Z",
              /* containsNumericCharacter= */
              passwordChar >= "0" && passwordChar <= "9",
              /* containsNonAlphanumericCharacter= */
              this.allowedNonAlphanumericCharacters.includes(passwordChar)
            );
          }
        }
        /**
         * Updates the running validation status with the statuses for the character options.
         * Expected to be called each time a character is processed to update each option status
         * based on the current character.
         *
         * @param status Validation status.
         * @param containsLowercaseCharacter Whether the character is a lowercase letter.
         * @param containsUppercaseCharacter Whether the character is an uppercase letter.
         * @param containsNumericCharacter Whether the character is a numeric character.
         * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
         */
        updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
          if (this.customStrengthOptions.containsLowercaseLetter) {
            status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
          }
          if (this.customStrengthOptions.containsUppercaseLetter) {
            status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
          }
          if (this.customStrengthOptions.containsNumericCharacter) {
            status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
          }
          if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
            status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
          }
        }
      };
      var AuthImpl = class {
        constructor(app2, heartbeatServiceProvider, appCheckServiceProvider, config2) {
          this.app = app2;
          this.heartbeatServiceProvider = heartbeatServiceProvider;
          this.appCheckServiceProvider = appCheckServiceProvider;
          this.config = config2;
          this.currentUser = null;
          this.emulatorConfig = null;
          this.operations = Promise.resolve();
          this.authStateSubscription = new Subscription(this);
          this.idTokenSubscription = new Subscription(this);
          this.beforeStateQueue = new AuthMiddlewareQueue(this);
          this.redirectUser = null;
          this.isProactiveRefreshEnabled = false;
          this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
          this._canInitEmulator = true;
          this._isInitialized = false;
          this._deleted = false;
          this._initializationPromise = null;
          this._popupRedirectResolver = null;
          this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
          this._agentRecaptchaConfig = null;
          this._tenantRecaptchaConfigs = {};
          this._projectPasswordPolicy = null;
          this._tenantPasswordPolicies = {};
          this.lastNotifiedUid = void 0;
          this.languageCode = null;
          this.tenantId = null;
          this.settings = { appVerificationDisabledForTesting: false };
          this.frameworks = [];
          this.name = app2.name;
          this.clientVersion = config2.sdkClientVersion;
        }
        _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
          if (popupRedirectResolver) {
            this._popupRedirectResolver = _getInstance(popupRedirectResolver);
          }
          this._initializationPromise = this.queue(async () => {
            var _a, _b;
            if (this._deleted) {
              return;
            }
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
            if (this._deleted) {
              return;
            }
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (e) {
              }
            }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) {
              return;
            }
            this._isInitialized = true;
          });
          return this._initializationPromise;
        }
        /**
         * If the persistence is changed in another window, the user manager will let us know
         */
        async _onStorageEvent() {
          if (this._deleted) {
            return;
          }
          const user = await this.assertedPersistence.getCurrentUser();
          if (!this.currentUser && !user) {
            return;
          }
          if (this.currentUser && user && this.currentUser.uid === user.uid) {
            this._currentUser._assign(user);
            await this.currentUser.getIdToken();
            return;
          }
          await this._updateCurrentUser(
            user,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        async initializeCurrentUserFromIdToken(idToken) {
          try {
            const response = await getAccountInfo(this, { idToken });
            const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
            await this.directlySetCurrentUser(user);
          } catch (err) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
            await this.directlySetCurrentUser(null);
          }
        }
        async initializeCurrentUser(popupRedirectResolver) {
          var _a;
          if (app._isFirebaseServerApp(this.app)) {
            const idToken = this.app.settings.authIdToken;
            if (idToken) {
              return new Promise((resolve) => {
                setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
              });
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
          let futureCurrentUser = previouslyStoredUser;
          let needsTocheckMiddleware = false;
          if (popupRedirectResolver && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver);
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
              futureCurrentUser = result.user;
              needsTocheckMiddleware = true;
            }
          }
          if (!futureCurrentUser) {
            return this.directlySetCurrentUser(null);
          }
          if (!futureCurrentUser._redirectEventId) {
            if (needsTocheckMiddleware) {
              try {
                await this.beforeStateQueue.runMiddleware(futureCurrentUser);
              } catch (e) {
                futureCurrentUser = previouslyStoredUser;
                this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
              }
            }
            if (futureCurrentUser) {
              return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
            } else {
              return this.directlySetCurrentUser(null);
            }
          }
          _assert(
            this._popupRedirectResolver,
            this,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          await this.getOrInitRedirectPersistenceManager();
          if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
            return this.directlySetCurrentUser(futureCurrentUser);
          }
          return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        }
        async tryRedirectSignIn(redirectResolver) {
          let result = null;
          try {
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
          } catch (e) {
            await this._setRedirectUser(null);
          }
          return result;
        }
        async reloadAndSetCurrentUserOrClear(user) {
          try {
            await _reloadWithoutSaving(user);
          } catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
              return this.directlySetCurrentUser(null);
            }
          }
          return this.directlySetCurrentUser(user);
        }
        useDeviceLanguage() {
          this.languageCode = _getUserLanguage();
        }
        async _delete() {
          this._deleted = true;
        }
        async updateCurrentUser(userExtern) {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          const user = userExtern ? util.getModularInstance(userExtern) : null;
          if (user) {
            _assert(
              user.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token"
              /* AuthErrorCode.INVALID_AUTH */
            );
          }
          return this._updateCurrentUser(user && user._clone(this));
        }
        async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
          if (this._deleted) {
            return;
          }
          if (user) {
            _assert(
              this.tenantId === user.tenantId,
              this,
              "tenant-id-mismatch"
              /* AuthErrorCode.TENANT_ID_MISMATCH */
            );
          }
          if (!skipBeforeStateCallbacks) {
            await this.beforeStateQueue.runMiddleware(user);
          }
          return this.queue(async () => {
            await this.directlySetCurrentUser(user);
            this.notifyAuthListeners();
          });
        }
        async signOut() {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          await this.beforeStateQueue.runMiddleware(null);
          if (this.redirectPersistenceManager || this._popupRedirectResolver) {
            await this._setRedirectUser(null);
          }
          return this._updateCurrentUser(
            null,
            /* skipBeforeStateCallbacks */
            true
          );
        }
        setPersistence(persistence) {
          if (app._isFirebaseServerApp(this.app)) {
            return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
          }
          return this.queue(async () => {
            await this.assertedPersistence.setPersistence(_getInstance(persistence));
          });
        }
        _getRecaptchaConfig() {
          if (this.tenantId == null) {
            return this._agentRecaptchaConfig;
          } else {
            return this._tenantRecaptchaConfigs[this.tenantId];
          }
        }
        async validatePassword(password) {
          if (!this._getPasswordPolicyInternal()) {
            await this._updatePasswordPolicy();
          }
          const passwordPolicy = this._getPasswordPolicyInternal();
          if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
            return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
          }
          return passwordPolicy.validatePassword(password);
        }
        _getPasswordPolicyInternal() {
          if (this.tenantId === null) {
            return this._projectPasswordPolicy;
          } else {
            return this._tenantPasswordPolicies[this.tenantId];
          }
        }
        async _updatePasswordPolicy() {
          const response = await _getPasswordPolicy(this);
          const passwordPolicy = new PasswordPolicyImpl(response);
          if (this.tenantId === null) {
            this._projectPasswordPolicy = passwordPolicy;
          } else {
            this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
          }
        }
        _getPersistence() {
          return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(errorMap) {
          this._errorFactory = new util.ErrorFactory("auth", "Firebase", errorMap());
        }
        onAuthStateChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
        }
        beforeAuthStateChanged(callback, onAbort) {
          return this.beforeStateQueue.pushCallback(callback, onAbort);
        }
        onIdTokenChanged(nextOrObserver, error, completed) {
          return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
        }
        authStateReady() {
          return new Promise((resolve, reject) => {
            if (this.currentUser) {
              resolve();
            } else {
              const unsubscribe = this.onAuthStateChanged(() => {
                unsubscribe();
                resolve();
              }, reject);
            }
          });
        }
        /**
         * Revokes the given access token. Currently only supports Apple OAuth access tokens.
         */
        async revokeAccessToken(token) {
          if (this.currentUser) {
            const idToken = await this.currentUser.getIdToken();
            const request = {
              providerId: "apple.com",
              tokenType: "ACCESS_TOKEN",
              token,
              idToken
            };
            if (this.tenantId != null) {
              request.tenantId = this.tenantId;
            }
            await revokeToken(this, request);
          }
        }
        toJSON() {
          var _a;
          return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
          };
        }
        async _setRedirectUser(user, popupRedirectResolver) {
          const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
          return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
        }
        async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
          if (!this.redirectPersistenceManager) {
            const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
            _assert(
              resolver,
              this,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            this.redirectPersistenceManager = await PersistenceUserManager.create(
              this,
              [_getInstance(resolver._redirectPersistence)],
              "redirectUser"
              /* KeyName.REDIRECT_USER */
            );
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
          }
          return this.redirectPersistenceManager;
        }
        async _redirectUserForId(id) {
          var _a, _b;
          if (this._isInitialized) {
            await this.queue(async () => {
            });
          }
          if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
            return this._currentUser;
          }
          if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
            return this.redirectUser;
          }
          return null;
        }
        async _persistUserIfCurrent(user) {
          if (user === this.currentUser) {
            return this.queue(async () => this.directlySetCurrentUser(user));
          }
        }
        /** Notifies listeners only if the user is current */
        _notifyListenersIfCurrent(user) {
          if (user === this.currentUser) {
            this.notifyAuthListeners();
          }
        }
        _key() {
          return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
          this.isProactiveRefreshEnabled = true;
          if (this.currentUser) {
            this._currentUser._startProactiveRefresh();
          }
        }
        _stopProactiveRefresh() {
          this.isProactiveRefreshEnabled = false;
          if (this.currentUser) {
            this._currentUser._stopProactiveRefresh();
          }
        }
        /** Returns the current user cast as the internal type */
        get _currentUser() {
          return this.currentUser;
        }
        notifyAuthListeners() {
          var _a, _b;
          if (!this._isInitialized) {
            return;
          }
          this.idTokenSubscription.next(this.currentUser);
          const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
          if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
          }
        }
        registerStateListener(subscription, nextOrObserver, error, completed) {
          if (this._deleted) {
            return () => {
            };
          }
          const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
          let isUnsubscribed = false;
          const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
          _assert(
            promise,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          promise.then(() => {
            if (isUnsubscribed) {
              return;
            }
            cb(this.currentUser);
          });
          if (typeof nextOrObserver === "function") {
            const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          } else {
            const unsubscribe = subscription.addObserver(nextOrObserver);
            return () => {
              isUnsubscribed = true;
              unsubscribe();
            };
          }
        }
        /**
         * Unprotected (from race conditions) method to set the current user. This
         * should only be called from within a queued callback. This is necessary
         * because the queue shouldn't rely on another queued callback.
         */
        async directlySetCurrentUser(user) {
          if (this.currentUser && this.currentUser !== user) {
            this._currentUser._stopProactiveRefresh();
          }
          if (user && this.isProactiveRefreshEnabled) {
            user._startProactiveRefresh();
          }
          this.currentUser = user;
          if (user) {
            await this.assertedPersistence.setCurrentUser(user);
          } else {
            await this.assertedPersistence.removeCurrentUser();
          }
        }
        queue(action) {
          this.operations = this.operations.then(action, action);
          return this.operations;
        }
        get assertedPersistence() {
          _assert(
            this.persistenceManager,
            this,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.persistenceManager;
        }
        _logFramework(framework) {
          if (!framework || this.frameworks.includes(framework)) {
            return;
          }
          this.frameworks.push(framework);
          this.frameworks.sort();
          this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
        }
        _getFrameworks() {
          return this.frameworks;
        }
        async _getAdditionalHeaders() {
          var _a;
          const headers = {
            [
              "X-Client-Version"
              /* HttpHeader.X_CLIENT_VERSION */
            ]: this.clientVersion
          };
          if (this.app.options.appId) {
            headers[
              "X-Firebase-gmpid"
              /* HttpHeader.X_FIREBASE_GMPID */
            ] = this.app.options.appId;
          }
          const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
            optional: true
          })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
          if (heartbeatsHeader) {
            headers[
              "X-Firebase-Client"
              /* HttpHeader.X_FIREBASE_CLIENT */
            ] = heartbeatsHeader;
          }
          const appCheckToken = await this._getAppCheckToken();
          if (appCheckToken) {
            headers[
              "X-Firebase-AppCheck"
              /* HttpHeader.X_FIREBASE_APP_CHECK */
            ] = appCheckToken;
          }
          return headers;
        }
        async _getAppCheckToken() {
          var _a;
          const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({ optional: true })) === null || _a === void 0 ? void 0 : _a.getToken());
          if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
            _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
          }
          return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
        }
      };
      function _castAuth(auth) {
        return util.getModularInstance(auth);
      }
      var Subscription = class {
        constructor(auth) {
          this.auth = auth;
          this.observer = null;
          this.addObserver = util.createSubscribe((observer) => this.observer = observer);
        }
        get next() {
          _assert(
            this.observer,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.observer.next.bind(this.observer);
        }
      };
      var externalJSProvider = {
        async loadJS() {
          throw new Error("Unable to load external scripts");
        },
        recaptchaV2Script: "",
        recaptchaEnterpriseScript: "",
        gapiScript: ""
      };
      function _setExternalJSProvider(p) {
        externalJSProvider = p;
      }
      function _loadJS(url) {
        return externalJSProvider.loadJS(url);
      }
      function _recaptchaV2ScriptUrl() {
        return externalJSProvider.recaptchaV2Script;
      }
      function _recaptchaEnterpriseScriptUrl() {
        return externalJSProvider.recaptchaEnterpriseScript;
      }
      function _gapiScriptUrl() {
        return externalJSProvider.gapiScript;
      }
      function _generateCallbackName(prefix) {
        return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
      }
      var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
      var FAKE_TOKEN = "NO_RECAPTCHA";
      var RecaptchaEnterpriseVerifier = class {
        /**
         *
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         */
        constructor(authExtern) {
          this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
          this.auth = _castAuth(authExtern);
        }
        /**
         * Executes the verification process.
         *
         * @returns A Promise for a token that can be used to assert the validity of a request.
         */
        async verify(action = "verify", forceRefresh = false) {
          async function retrieveSiteKey(auth) {
            if (!forceRefresh) {
              if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
                return auth._agentRecaptchaConfig.siteKey;
              }
              if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
                return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
              }
            }
            return new Promise(async (resolve, reject) => {
              getRecaptchaConfig(auth, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
                /* RecaptchaVersion.ENTERPRISE */
              }).then((response) => {
                if (response.recaptchaKey === void 0) {
                  reject(new Error("recaptcha Enterprise site key undefined"));
                } else {
                  const config2 = new RecaptchaConfig(response);
                  if (auth.tenantId == null) {
                    auth._agentRecaptchaConfig = config2;
                  } else {
                    auth._tenantRecaptchaConfigs[auth.tenantId] = config2;
                  }
                  return resolve(config2.siteKey);
                }
              }).catch((error) => {
                reject(error);
              });
            });
          }
          function retrieveRecaptchaToken(siteKey, resolve, reject) {
            const grecaptcha = window.grecaptcha;
            if (isEnterprise(grecaptcha)) {
              grecaptcha.enterprise.ready(() => {
                grecaptcha.enterprise.execute(siteKey, { action }).then((token) => {
                  resolve(token);
                }).catch(() => {
                  resolve(FAKE_TOKEN);
                });
              });
            } else {
              reject(Error("No reCAPTCHA enterprise script loaded."));
            }
          }
          return new Promise((resolve, reject) => {
            retrieveSiteKey(this.auth).then((siteKey) => {
              if (!forceRefresh && isEnterprise(window.grecaptcha)) {
                retrieveRecaptchaToken(siteKey, resolve, reject);
              } else {
                if (typeof window === "undefined") {
                  reject(new Error("RecaptchaVerifier is only supported in browser"));
                  return;
                }
                let url = _recaptchaEnterpriseScriptUrl();
                if (url.length !== 0) {
                  url += siteKey;
                }
                _loadJS(url).then(() => {
                  retrieveRecaptchaToken(siteKey, resolve, reject);
                }).catch((error) => {
                  reject(error);
                });
              }
            }).catch((error) => {
              reject(error);
            });
          });
        }
      };
      async function injectRecaptchaFields(auth, request, action, captchaResp = false) {
        const verifier = new RecaptchaEnterpriseVerifier(auth);
        let captchaResponse;
        try {
          captchaResponse = await verifier.verify(action);
        } catch (error) {
          captchaResponse = await verifier.verify(action, true);
        }
        const newRequest = Object.assign({}, request);
        if (!captchaResp) {
          Object.assign(newRequest, { captchaResponse });
        } else {
          Object.assign(newRequest, { "captchaResp": captchaResponse });
        }
        Object.assign(newRequest, {
          "clientType": "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        });
        Object.assign(newRequest, {
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        });
        return newRequest;
      }
      async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod) {
        var _a;
        if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled(
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
        )) {
          const requestWithRecaptcha = await injectRecaptchaFields(
            authInstance,
            request,
            actionName,
            actionName === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return actionMethod(authInstance, request).catch(async (error) => {
            if (error.code === `auth/${"missing-recaptcha-token"}`) {
              console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
              const requestWithRecaptcha = await injectRecaptchaFields(
                authInstance,
                request,
                actionName,
                actionName === "getOobCode"
                /* RecaptchaActionName.GET_OOB_CODE */
              );
              return actionMethod(authInstance, requestWithRecaptcha);
            } else {
              return Promise.reject(error);
            }
          });
        }
      }
      async function _initializeRecaptchaConfig(auth) {
        const authInternal = _castAuth(auth);
        const response = await getRecaptchaConfig(authInternal, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        });
        const config2 = new RecaptchaConfig(response);
        if (authInternal.tenantId == null) {
          authInternal._agentRecaptchaConfig = config2;
        } else {
          authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config2;
        }
        if (config2.isProviderEnabled(
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */
        )) {
          const verifier = new RecaptchaEnterpriseVerifier(authInternal);
          void verifier.verify();
        }
      }
      function initializeAuth(app$1, deps) {
        const provider = app._getProvider(app$1, "auth");
        if (provider.isInitialized()) {
          const auth2 = provider.getImmediate();
          const initialOptions = provider.getOptions();
          if (util.deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
            return auth2;
          } else {
            _fail(
              auth2,
              "already-initialized"
              /* AuthErrorCode.ALREADY_INITIALIZED */
            );
          }
        }
        const auth = provider.initialize({ options: deps });
        return auth;
      }
      function _initializeAuthInstance(auth, deps) {
        const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
        const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
        if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
          auth._updateErrorMap(deps.errorMap);
        }
        auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
      }
      function connectAuthEmulator(auth, url, options) {
        const authInternal = _castAuth(auth);
        _assert(
          authInternal._canInitEmulator,
          authInternal,
          "emulator-config-failed"
          /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
        );
        _assert(
          /^https?:\/\//.test(url),
          authInternal,
          "invalid-emulator-scheme"
          /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
        );
        const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
        const protocol = extractProtocol(url);
        const { host, port } = extractHostAndPort(url);
        const portStr = port === null ? "" : `:${port}`;
        authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
        authInternal.settings.appVerificationDisabledForTesting = true;
        authInternal.emulatorConfig = Object.freeze({
          host,
          port,
          protocol: protocol.replace(":", ""),
          options: Object.freeze({ disableWarnings })
        });
        if (!disableWarnings) {
          emitEmulatorWarning();
        }
      }
      function extractProtocol(url) {
        const protocolEnd = url.indexOf(":");
        return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
      }
      function extractHostAndPort(url) {
        const protocol = extractProtocol(url);
        const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
        if (!authority) {
          return { host: "", port: null };
        }
        const hostAndPort = authority[2].split("@").pop() || "";
        const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
        if (bracketedIPv6) {
          const host = bracketedIPv6[1];
          return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
        } else {
          const [host, port] = hostAndPort.split(":");
          return { host, port: parsePort(port) };
        }
      }
      function parsePort(portStr) {
        if (!portStr) {
          return null;
        }
        const port = Number(portStr);
        if (isNaN(port)) {
          return null;
        }
        return port;
      }
      function emitEmulatorWarning() {
        function attachBanner() {
          const el = document.createElement("p");
          const sty = el.style;
          el.innerText = "Running in emulator mode. Do not use with production credentials.";
          sty.position = "fixed";
          sty.width = "100%";
          sty.backgroundColor = "#ffffff";
          sty.border = ".1em solid #000000";
          sty.color = "#b50000";
          sty.bottom = "0px";
          sty.left = "0px";
          sty.margin = "0px";
          sty.zIndex = "10000";
          sty.textAlign = "center";
          el.classList.add("firebase-emulator-warning");
          document.body.appendChild(el);
        }
        if (typeof console !== "undefined" && typeof console.info === "function") {
          console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
        }
        if (typeof window !== "undefined" && typeof document !== "undefined") {
          if (document.readyState === "loading") {
            window.addEventListener("DOMContentLoaded", attachBanner);
          } else {
            attachBanner();
          }
        }
      }
      var AuthCredential = class {
        /** @internal */
        constructor(providerId, signInMethod) {
          this.providerId = providerId;
          this.signInMethod = signInMethod;
        }
        /**
         * Returns a JSON-serializable representation of this object.
         *
         * @returns a JSON-serializable representation of this object.
         */
        toJSON() {
          return debugFail("not implemented");
        }
        /** @internal */
        _getIdTokenResponse(_auth) {
          return debugFail("not implemented");
        }
        /** @internal */
        _linkToIdToken(_auth, _idToken) {
          return debugFail("not implemented");
        }
        /** @internal */
        _getReauthenticationResolver(_auth) {
          return debugFail("not implemented");
        }
      };
      async function resetPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
      }
      async function updateEmailPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function linkEmailPassword(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
      }
      async function applyActionCode$1(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
      }
      async function signInWithPassword(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
      }
      async function sendOobCode(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
      }
      async function sendEmailVerification$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function sendPasswordResetEmail$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function sendSignInLinkToEmail$1(auth, request) {
        return sendOobCode(auth, request);
      }
      async function verifyAndChangeEmail(auth, request) {
        return sendOobCode(auth, request);
      }
      async function signInWithEmailLink$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
      }
      async function signInWithEmailLinkForLinking(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
      }
      var EmailAuthCredential = class _EmailAuthCredential extends AuthCredential {
        /** @internal */
        constructor(_email, _password, signInMethod, _tenantId = null) {
          super("password", signInMethod);
          this._email = _email;
          this._password = _password;
          this._tenantId = _tenantId;
        }
        /** @internal */
        static _fromEmailAndPassword(email, password) {
          return new _EmailAuthCredential(
            email,
            password,
            "password"
            /* SignInMethod.EMAIL_PASSWORD */
          );
        }
        /** @internal */
        static _fromEmailAndCode(email, oobCode, tenantId = null) {
          return new _EmailAuthCredential(email, oobCode, "emailLink", tenantId);
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          return {
            email: this._email,
            password: this._password,
            signInMethod: this.signInMethod,
            tenantId: this._tenantId
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
         *
         * @param json - Either `object` or the stringified representation of the object. When string is
         * provided, `JSON.parse` would be called first.
         *
         * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
            if (obj.signInMethod === "password") {
              return this._fromEmailAndPassword(obj.email, obj.password);
            } else if (obj.signInMethod === "emailLink") {
              return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
            }
          }
          return null;
        }
        /** @internal */
        async _getIdTokenResponse(auth) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword);
            case "emailLink":
              return signInWithEmailLink$1(auth, {
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        async _linkToIdToken(auth, idToken) {
          switch (this.signInMethod) {
            case "password":
              const request = {
                idToken,
                returnSecureToken: true,
                email: this._email,
                password: this._password,
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
              };
              return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword);
            case "emailLink":
              return signInWithEmailLinkForLinking(auth, {
                idToken,
                email: this._email,
                oobCode: this._password
              });
            default:
              _fail(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return this._getIdTokenResponse(auth);
        }
      };
      async function signInWithIdp(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
      }
      var IDP_REQUEST_URI$1 = "http://localhost";
      var OAuthCredential = class _OAuthCredential extends AuthCredential {
        constructor() {
          super(...arguments);
          this.pendingToken = null;
        }
        /** @internal */
        static _fromParams(params) {
          const cred = new _OAuthCredential(params.providerId, params.signInMethod);
          if (params.idToken || params.accessToken) {
            if (params.idToken) {
              cred.idToken = params.idToken;
            }
            if (params.accessToken) {
              cred.accessToken = params.accessToken;
            }
            if (params.nonce && !params.pendingToken) {
              cred.nonce = params.nonce;
            }
            if (params.pendingToken) {
              cred.pendingToken = params.pendingToken;
            }
          } else if (params.oauthToken && params.oauthTokenSecret) {
            cred.accessToken = params.oauthToken;
            cred.secret = params.oauthTokenSecret;
          } else {
            _fail(
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
          }
          return cred;
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod } = obj, rest = tslib.__rest(obj, ["providerId", "signInMethod"]);
          if (!providerId || !signInMethod) {
            return null;
          }
          const cred = new _OAuthCredential(providerId, signInMethod);
          cred.idToken = rest.idToken || void 0;
          cred.accessToken = rest.accessToken || void 0;
          cred.secret = rest.secret;
          cred.nonce = rest.nonce;
          cred.pendingToken = rest.pendingToken || null;
          return cred;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        buildRequest() {
          const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
          };
          if (this.pendingToken) {
            request.pendingToken = this.pendingToken;
          } else {
            const postBody = {};
            if (this.idToken) {
              postBody["id_token"] = this.idToken;
            }
            if (this.accessToken) {
              postBody["access_token"] = this.accessToken;
            }
            if (this.secret) {
              postBody["oauth_token_secret"] = this.secret;
            }
            postBody["providerId"] = this.providerId;
            if (this.nonce && !this.pendingToken) {
              postBody["nonce"] = this.nonce;
            }
            request.postBody = util.querystring(postBody);
          }
          return request;
        }
      };
      async function sendPhoneVerificationCode(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
      }
      async function signInWithPhoneNumber$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
      }
      async function linkWithPhoneNumber$1(auth, request) {
        const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
        if (response.temporaryProof) {
          throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
        }
        return response;
      }
      var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
        [
          "USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
        ]: "user-not-found"
        /* AuthErrorCode.USER_DELETED */
      };
      async function verifyPhoneNumberForExisting(auth, request) {
        const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
      }
      var PhoneAuthCredential = class _PhoneAuthCredential extends AuthCredential {
        constructor(params) {
          super(
            "phone",
            "phone"
            /* SignInMethod.PHONE */
          );
          this.params = params;
        }
        /** @internal */
        static _fromVerification(verificationId, verificationCode) {
          return new _PhoneAuthCredential({ verificationId, verificationCode });
        }
        /** @internal */
        static _fromTokenResponse(phoneNumber, temporaryProof) {
          return new _PhoneAuthCredential({ phoneNumber, temporaryProof });
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          return linkWithPhoneNumber$1(auth, Object.assign({ idToken }, this._makeVerificationRequest()));
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
        }
        /** @internal */
        _makeVerificationRequest() {
          const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
          if (temporaryProof && phoneNumber) {
            return { temporaryProof, phoneNumber };
          }
          return {
            sessionInfo: verificationId,
            code: verificationCode
          };
        }
        /** {@inheritdoc AuthCredential.toJSON} */
        toJSON() {
          const obj = {
            providerId: this.providerId
          };
          if (this.params.phoneNumber) {
            obj.phoneNumber = this.params.phoneNumber;
          }
          if (this.params.temporaryProof) {
            obj.temporaryProof = this.params.temporaryProof;
          }
          if (this.params.verificationCode) {
            obj.verificationCode = this.params.verificationCode;
          }
          if (this.params.verificationId) {
            obj.verificationId = this.params.verificationId;
          }
          return obj;
        }
        /** Generates a phone credential based on a plain object or a JSON string. */
        static fromJSON(json) {
          if (typeof json === "string") {
            json = JSON.parse(json);
          }
          const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
          if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
            return null;
          }
          return new _PhoneAuthCredential({
            verificationId,
            verificationCode,
            phoneNumber,
            temporaryProof
          });
        }
      };
      function parseMode(mode) {
        switch (mode) {
          case "recoverEmail":
            return "RECOVER_EMAIL";
          case "resetPassword":
            return "PASSWORD_RESET";
          case "signIn":
            return "EMAIL_SIGNIN";
          case "verifyEmail":
            return "VERIFY_EMAIL";
          case "verifyAndChangeEmail":
            return "VERIFY_AND_CHANGE_EMAIL";
          case "revertSecondFactorAddition":
            return "REVERT_SECOND_FACTOR_ADDITION";
          default:
            return null;
        }
      }
      function parseDeepLink(url) {
        const link = util.querystringDecode(util.extractQuerystring(url))["link"];
        const doubleDeepLink = link ? util.querystringDecode(util.extractQuerystring(link))["deep_link_id"] : null;
        const iOSDeepLink = util.querystringDecode(util.extractQuerystring(url))["deep_link_id"];
        const iOSDoubleDeepLink = iOSDeepLink ? util.querystringDecode(util.extractQuerystring(iOSDeepLink))["link"] : null;
        return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
      }
      var ActionCodeURL = class _ActionCodeURL {
        /**
         * @param actionLink - The link from which to extract the URL.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @internal
         */
        constructor(actionLink) {
          var _a, _b, _c, _d, _e, _f;
          const searchParams = util.querystringDecode(util.extractQuerystring(actionLink));
          const apiKey = (_a = searchParams[
            "apiKey"
            /* QueryField.API_KEY */
          ]) !== null && _a !== void 0 ? _a : null;
          const code = (_b = searchParams[
            "oobCode"
            /* QueryField.CODE */
          ]) !== null && _b !== void 0 ? _b : null;
          const operation = parseMode((_c = searchParams[
            "mode"
            /* QueryField.MODE */
          ]) !== null && _c !== void 0 ? _c : null);
          _assert(
            apiKey && code && operation,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.apiKey = apiKey;
          this.operation = operation;
          this.code = code;
          this.continueUrl = (_d = searchParams[
            "continueUrl"
            /* QueryField.CONTINUE_URL */
          ]) !== null && _d !== void 0 ? _d : null;
          this.languageCode = (_e = searchParams[
            "languageCode"
            /* QueryField.LANGUAGE_CODE */
          ]) !== null && _e !== void 0 ? _e : null;
          this.tenantId = (_f = searchParams[
            "tenantId"
            /* QueryField.TENANT_ID */
          ]) !== null && _f !== void 0 ? _f : null;
        }
        /**
         * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
         * otherwise returns null.
         *
         * @param link  - The email action link string.
         * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
         *
         * @public
         */
        static parseLink(link) {
          const actionLink = parseDeepLink(link);
          try {
            return new _ActionCodeURL(actionLink);
          } catch (_a) {
            return null;
          }
        }
      };
      function parseActionCodeURL(link) {
        return ActionCodeURL.parseLink(link);
      }
      var EmailAuthProvider = class _EmailAuthProvider {
        constructor() {
          this.providerId = _EmailAuthProvider.PROVIDER_ID;
        }
        /**
         * Initialize an {@link AuthCredential} using an email and password.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credential(email, password);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * const userCredential = await signInWithEmailAndPassword(auth, email, password);
         * ```
         *
         * @param email - Email address.
         * @param password - User account password.
         * @returns The auth provider credential.
         */
        static credential(email, password) {
          return EmailAuthCredential._fromEmailAndPassword(email, password);
        }
        /**
         * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
         * email link operation.
         *
         * @example
         * ```javascript
         * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * ```javascript
         * await sendSignInLinkToEmail(auth, email);
         * // Obtain emailLink from user.
         * const userCredential = await signInWithEmailLink(auth, email, emailLink);
         * ```
         *
         * @param auth - The {@link Auth} instance used to verify the link.
         * @param email - Email address.
         * @param emailLink - Sign-in email link.
         * @returns - The auth provider credential.
         */
        static credentialWithLink(email, emailLink) {
          const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
          _assert(
            actionCodeUrl,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
        }
      };
      EmailAuthProvider.PROVIDER_ID = "password";
      EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
      EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
      var FederatedAuthProvider = class {
        /**
         * Constructor for generic OAuth providers.
         *
         * @param providerId - Provider for which credentials should be generated.
         */
        constructor(providerId) {
          this.providerId = providerId;
          this.defaultLanguageCode = null;
          this.customParameters = {};
        }
        /**
         * Set the language gode.
         *
         * @param languageCode - language code
         */
        setDefaultLanguage(languageCode) {
          this.defaultLanguageCode = languageCode;
        }
        /**
         * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
         * operations.
         *
         * @remarks
         * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
         * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
         *
         * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
         */
        setCustomParameters(customOAuthParameters) {
          this.customParameters = customOAuthParameters;
          return this;
        }
        /**
         * Retrieve the current list of {@link CustomParameters}.
         */
        getCustomParameters() {
          return this.customParameters;
        }
      };
      var BaseOAuthProvider = class extends FederatedAuthProvider {
        constructor() {
          super(...arguments);
          this.scopes = [];
        }
        /**
         * Add an OAuth scope to the credential.
         *
         * @param scope - Provider OAuth scope to add.
         */
        addScope(scope) {
          if (!this.scopes.includes(scope)) {
            this.scopes.push(scope);
          }
          return this;
        }
        /**
         * Retrieve the current list of OAuth scopes.
         */
        getScopes() {
          return [...this.scopes];
        }
      };
      var OAuthProvider = class _OAuthProvider extends BaseOAuthProvider {
        /**
         * Creates an {@link OAuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          _assert(
            "providerId" in obj && "signInMethod" in obj,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(obj);
        }
        /**
         * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
         *
         * @remarks
         * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
         * the raw nonce must match the nonce field in the ID token.
         *
         * @example
         * ```javascript
         * // `googleUser` from the onsuccess Google Sign In callback.
         * // Initialize a generate OAuth provider with a `google.com` providerId.
         * const provider = new OAuthProvider('google.com');
         * const credential = provider.credential({
         *   idToken: googleUser.getAuthResponse().id_token,
         * });
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param params - Either the options object containing the ID token, access token and raw nonce
         * or the ID token string.
         */
        credential(params) {
          return this._credential(Object.assign(Object.assign({}, params), { nonce: params.rawNonce }));
        }
        /** An internal credential method that accepts more permissive options */
        _credential(params) {
          _assert(
            params.idToken || params.accessToken,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), { providerId: this.providerId, signInMethod: this.providerId }));
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
        }
        static oauthCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken, oauthTokenSecret, pendingToken, nonce, providerId } = tokenResponse;
          if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
            return null;
          }
          if (!providerId) {
            return null;
          }
          try {
            return new _OAuthProvider(providerId)._credential({
              idToken: oauthIdToken,
              accessToken: oauthAccessToken,
              nonce,
              pendingToken
            });
          } catch (e) {
            return null;
          }
        }
      };
      var FacebookAuthProvider = class _FacebookAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "facebook.com"
            /* ProviderId.FACEBOOK */
          );
        }
        /**
         * Creates a credential for Facebook.
         *
         * @example
         * ```javascript
         * // `event` from the Facebook auth.authResponseChange callback.
         * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param accessToken - Facebook access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _FacebookAuthProvider.PROVIDER_ID,
            signInMethod: _FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _FacebookAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
      FacebookAuthProvider.PROVIDER_ID = "facebook.com";
      var GoogleAuthProvider = class _GoogleAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "google.com"
            /* ProviderId.GOOGLE */
          );
          this.addScope("profile");
        }
        /**
         * Creates a credential for Google. At least one of ID token and access token is required.
         *
         * @example
         * ```javascript
         * // \`googleUser\` from the onsuccess Google Sign In callback.
         * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
         * const result = await signInWithCredential(credential);
         * ```
         *
         * @param idToken - Google ID token.
         * @param accessToken - Google access token.
         */
        static credential(idToken, accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GoogleAuthProvider.PROVIDER_ID,
            signInMethod: _GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GoogleAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthIdToken, oauthAccessToken } = tokenResponse;
          if (!oauthIdToken && !oauthAccessToken) {
            return null;
          }
          try {
            return _GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
      GoogleAuthProvider.PROVIDER_ID = "google.com";
      var GithubAuthProvider = class _GithubAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "github.com"
            /* ProviderId.GITHUB */
          );
        }
        /**
         * Creates a credential for GitHub.
         *
         * @param accessToken - GitHub access token.
         */
        static credential(accessToken) {
          return OAuthCredential._fromParams({
            providerId: _GithubAuthProvider.PROVIDER_ID,
            signInMethod: _GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _GithubAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
            return null;
          }
          if (!tokenResponse.oauthAccessToken) {
            return null;
          }
          try {
            return _GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
          } catch (_a) {
            return null;
          }
        }
      };
      GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
      GithubAuthProvider.PROVIDER_ID = "github.com";
      var IDP_REQUEST_URI = "http://localhost";
      var SAMLAuthCredential = class _SAMLAuthCredential extends AuthCredential {
        /** @internal */
        constructor(providerId, pendingToken) {
          super(providerId, providerId);
          this.pendingToken = pendingToken;
        }
        /** @internal */
        _getIdTokenResponse(auth) {
          const request = this.buildRequest();
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _linkToIdToken(auth, idToken) {
          const request = this.buildRequest();
          request.idToken = idToken;
          return signInWithIdp(auth, request);
        }
        /** @internal */
        _getReauthenticationResolver(auth) {
          const request = this.buildRequest();
          request.autoCreate = false;
          return signInWithIdp(auth, request);
        }
        /** {@inheritdoc AuthCredential.toJSON}  */
        toJSON() {
          return {
            signInMethod: this.signInMethod,
            providerId: this.providerId,
            pendingToken: this.pendingToken
          };
        }
        /**
         * Static method to deserialize a JSON representation of an object into an
         * {@link  AuthCredential}.
         *
         * @param json - Input can be either Object or the stringified representation of the object.
         * When string is provided, JSON.parse would be called first.
         *
         * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
         */
        static fromJSON(json) {
          const obj = typeof json === "string" ? JSON.parse(json) : json;
          const { providerId, signInMethod, pendingToken } = obj;
          if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
            return null;
          }
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        /**
         * Helper static method to avoid exposing the constructor to end users.
         *
         * @internal
         */
        static _create(providerId, pendingToken) {
          return new _SAMLAuthCredential(providerId, pendingToken);
        }
        buildRequest() {
          return {
            requestUri: IDP_REQUEST_URI,
            returnSecureToken: true,
            pendingToken: this.pendingToken
          };
        }
      };
      var SAML_PROVIDER_PREFIX = "saml.";
      var SAMLAuthProvider = class _SAMLAuthProvider extends FederatedAuthProvider {
        /**
         * Constructor. The providerId must start with "saml."
         * @param providerId - SAML provider ID.
         */
        constructor(providerId) {
          _assert(
            providerId.startsWith(SAML_PROVIDER_PREFIX),
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          super(providerId);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential} after a
         * successful SAML flow completes.
         *
         * @remarks
         *
         * For example, to get an {@link AuthCredential}, you could write the
         * following code:
         *
         * ```js
         * const userCredential = await signInWithPopup(auth, samlProvider);
         * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
         * ```
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
        }
        /**
         * Creates an {@link AuthCredential} from a JSON string or a plain object.
         * @param json - A plain object or a JSON string
         */
        static credentialFromJSON(json) {
          const credential = SAMLAuthCredential.fromJSON(json);
          _assert(
            credential,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return credential;
        }
        static samlCredentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { pendingToken, providerId } = tokenResponse;
          if (!pendingToken || !providerId) {
            return null;
          }
          try {
            return SAMLAuthCredential._create(providerId, pendingToken);
          } catch (e) {
            return null;
          }
        }
      };
      var TwitterAuthProvider = class _TwitterAuthProvider extends BaseOAuthProvider {
        constructor() {
          super(
            "twitter.com"
            /* ProviderId.TWITTER */
          );
        }
        /**
         * Creates a credential for Twitter.
         *
         * @param token - Twitter access token.
         * @param secret - Twitter secret.
         */
        static credential(token, secret) {
          return OAuthCredential._fromParams({
            providerId: _TwitterAuthProvider.PROVIDER_ID,
            signInMethod: _TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token,
            oauthTokenSecret: secret
          });
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          return _TwitterAuthProvider.credentialFromTaggedObject(userCredential);
        }
        /**
         * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
         * thrown during a sign-in, link, or reauthenticate operation.
         *
         * @param userCredential - The user credential.
         */
        static credentialFromError(error) {
          return _TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
          if (!oauthAccessToken || !oauthTokenSecret) {
            return null;
          }
          try {
            return _TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
          } catch (_a) {
            return null;
          }
        }
      };
      TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
      TwitterAuthProvider.PROVIDER_ID = "twitter.com";
      async function signUp(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
      }
      var UserCredentialImpl = class _UserCredentialImpl {
        constructor(params) {
          this.user = params.user;
          this.providerId = params.providerId;
          this._tokenResponse = params._tokenResponse;
          this.operationType = params.operationType;
        }
        static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
          const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
          const providerId = providerIdForResponse(idTokenResponse);
          const userCred = new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse,
            operationType
          });
          return userCred;
        }
        static async _forOperation(user, operationType, response) {
          await user._updateTokensIfNecessary(
            response,
            /* reload */
            true
          );
          const providerId = providerIdForResponse(response);
          return new _UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: response,
            operationType
          });
        }
      };
      function providerIdForResponse(response) {
        if (response.providerId) {
          return response.providerId;
        }
        if ("phoneNumber" in response) {
          return "phone";
        }
        return null;
      }
      async function signInAnonymously(auth) {
        var _a;
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        await authInternal._initializationPromise;
        if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
          return new UserCredentialImpl({
            user: authInternal.currentUser,
            providerId: null,
            operationType: "signIn"
            /* OperationType.SIGN_IN */
          });
        }
        const response = await signUp(authInternal, {
          returnSecureToken: true
        });
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
        await authInternal._updateCurrentUser(userCredential.user);
        return userCredential;
      }
      var MultiFactorError = class _MultiFactorError extends util.FirebaseError {
        constructor(auth, error, operationType, user) {
          var _a;
          super(error.code, error.message);
          this.operationType = operationType;
          this.user = user;
          Object.setPrototypeOf(this, _MultiFactorError.prototype);
          this.customData = {
            appName: auth.name,
            tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
            _serverResponse: error.customData._serverResponse,
            operationType
          };
        }
        static _fromErrorAndOperation(auth, error, operationType, user) {
          return new _MultiFactorError(auth, error, operationType, user);
        }
      };
      function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
        const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
        return idTokenProvider.catch((error) => {
          if (error.code === `auth/${"multi-factor-auth-required"}`) {
            throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
          }
          throw error;
        });
      }
      function providerDataAsNames(providerData) {
        return new Set(providerData.map(({ providerId }) => providerId).filter((pid2) => !!pid2));
      }
      async function unlink(user, providerId) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(true, userInternal, providerId);
        const { providerUserInfo } = await deleteLinkedAccounts(userInternal.auth, {
          idToken: await userInternal.getIdToken(),
          deleteProvider: [providerId]
        });
        const providersLeft = providerDataAsNames(providerUserInfo || []);
        userInternal.providerData = userInternal.providerData.filter((pd) => providersLeft.has(pd.providerId));
        if (!providersLeft.has(
          "phone"
          /* ProviderId.PHONE */
        )) {
          userInternal.phoneNumber = null;
        }
        await userInternal.auth._persistUserIfCurrent(userInternal);
        return userInternal;
      }
      async function _link$1(user, credential, bypassAuthState = false) {
        const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
        return UserCredentialImpl._forOperation(user, "link", response);
      }
      async function _assertLinkedStatus(expected, user, provider) {
        await _reloadWithoutSaving(user);
        const providerIds = providerDataAsNames(user.providerData);
        const code = expected === false ? "provider-already-linked" : "no-such-provider";
        _assert(providerIds.has(provider) === expected, user.auth, code);
      }
      async function _reauthenticate(user, credential, bypassAuthState = false) {
        const { auth } = user;
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const operationType = "reauthenticate";
        try {
          const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
          _assert(
            response.idToken,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const parsed = _parseToken(response.idToken);
          _assert(
            parsed,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const { sub: localId } = parsed;
          _assert(
            user.uid === localId,
            auth,
            "user-mismatch"
            /* AuthErrorCode.USER_MISMATCH */
          );
          return UserCredentialImpl._forOperation(user, operationType, response);
        } catch (e) {
          if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
            _fail(
              auth,
              "user-mismatch"
              /* AuthErrorCode.USER_MISMATCH */
            );
          }
          throw e;
        }
      }
      async function _signInWithCredential(auth, credential, bypassAuthState = false) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const operationType = "signIn";
        const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
        if (!bypassAuthState) {
          await auth._updateCurrentUser(userCredential.user);
        }
        return userCredential;
      }
      async function signInWithCredential(auth, credential) {
        return _signInWithCredential(_castAuth(auth), credential);
      }
      async function linkWithCredential(user, credential) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(false, userInternal, credential.providerId);
        return _link$1(userInternal, credential);
      }
      async function reauthenticateWithCredential(user, credential) {
        return _reauthenticate(util.getModularInstance(user), credential);
      }
      async function signInWithCustomToken$1(auth, request) {
        return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
      }
      async function signInWithCustomToken(auth, customToken) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const response = await signInWithCustomToken$1(authInternal, {
          token: customToken,
          returnSecureToken: true
        });
        const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
        await authInternal._updateCurrentUser(cred.user);
        return cred;
      }
      var MultiFactorInfoImpl = class {
        constructor(factorId, response) {
          this.factorId = factorId;
          this.uid = response.mfaEnrollmentId;
          this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
          this.displayName = response.displayName;
        }
        static _fromServerResponse(auth, enrollment) {
          if ("phoneInfo" in enrollment) {
            return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          } else if ("totpInfo" in enrollment) {
            return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
          }
          return _fail(
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
      };
      var PhoneMultiFactorInfoImpl = class _PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("phone", response);
          this.phoneNumber = response.phoneInfo;
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _PhoneMultiFactorInfoImpl(enrollment);
        }
      };
      var TotpMultiFactorInfoImpl = class _TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
        constructor(response) {
          super("totp", response);
        }
        static _fromServerResponse(_auth, enrollment) {
          return new _TotpMultiFactorInfoImpl(enrollment);
        }
      };
      function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
        var _a;
        _assert(
          ((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0,
          auth,
          "invalid-continue-uri"
          /* AuthErrorCode.INVALID_CONTINUE_URI */
        );
        _assert(
          typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0,
          auth,
          "invalid-dynamic-link-domain"
          /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
        );
        request.continueUrl = actionCodeSettings.url;
        request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
        request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
        if (actionCodeSettings.iOS) {
          _assert(
            actionCodeSettings.iOS.bundleId.length > 0,
            auth,
            "missing-ios-bundle-id"
            /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
          );
          request.iOSBundleId = actionCodeSettings.iOS.bundleId;
        }
        if (actionCodeSettings.android) {
          _assert(
            actionCodeSettings.android.packageName.length > 0,
            auth,
            "missing-android-pkg-name"
            /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
          );
          request.androidInstallApp = actionCodeSettings.android.installApp;
          request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
          request.androidPackageName = actionCodeSettings.android.packageName;
        }
      }
      async function recachePasswordPolicy(auth) {
        const authInternal = _castAuth(auth);
        if (authInternal._getPasswordPolicyInternal()) {
          await authInternal._updatePasswordPolicy();
        }
      }
      async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
        const authInternal = _castAuth(auth);
        const request = {
          requestType: "PASSWORD_RESET",
          email,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
        }
        await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1);
      }
      async function confirmPasswordReset(auth, oobCode, newPassword) {
        await resetPassword(util.getModularInstance(auth), {
          oobCode,
          newPassword
        }).catch(async (error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
      }
      async function applyActionCode(auth, oobCode) {
        await applyActionCode$1(util.getModularInstance(auth), { oobCode });
      }
      async function checkActionCode(auth, oobCode) {
        const authModular = util.getModularInstance(auth);
        const response = await resetPassword(authModular, { oobCode });
        const operation = response.requestType;
        _assert(
          operation,
          authModular,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        switch (operation) {
          case "EMAIL_SIGNIN":
            break;
          case "VERIFY_AND_CHANGE_EMAIL":
            _assert(
              response.newEmail,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
            break;
          case "REVERT_SECOND_FACTOR_ADDITION":
            _assert(
              response.mfaInfo,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
          // fall through
          default:
            _assert(
              response.email,
              authModular,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
        }
        let multiFactorInfo = null;
        if (response.mfaInfo) {
          multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
        }
        return {
          data: {
            email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
            previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
            multiFactorInfo
          },
          operation
        };
      }
      async function verifyPasswordResetCode(auth, code) {
        const { data } = await checkActionCode(util.getModularInstance(auth), code);
        return data.email;
      }
      async function createUserWithEmailAndPassword(auth, email, password) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const request = {
          returnSecureToken: true,
          email,
          password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp);
        const response = await signUpResponse.catch((error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
        const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
        await authInternal._updateCurrentUser(userCredential.user);
        return userCredential;
      }
      function signInWithEmailAndPassword(auth, email, password) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        return signInWithCredential(util.getModularInstance(auth), EmailAuthProvider.credential(email, password)).catch(async (error) => {
          if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
            void recachePasswordPolicy(auth);
          }
          throw error;
        });
      }
      async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
        const authInternal = _castAuth(auth);
        const request = {
          requestType: "EMAIL_SIGNIN",
          email,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        function setActionCodeSettings(request2, actionCodeSettings2) {
          _assert(
            actionCodeSettings2.handleCodeInApp,
            authInternal,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          if (actionCodeSettings2) {
            _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
          }
        }
        setActionCodeSettings(request, actionCodeSettings);
        await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1);
      }
      function isSignInWithEmailLink(auth, emailLink) {
        const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
        return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
      }
      async function signInWithEmailLink(auth, email, emailLink) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authModular = util.getModularInstance(auth);
        const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
        _assert(
          credential._tenantId === (authModular.tenantId || null),
          authModular,
          "tenant-id-mismatch"
          /* AuthErrorCode.TENANT_ID_MISMATCH */
        );
        return signInWithCredential(authModular, credential);
      }
      async function createAuthUri(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
      }
      async function fetchSignInMethodsForEmail(auth, email) {
        const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
        const request = {
          identifier: email,
          continueUri
        };
        const { signinMethods } = await createAuthUri(util.getModularInstance(auth), request);
        return signinMethods || [];
      }
      async function sendEmailVerification(user, actionCodeSettings) {
        const userInternal = util.getModularInstance(user);
        const idToken = await user.getIdToken();
        const request = {
          requestType: "VERIFY_EMAIL",
          idToken
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
        }
        const { email } = await sendEmailVerification$1(userInternal.auth, request);
        if (email !== user.email) {
          await user.reload();
        }
      }
      async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
        const userInternal = util.getModularInstance(user);
        const idToken = await user.getIdToken();
        const request = {
          requestType: "VERIFY_AND_CHANGE_EMAIL",
          idToken,
          newEmail
        };
        if (actionCodeSettings) {
          _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
        }
        const { email } = await verifyAndChangeEmail(userInternal.auth, request);
        if (email !== user.email) {
          await user.reload();
        }
      }
      async function updateProfile$1(auth, request) {
        return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
      }
      async function updateProfile(user, { displayName, photoURL: photoUrl }) {
        if (displayName === void 0 && photoUrl === void 0) {
          return;
        }
        const userInternal = util.getModularInstance(user);
        const idToken = await userInternal.getIdToken();
        const profileRequest = {
          idToken,
          displayName,
          photoUrl,
          returnSecureToken: true
        };
        const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
        userInternal.displayName = response.displayName || null;
        userInternal.photoURL = response.photoUrl || null;
        const passwordProvider = userInternal.providerData.find(
          ({ providerId }) => providerId === "password"
          /* ProviderId.PASSWORD */
        );
        if (passwordProvider) {
          passwordProvider.displayName = userInternal.displayName;
          passwordProvider.photoURL = userInternal.photoURL;
        }
        await userInternal._updateTokensIfNecessary(response);
      }
      function updateEmail(user, newEmail) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        return updateEmailOrPassword(userInternal, newEmail, null);
      }
      function updatePassword(user, newPassword) {
        return updateEmailOrPassword(util.getModularInstance(user), null, newPassword);
      }
      async function updateEmailOrPassword(user, email, password) {
        const { auth } = user;
        const idToken = await user.getIdToken();
        const request = {
          idToken,
          returnSecureToken: true
        };
        if (email) {
          request.email = email;
        }
        if (password) {
          request.password = password;
        }
        const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
        await user._updateTokensIfNecessary(
          response,
          /* reload */
          true
        );
      }
      function _fromIdTokenResponse(idTokenResponse) {
        var _a, _b;
        if (!idTokenResponse) {
          return null;
        }
        const { providerId } = idTokenResponse;
        const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
        const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
        if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
          const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
          if (signInProvider) {
            const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
            return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
          }
        }
        if (!providerId) {
          return null;
        }
        switch (providerId) {
          case "facebook.com":
            return new FacebookAdditionalUserInfo(isNewUser, profile);
          case "github.com":
            return new GithubAdditionalUserInfo(isNewUser, profile);
          case "google.com":
            return new GoogleAdditionalUserInfo(isNewUser, profile);
          case "twitter.com":
            return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
          case "custom":
          case "anonymous":
            return new GenericAdditionalUserInfo(isNewUser, null);
          default:
            return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
        }
      }
      var GenericAdditionalUserInfo = class {
        constructor(isNewUser, providerId, profile = {}) {
          this.isNewUser = isNewUser;
          this.providerId = providerId;
          this.profile = profile;
        }
      };
      var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, providerId, profile, username) {
          super(isNewUser, providerId, profile);
          this.username = username;
        }
      };
      var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "facebook.com", profile);
        }
      };
      var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile) {
          super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
        }
      };
      var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
        constructor(isNewUser, profile) {
          super(isNewUser, "google.com", profile);
        }
      };
      var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
        constructor(isNewUser, profile, screenName) {
          super(isNewUser, "twitter.com", profile, screenName);
        }
      };
      function getAdditionalUserInfo(userCredential) {
        const { user, _tokenResponse } = userCredential;
        if (user.isAnonymous && !_tokenResponse) {
          return {
            providerId: null,
            isNewUser: false,
            profile: null
          };
        }
        return _fromIdTokenResponse(_tokenResponse);
      }
      function setPersistence(auth, persistence) {
        return util.getModularInstance(auth).setPersistence(persistence);
      }
      function initializeRecaptchaConfig(auth) {
        return _initializeRecaptchaConfig(auth);
      }
      async function validatePassword(auth, password) {
        const authInternal = _castAuth(auth);
        return authInternal.validatePassword(password);
      }
      function onIdTokenChanged(auth, nextOrObserver, error, completed) {
        return util.getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
      }
      function beforeAuthStateChanged(auth, callback, onAbort) {
        return util.getModularInstance(auth).beforeAuthStateChanged(callback, onAbort);
      }
      function onAuthStateChanged(auth, nextOrObserver, error, completed) {
        return util.getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
      }
      function useDeviceLanguage(auth) {
        util.getModularInstance(auth).useDeviceLanguage();
      }
      function updateCurrentUser(auth, user) {
        return util.getModularInstance(auth).updateCurrentUser(user);
      }
      function signOut(auth) {
        return util.getModularInstance(auth).signOut();
      }
      function revokeAccessToken(auth, token) {
        const authInternal = _castAuth(auth);
        return authInternal.revokeAccessToken(token);
      }
      async function deleteUser(user) {
        return util.getModularInstance(user).delete();
      }
      var MultiFactorSessionImpl = class _MultiFactorSessionImpl {
        constructor(type, credential, user) {
          this.type = type;
          this.credential = credential;
          this.user = user;
        }
        static _fromIdtoken(idToken, user) {
          return new _MultiFactorSessionImpl("enroll", idToken, user);
        }
        static _fromMfaPendingCredential(mfaPendingCredential) {
          return new _MultiFactorSessionImpl("signin", mfaPendingCredential);
        }
        toJSON() {
          const key = this.type === "enroll" ? "idToken" : "pendingCredential";
          return {
            multiFactorSession: {
              [key]: this.credential
            }
          };
        }
        static fromJSON(obj) {
          var _a, _b;
          if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
            if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
              return _MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
            } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
              return _MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
            }
          }
          return null;
        }
      };
      var MultiFactorResolverImpl = class _MultiFactorResolverImpl {
        constructor(session, hints, signInResolver) {
          this.session = session;
          this.hints = hints;
          this.signInResolver = signInResolver;
        }
        /** @internal */
        static _fromError(authExtern, error) {
          const auth = _castAuth(authExtern);
          const serverResponse = error.customData._serverResponse;
          const hints = (serverResponse.mfaInfo || []).map((enrollment) => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
          _assert(
            serverResponse.mfaPendingCredential,
            auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
          return new _MultiFactorResolverImpl(session, hints, async (assertion) => {
            const mfaResponse = await assertion._process(auth, session);
            delete serverResponse.mfaInfo;
            delete serverResponse.mfaPendingCredential;
            const idTokenResponse = Object.assign(Object.assign({}, serverResponse), { idToken: mfaResponse.idToken, refreshToken: mfaResponse.refreshToken });
            switch (error.operationType) {
              case "signIn":
                const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
                await auth._updateCurrentUser(userCredential.user);
                return userCredential;
              case "reauthenticate":
                _assert(
                  error.user,
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
                return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
              default:
                _fail(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                );
            }
          });
        }
        async resolveSignIn(assertionExtern) {
          const assertion = assertionExtern;
          return this.signInResolver(assertion);
        }
      };
      function getMultiFactorResolver(auth, error) {
        var _a;
        const authModular = util.getModularInstance(auth);
        const errorInternal = error;
        _assert(
          error.customData.operationType,
          authModular,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        _assert(
          (_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential,
          authModular,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        return MultiFactorResolverImpl._fromError(authModular, errorInternal);
      }
      function startEnrollPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
      }
      function finalizeEnrollPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
      }
      function startEnrollTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
      }
      function finalizeEnrollTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
      }
      function withdrawMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
      }
      var MultiFactorUserImpl = class _MultiFactorUserImpl {
        constructor(user) {
          this.user = user;
          this.enrolledFactors = [];
          user._onReload((userInfo) => {
            if (userInfo.mfaInfo) {
              this.enrolledFactors = userInfo.mfaInfo.map((enrollment) => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
            }
          });
        }
        static _fromUser(user) {
          return new _MultiFactorUserImpl(user);
        }
        async getSession() {
          return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
        }
        async enroll(assertionExtern, displayName) {
          const assertion = assertionExtern;
          const session = await this.getSession();
          const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
          await this.user._updateTokensIfNecessary(finalizeMfaResponse);
          return this.user.reload();
        }
        async unenroll(infoOrUid) {
          const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
          const idToken = await this.user.getIdToken();
          try {
            const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
              idToken,
              mfaEnrollmentId
            }));
            this.enrolledFactors = this.enrolledFactors.filter(({ uid }) => uid !== mfaEnrollmentId);
            await this.user._updateTokensIfNecessary(idTokenResponse);
            await this.user.reload();
          } catch (e) {
            throw e;
          }
        }
      };
      var multiFactorUserCache = /* @__PURE__ */ new WeakMap();
      function multiFactor(user) {
        const userModular = util.getModularInstance(user);
        if (!multiFactorUserCache.has(userModular)) {
          multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
        }
        return multiFactorUserCache.get(userModular);
      }
      var STORAGE_AVAILABLE_KEY = "__sak";
      var BrowserPersistenceClass = class {
        constructor(storageRetriever, type) {
          this.storageRetriever = storageRetriever;
          this.type = type;
        }
        _isAvailable() {
          try {
            if (!this.storage) {
              return Promise.resolve(false);
            }
            this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
          } catch (_a) {
            return Promise.resolve(false);
          }
        }
        _set(key, value) {
          this.storage.setItem(key, JSON.stringify(value));
          return Promise.resolve();
        }
        _get(key) {
          const json = this.storage.getItem(key);
          return Promise.resolve(json ? JSON.parse(json) : null);
        }
        _remove(key) {
          this.storage.removeItem(key);
          return Promise.resolve();
        }
        get storage() {
          return this.storageRetriever();
        }
      };
      var _POLLING_INTERVAL_MS$1 = 1e3;
      var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
      var BrowserLocalPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.localStorage,
            "LOCAL"
            /* PersistenceType.LOCAL */
          );
          this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.fallbackToPolling = _isMobileBrowser();
          this._shouldAllowMigration = true;
        }
        forAllChangedKeys(cb) {
          for (const key of Object.keys(this.listeners)) {
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            if (newValue !== oldValue) {
              cb(key, oldValue, newValue);
            }
          }
        }
        onStorageEvent(event, poll = false) {
          if (!event.key) {
            this.forAllChangedKeys((key2, _oldValue, newValue) => {
              this.notifyListeners(key2, newValue);
            });
            return;
          }
          const key = event.key;
          if (poll) {
            this.detachListener();
          } else {
            this.stopPolling();
          }
          const triggerListeners = () => {
            const storedValue2 = this.storage.getItem(key);
            if (!poll && this.localCache[key] === storedValue2) {
              return;
            }
            this.notifyListeners(key, storedValue2);
          };
          const storedValue = this.storage.getItem(key);
          if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
            setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
          } else {
            triggerListeners();
          }
        }
        notifyListeners(key, value) {
          this.localCache[key] = value;
          const listeners2 = this.listeners[key];
          if (listeners2) {
            for (const listener of Array.from(listeners2)) {
              listener(value ? JSON.parse(value) : value);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((key, oldValue, newValue) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key,
                  oldValue,
                  newValue
                }),
                /* poll */
                true
              );
            });
          }, _POLLING_INTERVAL_MS$1);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        attachListener() {
          window.addEventListener("storage", this.boundEventHandler);
        }
        detachListener() {
          window.removeEventListener("storage", this.boundEventHandler);
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            if (this.fallbackToPolling) {
              this.startPolling();
            } else {
              this.attachListener();
            }
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            this.localCache[key] = this.storage.getItem(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
          }
        }
        // Update local cache on base operations:
        async _set(key, value) {
          await super._set(key, value);
          this.localCache[key] = JSON.stringify(value);
        }
        async _get(key) {
          const value = await super._get(key);
          this.localCache[key] = JSON.stringify(value);
          return value;
        }
        async _remove(key) {
          await super._remove(key);
          delete this.localCache[key];
        }
      };
      BrowserLocalPersistence.type = "LOCAL";
      var browserLocalPersistence = BrowserLocalPersistence;
      var BrowserSessionPersistence = class extends BrowserPersistenceClass {
        constructor() {
          super(
            () => window.sessionStorage,
            "SESSION"
            /* PersistenceType.SESSION */
          );
        }
        _addListener(_key, _listener) {
          return;
        }
        _removeListener(_key, _listener) {
          return;
        }
      };
      BrowserSessionPersistence.type = "SESSION";
      var browserSessionPersistence = BrowserSessionPersistence;
      function _allSettled(promises) {
        return Promise.all(promises.map(async (promise) => {
          try {
            const value = await promise;
            return {
              fulfilled: true,
              value
            };
          } catch (reason) {
            return {
              fulfilled: false,
              reason
            };
          }
        }));
      }
      var Receiver = class _Receiver {
        constructor(eventTarget) {
          this.eventTarget = eventTarget;
          this.handlersMap = {};
          this.boundEventHandler = this.handleEvent.bind(this);
        }
        /**
         * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
         *
         * @param eventTarget - An event target (such as window or self) through which the underlying
         * messages will be received.
         */
        static _getInstance(eventTarget) {
          const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
          if (existingInstance) {
            return existingInstance;
          }
          const newInstance = new _Receiver(eventTarget);
          this.receivers.push(newInstance);
          return newInstance;
        }
        isListeningto(eventTarget) {
          return this.eventTarget === eventTarget;
        }
        /**
         * Fans out a MessageEvent to the appropriate listeners.
         *
         * @remarks
         * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
         * finished processing.
         *
         * @param event - The MessageEvent.
         *
         */
        async handleEvent(event) {
          const messageEvent = event;
          const { eventId, eventType, data } = messageEvent.data;
          const handlers = this.handlersMap[eventType];
          if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
            return;
          }
          messageEvent.ports[0].postMessage({
            status: "ack",
            eventId,
            eventType
          });
          const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
          const response = await _allSettled(promises);
          messageEvent.ports[0].postMessage({
            status: "done",
            eventId,
            eventType,
            response
          });
        }
        /**
         * Subscribe an event handler for a particular event.
         *
         * @param eventType - Event name to subscribe to.
         * @param eventHandler - The event handler which should receive the events.
         *
         */
        _subscribe(eventType, eventHandler) {
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.addEventListener("message", this.boundEventHandler);
          }
          if (!this.handlersMap[eventType]) {
            this.handlersMap[eventType] = /* @__PURE__ */ new Set();
          }
          this.handlersMap[eventType].add(eventHandler);
        }
        /**
         * Unsubscribe an event handler from a particular event.
         *
         * @param eventType - Event name to unsubscribe from.
         * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
         *
         */
        _unsubscribe(eventType, eventHandler) {
          if (this.handlersMap[eventType] && eventHandler) {
            this.handlersMap[eventType].delete(eventHandler);
          }
          if (!eventHandler || this.handlersMap[eventType].size === 0) {
            delete this.handlersMap[eventType];
          }
          if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.removeEventListener("message", this.boundEventHandler);
          }
        }
      };
      Receiver.receivers = [];
      function _generateEventId(prefix = "", digits = 10) {
        let random = "";
        for (let i = 0; i < digits; i++) {
          random += Math.floor(Math.random() * 10);
        }
        return prefix + random;
      }
      var Sender = class {
        constructor(target) {
          this.target = target;
          this.handlers = /* @__PURE__ */ new Set();
        }
        /**
         * Unsubscribe the handler and remove it from our tracking Set.
         *
         * @param handler - The handler to unsubscribe.
         */
        removeMessageHandler(handler) {
          if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
            handler.messageChannel.port1.close();
          }
          this.handlers.delete(handler);
        }
        /**
         * Send a message to the Receiver located at {@link target}.
         *
         * @remarks
         * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
         * receiver has had a chance to fully process the event.
         *
         * @param eventType - Type of event to send.
         * @param data - The payload of the event.
         * @param timeout - Timeout for waiting on an ACK from the receiver.
         *
         * @returns An array of settled promises from all the handlers that were listening on the receiver.
         */
        async _send(eventType, data, timeout = 50) {
          const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
          if (!messageChannel) {
            throw new Error(
              "connection_unavailable"
              /* _MessageError.CONNECTION_UNAVAILABLE */
            );
          }
          let completionTimer;
          let handler;
          return new Promise((resolve, reject) => {
            const eventId = _generateEventId("", 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(() => {
              reject(new Error(
                "unsupported_event"
                /* _MessageError.UNSUPPORTED_EVENT */
              ));
            }, timeout);
            handler = {
              messageChannel,
              onMessage(event) {
                const messageEvent = event;
                if (messageEvent.data.eventId !== eventId) {
                  return;
                }
                switch (messageEvent.data.status) {
                  case "ack":
                    clearTimeout(ackTimer);
                    completionTimer = setTimeout(
                      () => {
                        reject(new Error(
                          "timeout"
                          /* _MessageError.TIMEOUT */
                        ));
                      },
                      3e3
                      /* _TimeoutDuration.COMPLETION */
                    );
                    break;
                  case "done":
                    clearTimeout(completionTimer);
                    resolve(messageEvent.data.response);
                    break;
                  default:
                    clearTimeout(ackTimer);
                    clearTimeout(completionTimer);
                    reject(new Error(
                      "invalid_response"
                      /* _MessageError.INVALID_RESPONSE */
                    ));
                    break;
                }
              }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener("message", handler.onMessage);
            this.target.postMessage({
              eventType,
              eventId,
              data
            }, [messageChannel.port2]);
          }).finally(() => {
            if (handler) {
              this.removeMessageHandler(handler);
            }
          });
        }
      };
      function _window() {
        return window;
      }
      function _setWindowLocation(url) {
        _window().location.href = url;
      }
      function _isWorker() {
        return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
      }
      async function _getActiveServiceWorker() {
        if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
          return null;
        }
        try {
          const registration = await navigator.serviceWorker.ready;
          return registration.active;
        } catch (_a) {
          return null;
        }
      }
      function _getServiceWorkerController() {
        var _a;
        return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
      }
      function _getWorkerGlobalScope() {
        return _isWorker() ? self : null;
      }
      var DB_NAME = "firebaseLocalStorageDb";
      var DB_VERSION = 1;
      var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
      var DB_DATA_KEYPATH = "fbase_key";
      var DBPromise = class {
        constructor(request) {
          this.request = request;
        }
        toPromise() {
          return new Promise((resolve, reject) => {
            this.request.addEventListener("success", () => {
              resolve(this.request.result);
            });
            this.request.addEventListener("error", () => {
              reject(this.request.error);
            });
          });
        }
      };
      function getObjectStore(db, isReadWrite) {
        return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
      }
      function _deleteDatabase() {
        const request = indexedDB.deleteDatabase(DB_NAME);
        return new DBPromise(request).toPromise();
      }
      function _openDatabase() {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        return new Promise((resolve, reject) => {
          request.addEventListener("error", () => {
            reject(request.error);
          });
          request.addEventListener("upgradeneeded", () => {
            const db = request.result;
            try {
              db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
            } catch (e) {
              reject(e);
            }
          });
          request.addEventListener("success", async () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
              db.close();
              await _deleteDatabase();
              resolve(await _openDatabase());
            } else {
              resolve(db);
            }
          });
        });
      }
      async function _putObject(db, key, value) {
        const request = getObjectStore(db, true).put({
          [DB_DATA_KEYPATH]: key,
          value
        });
        return new DBPromise(request).toPromise();
      }
      async function getObject(db, key) {
        const request = getObjectStore(db, false).get(key);
        const data = await new DBPromise(request).toPromise();
        return data === void 0 ? null : data.value;
      }
      function _deleteObject(db, key) {
        const request = getObjectStore(db, true).delete(key);
        return new DBPromise(request).toPromise();
      }
      var _POLLING_INTERVAL_MS = 800;
      var _TRANSACTION_RETRY_COUNT = 3;
      var IndexedDBLocalPersistence = class {
        constructor() {
          this.type = "LOCAL";
          this._shouldAllowMigration = true;
          this.listeners = {};
          this.localCache = {};
          this.pollTimer = null;
          this.pendingWrites = 0;
          this.receiver = null;
          this.sender = null;
          this.serviceWorkerReceiverAvailable = false;
          this.activeServiceWorker = null;
          this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
          }, () => {
          });
        }
        async _openDb() {
          if (this.db) {
            return this.db;
          }
          this.db = await _openDatabase();
          return this.db;
        }
        async _withRetries(op) {
          let numAttempts = 0;
          while (true) {
            try {
              const db = await this._openDb();
              return await op(db);
            } catch (e) {
              if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
                throw e;
              }
              if (this.db) {
                this.db.close();
                this.db = void 0;
              }
            }
          }
        }
        /**
         * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
         * postMessage interface to send these events to the worker ourselves.
         */
        async initializeServiceWorkerMessaging() {
          return _isWorker() ? this.initializeReceiver() : this.initializeSender();
        }
        /**
         * As the worker we should listen to events from the main window.
         */
        async initializeReceiver() {
          this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
          this.receiver._subscribe("keyChanged", async (_origin, data) => {
            const keys = await this._poll();
            return {
              keyProcessed: keys.includes(data.key)
            };
          });
          this.receiver._subscribe("ping", async (_origin, _data) => {
            return [
              "keyChanged"
              /* _EventType.KEY_CHANGED */
            ];
          });
        }
        /**
         * As the main window, we should let the worker know when keys change (set and remove).
         *
         * @remarks
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
         * may not resolve.
         */
        async initializeSender() {
          var _a, _b;
          this.activeServiceWorker = await _getActiveServiceWorker();
          if (!this.activeServiceWorker) {
            return;
          }
          this.sender = new Sender(this.activeServiceWorker);
          const results = await this.sender._send(
            "ping",
            {},
            800
            /* _TimeoutDuration.LONG_ACK */
          );
          if (!results) {
            return;
          }
          if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes(
            "keyChanged"
            /* _EventType.KEY_CHANGED */
          ))) {
            this.serviceWorkerReceiverAvailable = true;
          }
        }
        /**
         * Let the worker know about a changed key, the exact key doesn't technically matter since the
         * worker will just trigger a full sync anyway.
         *
         * @remarks
         * For now, we only support one service worker per page.
         *
         * @param key - Storage key which changed.
         */
        async notifyServiceWorker(key) {
          if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
            return;
          }
          try {
            await this.sender._send(
              "keyChanged",
              { key },
              // Use long timeout if receiver has previously responded to a ping from us.
              this.serviceWorkerReceiverAvailable ? 800 : 50
              /* _TimeoutDuration.ACK */
            );
          } catch (_a) {
          }
        }
        async _isAvailable() {
          try {
            if (!indexedDB) {
              return false;
            }
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
          } catch (_a) {
          }
          return false;
        }
        async _withPendingWrite(write) {
          this.pendingWrites++;
          try {
            await write();
          } finally {
            this.pendingWrites--;
          }
        }
        async _set(key, value) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _putObject(db, key, value));
            this.localCache[key] = value;
            return this.notifyServiceWorker(key);
          });
        }
        async _get(key) {
          const obj = await this._withRetries((db) => getObject(db, key));
          this.localCache[key] = obj;
          return obj;
        }
        async _remove(key) {
          return this._withPendingWrite(async () => {
            await this._withRetries((db) => _deleteObject(db, key));
            delete this.localCache[key];
            return this.notifyServiceWorker(key);
          });
        }
        async _poll() {
          const result = await this._withRetries((db) => {
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
          });
          if (!result) {
            return [];
          }
          if (this.pendingWrites !== 0) {
            return [];
          }
          const keys = [];
          const keysInResult = /* @__PURE__ */ new Set();
          if (result.length !== 0) {
            for (const { fbase_key: key, value } of result) {
              keysInResult.add(key);
              if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
              }
            }
          }
          for (const localKey of Object.keys(this.localCache)) {
            if (this.localCache[localKey] && !keysInResult.has(localKey)) {
              this.notifyListeners(localKey, null);
              keys.push(localKey);
            }
          }
          return keys;
        }
        notifyListeners(key, newValue) {
          this.localCache[key] = newValue;
          const listeners2 = this.listeners[key];
          if (listeners2) {
            for (const listener of Array.from(listeners2)) {
              listener(newValue);
            }
          }
        }
        startPolling() {
          this.stopPolling();
          this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
        }
        stopPolling() {
          if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
          }
        }
        _addListener(key, listener) {
          if (Object.keys(this.listeners).length === 0) {
            this.startPolling();
          }
          if (!this.listeners[key]) {
            this.listeners[key] = /* @__PURE__ */ new Set();
            void this._get(key);
          }
          this.listeners[key].add(listener);
        }
        _removeListener(key, listener) {
          if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
              delete this.listeners[key];
            }
          }
          if (Object.keys(this.listeners).length === 0) {
            this.stopPolling();
          }
        }
      };
      IndexedDBLocalPersistence.type = "LOCAL";
      var indexedDBLocalPersistence = IndexedDBLocalPersistence;
      function startSignInPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
      }
      function finalizeSignInPhoneMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
      }
      function finalizeSignInTotpMfa(auth, request) {
        return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
      }
      var _SOLVE_TIME_MS = 500;
      var _EXPIRATION_TIME_MS = 6e4;
      var _WIDGET_ID_START = 1e12;
      var MockReCaptcha = class {
        constructor(auth) {
          this.auth = auth;
          this.counter = _WIDGET_ID_START;
          this._widgets = /* @__PURE__ */ new Map();
        }
        render(container, parameters) {
          const id = this.counter;
          this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
          this.counter++;
          return id;
        }
        reset(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
          this._widgets.delete(id);
        }
        getResponse(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
        }
        async execute(optWidgetId) {
          var _a;
          const id = optWidgetId || _WIDGET_ID_START;
          void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
          return "";
        }
      };
      var MockWidget = class {
        constructor(containerOrId, appName, params) {
          this.params = params;
          this.timerId = null;
          this.deleted = false;
          this.responseToken = null;
          this.clickHandler = () => {
            this.execute();
          };
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(container, "argument-error", { appName });
          this.container = container;
          this.isVisible = this.params.size !== "invisible";
          if (this.isVisible) {
            this.execute();
          } else {
            this.container.addEventListener("click", this.clickHandler);
          }
        }
        getResponse() {
          this.checkIfDeleted();
          return this.responseToken;
        }
        delete() {
          this.checkIfDeleted();
          this.deleted = true;
          if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
          }
          this.container.removeEventListener("click", this.clickHandler);
        }
        execute() {
          this.checkIfDeleted();
          if (this.timerId) {
            return;
          }
          this.timerId = window.setTimeout(() => {
            this.responseToken = generateRandomAlphaNumericString(50);
            const { callback, "expired-callback": expiredCallback } = this.params;
            if (callback) {
              try {
                callback(this.responseToken);
              } catch (e) {
              }
            }
            this.timerId = window.setTimeout(() => {
              this.timerId = null;
              this.responseToken = null;
              if (expiredCallback) {
                try {
                  expiredCallback();
                } catch (e) {
                }
              }
              if (this.isVisible) {
                this.execute();
              }
            }, _EXPIRATION_TIME_MS);
          }, _SOLVE_TIME_MS);
        }
        checkIfDeleted() {
          if (this.deleted) {
            throw new Error("reCAPTCHA mock was already deleted!");
          }
        }
      };
      function generateRandomAlphaNumericString(len) {
        const chars = [];
        const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < len; i++) {
          chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
        }
        return chars.join("");
      }
      var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
      var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
      var ReCaptchaLoaderImpl = class {
        constructor() {
          var _a;
          this.hostLanguage = "";
          this.counter = 0;
          this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
        }
        load(auth, hl = "") {
          _assert(
            isHostLanguageValid(hl),
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
            return Promise.resolve(_window().grecaptcha);
          }
          return new Promise((resolve, reject) => {
            const networkTimeout = _window().setTimeout(() => {
              reject(_createError(
                auth,
                "network-request-failed"
                /* AuthErrorCode.NETWORK_REQUEST_FAILED */
              ));
            }, NETWORK_TIMEOUT_DELAY.get());
            _window()[_JSLOAD_CALLBACK] = () => {
              _window().clearTimeout(networkTimeout);
              delete _window()[_JSLOAD_CALLBACK];
              const recaptcha = _window().grecaptcha;
              if (!recaptcha || !isV2(recaptcha)) {
                reject(_createError(
                  auth,
                  "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                ));
                return;
              }
              const render = recaptcha.render;
              recaptcha.render = (container, params) => {
                const widgetId = render(container, params);
                this.counter++;
                return widgetId;
              };
              this.hostLanguage = hl;
              resolve(recaptcha);
            };
            const url = `${_recaptchaV2ScriptUrl()}?${util.querystring({
              onload: _JSLOAD_CALLBACK,
              render: "explicit",
              hl
            })}`;
            _loadJS(url).catch(() => {
              clearTimeout(networkTimeout);
              reject(_createError(
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              ));
            });
          });
        }
        clearedOneInstance() {
          this.counter--;
        }
        shouldResolveImmediately(hl) {
          var _a;
          return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
        }
      };
      function isHostLanguageValid(hl) {
        return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
      }
      var MockReCaptchaLoaderImpl = class {
        async load(auth) {
          return new MockReCaptcha(auth);
        }
        clearedOneInstance() {
        }
      };
      var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
      var DEFAULT_PARAMS = {
        theme: "light",
        type: "image"
      };
      var RecaptchaVerifier = class {
        /**
         * @param authExtern - The corresponding Firebase {@link Auth} instance.
         *
         * @param containerOrId - The reCAPTCHA container parameter.
         *
         * @remarks
         * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
         * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
         * an element ID. The corresponding element must also must be in the DOM at the time of
         * initialization.
         *
         * @param parameters - The optional reCAPTCHA parameters.
         *
         * @remarks
         * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
         * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
         * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
         * 'invisible'.
         */
        constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
          this.parameters = parameters;
          this.type = RECAPTCHA_VERIFIER_TYPE;
          this.destroyed = false;
          this.widgetId = null;
          this.tokenChangeListeners = /* @__PURE__ */ new Set();
          this.renderPromise = null;
          this.recaptcha = null;
          this.auth = _castAuth(authExtern);
          this.isInvisible = this.parameters.size === "invisible";
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
          const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
          _assert(
            container,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          this.container = container;
          this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
          this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
          this.validateStartingState();
        }
        /**
         * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
         *
         * @returns A Promise for the reCAPTCHA token.
         */
        async verify() {
          this.assertNotDestroyed();
          const id = await this.render();
          const recaptcha = this.getAssertedRecaptcha();
          const response = recaptcha.getResponse(id);
          if (response) {
            return response;
          }
          return new Promise((resolve) => {
            const tokenChange = (token) => {
              if (!token) {
                return;
              }
              this.tokenChangeListeners.delete(tokenChange);
              resolve(token);
            };
            this.tokenChangeListeners.add(tokenChange);
            if (this.isInvisible) {
              recaptcha.execute(id);
            }
          });
        }
        /**
         * Renders the reCAPTCHA widget on the page.
         *
         * @returns A Promise that resolves with the reCAPTCHA widget ID.
         */
        render() {
          try {
            this.assertNotDestroyed();
          } catch (e) {
            return Promise.reject(e);
          }
          if (this.renderPromise) {
            return this.renderPromise;
          }
          this.renderPromise = this.makeRenderPromise().catch((e) => {
            this.renderPromise = null;
            throw e;
          });
          return this.renderPromise;
        }
        /** @internal */
        _reset() {
          this.assertNotDestroyed();
          if (this.widgetId !== null) {
            this.getAssertedRecaptcha().reset(this.widgetId);
          }
        }
        /**
         * Clears the reCAPTCHA widget from the page and destroys the instance.
         */
        clear() {
          this.assertNotDestroyed();
          this.destroyed = true;
          this._recaptchaLoader.clearedOneInstance();
          if (!this.isInvisible) {
            this.container.childNodes.forEach((node) => {
              this.container.removeChild(node);
            });
          }
        }
        validateStartingState() {
          _assert(
            !this.parameters.sitekey,
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            this.isInvisible || !this.container.hasChildNodes(),
            this.auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            typeof document !== "undefined",
            this.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          );
        }
        makeTokenCallback(existing) {
          return (token) => {
            this.tokenChangeListeners.forEach((listener) => listener(token));
            if (typeof existing === "function") {
              existing(token);
            } else if (typeof existing === "string") {
              const globalFunc = _window()[existing];
              if (typeof globalFunc === "function") {
                globalFunc(token);
              }
            }
          };
        }
        assertNotDestroyed() {
          _assert(
            !this.destroyed,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
        }
        async makeRenderPromise() {
          await this.init();
          if (!this.widgetId) {
            let container = this.container;
            if (!this.isInvisible) {
              const guaranteedEmpty = document.createElement("div");
              container.appendChild(guaranteedEmpty);
              container = guaranteedEmpty;
            }
            this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
          }
          return this.widgetId;
        }
        async init() {
          _assert(
            _isHttpOrHttps() && !_isWorker(),
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          await domReady();
          this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
          const siteKey = await getRecaptchaParams(this.auth);
          _assert(
            siteKey,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          this.parameters.sitekey = siteKey;
        }
        getAssertedRecaptcha() {
          _assert(
            this.recaptcha,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return this.recaptcha;
        }
      };
      function domReady() {
        let resolver = null;
        return new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve();
            return;
          }
          resolver = () => resolve();
          window.addEventListener("load", resolver);
        }).catch((e) => {
          if (resolver) {
            window.removeEventListener("load", resolver);
          }
          throw e;
        });
      }
      var ConfirmationResultImpl = class {
        constructor(verificationId, onConfirmation) {
          this.verificationId = verificationId;
          this.onConfirmation = onConfirmation;
        }
        confirm(verificationCode) {
          const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
          return this.onConfirmation(authCredential);
        }
      };
      async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => signInWithCredential(authInternal, cred));
      }
      async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
        const userInternal = util.getModularInstance(user);
        await _assertLinkedStatus(
          false,
          userInternal,
          "phone"
          /* ProviderId.PHONE */
        );
        const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => linkWithCredential(userInternal, cred));
      }
      async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, util.getModularInstance(appVerifier));
        return new ConfirmationResultImpl(verificationId, (cred) => reauthenticateWithCredential(userInternal, cred));
      }
      async function _verifyPhoneNumber(auth, options, verifier) {
        var _a;
        const recaptchaToken = await verifier.verify();
        try {
          _assert(
            typeof recaptchaToken === "string",
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          _assert(
            verifier.type === RECAPTCHA_VERIFIER_TYPE,
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          let phoneInfoOptions;
          if (typeof options === "string") {
            phoneInfoOptions = {
              phoneNumber: options
            };
          } else {
            phoneInfoOptions = options;
          }
          if ("session" in phoneInfoOptions) {
            const session = phoneInfoOptions.session;
            if ("phoneNumber" in phoneInfoOptions) {
              _assert(
                session.type === "enroll",
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              const response = await startEnrollPhoneMfa(auth, {
                idToken: session.credential,
                phoneEnrollmentInfo: {
                  phoneNumber: phoneInfoOptions.phoneNumber,
                  recaptchaToken
                }
              });
              return response.phoneSessionInfo.sessionInfo;
            } else {
              _assert(
                session.type === "signin",
                auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
              _assert(
                mfaEnrollmentId,
                auth,
                "missing-multi-factor-info"
                /* AuthErrorCode.MISSING_MFA_INFO */
              );
              const response = await startSignInPhoneMfa(auth, {
                mfaPendingCredential: session.credential,
                mfaEnrollmentId,
                phoneSignInInfo: {
                  recaptchaToken
                }
              });
              return response.phoneResponseInfo.sessionInfo;
            }
          } else {
            const { sessionInfo } = await sendPhoneVerificationCode(auth, {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken
            });
            return sessionInfo;
          }
        } finally {
          verifier._reset();
        }
      }
      async function updatePhoneNumber(user, credential) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        await _link$1(userInternal, credential);
      }
      var PhoneAuthProvider = class _PhoneAuthProvider {
        /**
         * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
         *
         */
        constructor(auth) {
          this.providerId = _PhoneAuthProvider.PROVIDER_ID;
          this.auth = _castAuth(auth);
        }
        /**
         *
         * Starts a phone number authentication flow by sending a verification code to the given phone
         * number.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = await signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
         * E.164 format (e.g. +16505550101).
         * @param applicationVerifier - For abuse prevention, this method also requires a
         * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
         * {@link RecaptchaVerifier}.
         *
         * @returns A Promise for a verification ID that can be passed to
         * {@link PhoneAuthProvider.credential} to identify this flow..
         */
        verifyPhoneNumber(phoneOptions, applicationVerifier) {
          return _verifyPhoneNumber(this.auth, phoneOptions, util.getModularInstance(applicationVerifier));
        }
        /**
         * Creates a phone auth credential, given the verification ID from
         * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
         * mobile device.
         *
         * @example
         * ```javascript
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
         * const userCredential = signInWithCredential(auth, authCredential);
         * ```
         *
         * @example
         * An alternative flow is provided using the `signInWithPhoneNumber` method.
         * ```javascript
         * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
         * // Obtain verificationCode from the user.
         * const userCredential = await confirmationResult.confirm(verificationCode);
         * ```
         *
         * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
         * @param verificationCode - The verification code sent to the user's mobile device.
         *
         * @returns The auth provider credential.
         */
        static credential(verificationId, verificationCode) {
          return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
        }
        /**
         * Generates an {@link AuthCredential} from a {@link UserCredential}.
         * @param userCredential - The user credential.
         */
        static credentialFromResult(userCredential) {
          const credential = userCredential;
          return _PhoneAuthProvider.credentialFromTaggedObject(credential);
        }
        /**
         * Returns an {@link AuthCredential} when passed an error.
         *
         * @remarks
         *
         * This method works for errors like
         * `auth/account-exists-with-different-credentials`. This is useful for
         * recovering when attempting to set a user's phone number but the number
         * in question is already tied to another account. For example, the following
         * code tries to update the current user's phone number, and if that
         * fails, links the user with the account associated with that number:
         *
         * ```js
         * const provider = new PhoneAuthProvider(auth);
         * const verificationId = await provider.verifyPhoneNumber(number, verifier);
         * try {
         *   const code = ''; // Prompt the user for the verification code
         *   await updatePhoneNumber(
         *       auth.currentUser,
         *       PhoneAuthProvider.credential(verificationId, code));
         * } catch (e) {
         *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
         *     const cred = PhoneAuthProvider.credentialFromError(e);
         *     await linkWithCredential(auth.currentUser, cred);
         *   }
         * }
         *
         * // At this point, auth.currentUser.phoneNumber === number.
         * ```
         *
         * @param error - The error to generate a credential from.
         */
        static credentialFromError(error) {
          return _PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
          if (!tokenResponse) {
            return null;
          }
          const { phoneNumber, temporaryProof } = tokenResponse;
          if (phoneNumber && temporaryProof) {
            return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
          }
          return null;
        }
      };
      PhoneAuthProvider.PROVIDER_ID = "phone";
      PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
      function _withDefaultResolver(auth, resolverOverride) {
        if (resolverOverride) {
          return _getInstance(resolverOverride);
        }
        _assert(
          auth._popupRedirectResolver,
          auth,
          "argument-error"
          /* AuthErrorCode.ARGUMENT_ERROR */
        );
        return auth._popupRedirectResolver;
      }
      var IdpCredential = class extends AuthCredential {
        constructor(params) {
          super(
            "custom",
            "custom"
            /* ProviderId.CUSTOM */
          );
          this.params = params;
        }
        _getIdTokenResponse(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _linkToIdToken(auth, idToken) {
          return signInWithIdp(auth, this._buildIdpRequest(idToken));
        }
        _getReauthenticationResolver(auth) {
          return signInWithIdp(auth, this._buildIdpRequest());
        }
        _buildIdpRequest(idToken) {
          const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
          };
          if (idToken) {
            request.idToken = idToken;
          }
          return request;
        }
      };
      function _signIn(params) {
        return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
      }
      function _reauth(params) {
        const { auth, user } = params;
        _assert(
          user,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
      }
      async function _link(params) {
        const { auth, user } = params;
        _assert(
          user,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return _link$1(user, new IdpCredential(params), params.bypassAuthState);
      }
      var AbstractPopupRedirectOperation = class {
        constructor(auth, filter, resolver, user, bypassAuthState = false) {
          this.auth = auth;
          this.resolver = resolver;
          this.user = user;
          this.bypassAuthState = bypassAuthState;
          this.pendingPromise = null;
          this.eventManager = null;
          this.filter = Array.isArray(filter) ? filter : [filter];
        }
        execute() {
          return new Promise(async (resolve, reject) => {
            this.pendingPromise = { resolve, reject };
            try {
              this.eventManager = await this.resolver._initialize(this.auth);
              await this.onExecution();
              this.eventManager.registerConsumer(this);
            } catch (e) {
              this.reject(e);
            }
          });
        }
        async onAuthEvent(event) {
          const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
          if (error) {
            this.reject(error);
            return;
          }
          const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId,
            tenantId: tenantId || void 0,
            postBody: postBody || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
          };
          try {
            this.resolve(await this.getIdpTask(type)(params));
          } catch (e) {
            this.reject(e);
          }
        }
        onError(error) {
          this.reject(error);
        }
        getIdpTask(type) {
          switch (type) {
            case "signInViaPopup":
            case "signInViaRedirect":
              return _signIn;
            case "linkViaPopup":
            case "linkViaRedirect":
              return _link;
            case "reauthViaPopup":
            case "reauthViaRedirect":
              return _reauth;
            default:
              _fail(
                this.auth,
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
          }
        }
        resolve(cred) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.resolve(cred);
          this.unregisterAndCleanUp();
        }
        reject(error) {
          debugAssert(this.pendingPromise, "Pending promise was never set");
          this.pendingPromise.reject(error);
          this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
          if (this.eventManager) {
            this.eventManager.unregisterConsumer(this);
          }
          this.pendingPromise = null;
          this.cleanUp();
        }
      };
      var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
      async function signInWithPopup(auth, provider, resolver) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_createError(
            auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ));
        }
        const authInternal = _castAuth(auth);
        _assertInstanceOf(auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(authInternal, resolver);
        const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
        return action.executeNotNull();
      }
      async function reauthenticateWithPopup(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_createError(
            userInternal.auth,
            "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
          ));
        }
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
        return action.executeNotNull();
      }
      async function linkWithPopup(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
        return action.executeNotNull();
      }
      var PopupOperation = class _PopupOperation extends AbstractPopupRedirectOperation {
        constructor(auth, filter, provider, resolver, user) {
          super(auth, filter, resolver, user);
          this.provider = provider;
          this.authWindow = null;
          this.pollId = null;
          if (_PopupOperation.currentPopupAction) {
            _PopupOperation.currentPopupAction.cancel();
          }
          _PopupOperation.currentPopupAction = this;
        }
        async executeNotNull() {
          const result = await this.execute();
          _assert(
            result,
            this.auth,
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          return result;
        }
        async onExecution() {
          debugAssert(this.filter.length === 1, "Popup operations only handle one event");
          const eventId = _generateEventId();
          this.authWindow = await this.resolver._openPopup(
            this.auth,
            this.provider,
            this.filter[0],
            // There's always one, see constructor
            eventId
          );
          this.authWindow.associatedEvent = eventId;
          this.resolver._originValidation(this.auth).catch((e) => {
            this.reject(e);
          });
          this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
            if (!isSupported) {
              this.reject(_createError(
                this.auth,
                "web-storage-unsupported"
                /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
              ));
            }
          });
          this.pollUserCancellation();
        }
        get eventId() {
          var _a;
          return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
        }
        cancel() {
          this.reject(_createError(
            this.auth,
            "cancelled-popup-request"
            /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
          ));
        }
        cleanUp() {
          if (this.authWindow) {
            this.authWindow.close();
          }
          if (this.pollId) {
            window.clearTimeout(this.pollId);
          }
          this.authWindow = null;
          this.pollId = null;
          _PopupOperation.currentPopupAction = null;
        }
        pollUserCancellation() {
          const poll = () => {
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
              this.pollId = window.setTimeout(
                () => {
                  this.pollId = null;
                  this.reject(_createError(
                    this.auth,
                    "popup-closed-by-user"
                    /* AuthErrorCode.POPUP_CLOSED_BY_USER */
                  ));
                },
                8e3
                /* _Timeout.AUTH_EVENT */
              );
              return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
          };
          poll();
        }
      };
      PopupOperation.currentPopupAction = null;
      var PENDING_REDIRECT_KEY = "pendingRedirect";
      var redirectOutcomeMap = /* @__PURE__ */ new Map();
      var RedirectAction = class extends AbstractPopupRedirectOperation {
        constructor(auth, resolver, bypassAuthState = false) {
          super(auth, [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown"
            /* AuthEventType.UNKNOWN */
          ], resolver, void 0, bypassAuthState);
          this.eventId = null;
        }
        /**
         * Override the execute function; if we already have a redirect result, then
         * just return it.
         */
        async execute() {
          let readyOutcome = redirectOutcomeMap.get(this.auth._key());
          if (!readyOutcome) {
            try {
              const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
              const result = hasPendingRedirect ? await super.execute() : null;
              readyOutcome = () => Promise.resolve(result);
            } catch (e) {
              readyOutcome = () => Promise.reject(e);
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
          }
          if (!this.bypassAuthState) {
            redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
          }
          return readyOutcome();
        }
        async onAuthEvent(event) {
          if (event.type === "signInViaRedirect") {
            return super.onAuthEvent(event);
          } else if (event.type === "unknown") {
            this.resolve(null);
            return;
          }
          if (event.eventId) {
            const user = await this.auth._redirectUserForId(event.eventId);
            if (user) {
              this.user = user;
              return super.onAuthEvent(event);
            } else {
              this.resolve(null);
            }
          }
        }
        async onExecution() {
        }
        cleanUp() {
        }
      };
      async function _getAndClearPendingRedirectStatus(resolver, auth) {
        const key = pendingRedirectKey(auth);
        const persistence = resolverPersistence(resolver);
        if (!await persistence._isAvailable()) {
          return false;
        }
        const hasPendingRedirect = await persistence._get(key) === "true";
        await persistence._remove(key);
        return hasPendingRedirect;
      }
      async function _setPendingRedirectStatus(resolver, auth) {
        return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
      }
      function _clearRedirectOutcomes() {
        redirectOutcomeMap.clear();
      }
      function _overrideRedirectResult(auth, result) {
        redirectOutcomeMap.set(auth._key(), result);
      }
      function resolverPersistence(resolver) {
        return _getInstance(resolver._redirectPersistence);
      }
      function pendingRedirectKey(auth) {
        return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
      }
      function signInWithRedirect(auth, provider, resolver) {
        return _signInWithRedirect(auth, provider, resolver);
      }
      async function _signInWithRedirect(auth, provider, resolver) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        _assertInstanceOf(auth, provider, FederatedAuthProvider);
        await authInternal._initializationPromise;
        const resolverInternal = _withDefaultResolver(authInternal, resolver);
        await _setPendingRedirectStatus(resolverInternal, authInternal);
        return resolverInternal._openRedirect(
          authInternal,
          provider,
          "signInViaRedirect"
          /* AuthEventType.SIGN_IN_VIA_REDIRECT */
        );
      }
      function reauthenticateWithRedirect(user, provider, resolver) {
        return _reauthenticateWithRedirect(user, provider, resolver);
      }
      async function _reauthenticateWithRedirect(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        if (app._isFirebaseServerApp(userInternal.auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
        }
        await userInternal.auth._initializationPromise;
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
        const eventId = await prepareUserForRedirect(userInternal);
        return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
      }
      function linkWithRedirect(user, provider, resolver) {
        return _linkWithRedirect(user, provider, resolver);
      }
      async function _linkWithRedirect(user, provider, resolver) {
        const userInternal = util.getModularInstance(user);
        _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
        await userInternal.auth._initializationPromise;
        const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
        await _assertLinkedStatus(false, userInternal, provider.providerId);
        await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
        const eventId = await prepareUserForRedirect(userInternal);
        return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
      }
      async function getRedirectResult(auth, resolver) {
        await _castAuth(auth)._initializationPromise;
        return _getRedirectResult(auth, resolver, false);
      }
      async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
        if (app._isFirebaseServerApp(auth.app)) {
          return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
        }
        const authInternal = _castAuth(auth);
        const resolver = _withDefaultResolver(authInternal, resolverExtern);
        const action = new RedirectAction(authInternal, resolver, bypassAuthState);
        const result = await action.execute();
        if (result && !bypassAuthState) {
          delete result.user._redirectEventId;
          await authInternal._persistUserIfCurrent(result.user);
          await authInternal._setRedirectUser(null, resolverExtern);
        }
        return result;
      }
      async function prepareUserForRedirect(user) {
        const eventId = _generateEventId(`${user.uid}:::`);
        user._redirectEventId = eventId;
        await user.auth._setRedirectUser(user);
        await user.auth._persistUserIfCurrent(user);
        return eventId;
      }
      var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
      var AuthEventManager = class {
        constructor(auth) {
          this.auth = auth;
          this.cachedEventUids = /* @__PURE__ */ new Set();
          this.consumers = /* @__PURE__ */ new Set();
          this.queuedRedirectEvent = null;
          this.hasHandledPotentialRedirect = false;
          this.lastProcessedEventTime = Date.now();
        }
        registerConsumer(authEventConsumer) {
          this.consumers.add(authEventConsumer);
          if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
          }
        }
        unregisterConsumer(authEventConsumer) {
          this.consumers.delete(authEventConsumer);
        }
        onEvent(event) {
          if (this.hasEventBeenHandled(event)) {
            return false;
          }
          let handled = false;
          this.consumers.forEach((consumer) => {
            if (this.isEventForConsumer(event, consumer)) {
              handled = true;
              this.sendToConsumer(event, consumer);
              this.saveEventToCache(event);
            }
          });
          if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
            return handled;
          }
          this.hasHandledPotentialRedirect = true;
          if (!handled) {
            this.queuedRedirectEvent = event;
            handled = true;
          }
          return handled;
        }
        sendToConsumer(event, consumer) {
          var _a;
          if (event.error && !isNullRedirectEvent(event)) {
            const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
            consumer.onError(_createError(this.auth, code));
          } else {
            consumer.onAuthEvent(event);
          }
        }
        isEventForConsumer(event, consumer) {
          const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
          return consumer.filter.includes(event.type) && eventIdMatches;
        }
        hasEventBeenHandled(event) {
          if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
            this.cachedEventUids.clear();
          }
          return this.cachedEventUids.has(eventUid(event));
        }
        saveEventToCache(event) {
          this.cachedEventUids.add(eventUid(event));
          this.lastProcessedEventTime = Date.now();
        }
      };
      function eventUid(e) {
        return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
      }
      function isNullRedirectEvent({ type, error }) {
        return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
      }
      function isRedirectEvent(event) {
        switch (event.type) {
          case "signInViaRedirect":
          case "linkViaRedirect":
          case "reauthViaRedirect":
            return true;
          case "unknown":
            return isNullRedirectEvent(event);
          default:
            return false;
        }
      }
      async function _getProjectConfig(auth, request = {}) {
        return _performApiRequest(auth, "GET", "/v1/projects", request);
      }
      var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
      var HTTP_REGEX = /^https?/;
      async function _validateOrigin(auth) {
        if (auth.config.emulator) {
          return;
        }
        const { authorizedDomains } = await _getProjectConfig(auth);
        for (const domain2 of authorizedDomains) {
          try {
            if (matchDomain(domain2)) {
              return;
            }
          } catch (_a) {
          }
        }
        _fail(
          auth,
          "unauthorized-domain"
          /* AuthErrorCode.INVALID_ORIGIN */
        );
      }
      function matchDomain(expected) {
        const currentUrl = _getCurrentUrl();
        const { protocol, hostname } = new URL(currentUrl);
        if (expected.startsWith("chrome-extension://")) {
          const ceUrl = new URL(expected);
          if (ceUrl.hostname === "" && hostname === "") {
            return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
          }
          return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
        }
        if (!HTTP_REGEX.test(protocol)) {
          return false;
        }
        if (IP_ADDRESS_REGEX.test(expected)) {
          return hostname === expected;
        }
        const escapedDomainPattern = expected.replace(/\./g, "\\.");
        const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
        return re.test(hostname);
      }
      var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
      function resetUnloadedGapiModules() {
        const beacon = _window().___jsl;
        if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
          for (const hint of Object.keys(beacon.H)) {
            beacon.H[hint].r = beacon.H[hint].r || [];
            beacon.H[hint].L = beacon.H[hint].L || [];
            beacon.H[hint].r = [...beacon.H[hint].L];
            if (beacon.CP) {
              for (let i = 0; i < beacon.CP.length; i++) {
                beacon.CP[i] = null;
              }
            }
          }
        }
      }
      function loadGapi(auth) {
        return new Promise((resolve, reject) => {
          var _a, _b, _c;
          function loadGapiIframe() {
            resetUnloadedGapiModules();
            gapi.load("gapi.iframes", {
              callback: () => {
                resolve(gapi.iframes.getContext());
              },
              ontimeout: () => {
                resetUnloadedGapiModules();
                reject(_createError(
                  auth,
                  "network-request-failed"
                  /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                ));
              },
              timeout: NETWORK_TIMEOUT.get()
            });
          }
          if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
            resolve(gapi.iframes.getContext());
          } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
            loadGapiIframe();
          } else {
            const cbName = _generateCallbackName("iframefcb");
            _window()[cbName] = () => {
              if (!!gapi.load) {
                loadGapiIframe();
              } else {
                reject(_createError(
                  auth,
                  "network-request-failed"
                  /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                ));
              }
            };
            return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch((e) => reject(e));
          }
        }).catch((error) => {
          cachedGApiLoader = null;
          throw error;
        });
      }
      var cachedGApiLoader = null;
      function _loadGapi(auth) {
        cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
        return cachedGApiLoader;
      }
      var PING_TIMEOUT = new Delay(5e3, 15e3);
      var IFRAME_PATH = "__/auth/iframe";
      var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
      var IFRAME_ATTRIBUTES = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
      };
      var EID_FROM_APIHOST = /* @__PURE__ */ new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
        // test
      ]);
      function getIframeUrl(auth) {
        const config2 = auth.config;
        _assert(
          config2.authDomain,
          auth,
          "auth-domain-config-required"
          /* AuthErrorCode.MISSING_AUTH_DOMAIN */
        );
        const url = config2.emulator ? _emulatorUrl(config2, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
        const params = {
          apiKey: config2.apiKey,
          appName: auth.name,
          v: app.SDK_VERSION
        };
        const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
        if (eid) {
          params.eid = eid;
        }
        const frameworks = auth._getFrameworks();
        if (frameworks.length) {
          params.fw = frameworks.join(",");
        }
        return `${url}?${util.querystring(params).slice(1)}`;
      }
      async function _openIframe(auth) {
        const context = await _loadGapi(auth);
        const gapi2 = _window().gapi;
        _assert(
          gapi2,
          auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        return context.open({
          where: document.body,
          url: getIframeUrl(auth),
          messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: IFRAME_ATTRIBUTES,
          dontclear: true
        }, (iframe) => new Promise(async (resolve, reject) => {
          await iframe.restyle({
            // Prevent iframe from closing on mouse out.
            setHideOnLeave: false
          });
          const networkError = _createError(
            auth,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          );
          const networkErrorTimer = _window().setTimeout(() => {
            reject(networkError);
          }, PING_TIMEOUT.get());
          function clearTimerAndResolve() {
            _window().clearTimeout(networkErrorTimer);
            resolve(iframe);
          }
          iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
            reject(networkError);
          });
        }));
      }
      var BASE_POPUP_OPTIONS = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
      };
      var DEFAULT_WIDTH = 500;
      var DEFAULT_HEIGHT = 600;
      var TARGET_BLANK = "_blank";
      var FIREFOX_EMPTY_URL = "http://localhost";
      var AuthPopup = class {
        constructor(window2) {
          this.window = window2;
          this.associatedEvent = null;
        }
        close() {
          if (this.window) {
            try {
              this.window.close();
            } catch (e) {
            }
          }
        }
      };
      function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
        const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
        const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
        let target = "";
        const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
          width: width.toString(),
          height: height.toString(),
          top,
          left
        });
        const ua = util.getUA().toLowerCase();
        if (name2) {
          target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
        }
        if (_isFirefox(ua)) {
          url = url || FIREFOX_EMPTY_URL;
          options.scrollbars = "yes";
        }
        const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
        if (_isIOSStandalone(ua) && target !== "_self") {
          openAsNewWindowIOS(url || "", target);
          return new AuthPopup(null);
        }
        const newWin = window.open(url || "", target, optionsString);
        _assert(
          newWin,
          auth,
          "popup-blocked"
          /* AuthErrorCode.POPUP_BLOCKED */
        );
        try {
          newWin.focus();
        } catch (e) {
        }
        return new AuthPopup(newWin);
      }
      function openAsNewWindowIOS(url, target) {
        const el = document.createElement("a");
        el.href = url;
        el.target = target;
        const click = document.createEvent("MouseEvent");
        click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
        el.dispatchEvent(click);
      }
      var WIDGET_PATH = "__/auth/handler";
      var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
      var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
      async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
        _assert(
          auth.config.authDomain,
          auth,
          "auth-domain-config-required"
          /* AuthErrorCode.MISSING_AUTH_DOMAIN */
        );
        _assert(
          auth.config.apiKey,
          auth,
          "invalid-api-key"
          /* AuthErrorCode.INVALID_API_KEY */
        );
        const params = {
          apiKey: auth.config.apiKey,
          appName: auth.name,
          authType,
          redirectUrl,
          v: app.SDK_VERSION,
          eventId
        };
        if (provider instanceof FederatedAuthProvider) {
          provider.setDefaultLanguage(auth.languageCode);
          params.providerId = provider.providerId || "";
          if (!util.isEmpty(provider.getCustomParameters())) {
            params.customParameters = JSON.stringify(provider.getCustomParameters());
          }
          for (const [key, value] of Object.entries(additionalParams || {})) {
            params[key] = value;
          }
        }
        if (provider instanceof BaseOAuthProvider) {
          const scopes = provider.getScopes().filter((scope) => scope !== "");
          if (scopes.length > 0) {
            params.scopes = scopes.join(",");
          }
        }
        if (auth.tenantId) {
          params.tid = auth.tenantId;
        }
        const paramsDict = params;
        for (const key of Object.keys(paramsDict)) {
          if (paramsDict[key] === void 0) {
            delete paramsDict[key];
          }
        }
        const appCheckToken = await auth._getAppCheckToken();
        const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
        return `${getHandlerBase(auth)}?${util.querystring(paramsDict).slice(1)}${appCheckTokenFragment}`;
      }
      function getHandlerBase({ config: config2 }) {
        if (!config2.emulator) {
          return `https://${config2.authDomain}/${WIDGET_PATH}`;
        }
        return _emulatorUrl(config2, EMULATOR_WIDGET_PATH);
      }
      var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
      var BrowserPopupRedirectResolver = class {
        constructor() {
          this.eventManagers = {};
          this.iframes = {};
          this.originValidationPromises = {};
          this._redirectPersistence = browserSessionPersistence;
          this._completeRedirectFn = _getRedirectResult;
          this._overrideRedirectResult = _overrideRedirectResult;
        }
        // Wrapping in async even though we don't await anywhere in order
        // to make sure errors are raised as promise rejections
        async _openPopup(auth, provider, authType, eventId) {
          var _a;
          debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          return _open(auth, url, _generateEventId());
        }
        async _openRedirect(auth, provider, authType, eventId) {
          await this._originValidation(auth);
          const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
          _setWindowLocation(url);
          return new Promise(() => {
          });
        }
        _initialize(auth) {
          const key = auth._key();
          if (this.eventManagers[key]) {
            const { manager, promise: promise2 } = this.eventManagers[key];
            if (manager) {
              return Promise.resolve(manager);
            } else {
              debugAssert(promise2, "If manager is not set, promise should be");
              return promise2;
            }
          }
          const promise = this.initAndGetManager(auth);
          this.eventManagers[key] = { promise };
          promise.catch(() => {
            delete this.eventManagers[key];
          });
          return promise;
        }
        async initAndGetManager(auth) {
          const iframe = await _openIframe(auth);
          const manager = new AuthEventManager(auth);
          iframe.register("authEvent", (iframeEvent) => {
            _assert(
              iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent,
              auth,
              "invalid-auth-event"
              /* AuthErrorCode.INVALID_AUTH_EVENT */
            );
            const handled = manager.onEvent(iframeEvent.authEvent);
            return {
              status: handled ? "ACK" : "ERROR"
              /* GapiOutcome.ERROR */
            };
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
          this.eventManagers[auth._key()] = { manager };
          this.iframes[auth._key()] = iframe;
          return manager;
        }
        _isIframeWebStorageSupported(auth, cb) {
          const iframe = this.iframes[auth._key()];
          iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== void 0) {
              cb(!!isSupported);
            }
            _fail(
              auth,
              "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
            );
          }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        }
        _originValidation(auth) {
          const key = auth._key();
          if (!this.originValidationPromises[key]) {
            this.originValidationPromises[key] = _validateOrigin(auth);
          }
          return this.originValidationPromises[key];
        }
        get _shouldInitProactively() {
          return _isMobileBrowser() || _isSafari() || _isIOS();
        }
      };
      var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
      var MultiFactorAssertionImpl = class {
        constructor(factorId) {
          this.factorId = factorId;
        }
        _process(auth, session, displayName) {
          switch (session.type) {
            case "enroll":
              return this._finalizeEnroll(auth, session.credential, displayName);
            case "signin":
              return this._finalizeSignIn(auth, session.credential);
            default:
              return debugFail("unexpected MultiFactorSessionType");
          }
        }
      };
      var PhoneMultiFactorAssertionImpl = class _PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(credential) {
          super(
            "phone"
            /* FactorId.PHONE */
          );
          this.credential = credential;
        }
        /** @internal */
        static _fromCredential(credential) {
          return new _PhoneMultiFactorAssertionImpl(credential);
        }
        /** @internal */
        _finalizeEnroll(auth, idToken, displayName) {
          return finalizeEnrollPhoneMfa(auth, {
            idToken,
            displayName,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
        /** @internal */
        _finalizeSignIn(auth, mfaPendingCredential) {
          return finalizeSignInPhoneMfa(auth, {
            mfaPendingCredential,
            phoneVerificationInfo: this.credential._makeVerificationRequest()
          });
        }
      };
      var PhoneMultiFactorGenerator = class {
        constructor() {
        }
        /**
         * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
         *
         * @remarks
         * This method does not work in a Node.js environment.
         *
         * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
         * @returns A {@link PhoneMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}
         */
        static assertion(credential) {
          return PhoneMultiFactorAssertionImpl._fromCredential(credential);
        }
      };
      PhoneMultiFactorGenerator.FACTOR_ID = "phone";
      var TotpMultiFactorGenerator = class {
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
         * the TOTP (time-based one-time password) second factor.
         * This assertion is used to complete enrollment in TOTP second factor.
         *
         * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorUser.enroll}.
         */
        static assertionForEnrollment(secret, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
        }
        /**
         * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
         * This assertion is used to complete signIn with TOTP as the second factor.
         *
         * @param enrollmentId identifies the enrolled TOTP second factor.
         * @param oneTimePassword One-time password from TOTP App.
         * @returns A {@link TotpMultiFactorAssertion} which can be used with
         * {@link MultiFactorResolver.resolveSignIn}.
         */
        static assertionForSignIn(enrollmentId, oneTimePassword) {
          return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
        }
        /**
         * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
         * Creates a TOTP secret as part of enrolling a TOTP second factor.
         * Used for generating a QR code URL or inputting into a TOTP app.
         * This method uses the auth instance corresponding to the user in the multiFactorSession.
         *
         * @param session The {@link MultiFactorSession} that the user is part of.
         * @returns A promise to {@link TotpSecret}.
         */
        static async generateSecret(session) {
          var _a;
          const mfaSession = session;
          _assert(
            typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined",
            "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
          );
          const response = await startEnrollTotpMfa(mfaSession.user.auth, {
            idToken: mfaSession.credential,
            totpEnrollmentInfo: {}
          });
          return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
        }
      };
      TotpMultiFactorGenerator.FACTOR_ID = "totp";
      var TotpMultiFactorAssertionImpl = class _TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
        constructor(otp, enrollmentId, secret) {
          super(
            "totp"
            /* FactorId.TOTP */
          );
          this.otp = otp;
          this.enrollmentId = enrollmentId;
          this.secret = secret;
        }
        /** @internal */
        static _fromSecret(secret, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, void 0, secret);
        }
        /** @internal */
        static _fromEnrollmentId(enrollmentId, otp) {
          return new _TotpMultiFactorAssertionImpl(otp, enrollmentId);
        }
        /** @internal */
        async _finalizeEnroll(auth, idToken, displayName) {
          _assert(
            typeof this.secret !== "undefined",
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          return finalizeEnrollTotpMfa(auth, {
            idToken,
            displayName,
            totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
          });
        }
        /** @internal */
        async _finalizeSignIn(auth, mfaPendingCredential) {
          _assert(
            this.enrollmentId !== void 0 && this.otp !== void 0,
            auth,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          const totpVerificationInfo = { verificationCode: this.otp };
          return finalizeSignInTotpMfa(auth, {
            mfaPendingCredential,
            mfaEnrollmentId: this.enrollmentId,
            totpVerificationInfo
          });
        }
      };
      var TotpSecret = class _TotpSecret {
        // The public members are declared outside the constructor so the docs can be generated.
        constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
          this.sessionInfo = sessionInfo;
          this.auth = auth;
          this.secretKey = secretKey;
          this.hashingAlgorithm = hashingAlgorithm;
          this.codeLength = codeLength;
          this.codeIntervalSeconds = codeIntervalSeconds;
          this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
        }
        /** @internal */
        static _fromStartTotpMfaEnrollmentResponse(response, auth) {
          return new _TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
        }
        /** @internal */
        _makeTotpVerificationInfo(otp) {
          return { sessionInfo: this.sessionInfo, verificationCode: otp };
        }
        /**
         * Returns a QR code URL as described in
         * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
         * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
         * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
         *
         * @param accountName the name of the account/app along with a user identifier.
         * @param issuer issuer of the TOTP (likely the app name).
         * @returns A QR code URL string.
         */
        generateQrCodeUrl(accountName, issuer) {
          var _a;
          let useDefaults = false;
          if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
            useDefaults = true;
          }
          if (useDefaults) {
            if (_isEmptyString(accountName)) {
              accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
            }
            if (_isEmptyString(issuer)) {
              issuer = this.auth.name;
            }
          }
          return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
        }
      };
      function _isEmptyString(input) {
        return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
      }
      var name = "@firebase/auth";
      var version2 = "1.7.9";
      var AuthInterop = class {
        constructor(auth) {
          this.auth = auth;
          this.internalListeners = /* @__PURE__ */ new Map();
        }
        getUid() {
          var _a;
          this.assertAuthConfigured();
          return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
        }
        async getToken(forceRefresh) {
          this.assertAuthConfigured();
          await this.auth._initializationPromise;
          if (!this.auth.currentUser) {
            return null;
          }
          const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
          return { accessToken };
        }
        addAuthTokenListener(listener) {
          this.assertAuthConfigured();
          if (this.internalListeners.has(listener)) {
            return;
          }
          const unsubscribe = this.auth.onIdTokenChanged((user) => {
            listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
          });
          this.internalListeners.set(listener, unsubscribe);
          this.updateProactiveRefresh();
        }
        removeAuthTokenListener(listener) {
          this.assertAuthConfigured();
          const unsubscribe = this.internalListeners.get(listener);
          if (!unsubscribe) {
            return;
          }
          this.internalListeners.delete(listener);
          unsubscribe();
          this.updateProactiveRefresh();
        }
        assertAuthConfigured() {
          _assert(
            this.auth._initializationPromise,
            "dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
          );
        }
        updateProactiveRefresh() {
          if (this.internalListeners.size > 0) {
            this.auth._startProactiveRefresh();
          } else {
            this.auth._stopProactiveRefresh();
          }
        }
      };
      function getVersionForPlatform(clientPlatform) {
        switch (clientPlatform) {
          case "Node":
            return "node";
          case "ReactNative":
            return "rn";
          case "Worker":
            return "webworker";
          case "Cordova":
            return "cordova";
          case "WebExtension":
            return "web-extension";
          default:
            return void 0;
        }
      }
      function registerAuth(clientPlatform) {
        app._registerComponent(new component.Component(
          "auth",
          (container, { options: deps }) => {
            const app2 = container.getProvider("app").getImmediate();
            const heartbeatServiceProvider = container.getProvider("heartbeat");
            const appCheckServiceProvider = container.getProvider("app-check-internal");
            const { apiKey, authDomain } = app2.options;
            _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app2.name });
            const config2 = {
              apiKey,
              authDomain,
              clientPlatform,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: _getClientVersion(clientPlatform)
            };
            const authInstance = new AuthImpl(app2, heartbeatServiceProvider, appCheckServiceProvider, config2);
            _initializeAuthInstance(authInstance, deps);
            return authInstance;
          },
          "PUBLIC"
          /* ComponentType.PUBLIC */
        ).setInstantiationMode(
          "EXPLICIT"
          /* InstantiationMode.EXPLICIT */
        ).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
          const authInternalProvider = container.getProvider(
            "auth-internal"
            /* _ComponentName.AUTH_INTERNAL */
          );
          authInternalProvider.initialize();
        }));
        app._registerComponent(new component.Component(
          "auth-internal",
          (container) => {
            const auth = _castAuth(container.getProvider(
              "auth"
              /* _ComponentName.AUTH */
            ).getImmediate());
            return ((auth2) => new AuthInterop(auth2))(auth);
          },
          "PRIVATE"
          /* ComponentType.PRIVATE */
        ).setInstantiationMode(
          "EXPLICIT"
          /* InstantiationMode.EXPLICIT */
        ));
        app.registerVersion(name, version2, getVersionForPlatform(clientPlatform));
        app.registerVersion(name, version2, "cjs2017");
      }
      var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
      var authIdTokenMaxAge = util.getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
      var lastPostedIdToken = null;
      var mintCookieFactory = (url) => async (user) => {
        const idTokenResult = user && await user.getIdTokenResult();
        const idTokenAge = idTokenResult && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
        if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
          return;
        }
        const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
        if (lastPostedIdToken === idToken) {
          return;
        }
        lastPostedIdToken = idToken;
        await fetch(url, {
          method: idToken ? "POST" : "DELETE",
          headers: idToken ? {
            "Authorization": `Bearer ${idToken}`
          } : {}
        });
      };
      function getAuth(app$1 = app.getApp()) {
        const provider = app._getProvider(app$1, "auth");
        if (provider.isInitialized()) {
          return provider.getImmediate();
        }
        const auth = initializeAuth(app$1, {
          popupRedirectResolver: browserPopupRedirectResolver,
          persistence: [
            indexedDBLocalPersistence,
            browserLocalPersistence,
            browserSessionPersistence
          ]
        });
        const authTokenSyncPath = util.getExperimentalSetting("authTokenSyncURL");
        if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
          const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
          if (location.origin === authTokenSyncUrl.origin) {
            const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
            beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
            onIdTokenChanged(auth, (user) => mintCookie(user));
          }
        }
        const authEmulatorHost = util.getDefaultEmulatorHost("auth");
        if (authEmulatorHost) {
          connectAuthEmulator(auth, `http://${authEmulatorHost}`);
        }
        return auth;
      }
      function getScriptParentElement() {
        var _a, _b;
        return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
      }
      _setExternalJSProvider({
        loadJS(url) {
          return new Promise((resolve, reject) => {
            const el = document.createElement("script");
            el.setAttribute("src", url);
            el.onload = resolve;
            el.onerror = (e) => {
              const error = _createError(
                "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
              );
              error.customData = e;
              reject(error);
            };
            el.type = "text/javascript";
            el.charset = "UTF-8";
            getScriptParentElement().appendChild(el);
          });
        },
        gapiScript: "https://apis.google.com/js/api.js",
        recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
        recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
      });
      registerAuth(
        "Browser"
        /* ClientPlatform.BROWSER */
      );
      exports3.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
      exports3.ActionCodeOperation = ActionCodeOperation;
      exports3.ActionCodeURL = ActionCodeURL;
      exports3.AuthCredential = AuthCredential;
      exports3.AuthEventManager = AuthEventManager;
      exports3.AuthImpl = AuthImpl;
      exports3.AuthPopup = AuthPopup;
      exports3.EmailAuthCredential = EmailAuthCredential;
      exports3.EmailAuthProvider = EmailAuthProvider;
      exports3.FacebookAuthProvider = FacebookAuthProvider;
      exports3.FactorId = FactorId;
      exports3.FetchProvider = FetchProvider;
      exports3.GithubAuthProvider = GithubAuthProvider;
      exports3.GoogleAuthProvider = GoogleAuthProvider;
      exports3.OAuthCredential = OAuthCredential;
      exports3.OAuthProvider = OAuthProvider;
      exports3.OperationType = OperationType;
      exports3.PhoneAuthCredential = PhoneAuthCredential;
      exports3.PhoneAuthProvider = PhoneAuthProvider;
      exports3.PhoneMultiFactorGenerator = PhoneMultiFactorGenerator;
      exports3.ProviderId = ProviderId;
      exports3.RecaptchaVerifier = RecaptchaVerifier;
      exports3.SAMLAuthCredential = SAMLAuthCredential;
      exports3.SAMLAuthProvider = SAMLAuthProvider;
      exports3.SignInMethod = SignInMethod;
      exports3.TotpMultiFactorGenerator = TotpMultiFactorGenerator;
      exports3.TotpSecret = TotpSecret;
      exports3.TwitterAuthProvider = TwitterAuthProvider;
      exports3.UserImpl = UserImpl;
      exports3._assert = _assert;
      exports3._castAuth = _castAuth;
      exports3._clearRedirectOutcomes = _clearRedirectOutcomes;
      exports3._createError = _createError;
      exports3._fail = _fail;
      exports3._generateEventId = _generateEventId;
      exports3._getClientVersion = _getClientVersion;
      exports3._getInstance = _getInstance;
      exports3._getProjectConfig = _getProjectConfig;
      exports3._getRedirectResult = _getRedirectResult;
      exports3._getRedirectUrl = _getRedirectUrl;
      exports3._isAndroid = _isAndroid;
      exports3._isIOS = _isIOS;
      exports3._isIOS7Or8 = _isIOS7Or8;
      exports3._overrideRedirectResult = _overrideRedirectResult;
      exports3._persistenceKeyName = _persistenceKeyName;
      exports3.applyActionCode = applyActionCode;
      exports3.beforeAuthStateChanged = beforeAuthStateChanged;
      exports3.browserLocalPersistence = browserLocalPersistence;
      exports3.browserPopupRedirectResolver = browserPopupRedirectResolver;
      exports3.browserSessionPersistence = browserSessionPersistence;
      exports3.checkActionCode = checkActionCode;
      exports3.confirmPasswordReset = confirmPasswordReset;
      exports3.connectAuthEmulator = connectAuthEmulator;
      exports3.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
      exports3.debugAssert = debugAssert;
      exports3.debugErrorMap = debugErrorMap;
      exports3.deleteUser = deleteUser;
      exports3.fetchSignInMethodsForEmail = fetchSignInMethodsForEmail;
      exports3.getAdditionalUserInfo = getAdditionalUserInfo;
      exports3.getAuth = getAuth;
      exports3.getIdToken = getIdToken;
      exports3.getIdTokenResult = getIdTokenResult;
      exports3.getMultiFactorResolver = getMultiFactorResolver;
      exports3.getRedirectResult = getRedirectResult;
      exports3.inMemoryPersistence = inMemoryPersistence;
      exports3.indexedDBLocalPersistence = indexedDBLocalPersistence;
      exports3.initializeAuth = initializeAuth;
      exports3.initializeRecaptchaConfig = initializeRecaptchaConfig;
      exports3.isSignInWithEmailLink = isSignInWithEmailLink;
      exports3.linkWithCredential = linkWithCredential;
      exports3.linkWithPhoneNumber = linkWithPhoneNumber;
      exports3.linkWithPopup = linkWithPopup;
      exports3.linkWithRedirect = linkWithRedirect;
      exports3.multiFactor = multiFactor;
      exports3.onAuthStateChanged = onAuthStateChanged;
      exports3.onIdTokenChanged = onIdTokenChanged;
      exports3.parseActionCodeURL = parseActionCodeURL;
      exports3.prodErrorMap = prodErrorMap;
      exports3.reauthenticateWithCredential = reauthenticateWithCredential;
      exports3.reauthenticateWithPhoneNumber = reauthenticateWithPhoneNumber;
      exports3.reauthenticateWithPopup = reauthenticateWithPopup;
      exports3.reauthenticateWithRedirect = reauthenticateWithRedirect;
      exports3.reload = reload;
      exports3.revokeAccessToken = revokeAccessToken;
      exports3.sendEmailVerification = sendEmailVerification;
      exports3.sendPasswordResetEmail = sendPasswordResetEmail;
      exports3.sendSignInLinkToEmail = sendSignInLinkToEmail;
      exports3.setPersistence = setPersistence;
      exports3.signInAnonymously = signInAnonymously;
      exports3.signInWithCredential = signInWithCredential;
      exports3.signInWithCustomToken = signInWithCustomToken;
      exports3.signInWithEmailAndPassword = signInWithEmailAndPassword;
      exports3.signInWithEmailLink = signInWithEmailLink;
      exports3.signInWithPhoneNumber = signInWithPhoneNumber;
      exports3.signInWithPopup = signInWithPopup;
      exports3.signInWithRedirect = signInWithRedirect;
      exports3.signOut = signOut;
      exports3.unlink = unlink;
      exports3.updateCurrentUser = updateCurrentUser;
      exports3.updateEmail = updateEmail;
      exports3.updatePassword = updatePassword;
      exports3.updatePhoneNumber = updatePhoneNumber;
      exports3.updateProfile = updateProfile;
      exports3.useDeviceLanguage = useDeviceLanguage;
      exports3.validatePassword = validatePassword;
      exports3.verifyBeforeUpdateEmail = verifyBeforeUpdateEmail;
      exports3.verifyPasswordResetCode = verifyPasswordResetCode;
    }
  });

  // node_modules/@firebase/auth/dist/browser-cjs/index.js
  var require_browser_cjs = __commonJS({
    "node_modules/@firebase/auth/dist/browser-cjs/index.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var index = require_index_e2e765e6();
      require_index_cjs4();
      require_index_cjs();
      require_index_cjs3();
      init_tslib_es6();
      require_index_cjs2();
      exports3.ActionCodeOperation = index.ActionCodeOperation;
      exports3.ActionCodeURL = index.ActionCodeURL;
      exports3.AuthCredential = index.AuthCredential;
      exports3.AuthErrorCodes = index.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY;
      exports3.EmailAuthCredential = index.EmailAuthCredential;
      exports3.EmailAuthProvider = index.EmailAuthProvider;
      exports3.FacebookAuthProvider = index.FacebookAuthProvider;
      exports3.FactorId = index.FactorId;
      exports3.GithubAuthProvider = index.GithubAuthProvider;
      exports3.GoogleAuthProvider = index.GoogleAuthProvider;
      exports3.OAuthCredential = index.OAuthCredential;
      exports3.OAuthProvider = index.OAuthProvider;
      exports3.OperationType = index.OperationType;
      exports3.PhoneAuthCredential = index.PhoneAuthCredential;
      exports3.PhoneAuthProvider = index.PhoneAuthProvider;
      exports3.PhoneMultiFactorGenerator = index.PhoneMultiFactorGenerator;
      exports3.ProviderId = index.ProviderId;
      exports3.RecaptchaVerifier = index.RecaptchaVerifier;
      exports3.SAMLAuthProvider = index.SAMLAuthProvider;
      exports3.SignInMethod = index.SignInMethod;
      exports3.TotpMultiFactorGenerator = index.TotpMultiFactorGenerator;
      exports3.TotpSecret = index.TotpSecret;
      exports3.TwitterAuthProvider = index.TwitterAuthProvider;
      exports3.applyActionCode = index.applyActionCode;
      exports3.beforeAuthStateChanged = index.beforeAuthStateChanged;
      exports3.browserLocalPersistence = index.browserLocalPersistence;
      exports3.browserPopupRedirectResolver = index.browserPopupRedirectResolver;
      exports3.browserSessionPersistence = index.browserSessionPersistence;
      exports3.checkActionCode = index.checkActionCode;
      exports3.confirmPasswordReset = index.confirmPasswordReset;
      exports3.connectAuthEmulator = index.connectAuthEmulator;
      exports3.createUserWithEmailAndPassword = index.createUserWithEmailAndPassword;
      exports3.debugErrorMap = index.debugErrorMap;
      exports3.deleteUser = index.deleteUser;
      exports3.fetchSignInMethodsForEmail = index.fetchSignInMethodsForEmail;
      exports3.getAdditionalUserInfo = index.getAdditionalUserInfo;
      exports3.getAuth = index.getAuth;
      exports3.getIdToken = index.getIdToken;
      exports3.getIdTokenResult = index.getIdTokenResult;
      exports3.getMultiFactorResolver = index.getMultiFactorResolver;
      exports3.getRedirectResult = index.getRedirectResult;
      exports3.inMemoryPersistence = index.inMemoryPersistence;
      exports3.indexedDBLocalPersistence = index.indexedDBLocalPersistence;
      exports3.initializeAuth = index.initializeAuth;
      exports3.initializeRecaptchaConfig = index.initializeRecaptchaConfig;
      exports3.isSignInWithEmailLink = index.isSignInWithEmailLink;
      exports3.linkWithCredential = index.linkWithCredential;
      exports3.linkWithPhoneNumber = index.linkWithPhoneNumber;
      exports3.linkWithPopup = index.linkWithPopup;
      exports3.linkWithRedirect = index.linkWithRedirect;
      exports3.multiFactor = index.multiFactor;
      exports3.onAuthStateChanged = index.onAuthStateChanged;
      exports3.onIdTokenChanged = index.onIdTokenChanged;
      exports3.parseActionCodeURL = index.parseActionCodeURL;
      exports3.prodErrorMap = index.prodErrorMap;
      exports3.reauthenticateWithCredential = index.reauthenticateWithCredential;
      exports3.reauthenticateWithPhoneNumber = index.reauthenticateWithPhoneNumber;
      exports3.reauthenticateWithPopup = index.reauthenticateWithPopup;
      exports3.reauthenticateWithRedirect = index.reauthenticateWithRedirect;
      exports3.reload = index.reload;
      exports3.revokeAccessToken = index.revokeAccessToken;
      exports3.sendEmailVerification = index.sendEmailVerification;
      exports3.sendPasswordResetEmail = index.sendPasswordResetEmail;
      exports3.sendSignInLinkToEmail = index.sendSignInLinkToEmail;
      exports3.setPersistence = index.setPersistence;
      exports3.signInAnonymously = index.signInAnonymously;
      exports3.signInWithCredential = index.signInWithCredential;
      exports3.signInWithCustomToken = index.signInWithCustomToken;
      exports3.signInWithEmailAndPassword = index.signInWithEmailAndPassword;
      exports3.signInWithEmailLink = index.signInWithEmailLink;
      exports3.signInWithPhoneNumber = index.signInWithPhoneNumber;
      exports3.signInWithPopup = index.signInWithPopup;
      exports3.signInWithRedirect = index.signInWithRedirect;
      exports3.signOut = index.signOut;
      exports3.unlink = index.unlink;
      exports3.updateCurrentUser = index.updateCurrentUser;
      exports3.updateEmail = index.updateEmail;
      exports3.updatePassword = index.updatePassword;
      exports3.updatePhoneNumber = index.updatePhoneNumber;
      exports3.updateProfile = index.updateProfile;
      exports3.useDeviceLanguage = index.useDeviceLanguage;
      exports3.validatePassword = index.validatePassword;
      exports3.verifyBeforeUpdateEmail = index.verifyBeforeUpdateEmail;
      exports3.verifyPasswordResetCode = index.verifyPasswordResetCode;
    }
  });

  // node_modules/firebase/auth/dist/index.cjs.js
  var require_index_cjs6 = __commonJS({
    "node_modules/firebase/auth/dist/index.cjs.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      var auth = require_browser_cjs();
      Object.keys(auth).forEach(function(k) {
        if (k !== "default" && !exports3.hasOwnProperty(k)) Object.defineProperty(exports3, k, {
          enumerable: true,
          get: function() {
            return auth[k];
          }
        });
      });
    }
  });

  // scripts/stub-jsonwebtoken.js
  var stub_jsonwebtoken_exports = {};
  __export(stub_jsonwebtoken_exports, {
    decode: () => decode,
    default: () => stub_jsonwebtoken_default,
    sign: () => sign,
    verify: () => verify
  });
  function sign() {
    throw new Error("jsonwebtoken.sign is stubbed out in ARIKE's browser bundle (email-OTP flow doesn't need it)");
  }
  function verify() {
    throw new Error("jsonwebtoken.verify is stubbed out in ARIKE's browser bundle (email-OTP flow doesn't need it)");
  }
  function decode() {
    return null;
  }
  var stub_jsonwebtoken_default;
  var init_stub_jsonwebtoken = __esm({
    "scripts/stub-jsonwebtoken.js"() {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      stub_jsonwebtoken_default = { sign, verify, decode };
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/rng.js
  var require_rng = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/rng.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = rng;
      var getRandomValues;
      var rnds8 = new Uint8Array(16);
      function rng() {
        if (!getRandomValues) {
          getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
          if (!getRandomValues) {
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          }
        }
        return getRandomValues(rnds8);
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/regex.js
  var require_regex = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/regex.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/validate.js
  var require_validate = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/validate.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _regex = _interopRequireDefault(require_regex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function validate(uuid) {
        return typeof uuid === "string" && _regex.default.test(uuid);
      }
      var _default = validate;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/stringify.js
  var require_stringify = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/stringify.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      exports3.unsafeStringify = unsafeStringify;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var byteToHex = [];
      for (let i = 0; i < 256; ++i) {
        byteToHex.push((i + 256).toString(16).slice(1));
      }
      function unsafeStringify(arr, offset = 0) {
        return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
      }
      function stringify(arr, offset = 0) {
        const uuid = unsafeStringify(arr, offset);
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Stringified UUID is invalid");
        }
        return uuid;
      }
      var _default = stringify;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v1.js
  var require_v1 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v1.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _nodeId;
      var _clockseq;
      var _lastMSecs = 0;
      var _lastNSecs = 0;
      function v1(options, buf, offset) {
        let i = buf && offset || 0;
        const b = buf || new Array(16);
        options = options || {};
        let node = options.node || _nodeId;
        let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
        if (node == null || clockseq == null) {
          const seedBytes = options.random || (options.rng || _rng.default)();
          if (node == null) {
            node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }
          if (clockseq == null) {
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
          }
        }
        let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
        let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
        const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
        if (dt < 0 && options.clockseq === void 0) {
          clockseq = clockseq + 1 & 16383;
        }
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
          nsecs = 0;
        }
        if (nsecs >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }
        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;
        msecs += 122192928e5;
        const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
        b[i++] = tl >>> 24 & 255;
        b[i++] = tl >>> 16 & 255;
        b[i++] = tl >>> 8 & 255;
        b[i++] = tl & 255;
        const tmh = msecs / 4294967296 * 1e4 & 268435455;
        b[i++] = tmh >>> 8 & 255;
        b[i++] = tmh & 255;
        b[i++] = tmh >>> 24 & 15 | 16;
        b[i++] = tmh >>> 16 & 255;
        b[i++] = clockseq >>> 8 | 128;
        b[i++] = clockseq & 255;
        for (let n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }
        return buf || (0, _stringify.unsafeStringify)(b);
      }
      var _default = v1;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/parse.js
  var require_parse = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/parse.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function parse(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        let v;
        const arr = new Uint8Array(16);
        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 255;
        arr[2] = v >>> 8 & 255;
        arr[3] = v & 255;
        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 255;
        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 255;
        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 255;
        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
        arr[11] = v / 4294967296 & 255;
        arr[12] = v >>> 24 & 255;
        arr[13] = v >>> 16 & 255;
        arr[14] = v >>> 8 & 255;
        arr[15] = v & 255;
        return arr;
      }
      var _default = parse;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v35.js
  var require_v35 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v35.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.URL = exports3.DNS = void 0;
      exports3.default = v35;
      var _stringify = require_stringify();
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str));
        const bytes = [];
        for (let i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }
        return bytes;
      }
      var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
      exports3.DNS = DNS;
      var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
      exports3.URL = URL2;
      function v35(name, version2, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          var _namespace;
          if (typeof value === "string") {
            value = stringToBytes(value);
          }
          if (typeof namespace === "string") {
            namespace = (0, _parse.default)(namespace);
          }
          if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          }
          let bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 15 | version2;
          bytes[8] = bytes[8] & 63 | 128;
          if (buf) {
            offset = offset || 0;
            for (let i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }
            return buf;
          }
          return (0, _stringify.unsafeStringify)(bytes);
        }
        try {
          generateUUID.name = name;
        } catch (err) {
        }
        generateUUID.DNS = DNS;
        generateUUID.URL = URL2;
        return generateUUID;
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/md5.js
  var require_md5 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/md5.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      function md5(bytes) {
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = new Uint8Array(msg.length);
          for (let i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }
        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      function md5ToHexEncodedArray(input) {
        const output = [];
        const length32 = input.length * 32;
        const hexTab = "0123456789abcdef";
        for (let i = 0; i < length32; i += 8) {
          const x = input[i >> 5] >>> i % 32 & 255;
          const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
          output.push(hex);
        }
        return output;
      }
      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      function wordsToMd5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[getOutputLength(len) - 1] = len;
        let a = 1732584193;
        let b = -271733879;
        let c = -1732584194;
        let d = 271733878;
        for (let i = 0; i < x.length; i += 16) {
          const olda = a;
          const oldb = b;
          const oldc = c;
          const oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }
        return [a, b, c, d];
      }
      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }
        const length8 = input.length * 8;
        const output = new Uint32Array(getOutputLength(length8));
        for (let i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 255) << i % 32;
        }
        return output;
      }
      function safeAdd(x, y) {
        const lsw = (x & 65535) + (y & 65535);
        const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      }
      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }
      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }
      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }
      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }
      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      var _default = md5;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v3.js
  var require_v3 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v3.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _md = _interopRequireDefault(require_md5());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v3 = (0, _v.default)("v3", 48, _md.default);
      var _default = v3;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/native.js
  var require_native = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/native.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
      var _default = {
        randomUUID
      };
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v4.js
  var require_v4 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v4.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _native = _interopRequireDefault(require_native());
      var _rng = _interopRequireDefault(require_rng());
      var _stringify = require_stringify();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function v4(options, buf, offset) {
        if (_native.default.randomUUID && !buf && !options) {
          return _native.default.randomUUID();
        }
        options = options || {};
        const rnds = options.random || (options.rng || _rng.default)();
        rnds[6] = rnds[6] & 15 | 64;
        rnds[8] = rnds[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(rnds);
      }
      var _default = v4;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/sha1.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;
          case 1:
            return x ^ y ^ z;
          case 2:
            return x & y ^ x & z ^ y & z;
          case 3:
            return x ^ y ^ z;
        }
      }
      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }
      function sha1(bytes) {
        const K = [1518500249, 1859775393, 2400959708, 3395469782];
        const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof bytes === "string") {
          const msg = unescape(encodeURIComponent(bytes));
          bytes = [];
          for (let i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          bytes = Array.prototype.slice.call(bytes);
        }
        bytes.push(128);
        const l = bytes.length / 4 + 2;
        const N = Math.ceil(l / 16);
        const M = new Array(N);
        for (let i = 0; i < N; ++i) {
          const arr = new Uint32Array(16);
          for (let j = 0; j < 16; ++j) {
            arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
          }
          M[i] = arr;
        }
        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
        for (let i = 0; i < N; ++i) {
          const W = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) {
            W[t] = M[i][t];
          }
          for (let t = 16; t < 80; ++t) {
            W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
          }
          let a = H[0];
          let b = H[1];
          let c = H[2];
          let d = H[3];
          let e = H[4];
          for (let t = 0; t < 80; ++t) {
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }
          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }
        return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
      }
      var _default = sha1;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v5.js
  var require_v5 = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/v5.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _v = _interopRequireDefault(require_v35());
      var _sha = _interopRequireDefault(require_sha1());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var v5 = (0, _v.default)("v5", 80, _sha.default);
      var _default = v5;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/nil.js
  var require_nil = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/nil.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _default = "00000000-0000-0000-0000-000000000000";
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/version.js
  var require_version = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/version.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var _validate = _interopRequireDefault(require_validate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function version2(uuid) {
        if (!(0, _validate.default)(uuid)) {
          throw TypeError("Invalid UUID");
        }
        return parseInt(uuid.slice(14, 15), 16);
      }
      var _default = version2;
      exports3.default = _default;
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/index.js
  var require_commonjs_browser = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/node_modules/uuid/dist/commonjs-browser/index.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      Object.defineProperty(exports3, "NIL", {
        enumerable: true,
        get: function get() {
          return _nil.default;
        }
      });
      Object.defineProperty(exports3, "parse", {
        enumerable: true,
        get: function get() {
          return _parse.default;
        }
      });
      Object.defineProperty(exports3, "stringify", {
        enumerable: true,
        get: function get() {
          return _stringify.default;
        }
      });
      Object.defineProperty(exports3, "v1", {
        enumerable: true,
        get: function get() {
          return _v.default;
        }
      });
      Object.defineProperty(exports3, "v3", {
        enumerable: true,
        get: function get() {
          return _v2.default;
        }
      });
      Object.defineProperty(exports3, "v4", {
        enumerable: true,
        get: function get() {
          return _v3.default;
        }
      });
      Object.defineProperty(exports3, "v5", {
        enumerable: true,
        get: function get() {
          return _v4.default;
        }
      });
      Object.defineProperty(exports3, "validate", {
        enumerable: true,
        get: function get() {
          return _validate.default;
        }
      });
      Object.defineProperty(exports3, "version", {
        enumerable: true,
        get: function get() {
          return _version.default;
        }
      });
      var _v = _interopRequireDefault(require_v1());
      var _v2 = _interopRequireDefault(require_v3());
      var _v3 = _interopRequireDefault(require_v4());
      var _v4 = _interopRequireDefault(require_v5());
      var _nil = _interopRequireDefault(require_nil());
      var _version = _interopRequireDefault(require_version());
      var _validate = _interopRequireDefault(require_validate());
      var _stringify = _interopRequireDefault(require_stringify());
      var _parse = _interopRequireDefault(require_parse());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/package.json
  var require_package = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/package.json"(exports3, module) {
      module.exports = {
        name: "@circle-fin/w3s-pw-web-sdk",
        version: "1.1.11",
        description: "Javascript/Typescript SDK for Circle Programmable Wallets",
        main: "dist/src/index.js",
        types: "dist/src/index.d.ts",
        scripts: {
          build: "npx tsc",
          test: "jest --env=jsdom",
          "test:watch": "jest --watch --env=jsdom",
          lint: "eslint . --ext .ts",
          "lint-fix": "eslint . --ext .ts --fix",
          format: "prettier --write .",
          "format-check": "prettier --check src/"
        },
        repository: {
          type: "git",
          url: "git+https://github.com/circlefin/w3s-pw-web-sdk.git"
        },
        keywords: [
          "circle",
          "circle.com",
          "usdc",
          "euroc",
          "stablecoins",
          "programmable wallets"
        ],
        homepage: "https://github.com/circlefin/w3s-pw-web-sdk#readme",
        publishConfig: {
          registry: "https://registry.npmjs.com/"
        },
        license: "Apache-2.0",
        bugs: {
          url: "https://github.com/circlefin/w3s-pw-web-sdk/issues"
        },
        engines: {
          node: ">=10.0.0"
        },
        dependencies: {
          dotenv: "^16.3.1",
          firebase: "^10.12.1",
          jsonwebtoken: "^9.0.2",
          uuid: "^9.0.1"
        },
        devDependencies: {
          "@types/jest": "^28.1.7",
          "@types/node": "^14.14.14",
          "@typescript-eslint/eslint-plugin": "^5.0.0",
          eslint: "^8.0.1",
          "eslint-config-standard-with-typescript": "^22.0.0",
          "eslint-plugin-import": "^2.25.2",
          "eslint-plugin-n": "^16.3.0",
          "eslint-plugin-promise": "^6.1.1",
          jest: "^29.6.1",
          "jest-environment-jsdom": "^29.6.1",
          prettier: "^2.7.1",
          "ts-jest": "^29.1.1",
          typescript: "^4.9.5"
        }
      };
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/types.js
  var require_types = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/types.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.SocialLoginProvider = exports3.ErrorCode = exports3.QuestionType = exports3.ChallengeStatus = exports3.ChallengeType = void 0;
      var ChallengeType;
      (function(ChallengeType2) {
        ChallengeType2["INITIALIZE"] = "INITIALIZE";
        ChallengeType2["SET_PIN"] = "SET_PIN";
        ChallengeType2["CHANGE_PIN"] = "CHANGE_PIN";
        ChallengeType2["RESTORE_PIN"] = "RESTORE_PIN";
        ChallengeType2["SET_SECURITY_QUESTIONS"] = "SET_SECURITY_QUESTIONS";
        ChallengeType2["CREATE_WALLET"] = "CREATE_WALLET";
        ChallengeType2["CREATE_TRANSACTION"] = "CREATE_TRANSACTION";
        ChallengeType2["ACCELERATE_TRANSACTION"] = "ACCELERATE_TRANSACTION";
        ChallengeType2["CANCEL_TRANSACTION"] = "CANCEL_TRANSACTION";
        ChallengeType2["SIGN_MESSAGE"] = "SIGN_MESSAGE";
        ChallengeType2["SIGN_TYPEDDATA"] = "SIGN_TYPEDDATA";
        ChallengeType2["SIGN_TRANSACTION"] = "SIGN_TRANSACTION";
        ChallengeType2["UNKNOWN"] = "UNKNOWN";
      })(ChallengeType = exports3.ChallengeType || (exports3.ChallengeType = {}));
      var ChallengeStatus;
      (function(ChallengeStatus2) {
        ChallengeStatus2["COMPLETE"] = "COMPLETE";
        ChallengeStatus2["EXPIRED"] = "EXPIRED";
        ChallengeStatus2["FAILED"] = "FAILED";
        ChallengeStatus2["IN_PROGRESS"] = "IN_PROGRESS";
        ChallengeStatus2["PENDING"] = "PENDING";
      })(ChallengeStatus = exports3.ChallengeStatus || (exports3.ChallengeStatus = {}));
      var QuestionType;
      (function(QuestionType2) {
        QuestionType2["DATE"] = "DATE";
        QuestionType2["TEXT"] = "TEXT";
      })(QuestionType = exports3.QuestionType || (exports3.QuestionType = {}));
      var ErrorCode;
      (function(ErrorCode2) {
        ErrorCode2[ErrorCode2["unknown"] = -1] = "unknown";
        ErrorCode2[ErrorCode2["success"] = 0] = "success";
        ErrorCode2[ErrorCode2["apiParameterMissing"] = 1] = "apiParameterMissing";
        ErrorCode2[ErrorCode2["apiParameterInvalid"] = 2] = "apiParameterInvalid";
        ErrorCode2[ErrorCode2["forbidden"] = 3] = "forbidden";
        ErrorCode2[ErrorCode2["unauthorized"] = 4] = "unauthorized";
        ErrorCode2[ErrorCode2["retry"] = 9] = "retry";
        ErrorCode2[ErrorCode2["customerSuspended"] = 10] = "customerSuspended";
        ErrorCode2[ErrorCode2["pending"] = 11] = "pending";
        ErrorCode2[ErrorCode2["invalidSession"] = 12] = "invalidSession";
        ErrorCode2[ErrorCode2["invalidPartnerId"] = 13] = "invalidPartnerId";
        ErrorCode2[ErrorCode2["invalidMessage"] = 14] = "invalidMessage";
        ErrorCode2[ErrorCode2["invalidPhone"] = 15] = "invalidPhone";
        ErrorCode2[ErrorCode2["userAlreadyExisted"] = 155101] = "userAlreadyExisted";
        ErrorCode2[ErrorCode2["userNotFound"] = 155102] = "userNotFound";
        ErrorCode2[ErrorCode2["userTokenNotFound"] = 155103] = "userTokenNotFound";
        ErrorCode2[ErrorCode2["userTokenExpired"] = 155104] = "userTokenExpired";
        ErrorCode2[ErrorCode2["invalidUserToken"] = 155105] = "invalidUserToken";
        ErrorCode2[ErrorCode2["userWasInitialized"] = 155106] = "userWasInitialized";
        ErrorCode2[ErrorCode2["userHasSetPin"] = 155107] = "userHasSetPin";
        ErrorCode2[ErrorCode2["userHasSetSecurityQuestion"] = 155108] = "userHasSetSecurityQuestion";
        ErrorCode2[ErrorCode2["userWasDisabled"] = 155109] = "userWasDisabled";
        ErrorCode2[ErrorCode2["userDoesNotSetPinYet"] = 155110] = "userDoesNotSetPinYet";
        ErrorCode2[ErrorCode2["userDoesNotSetSecurityQuestionYet"] = 155111] = "userDoesNotSetSecurityQuestionYet";
        ErrorCode2[ErrorCode2["incorrectUserPin"] = 155112] = "incorrectUserPin";
        ErrorCode2[ErrorCode2["incorrectDeviceId"] = 155113] = "incorrectDeviceId";
        ErrorCode2[ErrorCode2["incorrectAppId"] = 155114] = "incorrectAppId";
        ErrorCode2[ErrorCode2["incorrectSecurityAnswers"] = 155115] = "incorrectSecurityAnswers";
        ErrorCode2[ErrorCode2["invalidChallengeId"] = 155116] = "invalidChallengeId";
        ErrorCode2[ErrorCode2["invalidApproveContent"] = 155117] = "invalidApproveContent";
        ErrorCode2[ErrorCode2["invalidEncryptionKey"] = 155118] = "invalidEncryptionKey";
        ErrorCode2[ErrorCode2["userPinLocked"] = 155119] = "userPinLocked";
        ErrorCode2[ErrorCode2["securityAnswersLocked"] = 155120] = "securityAnswersLocked";
        ErrorCode2[ErrorCode2["userOTPTokenExpiredError"] = 155130] = "userOTPTokenExpiredError";
        ErrorCode2[ErrorCode2["userOTPTokenInvalidError"] = 155131] = "userOTPTokenInvalidError";
        ErrorCode2[ErrorCode2["userOTPNotFoundError"] = 155132] = "userOTPNotFoundError";
        ErrorCode2[ErrorCode2["userOTPInvalidError"] = 155133] = "userOTPInvalidError";
        ErrorCode2[ErrorCode2["userOTPNotMatchError"] = 155134] = "userOTPNotMatchError";
        ErrorCode2[ErrorCode2["userEmailInvalidError"] = 155135] = "userEmailInvalidError";
        ErrorCode2[ErrorCode2["userEmailMismatchError"] = 155136] = "userEmailMismatchError";
        ErrorCode2[ErrorCode2["deviceIDInvalidError"] = 155137] = "deviceIDInvalidError";
        ErrorCode2[ErrorCode2["emailSendingFailedError"] = 155138] = "emailSendingFailedError";
        ErrorCode2[ErrorCode2["socialLoginTokenExpiredError"] = 155139] = "socialLoginTokenExpiredError";
        ErrorCode2[ErrorCode2["socialLoginProviderAppIDNotMatchError"] = 155140] = "socialLoginProviderAppIDNotMatchError";
        ErrorCode2[ErrorCode2["userOTPIsLockedError"] = 155141] = "userOTPIsLockedError";
        ErrorCode2[ErrorCode2["userOTPSendCountsOverLimitError"] = 155142] = "userOTPSendCountsOverLimitError";
        ErrorCode2[ErrorCode2["deviceTokenExpiredError"] = 155143] = "deviceTokenExpiredError";
        ErrorCode2[ErrorCode2["deviceTokenInvalidError"] = 155144] = "deviceTokenInvalidError";
        ErrorCode2[ErrorCode2["deviceTokenNotFoundError"] = 155145] = "deviceTokenNotFoundError";
        ErrorCode2[ErrorCode2["notEnoughFunds"] = 155201] = "notEnoughFunds";
        ErrorCode2[ErrorCode2["notEnoughBalance"] = 155202] = "notEnoughBalance";
        ErrorCode2[ErrorCode2["exceedWithdrawLimit"] = 155203] = "exceedWithdrawLimit";
        ErrorCode2[ErrorCode2["minimumFundsRequired"] = 155204] = "minimumFundsRequired";
        ErrorCode2[ErrorCode2["invalidTransactionFee"] = 155205] = "invalidTransactionFee";
        ErrorCode2[ErrorCode2["rejectedOnAmlScreening"] = 155206] = "rejectedOnAmlScreening";
        ErrorCode2[ErrorCode2["tagRequired"] = 155207] = "tagRequired";
        ErrorCode2[ErrorCode2["gasLimitTooLow"] = 155208] = "gasLimitTooLow";
        ErrorCode2[ErrorCode2["transactionDataNotEncodedProperly"] = 155209] = "transactionDataNotEncodedProperly";
        ErrorCode2[ErrorCode2["fullNodeReturnedError"] = 155210] = "fullNodeReturnedError";
        ErrorCode2[ErrorCode2["walletSetupRequired"] = 155211] = "walletSetupRequired";
        ErrorCode2[ErrorCode2["lowerThenMinimumAccountBalance"] = 155212] = "lowerThenMinimumAccountBalance";
        ErrorCode2[ErrorCode2["rejectedByBlockchain"] = 155213] = "rejectedByBlockchain";
        ErrorCode2[ErrorCode2["droppedAsPartOfReorg"] = 155214] = "droppedAsPartOfReorg";
        ErrorCode2[ErrorCode2["operationNotSupport"] = 155215] = "operationNotSupport";
        ErrorCode2[ErrorCode2["amountBelowMinimum"] = 155216] = "amountBelowMinimum";
        ErrorCode2[ErrorCode2["wrongNftTokenIdNumber"] = 155217] = "wrongNftTokenIdNumber";
        ErrorCode2[ErrorCode2["invalidDestinationAddress"] = 155218] = "invalidDestinationAddress";
        ErrorCode2[ErrorCode2["tokenWalletChainMismatch"] = 155219] = "tokenWalletChainMismatch";
        ErrorCode2[ErrorCode2["wrongAmountsNumber"] = 155220] = "wrongAmountsNumber";
        ErrorCode2[ErrorCode2["walletIsFrozen"] = 155501] = "walletIsFrozen";
        ErrorCode2[ErrorCode2["maxWalletLimitReached"] = 155502] = "maxWalletLimitReached";
        ErrorCode2[ErrorCode2["walletSetIdMutuallyExclusive"] = 155503] = "walletSetIdMutuallyExclusive";
        ErrorCode2[ErrorCode2["metadataUnmatched"] = 155504] = "metadataUnmatched";
        ErrorCode2[ErrorCode2["userCanceled"] = 155701] = "userCanceled";
        ErrorCode2[ErrorCode2["launchUiFailed"] = 155702] = "launchUiFailed";
        ErrorCode2[ErrorCode2["pinCodeNotMatched"] = 155703] = "pinCodeNotMatched";
        ErrorCode2[ErrorCode2["insecurePinCode"] = 155704] = "insecurePinCode";
        ErrorCode2[ErrorCode2["hintsMatchAnswers"] = 155705] = "hintsMatchAnswers";
        ErrorCode2[ErrorCode2["networkError"] = 155706] = "networkError";
        ErrorCode2[ErrorCode2["userSecretMissing"] = 155717] = "userSecretMissing";
        ErrorCode2[ErrorCode2["invalidUserTokenFormat"] = 155718] = "invalidUserTokenFormat";
        ErrorCode2[ErrorCode2["userTokenMismatch"] = 155719] = "userTokenMismatch";
        ErrorCode2[ErrorCode2["walletIdNotFound"] = 156001] = "walletIdNotFound";
        ErrorCode2[ErrorCode2["tokenIdNotFound"] = 156002] = "tokenIdNotFound";
        ErrorCode2[ErrorCode2["transactionIdNotFound"] = 156003] = "transactionIdNotFound";
        ErrorCode2[ErrorCode2["entityCredentialNotFound"] = 156004] = "entityCredentialNotFound";
        ErrorCode2[ErrorCode2["walletSetIdNotFound"] = 156005] = "walletSetIdNotFound";
      })(ErrorCode = exports3.ErrorCode || (exports3.ErrorCode = {}));
      var SocialLoginProvider;
      (function(SocialLoginProvider2) {
        SocialLoginProvider2["APPLE"] = "Apple";
        SocialLoginProvider2["FACEBOOK"] = "Facebook";
        SocialLoginProvider2["GOOGLE"] = "Google";
      })(SocialLoginProvider = exports3.SocialLoginProvider || (exports3.SocialLoginProvider = {}));
    }
  });

  // node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/index.js
  var require_src = __commonJS({
    "node_modules/@circle-fin/w3s-pw-web-sdk/dist/src/index.js"(exports3) {
      "use strict";
      init_dirname();
      init_buffer2();
      init_process2();
      var __awaiter2 = exports3 && exports3.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __importDefault2 = exports3 && exports3.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.W3SSdk = void 0;
      var app_1 = require_index_cjs5();
      var auth_1 = require_index_cjs6();
      var jsonwebtoken_1 = (init_stub_jsonwebtoken(), __toCommonJS(stub_jsonwebtoken_exports));
      var uuid_1 = require_commonjs_browser();
      var package_json_1 = __importDefault2(require_package());
      var types_1 = require_types();
      var W3SSdk2 = class _W3SSdk {
        constructor(configs, onLoginComplete2) {
          this.serviceUrl = "https://pw-auth.circle.com";
          this.window = window;
          this.securityQuestionsRequiredCount = 2;
          this.shouldCloseModalOnForgotPin = false;
          this.receivedResponseFromService = false;
          this.messageHandler = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
            if (event.origin !== this.serviceUrl) {
              return;
            }
            if ((_a = event.data) === null || _a === void 0 ? void 0 : _a.onFrameReady) {
              this.receivedResponseFromService = true;
              const iframe = this.window.document.getElementById("sdkIframe");
              (_b = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage({
                w3s: {
                  appSettings: (_c = this.configs) === null || _c === void 0 ? void 0 : _c.appSettings,
                  auth: (_d = this.configs) === null || _d === void 0 ? void 0 : _d.authentication,
                  challenge: this.challenge,
                  customizations: {
                    securityQuestions: {
                      questions: this.securityQuestions,
                      requiredCount: this.securityQuestionsRequiredCount,
                      securityConfirmItems: this.securityConfirmItems
                    },
                    themeColor: this.themeColor,
                    localizations: this.localizations,
                    resources: this.resources,
                    customLinks: this.customLinks
                  },
                  deviceInfo: this.deviceInfo,
                  socialVerification: {
                    token: this.socialLoginToken,
                    deviceToken: (_f = (_e = this.configs) === null || _e === void 0 ? void 0 : _e.loginConfigs) === null || _f === void 0 ? void 0 : _f.deviceToken,
                    deviceEncryptionKey: (_h = (_g = this.configs) === null || _g === void 0 ? void 0 : _g.loginConfigs) === null || _h === void 0 ? void 0 : _h.deviceEncryptionKey,
                    socialLoginProvider: this.socialLoginProvider
                  },
                  emailVerification: {
                    deviceToken: (_k = (_j = this.configs) === null || _j === void 0 ? void 0 : _j.loginConfigs) === null || _k === void 0 ? void 0 : _k.deviceToken,
                    deviceEncryptionKey: (_m = (_l = this.configs) === null || _l === void 0 ? void 0 : _l.loginConfigs) === null || _m === void 0 ? void 0 : _m.deviceEncryptionKey,
                    otpToken: (_p = (_o = this.configs) === null || _o === void 0 ? void 0 : _o.loginConfigs) === null || _p === void 0 ? void 0 : _p.otpToken
                  }
                }
              }, this.serviceUrl);
            } else if ((_q = event.data) === null || _q === void 0 ? void 0 : _q.onForgotPin) {
              (_r = this.onForgotPin) === null || _r === void 0 ? void 0 : _r.call(this);
            } else if ((_s = event.data) === null || _s === void 0 ? void 0 : _s.onComplete) {
              const iframe = this.window.document.getElementById("sdkIframe");
              (_t = iframe === null || iframe === void 0 ? void 0 : iframe.parentNode) === null || _t === void 0 ? void 0 : _t.removeChild(iframe);
              void ((_u = this.onComplete) === null || _u === void 0 ? void 0 : _u.call(this, void 0, (_v = event.data) === null || _v === void 0 ? void 0 : _v.result));
            } else if ((_w = event.data) === null || _w === void 0 ? void 0 : _w.deviceId) {
              (_x = this.resolveDeviceIdPromise) === null || _x === void 0 ? void 0 : _x.call(this, event.data.deviceId);
              this.closeModal();
              this.unSubscribeMessage();
            } else if ((_y = event.data) === null || _y === void 0 ? void 0 : _y.showUi) {
              this.iframe.width = "100%";
              this.iframe.height = "100%";
              this.iframe.style.zIndex = "2147483647";
              this.iframe.style.position = "fixed";
              this.iframe.style.top = "50%";
              this.iframe.style.left = "50%";
              this.iframe.style.transform = "translate(-50%, -50%)";
              this.iframe.style.display = "";
            } else if ((_z = event.data) === null || _z === void 0 ? void 0 : _z.onSocialLoginVerified) {
              void ((_0 = this.onLoginComplete) === null || _0 === void 0 ? void 0 : _0.call(this, event.data.onSocialLoginVerified.error, event.data.onSocialLoginVerified.result));
              this.closeModal();
              this.unSubscribeMessage();
            } else if ((_1 = event.data) === null || _1 === void 0 ? void 0 : _1.onEmailLoginVerified) {
              void ((_2 = this.onLoginComplete) === null || _2 === void 0 ? void 0 : _2.call(this, event.data.onEmailLoginVerified.error, event.data.onEmailLoginVerified.result));
              if (event.data.onEmailLoginVerified.result && !event.data.onEmailLoginVerified.error) {
                this.unSubscribeMessage();
                this.closeModal();
              }
            } else if ((_3 = event.data) === null || _3 === void 0 ? void 0 : _3.onResendOtpEmail) {
              (_4 = this.onResendOtpEmail) === null || _4 === void 0 ? void 0 : _4.call(this);
            } else if ((_5 = event.data) === null || _5 === void 0 ? void 0 : _5.onError) {
              void ((_6 = this.onComplete) === null || _6 === void 0 ? void 0 : _6.call(this, (_7 = event.data) === null || _7 === void 0 ? void 0 : _7.error, void 0));
            } else if ((_8 = event.data) === null || _8 === void 0 ? void 0 : _8.onClose) {
              this.closeModal();
              this.unSubscribeMessage();
            }
          };
          if (_W3SSdk.instance != null) {
            this.setupInstance(configs, onLoginComplete2);
            return _W3SSdk.instance;
          }
          this.iframe = document.createElement("iframe");
          this.setupInstance(configs, onLoginComplete2);
          _W3SSdk.instance = this;
        }
        /**
         * Sets the application settings.
         * This method will be deprecated in the future. Please use the constructor to set the application settings.
         * @param appSettings - Application settings.
         */
        setAppSettings(appSettings) {
          if (this.configs) {
            this.configs.appSettings = appSettings;
          } else {
            this.configs = { appSettings };
          }
        }
        /**
         * Sets the authentication information.
         * @param auth - Authentication information.
         */
        setAuthentication(auth) {
          if (this.configs) {
            this.configs.authentication = auth;
          } else {
            this.configs = {
              appSettings: {
                appId: ""
              },
              authentication: auth
            };
          }
        }
        /**
         * Updates the configurations.
         * @param configs - Configurations.
         * @param onLoginComplete - Callback function that is called when the page is redirected back from the social login provider and receives the verification result.
         */
        updateConfigs(configs, onLoginComplete2) {
          this.setupInstance(configs, onLoginComplete2 !== null && onLoginComplete2 !== void 0 ? onLoginComplete2 : this.onLoginComplete);
        }
        /**
         * Gets the device ID.
         * @returns Promise<string> - Device ID.
         */
        getDeviceId() {
          return new Promise((resolve, reject) => {
            this.resolveDeviceIdPromise = resolve;
            this.rejectDeviceIdPromise = reject;
            this.subscribeMessage();
            this.appendIframe(false, "device-id");
            setTimeout(() => {
              var _a;
              if (!this.receivedResponseFromService) {
                (_a = this.rejectDeviceIdPromise) === null || _a === void 0 ? void 0 : _a.call(this, "Failed to receive deviceId");
                this.closeModal();
                this.unSubscribeMessage();
              }
            }, 1e3 * 10);
          });
        }
        /**
         * Performs social login.
         * @param provider - Social login provider.
         */
        performLogin(provider) {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            if (provider === types_1.SocialLoginProvider.GOOGLE) {
              this.performGoogleLogin();
            } else if (provider === types_1.SocialLoginProvider.FACEBOOK) {
              this.performFacebookLogin();
            } else if (provider === types_1.SocialLoginProvider.APPLE) {
              yield this.performAppleLogin();
            } else {
              void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155140,
                message: "Invalid social login provider"
              }, void 0));
            }
          });
        }
        /**
         * Executes email OTP verification.
         */
        verifyOtp() {
          this.subscribeMessage();
          this.appendIframe(true, "social/verify-email");
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        /**
         * Executes the challenge.
         * @param challengeId - Challenge ID.
         * @param onCompleted - Callback function that is called when the challenge is completed.
         */
        execute(challengeId, onCompleted) {
          this.subscribeMessage();
          this.setChallenge({ challengeId });
          this.exec(onCompleted, false);
        }
        /**
         * Sets the custom security questions. If the user doesn't provide the custom security questions, the default security questions will be used.
         * @param questions - Custom security questions.
         * @param requiredCount - Required number of security questions.
         * @param securityConfirmItems - Security confirm disclaimer items.
         */
        setCustomSecurityQuestions(questions, requiredCount = 2, securityConfirmItems) {
          this.securityQuestions = questions;
          this.securityConfirmItems = securityConfirmItems;
          if (requiredCount <= 0) {
            this.securityQuestionsRequiredCount = 2;
          } else {
            this.securityQuestionsRequiredCount = requiredCount;
          }
        }
        /**
         * Sets the localizations.
         * @param localizations - Localizations.
         */
        setLocalizations(localizations) {
          this.localizations = localizations;
        }
        /**
         * Sets the resources.
         * @param resources - Resources.
         */
        setResources(resources) {
          this.resources = resources;
        }
        /**
         * Sets the theme color.
         * @param themeColor - Theme color.
         */
        setThemeColor(themeColor) {
          this.themeColor = themeColor;
        }
        /**
         * Sets the custom links.
         * @param customLinks - Custom links.
         */
        setCustomLinks(customLinks) {
          this.customLinks = customLinks;
        }
        /**
         * Sets the callback function that is called when the user clicks the forgot pin button.
         * @param onForgotPin - Callback function that is called when the user clicks the forgot pin button.
         * @param shouldCloseModalOnForgotPin - Indicates whether the modal should be closed when the user clicks the forgot pin button.  Default is false.
         */
        setOnForgotPin(onForgotPin, shouldCloseModalOnForgotPin = false) {
          this.shouldCloseModalOnForgotPin = shouldCloseModalOnForgotPin;
          this.onForgotPin = () => {
            if (this.shouldCloseModalOnForgotPin) {
              this.closeModal();
            }
            onForgotPin === null || onForgotPin === void 0 ? void 0 : onForgotPin();
          };
        }
        /**
         * Sets the callback function that is called when the user clicks the resend OTP email button.
         * @param onResendOtpEmail - Callback function that is called when the user clicks the resend OTP email button.
         */
        setOnResendOtpEmail(onResendOtpEmail) {
          this.onResendOtpEmail = onResendOtpEmail;
        }
        /**
         * Sets up the instance.
         * @param configs - Configurations.
         * @param onLoginComplete - Callback function that is called when the page is redirected back from the social login provider and receives the verification result.
         */
        setupInstance(configs, onLoginComplete2) {
          var _a;
          if (((_a = configs === null || configs === void 0 ? void 0 : configs.loginConfigs) === null || _a === void 0 ? void 0 : _a.apple) && (0, app_1.getApps)().length === 0) {
            this.firebaseApp = (0, app_1.initializeApp)(configs.loginConfigs.apple);
          } else if ((0, app_1.getApps)().length !== 0) {
            this.firebaseApp = (0, app_1.getApps)()[0];
          }
          this.onLoginComplete = onLoginComplete2;
          this.configs = configs;
          this.deviceInfo = {
            model: "Web",
            version: package_json_1.default.version
          };
          void this.execSocialLoginStatusCheck();
        }
        /**
         * Sets the challenge.
         * @param challenge - Challenge.
         */
        setChallenge(challenge) {
          this.challenge = challenge;
        }
        /**
         * Appends the iframe to the document body.
         * @param showIframe - Indicates whether the iframe should be shown. Default is true.
         * @param subRoute - Sub route.
         */
        appendIframe(showIframe = true, subRoute = "") {
          const protocol = this.window.location.protocol;
          const host = this.window.location.host;
          const fullDomainWithProtocol = `${protocol}//${host}`;
          this.iframe.src = `${this.serviceUrl}/${subRoute}?origin=${fullDomainWithProtocol}`;
          this.iframe.id = "sdkIframe";
          this.iframe.width = showIframe ? "100%" : "0%";
          this.iframe.height = showIframe ? "100%" : "0%";
          this.iframe.style.zIndex = showIframe ? "2147483647" : "-1";
          this.iframe.style.display = "none";
          if (showIframe) {
            this.iframe.style.position = "fixed";
            this.iframe.style.top = "50%";
            this.iframe.style.left = "50%";
            this.iframe.style.transform = "translate(-50%, -50%)";
            this.iframe.style.display = "";
          }
          document.body.appendChild(this.iframe);
        }
        /**
         * Executes the challenge.
         * @param onCompleted - Callback function that is called when the challenge is completed.
         * @param showIframe - Indicates whether the iframe should be shown. Default is true.
         */
        exec(onCompleted, showIframe = true) {
          this.appendIframe(showIframe);
          this.onComplete = onCompleted;
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        performAppleLogin() {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            if (!this.firebaseApp) {
              void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155140,
                message: "Please provide the Apple social login configurations."
              }, void 0));
              return;
            }
            this.saveOAuthInfo(types_1.SocialLoginProvider.APPLE);
            const provider = new auth_1.OAuthProvider("apple.com");
            const auth = (0, auth_1.getAuth)(this.firebaseApp);
            try {
              const cred = yield (0, auth_1.signInWithPopup)(auth, provider);
              if (!this.extractTokenFromResultAndSave(cred)) {
                return;
              }
              this.verifyTokenViaService();
              this.window.localStorage.setItem("socialLoginProvider", "");
            } catch (error) {
              if (error instanceof app_1.FirebaseError && error.code !== "auth/cancelled-popup-request" && error.code !== "auth/popup-closed-by-user") {
                yield this.handleFirebaseFailure(error);
              } else if (!(error instanceof app_1.FirebaseError)) {
                this.handleLoginFailure();
              }
            }
          });
        }
        performFacebookLogin() {
          var _a, _b, _c;
          if (!((_b = (_a = this === null || this === void 0 ? void 0 : this.configs) === null || _a === void 0 ? void 0 : _a.loginConfigs) === null || _b === void 0 ? void 0 : _b.facebook)) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, {
              code: 155140,
              message: "Please provide the Facebook social login configurations."
            }, void 0));
            return;
          }
          const { appId, redirectUri } = this.configs.loginConfigs.facebook;
          const { url = "", state = "" } = this.generateOauthUrlWithParams(types_1.SocialLoginProvider.FACEBOOK, appId, redirectUri) || {};
          this.saveOAuthInfo(types_1.SocialLoginProvider.FACEBOOK, state);
          this.window.location.href = url;
        }
        performGoogleLogin() {
          var _a, _b, _c;
          if (!((_b = (_a = this.configs) === null || _a === void 0 ? void 0 : _a.loginConfigs) === null || _b === void 0 ? void 0 : _b.google)) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, {
              code: 155140,
              message: "Please provide the Google social login configurations."
            }, void 0));
            return;
          }
          const { clientId, redirectUri, selectAccountPrompt } = this.configs.loginConfigs.google;
          const { url = "", state = "", nonce = "" } = this.generateOauthUrlWithParams(types_1.SocialLoginProvider.GOOGLE, clientId, redirectUri, selectAccountPrompt) || {};
          this.saveOAuthInfo(types_1.SocialLoginProvider.GOOGLE, state, nonce);
          this.window.location.href = url;
        }
        /**
         * Generates the OAuth URL with the necessary parameters.
         * @param provider - Social login provider.
         * @param id - Client ID or Application ID.
         * @param redirectUri - Redirect URI.
         * @param selectAccountPrompt - Indicates whether the user should select the account. Default is false.
         * @returns OAuth URL with the necessary parameters.
         */
        generateOauthUrlWithParams(provider, id, redirectUri, selectAccountPrompt = false) {
          const state = (0, uuid_1.v4)();
          if (provider === types_1.SocialLoginProvider.GOOGLE) {
            const scope = encodeURIComponent("openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email");
            const responseType = encodeURIComponent("id_token token");
            const nonce = (0, uuid_1.v4)();
            return {
              url: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}&response_type=${responseType}&nonce=${nonce}&prompt=${selectAccountPrompt ? "select_account" : "none"}`,
              state,
              nonce
            };
          } else if (provider === types_1.SocialLoginProvider.FACEBOOK) {
            const scope = encodeURIComponent("email");
            return {
              url: `https://www.facebook.com/v13.0/dialog/oauth?client_id=${id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${state}&response_type=token`,
              state
            };
          }
        }
        /**
         * Executes the social login status check before sending the token to the verification service.
         */
        execSocialLoginStatusCheck() {
          return __awaiter2(this, void 0, void 0, function* () {
            const socialLoginProvider = this.window.localStorage.getItem("socialLoginProvider");
            if (socialLoginProvider === types_1.SocialLoginProvider.APPLE) {
              yield this.handleAppleLoginResponse();
            } else if (this.isValidHash(this.window.location.hash)) {
              this.handleHashLoginResponse(socialLoginProvider);
            }
          });
        }
        /**
         * Handles the Apple login response.
         * @returns Promise<void>.
         */
        handleAppleLoginResponse() {
          return __awaiter2(this, void 0, void 0, function* () {
            const auth = (0, auth_1.getAuth)(this.firebaseApp);
            try {
              const result = yield (0, auth_1.getRedirectResult)(auth);
              if (!result || !this.extractTokenFromResultAndSave(result)) {
                return;
              }
              this.verifyTokenViaService();
              this.window.localStorage.setItem("socialLoginProvider", "");
            } catch (error) {
              this.handleLoginFailure();
            }
          });
        }
        /**
         * Handles the hash login responses.
         * @param socialLoginProvider - Social login provider.
         */
        handleHashLoginResponse(socialLoginProvider) {
          const hashParams = new URLSearchParams(window.location.hash.slice(1));
          if (socialLoginProvider === types_1.SocialLoginProvider.GOOGLE) {
            this.handleGoogleLogin(hashParams);
          } else if (socialLoginProvider === types_1.SocialLoginProvider.FACEBOOK) {
            this.handleFacebookLogin(hashParams);
          }
          this.verifyTokenViaService();
          history.replaceState(null, "", window.location.href.split("#")[0]);
        }
        handleGoogleLogin(hashParams) {
          if (this.isLoginStateValid(hashParams) && this.isLoginNonceValid(hashParams)) {
            this.socialLoginToken = hashParams.get("id_token");
            this.socialLoginProvider = types_1.SocialLoginProvider.GOOGLE;
          }
        }
        handleFacebookLogin(hashParams) {
          if (this.isLoginStateValid(hashParams)) {
            this.socialLoginToken = hashParams.get("access_token");
            this.socialLoginProvider = types_1.SocialLoginProvider.FACEBOOK;
          }
        }
        isLoginStateValid(hashParams) {
          return this.checkSocialLoginState(hashParams);
        }
        isLoginNonceValid(hashParams) {
          return this.checkSocialLoginNonce(hashParams);
        }
        isValidHash(hash) {
          const validHashPattern = /^#(?:[a-zA-Z0-9-_.%]+=[^&]*&)*[a-zA-Z0-9-_.%]+=[^&]*$/;
          return validHashPattern.test(hash);
        }
        extractTokenFromResultAndSave(result) {
          const credential = auth_1.OAuthProvider.credentialFromResult(result);
          if (credential && credential.idToken) {
            this.socialLoginToken = credential.idToken;
            this.socialLoginProvider = types_1.SocialLoginProvider.APPLE;
            return true;
          }
          return false;
        }
        handleFirebaseFailure(error) {
          var _a;
          return __awaiter2(this, void 0, void 0, function* () {
            yield (_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
              code: -1,
              message: error.message
            }, void 0);
          });
        }
        handleLoginFailure() {
          var _a;
          void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
            code: 155140,
            message: "Failed to validate the idToken / accessToken"
          }, void 0));
        }
        verifyTokenViaService() {
          this.subscribeMessage();
          this.appendIframe(false, "social/verify-token");
          setTimeout(() => {
            var _a;
            if (!this.receivedResponseFromService) {
              void ((_a = this.onComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
                code: 155706,
                message: "Network error"
              }, void 0));
            }
          }, 1e3 * 10);
        }
        /**
         * Saves the OAuth information to the local storage in order to check the state and nonce value later.
         * @param provider - Social login provider.
         * @param state - State value.
         * @param nonce - Nonce value.
         */
        saveOAuthInfo(provider, state, nonce) {
          this.window.localStorage.setItem("socialLoginProvider", provider);
          this.window.localStorage.setItem("state", state !== null && state !== void 0 ? state : "");
          this.window.localStorage.setItem("nonce", nonce !== null && nonce !== void 0 ? nonce : "");
        }
        /**
         * Checks the state value from the social login response.
         * @param hashParams - Hash parameters.
         * @returns Indicates whether the state value is valid.
         */
        checkSocialLoginState(hashParams) {
          var _a;
          const state = hashParams.get("state");
          const storedState = this.window.localStorage.getItem("state");
          if (!storedState || state !== storedState) {
            void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, {
              code: 155140,
              message: "Failed to validate the idToken / accessToken"
            }, void 0));
            return false;
          }
          return true;
        }
        /**
         * Checks the nonce value from the social login response. Only id token is going to have nonce value.
         * @param hashParams - Hash parameters.
         * @returns Indicates whether the nonce value is valid.
         */
        checkSocialLoginNonce(hashParams) {
          var _a, _b, _c;
          const token = hashParams.get("id_token");
          const decodedToken = (0, jsonwebtoken_1.decode)(token || "");
          const errorPayload = {
            code: 155140,
            message: "Failed to validate the idToken/ accessToken"
          };
          if (decodedToken === null) {
            void ((_a = this.onLoginComplete) === null || _a === void 0 ? void 0 : _a.call(this, errorPayload, void 0));
            return false;
          }
          try {
            const storedNonce = this.window.localStorage.getItem("nonce");
            if (!storedNonce || (decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.nonce) !== storedNonce) {
              void ((_b = this.onLoginComplete) === null || _b === void 0 ? void 0 : _b.call(this, errorPayload, void 0));
              return false;
            }
          } catch (_d) {
            void ((_c = this.onLoginComplete) === null || _c === void 0 ? void 0 : _c.call(this, errorPayload, void 0));
            return false;
          }
          return true;
        }
        /**
         * Closes the modal.
         */
        closeModal() {
          var _a;
          const iframe = this.window.document.getElementById("sdkIframe");
          (_a = iframe === null || iframe === void 0 ? void 0 : iframe.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(iframe);
        }
        /**
         * Subscribes to the postMessage event.
         */
        subscribeMessage() {
          this.window.addEventListener("message", this.messageHandler, false);
        }
        /**
         * Unsubscribes to the postMessage event.
         */
        unSubscribeMessage() {
          this.window.removeEventListener("message", this.messageHandler, false);
        }
      };
      exports3.W3SSdk = W3SSdk2;
      W3SSdk2.instance = null;
    }
  });

  // src/console/otp-client.ts
  init_dirname();
  init_buffer2();
  init_process2();
  var import_w3s_pw_web_sdk = __toESM(require_src(), 1);
  var sdk = null;
  var deviceId = "";
  var loginResult = null;
  var loginCompleteHandlers = [];
  function onLoginComplete(handler) {
    loginCompleteHandlers.push(handler);
  }
  async function init() {
    const configRes = await fetch("/api/config");
    const config2 = await configRes.json();
    if (!config2.circleAppId) {
      throw new Error("ARIKE_CIRCLE_APP_ID not set in Vercel \u2014 see CIRCLE_SETUP.md section on OTP login.");
    }
    sdk = new import_w3s_pw_web_sdk.W3SSdk({ appSettings: { appId: config2.circleAppId } }, (error, result) => {
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
  async function requestOtp(email) {
    if (!sdk) throw new Error("Call ArikeOTP.init() first");
    const res = await fetch("/api/circle-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "requestEmailOtp", deviceId, email })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || data.message || "Failed to request OTP");
    const configRes = await fetch("/api/config");
    const config2 = await configRes.json();
    sdk.updateConfigs({
      appSettings: { appId: config2.circleAppId },
      loginConfigs: {
        deviceToken: data.deviceToken,
        deviceEncryptionKey: data.deviceEncryptionKey,
        otpToken: data.otpToken
      }
    });
  }
  function verifyOtp() {
    if (!sdk) throw new Error("Call ArikeOTP.init() first");
    sdk.verifyOtp();
  }
  async function initializeUser(userToken) {
    const res = await fetch("/api/circle-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "initializeUser", userToken })
    });
    const data = await res.json();
    return { ok: res.ok, status: res.status, data };
  }
  function executeChallenge(challengeId, cb) {
    if (!sdk || !loginResult) throw new Error("Not logged in yet");
    sdk.setAuthentication({ userToken: loginResult.userToken, encryptionKey: loginResult.encryptionKey });
    sdk.execute(challengeId, cb);
  }
  async function listWallets(userToken) {
    const res = await fetch("/api/circle-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "listWallets", userToken })
    });
    return res.json();
  }
  window.ArikeOTP = {
    init,
    requestOtp,
    verifyOtp,
    initializeUser,
    executeChallenge,
    listWallets,
    onLoginComplete,
    getLoginResult: () => loginResult
  };
})();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@firebase/util/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/index.cjs.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/browser-cjs/index-e2e765e6.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
