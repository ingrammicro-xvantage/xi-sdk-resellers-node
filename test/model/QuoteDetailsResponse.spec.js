/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.QuoteDetailsResponse();
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

  describe('QuoteDetailsResponse', function() {
    it('should create an instance of QuoteDetailsResponse', function() {
      // uncomment below and update the code to test QuoteDetailsResponse
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsResponse);
    });

    it('should have the property quoteName (base name: "quoteName")', function() {
      // uncomment below and update the code to test the property quoteName
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property ingramQuoteDate (base name: "ingramQuoteDate")', function() {
      // uncomment below and update the code to test the property ingramQuoteDate
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property ingramQuoteExpiryDate (base name: "ingramQuoteExpiryDate")', function() {
      // uncomment below and update the code to test the property ingramQuoteExpiryDate
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property specialBidId (base name: "specialBidId")', function() {
      // uncomment below and update the code to test the property specialBidId
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property specialBidEffectiveDate (base name: "specialBidEffectiveDate")', function() {
      // uncomment below and update the code to test the property specialBidEffectiveDate
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property specialBidExpirationDate (base name: "specialBidExpirationDate")', function() {
      // uncomment below and update the code to test the property specialBidExpirationDate
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property closingReason (base name: "closingReason")', function() {
      // uncomment below and update the code to test the property closingReason
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property dateClosed (base name: "dateClosed")', function() {
      // uncomment below and update the code to test the property dateClosed
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerNeed (base name: "customerNeed")', function() {
      // uncomment below and update the code to test the property customerNeed
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property proposedSolution (base name: "proposedSolution")', function() {
      // uncomment below and update the code to test the property proposedSolution
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property introPreamble (base name: "introPreamble")', function() {
      // uncomment below and update the code to test the property introPreamble
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property purchaseInstructions (base name: "purchaseInstructions")', function() {
      // uncomment below and update the code to test the property purchaseInstructions
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property legalTerms (base name: "legalTerms")', function() {
      // uncomment below and update the code to test the property legalTerms
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteType (base name: "quoteType")', function() {
      // uncomment below and update the code to test the property quoteType
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property leaseInfo (base name: "leaseInfo")', function() {
      // uncomment below and update the code to test the property leaseInfo
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property leasingInstructions (base name: "leasingInstructions")', function() {
      // uncomment below and update the code to test the property leasingInstructions
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteSubType (base name: "quoteSubType")', function() {
      // uncomment below and update the code to test the property quoteSubType
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property resellerInfo (base name: "resellerInfo")', function() {
      // uncomment below and update the code to test the property resellerInfo
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property endUserInfo (base name: "endUserInfo")', function() {
      // uncomment below and update the code to test the property endUserInfo
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property productsCount (base name: "productsCount")', function() {
      // uncomment below and update the code to test the property productsCount
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property extendedMsrpTotal (base name: "extendedMsrpTotal")', function() {
      // uncomment below and update the code to test the property extendedMsrpTotal
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property quantityTotal (base name: "quantityTotal")', function() {
      // uncomment below and update the code to test the property quantityTotal
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property extendedQuotePriceTotal (base name: "extendedQuotePriceTotal")', function() {
      // uncomment below and update the code to test the property extendedQuotePriceTotal
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalQuoteAmount (base name: "totalQuoteAmount")', function() {
      // uncomment below and update the code to test the property totalQuoteAmount
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new XiSdkResellers.QuoteDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
