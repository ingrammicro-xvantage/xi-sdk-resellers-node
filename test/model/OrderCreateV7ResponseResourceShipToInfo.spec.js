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
    instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
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

  describe('OrderCreateV7ResponseResourceShipToInfo', function() {
    it('should create an instance of OrderCreateV7ResponseResourceShipToInfo', function() {
      // uncomment below and update the code to test OrderCreateV7ResponseResourceShipToInfo
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo);
    });

    it('should have the property addressId (base name: "addressId")', function() {
      // uncomment below and update the code to test the property addressId
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new XiSdkResellers.OrderCreateV7ResponseResourceShipToInfo();
      //expect(instance).to.be();
    });

  });

}));
