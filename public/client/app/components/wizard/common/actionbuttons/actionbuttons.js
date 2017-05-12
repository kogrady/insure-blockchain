import angular from 'angular';
import actionButtonsComponent from './actionbuttons.component';

let actionButtonsModule = angular.module('wizard.common.actionbuttons', [])

  .component('actionButtons', actionButtonsComponent)

  .name;

export default actionButtonsModule;
