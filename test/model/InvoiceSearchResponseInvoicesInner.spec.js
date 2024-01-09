/**
 * Reseller API Documentation - United States
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
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
    factory(root.expect, root.ResellerApiDocumentationUnitedStates);
  }
}(this, function(expect, ResellerApiDocumentationUnitedStates) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
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
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner);
    });

    it('should have the property paymentTermsDueDate (base name: "paymentTermsDueDate")', function() {
      // uncomment below and update the code to test the property paymentTermsDueDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property erpOrderNumber (base name: "erpOrderNumber")', function() {
      // uncomment below and update the code to test the property erpOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceStatus (base name: "invoiceStatus")', function() {
      // uncomment below and update the code to test the property invoiceStatus
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDueDate (base name: "invoiceDueDate")', function() {
      // uncomment below and update the code to test the property invoiceDueDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoicedAmountDue (base name: "invoicedAmountDue")', function() {
      // uncomment below and update the code to test the property invoicedAmountDue
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property orderCreateDate (base name: "orderCreateDate")', function() {
      // uncomment below and update the code to test the property orderCreateDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceAmountInclTax (base name: "invoiceAmountInclTax")', function() {
      // uncomment below and update the code to test the property invoiceAmountInclTax
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceSearchResponseInvoicesInner();
      //expect(instance).to.be();
    });

  });

}));