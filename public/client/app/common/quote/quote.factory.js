import QuoteModel from './quote.model';

class QuoteFactory {

  constructor($http) {
    this.$http = $http;
    this.quote = null;
  }

  createQuote(quoteData) {

    return this.$http.post('/api/createQuote', quoteData).then((result) => {
      console.log('created quote', result);
      this.quote = new QuoteModel(result.data);

      return this.quote;
    }, (error) => {
      console.error('Could not create quote', error);
    });

  }

  getQuote(id) {
    return this.$http.get(`/api/quote/${id}`).then((result) => {
      this.quote = new QuoteModel(result.data);
      return this.quote;
    }, (error) => {
      console.error(`Could not retrieve quote ${id}`, error);
    })
  }

  updateQuote(id, quoteData) {
    return this.$http.put(`/api/quote/${id}`, quoteData).then((result) => {
      this.quote = new QuoteModel(result.data);

      return this.quote;
    }, (error) => {
      console.error(error);
    })
  }

  getCurrentQuote() {
    return this.quote;
  }

}

QuoteFactory.$inject = ['$http'];

export default QuoteFactory
