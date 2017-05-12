import _ from 'underscore';
class ContactModel {

  constructor(data) {
    if(data) {
      _.extend(this, data);
    }
  }

  get displayName() {
    return this.first && this.last ? this.first + ' ' + this.last : '';
  }

}

export default ContactModel
