"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ProductSearchResponseCatalogInnerLinksInner = _interopRequireDefault(require("./ProductSearchResponseCatalogInnerLinksInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ProductSearchResponseCatalogInner model module.
 * @module model/ProductSearchResponseCatalogInner
 * @version 1.0.0
 */
var ProductSearchResponseCatalogInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProductSearchResponseCatalogInner</code>.
   * @alias module:model/ProductSearchResponseCatalogInner
   */
  function ProductSearchResponseCatalogInner() {
    _classCallCheck(this, ProductSearchResponseCatalogInner);
    ProductSearchResponseCatalogInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ProductSearchResponseCatalogInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ProductSearchResponseCatalogInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchResponseCatalogInner} obj Optional instance to populate.
     * @return {module:model/ProductSearchResponseCatalogInner} The populated <code>ProductSearchResponseCatalogInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProductSearchResponseCatalogInner();
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }
        if (data.hasOwnProperty('subCategory')) {
          obj['subCategory'] = _ApiClient["default"].convertToType(data['subCategory'], 'String');
        }
        if (data.hasOwnProperty('productType')) {
          obj['productType'] = _ApiClient["default"].convertToType(data['productType'], 'String');
        }
        if (data.hasOwnProperty('ingramPartNumber')) {
          obj['ingramPartNumber'] = _ApiClient["default"].convertToType(data['ingramPartNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorPartNumber')) {
          obj['vendorPartNumber'] = _ApiClient["default"].convertToType(data['vendorPartNumber'], 'String');
        }
        if (data.hasOwnProperty('upcCode')) {
          obj['upcCode'] = _ApiClient["default"].convertToType(data['upcCode'], 'String');
        }
        if (data.hasOwnProperty('vendorName')) {
          obj['vendorName'] = _ApiClient["default"].convertToType(data['vendorName'], 'String');
        }
        if (data.hasOwnProperty('endUserRequired')) {
          obj['endUserRequired'] = _ApiClient["default"].convertToType(data['endUserRequired'], 'String');
        }
        if (data.hasOwnProperty('hasDiscounts')) {
          obj['hasDiscounts'] = _ApiClient["default"].convertToType(data['hasDiscounts'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('discontinued')) {
          obj['discontinued'] = _ApiClient["default"].convertToType(data['discontinued'], 'String');
        }
        if (data.hasOwnProperty('newProduct')) {
          obj['newProduct'] = _ApiClient["default"].convertToType(data['newProduct'], 'String');
        }
        if (data.hasOwnProperty('directShip')) {
          obj['directShip'] = _ApiClient["default"].convertToType(data['directShip'], 'String');
        }
        if (data.hasOwnProperty('hasWarranty')) {
          obj['hasWarranty'] = _ApiClient["default"].convertToType(data['hasWarranty'], 'String');
        }
        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_ProductSearchResponseCatalogInnerLinksInner["default"]]);
        }
        if (data.hasOwnProperty('extraDescription')) {
          obj['extraDescription'] = _ApiClient["default"].convertToType(data['extraDescription'], 'String');
        }
        if (data.hasOwnProperty('replacementSku')) {
          obj['replacementSku'] = _ApiClient["default"].convertToType(data['replacementSku'], 'String');
        }
        if (data.hasOwnProperty('authorizedToPurchase')) {
          obj['authorizedToPurchase'] = _ApiClient["default"].convertToType(data['authorizedToPurchase'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductSearchResponseCatalogInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductSearchResponseCatalogInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
        throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
      }
      // ensure the json data is a string
      if (data['subCategory'] && !(typeof data['subCategory'] === 'string' || data['subCategory'] instanceof String)) {
        throw new Error("Expected the field `subCategory` to be a primitive type in the JSON string but got " + data['subCategory']);
      }
      // ensure the json data is a string
      if (data['productType'] && !(typeof data['productType'] === 'string' || data['productType'] instanceof String)) {
        throw new Error("Expected the field `productType` to be a primitive type in the JSON string but got " + data['productType']);
      }
      // ensure the json data is a string
      if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
      }
      // ensure the json data is a string
      if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
        throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
      }
      // ensure the json data is a string
      if (data['upcCode'] && !(typeof data['upcCode'] === 'string' || data['upcCode'] instanceof String)) {
        throw new Error("Expected the field `upcCode` to be a primitive type in the JSON string but got " + data['upcCode']);
      }
      // ensure the json data is a string
      if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
        throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
      }
      // ensure the json data is a string
      if (data['endUserRequired'] && !(typeof data['endUserRequired'] === 'string' || data['endUserRequired'] instanceof String)) {
        throw new Error("Expected the field `endUserRequired` to be a primitive type in the JSON string but got " + data['endUserRequired']);
      }
      // ensure the json data is a string
      if (data['hasDiscounts'] && !(typeof data['hasDiscounts'] === 'string' || data['hasDiscounts'] instanceof String)) {
        throw new Error("Expected the field `hasDiscounts` to be a primitive type in the JSON string but got " + data['hasDiscounts']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['discontinued'] && !(typeof data['discontinued'] === 'string' || data['discontinued'] instanceof String)) {
        throw new Error("Expected the field `discontinued` to be a primitive type in the JSON string but got " + data['discontinued']);
      }
      // ensure the json data is a string
      if (data['newProduct'] && !(typeof data['newProduct'] === 'string' || data['newProduct'] instanceof String)) {
        throw new Error("Expected the field `newProduct` to be a primitive type in the JSON string but got " + data['newProduct']);
      }
      // ensure the json data is a string
      if (data['directShip'] && !(typeof data['directShip'] === 'string' || data['directShip'] instanceof String)) {
        throw new Error("Expected the field `directShip` to be a primitive type in the JSON string but got " + data['directShip']);
      }
      // ensure the json data is a string
      if (data['hasWarranty'] && !(typeof data['hasWarranty'] === 'string' || data['hasWarranty'] instanceof String)) {
        throw new Error("Expected the field `hasWarranty` to be a primitive type in the JSON string but got " + data['hasWarranty']);
      }
      if (data['links']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['links'])) {
          throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
        }
        // validate the optional field `links` (array)
        var _iterator = _createForOfIteratorHelper(data['links']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _ProductSearchResponseCatalogInnerLinksInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['extraDescription'] && !(typeof data['extraDescription'] === 'string' || data['extraDescription'] instanceof String)) {
        throw new Error("Expected the field `extraDescription` to be a primitive type in the JSON string but got " + data['extraDescription']);
      }
      // ensure the json data is a string
      if (data['replacementSku'] && !(typeof data['replacementSku'] === 'string' || data['replacementSku'] instanceof String)) {
        throw new Error("Expected the field `replacementSku` to be a primitive type in the JSON string but got " + data['replacementSku']);
      }
      // ensure the json data is a string
      if (data['authorizedToPurchase'] && !(typeof data['authorizedToPurchase'] === 'string' || data['authorizedToPurchase'] instanceof String)) {
        throw new Error("Expected the field `authorizedToPurchase` to be a primitive type in the JSON string but got " + data['authorizedToPurchase']);
      }
      return true;
    }
  }]);
  return ProductSearchResponseCatalogInner;
}();
/**
 * The description of the product.
 * @member {String} description
 */
