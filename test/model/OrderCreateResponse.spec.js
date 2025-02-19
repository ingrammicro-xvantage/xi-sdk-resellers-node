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
    instance = new XiSdkResellers.OrderCreateResponse();
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

  describe('OrderCreateResponse', function() {
    it('should create an instance of OrderCreateResponse', function() {
      // uncomment below and update the code to test OrderCreateResponse
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateResponse);
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumber (base name: "specialBidNumber")', function() {
      // uncomment below and update the code to test the property specialBidNumber
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property orderSplit (base name: "orderSplit")', function() {
      // uncomment below and update the code to test the property orderSplit
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property processedPartially (base name: "processedPartially")', function() {
      // uncomment below and update the code to test the property processedPartially
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderTotal (base name: "purchaseOrderTotal")', function() {
      // uncomment below and update the code to test the property purchaseOrderTotal
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property endUserInfo (base name: "endUserInfo")', function() {
      // uncomment below and update the code to test the property endUserInfo
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new XiSdkResellers.OrderCreateResponse();
      //expect(instance).to.be();
    });

  });

}));
