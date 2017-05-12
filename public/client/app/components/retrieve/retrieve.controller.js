class RetrieveController {

  constructor(Quote, $state) {

    this.QuoteService = Quote;
    this.$state = $state;

    this.quoteID = '';
  }

  getQuote() {
    console.log('retrieving quote', this.quoteID);

    this.QuoteService.getQuote(this.quoteID).then((result) => {
      console.log('retrieve ctr got quote', result);
      this.$state.go('wizard');
    }, (error) => {
      console.error(error);
    })
  }

}

RetrieveController.$inject = ['Quote', '$state'];

export default RetrieveController;
