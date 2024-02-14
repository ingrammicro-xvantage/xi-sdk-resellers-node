"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _QuoteToOrderDetailsDTOAdditionalAttributesInner = _interopRequireDefault(require("./QuoteToOrderDetailsDTOAdditionalAttributesInner"));
var _QuoteToOrderDetailsDTOEndUserInfoInner = _interopRequireDefault(require("./QuoteToOrderDetailsDTOEndUserInfoInner"));
var _QuoteToOrderDetailsDTOLinesInner = _interopRequireDefault(require("./QuoteToOrderDetailsDTOLinesInner"));
var _QuoteToOrderDetailsDTOShipToInfoInner = _interopRequireDefault(require("./QuoteToOrderDetailsDTOShipToInfoInner"));
var _QuoteToOrderDetailsDTOVmfadditionalAttributesInner = _interopRequireDefault(require("./QuoteToOrderDetailsDTOVmfadditionalAttributesInner"));
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
 * The QuoteToOrderDetailsDTO model module.
 * @module model/QuoteToOrderDetailsDTO
 * @version 1.0.0
 */
var QuoteToOrderDetailsDTO = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuoteToOrderDetailsDTO</code>.
   * @alias module:model/QuoteToOrderDetailsDTO
   */
  function QuoteToOrderDetailsDTO() {
    _classCallCheck(this, QuoteToOrderDetailsDTO);
    QuoteToOrderDetailsDTO.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(QuoteToOrderDetailsDTO, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>QuoteToOrderDetailsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteToOrderDetailsDTO} obj Optional instance to populate.
     * @return {module:model/QuoteToOrderDetailsDTO} The populated <code>QuoteToOrderDetailsDTO</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuoteToOrderDetailsDTO();
        if (data.hasOwnProperty('quoteNumber')) {
          obj['quoteNumber'] = _ApiClient["default"].convertToType(data['quoteNumber'], 'String');
        }
        if (data.hasOwnProperty('customerOrderNumber')) {
          obj['customerOrderNumber'] = _ApiClient["default"].convertToType(data['customerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('enduserOrderNumber')) {
          obj['enduserOrderNumber'] = _ApiClient["default"].convertToType(data['enduserOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('billToAddressId')) {
          obj['billToAddressId'] = _ApiClient["default"].convertToType(data['billToAddressId'], 'String');
        }
        if (data.hasOwnProperty('endUserInfo')) {
          obj['endUserInfo'] = _ApiClient["default"].convertToType(data['endUserInfo'], [_QuoteToOrderDetailsDTOEndUserInfoInner["default"]]);
        }
        if (data.hasOwnProperty('shipToInfo')) {
          obj['shipToInfo'] = _ApiClient["default"].convertToType(data['shipToInfo'], [_QuoteToOrderDetailsDTOShipToInfoInner["default"]]);
        }
        if (data.hasOwnProperty('additionalAttributes')) {
          obj['additionalAttributes'] = _ApiClient["default"].convertToType(data['additionalAttributes'], [_QuoteToOrderDetailsDTOAdditionalAttributesInner["default"]]);
        }
        if (data.hasOwnProperty('vmfadditionalAttributes')) {
          obj['vmfadditionalAttributes'] = _ApiClient["default"].convertToType(data['vmfadditionalAttributes'], [_QuoteToOrderDetailsDTOVmfadditionalAttributesInner["default"]]);
        }
        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_QuoteToOrderDetailsDTOLinesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteToOrderDetailsDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteToOrderDetailsDTO</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
        throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
      }
      // ensure the json data is a string
      if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['enduserOrderNumber'] && !(typeof data['enduserOrderNumber'] === 'string' || data['enduserOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `enduserOrderNumber` to be a primitive type in the JSON string but got " + data['enduserOrderNumber']);
      }
      // ensure the json data is a string
      if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
        throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
      }
      if (data['endUserInfo']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['endUserInfo'])) {
          throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
        }
        // validate the optional field `endUserInfo` (array)
        var _iterator = _createForOfIteratorHelper(data['endUserInfo']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _QuoteToOrderDetailsDTOEndUserInfoInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['shipToInfo']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['shipToInfo'])) {
          throw new Error("Expected the field `shipToInfo` to be an array in the JSON data but got " + data['shipToInfo']);
        }
        // validate the optional field `shipToInfo` (array)
        var _iterator2 = _createForOfIteratorHelper(data['shipToInfo']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _QuoteToOrderDetailsDTOShipToInfoInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['additionalAttributes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['additionalAttributes'])) {
          throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
        }
        // validate the optional field `additionalAttributes` (array)
        var _iterator3 = _createForOfIteratorHelper(data['additionalAttributes']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _QuoteToOrderDetailsDTOAdditionalAttributesInner["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['vmfadditionalAttributes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vmfadditionalAttributes'])) {
          throw new Error("Expected the field `vmfadditionalAttributes` to be an array in the JSON data but got " + data['vmfadditionalAttributes']);
        }
        // validate the optional field `vmfadditionalAttributes` (array)
        var _iterator4 = _createForOfIteratorHelper(data['vmfadditionalAttributes']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _QuoteToOrderDetailsDTOVmfadditionalAttributesInner["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      if (data['lines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
          throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }
        // validate the optional field `lines` (array)
        var _iterator5 = _createForOfIteratorHelper(data['lines']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item4 = _step5.value;
            _QuoteToOrderDetailsDTOLinesInner["default"].validateJSON(_item4);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        ;
      }
      return true;
    }
  }]);
  return QuoteToOrderDetailsDTO;
}();
/**
 * A unique identifier generated by Ingram Micro's CRM specific to each quote.
 * @member {String} quoteNumber
 */
QuoteToOrderDetailsDTO.prototype['quoteNumber'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
QuoteToOrderDetailsDTO.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} enduserOrderNumber
 */
QuoteToOrderDetailsDTO.prototype['enduserOrderNumber'] = undefined;

/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit.
 * @member {String} billToAddressId
 */
QuoteToOrderDetailsDTO.prototype['billToAddressId'] = undefined;

/**
 * The contact information for the end user/customer provided by the reseller. Used to determine pricing and discounts.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOEndUserInfoInner>} endUserInfo
 */
QuoteToOrderDetailsDTO.prototype['endUserInfo'] = undefined;

/**
 * The shipping information provided by the reseller for order delivery.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOShipToInfoInner>} shipToInfo
 */
QuoteToOrderDetailsDTO.prototype['shipToInfo'] = undefined;

/**
 * Additional order create attributes.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOAdditionalAttributesInner>} additionalAttributes
 */
QuoteToOrderDetailsDTO.prototype['additionalAttributes'] = undefined;

/**
 * The object containing the list of fields required at a header level by the vendor.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOVmfadditionalAttributesInner>} vmfadditionalAttributes
 */
QuoteToOrderDetailsDTO.prototype['vmfadditionalAttributes'] = undefined;

/**
 * The object containing the lines that require vendor mandatory fields.
 * @member {Array.<module:model/QuoteToOrderDetailsDTOLinesInner>} lines
 */
QuoteToOrderDetailsDTO.prototype['lines'] = undefined;
var _default = exports["default"] = QuoteToOrderDetailsDTO;