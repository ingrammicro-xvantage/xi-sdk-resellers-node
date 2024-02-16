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
 * The InvoiceDetailsv61ResponseSummaryTotals model module.
 * @module model/InvoiceDetailsv61ResponseSummaryTotals
 * @version 1.0.0
 */
var InvoiceDetailsv61ResponseSummaryTotals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
   * @alias module:model/InvoiceDetailsv61ResponseSummaryTotals
   */
  function InvoiceDetailsv61ResponseSummaryTotals() {
    _classCallCheck(this, InvoiceDetailsv61ResponseSummaryTotals);
    InvoiceDetailsv61ResponseSummaryTotals.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvoiceDetailsv61ResponseSummaryTotals, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryTotals} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryTotals} The populated <code>InvoiceDetailsv61ResponseSummaryTotals</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceDetailsv61ResponseSummaryTotals();
        if (data.hasOwnProperty('netInvoiceAmount')) {
          obj['netInvoiceAmount'] = _ApiClient["default"].convertToType(data['netInvoiceAmount'], 'Number');
        }
        if (data.hasOwnProperty('discountAmount')) {
          obj['discountAmount'] = _ApiClient["default"].convertToType(data['discountAmount'], 'Number');
        }
        if (data.hasOwnProperty('discountType')) {
          obj['discountType'] = _ApiClient["default"].convertToType(data['discountType'], 'String');
        }
        if (data.hasOwnProperty('totalTaxAmount')) {
          obj['totalTaxAmount'] = _ApiClient["default"].convertToType(data['totalTaxAmount'], 'Number');
        }
        if (data.hasOwnProperty('invoicedAmountDue')) {
          obj['invoicedAmountDue'] = _ApiClient["default"].convertToType(data['invoicedAmountDue'], 'Number');
        }
        if (data.hasOwnProperty('freightAmount')) {
          obj['freightAmount'] = _ApiClient["default"].convertToType(data['freightAmount'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryTotals</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['discountType'] && !(typeof data['discountType'] === 'string' || data['discountType'] instanceof String)) {
        throw new Error("Expected the field `discountType` to be a primitive type in the JSON string but got " + data['discountType']);
      }
      return true;
    }
  }]);
  return InvoiceDetailsv61ResponseSummaryTotals;
}();
/**
 * Net Invoice amount.
 * @member {Number} netInvoiceAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['netInvoiceAmount'] = undefined;

/**
 * Discount amount.
 * @member {Number} discountAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['discountAmount'] = undefined;

/**
 * Type of discount.
 * @member {String} discountType
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['discountType'] = undefined;

/**
 * Total Tax amount.
 * @member {Number} totalTaxAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['totalTaxAmount'] = undefined;

/**
 * Total amount due for the invoice.
 * @member {Number} invoicedAmountDue
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['invoicedAmountDue'] = undefined;

/**
 * Freight amount
 * @member {Number} freightAmount
 */
InvoiceDetailsv61ResponseSummaryTotals.prototype['freightAmount'] = undefined;
var _default = exports["default"] = InvoiceDetailsv61ResponseSummaryTotals;