'use strict';

describe('Feature tests', function() {

  it('thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature()).toBe(20);
  });
});





  // beforeEach(function() {
  //   airport = new Airport();
  //   plane = new Plane();
  // });
  //
  // it('planes can land at an airport', function() {
  //     plane.land();
  //     // expect the airport to include the plane: not sure if need to pass in the airport to the plane?
  //     expect(airport.hangar()).toContain(plane);
  //   });
