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
 * The QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser model module.
 * @module model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser
 * @version 1.0.0
 */
var QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser</code>.
   * @alias module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser
   */
  function QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser() {
    _classCallCheck(this, QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser);
    QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser} The populated <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser();
        if (data.hasOwnProperty('endUserName')) {
          obj['endUserName'] = _ApiClient["default"].convertToType(data['endUserName'], 'String');
        }
        if (data.hasOwnProperty('endUserAddress')) {
          obj['endUserAddress'] = _ApiClient["default"].convertToType(data['endUserAddress'], 'String');
        }
        if (data.hasOwnProperty('endUserAddress2')) {
          obj['endUserAddress2'] = _ApiClient["default"].convertToType(data['endUserAddress2'], 'String');
        }
        if (data.hasOwnProperty('endUserAddress3')) {
          obj['endUserAddress3'] = _ApiClient["default"].convertToType(data['endUserAddress3'], 'String');
        }
        if (data.hasOwnProperty('endUserCity')) {
          obj['endUserCity'] = _ApiClient["default"].convertToType(data['endUserCity'], 'String');
        }
        if (data.hasOwnProperty('endUserState')) {
          obj['endUserState'] = _ApiClient["default"].convertToType(data['endUserState'], 'String');
        }
        if (data.hasOwnProperty('endUserEmail')) {
          obj['endUserEmail'] = _ApiClient["default"].convertToType(data['endUserEmail'], 'String');
        }
        if (data.hasOwnProperty('endUserPhone')) {
          obj['endUserPhone'] = _ApiClient["default"].convertToType(data['endUserPhone'], 'String');
        }
        if (data.hasOwnProperty('endUserZipCode')) {
          obj['endUserZipCode'] = _ApiClient["default"].convertToType(data['endUserZipCode'], 'String');
        }
        if (data.hasOwnProperty('endUserContactName')) {
          obj['endUserContactName'] = _ApiClient["default"].convertToType(data['endUserContactName'], 'String');
        }
        if (data.hasOwnProperty('endUserMarketSegment')) {
          obj['endUserMarketSegment'] = _ApiClient["default"].convertToType(data['endUserMarketSegment'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['endUserName'] && !(typeof data['endUserName'] === 'string' || data['endUserName'] instanceof String)) {
        throw new Error("Expected the field `endUserName` to be a primitive type in the JSON string but got " + data['endUserName']);
      }
      // ensure the json data is a string
      if (data['endUserAddress'] && !(typeof data['endUserAddress'] === 'string' || data['endUserAddress'] instanceof String)) {
        throw new Error("Expected the field `endUserAddress` to be a primitive type in the JSON string but got " + data['endUserAddress']);
      }
      // ensure the json data is a string
      if (data['endUserAddress2'] && !(typeof data['endUserAddress2'] === 'string' || data['endUserAddress2'] instanceof String)) {
        throw new Error("Expected the field `endUserAddress2` to be a primitive type in the JSON string but got " + data['endUserAddress2']);
      }
      // ensure the json data is a string
      if (data['endUserAddress3'] && !(typeof data['endUserAddress3'] === 'string' || data['endUserAddress3'] instanceof String)) {
        throw new Error("Expected the field `endUserAddress3` to be a primitive type in the JSON string but got " + data['endUserAddress3']);
      }
      // ensure the json data is a string
      if (data['endUserCity'] && !(typeof data['endUserCity'] === 'string' || data['endUserCity'] instanceof String)) {
        throw new Error("Expected the field `endUserCity` to be a primitive type in the JSON string but got " + data['endUserCity']);
      }
      // ensure the json data is a string
      if (data['endUserState'] && !(typeof data['endUserState'] === 'string' || data['endUserState'] instanceof String)) {
        throw new Error("Expected the field `endUserState` to be a primitive type in the JSON string but got " + data['endUserState']);
      }
      // ensure the json data is a string
      if (data['endUserEmail'] && !(typeof data['endUserEmail'] === 'string' || data['endUserEmail'] instanceof String)) {
        throw new Error("Expected the field `endUserEmail` to be a primitive type in the JSON string but got " + data['endUserEmail']);
      }
      // ensure the json data is a string
      if (data['endUserPhone'] && !(typeof data['endUserPhone'] === 'string' || data['endUserPhone'] instanceof String)) {
        throw new Error("Expected the field `endUserPhone` to be a primitive type in the JSON string but got " + data['endUserPhone']);
      }
      // ensure the json data is a string
      if (data['endUserZipCode'] && !(typeof data['endUserZipCode'] === 'string' || data['endUserZipCode'] instanceof String)) {
        throw new Error("Expected the field `endUserZipCode` to be a primitive type in the JSON string but got " + data['endUserZipCode']);
      }
      // ensure the json data is a string
      if (data['endUserContactName'] && !(typeof data['endUserContactName'] === 'string' || data['endUserContactName'] instanceof String)) {
        throw new Error("Expected the field `endUserContactName` to be a primitive type in the JSON string but got " + data['endUserContactName']);
      }
      // ensure the json data is a string
      if (data['endUserMarketSegment'] && !(typeof data['endUserMarketSegment'] === 'string' || data['endUserMarketSegment'] instanceof String)) {
        throw new Error("Expected the field `endUserMarketSegment` to be a primitive type in the JSON string but got " + data['endUserMarketSegment']);
      }
      return true;
    }
  }]);
  return QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser;
}();
/**
 * @member {String} endUserName
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserName'] = undefined;

/**
 * @member {String} endUserAddress
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserAddress'] = undefined;

/**
 * @member {String} endUserAddress2
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserAddress2'] = undefined;

/**
 * @member {String} endUserAddress3
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserAddress3'] = undefined;

/**
 * @member {String} endUserCity
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserCity'] = undefined;

/**
 * @member {String} endUserState
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserState'] = undefined;

/**
 * @member {String} endUserEmail
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserEmail'] = undefined;

/**
 * @member {String} endUserPhone
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserPhone'] = undefined;

/**
 * @member {String} endUserZipCode
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserZipCode'] = undefined;

/**
 * @member {String} endUserContactName
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserContactName'] = undefined;

/**
 * @member {String} endUserMarketSegment
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.prototype['endUserMarketSegment'] = undefined;
var _default = exports["default"] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser;