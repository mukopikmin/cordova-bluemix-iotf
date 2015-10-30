var orgKey = 'org';
var typeKey = 'deviceType';
var idKey = 'deviceId';
var tokenKey = 'token';

var config = {

  save: function() {
    localStorage.setItem(orgKey, $("#org").val());
    localStorage.setItem(typeKey, $("#deviceType").val());
    localStorage.setItem(tokenKey, $("#token").val());
    alert("Setting has saved.")
  },

  load: function() {
    return {
      org: localStorage.getItem(orgKey),
      deviceType: localStorage.getItem(typeKey),
      token: localStorage.getItem(tokenKey)
    };
  },

  display: function() {
    var obj = config.load();
    $("#org").val(obj.org);
    $("#deviceType").val(obj.deviceType);
    $("#token").val(obj.token);
  }

}
