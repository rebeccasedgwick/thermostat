function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MID_TEMP_LIMIT = 18;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  }
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature --;
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
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPSMOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MID_TEMP_LIMIT) {
    return 'low-usage'
  }
  if (this.temperature <= this.MAX_TEMP_PSM_ON && this.temperature > this.MID_TEMP_LIMIT) {
    return 'medium-usage'
  }
  return 'high-usage'
};
