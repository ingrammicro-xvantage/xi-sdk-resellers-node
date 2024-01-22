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
    instance = new ResellerApi.ReturnsSearchResponse();
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

  describe('ReturnsSearchResponse', function() {
    it('should create an instance of ReturnsSearchResponse', function() {
      // uncomment below and update the code to test ReturnsSearchResponse
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be.a(ResellerApi.ReturnsSearchResponse);
    });

    it('should have the property recordsFound (base name: "recordsFound")', function() {
      // uncomment below and update the code to test the property recordsFound
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property pageNumber (base name: "pageNumber")', function() {
      // uncomment below and update the code to test the property pageNumber
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property returnsClaims (base name: "returnsClaims")', function() {
      // uncomment below and update the code to test the property returnsClaims
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPage (base name: "nextPage")', function() {
      // uncomment below and update the code to test the property nextPage
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousPage (base name: "previousPage")', function() {
      // uncomment below and update the code to test the property previousPage
      //var instance = new ResellerApi.ReturnsSearchResponse();
      //expect(instance).to.be();
    });

  });

}));
