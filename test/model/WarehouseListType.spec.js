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
    instance = new XiSdkResellers.WarehouseListType();
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

  describe('WarehouseListType', function() {
    it('should create an instance of WarehouseListType', function() {
      // uncomment below and update the code to test WarehouseListType
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be.a(XiSdkResellers.WarehouseListType);
    });

    it('should have the property warehouseid (base name: "warehouseid")', function() {
      // uncomment below and update the code to test the property warehouseid
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

    it('should have the property warehousedescription (base name: "warehousedescription")', function() {
      // uncomment below and update the code to test the property warehousedescription
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

    it('should have the property availablequantity (base name: "availablequantity")', function() {
      // uncomment below and update the code to test the property availablequantity
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

    it('should have the property onorderquantity (base name: "onorderquantity")', function() {
      // uncomment below and update the code to test the property onorderquantity
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

    it('should have the property onholdquantity (base name: "onholdquantity")', function() {
      // uncomment below and update the code to test the property onholdquantity
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

    it('should have the property etadate (base name: "etadate")', function() {
      // uncomment below and update the code to test the property etadate
      //var instance = new XiSdkResellers.WarehouseListType();
      //expect(instance).to.be();
    });

  });

}));
