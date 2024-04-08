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
    instance = new XiSdkResellers.ValidateQuoteResponse();
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

  describe('ValidateQuoteResponse', function() {
    it('should create an instance of ValidateQuoteResponse', function() {
      // uncomment below and update the code to test ValidateQuoteResponse
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be.a(XiSdkResellers.ValidateQuoteResponse);
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendorName")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vmfAdditionalAttributes (base name: "vmfAdditionalAttributes")', function() {
      // uncomment below and update the code to test the property vmfAdditionalAttributes
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteType (base name: "quoteType")', function() {
      // uncomment below and update the code to test the property quoteType
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorGroupName (base name: "vendorGroupName")', function() {
      // uncomment below and update the code to test the property vendorGroupName
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorQuoteNumber (base name: "vendorQuoteNumber")', function() {
      // uncomment below and update the code to test the property vendorQuoteNumber
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorMasterNumber (base name: "vendorMasterNumber")', function() {
      // uncomment below and update the code to test the property vendorMasterNumber
      //var instance = new XiSdkResellers.ValidateQuoteResponse();
      //expect(instance).to.be();
    });

  });

}));
