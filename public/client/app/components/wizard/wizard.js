import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wizardComponent from './wizard.component';
import Steps from './steps/steps';
import Common from './common/common';

let wizardModule = angular.module('wizard', [
  uiRouter,
  Steps,
  Common
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('wizard', {
      url: '/wizard',
      component: 'wizard'
    });
})

.component('wizard', wizardComponent)

.name;

export default wizardModule;
