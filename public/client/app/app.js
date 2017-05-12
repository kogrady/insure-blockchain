import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

/**
 * Author: Stephan McLean
 * Date: 10th May 2017
 *
 * Add angular-ui-bootstrap
 */
import 'bootstrap/dist/css/bootstrap.css';
import uiBootstrap from 'angular-ui-bootstrap';

/**
 * Author: Stephan McLean
 * Date: 12th May 2017
 *
 * Add Font Awesome
 */
import 'font-awesome/css/font-awesome.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    uiBootstrap
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
