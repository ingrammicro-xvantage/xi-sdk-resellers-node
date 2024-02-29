/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
    instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
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

  describe('QuoteDetailsResponseProductsInnerPrice', function() {
    it('should create an instance of QuoteDetailsResponseProductsInnerPrice', function() {
      // uncomment below and update the code to test QuoteDetailsResponseProductsInnerPrice
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsResponseProductsInnerPrice);
    });

    it('should have the property quotePrice (base name: "quotePrice")', function() {
      // uncomment below and update the code to test the property quotePrice
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property msrp (base name: "msrp")', function() {
      // uncomment below and update the code to test the property msrp
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property extendedMsrp (base name: "extendedMsrp")', function() {
      // uncomment below and update the code to test the property extendedMsrp
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property extendedQuotePrice (base name: "extendedQuotePrice")', function() {
      // uncomment below and update the code to test the property extendedQuotePrice
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property discountOffList (base name: "discountOffList")', function() {
      // uncomment below and update the code to test the property discountOffList
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property vendorprice (base name: "vendorprice")', function() {
      // uncomment below and update the code to test the property vendorprice
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property extendedvendorprice (base name: "extendedvendorprice")', function() {
      // uncomment below and update the code to test the property extendedvendorprice
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalVisibleReserveQuantity (base name: "totalVisibleReserveQuantity")', function() {
      // uncomment below and update the code to test the property totalVisibleReserveQuantity
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

    it('should have the property recurringPriceModel (base name: "recurringPriceModel")', function() {
      // uncomment below and update the code to test the property recurringPriceModel
      //var instance = new XiSdkResellers.QuoteDetailsResponseProductsInnerPrice();
      //expect(instance).to.be();
    });

  });

}));
