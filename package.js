Package.describe({
  summary: '[Enhanced Performance] Base64 encoding and decoding',
  version: '1.0.12'
});

Package.onUse(function (api) {
  api.use(['modules', 'ostrio:base64@2.0.0'], ['client', 'server']);
  api.export('Base64');
  api.mainModule('base64.js', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('base64', ['client', 'server']);
  api.use(['tinytest', 'underscore', 'ejson']);

  api.addFiles('base64_test.js', ['client', 'server']);
});
