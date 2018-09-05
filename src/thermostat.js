function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
   return this.temperature ++;
};

Thermostat.prototype.down = function() {
   return this.temperature --;
};
