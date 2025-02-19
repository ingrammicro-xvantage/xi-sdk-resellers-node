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
    instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
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

  describe('InvoiceDetailsv61ResponseSummaryMiscChargesInner', function() {
    it('should create an instance of InvoiceDetailsv61ResponseSummaryMiscChargesInner', function() {
      // uncomment below and update the code to test InvoiceDetailsv61ResponseSummaryMiscChargesInner
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be.a(XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner);
    });

    it('should have the property chargeDescription (base name: "chargeDescription")', function() {
      // uncomment below and update the code to test the property chargeDescription
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be();
    });

    it('should have the property miscChargeLineCount (base name: "miscChargeLineCount")', function() {
      // uncomment below and update the code to test the property miscChargeLineCount
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be();
    });

    it('should have the property miscChargeLineTotal (base name: "miscChargeLineTotal")', function() {
      // uncomment below and update the code to test the property miscChargeLineTotal
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be();
    });

    it('should have the property chargeLineReference (base name: "chargeLineReference")', function() {
      // uncomment below and update the code to test the property chargeLineReference
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be();
    });

    it('should have the property isNonMisc (base name: "isNonMisc")', function() {
      // uncomment below and update the code to test the property isNonMisc
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner();
      //expect(instance).to.be();
    });

  });

}));
