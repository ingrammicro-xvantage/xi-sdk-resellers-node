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
    instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
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

  describe('OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress', function() {
    it('should create an instance of OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress', function() {
      // uncomment below and update the code to test OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be.a(XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress);
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property attention (base name: "attention")', function() {
      // uncomment below and update the code to test the property attention
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property addressline1 (base name: "addressline1")', function() {
      // uncomment below and update the code to test the property addressline1
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property addressline2 (base name: "addressline2")', function() {
      // uncomment below and update the code to test the property addressline2
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property addressline3 (base name: "addressline3")', function() {
      // uncomment below and update the code to test the property addressline3
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property postalcode (base name: "postalcode")', function() {
      // uncomment below and update the code to test the property postalcode
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

    it('should have the property countrycode (base name: "countrycode")', function() {
      // uncomment below and update the code to test the property countrycode
      //var instance = new XiSdkResellers.OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress();
      //expect(instance).to.be();
    });

  });

}));
