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
    instance = new XiSdkResellers.OrderCreateV7ResponseResource();
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

  describe('OrderCreateV7ResponseResource', function() {
    it('should create an instance of OrderCreateV7ResponseResource', function() {
      // uncomment below and update the code to test OrderCreateV7ResponseResource
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateV7ResponseResource);
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property orderSplit (base name: "orderSplit")', function() {
      // uncomment below and update the code to test the property orderSplit
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property processedPartially (base name: "processedPartially")', function() {
      // uncomment below and update the code to test the property processedPartially
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property purchaseOrderTotal (base name: "purchaseOrderTotal")', function() {
      // uncomment below and update the code to test the property purchaseOrderTotal
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResource();
      //expect(instance).to.be();
    });

  });

}));
