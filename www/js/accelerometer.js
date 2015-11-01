var accelerometer = {

  get: function(callback) {
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

  display: function(data) {
    if (data != null) {
      $("#x").text(data.x);
      $("#y").text(data.y);
      $("#z").text(data.z);
      $("#accelerationTimestamp").text(data.timestamp);
    }
  }

}
