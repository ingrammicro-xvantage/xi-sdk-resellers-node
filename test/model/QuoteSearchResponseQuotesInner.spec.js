/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
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

  describe('QuoteSearchResponseQuotesInner', function() {
    it('should create an instance of QuoteSearchResponseQuotesInner', function() {
      // uncomment below and update the code to test QuoteSearchResponseQuotesInner
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be.a(XiSdkResellers.QuoteSearchResponseQuotesInner);
    });

    it('should have the property quoteGuid (base name: "quoteGuid")', function() {
      // uncomment below and update the code to test the property quoteGuid
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteName (base name: "quoteName")', function() {
      // uncomment below and update the code to test the property quoteName
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserContact (base name: "endUserContact")', function() {
      // uncomment below and update the code to test the property endUserContact
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumber (base name: "specialBidNumber")', function() {
      // uncomment below and update the code to test the property specialBidNumber
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteTotal (base name: "quoteTotal")', function() {
      // uncomment below and update the code to test the property quoteTotal
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteStatus (base name: "quoteStatus")', function() {
      // uncomment below and update the code to test the property quoteStatus
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramQuoteDate (base name: "ingramQuoteDate")', function() {
      // uncomment below and update the code to test the property ingramQuoteDate
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramQuoteExpiryDate (base name: "ingramQuoteExpiryDate")', function() {
      // uncomment below and update the code to test the property ingramQuoteExpiryDate
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserName (base name: "endUserName")', function() {
      // uncomment below and update the code to test the property endUserName
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteType (base name: "quoteType")', function() {
      // uncomment below and update the code to test the property quoteType
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.QuoteSearchResponseQuotesInner();
      //expect(instance).to.be();
    });

  });

}));
