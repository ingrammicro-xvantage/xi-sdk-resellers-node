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
    instance = new XiSdkResellers.OrderModifyResponse();
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

  describe('OrderModifyResponse', function() {
    it('should create an instance of OrderModifyResponse', function() {
      // uncomment below and update the code to test OrderModifyResponse
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be.a(XiSdkResellers.OrderModifyResponse);
    });

    it('should have the property ingramOrderNumber (base name: "ingramOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramOrderNumber
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property changeDescription (base name: "changeDescription")', function() {
      // uncomment below and update the code to test the property changeDescription
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property orderModifiedDate (base name: "orderModifiedDate")', function() {
      // uncomment below and update the code to test the property orderModifiedDate
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "orderTotal")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property orderSubTotal (base name: "orderSubTotal")', function() {
      // uncomment below and update the code to test the property orderSubTotal
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property freightCharges (base name: "freightCharges")', function() {
      // uncomment below and update the code to test the property freightCharges
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "totalTax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "orderStatus")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property rejectedLineItems (base name: "rejectedLineItems")', function() {
      // uncomment below and update the code to test the property rejectedLineItems
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new XiSdkResellers.OrderModifyResponse();
      //expect(instance).to.be();
    });

  });

}));
