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
 * The OrderModifyResponseLinesInnerShipmentDetails model module.
 * @module model/OrderModifyResponseLinesInnerShipmentDetails
 * @version 1.0.0
 */
var OrderModifyResponseLinesInnerShipmentDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
   * Shipping details for the order provided by the reseller.
   * @alias module:model/OrderModifyResponseLinesInnerShipmentDetails
   */
  function OrderModifyResponseLinesInnerShipmentDetails() {
    _classCallCheck(this, OrderModifyResponseLinesInnerShipmentDetails);
    OrderModifyResponseLinesInnerShipmentDetails.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderModifyResponseLinesInnerShipmentDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderModifyResponseLinesInnerShipmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyResponseLinesInnerShipmentDetails} obj Optional instance to populate.
     * @return {module:model/OrderModifyResponseLinesInnerShipmentDetails} The populated <code>OrderModifyResponseLinesInnerShipmentDetails</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderModifyResponseLinesInnerShipmentDetails();
        if (data.hasOwnProperty('carrierCode')) {
          obj['carrierCode'] = _ApiClient["default"].convertToType(data['carrierCode'], 'String');
        }
        if (data.hasOwnProperty('carrierName')) {
          obj['carrierName'] = _ApiClient["default"].convertToType(data['carrierName'], 'String');
        }
        if (data.hasOwnProperty('freightAccountNumber')) {
          obj['freightAccountNumber'] = _ApiClient["default"].convertToType(data['freightAccountNumber'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyResponseLinesInnerShipmentDetails</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
        throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
      }
      // ensure the json data is a string
      if (data['carrierName'] && !(typeof data['carrierName'] === 'string' || data['carrierName'] instanceof String)) {
        throw new Error("Expected the field `carrierName` to be a primitive type in the JSON string but got " + data['carrierName']);
      }
      // ensure the json data is a string
      if (data['freightAccountNumber'] && !(typeof data['freightAccountNumber'] === 'string' || data['freightAccountNumber'] instanceof String)) {
        throw new Error("Expected the field `freightAccountNumber` to be a primitive type in the JSON string but got " + data['freightAccountNumber']);
      }
      return true;
    }
  }]);
  return OrderModifyResponseLinesInnerShipmentDetails;
}();
/**
 * The carrier code for the shipment containing the line item.
 * @member {String} carrierCode
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['carrierCode'] = undefined;

/**
 * The name of the carrier of the shipment containing the line item.
 * @member {String} carrierName
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['carrierName'] = undefined;

/**
 * The reseller's shipping account number with carrier. Used to bill the shipping carrier directly from the reseller's account with the carrier.
 * @member {String} freightAccountNumber
 */
OrderModifyResponseLinesInnerShipmentDetails.prototype['freightAccountNumber'] = undefined;
var _default = exports["default"] = OrderModifyResponseLinesInnerShipmentDetails;