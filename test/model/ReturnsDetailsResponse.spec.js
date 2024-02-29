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
    instance = new XiSdkResellers.ReturnsDetailsResponse();
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

  describe('ReturnsDetailsResponse', function() {
    it('should create an instance of ReturnsDetailsResponse', function() {
      // uncomment below and update the code to test ReturnsDetailsResponse
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be.a(XiSdkResellers.ReturnsDetailsResponse);
    });

    it('should have the property typeOfDetails (base name: "typeOfDetails")', function() {
      // uncomment below and update the code to test the property typeOfDetails
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property rmaClaimId (base name: "rmaClaimId")', function() {
      // uncomment below and update the code to test the property rmaClaimId
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property caseRequestNumber (base name: "caseRequestNumber")', function() {
      // uncomment below and update the code to test the property caseRequestNumber
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property returnReason (base name: "returnReason")', function() {
      // uncomment below and update the code to test the property returnReason
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property returnWarehouseAddress (base name: "returnWarehouseAddress")', function() {
      // uncomment below and update the code to test the property returnWarehouseAddress
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property products (base name: "products")', function() {
      // uncomment below and update the code to test the property products
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "subTotal")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property additionalFees (base name: "additionalFees")', function() {
      // uncomment below and update the code to test the property additionalFees
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

    it('should have the property estimatedTotal (base name: "estimatedTotal")', function() {
      // uncomment below and update the code to test the property estimatedTotal
      //var instance = new XiSdkResellers.ReturnsDetailsResponse();
      //expect(instance).to.be();
    });

  });

}));
