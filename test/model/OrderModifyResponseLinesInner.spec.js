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
    instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
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

  describe('OrderModifyResponseLinesInner', function() {
    it('should create an instance of OrderModifyResponseLinesInner', function() {
      // uncomment below and update the code to test OrderModifyResponseLinesInner
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner);
    });

    it('should have the property subOrderNumber (base name: "subOrderNumber")', function() {
      // uncomment below and update the code to test the property subOrderNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramLineNumber (base name: "ingramLineNumber")', function() {
      // uncomment below and update the code to test the property ingramLineNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property customerLineNumber (base name: "customerLineNumber")', function() {
      // uncomment below and update the code to test the property customerLineNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantityOrdered (base name: "quantityOrdered")', function() {
      // uncomment below and update the code to test the property quantityOrdered
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantityConfirmed (base name: "quantityConfirmed")', function() {
      // uncomment below and update the code to test the property quantityConfirmed
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantityBackOrdered (base name: "quantityBackOrdered")', function() {
      // uncomment below and update the code to test the property quantityBackOrdered
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property shipmentDetails (base name: "shipmentDetails")', function() {
      // uncomment below and update the code to test the property shipmentDetails
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner();
      //expect(instance).to.be();
    });

  });

}));