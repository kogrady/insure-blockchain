import angular from 'angular';
import uiRouter from 'angular-ui-router';
import retrieveComponent from './retrieve.component';

let retrieveModule = angular.module('retrieve', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('retrieve', {
      url: '/retrieve',
      component: 'retrieve'
    });
})

.component('retrieve', retrieveComponent)

.name;

export default retrieveModule;
