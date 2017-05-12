/**
 * Author: Stephan McLean
 * Date: 10th May 2017
 *
 * API endpoints for front end. Integrations to OpenChain server
 * should go here.
 */
var express = require('express');
var _ = require('underscore');

module.exports = (function() {
  var router = express.Router();

  var quotes = [];
  var contactID = 0;

  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  /**
   * Create a quote, store it, and return it.
   */
  router.post('/createQuote', function(req, res) {

    req.body.id = contactID;
    contactID++;

    var quote = {
      insured : req.body,
      contacts : [req.body],
      vehicles : [],
      drivers: [req.body],
      quoteID : pad(quotes.length + 1, 6)
    };

    quotes.push(quote);

    res.json(quote);
  });

  /**
   * Retrieve quote by id
   *
   * TODO: Error handling if quote not found
   */
  router.get('/quote/:id', function(req, res) {
    var id = req.params.id;
    res.json(_.find(quotes, function(quote) {
      return quote.quoteID === id;
    }));
  });

  /**
   * Update a quote by id
   *
   * TODO: Error handling if quote not found
   */
  router.put('/quote/:id', function(req, res) {
    var id = req.params.id;

    _.each(req.body.contacts, (contact) => {
      if(!contact.id) {
        contact.id = contactID;
        contactID++;
      }
    });

    var theQuote = _.find(quotes, function(quote) {
      return quote.quoteID === id;
    });

    quotes[quotes.indexOf(theQuote)] = req.body;

    /**
     * Return even though unchanged, may change in future.
     */
    res.json(req.body);

  });

  return router;
})();
