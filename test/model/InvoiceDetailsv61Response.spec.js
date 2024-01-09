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
    instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
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

  describe('InvoiceDetailsv61Response', function() {
    it('should create an instance of InvoiceDetailsv61Response', function() {
      // uncomment below and update the code to test InvoiceDetailsv61Response
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response);
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property invoiceStatus (base name: "invoiceStatus")', function() {
      // uncomment below and update the code to test the property invoiceStatus
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property orderDate (base name: "OrderDate")', function() {
      // uncomment below and update the code to test the property orderDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property billToID (base name: "billToID")', function() {
      // uncomment below and update the code to test the property billToID
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property invoiceType (base name: "invoiceType")', function() {
      // uncomment below and update the code to test the property invoiceType
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDueDate (base name: "invoiceDueDate")', function() {
      // uncomment below and update the code to test the property invoiceDueDate
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property customerCountryCode (base name: "customerCountryCode")', function() {
      // uncomment below and update the code to test the property customerCountryCode
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property customerNumber (base name: "customerNumber")', function() {
      // uncomment below and update the code to test the property customerNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property ingramOrderNumber (base name: "ingramOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property paymentTermsInfo (base name: "paymentTermsInfo")', function() {
      // uncomment below and update the code to test the property paymentTermsInfo
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property billToInfo (base name: "billToInfo")', function() {
      // uncomment below and update the code to test the property billToInfo
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property fxRateInfo (base name: "fxRateInfo")', function() {
      // uncomment below and update the code to test the property fxRateInfo
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new ResellerApiDocumentationUnitedStates.InvoiceDetailsv61Response();
      //expect(instance).to.be();
    });

  });

}));