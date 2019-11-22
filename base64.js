const _base64 = require('meteor/ostrio:base64').base64;
export const Base64 = new _base64({ allowWebWorker: true, useNative: true, ejsonCompatible: true, supportNonASCII: false });
