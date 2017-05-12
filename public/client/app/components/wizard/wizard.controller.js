class WizardController {

  constructor(Quote, $state) {

    this.QuoteService = Quote;
    this.$state = $state;

    this.quote = this.QuoteService.getCurrentQuote();

    if(!this.quote) {
      this.$state.go('home');
    }
    else {
      console.log('going to drivers step');
      this.$state.go('drivers');
    }

    console.log('wizard init', this.quote);
  }
}

WizardController.$inject = ['Quote', '$state'];

export default WizardController;
