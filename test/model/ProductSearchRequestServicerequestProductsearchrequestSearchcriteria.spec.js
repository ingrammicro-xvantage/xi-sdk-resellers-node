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
    instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
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

  describe('ProductSearchRequestServicerequestProductsearchrequestSearchcriteria', function() {
    it('should create an instance of ProductSearchRequestServicerequestProductsearchrequestSearchcriteria', function() {
      // uncomment below and update the code to test ProductSearchRequestServicerequestProductsearchrequestSearchcriteria
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria);
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be();
    });

    it('should have the property vendorpartnumber (base name: "vendorpartnumber")', function() {
      // uncomment below and update the code to test the property vendorpartnumber
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be();
    });

    it('should have the property partdescription (base name: "partdescription")', function() {
      // uncomment below and update the code to test the property partdescription
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be();
    });

    it('should have the property UPC (base name: "UPC")', function() {
      // uncomment below and update the code to test the property UPC
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be();
    });

    it('should have the property customerpartnumber (base name: "customerpartnumber")', function() {
      // uncomment below and update the code to test the property customerpartnumber
      //var instance = new ResellerApiDocumentationUnitedStates.ProductSearchRequestServicerequestProductsearchrequestSearchcriteria();
      //expect(instance).to.be();
    });

  });

}));
