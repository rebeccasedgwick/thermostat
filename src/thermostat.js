function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
   return this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
   return this.temperature --;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isPSMOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchOffPSM = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchOnPSM = function() {
  this.powerSavingMode =true;
};
