var sensor = {

  publish: function(data) {
    var params = config.load();
    var deviceId = sensor.deviceInfo().uuid;
    var client = mqtt.connect(
      "tcp://" + params.org + ".messaging.internetofthings.ibmcloud.com:1883",
      {
        clientId: 'd:' + params.org + ':' + params.deviceType + ':' + deviceId,
        username: 'use-token-auth',
        password: params.token
      }
    );
    var payload = {
      "d": data,
      "ts": sensor.timestamp()
    };
    client.publish("iot-2/evt/itemsvc/fmt/json", JSON.stringify(payload));
  },

  get: function() {
    var data = {
      number: Math.floor( Math.random() * 11 ),
      device: sensor.deviceInfo()
    };
    sensor.gps(function(position) {
      sensor.accelerometer(function(acceleration) {
        data.gps = position;
        data.acceleration = acceleration;
        if (data.gps != null) {
          $("#latitude").text(data.gps.latitude);
          $("#longitude").text(data.gps.longitude);
          $("#acuracy").text(data.gps.accuracy);
          $("#altitude").text(data.gps.altitude);
          $("#altitudeAccuracy").text(data.gps.altitudeAccuracy);
          $("#heading").text(data.gps.heading);
          $("#speed").text(data.gps.speed);
          $("#gpsTimestamp").text(data.gps.timestamp);
        }
        if (data.acceleration != null) {
          $("#x").text(data.acceleration.x);
          $("#y").text(data.acceleration.y);
          $("#z").text(data.acceleration.z);
          $("#accelerationTimestamp").text(data.acceleration.timestamp);
        }
        sensor.publish(data);
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

  gps: function(callback) {
    try {
      var options = {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var gps = {};
          gps.latitude = position.coords.latitude;
          gps.longitude = position.coords.longitude;
          gps.accuracy = position.coords.accuracy;
          gps.altitude = position.coords.altitude;
          gps.altitudeAccuracy = position.coords.altitudeAccuracy;
          gps.heading = position.coords.heading;
          gps.speed = position.coords.speed;
          gps.timestamp = position.timestamp;
          callback(gps);
        },
        function(error) {
          callback(error);
        },
        options
      );
    } catch(e) {
      callback(null);
    }
  },

  accelerometer: function(callback) {
    try {
      navigator.accelerometer.getCurrentAcceleration(
        function(acceleration) {
          callback(acceleration);
        },
        function() {
          callback({
            error: 'error'
          });
        }
      );
    } catch(e) {
      callback(null);
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
