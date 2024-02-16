"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo = _interopRequireDefault(require("./QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo"));
var _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo = _interopRequireDefault(require("./QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo"));
var _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser = _interopRequireDefault(require("./QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser"));
var _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes = _interopRequireDefault(require("./QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes"));
var _QuoteProductList = _interopRequireDefault(require("./QuoteProductList"));
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
 * The QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse model module.
 * @module model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse
 * @version 1.0.0
 */
var QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
   * @alias module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse
   */
  function QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse() {
    _classCallCheck(this, QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse);
    QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse} The populated <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse();
        if (data.hasOwnProperty('quoteGuid')) {
          obj['quoteGuid'] = _ApiClient["default"].convertToType(data['quoteGuid'], 'String');
        }
        if (data.hasOwnProperty('quoteName')) {
          obj['quoteName'] = _ApiClient["default"].convertToType(data['quoteName'], 'String');
        }
        if (data.hasOwnProperty('quoteNumber')) {
          obj['quoteNumber'] = _ApiClient["default"].convertToType(data['quoteNumber'], 'String');
        }
        if (data.hasOwnProperty('quoteExpiryDate')) {
          obj['quoteExpiryDate'] = _ApiClient["default"].convertToType(data['quoteExpiryDate'], 'String');
        }
        if (data.hasOwnProperty('revisionNumber')) {
          obj['revisionNumber'] = _ApiClient["default"].convertToType(data['revisionNumber'], 'String');
        }
        if (data.hasOwnProperty('introPreamble')) {
          obj['introPreamble'] = _ApiClient["default"].convertToType(data['introPreamble'], 'String');
        }
        if (data.hasOwnProperty('purchaseInstructions')) {
          obj['purchaseInstructions'] = _ApiClient["default"].convertToType(data['purchaseInstructions'], 'String');
        }
        if (data.hasOwnProperty('legalTerms')) {
          obj['legalTerms'] = _ApiClient["default"].convertToType(data['legalTerms'], 'String');
        }
        if (data.hasOwnProperty('currencyCode')) {
          obj['currencyCode'] = _ApiClient["default"].convertToType(data['currencyCode'], 'String');
        }
        if (data.hasOwnProperty('priceDeviationId')) {
          obj['priceDeviationId'] = _ApiClient["default"].convertToType(data['priceDeviationId'], 'String');
        }
        if (data.hasOwnProperty('priceDeviationStartDate')) {
          obj['priceDeviationStartDate'] = _ApiClient["default"].convertToType(data['priceDeviationStartDate'], 'String');
        }
        if (data.hasOwnProperty('priceDeviationExpiryDate')) {
          obj['priceDeviationExpiryDate'] = _ApiClient["default"].convertToType(data['priceDeviationExpiryDate'], 'String');
        }
        if (data.hasOwnProperty('customerNeed')) {
          obj['customerNeed'] = _ApiClient["default"].convertToType(data['customerNeed'], 'String');
        }
        if (data.hasOwnProperty('solutionProposed')) {
          obj['solutionProposed'] = _ApiClient["default"].convertToType(data['solutionProposed'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }
        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'String');
        }
        if (data.hasOwnProperty('leasingCalculations')) {
          obj['leasingCalculations'] = _ApiClient["default"].convertToType(data['leasingCalculations'], 'String');
        }
        if (data.hasOwnProperty('leasingInstructions')) {
          obj['leasingInstructions'] = _ApiClient["default"].convertToType(data['leasingInstructions'], 'String');
        }
        if (data.hasOwnProperty('accountInfo')) {
          obj['accountInfo'] = _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo["default"].constructFromObject(data['accountInfo']);
        }
        if (data.hasOwnProperty('contactInfo')) {
          obj['contactInfo'] = _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo["default"].constructFromObject(data['contactInfo']);
        }
        if (data.hasOwnProperty('vendorAttributes')) {
          obj['vendorAttributes'] = _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes["default"].constructFromObject(data['vendorAttributes']);
        }
        if (data.hasOwnProperty('endUser')) {
          obj['endUser'] = _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser["default"].constructFromObject(data['endUser']);
        }
        if (data.hasOwnProperty('quoteProductList')) {
          obj['quoteProductList'] = _ApiClient["default"].convertToType(data['quoteProductList'], [_QuoteProductList["default"]]);
        }
        if (data.hasOwnProperty('totalQuoteProductCount')) {
          obj['totalQuoteProductCount'] = _ApiClient["default"].convertToType(data['totalQuoteProductCount'], 'String');
        }
        if (data.hasOwnProperty('totalExtendedMsrp')) {
          obj['totalExtendedMsrp'] = _ApiClient["default"].convertToType(data['totalExtendedMsrp'], 'String');
        }
        if (data.hasOwnProperty('totalQuantity')) {
          obj['totalQuantity'] = _ApiClient["default"].convertToType(data['totalQuantity'], 'String');
        }
        if (data.hasOwnProperty('totalExtendedQuotePrice')) {
          obj['totalExtendedQuotePrice'] = _ApiClient["default"].convertToType(data['totalExtendedQuotePrice'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['quoteGuid'] && !(typeof data['quoteGuid'] === 'string' || data['quoteGuid'] instanceof String)) {
        throw new Error("Expected the field `quoteGuid` to be a primitive type in the JSON string but got " + data['quoteGuid']);
      }
      // ensure the json data is a string
      if (data['quoteName'] && !(typeof data['quoteName'] === 'string' || data['quoteName'] instanceof String)) {
        throw new Error("Expected the field `quoteName` to be a primitive type in the JSON string but got " + data['quoteName']);
      }
      // ensure the json data is a string
      if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
        throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
      }
      // ensure the json data is a string
      if (data['quoteExpiryDate'] && !(typeof data['quoteExpiryDate'] === 'string' || data['quoteExpiryDate'] instanceof String)) {
        throw new Error("Expected the field `quoteExpiryDate` to be a primitive type in the JSON string but got " + data['quoteExpiryDate']);
      }
      // ensure the json data is a string
      if (data['revisionNumber'] && !(typeof data['revisionNumber'] === 'string' || data['revisionNumber'] instanceof String)) {
        throw new Error("Expected the field `revisionNumber` to be a primitive type in the JSON string but got " + data['revisionNumber']);
      }
      // ensure the json data is a string
      if (data['introPreamble'] && !(typeof data['introPreamble'] === 'string' || data['introPreamble'] instanceof String)) {
        throw new Error("Expected the field `introPreamble` to be a primitive type in the JSON string but got " + data['introPreamble']);
      }
      // ensure the json data is a string
      if (data['purchaseInstructions'] && !(typeof data['purchaseInstructions'] === 'string' || data['purchaseInstructions'] instanceof String)) {
        throw new Error("Expected the field `purchaseInstructions` to be a primitive type in the JSON string but got " + data['purchaseInstructions']);
      }
      // ensure the json data is a string
      if (data['legalTerms'] && !(typeof data['legalTerms'] === 'string' || data['legalTerms'] instanceof String)) {
        throw new Error("Expected the field `legalTerms` to be a primitive type in the JSON string but got " + data['legalTerms']);
      }
      // ensure the json data is a string
      if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
        throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
      }
      // ensure the json data is a string
      if (data['priceDeviationId'] && !(typeof data['priceDeviationId'] === 'string' || data['priceDeviationId'] instanceof String)) {
        throw new Error("Expected the field `priceDeviationId` to be a primitive type in the JSON string but got " + data['priceDeviationId']);
      }
      // ensure the json data is a string
      if (data['priceDeviationStartDate'] && !(typeof data['priceDeviationStartDate'] === 'string' || data['priceDeviationStartDate'] instanceof String)) {
        throw new Error("Expected the field `priceDeviationStartDate` to be a primitive type in the JSON string but got " + data['priceDeviationStartDate']);
      }
      // ensure the json data is a string
      if (data['priceDeviationExpiryDate'] && !(typeof data['priceDeviationExpiryDate'] === 'string' || data['priceDeviationExpiryDate'] instanceof String)) {
        throw new Error("Expected the field `priceDeviationExpiryDate` to be a primitive type in the JSON string but got " + data['priceDeviationExpiryDate']);
      }
      // ensure the json data is a string
      if (data['customerNeed'] && !(typeof data['customerNeed'] === 'string' || data['customerNeed'] instanceof String)) {
        throw new Error("Expected the field `customerNeed` to be a primitive type in the JSON string but got " + data['customerNeed']);
      }
      // ensure the json data is a string
      if (data['solutionProposed'] && !(typeof data['solutionProposed'] === 'string' || data['solutionProposed'] instanceof String)) {
        throw new Error("Expected the field `solutionProposed` to be a primitive type in the JSON string but got " + data['solutionProposed']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
        throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
      }
      // ensure the json data is a string
      if (data['modified'] && !(typeof data['modified'] === 'string' || data['modified'] instanceof String)) {
        throw new Error("Expected the field `modified` to be a primitive type in the JSON string but got " + data['modified']);
      }
      // ensure the json data is a string
      if (data['leasingCalculations'] && !(typeof data['leasingCalculations'] === 'string' || data['leasingCalculations'] instanceof String)) {
        throw new Error("Expected the field `leasingCalculations` to be a primitive type in the JSON string but got " + data['leasingCalculations']);
      }
      // ensure the json data is a string
      if (data['leasingInstructions'] && !(typeof data['leasingInstructions'] === 'string' || data['leasingInstructions'] instanceof String)) {
        throw new Error("Expected the field `leasingInstructions` to be a primitive type in the JSON string but got " + data['leasingInstructions']);
      }
      // validate the optional field `accountInfo`
      if (data['accountInfo']) {
        // data not null
        _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo["default"].validateJSON(data['accountInfo']);
      }
      // validate the optional field `contactInfo`
      if (data['contactInfo']) {
        // data not null
        _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo["default"].validateJSON(data['contactInfo']);
      }
      // validate the optional field `vendorAttributes`
      if (data['vendorAttributes']) {
        // data not null
        _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes["default"].validateJSON(data['vendorAttributes']);
      }
      // validate the optional field `endUser`
      if (data['endUser']) {
        // data not null
        _QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser["default"].validateJSON(data['endUser']);
      }
      if (data['quoteProductList']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['quoteProductList'])) {
          throw new Error("Expected the field `quoteProductList` to be an array in the JSON data but got " + data['quoteProductList']);
        }
        // validate the optional field `quoteProductList` (array)
        var _iterator = _createForOfIteratorHelper(data['quoteProductList']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _QuoteProductList["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['totalQuoteProductCount'] && !(typeof data['totalQuoteProductCount'] === 'string' || data['totalQuoteProductCount'] instanceof String)) {
        throw new Error("Expected the field `totalQuoteProductCount` to be a primitive type in the JSON string but got " + data['totalQuoteProductCount']);
      }
      // ensure the json data is a string
      if (data['totalExtendedMsrp'] && !(typeof data['totalExtendedMsrp'] === 'string' || data['totalExtendedMsrp'] instanceof String)) {
        throw new Error("Expected the field `totalExtendedMsrp` to be a primitive type in the JSON string but got " + data['totalExtendedMsrp']);
      }
      // ensure the json data is a string
      if (data['totalQuantity'] && !(typeof data['totalQuantity'] === 'string' || data['totalQuantity'] instanceof String)) {
        throw new Error("Expected the field `totalQuantity` to be a primitive type in the JSON string but got " + data['totalQuantity']);
      }
      // ensure the json data is a string
      if (data['totalExtendedQuotePrice'] && !(typeof data['totalExtendedQuotePrice'] === 'string' || data['totalExtendedQuotePrice'] instanceof String)) {
        throw new Error("Expected the field `totalExtendedQuotePrice` to be a primitive type in the JSON string but got " + data['totalExtendedQuotePrice']);
      }
      return true;
    }
  }]);
  return QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse;
}();
/**
 * @member {String} quoteGuid
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteGuid'] = undefined;

/**
 * @member {String} quoteName
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteName'] = undefined;

/**
 * @member {String} quoteNumber
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteNumber'] = undefined;

/**
 * @member {String} quoteExpiryDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteExpiryDate'] = undefined;

/**
 * @member {String} revisionNumber
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['revisionNumber'] = undefined;

/**
 * @member {String} introPreamble
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['introPreamble'] = undefined;

/**
 * @member {String} purchaseInstructions
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['purchaseInstructions'] = undefined;

/**
 * @member {String} legalTerms
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['legalTerms'] = undefined;

/**
 * @member {String} currencyCode
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['currencyCode'] = undefined;

/**
 * @member {String} priceDeviationId
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationId'] = undefined;

/**
 * @member {String} priceDeviationStartDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationStartDate'] = undefined;

/**
 * @member {String} priceDeviationExpiryDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationExpiryDate'] = undefined;

/**
 * @member {String} customerNeed
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['customerNeed'] = undefined;

/**
 * @member {String} solutionProposed
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['solutionProposed'] = undefined;

/**
 * @member {String} status
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['status'] = undefined;

/**
 * @member {String} created
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['created'] = undefined;

/**
 * @member {String} modified
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['modified'] = undefined;

/**
 * @member {String} leasingCalculations
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingCalculations'] = undefined;

/**
 * @member {String} leasingInstructions
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingInstructions'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo} accountInfo
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['accountInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo} contactInfo
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['contactInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes} vendorAttributes
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['vendorAttributes'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser} endUser
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['endUser'] = undefined;

/**
 * @member {Array.<module:model/QuoteProductList>} quoteProductList
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteProductList'] = undefined;

/**
 * @member {String} totalQuoteProductCount
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalQuoteProductCount'] = undefined;

/**
 * @member {String} totalExtendedMsrp
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalExtendedMsrp'] = undefined;

/**
 * @member {String} totalQuantity
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalQuantity'] = undefined;

/**
 * @member {String} totalExtendedQuotePrice
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalExtendedQuotePrice'] = undefined;
var _default = exports["default"] = QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse;