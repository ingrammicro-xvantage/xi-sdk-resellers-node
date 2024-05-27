/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
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

  describe('QuoteDetailsResponseProductsInnerBillDetailsInner', function() {
    it('should create an instance of QuoteDetailsResponseProductsInnerBillDetailsInner', function() {
      // uncomment below and update the code to test QuoteDetailsResponseProductsInnerBillDetailsInner
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property unitValue (base name: "unitValue")', function() {
      // uncomment below and update the code to test the property unitValue
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerBillDetailsInner();
      //expect(instance).to.be();
    });

  });

}));
