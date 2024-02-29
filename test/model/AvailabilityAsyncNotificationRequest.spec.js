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
    instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
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

  describe('AvailabilityAsyncNotificationRequest', function() {
    it('should create an instance of AvailabilityAsyncNotificationRequest', function() {
      // uncomment below and update the code to test AvailabilityAsyncNotificationRequest
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be.a(XiSdkResellers.AvailabilityAsyncNotificationRequest);
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventTimeStamp (base name: "eventTimeStamp")', function() {
      // uncomment below and update the code to test the property eventTimeStamp
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventId (base name: "eventId")', function() {
      // uncomment below and update the code to test the property eventId
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instance = new XiSdkResellers.AvailabilityAsyncNotificationRequest();
      //expect(instance).to.be();
    });

  });

}));
