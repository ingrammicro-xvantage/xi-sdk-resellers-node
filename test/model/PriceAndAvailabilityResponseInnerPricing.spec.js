/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
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

  describe('PriceAndAvailabilityResponseInnerPricing', function() {
    it('should create an instance of PriceAndAvailabilityResponseInnerPricing', function() {
      // uncomment below and update the code to test PriceAndAvailabilityResponseInnerPricing
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be.a(XiSdkResellers.PriceAndAvailabilityResponseInnerPricing);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

    it('should have the property retailPrice (base name: "retailPrice")', function() {
      // uncomment below and update the code to test the property retailPrice
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

    it('should have the property mapPrice (base name: "mapPrice")', function() {
      // uncomment below and update the code to test the property mapPrice
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

    it('should have the property customerPrice (base name: "customerPrice")', function() {
      // uncomment below and update the code to test the property customerPrice
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

    it('should have the property specialBidPricingAvailable (base name: "specialBidPricingAvailable")', function() {
      // uncomment below and update the code to test the property specialBidPricingAvailable
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

    it('should have the property webDiscountsAvailable (base name: "webDiscountsAvailable")', function() {
      // uncomment below and update the code to test the property webDiscountsAvailable
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerPricing();
      //expect(instance).to.be();
    });

  });

}));
