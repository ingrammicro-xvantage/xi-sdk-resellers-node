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
    instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
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

  describe('OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner', function() {
    it('should create an instance of OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner', function() {
      // uncomment below and update the code to test OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner);
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // uncomment below and update the code to test the property carrierCode
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "carrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromWarehouseId (base name: "shipFromWarehouseId")', function() {
      // uncomment below and update the code to test the property shipFromWarehouseId
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromLocation (base name: "shipFromLocation")', function() {
      // uncomment below and update the code to test the property shipFromLocation
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property freightAccountNumber (base name: "freightAccountNumber")', function() {
      // uncomment below and update the code to test the property freightAccountNumber
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property signatureRequired (base name: "signatureRequired")', function() {
      // uncomment below and update the code to test the property signatureRequired
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shippingInstructions (base name: "shippingInstructions")', function() {
      // uncomment below and update the code to test the property shippingInstructions
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

  });

}));
