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
 * The InvoiceDetailsv61ResponseSummaryForeignFxTotals model module.
 * @module model/InvoiceDetailsv61ResponseSummaryForeignFxTotals
 * @version 1.0.0
 */
var InvoiceDetailsv61ResponseSummaryForeignFxTotals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
   * @alias module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals
   */
  function InvoiceDetailsv61ResponseSummaryForeignFxTotals() {
    _classCallCheck(this, InvoiceDetailsv61ResponseSummaryForeignFxTotals);
    InvoiceDetailsv61ResponseSummaryForeignFxTotals.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvoiceDetailsv61ResponseSummaryForeignFxTotals, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals} The populated <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceDetailsv61ResponseSummaryForeignFxTotals();
        if (data.hasOwnProperty('foreignCurrencyCode')) {
          obj['foreignCurrencyCode'] = _ApiClient["default"].convertToType(data['foreignCurrencyCode'], 'String');
        }
        if (data.hasOwnProperty('foreignCurrencyFxRate')) {
          obj['foreignCurrencyFxRate'] = _ApiClient["default"].convertToType(data['foreignCurrencyFxRate'], 'Number');
        }
        if (data.hasOwnProperty('foreignTotalTaxableAmount')) {
          obj['foreignTotalTaxableAmount'] = _ApiClient["default"].convertToType(data['foreignTotalTaxableAmount'], 'String');
        }
        if (data.hasOwnProperty('foreignTotalTaxAmount')) {
          obj['foreignTotalTaxAmount'] = _ApiClient["default"].convertToType(data['foreignTotalTaxAmount'], 'Number');
        }
        if (data.hasOwnProperty('foreignInvoiceAmountDue')) {
          obj['foreignInvoiceAmountDue'] = _ApiClient["default"].convertToType(data['foreignInvoiceAmountDue'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['foreignCurrencyCode'] && !(typeof data['foreignCurrencyCode'] === 'string' || data['foreignCurrencyCode'] instanceof String)) {
        throw new Error("Expected the field `foreignCurrencyCode` to be a primitive type in the JSON string but got " + data['foreignCurrencyCode']);
      }
      // ensure the json data is a string
      if (data['foreignTotalTaxableAmount'] && !(typeof data['foreignTotalTaxableAmount'] === 'string' || data['foreignTotalTaxableAmount'] instanceof String)) {
        throw new Error("Expected the field `foreignTotalTaxableAmount` to be a primitive type in the JSON string but got " + data['foreignTotalTaxableAmount']);
      }
      // ensure the json data is a string
      if (data['foreignInvoiceAmountDue'] && !(typeof data['foreignInvoiceAmountDue'] === 'string' || data['foreignInvoiceAmountDue'] instanceof String)) {
        throw new Error("Expected the field `foreignInvoiceAmountDue` to be a primitive type in the JSON string but got " + data['foreignInvoiceAmountDue']);
      }
      return true;
    }
  }]);
  return InvoiceDetailsv61ResponseSummaryForeignFxTotals;
}();
/**
 * Foreign Currency Code.
 * @member {String} foreignCurrencyCode
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignCurrencyCode'] = undefined;

/**
 * Foreign rate.
 * @member {Number} foreignCurrencyFxRate
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignCurrencyFxRate'] = undefined;

/**
 * Foreign amount.
 * @member {String} foreignTotalTaxableAmount
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignTotalTaxableAmount'] = undefined;

/**
 * Foreign amount.
 * @member {Number} foreignTotalTaxAmount
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignTotalTaxAmount'] = undefined;

/**
 * Foreign due.
 * @member {String} foreignInvoiceAmountDue
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignInvoiceAmountDue'] = undefined;
var _default = exports["default"] = InvoiceDetailsv61ResponseSummaryForeignFxTotals;