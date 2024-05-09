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
    instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
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

  describe('InvoiceSearchResponseInvoicesInner', function() {
    it('should create an instance of InvoiceSearchResponseInvoicesInner', function() {
      // uncomment below and update the code to test InvoiceSearchResponseInvoicesInner
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be.a(XiSdkResellers.InvoiceSearchResponseInvoicesInner);
    });

    it('should have the property paymentTermsDueDate (base name: "paymentTermsDueDate")', function() {
      // uncomment below and update the code to test the property paymentTermsDueDate
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumbers (base name: "specialBidNumbers")', function() {
      // uncomment below and update the code to test the property specialBidNumbers
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property erpOrderNumber (base name: "erpOrderNumber")', function() {
      // uncomment below and update the code to test the property erpOrderNumber
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceStatus (base name: "invoiceStatus")', function() {
      // uncomment below and update the code to test the property invoiceStatus
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDueDate (base name: "invoiceDueDate")', function() {
      // uncomment below and update the code to test the property invoiceDueDate
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoicedAmountDue (base name: "invoicedAmountDue")', function() {
      // uncomment below and update the code to test the property invoicedAmountDue
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property orderCreateDate (base name: "orderCreateDate")', function() {
      // uncomment below and update the code to test the property orderCreateDate
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceAmountInclTax (base name: "invoiceAmountInclTax")', function() {
      // uncomment below and update the code to test the property invoiceAmountInclTax
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property forgntotalamount (base name: "forgntotalamount")', function() {
      // uncomment below and update the code to test the property forgntotalamount
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property gstInvoiceNumber (base name: "gstInvoiceNumber")', function() {
      // uncomment below and update the code to test the property gstInvoiceNumber
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property isfseccenabled (base name: "isfseccenabled")', function() {
      // uncomment below and update the code to test the property isfseccenabled
      //var instance = new XiSdkResellers.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

  });

}));
