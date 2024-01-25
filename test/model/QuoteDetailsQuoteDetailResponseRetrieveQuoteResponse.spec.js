/**
 * Reseller API
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ResellerApi);
  }
}(this, function(expect, ResellerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse', function() {
    it('should create an instance of QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse', function() {
      // uncomment below and update the code to test QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be.a(ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse);
    });

    it('should have the property quoteGuid (base name: "quoteGuid")', function() {
      // uncomment below and update the code to test the property quoteGuid
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteName (base name: "quoteName")', function() {
      // uncomment below and update the code to test the property quoteName
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteExpiryDate (base name: "quoteExpiryDate")', function() {
      // uncomment below and update the code to test the property quoteExpiryDate
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property revisionNumber (base name: "revisionNumber")', function() {
      // uncomment below and update the code to test the property revisionNumber
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property introPreamble (base name: "introPreamble")', function() {
      // uncomment below and update the code to test the property introPreamble
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property purchaseInstructions (base name: "purchaseInstructions")', function() {
      // uncomment below and update the code to test the property purchaseInstructions
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property legalTerms (base name: "legalTerms")', function() {
      // uncomment below and update the code to test the property legalTerms
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property priceDeviationId (base name: "priceDeviationId")', function() {
      // uncomment below and update the code to test the property priceDeviationId
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property priceDeviationStartDate (base name: "priceDeviationStartDate")', function() {
      // uncomment below and update the code to test the property priceDeviationStartDate
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property priceDeviationExpiryDate (base name: "priceDeviationExpiryDate")', function() {
      // uncomment below and update the code to test the property priceDeviationExpiryDate
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerNeed (base name: "customerNeed")', function() {
      // uncomment below and update the code to test the property customerNeed
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property solutionProposed (base name: "solutionProposed")', function() {
      // uncomment below and update the code to test the property solutionProposed
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property leasingCalculations (base name: "leasingCalculations")', function() {
      // uncomment below and update the code to test the property leasingCalculations
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property leasingInstructions (base name: "leasingInstructions")', function() {
      // uncomment below and update the code to test the property leasingInstructions
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountInfo (base name: "accountInfo")', function() {
      // uncomment below and update the code to test the property accountInfo
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property contactInfo (base name: "contactInfo")', function() {
      // uncomment below and update the code to test the property contactInfo
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorAttributes (base name: "vendorAttributes")', function() {
      // uncomment below and update the code to test the property vendorAttributes
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property endUser (base name: "endUser")', function() {
      // uncomment below and update the code to test the property endUser
      //var instance = new ResellerApi.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponse();
      //expect(instance).to.be();
    });

  });

}));
