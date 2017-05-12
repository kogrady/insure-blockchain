import _ from 'underscore';

class QuoteModel {

  constructor(data) {
    if(data) {
      _.extend(this, data);

      /**
       * Link contacts
       */
      this.insured = _.find(this.contacts, (contact) => {
        return this.insured.id === contact.id;
      });

      _.each(this.drivers, (driver) => {
        driver = _.find(this.contacts, (contact) => {
          return contact.id === driver.id;
        });
      });

    }
  }

}

export default QuoteModel
