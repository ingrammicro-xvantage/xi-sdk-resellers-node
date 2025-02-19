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
    instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
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

  describe('OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner', function() {
    it('should create an instance of OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner', function() {
      // uncomment below and update the code to test OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner
      //var instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner);
    });

    it('should have the property dateofPurchase (base name: "dateofPurchase")', function() {
      // uncomment below and update the code to test the property dateofPurchase
      //var instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property primarySerialNumber (base name: "primarySerialNumber")', function() {
      // uncomment below and update the code to test the property primarySerialNumber
      //var instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property secondarySerialNumber (base name: "secondarySerialNumber")', function() {
      // uncomment below and update the code to test the property secondarySerialNumber
      //var instance = new XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner();
      //expect(instance).to.be();
    });

  });

}));
