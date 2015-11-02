var sensor = {

  publish: function(data) {
    var params = config.load();
    // var deviceId = sensor.deviceInfo().uuid;

    var deviceId = 'a3e243545d9990df';
    params = {
      org: 'g86hp5',
      deviceType: 'Cordova',
      token: 'QhKF7SUWVA)UIXkSXD'
    };

    var client = mqtt.connect(
      "tcp://" + params.org + ".messaging.internetofthings.ibmcloud.com:1883",
      {
        clientId: 'd:' + params.org + ':' + params.deviceType + ':' + deviceId,
        username: 'use-token-auth',
        password: params.token
      }
    );
    geolocation.get(function(geolocation) {
      accelerometer.get(function(accelerometer) {
        console.log("publihed");
        client.publish(
          "iot-2/evt/itemsvc/fmt/json",
          JSON.stringify({
            "d": {
              device: sensor.deviceInfo(),
              geolocation: geolocation,
              accelerometer: accelerometer
            },
            "ts": sensor.timestamp()
          }),
          function() {
            console.log("disconnected")
            client.end();
          }
        );
      });
    });
  },

  deviceInfo: function() {
    try {
      return device;
    } catch (e) {
      return null;
    }
  },

  timestamp: function() {
    var now = new Date();
    var date = now.getFullYear() + '/';
    date = date + (now.getMonth() + 1) + '/';
    date = date + now.getDate() + 'T';
    date = date + now.getHours() + ':';
    date = date + now.getMinutes() + ':';
    date = date + now.getSeconds() + '.';
    date = date + now.getMilliseconds() + 'Z';
    return date;
  }

};
