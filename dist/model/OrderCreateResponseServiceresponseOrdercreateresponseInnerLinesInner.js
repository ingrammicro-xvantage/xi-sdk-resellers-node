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
 * The OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner model module.
 * @module model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner
 * @version 1.0.0
 */
var OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner</code>.
   * @alias module:model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner
   */
  function OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner() {
    _classCallCheck(this, OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner);
    OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner} The populated <code>OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner();
        if (data.hasOwnProperty('linetype')) {
          obj['linetype'] = _ApiClient["default"].convertToType(data['linetype'], 'String');
        }
        if (data.hasOwnProperty('globallinenumber')) {
          obj['globallinenumber'] = _ApiClient["default"].convertToType(data['globallinenumber'], 'String');
        }
        if (data.hasOwnProperty('partnumber')) {
          obj['partnumber'] = _ApiClient["default"].convertToType(data['partnumber'], 'String');
        }
        if (data.hasOwnProperty('globalskuid')) {
          obj['globalskuid'] = _ApiClient["default"].convertToType(data['globalskuid'], 'String');
        }
        if (data.hasOwnProperty('linenumber')) {
          obj['linenumber'] = _ApiClient["default"].convertToType(data['linenumber'], 'String');
        }
        if (data.hasOwnProperty('carriercode')) {
          obj['carriercode'] = _ApiClient["default"].convertToType(data['carriercode'], 'String');
        }
        if (data.hasOwnProperty('carrierdescription')) {
          obj['carrierdescription'] = _ApiClient["default"].convertToType(data['carrierdescription'], 'String');
        }
        if (data.hasOwnProperty('requestedunitprice')) {
          obj['requestedunitprice'] = _ApiClient["default"].convertToType(data['requestedunitprice'], 'Number');
        }
        if (data.hasOwnProperty('requestedquantity')) {
          obj['requestedquantity'] = _ApiClient["default"].convertToType(data['requestedquantity'], 'Number');
        }
        if (data.hasOwnProperty('confirmedquantity')) {
          obj['confirmedquantity'] = _ApiClient["default"].convertToType(data['confirmedquantity'], 'Number');
        }
        if (data.hasOwnProperty('backorderedquantity')) {
          obj['backorderedquantity'] = _ApiClient["default"].convertToType(data['backorderedquantity'], 'Number');
        }
        if (data.hasOwnProperty('unitproductprice')) {
          obj['unitproductprice'] = _ApiClient["default"].convertToType(data['unitproductprice'], 'Number');
        }
        if (data.hasOwnProperty('netamount')) {
          obj['netamount'] = _ApiClient["default"].convertToType(data['netamount'], 'Number');
        }
        if (data.hasOwnProperty('warehouseid')) {
          obj['warehouseid'] = _ApiClient["default"].convertToType(data['warehouseid'], 'String');
        }
        if (data.hasOwnProperty('ordersuffix')) {
          obj['ordersuffix'] = _ApiClient["default"].convertToType(data['ordersuffix'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['linetype'] && !(typeof data['linetype'] === 'string' || data['linetype'] instanceof String)) {
        throw new Error("Expected the field `linetype` to be a primitive type in the JSON string but got " + data['linetype']);
      }
      // ensure the json data is a string
      if (data['globallinenumber'] && !(typeof data['globallinenumber'] === 'string' || data['globallinenumber'] instanceof String)) {
        throw new Error("Expected the field `globallinenumber` to be a primitive type in the JSON string but got " + data['globallinenumber']);
      }
      // ensure the json data is a string
      if (data['partnumber'] && !(typeof data['partnumber'] === 'string' || data['partnumber'] instanceof String)) {
        throw new Error("Expected the field `partnumber` to be a primitive type in the JSON string but got " + data['partnumber']);
      }
      // ensure the json data is a string
      if (data['globalskuid'] && !(typeof data['globalskuid'] === 'string' || data['globalskuid'] instanceof String)) {
        throw new Error("Expected the field `globalskuid` to be a primitive type in the JSON string but got " + data['globalskuid']);
      }
      // ensure the json data is a string
      if (data['linenumber'] && !(typeof data['linenumber'] === 'string' || data['linenumber'] instanceof String)) {
        throw new Error("Expected the field `linenumber` to be a primitive type in the JSON string but got " + data['linenumber']);
      }
      // ensure the json data is a string
      if (data['carriercode'] && !(typeof data['carriercode'] === 'string' || data['carriercode'] instanceof String)) {
        throw new Error("Expected the field `carriercode` to be a primitive type in the JSON string but got " + data['carriercode']);
      }
      // ensure the json data is a string
      if (data['carrierdescription'] && !(typeof data['carrierdescription'] === 'string' || data['carrierdescription'] instanceof String)) {
        throw new Error("Expected the field `carrierdescription` to be a primitive type in the JSON string but got " + data['carrierdescription']);
      }
      // ensure the json data is a string
      if (data['warehouseid'] && !(typeof data['warehouseid'] === 'string' || data['warehouseid'] instanceof String)) {
        throw new Error("Expected the field `warehouseid` to be a primitive type in the JSON string but got " + data['warehouseid']);
      }
      // ensure the json data is a string
      if (data['ordersuffix'] && !(typeof data['ordersuffix'] === 'string' || data['ordersuffix'] instanceof String)) {
        throw new Error("Expected the field `ordersuffix` to be a primitive type in the JSON string but got " + data['ordersuffix']);
      }
      return true;
    }
  }]);
  return OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner;
}();
/**
 * “P”-Line or SKU Number “C”-Comment Line
 * @member {String} linetype
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['linetype'] = undefined;

/**
 * Ingram generated line number
 * @member {String} globallinenumber
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['globallinenumber'] = undefined;

/**
 * Ingram Micro Sku Number
 * @member {String} partnumber
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['partnumber'] = undefined;

/**
 * @member {String} globalskuid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['globalskuid'] = undefined;

/**
 * @member {String} linenumber
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['linenumber'] = undefined;

/**
 * Transportation 2 digit codes
 * @member {String} carriercode
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['carriercode'] = undefined;

/**
 * Transportation Carrier Name
 * @member {String} carrierdescription
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['carrierdescription'] = undefined;

/**
 * Price requested by reseller. Price Variance can be set up by Ingram Micro Sales Rep
 * @member {Number} requestedunitprice
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['requestedunitprice'] = undefined;

/**
 * Quanity Requested
 * @member {Number} requestedquantity
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['requestedquantity'] = undefined;

/**
 * Quanity Shipped
 * @member {Number} confirmedquantity
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['confirmedquantity'] = undefined;

/**
 * Quanity of units that didn’t ship
 * @member {Number} backorderedquantity
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['backorderedquantity'] = undefined;

/**
 * Price Per Unit
 * @member {Number} unitproductprice
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['unitproductprice'] = undefined;

/**
 * Total amount. Quantity X Unit Price
 * @member {Number} netamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['netamount'] = undefined;

/**
 * @member {String} warehouseid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['warehouseid'] = undefined;

/**
 * Use order suffix with the globalorderid for this line item.
 * @member {String} ordersuffix
 */
OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.prototype['ordersuffix'] = undefined;
var _default = exports["default"] = OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner;