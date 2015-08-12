# Installer package
I was getting tired of adding packages and creating a folder structure each time I started a new Meteor project.

That's why I created this small package for helping me. It's your own Meteor boilerplate, contained in a JSON-file.

# Installing
	
	meteor add timbroddin:installer
	
# Usage
Usage is very simple, just create a file called **installer.json** in the root directory of your application. This file should contain an object with the following keys: *packages*, *folders* and files.

**packages** is an array of packages your app uses. These will be added to `.meteor/packages`. Please note that removing a package here does not remove it from your project.

**folders** is an array of folders to be created, they can be nested like `server/publications`

**files** is an array of files to be created. Make sure the folder you want to place them in exists, otherwise you'll get nasty errors.

# Example

	{
	  "packages": [
		"react",
		"kadira:flow-router",
		"fourseven:scss",
		"dburles:collection-helpers",
		"underscore",
		"kadira:react-layout",
		"meteorhacks:picker",
		"kadira:dochead",
		"meteorhacks:async",
		"alanning:roles"
	  ],
	  "folders": [
		"client/sass",
		"lib",
		"components",
		"collections",
		"public",
		"private",
		"server"
	  ],
	  "files": [
		"client/sass/style.scss",
		"lib/routes.jsx",
		"server/publications.js",
		"server/methods.js"

	  ]
	}

# History
- **v0.0.5**: fixed a typo (thanks Pahan Sarathchandra).
- **v0.0.4**: found out you can't dynamically call `api.use` for packages.