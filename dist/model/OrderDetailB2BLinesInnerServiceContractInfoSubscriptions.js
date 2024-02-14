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
 * The OrderDetailB2BLinesInnerServiceContractInfoSubscriptions model module.
 * @module model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions
 * @version 1.0.0
 */
var OrderDetailB2BLinesInnerServiceContractInfoSubscriptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
   * @alias module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions
   */
  function OrderDetailB2BLinesInnerServiceContractInfoSubscriptions() {
    _classCallCheck(this, OrderDetailB2BLinesInnerServiceContractInfoSubscriptions);
    OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailB2BLinesInnerServiceContractInfoSubscriptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions} The populated <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
        if (data.hasOwnProperty('subscriptionId')) {
          obj['subscriptionId'] = _ApiClient["default"].convertToType(data['subscriptionId'], 'String');
        }
        if (data.hasOwnProperty('subscriptionTerm')) {
          obj['subscriptionTerm'] = _ApiClient["default"].convertToType(data['subscriptionTerm'], 'String');
        }
        if (data.hasOwnProperty('renewalTerm')) {
          obj['renewalTerm'] = _ApiClient["default"].convertToType(data['renewalTerm'], 'String');
        }
        if (data.hasOwnProperty('billingModel')) {
          obj['billingModel'] = _ApiClient["default"].convertToType(data['billingModel'], 'String');
        }
        if (data.hasOwnProperty('subcriptionStartDate')) {
          obj['subcriptionStartDate'] = _ApiClient["default"].convertToType(data['subcriptionStartDate'], 'String');
        }
        if (data.hasOwnProperty('subcriptionEndDate')) {
          obj['subcriptionEndDate'] = _ApiClient["default"].convertToType(data['subcriptionEndDate'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerServiceContractInfoSubscriptions</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['subscriptionId'] && !(typeof data['subscriptionId'] === 'string' || data['subscriptionId'] instanceof String)) {
        throw new Error("Expected the field `subscriptionId` to be a primitive type in the JSON string but got " + data['subscriptionId']);
      }
      // ensure the json data is a string
      if (data['subscriptionTerm'] && !(typeof data['subscriptionTerm'] === 'string' || data['subscriptionTerm'] instanceof String)) {
        throw new Error("Expected the field `subscriptionTerm` to be a primitive type in the JSON string but got " + data['subscriptionTerm']);
      }
      // ensure the json data is a string
      if (data['renewalTerm'] && !(typeof data['renewalTerm'] === 'string' || data['renewalTerm'] instanceof String)) {
        throw new Error("Expected the field `renewalTerm` to be a primitive type in the JSON string but got " + data['renewalTerm']);
      }
      // ensure the json data is a string
      if (data['billingModel'] && !(typeof data['billingModel'] === 'string' || data['billingModel'] instanceof String)) {
        throw new Error("Expected the field `billingModel` to be a primitive type in the JSON string but got " + data['billingModel']);
      }
      // ensure the json data is a string
      if (data['subcriptionStartDate'] && !(typeof data['subcriptionStartDate'] === 'string' || data['subcriptionStartDate'] instanceof String)) {
        throw new Error("Expected the field `subcriptionStartDate` to be a primitive type in the JSON string but got " + data['subcriptionStartDate']);
      }
      // ensure the json data is a string
      if (data['subcriptionEndDate'] && !(typeof data['subcriptionEndDate'] === 'string' || data['subcriptionEndDate'] instanceof String)) {
        throw new Error("Expected the field `subcriptionEndDate` to be a primitive type in the JSON string but got " + data['subcriptionEndDate']);
      }
      return true;
    }
  }]);
  return OrderDetailB2BLinesInnerServiceContractInfoSubscriptions;
}();
/**
 * The ID of the subscription.
 * @member {String} subscriptionId
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subscriptionId'] = undefined;

/**
 * The term of the subscription.
 * @member {String} subscriptionTerm
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subscriptionTerm'] = undefined;

/**
 * The renewal term of the subscription.
 * @member {String} renewalTerm
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['renewalTerm'] = undefined;

/**
 * The billing model of the billing.
 * @member {String} billingModel
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['billingModel'] = undefined;

/**
 * Start date of the subcription.
 * @member {String} subcriptionStartDate
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subcriptionStartDate'] = undefined;

/**
 * End date of the subcription.
 * @member {String} subcriptionEndDate
 */
OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.prototype['subcriptionEndDate'] = undefined;
var _default = exports["default"] = OrderDetailB2BLinesInnerServiceContractInfoSubscriptions;