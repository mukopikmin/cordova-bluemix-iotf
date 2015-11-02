# Cordova Bluemix IoT app

Publish sensor data acquired from smart phone to Internet of Things Service in Bluemix at stated periods.

Following data is published.

* Device information
* Accelaration
* GPS

In default source code, this app publishes sensor data to Bluemix once every 3 seconds.


## Download Installer for Android

For android, APK file can be downloaded from [here](mukopikmin/cordova-bluemix-iotf/master/docs/cordova-sensor.apk).


## Supported platforms

Following platform is verified to work.

* Android

Although not tested, this app will work on these platforms.

* Amazon Fire OS
* BlackBerry 10
* Firefox OS
* iOS
* Tizen
* Windows 8
* Windows


## Usage

### Preparement in Bluemix

1. Create Internet of Things Service.
2. Open dashboard of the Intenet of Thinds service.
3. Create device type.

### Install app

This instruction is only for android.  
If you want to install into iOS device, build source code in this repository.

1. From settings, cofirm "Unknown source" is checked.
2. Download installer from [download section](## Download Installer for Android).
3. Confirm screen will appear, and tap "INSTALL".
4. App will appear in drawer.

### Register app

1. Start this app, and you will see information of your own device.
2. Copy UUID of the device.
3. Open the dashboard of the Internet of Things servicein Bluemix.
4. Register your device by using copoed UUID.
5. If you finished registring the device, device auth info will be displayed. Copy the auth token.

### Publish data

1. Start this app.
2. Input organization ID (stored in VCAP_SERIVICES), device type (you created in preparement) and device UUID (copied when registering device).
3. Save settings by tapping "Save" button.


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
