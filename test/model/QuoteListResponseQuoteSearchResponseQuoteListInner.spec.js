/**
 * XI SDK Resellers
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
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
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

  describe('QuoteListResponseQuoteSearchResponseQuoteListInner', function() {
    it('should create an instance of QuoteListResponseQuoteSearchResponseQuoteListInner', function() {
      // uncomment below and update the code to test QuoteListResponseQuoteSearchResponseQuoteListInner
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be.a(XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner);
    });

    it('should have the property quoteName (base name: "quoteName")', function() {
      // uncomment below and update the code to test the property quoteName
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property revisionNumber (base name: "revisionNumber")', function() {
      // uncomment below and update the code to test the property revisionNumber
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserName (base name: "endUserName")', function() {
      // uncomment below and update the code to test the property endUserName
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property bidNumber (base name: "bidNumber")', function() {
      // uncomment below and update the code to test the property bidNumber
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteStatus (base name: "quoteStatus")', function() {
      // uncomment below and update the code to test the property quoteStatus
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

    it('should have the property quoteExpiryDate (base name: "quoteExpiryDate")', function() {
      // uncomment below and update the code to test the property quoteExpiryDate
      //var instance = new XiSdkResellers.QuoteListResponseQuoteSearchResponseQuoteListInner();
      //expect(instance).to.be();
    });

  });

}));
