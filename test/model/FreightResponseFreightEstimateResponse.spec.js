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
    instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
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

  describe('FreightResponseFreightEstimateResponse', function() {
    it('should create an instance of FreightResponseFreightEstimateResponse', function() {
      // uncomment below and update the code to test FreightResponseFreightEstimateResponse
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be.a(XiSdkResellers.FreightResponseFreightEstimateResponse);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalFreightAmount (base name: "totalFreightAmount")', function() {
      // uncomment below and update the code to test the property totalFreightAmount
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalTaxAmount (base name: "totalTaxAmount")', function() {
      // uncomment below and update the code to test the property totalTaxAmount
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalFees (base name: "totalFees")', function() {
      // uncomment below and update the code to test the property totalFees
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalNetAmount (base name: "totalNetAmount")', function() {
      // uncomment below and update the code to test the property totalNetAmount
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property grossAmount (base name: "grossAmount")', function() {
      // uncomment below and update the code to test the property grossAmount
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property distribution (base name: "distribution")', function() {
      // uncomment below and update the code to test the property distribution
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.FreightResponseFreightEstimateResponse();
      //expect(instance).to.be();
    });

  });

}));
