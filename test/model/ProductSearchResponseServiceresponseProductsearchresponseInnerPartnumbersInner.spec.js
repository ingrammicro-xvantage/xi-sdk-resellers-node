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
    instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
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

  describe('ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner', function() {
    it('should create an instance of ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner', function() {
      // uncomment below and update the code to test ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be.a(ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner);
    });

    it('should have the property ingrampartnumber (base name: "ingrampartnumber")', function() {
      // uncomment below and update the code to test the property ingrampartnumber
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerpartnumber (base name: "manufacturerpartnumber")', function() {
      // uncomment below and update the code to test the property manufacturerpartnumber
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

    it('should have the property upccode (base name: "upccode")', function() {
      // uncomment below and update the code to test the property upccode
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

    it('should have the property productdescription (base name: "productdescription")', function() {
      // uncomment below and update the code to test the property productdescription
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

    it('should have the property haswarranty (base name: "haswarranty")', function() {
      // uncomment below and update the code to test the property haswarranty
      //var instance = new ResellerApi.ProductSearchResponseServiceresponseProductsearchresponseInnerPartnumbersInner();
      //expect(instance).to.be();
    });

  });

}));
