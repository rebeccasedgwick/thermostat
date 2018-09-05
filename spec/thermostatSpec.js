'use strict';

describe('Feature tests', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toBe(20);
  });

  it('can increase the temperature using "increase"', function() {
    thermostat.up();
    expect(thermostat.currentTemp()).toBe(21);
  });

  it('can decrease the temperature using "decrease"', function() {
    thermostat.down();
    expect(thermostat.currentTemp()).toBe(19);
  });

  it('has min temperature of 10 degrees', function() {
    for (var n = 0; n < 11; n++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toBe(10);
  });

  describe('it has a power saving mode', function() {
    it('power saving mode (PSM) is on by default', function() {
      expect(thermostat.isPSMOn()).toBe(true);
    });

    it('can switch power saving mode (PSM) off', function() {
      thermostat.switchOffPSM();
      expect(thermostat.isPSMOn()).toEqual(false);
    });

    it('can switch power saving mode (PSM) on', function() {
      thermostat.switchOnPSM();
      expect(thermostat.isPSMOn()).toEqual(true);
    });
  });


  describe('when power saving mode (PSM) is on', function() {
    it('has a max temp of 25', function() {
      for (var n = 0; n < 6; n++ ) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode (PSM) is off', function() {
    it('has a max temp of 32', function() {
      thermostat.switchOffPSM();
      for (var n = 0; n < 13; n++ ) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });

  it('it can be reset to 20', function() {
    for (var n = 0; n < 6; n++ ) {
      thermostat.up();
    }
    thermostat.resetTemp()
    expect(thermostat.currentTemp()).toEqual(20);
  });
});
