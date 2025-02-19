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
    instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
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

  describe('InvoiceDetailsv61ResponseSummaryForeignFxTotals', function() {
    it('should create an instance of InvoiceDetailsv61ResponseSummaryForeignFxTotals', function() {
      // uncomment below and update the code to test InvoiceDetailsv61ResponseSummaryForeignFxTotals
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be.a(XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals);
    });

    it('should have the property foreignCurrencyCode (base name: "foreignCurrencyCode")', function() {
      // uncomment below and update the code to test the property foreignCurrencyCode
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be();
    });

    it('should have the property foreignCurrencyFxRate (base name: "foreignCurrencyFxRate")', function() {
      // uncomment below and update the code to test the property foreignCurrencyFxRate
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be();
    });

    it('should have the property foreignTotalTaxableAmount (base name: "foreignTotalTaxableAmount")', function() {
      // uncomment below and update the code to test the property foreignTotalTaxableAmount
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be();
    });

    it('should have the property foreignTotalTaxAmount (base name: "foreignTotalTaxAmount")', function() {
      // uncomment below and update the code to test the property foreignTotalTaxAmount
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be();
    });

    it('should have the property foreignInvoiceAmountDue (base name: "foreignInvoiceAmountDue")', function() {
      // uncomment below and update the code to test the property foreignInvoiceAmountDue
      //var instance = new XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals();
      //expect(instance).to.be();
    });

  });

}));
