$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.temperature)

  $("#up").click(function() {
    thermostat.up()
    $("#temperature").text(thermostat.temperature)
  });

  $("#down").click(function() {
    thermostat.down()
    $("#temperature").text(thermostat.temperature)
  });

  $("#reset").click(function() {
    thermostat.resetTemp()
    $("#temperature").text(thermostat.temperature)
  });

  $("#toggle").click(function() {
    if (thermostat.isPSMOn()) {
      thermostat.switchOffPSM()
    } else {
      thermostat.switchOnPSM()
      thermostat.temperature = thermostat.MAX_TEMP_PSM_ON
    }
    $("#temperature").text(thermostat.temperature)

  });
});