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
    instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
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

  describe('OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser', function() {
    it('should create an instance of OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser', function() {
      // uncomment below and update the code to test OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property addressline1 (base name: "addressline1")', function() {
      // uncomment below and update the code to test the property addressline1
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property addressline2 (base name: "addressline2")', function() {
      // uncomment below and update the code to test the property addressline2
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property addressline3 (base name: "addressline3")', function() {
      // uncomment below and update the code to test the property addressline3
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property postalcode (base name: "postalcode")', function() {
      // uncomment below and update the code to test the property postalcode
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property countrycode (base name: "countrycode")', function() {
      // uncomment below and update the code to test the property countrycode
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property phonenumber (base name: "phonenumber")', function() {
      // uncomment below and update the code to test the property phonenumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property extensionnumber (base name: "extensionnumber")', function() {
      // uncomment below and update the code to test the property extensionnumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property faxnumber (base name: "faxnumber")', function() {
      // uncomment below and update the code to test the property faxnumber
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
      //expect(instance).to.be();
    });

  });

}));
