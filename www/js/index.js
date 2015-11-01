var app = {

  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    var deviceInfo = sensor.deviceInfo();
    if (deviceInfo != null) {
      $("#available").text(deviceInfo.available);
      $("#platform").text(deviceInfo.platform);
      $("#version").text(deviceInfo.version);
      $("#uuid").text(deviceInfo.uuid);
      $("#cordovaVersion").text(deviceInfo.cordova);
      $("#model").text(deviceInfo.model);
      $("#manufacturer").text(deviceInfo.manufacturer);
    }
  },

};

app.initialize();
