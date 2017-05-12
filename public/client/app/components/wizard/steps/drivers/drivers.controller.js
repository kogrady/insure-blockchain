class DriversController {

  constructor(Quote, $state, $scope, $stateParams) {

    console.log('drivers controller');

    this.QuoteService = Quote;
    this.$state = $state;
    this.$scope = $scope;

    this.quote = this.QuoteService.getCurrentQuote();

    if(!this.quote) {
      this.$state.go('home');
    }
    else {
      this.drivers = this.quote.drivers;
      if($stateParams.driverToEdit) {
        this.activeTab = $stateParams.driverToEdit;
      }
      else {
        this.activeTab = 0;
      }
    }
  }

  getDriverName(driver) {
    return driver.displayName || 'New Driver';
  }

  addDriver() {
    this.quote.addDriver();
    this.activeTab = this.drivers.length - 1;
  }

  canRemoveDriver(driver) {
    return !('id' in driver);
  }

  removeDriver(driver) {
    this.quote.removeDriver(driver);
    this.activeTab = this.drivers.length - 1;
  }

}

DriversController.$inject = ['Quote', '$state', '$scope', '$stateParams'];

export default DriversController;
