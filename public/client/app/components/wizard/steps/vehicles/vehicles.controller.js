import _ from 'underscore';

class VehiclesController {

  constructor(Quote, $state) {

    console.log('vehicles controller');

    this.QuoteService = Quote;
    this.$state = $state;

    this.quote = this.QuoteService.getCurrentQuote();

    if(!this.quote) {
      this.$state.go('home');
    }
    else {
      this.vehicles = this.quote.vehicles;
      if(!this.vehicles.length) {
        this.quote.addVehicle();
      }
      this.activeTab = 0;
    }

  }

  getVehicleDisplayName(vehicle) {
    return vehicle.make && vehicle.model ? vehicle.make + ' ' + vehicle.model : 'New Vehicle';
  }

  addVehicle() {
    this.quote.addVehicle();
    this.activeTab = this.vehicles.length - 1;
  }

  removeVehicle(vehicle) {
    this.quote.removeVehicle(vehicle);
    this.activeTab = this.vehicles.length - 1;
  }

  getDrivers(vehicle) {
    return _.filter(this.quote.drivers, (driver) => {
      return vehicle.drivers.indexOf(driver) < 0;
    });
  }

  addDriver(vehicle, driver) {
    vehicle.drivers.push(driver);

    _.each(vehicle.drivers, (vehDriver) => {
      vehDriver.percent = 100 / vehicle.drivers.length;
    });
  }

  addNewDriver(vehicle) {
    var newDriver = this.quote.addDriver();
    vehicle.drivers.push(newDriver);

    _.each(vehicle.drivers, (vehDriver) => {
      vehDriver.percent = 100 / vehicle.drivers.length;
    });

    /**
     * Navigate to drivers page to fill in driver details.
     */
    this.$state.go('drivers', {driverToEdit : this.quote.drivers.length - 1});
  }

  removeDriver(vehicle, driver) {
    this.quote.removeDriverFromVehicle(vehicle, driver);
  }

}

VehiclesController.$inject = ['Quote', '$state'];

export default VehiclesController;
