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
    instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
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

  describe('OrderCreateRequestLinesInnerWarrantyInfoInner', function() {
    it('should create an instance of OrderCreateRequestLinesInnerWarrantyInfoInner', function() {
      // uncomment below and update the code to test OrderCreateRequestLinesInnerWarrantyInfoInner
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner);
    });

    it('should have the property directLineLink (base name: "directLineLink")', function() {
      // uncomment below and update the code to test the property directLineLink
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property warrantyLineLink (base name: "warrantyLineLink")', function() {
      // uncomment below and update the code to test the property warrantyLineLink
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property hardwareLineLink (base name: "hardwareLineLink")', function() {
      // uncomment below and update the code to test the property hardwareLineLink
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
      //expect(instance).to.be();
    });

    it('should have the property serialInfo (base name: "serialInfo")', function() {
      // uncomment below and update the code to test the property serialInfo
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner();
      //expect(instance).to.be();
    });

  });

}));
