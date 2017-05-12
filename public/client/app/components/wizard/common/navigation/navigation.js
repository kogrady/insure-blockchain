import angular from 'angular';
import navigationComponent from './navigation.component';

let navigationModule = angular.module('wizard.common.navigation', [])

  .component('wizardTrail', navigationComponent)

  .name;

export default navigationModule;
