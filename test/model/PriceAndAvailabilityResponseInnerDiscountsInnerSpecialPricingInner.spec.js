/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
    instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
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

  describe('PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner', function() {
    it('should create an instance of PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner', function() {
      // uncomment below and update the code to test PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be.a(XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner);
    });

    it('should have the property discountType (base name: "discountType")', function() {
      // uncomment below and update the code to test the property discountType
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumer (base name: "specialBidNumer")', function() {
      // uncomment below and update the code to test the property specialBidNumer
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialPricingDiscount (base name: "specialPricingDiscount")', function() {
      // uncomment below and update the code to test the property specialPricingDiscount
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialPricingEffectiveDate (base name: "specialPricingEffectiveDate")', function() {
      // uncomment below and update the code to test the property specialPricingEffectiveDate
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialPricingExpirationDate (base name: "specialPricingExpirationDate")', function() {
      // uncomment below and update the code to test the property specialPricingExpirationDate
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialPricingAvailableQuantity (base name: "specialPricingAvailableQuantity")', function() {
      // uncomment below and update the code to test the property specialPricingAvailableQuantity
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property specialPricingMinQuantity (base name: "specialPricingMinQuantity")', function() {
      // uncomment below and update the code to test the property specialPricingMinQuantity
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property governmentDiscountType (base name: "governmentDiscountType")', function() {
      // uncomment below and update the code to test the property governmentDiscountType
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

    it('should have the property governmentDiscountedCustomerPrice (base name: "governmentDiscountedCustomerPrice")', function() {
      // uncomment below and update the code to test the property governmentDiscountedCustomerPrice
      //var instance = new XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner();
      //expect(instance).to.be();
    });

  });

}));
