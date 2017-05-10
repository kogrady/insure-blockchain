/**
 * Author: Stephan McLean
 * Date: 10th May 2017
 *
 * API endpoints for front end. Integrations to OpenChain server
 * should go here.
 */
var express = require('express');
module.exports = (function() {
  var router = express.Router();

  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  return router;
})();
