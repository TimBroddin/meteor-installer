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
            var packages = fs.readFileSync(base + '/.meteor/packages', 'UTF-8');
            var changed = false;
            json.packages.forEach(function(p) {
                if(packages.indexOf(p) === -1) {
                    packages += "\n" + p;
                    changed = true;
                }
            });
            if(changed) {
                console.warn('INSTALLER: Writing new packages file. Meteor will restart.');
                fs.writeFileSync(base + '/.meteor/packages', packages + "\n");
            }
        } catch(e) {
            console.error('INSTALLER: Please check your JSON file');
        }


    }
}
