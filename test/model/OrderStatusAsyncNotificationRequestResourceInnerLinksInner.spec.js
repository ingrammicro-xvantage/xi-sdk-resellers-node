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
    instance = new XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner();
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

  describe('OrderStatusAsyncNotificationRequestResourceInnerLinksInner', function() {
    it('should create an instance of OrderStatusAsyncNotificationRequestResourceInnerLinksInner', function() {
      // uncomment below and update the code to test OrderStatusAsyncNotificationRequestResourceInnerLinksInner
      //var instance = new XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner();
      //expect(instance).to.be.a(XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner);
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner();
      //expect(instance).to.be();
    });

  });

}));
