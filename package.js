Npm.depends({
  'mkdirp': '0.5.1',
  'touch': '1.0.0'
});

Package.describe({
  name: 'timbroddin:installer',
  version: '0.0.5',
  summary: 'Makes installing boilerplate stuff easy peazy.',
  git: 'https://github.com/TimBroddin/meteor-installer.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("1.1");
  api.add_files('add_packages.js', 'server');
  api.add_files('create_files.js', 'server');
});

Package.onTest(function(api) {
});