ProductSearchResponseCatalogInner.prototype['description'] = undefined;

/**
 * The category of the product. Example: Displays.
 * @member {String} category
 */
ProductSearchResponseCatalogInner.prototype['category'] = undefined;

/**
 * The sub category for the product. Example: ComputernMonitors.
 * @member {String} subCategory
 */
ProductSearchResponseCatalogInner.prototype['subCategory'] = undefined;

/**
 * The product type of the product. Example: LCD Monitors.
 * @member {String} productType
 */
ProductSearchResponseCatalogInner.prototype['productType'] = undefined;

/**
 * The Unique IngramMicro part number for the product.
 * @member {String} ingramPartNumber
 */
ProductSearchResponseCatalogInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor part number for the product.
 * @member {String} vendorPartNumber
 */
ProductSearchResponseCatalogInner.prototype['vendorPartNumber'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquly assigned to each trade item.
 * @member {String} upcCode
 */
ProductSearchResponseCatalogInner.prototype['upcCode'] = undefined;

/**
 * The name of the vendor/manufacturer of the product.
 * @member {String} vendorName
 */
ProductSearchResponseCatalogInner.prototype['vendorName'] = undefined;

/**
 * Indicates whether the contact information for the end user/customer is required, which determines pricing and discounts.
 * @member {String} endUserRequired
 */
ProductSearchResponseCatalogInner.prototype['endUserRequired'] = undefined;

/**
 * Specifies if there are discounts available for the product.
 * @member {String} hasDiscounts
 */
ProductSearchResponseCatalogInner.prototype['hasDiscounts'] = undefined;

/**
 * The SKU type of product. One of Physical, Digital, or Any.
 * @member {String} type
 */
ProductSearchResponseCatalogInner.prototype['type'] = undefined;

/**
 * Indicates if the product has been discontinued.
 * @member {String} discontinued
 */
ProductSearchResponseCatalogInner.prototype['discontinued'] = undefined;

/**
 * Indicates if the product is new. For digital products, newer than 10 days. For physical products, newer than 150 days.
 * @member {String} newProduct
 */
ProductSearchResponseCatalogInner.prototype['newProduct'] = undefined;

/**
 * Indicates if the product will be shipped directly to the reseller or end user from the vendor/manufacturer.
 * @member {String} directShip
 */
ProductSearchResponseCatalogInner.prototype['directShip'] = undefined;

/**
 * Indicates if the product has a warranty.
 * @member {String} hasWarranty
 */
ProductSearchResponseCatalogInner.prototype['hasWarranty'] = undefined;

/**
 * @member {Array.<module:model/ProductSearchResponseCatalogInnerLinksInner>} links
 */
ProductSearchResponseCatalogInner.prototype['links'] = undefined;

/**
 * The extended description of the product.
 * @member {String} extraDescription
 */
ProductSearchResponseCatalogInner.prototype['extraDescription'] = undefined;

/**
 * Identifies a SKU that is a comparable subsititution of the current SKU if available.
 * @member {String} replacementSku
 */
ProductSearchResponseCatalogInner.prototype['replacementSku'] = undefined;

/**
 * It is true when it exists in matched queries field of ealstic search API.
 * @member {String} authorizedToPurchase
 */
ProductSearchResponseCatalogInner.prototype['authorizedToPurchase'] = undefined;
var _default = exports["default"] = ProductSearchResponseCatalogInner;