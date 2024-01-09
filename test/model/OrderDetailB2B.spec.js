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
    instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
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

  describe('OrderDetailB2B', function() {
    it('should create an instance of OrderDetailB2B', function() {
      // uncomment below and update the code to test OrderDetailB2B
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderDetailB2B);
    });

    it('should have the property ingramOrderNumber (base name: "ingramOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property ingramOrderDate (base name: "ingramOrderDate")', function() {
      // uncomment below and update the code to test the property ingramOrderDate
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "orderType")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property webOrderId (base name: "webOrderId")', function() {
      // uncomment below and update the code to test the property webOrderId
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property vendorSalesOrderNumber (base name: "vendorSalesOrderNumber")', function() {
      // uncomment below and update the code to test the property vendorSalesOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property ingramPurchaseOrderNumber (base name: "ingramPurchaseOrderNumber")', function() {
      // uncomment below and update the code to test the property ingramPurchaseOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "orderStatus")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property orderTotal (base name: "orderTotal")', function() {
      // uncomment below and update the code to test the property orderTotal
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property orderSubTotal (base name: "orderSubTotal")', function() {
      // uncomment below and update the code to test the property orderSubTotal
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property freightCharges (base name: "freightCharges")', function() {
      // uncomment below and update the code to test the property freightCharges
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property totalWeight (base name: "totalWeight")', function() {
      // uncomment below and update the code to test the property totalWeight
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property totalTax (base name: "totalTax")', function() {
      // uncomment below and update the code to test the property totalTax
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property paymentTerms (base name: "paymentTerms")', function() {
      // uncomment below and update the code to test the property paymentTerms
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property billToInfo (base name: "billToInfo")', function() {
      // uncomment below and update the code to test the property billToInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property endUserInfo (base name: "endUserInfo")', function() {
      // uncomment below and update the code to test the property endUserInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property miscellaneousCharges (base name: "miscellaneousCharges")', function() {
      // uncomment below and update the code to test the property miscellaneousCharges
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailB2B();
      //expect(instance).to.be();
    });

  });

}));
