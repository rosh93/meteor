Package.describe({
  summary: "Faster touch events on mobile",
  version: '1.0.1-pre.2'
});

Package.on_use(function (api) {
  api.export('FastClick', 'web.cordova');

  api.addFiles(['pre.js', 'fastclick.js', 'post.js'], 'web.cordova');
});
