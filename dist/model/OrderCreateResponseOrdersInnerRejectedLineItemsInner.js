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
 * The OrderCreateResponseOrdersInnerRejectedLineItemsInner model module.
 * @module model/OrderCreateResponseOrdersInnerRejectedLineItemsInner
 * @version 1.0.0
 */
var OrderCreateResponseOrdersInnerRejectedLineItemsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
   * @alias module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner
   */
  function OrderCreateResponseOrdersInnerRejectedLineItemsInner() {
    _classCallCheck(this, OrderCreateResponseOrdersInnerRejectedLineItemsInner);
    OrderCreateResponseOrdersInnerRejectedLineItemsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateResponseOrdersInnerRejectedLineItemsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner} The populated <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateResponseOrdersInnerRejectedLineItemsInner();
        if (data.hasOwnProperty('customerLinenumber')) {
          obj['customerLinenumber'] = _ApiClient["default"].convertToType(data['customerLinenumber'], 'String');
        }
        if (data.hasOwnProperty('ingramPartNumber')) {
          obj['ingramPartNumber'] = _ApiClient["default"].convertToType(data['ingramPartNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorPartNumber')) {
          obj['vendorPartNumber'] = _ApiClient["default"].convertToType(data['vendorPartNumber'], 'String');
        }
        if (data.hasOwnProperty('quantityOrdered')) {
          obj['quantityOrdered'] = _ApiClient["default"].convertToType(data['quantityOrdered'], 'Number');
        }
        if (data.hasOwnProperty('rejectCode')) {
          obj['rejectCode'] = _ApiClient["default"].convertToType(data['rejectCode'], 'String');
        }
        if (data.hasOwnProperty('rejectReason')) {
          obj['rejectReason'] = _ApiClient["default"].convertToType(data['rejectReason'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerRejectedLineItemsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['customerLinenumber'] && !(typeof data['customerLinenumber'] === 'string' || data['customerLinenumber'] instanceof String)) {
        throw new Error("Expected the field `customerLinenumber` to be a primitive type in the JSON string but got " + data['customerLinenumber']);
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
      if (data['rejectCode'] && !(typeof data['rejectCode'] === 'string' || data['rejectCode'] instanceof String)) {
        throw new Error("Expected the field `rejectCode` to be a primitive type in the JSON string but got " + data['rejectCode']);
      }
      // ensure the json data is a string
      if (data['rejectReason'] && !(typeof data['rejectReason'] === 'string' || data['rejectReason'] instanceof String)) {
        throw new Error("Expected the field `rejectReason` to be a primitive type in the JSON string but got " + data['rejectReason']);
      }
      return true;
    }
  }]);
  return OrderCreateResponseOrdersInnerRejectedLineItemsInner;
}();
/**
 * The reseller's line item number of the rejected item for their reference. Number
 * @member {String} customerLinenumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['customerLinenumber'] = undefined;

/**
 * The Ingram Micro part number for the rejected line item.
 * @member {String} ingramPartNumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor part number for the rejected line item.
 * @member {String} vendorPartNumber
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The quantity ordered of the rejected line item.
 * @member {Number} quantityOrdered
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['quantityOrdered'] = undefined;

/**
 * The rejection code for the rejected line item. Ex: 'EN' 
 * @member {String} rejectCode
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['rejectCode'] = undefined;

/**
 * The rejection reason for the rejected line item. Ex: 'SKU-NOTFOUND    DF41281' 
 * @member {String} rejectReason
 */
OrderCreateResponseOrdersInnerRejectedLineItemsInner.prototype['rejectReason'] = undefined;
var _default = exports["default"] = OrderCreateResponseOrdersInnerRejectedLineItemsInner;