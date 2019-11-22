Package.describe({
  name: 'base64',
  summary: '[Enhanced Performance] Base64 encoding and decoding',
  version: '1.0.15',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.5');
  api.export('Base64');
  api.use(['ecmascript', 'ostrio:base64@2.0.2'], ['client', 'server']);
  api.mainModule('base64.js', ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('base64', ['client', 'server']);
  api.use(['tinytest', 'ecmascript', 'ejson']);

  api.addFiles('base64_test.js', ['client', 'server']);
});
