const _base64 = require('meteor/ostrio:base64').Base64;
export const Base64 = new _base64({ allowWebWorker: false, useNative: true, ejsonCompatible: true, supportNonASCII: false });
