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
    instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
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

  describe('OrderCreateRequestEndUserInfo', function() {
    it('should create an instance of OrderCreateRequestEndUserInfo', function() {
      // uncomment below and update the code to test OrderCreateRequestEndUserInfo
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateRequestEndUserInfo);
    });

    it('should have the property endUserId (base name: "endUserId")', function() {
      // uncomment below and update the code to test the property endUserId
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property name1 (base name: "name1")', function() {
      // uncomment below and update the code to test the property name1
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property name2 (base name: "name2")', function() {
      // uncomment below and update the code to test the property name2
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // uncomment below and update the code to test the property addressLine3
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine4 (base name: "addressLine4")', function() {
      // uncomment below and update the code to test the property addressLine4
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new XiSdkResellers.OrderCreateRequestEndUserInfo();
      //expect(instance).to.be();
    });

  });

}));
