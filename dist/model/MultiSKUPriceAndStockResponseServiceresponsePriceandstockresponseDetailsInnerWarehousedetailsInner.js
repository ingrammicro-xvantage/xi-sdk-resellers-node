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
 * XI SDK Resellers
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
 * The MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner model module.
 * @module model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner
 * @version 1.0.0
 */
var MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner</code>.
   * @alias module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner
   */
  function MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner() {
    _classCallCheck(this, MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner);
    MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner} The populated <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner();
        if (data.hasOwnProperty('warehouseid')) {
          obj['warehouseid'] = _ApiClient["default"].convertToType(data['warehouseid'], 'String');
        }
        if (data.hasOwnProperty('warehousedescription')) {
          obj['warehousedescription'] = _ApiClient["default"].convertToType(data['warehousedescription'], 'String');
        }
        if (data.hasOwnProperty('availablequantity')) {
          obj['availablequantity'] = _ApiClient["default"].convertToType(data['availablequantity'], 'Number');
        }
        if (data.hasOwnProperty('onorderquantity')) {
          obj['onorderquantity'] = _ApiClient["default"].convertToType(data['onorderquantity'], 'Number');
        }
        if (data.hasOwnProperty('onholdquantity')) {
          obj['onholdquantity'] = _ApiClient["default"].convertToType(data['onholdquantity'], 'String');
        }
        if (data.hasOwnProperty('etadate')) {
          obj['etadate'] = _ApiClient["default"].convertToType(data['etadate'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['warehouseid'] && !(typeof data['warehouseid'] === 'string' || data['warehouseid'] instanceof String)) {
        throw new Error("Expected the field `warehouseid` to be a primitive type in the JSON string but got " + data['warehouseid']);
      }
      // ensure the json data is a string
      if (data['warehousedescription'] && !(typeof data['warehousedescription'] === 'string' || data['warehousedescription'] instanceof String)) {
        throw new Error("Expected the field `warehousedescription` to be a primitive type in the JSON string but got " + data['warehousedescription']);
      }
      // ensure the json data is a string
      if (data['onholdquantity'] && !(typeof data['onholdquantity'] === 'string' || data['onholdquantity'] instanceof String)) {
        throw new Error("Expected the field `onholdquantity` to be a primitive type in the JSON string but got " + data['onholdquantity']);
      }
      // ensure the json data is a string
      if (data['etadate'] && !(typeof data['etadate'] === 'string' || data['etadate'] instanceof String)) {
        throw new Error("Expected the field `etadate` to be a primitive type in the JSON string but got " + data['etadate']);
      }
      return true;
    }
  }]);
  return MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner;
}();
/**
 * Unique 2-digit code of the Ingram Micro warehouse
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.WarehouseidEnum} warehouseid
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['warehouseid'] = undefined;

/**
 * City of the Ingram Micro warehouse location
 * @member {String} warehousedescription
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['warehousedescription'] = undefined;

/**
 * On hand available quantity
 * @member {Number} availablequantity
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['availablequantity'] = undefined;

/**
 * On Order quantity
 * @member {Number} onorderquantity
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['onorderquantity'] = undefined;

/**
 * @member {String} onholdquantity
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['onholdquantity'] = undefined;

/**
 * @member {String} etadate
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.prototype['etadate'] = undefined;

/**
 * Allowed values for the <code>warehouseid</code> property.
 * @enum {String}
 * @readonly
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner['WarehouseidEnum'] = {
  /**
   * value: "10-Mira Loma CA"
   * @const
   */
  "10-Mira Loma CA": "10-Mira Loma CA",
  /**
   * value: "20-Carrollton TX"
   * @const
   */
  "20-Carrollton TX": "20-Carrollton TX",
  /**
   * value: "30-Millington TN"
   * @const
   */
  "30-Millington TN": "30-Millington TN",
  /**
   * value: "40-Carol Stream IL"
   * @const
   */
  "40-Carol Stream IL": "40-Carol Stream IL",
  /**
   * value: "80-Jonestown PA"
   * @const
   */
  "80-Jonestown PA": "80-Jonestown PA"
};
var _default = exports["default"] = MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner;