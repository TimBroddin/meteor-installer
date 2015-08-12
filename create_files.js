var fs = Npm.require('fs');
var mkdirp = Npm.require('mkdirp');
var touch = Npm.require('touch');

var base = process.env.PWD;
var install_file = base + '/installer.json';

if(process.env.NODE_ENV == 'development') {
    if (!fs.existsSync(install_file)) {
        console.warn('INSTALLER: Please provide an installer.json file in the root of your project.')
    } else {
        try {
            var json = JSON.parse(fs.readFileSync(install_file));
            if (json.folders) {
                json.folders.forEach(function (f) {
                    var folder = base + '/' + f;
                    if (!fs.existsSync(folder)) {
                        console.info('INSTALLER: creating folder ' + folder);
                        mkdirp.sync(folder);
                    }
                });
            }

            if (json.files) {
                json.files.forEach(function (f) {
                    var file = base + '/' + f;
                    if (!fs.existsSync(file)) {
                        console.info('INSTALLER: creating file ' + file);
                        touch.sync(file);
                    }
                });

            }
        } catch(e) {
            console.error('INSTALLER: Please check your JSON file');
        }


    }
}
