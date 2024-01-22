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
    instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
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

  describe('QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser', function() {
    it('should create an instance of QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser', function() {
      // uncomment below and update the code to test QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser);
    });

    it('should have the property endUserName (base name: "endUserName")', function() {
      // uncomment below and update the code to test the property endUserName
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserAddress (base name: "endUserAddress")', function() {
      // uncomment below and update the code to test the property endUserAddress
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserAddress2 (base name: "endUserAddress2")', function() {
      // uncomment below and update the code to test the property endUserAddress2
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserAddress3 (base name: "endUserAddress3")', function() {
      // uncomment below and update the code to test the property endUserAddress3
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserCity (base name: "endUserCity")', function() {
      // uncomment below and update the code to test the property endUserCity
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserState (base name: "endUserState")', function() {
      // uncomment below and update the code to test the property endUserState
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserEmail (base name: "endUserEmail")', function() {
      // uncomment below and update the code to test the property endUserEmail
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserPhone (base name: "endUserPhone")', function() {
      // uncomment below and update the code to test the property endUserPhone
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserZipCode (base name: "endUserZipCode")', function() {
      // uncomment below and update the code to test the property endUserZipCode
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserContactName (base name: "endUserContactName")', function() {
      // uncomment below and update the code to test the property endUserContactName
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

    it('should have the property endUserMarketSegment (base name: "endUserMarketSegment")', function() {
      // uncomment below and update the code to test the property endUserMarketSegment
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
      //expect(instance).to.be();
    });

  });

}));
