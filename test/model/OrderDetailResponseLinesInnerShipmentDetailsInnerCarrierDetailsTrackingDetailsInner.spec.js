/**
 * Reseller API Documentation - United States
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
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
    factory(root.expect, root.ResellerApiDocumentationUnitedStates);
  }
}(this, function(expect, ResellerApiDocumentationUnitedStates) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
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

  describe('OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner', function() {
    it('should create an instance of OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner', function() {
      // uncomment below and update the code to test OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner);
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property trackingUrl (base name: "trackingUrl")', function() {
      // uncomment below and update the code to test the property trackingUrl
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property packageWeight (base name: "packageWeight")', function() {
      // uncomment below and update the code to test the property packageWeight
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property cartonNumber (base name: "cartonNumber")', function() {
      // uncomment below and update the code to test the property cartonNumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property quantityInBox (base name: "quantityInBox")', function() {
      // uncomment below and update the code to test the property quantityInBox
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property serialNumbers (base name: "SerialNumbers")', function() {
      // uncomment below and update the code to test the property serialNumbers
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
      //expect(instance).to.be();
    });

  });

}));