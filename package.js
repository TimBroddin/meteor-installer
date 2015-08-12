Npm.depends({
  'mkdirp': '0.5.1',
  'touch': '1.0.0'
});

Package.describe({
  name: 'timbroddin:installer',
  version: '0.0.2',
  summary: 'Makes installing boilerplate stuff easy peazy.',
  git: 'https://github.com/TimBroddin/meteor-installer.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  var fs = Npm.require('fs');

  api.versionsFrom("1.1");

  var base = process.env.PWD;
  var install_file = base + '/installer.json';

  if(!fs.existsSync(install_file)) {
    console.warn('INSTALLER: Please provide an installer.json file in the root of your project.')
    return;
  }

  var json = JSON.parse(fs.readFileSync(install_file));

  if(json.packages) {
    json.packages.forEach(function(p) {
      api.imply(p);
    });
  }

  api.add_files('create_files.js', 'server');



});

Package.onTest(function(api) {
});
