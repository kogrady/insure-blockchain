class DriversController {

  constructor(Quote, $state) {

    console.log('drivers controller');

    this.QuoteService = Quote;
    this.$state = $state;

    this.quote = this.QuoteService.getCurrentQuote();

    if(!this.quote) {
      this.$state.go('home');
    }
  }
}

DriversController.$inject = ['Quote', '$state'];

export default DriversController;
