"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange = _interopRequireDefault(require("./OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange"));
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
 * The OrderDetailB2BLinesInnerEstimatedDatesInnerShip model module.
 * @module model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip
 * @version 1.0.0
 */
var OrderDetailB2BLinesInnerEstimatedDatesInnerShip = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
   * @alias module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip
   */
  function OrderDetailB2BLinesInnerEstimatedDatesInnerShip() {
    _classCallCheck(this, OrderDetailB2BLinesInnerEstimatedDatesInnerShip);
    OrderDetailB2BLinesInnerEstimatedDatesInnerShip.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailB2BLinesInnerEstimatedDatesInnerShip, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} The populated <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailB2BLinesInnerEstimatedDatesInnerShip();
        if (data.hasOwnProperty('shipDateType')) {
          obj['shipDateType'] = _ApiClient["default"].convertToType(data['shipDateType'], 'String');
        }
        if (data.hasOwnProperty('shipDateRange')) {
          obj['shipDateRange'] = _OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange["default"].constructFromObject(data['shipDateRange']);
        }
        if (data.hasOwnProperty('shipSource')) {
          obj['shipSource'] = _ApiClient["default"].convertToType(data['shipSource'], 'String');
        }
        if (data.hasOwnProperty('shipDescription')) {
          obj['shipDescription'] = _ApiClient["default"].convertToType(data['shipDescription'], 'String');
        }
        if (data.hasOwnProperty('shipDate')) {
          obj['shipDate'] = _ApiClient["default"].convertToType(data['shipDate'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['shipDateType'] && !(typeof data['shipDateType'] === 'string' || data['shipDateType'] instanceof String)) {
        throw new Error("Expected the field `shipDateType` to be a primitive type in the JSON string but got " + data['shipDateType']);
      }
      // validate the optional field `shipDateRange`
      if (data['shipDateRange']) {
        // data not null
        _OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange["default"].validateJSON(data['shipDateRange']);
      }
      // ensure the json data is a string
      if (data['shipSource'] && !(typeof data['shipSource'] === 'string' || data['shipSource'] instanceof String)) {
        throw new Error("Expected the field `shipSource` to be a primitive type in the JSON string but got " + data['shipSource']);
      }
      // ensure the json data is a string
      if (data['shipDescription'] && !(typeof data['shipDescription'] === 'string' || data['shipDescription'] instanceof String)) {
        throw new Error("Expected the field `shipDescription` to be a primitive type in the JSON string but got " + data['shipDescription']);
      }
      // ensure the json data is a string
      if (data['shipDate'] && !(typeof data['shipDate'] === 'string' || data['shipDate'] instanceof String)) {
        throw new Error("Expected the field `shipDate` to be a primitive type in the JSON string but got " + data['shipDate']);
      }
      return true;
    }
  }]);
  return OrderDetailB2BLinesInnerEstimatedDatesInnerShip;
}();
/**
 * Date type. Example Single or multiple dates.
 * @member {String} shipDateType
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDateType'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange} shipDateRange
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDateRange'] = undefined;

/**
 * Source of the shipment.
 * @member {String} shipSource
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipSource'] = undefined;

/**
 * Shipment description.
 * @member {String} shipDescription
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDescription'] = undefined;

/**
 * Ship date.
 * @member {String} shipDate
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDate'] = undefined;
var _default = exports["default"] = OrderDetailB2BLinesInnerEstimatedDatesInnerShip;