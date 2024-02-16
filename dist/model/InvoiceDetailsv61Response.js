"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _InvoiceDetailsv61ResponseBillToInfo = _interopRequireDefault(require("./InvoiceDetailsv61ResponseBillToInfo"));
var _InvoiceDetailsv61ResponseFxRateInfo = _interopRequireDefault(require("./InvoiceDetailsv61ResponseFxRateInfo"));
var _InvoiceDetailsv61ResponseLinesInner = _interopRequireDefault(require("./InvoiceDetailsv61ResponseLinesInner"));
var _InvoiceDetailsv61ResponsePaymentTermsInfo = _interopRequireDefault(require("./InvoiceDetailsv61ResponsePaymentTermsInfo"));
var _InvoiceDetailsv61ResponseShipToInfo = _interopRequireDefault(require("./InvoiceDetailsv61ResponseShipToInfo"));
var _InvoiceDetailsv61ResponseSummary = _interopRequireDefault(require("./InvoiceDetailsv61ResponseSummary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * The InvoiceDetailsv61Response model module.
 * @module model/InvoiceDetailsv61Response
 * @version 1.0.0
 */
var InvoiceDetailsv61Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceDetailsv61Response</code>.
   * @alias module:model/InvoiceDetailsv61Response
   */
  function InvoiceDetailsv61Response() {
    _classCallCheck(this, InvoiceDetailsv61Response);
    InvoiceDetailsv61Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvoiceDetailsv61Response, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InvoiceDetailsv61Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61Response} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61Response} The populated <code>InvoiceDetailsv61Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceDetailsv61Response();
        if (data.hasOwnProperty('invoiceNumber')) {
          obj['invoiceNumber'] = _ApiClient["default"].convertToType(data['invoiceNumber'], 'String');
        }
        if (data.hasOwnProperty('invoiceStatus')) {
          obj['invoiceStatus'] = _ApiClient["default"].convertToType(data['invoiceStatus'], 'String');
        }
        if (data.hasOwnProperty('invoiceDate')) {
          obj['invoiceDate'] = _ApiClient["default"].convertToType(data['invoiceDate'], 'Date');
        }
        if (data.hasOwnProperty('customerOrderNumber')) {
          obj['customerOrderNumber'] = _ApiClient["default"].convertToType(data['customerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('endCustomerOrderNumber')) {
          obj['endCustomerOrderNumber'] = _ApiClient["default"].convertToType(data['endCustomerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('OrderDate')) {
          obj['OrderDate'] = _ApiClient["default"].convertToType(data['OrderDate'], 'Date');
        }
        if (data.hasOwnProperty('billToID')) {
          obj['billToID'] = _ApiClient["default"].convertToType(data['billToID'], 'String');
        }
        if (data.hasOwnProperty('invoiceType')) {
          obj['invoiceType'] = _ApiClient["default"].convertToType(data['invoiceType'], 'String');
        }
        if (data.hasOwnProperty('invoiceDueDate')) {
          obj['invoiceDueDate'] = _ApiClient["default"].convertToType(data['invoiceDueDate'], 'String');
        }
        if (data.hasOwnProperty('customerCountryCode')) {
          obj['customerCountryCode'] = _ApiClient["default"].convertToType(data['customerCountryCode'], 'String');
        }
        if (data.hasOwnProperty('customerNumber')) {
          obj['customerNumber'] = _ApiClient["default"].convertToType(data['customerNumber'], 'String');
        }
        if (data.hasOwnProperty('ingramOrderNumber')) {
          obj['ingramOrderNumber'] = _ApiClient["default"].convertToType(data['ingramOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('paymentTermsInfo')) {
          obj['paymentTermsInfo'] = _InvoiceDetailsv61ResponsePaymentTermsInfo["default"].constructFromObject(data['paymentTermsInfo']);
        }
        if (data.hasOwnProperty('billToInfo')) {
          obj['billToInfo'] = _InvoiceDetailsv61ResponseBillToInfo["default"].constructFromObject(data['billToInfo']);
        }
        if (data.hasOwnProperty('shipToInfo')) {
          obj['shipToInfo'] = _InvoiceDetailsv61ResponseShipToInfo["default"].constructFromObject(data['shipToInfo']);
        }
        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_InvoiceDetailsv61ResponseLinesInner["default"]]);
        }
        if (data.hasOwnProperty('fxRateInfo')) {
          obj['fxRateInfo'] = _InvoiceDetailsv61ResponseFxRateInfo["default"].constructFromObject(data['fxRateInfo']);
        }
        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _InvoiceDetailsv61ResponseSummary["default"].constructFromObject(data['summary']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61Response</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
        throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
      }
      // ensure the json data is a string
      if (data['invoiceStatus'] && !(typeof data['invoiceStatus'] === 'string' || data['invoiceStatus'] instanceof String)) {
        throw new Error("Expected the field `invoiceStatus` to be a primitive type in the JSON string but got " + data['invoiceStatus']);
      }
      // ensure the json data is a string
      if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['billToID'] && !(typeof data['billToID'] === 'string' || data['billToID'] instanceof String)) {
        throw new Error("Expected the field `billToID` to be a primitive type in the JSON string but got " + data['billToID']);
      }
      // ensure the json data is a string
      if (data['invoiceType'] && !(typeof data['invoiceType'] === 'string' || data['invoiceType'] instanceof String)) {
        throw new Error("Expected the field `invoiceType` to be a primitive type in the JSON string but got " + data['invoiceType']);
      }
      // ensure the json data is a string
      if (data['invoiceDueDate'] && !(typeof data['invoiceDueDate'] === 'string' || data['invoiceDueDate'] instanceof String)) {
        throw new Error("Expected the field `invoiceDueDate` to be a primitive type in the JSON string but got " + data['invoiceDueDate']);
      }
      // ensure the json data is a string
      if (data['customerCountryCode'] && !(typeof data['customerCountryCode'] === 'string' || data['customerCountryCode'] instanceof String)) {
        throw new Error("Expected the field `customerCountryCode` to be a primitive type in the JSON string but got " + data['customerCountryCode']);
      }
      // ensure the json data is a string
      if (data['customerNumber'] && !(typeof data['customerNumber'] === 'string' || data['customerNumber'] instanceof String)) {
        throw new Error("Expected the field `customerNumber` to be a primitive type in the JSON string but got " + data['customerNumber']);
      }
      // ensure the json data is a string
      if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      // validate the optional field `paymentTermsInfo`
      if (data['paymentTermsInfo']) {
        // data not null
        _InvoiceDetailsv61ResponsePaymentTermsInfo["default"].validateJSON(data['paymentTermsInfo']);
      }
      // validate the optional field `billToInfo`
      if (data['billToInfo']) {
        // data not null
        _InvoiceDetailsv61ResponseBillToInfo["default"].validateJSON(data['billToInfo']);
      }
      // validate the optional field `shipToInfo`
      if (data['shipToInfo']) {
        // data not null
        _InvoiceDetailsv61ResponseShipToInfo["default"].validateJSON(data['shipToInfo']);
      }
      if (data['lines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
          throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }
        // validate the optional field `lines` (array)
        var _iterator = _createForOfIteratorHelper(data['lines']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _InvoiceDetailsv61ResponseLinesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // validate the optional field `fxRateInfo`
      if (data['fxRateInfo']) {
        // data not null
        _InvoiceDetailsv61ResponseFxRateInfo["default"].validateJSON(data['fxRateInfo']);
      }
      // validate the optional field `summary`
      if (data['summary']) {
        // data not null
        _InvoiceDetailsv61ResponseSummary["default"].validateJSON(data['summary']);
      }
      return true;
    }
  }]);
  return InvoiceDetailsv61Response;
}();
/**
 * The Invoice number for the order.
 * @member {String} invoiceNumber
 */
