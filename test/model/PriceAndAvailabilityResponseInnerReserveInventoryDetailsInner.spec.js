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
    instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
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

  describe('PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner', function() {
    it('should create an instance of PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner', function() {
      // uncomment below and update the code to test PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
      //expect(instance).to.be.a(XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner);
    });

    it('should have the property quantityReserved (base name: "quantityReserved")', function() {
      // uncomment below and update the code to test the property quantityReserved
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property quantityAvailable (base name: "quantityAvailable")', function() {
      // uncomment below and update the code to test the property quantityAvailable
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property effectivedate (base name: "effectivedate")', function() {
      // uncomment below and update the code to test the property effectivedate
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property expirydate (base name: "expirydate")', function() {
      // uncomment below and update the code to test the property expirydate
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner();
      //expect(instance).to.be();
    });

  });

}));
