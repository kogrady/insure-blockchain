import _ from 'underscore';

import ContactModel from './contact.model';

class QuoteModel {

  constructor(data) {
    if(data) {
      _.extend(this, data);

      this.contacts = _.map(this.contacts, (contact) => {
        return new ContactModel(contact);
      });

      /**
       * Link contacts
       */
      this.insured = _.find(this.contacts, (contact) => {
        return this.insured.id === contact.id;
      });

      this.drivers = _.map(this.drivers, (driver) => {
        return _.find(this.contacts, (contact) => {
          return contact.id === driver.id;
        });
      })

    }
  }

  removeContact(contact) {
    var index = this.contacts.indexOf(contact);
    if(index > -1) {
      this.contacts.splice(index, 1);
    }
  }

  addDriver() {
    var newDriver = {
      first : '',
      last : ''
    };
    var newDriverModel = new ContactModel(newDriver);

    this.contacts.push(newDriverModel);
    this.drivers.push(newDriverModel);

    return newDriverModel;
  }

  removeDriver(driver) {
    var index = this.drivers.indexOf(driver);
    if(index > -1) {
      this.drivers.splice(index, 1);
    }

    this.removeDriverFromVehicles(driver);
    this.removeContact(driver);

  }

  removeDriverFromVehicles(driver) {
    _.each(this.vehicles, (vehicle) => {
      this.removeDriverFromVehicle(vehicle, driver);
    });
  }

  removeDriverFromVehicle(vehicle, driver) {
    var index = vehicle.drivers.indexOf(driver);
    if(index > -1) {
      vehicle.drivers.splice(index, 1);

      _.each(vehicle.drivers, (vehDriver) => {
        vehDriver.percent = 100 / vehicle.drivers.length;
      });

    }
  }

  addVehicle() {
    this.vehicles.push({
      make : '',
      model : '',
      year : '',
      drivers : []
    });
  }

  removeVehicle(vehicle) {
    var index = this.vehicles.indexOf(vehicle);
    if(index > -1) {
      this.vehicles.splice(index, 1);
    }
  }

}

export default QuoteModel
