# Cordova Bluemix IoT app

Publish sensor data acquired from smart phone to Internet of Things Service in BLuemix.

Following data is published.

* Device information
* Accelaration
* GPS

## Download binary

For android, apk file can be downloaded from here.


## Supported platforms

* Android
* iOS


## Usage

### Install app

This instruction is only for android.
If you want to install into iOS device, build source code in this repository.

### Register app


### Publish data




## Development

### Prerequirement

Following commands needs to be installed.

* cordova
* grunt_cli
* browserify

Install by executing following commmand.

```
npm install -g cordova grunt_cli browserify
```

### Install dependensies

Install npm packages.

```
npm install
```

Install front-end modules with grunt.

```
grunt
```

Create mqtt module.

```
cd node_modules/mqtt
npm install .
browserify
```


## LICENSE

MIT License
