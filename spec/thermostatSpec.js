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
    thermostat.up()
    expect(thermostat.currentTemp()).toBe(21);
  });

  it('can decrease the temperature using "decrease"', function() {
    thermostat.down()
    expect(thermostat.currentTemp()).toBe(19);
  });
});
