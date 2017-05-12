import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Quote from './quote/quote';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  Quote
])

.name;

export default commonModule;
