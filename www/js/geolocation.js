var geolocation = {

  get: function(callback) {
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

  display: function(data) {
    if (data != null) {
      $("#latitude").text(data.latitude);
      $("#longitude").text(data.longitude);
      $("#acuracy").text(data.accuracy);
      $("#altitude").text(data.altitude);
      $("#altitudeAccuracy").text(data.altitudeAccuracy);
      $("#heading").text(data.heading);
      $("#speed").text(data.speed);
      $("#gpsTimestamp").text(data.timestamp);
    }
  }

}
