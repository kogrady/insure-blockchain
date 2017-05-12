import angular from 'angular';
import QuoteFactory from './quote.factory';

let quoteModule = angular.module('quote', [])

  .factory('Quote', ['$http', ($http) => new QuoteFactory($http)])

  .name;

export default quoteModule;
