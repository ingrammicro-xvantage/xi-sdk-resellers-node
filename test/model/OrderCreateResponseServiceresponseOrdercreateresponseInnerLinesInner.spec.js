/**
 * XI SDK Resellers
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
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
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

  describe('OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner', function() {
    it('should create an instance of OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner', function() {
      // uncomment below and update the code to test OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner);
    });

    it('should have the property linetype (base name: "linetype")', function() {
      // uncomment below and update the code to test the property linetype
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property globallinenumber (base name: "globallinenumber")', function() {
      // uncomment below and update the code to test the property globallinenumber
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property partnumber (base name: "partnumber")', function() {
      // uncomment below and update the code to test the property partnumber
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property globalskuid (base name: "globalskuid")', function() {
      // uncomment below and update the code to test the property globalskuid
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property linenumber (base name: "linenumber")', function() {
      // uncomment below and update the code to test the property linenumber
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property carriercode (base name: "carriercode")', function() {
      // uncomment below and update the code to test the property carriercode
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property carrierdescription (base name: "carrierdescription")', function() {
      // uncomment below and update the code to test the property carrierdescription
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property requestedunitprice (base name: "requestedunitprice")', function() {
      // uncomment below and update the code to test the property requestedunitprice
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property requestedquantity (base name: "requestedquantity")', function() {
      // uncomment below and update the code to test the property requestedquantity
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property confirmedquantity (base name: "confirmedquantity")', function() {
      // uncomment below and update the code to test the property confirmedquantity
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property backorderedquantity (base name: "backorderedquantity")', function() {
      // uncomment below and update the code to test the property backorderedquantity
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property unitproductprice (base name: "unitproductprice")', function() {
      // uncomment below and update the code to test the property unitproductprice
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property netamount (base name: "netamount")', function() {
      // uncomment below and update the code to test the property netamount
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property warehouseid (base name: "warehouseid")', function() {
      // uncomment below and update the code to test the property warehouseid
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

    it('should have the property ordersuffix (base name: "ordersuffix")', function() {
      // uncomment below and update the code to test the property ordersuffix
      //var instance = new XiSdkResellers.OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
      //expect(instance).to.be();
    });

  });

}));
