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
    instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
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

  describe('OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner', function() {
    it('should create an instance of OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner', function() {
      // uncomment below and update the code to test OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipmentdate (base name: "shipmentdate")', function() {
      // uncomment below and update the code to test the property shipmentdate
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shipfromwarehouseid (base name: "shipfromwarehouseid")', function() {
      // uncomment below and update the code to test the property shipfromwarehouseid
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property warehousename (base name: "warehousename")', function() {
      // uncomment below and update the code to test the property warehousename
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoicenumber (base name: "invoicenumber")', function() {
      // uncomment below and update the code to test the property invoicenumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property invoicedate (base name: "invoicedate")', function() {
      // uncomment below and update the code to test the property invoicedate
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property statusdescription (base name: "statusdescription")', function() {
      // uncomment below and update the code to test the property statusdescription
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property shippeddate (base name: "shippeddate")', function() {
      // uncomment below and update the code to test the property shippeddate
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property holdreasoncodedescription (base name: "holdreasoncodedescription")', function() {
      // uncomment below and update the code to test the property holdreasoncodedescription
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property ponumber (base name: "ponumber")', function() {
      // uncomment below and update the code to test the property ponumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property carriertype (base name: "carriertype")', function() {
      // uncomment below and update the code to test the property carriertype
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property carriercode (base name: "carriercode")', function() {
      // uncomment below and update the code to test the property carriercode
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property carriername (base name: "carriername")', function() {
      // uncomment below and update the code to test the property carriername
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property pronumber (base name: "pronumber")', function() {
      // uncomment below and update the code to test the property pronumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property packagedetails (base name: "packagedetails")', function() {
      // uncomment below and update the code to test the property packagedetails
      //var instance = new ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner();
      //expect(instance).to.be();
    });

  });

}));