InvoiceDetailsv61Response.prototype['invoiceNumber'] = undefined;

/**
 * Status of the invoice.
 * @member {String} invoiceStatus
 */
InvoiceDetailsv61Response.prototype['invoiceStatus'] = undefined;

/**
 * Date of an Invoice.
 * @member {Date} invoiceDate
 */
InvoiceDetailsv61Response.prototype['invoiceDate'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
InvoiceDetailsv61Response.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} endCustomerOrderNumber
 */
InvoiceDetailsv61Response.prototype['endCustomerOrderNumber'] = undefined;

/**
 * The date and time in UTC format that the order was created.
 * @member {Date} OrderDate
 */
InvoiceDetailsv61Response.prototype['OrderDate'] = undefined;

/**
 * Bill to party
 * @member {String} billToID
 */
InvoiceDetailsv61Response.prototype['billToID'] = undefined;

/**
 * Type of the Invoice
 * @member {String} invoiceType
 */
InvoiceDetailsv61Response.prototype['invoiceType'] = undefined;

/**
 * Date when the invoice is due.
 * @member {String} invoiceDueDate
 */
InvoiceDetailsv61Response.prototype['invoiceDueDate'] = undefined;

/**
 * Customer country code.
 * @member {String} customerCountryCode
 */
InvoiceDetailsv61Response.prototype['customerCountryCode'] = undefined;

/**
 * Unique customer number in Ingram's system.
 * @member {String} customerNumber
 */
InvoiceDetailsv61Response.prototype['customerNumber'] = undefined;

/**
 * The IngramMicro sales order number.
 * @member {String} ingramOrderNumber
 */
InvoiceDetailsv61Response.prototype['ingramOrderNumber'] = undefined;

/**
 * Notes for the invoice.
 * @member {String} notes
 */
InvoiceDetailsv61Response.prototype['notes'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponsePaymentTermsInfo} paymentTermsInfo
 */
InvoiceDetailsv61Response.prototype['paymentTermsInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseBillToInfo} billToInfo
 */
InvoiceDetailsv61Response.prototype['billToInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseShipToInfo} shipToInfo
 */
InvoiceDetailsv61Response.prototype['shipToInfo'] = undefined;

/**
 * @member {Array.<module:model/InvoiceDetailsv61ResponseLinesInner>} lines
 */
InvoiceDetailsv61Response.prototype['lines'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseFxRateInfo} fxRateInfo
 */
InvoiceDetailsv61Response.prototype['fxRateInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseSummary} summary
 */
InvoiceDetailsv61Response.prototype['summary'] = undefined;
var _default = exports["default"] = InvoiceDetailsv61Response;