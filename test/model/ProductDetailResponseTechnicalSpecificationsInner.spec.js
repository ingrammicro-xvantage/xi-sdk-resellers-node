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
    instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
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

  describe('ProductDetailResponseTechnicalSpecificationsInner', function() {
    it('should create an instance of ProductDetailResponseTechnicalSpecificationsInner', function() {
      // uncomment below and update the code to test ProductDetailResponseTechnicalSpecificationsInner
      //var instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
      //expect(instance).to.be.a(XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner);
    });

    it('should have the property headerName (base name: "headerName")', function() {
      // uncomment below and update the code to test the property headerName
      //var instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
      //expect(instance).to.be();
    });

    it('should have the property attributeName (base name: "attributeName")', function() {
      // uncomment below and update the code to test the property attributeName
      //var instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
      //expect(instance).to.be();
    });

    it('should have the property attributeDisplay (base name: "attributeDisplay")', function() {
      // uncomment below and update the code to test the property attributeDisplay
      //var instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
      //expect(instance).to.be();
    });

    it('should have the property attributeValue (base name: "attributeValue")', function() {
      // uncomment below and update the code to test the property attributeValue
      //var instance = new XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner();
      //expect(instance).to.be();
    });

  });

}));
