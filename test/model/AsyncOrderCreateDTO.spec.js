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
    instance = new XiSdkResellers.AsyncOrderCreateDTO();
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

  describe('AsyncOrderCreateDTO', function() {
    it('should create an instance of AsyncOrderCreateDTO', function() {
      // uncomment below and update the code to test AsyncOrderCreateDTO
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be.a(XiSdkResellers.AsyncOrderCreateDTO);
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property endCustomerOrderNumber (base name: "endCustomerOrderNumber")', function() {
      // uncomment below and update the code to test the property endCustomerOrderNumber
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property specialBidNumber (base name: "specialBidNumber")', function() {
      // uncomment below and update the code to test the property specialBidNumber
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property internalComments (base name: "internalComments")', function() {
      // uncomment below and update the code to test the property internalComments
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property acceptBackOrder (base name: "acceptBackOrder")', function() {
      // uncomment below and update the code to test the property acceptBackOrder
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property vendAuthNumber (base name: "vendAuthNumber")', function() {
      // uncomment below and update the code to test the property vendAuthNumber
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property resellerInfo (base name: "resellerInfo")', function() {
      // uncomment below and update the code to test the property resellerInfo
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property endUserInfo (base name: "endUserInfo")', function() {
      // uncomment below and update the code to test the property endUserInfo
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property shipToInfo (base name: "shipToInfo")', function() {
      // uncomment below and update the code to test the property shipToInfo
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property shipmentDetails (base name: "shipmentDetails")', function() {
      // uncomment below and update the code to test the property shipmentDetails
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property additionalAttributes (base name: "additionalAttributes")', function() {
      // uncomment below and update the code to test the property additionalAttributes
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property vmfadditionalAttributes (base name: "vmfadditionalAttributes")', function() {
      // uncomment below and update the code to test the property vmfadditionalAttributes
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

    it('should have the property warrantyInfo (base name: "warrantyInfo")', function() {
      // uncomment below and update the code to test the property warrantyInfo
      //var instance = new XiSdkResellers.AsyncOrderCreateDTO();
      //expect(instance).to.be();
    });

  });

}));
