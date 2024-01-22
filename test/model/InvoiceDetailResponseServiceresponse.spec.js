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
    instance = new XiSdkResellers.InvoiceDetailResponseServiceresponse();
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

  describe('InvoiceDetailResponseServiceresponse', function() {
    it('should create an instance of InvoiceDetailResponseServiceresponse', function() {
      // uncomment below and update the code to test InvoiceDetailResponseServiceresponse
      //var instance = new XiSdkResellers.InvoiceDetailResponseServiceresponse();
      //expect(instance).to.be.a(XiSdkResellers.InvoiceDetailResponseServiceresponse);
    });

    it('should have the property responsepreamble (base name: "responsepreamble")', function() {
      // uncomment below and update the code to test the property responsepreamble
      //var instance = new XiSdkResellers.InvoiceDetailResponseServiceresponse();
      //expect(instance).to.be();
    });

    it('should have the property invoicedetailresponse (base name: "invoicedetailresponse")', function() {
      // uncomment below and update the code to test the property invoicedetailresponse
      //var instance = new XiSdkResellers.InvoiceDetailResponseServiceresponse();
      //expect(instance).to.be();
    });

  });

}));
