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
    instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
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

  describe('AvailabilityAsyncNotificationRequestResourceInner', function() {
    it('should create an instance of AvailabilityAsyncNotificationRequestResourceInner', function() {
      // uncomment below and update the code to test AvailabilityAsyncNotificationRequestResourceInner
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be.a(XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner);
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorName (base name: "vendorName")', function() {
      // uncomment below and update the code to test the property vendorName
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property upcCode (base name: "upcCode")', function() {
      // uncomment below and update the code to test the property upcCode
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property skuStatus (base name: "skuStatus")', function() {
      // uncomment below and update the code to test the property skuStatus
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property backOrderFlag (base name: "backOrderFlag")', function() {
      // uncomment below and update the code to test the property backOrderFlag
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property totalAvailability (base name: "totalAvailability")', function() {
      // uncomment below and update the code to test the property totalAvailability
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner();
      //expect(instance).to.be();
    });

  });

}));
