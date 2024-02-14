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
 * The InvoiceDetailsv61ResponseSummaryMiscChargesInner model module.
 * @module model/InvoiceDetailsv61ResponseSummaryMiscChargesInner
 * @version 1.0.0
 */
var InvoiceDetailsv61ResponseSummaryMiscChargesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
   * @alias module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner
   */
  function InvoiceDetailsv61ResponseSummaryMiscChargesInner() {
    _classCallCheck(this, InvoiceDetailsv61ResponseSummaryMiscChargesInner);
    InvoiceDetailsv61ResponseSummaryMiscChargesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvoiceDetailsv61ResponseSummaryMiscChargesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryMiscChargesInner} The populated <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceDetailsv61ResponseSummaryMiscChargesInner();
        if (data.hasOwnProperty('chargeDescription')) {
          obj['chargeDescription'] = _ApiClient["default"].convertToType(data['chargeDescription'], 'String');
        }
        if (data.hasOwnProperty('miscChargeLineCount')) {
          obj['miscChargeLineCount'] = _ApiClient["default"].convertToType(data['miscChargeLineCount'], 'Number');
        }
        if (data.hasOwnProperty('miscChargeLineTotal')) {
          obj['miscChargeLineTotal'] = _ApiClient["default"].convertToType(data['miscChargeLineTotal'], 'Number');
        }
        if (data.hasOwnProperty('chargeLineReference')) {
          obj['chargeLineReference'] = _ApiClient["default"].convertToType(data['chargeLineReference'], 'String');
        }
        if (data.hasOwnProperty('isNonMisc')) {
          obj['isNonMisc'] = _ApiClient["default"].convertToType(data['isNonMisc'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryMiscChargesInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['chargeDescription'] && !(typeof data['chargeDescription'] === 'string' || data['chargeDescription'] instanceof String)) {
        throw new Error("Expected the field `chargeDescription` to be a primitive type in the JSON string but got " + data['chargeDescription']);
      }
      // ensure the json data is a string
      if (data['chargeLineReference'] && !(typeof data['chargeLineReference'] === 'string' || data['chargeLineReference'] instanceof String)) {
        throw new Error("Expected the field `chargeLineReference` to be a primitive type in the JSON string but got " + data['chargeLineReference']);
      }
      // ensure the json data is a string
      if (data['isNonMisc'] && !(typeof data['isNonMisc'] === 'string' || data['isNonMisc'] instanceof String)) {
        throw new Error("Expected the field `isNonMisc` to be a primitive type in the JSON string but got " + data['isNonMisc']);
      }
      return true;
    }
  }]);
  return InvoiceDetailsv61ResponseSummaryMiscChargesInner;
}();
/**
 * Description of the charge.
 * @member {String} chargeDescription
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['chargeDescription'] = undefined;

/**
 * The number of lines for which miscellaneous charges are applicable.
 * @member {Number} miscChargeLineCount
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['miscChargeLineCount'] = undefined;

/**
 * Miscellaneous charge amount.
 * @member {Number} miscChargeLineTotal
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['miscChargeLineTotal'] = undefined;

/**
 * Reference of the chargeLine.
 * @member {String} chargeLineReference
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['chargeLineReference'] = undefined;

/**
 * Is charge non miscellaneous.
 * @member {String} isNonMisc
 */
InvoiceDetailsv61ResponseSummaryMiscChargesInner.prototype['isNonMisc'] = undefined;
var _default = exports["default"] = InvoiceDetailsv61ResponseSummaryMiscChargesInner;