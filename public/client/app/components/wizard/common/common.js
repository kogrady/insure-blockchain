import angular from 'angular';

import ActionButtons from './actionbuttons/actionbuttons';
import Navigation from './navigation/navigation';

let commonModule = angular.module('wizard.common', [
  ActionButtons,
  Navigation
])

  .name;

export default commonModule;
