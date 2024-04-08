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
    instance = new XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate();
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

  describe('RenewalsSearchRequestDateTypeExpirationDate', function() {
    it('should create an instance of RenewalsSearchRequestDateTypeExpirationDate', function() {
      // uncomment below and update the code to test RenewalsSearchRequestDateTypeExpirationDate
      //var instance = new XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate();
      //expect(instance).to.be.a(XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate);
    });

    it('should have the property customStartDate (base name: "customStartDate")', function() {
      // uncomment below and update the code to test the property customStartDate
      //var instance = new XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate();
      //expect(instance).to.be();
    });

    it('should have the property customEndDate (base name: "customEndDate")', function() {
      // uncomment below and update the code to test the property customEndDate
      //var instance = new XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate();
      //expect(instance).to.be();
    });

  });

}));
