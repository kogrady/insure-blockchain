class VehiclesController {

  constructor(Quote, $state) {

    console.log('vehicles controller');

    this.QuoteService = Quote;
    this.$state = $state;

    this.quote = this.QuoteService.getCurrentQuote();

    if(!this.quote) {
      this.$state.go('home');
    }
  }
}

VehiclesController.$inject = ['Quote', '$state'];

export default VehiclesController;
