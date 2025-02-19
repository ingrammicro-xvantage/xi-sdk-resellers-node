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
    instance = new XiSdkResellers.ReturnsCreateRequestListInner();
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

  describe('ReturnsCreateRequestListInner', function() {
    it('should create an instance of ReturnsCreateRequestListInner', function() {
      // uncomment below and update the code to test ReturnsCreateRequestListInner
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be.a(XiSdkResellers.ReturnsCreateRequestListInner);
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serialNumber")', function() {
      // uncomment below and update the code to test the property serialNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property primaryReason (base name: "primaryReason")', function() {
      // uncomment below and update the code to test the property primaryReason
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property secondaryReason (base name: "secondaryReason")', function() {
      // uncomment below and update the code to test the property secondaryReason
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromInfo (base name: "shipFromInfo")', function() {
      // uncomment below and update the code to test the property shipFromInfo
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

    it('should have the property numberOfBoxes (base name: "numberOfBoxes")', function() {
      // uncomment below and update the code to test the property numberOfBoxes
      //var instance = new XiSdkResellers.ReturnsCreateRequestListInner();
      //expect(instance).to.be();
    });

  });

}));
