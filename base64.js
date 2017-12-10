const _base64 = require('meteor/ostrio:base64').base64;
Base64 = new _base64({ allowWebWorker: true, useNative: true, ejsonCompatible: true, supportNonASCII: false });

exports.Base64 = Base64;
