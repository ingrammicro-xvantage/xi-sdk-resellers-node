/**
 * Reseller API
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
    factory(root.expect, root.ResellerApi);
  }
}(this, function(expect, ResellerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
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

  describe('OrderDetailResponseLinesInnerShipmentDetailsInner', function() {
    it('should create an instance of OrderDetailResponseLinesInnerShipmentDetailsInner', function() {
      // uncomment below and update the code to test OrderDetailResponseLinesInnerShipmentDetailsInner
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be.a(ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property estimatedShipDate (base name: "estimatedShipDate")', function() {
      // uncomment below and update the code to test the property estimatedShipDate
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shippedDate (base name: "shippedDate")', function() {
      // uncomment below and update the code to test the property shippedDate
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDeliveryDate (base name: "estimatedDeliveryDate")', function() {
      // uncomment below and update the code to test the property estimatedDeliveryDate
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property deliveredDate (base name: "deliveredDate")', function() {
      // uncomment below and update the code to test the property deliveredDate
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromWarehouseId (base name: "shipFromWarehouseId")', function() {
      // uncomment below and update the code to test the property shipFromWarehouseId
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipFromLocation (base name: "shipFromLocation")', function() {
      // uncomment below and update the code to test the property shipFromLocation
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceNumber (base name: "invoiceNumber")', function() {
      // uncomment below and update the code to test the property invoiceNumber
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoiceDate (base name: "invoiceDate")', function() {
      // uncomment below and update the code to test the property invoiceDate
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property carrierDetails (base name: "carrierDetails")', function() {
      // uncomment below and update the code to test the property carrierDetails
      //var instance = new ResellerApi.OrderDetailResponseLinesInnerShipmentDetailsInner();
      //expect(instance).to.be();
    });

  });

}));
