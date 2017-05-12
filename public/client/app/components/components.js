import angular from 'angular';
import Home from './home/home';
import Retrieve from './retrieve/retrieve';
import Wizard from './wizard/wizard';

let componentModule = angular.module('app.components', [
  Home,
  Retrieve,
  Wizard
])

.name;

export default componentModule;
