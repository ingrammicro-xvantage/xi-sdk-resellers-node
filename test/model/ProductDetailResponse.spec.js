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
    instance = new XiSdkResellers.ProductDetailResponse();
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

  describe('ProductDetailResponse', function() {
    it('should create an instance of ProductDetailResponse', function() {
      // uncomment below and update the code to test ProductDetailResponse
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be.a(XiSdkResellers.ProductDetailResponse);
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property customerPartNumber (base name: "customerPartNumber")', function() {
      // uncomment below and update the code to test the property customerPartNumber
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productAuthorized (base name: "productAuthorized")', function() {
      // uncomment below and update the code to test the property productAuthorized
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productDetailDescription (base name: "productDetailDescription")', function() {
      // uncomment below and update the code to test the property productDetailDescription
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productCategory (base name: "productCategory")', function() {
      // uncomment below and update the code to test the property productCategory
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productSubCategory (base name: "productSubCategory")', function() {
      // uncomment below and update the code to test the property productSubCategory
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendorName")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property vendorNumber (base name: "vendorNumber")', function() {
      // uncomment below and update the code to test the property vendorNumber
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productStatusCode (base name: "productStatusCode")', function() {
      // uncomment below and update the code to test the property productStatusCode
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property productClass (base name: "productClass")', function() {
      // uncomment below and update the code to test the property productClass
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property indicators (base name: "indicators")', function() {
      // uncomment below and update the code to test the property indicators
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property ciscoFields (base name: "ciscoFields")', function() {
      // uncomment below and update the code to test the property ciscoFields
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property technicalSpecifications (base name: "technicalSpecifications")', function() {
      // uncomment below and update the code to test the property technicalSpecifications
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property warrantyInformation (base name: "warrantyInformation")', function() {
      // uncomment below and update the code to test the property warrantyInformation
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property additionalInformation (base name: "additionalInformation")', function() {
      // uncomment below and update the code to test the property additionalInformation
      //var instance = new XiSdkResellers.ProductDetailResponse();
      //expect(instance).to.be();
    });

  });

}));
