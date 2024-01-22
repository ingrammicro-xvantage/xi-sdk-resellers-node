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
    instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
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

  describe('ReturnsSearchResponseReturnsClaimsInner', function() {
    it('should create an instance of ReturnsSearchResponseReturnsClaimsInner', function() {
      // uncomment below and update the code to test ReturnsSearchResponseReturnsClaimsInner
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be.a(ResellerApi.ReturnsSearchResponseReturnsClaimsInner);
    });

    it('should have the property returnClaimId (base name: "returnClaimId")', function() {
      // uncomment below and update the code to test the property returnClaimId
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property caseRequestNumber (base name: "caseRequestNumber")', function() {
      // uncomment below and update the code to test the property caseRequestNumber
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property returnReason (base name: "returnReason")', function() {
      // uncomment below and update the code to test the property returnReason
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property estimatedTotalValue (base name: "estimatedTotalValue")', function() {
      // uncomment below and update the code to test the property estimatedTotalValue
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property credit (base name: "credit")', function() {
      // uncomment below and update the code to test the property credit
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new ResellerApi.ReturnsSearchResponseReturnsClaimsInner();
      //expect(instance).to.be();
    });

  });

}));
