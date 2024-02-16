"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery = _interopRequireDefault(require("./OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery"));
var _OrderDetailB2BLinesInnerEstimatedDatesInnerShip = _interopRequireDefault(require("./OrderDetailB2BLinesInnerEstimatedDatesInnerShip"));
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
 * The OrderDetailB2BLinesInnerEstimatedDatesInner model module.
 * @module model/OrderDetailB2BLinesInnerEstimatedDatesInner
 * @version 1.0.0
 */
var OrderDetailB2BLinesInnerEstimatedDatesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
   * @alias module:model/OrderDetailB2BLinesInnerEstimatedDatesInner
   */
  function OrderDetailB2BLinesInnerEstimatedDatesInner() {
    _classCallCheck(this, OrderDetailB2BLinesInnerEstimatedDatesInner);
    OrderDetailB2BLinesInnerEstimatedDatesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailB2BLinesInnerEstimatedDatesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerEstimatedDatesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerEstimatedDatesInner} The populated <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailB2BLinesInnerEstimatedDatesInner();
        if (data.hasOwnProperty('ship')) {
          obj['ship'] = _OrderDetailB2BLinesInnerEstimatedDatesInnerShip["default"].constructFromObject(data['ship']);
        }
        if (data.hasOwnProperty('delivery')) {
          obj['delivery'] = _OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery["default"].constructFromObject(data['delivery']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `ship`
      if (data['ship']) {
        // data not null
        _OrderDetailB2BLinesInnerEstimatedDatesInnerShip["default"].validateJSON(data['ship']);
      }
      // validate the optional field `delivery`
      if (data['delivery']) {
        // data not null
        _OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery["default"].validateJSON(data['delivery']);
      }
      return true;
    }
  }]);
  return OrderDetailB2BLinesInnerEstimatedDatesInner;
}();
/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} ship
 */
OrderDetailB2BLinesInnerEstimatedDatesInner.prototype['ship'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery} delivery
 */
OrderDetailB2BLinesInnerEstimatedDatesInner.prototype['delivery'] = undefined;
var _default = exports["default"] = OrderDetailB2BLinesInnerEstimatedDatesInner;