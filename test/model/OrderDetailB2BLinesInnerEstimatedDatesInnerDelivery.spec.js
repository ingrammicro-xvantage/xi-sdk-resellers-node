/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
    instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
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

  describe('OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery', function() {
    it('should create an instance of OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery', function() {
      // uncomment below and update the code to test OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be.a(XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery);
    });

    it('should have the property deliveryDateType (base name: "deliveryDateType")', function() {
      // uncomment below and update the code to test the property deliveryDateType
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be();
    });

    it('should have the property deliveryDateRange (base name: "deliveryDateRange")', function() {
      // uncomment below and update the code to test the property deliveryDateRange
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be();
    });

    it('should have the property deliverySource (base name: "deliverySource")', function() {
      // uncomment below and update the code to test the property deliverySource
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be();
    });

    it('should have the property deliveryDescription (base name: "deliveryDescription")', function() {
      // uncomment below and update the code to test the property deliveryDescription
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be();
    });

    it('should have the property deliveredDate (base name: "deliveredDate")', function() {
      // uncomment below and update the code to test the property deliveredDate
      //var instance = new XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery();
      //expect(instance).to.be();
    });

  });

}));
