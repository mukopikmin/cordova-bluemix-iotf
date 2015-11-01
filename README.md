# Cordova Bluemix IoT app

Publish sensor data acquired from smart phone to Internet of Things Service in Bluemix at stated periods.

Following data is published.

* Device information
* Accelaration
* GPS

## Download binary

For android, apk file can be downloaded from here soon.


## Supported platforms

Following platform is verified to work.

* Android

Although not tested on these platforms, this app will also work on.

* Amazon Fire OS
* BlackBerry 10
* Firefox OS
* iOS
* Tizen
* Windows 8
* Windows


## Usage

### Install app

This instruction is only for android.
If you want to install into iOS device, build source code in this repository.

### Register app

Writing now...

### Publish data

Writing now...


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
browserify mqtt.js -s mqtt > browserMqtt.js
```

Move `browserMqtt.js` to `www/lib` directory.

## LICENSE

MIT License


## References

mqttjs/MQTT.js
https://github.com/mqttjs/MQTT.js#end

apache/cordova-plugin-device
https://github.com/apache/cordova-plugin-device

apache/cordova-plugin-geolocation
https://github.com/apache/cordova-plugin-geolocation

apache/cordova-plugin-device-motion
https://github.com/apache/cordova-plugin-device-motion
