/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange();
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

  describe('OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange', function() {
    it('should create an instance of OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange', function() {
      // uncomment below and update the code to test OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange();
      //expect(instance).to.be.a(XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange);
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange();
      //expect(instance).to.be();
    });

  });

}));
