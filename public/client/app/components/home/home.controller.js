class HomeController {

  constructor(Quote) {

    this.QuoteService = Quote;

    this.user = {
      first : '',
      last: '',
      username: ''
    };
  }

  startQuote() {
    console.log('starting quote with user', this.user);

    this.QuoteService.createQuote(this.user).then((result) => {
      console.log('home ctr got quote', result);
    }, (error) => {
      console.error(error);
    })
  }

  /**
   * First or last name changed, set user name to first
   * char or first name + last name e.g
   * John Doe -> jdoe
   */
  userChanged() {
    if(this.user.first && this.user.first.length) {
      this.user.username = (this.user.first.charAt(0) + this.user.last).toLowerCase();
    }
  }

}

HomeController.$inject = ['Quote'];

export default HomeController;
