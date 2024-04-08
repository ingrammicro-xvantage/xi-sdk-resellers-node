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
    instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
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

  describe('OrderCreateResponseOrdersInner', function() {
    it('should create an instance of OrderCreateResponseOrdersInner', function() {
      // uncomment below and update the code to test OrderCreateResponseOrdersInner
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateResponseOrdersInner);
    });

    it('should have the property numberOfLinesWithSuccess (base name: "numberOfLinesWithSuccess")', function() {
      // uncomment below and update the code to test the property numberOfLinesWithSuccess
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property numberOfLinesWithError (base name: "numberOfLinesWithError")', function() {
      // uncomment below and update the code to test the property numberOfLinesWithError
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property numberOfLinesWithWarning (base name: "numberOfLinesWithWarning")', function() {
      // uncomment below and update the code to test the property numberOfLinesWithWarning
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramOrderNumber (base name: "ingramOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramOrderNumber
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramOrderDate (base name: "ingramOrderDate")', function() {
      // uncomment below and update the code to test the property ingramOrderDate
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "orderType")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "orderTotal")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property freightCharges (base name: "freightCharges")', function() {
      // uncomment below and update the code to test the property freightCharges
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "totalTax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property miscellaneousCharges (base name: "miscellaneousCharges")', function() {
      // uncomment below and update the code to test the property miscellaneousCharges
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property rejectedLineItems (base name: "rejectedLineItems")', function() {
      // uncomment below and update the code to test the property rejectedLineItems
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new XiSdkResellers.OrderCreateResponseOrdersInner();
      //expect(instance).to.be();
    });

  });

}));
