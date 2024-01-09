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
    instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
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

  describe('OrderCreateRequestLinesInner', function() {
    it('should create an instance of OrderCreateRequestLinesInner', function() {
      // uncomment below and update the code to test OrderCreateRequestLinesInner
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner);
    });

    it('should have the property customerLineNumber (base name: "customerLineNumber")', function() {
      // uncomment below and update the code to test the property customerLineNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumber (base name: "specialBidNumber")', function() {
      // uncomment below and update the code to test the property specialBidNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserPrice (base name: "endUserPrice")', function() {
      // uncomment below and update the code to test the property endUserPrice
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property warrantyInfo (base name: "warrantyInfo")', function() {
      // uncomment below and update the code to test the property warrantyInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property endUserInfo (base name: "endUserInfo")', function() {
      // uncomment below and update the code to test the property endUserInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInner();
      //expect(instance).to.be();
    });

  });

}));
