/**
 * Reseller API
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
    factory(root.expect, root.ResellerApi);
  }
}(this, function(expect, ResellerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApi.OrderModifyRequestLinesInner();
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

  describe('OrderModifyRequestLinesInner', function() {
    it('should create an instance of OrderModifyRequestLinesInner', function() {
      // uncomment below and update the code to test OrderModifyRequestLinesInner
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be.a(ResellerApi.OrderModifyRequestLinesInner);
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramLineNumber (base name: "ingramLineNumber")', function() {
      // uncomment below and update the code to test the property ingramLineNumber
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property customerLineNumber (base name: "customerLineNumber")', function() {
      // uncomment below and update the code to test the property customerLineNumber
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property addUpdateDeleteLine (base name: "addUpdateDeleteLine")', function() {
      // uncomment below and update the code to test the property addUpdateDeleteLine
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new ResellerApi.OrderModifyRequestLinesInner();
      //expect(instance).to.be();
    });

  });

}));
