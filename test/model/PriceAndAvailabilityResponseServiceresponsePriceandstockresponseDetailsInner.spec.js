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
    instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
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

  describe('PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner', function() {
    it('should create an instance of PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner', function() {
      // uncomment below and update the code to test PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be.a(ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner);
    });

    it('should have the property itemstatus (base name: "itemstatus")', function() {
      // uncomment below and update the code to test the property itemstatus
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property statusmessage (base name: "statusmessage")', function() {
      // uncomment below and update the code to test the property statusmessage
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property ingrampartnumber (base name: "ingrampartnumber")', function() {
      // uncomment below and update the code to test the property ingrampartnumber
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorpartnumber (base name: "vendorpartnumber")', function() {
      // uncomment below and update the code to test the property vendorpartnumber
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property globalskuid (base name: "globalskuid")', function() {
      // uncomment below and update the code to test the property globalskuid
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property customerprice (base name: "customerprice")', function() {
      // uncomment below and update the code to test the property customerprice
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property partdescription1 (base name: "partdescription1")', function() {
      // uncomment below and update the code to test the property partdescription1
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property partdescription2 (base name: "partdescription2")', function() {
      // uncomment below and update the code to test the property partdescription2
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendornumber (base name: "vendornumber")', function() {
      // uncomment below and update the code to test the property vendornumber
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorname (base name: "vendorname")', function() {
      // uncomment below and update the code to test the property vendorname
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property cpucode (base name: "cpucode")', function() {
      // uncomment below and update the code to test the property cpucode
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property _class (base name: "class")', function() {
      // uncomment below and update the code to test the property _class
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property skustatus (base name: "skustatus")', function() {
      // uncomment below and update the code to test the property skustatus
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property mediacpu (base name: "mediacpu")', function() {
      // uncomment below and update the code to test the property mediacpu
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property categorysubcategory (base name: "categorysubcategory")', function() {
      // uncomment below and update the code to test the property categorysubcategory
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property retailprice (base name: "retailprice")', function() {
      // uncomment below and update the code to test the property retailprice
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property newmedia (base name: "newmedia")', function() {
      // uncomment below and update the code to test the property newmedia
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property enduserrequired (base name: "enduserrequired")', function() {
      // uncomment below and update the code to test the property enduserrequired
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property backorderflag (base name: "backorderflag")', function() {
      // uncomment below and update the code to test the property backorderflag
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property skuauthorized (base name: "skuauthorized")', function() {
      // uncomment below and update the code to test the property skuauthorized
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property extendedvendorpartnumber (base name: "extendedvendorpartnumber")', function() {
      // uncomment below and update the code to test the property extendedvendorpartnumber
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property warehousedetails (base name: "warehousedetails")', function() {
      // uncomment below and update the code to test the property warehousedetails
      //var instance = new ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();
      //expect(instance).to.be();
    });

  });

}));