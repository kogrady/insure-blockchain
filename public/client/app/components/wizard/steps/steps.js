import angular from 'angular';
import uiRouter from 'angular-ui-router';

import vehiclesComponent from './vehicles/vehicles.component';
import driversComponent from './drivers/drivers.component';

let stepsModule = angular.module('wizard.steps', [
    uiRouter
  ])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('drivers', {
        url: '/drivers',
        parent: 'wizard',
        component: 'drivers',
        next: 'vehicles',
        label: 'Drivers',
        index: 0,
        params: {
          driverToEdit : null
        }
      })
      .state('vehicles', {
        url: '/vehicles',
        parent: 'wizard',
        component: 'vehicles',
        label: 'Vehicles',
        index: 1
      });
  })

  .component('vehicles', vehiclesComponent)
  .component('drivers', driversComponent)

  .name;

export default stepsModule;
