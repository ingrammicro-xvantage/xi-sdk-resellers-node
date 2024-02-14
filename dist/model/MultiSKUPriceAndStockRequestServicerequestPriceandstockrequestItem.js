"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem model module.
 * @module model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem
 * @version 1.0.0
 */
var MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
   * @alias module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem
   */
  function MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem() {
    _classCallCheck(this, MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem);
    MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem} The populated <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem();
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('ingrampartnumber')) {
          obj['ingrampartnumber'] = _ApiClient["default"].convertToType(data['ingrampartnumber'], 'String');
        }
        if (data.hasOwnProperty('vendorpartnumber')) {
          obj['vendorpartnumber'] = _ApiClient["default"].convertToType(data['vendorpartnumber'], 'String');
        }
        if (data.hasOwnProperty('UPC')) {
          obj['UPC'] = _ApiClient["default"].convertToType(data['UPC'], 'String');
        }
        if (data.hasOwnProperty('customerpartnumber')) {
          obj['customerpartnumber'] = _ApiClient["default"].convertToType(data['customerpartnumber'], 'String');
        }
        if (data.hasOwnProperty('warehouseidlist')) {
          obj['warehouseidlist'] = _ApiClient["default"].convertToType(data['warehouseidlist'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['ingrampartnumber'] && !(typeof data['ingrampartnumber'] === 'string' || data['ingrampartnumber'] instanceof String)) {
        throw new Error("Expected the field `ingrampartnumber` to be a primitive type in the JSON string but got " + data['ingrampartnumber']);
      }
      // ensure the json data is a string
      if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
        throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
      }
      // ensure the json data is a string
      if (data['UPC'] && !(typeof data['UPC'] === 'string' || data['UPC'] instanceof String)) {
        throw new Error("Expected the field `UPC` to be a primitive type in the JSON string but got " + data['UPC']);
      }
      // ensure the json data is a string
      if (data['customerpartnumber'] && !(typeof data['customerpartnumber'] === 'string' || data['customerpartnumber'] instanceof String)) {
        throw new Error("Expected the field `customerpartnumber` to be a primitive type in the JSON string but got " + data['customerpartnumber']);
      }
      // ensure the json data is a string
      if (data['warehouseidlist'] && !(typeof data['warehouseidlist'] === 'string' || data['warehouseidlist'] instanceof String)) {
        throw new Error("Expected the field `warehouseidlist` to be a primitive type in the JSON string but got " + data['warehouseidlist']);
      }
      return true;
    }
  }]);
  return MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem;
}();
/**
 * @member {Number} index
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['index'] = undefined;

/**
 * Ingram Micro system specific SKU number for the product for which the price is requested at Ingram Micro
 * @member {String} ingrampartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['ingrampartnumber'] = undefined;

/**
 * Vendor Part Number for the product for which the price is requested at Ingram Micro
 * @member {String} vendorpartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['vendorpartnumber'] = undefined;

/**
 * Universal Product code for the product for which the price is requested at Ingram Micro
 * @member {String} UPC
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['UPC'] = undefined;

/**
 * Unique identification number of customer. For this option the Ingram Micro Sales rep must set up a cross reference table. 
 * @member {String} customerpartnumber
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['customerpartnumber'] = undefined;

/**
 * Unique identity for Ingram Micro warehouses against which stock details are returned.
 * @member {String} warehouseidlist
 */
MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem.prototype['warehouseidlist'] = undefined;
var _default = exports["default"] = MultiSKUPriceAndStockRequestServicerequestPriceandstockrequestItem;