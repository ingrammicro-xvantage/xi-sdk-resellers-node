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
 * The QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest model module.
 * @module model/QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest
 * @version 1.0.0
 */
var QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest</code>.
   * @alias module:model/QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest
   */
  function QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest() {
    _classCallCheck(this, QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest);
    QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest} obj Optional instance to populate.
     * @return {module:model/QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest} The populated <code>QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
        if (data.hasOwnProperty('quoteNumber')) {
          obj['quoteNumber'] = _ApiClient["default"].convertToType(data['quoteNumber'], 'String');
        }
        if (data.hasOwnProperty('bidNumber')) {
          obj['bidNumber'] = _ApiClient["default"].convertToType(data['bidNumber'], 'String');
        }
        if (data.hasOwnProperty('endUserName')) {
          obj['endUserName'] = _ApiClient["default"].convertToType(data['endUserName'], 'String');
        }
        if (data.hasOwnProperty('fromDate')) {
          obj['fromDate'] = _ApiClient["default"].convertToType(data['fromDate'], 'Date');
        }
        if (data.hasOwnProperty('toDate')) {
          obj['toDate'] = _ApiClient["default"].convertToType(data['toDate'], 'Date');
        }
        if (data.hasOwnProperty('pageIndex')) {
          obj['pageIndex'] = _ApiClient["default"].convertToType(data['pageIndex'], 'String');
        }
        if (data.hasOwnProperty('recordsPerPage')) {
          obj['recordsPerPage'] = _ApiClient["default"].convertToType(data['recordsPerPage'], 'String');
        }
        if (data.hasOwnProperty('sorting')) {
          obj['sorting'] = _ApiClient["default"].convertToType(data['sorting'], 'String');
        }
        if (data.hasOwnProperty('sortingColumnName')) {
          obj['sortingColumnName'] = _ApiClient["default"].convertToType(data['sortingColumnName'], 'String');
        }
        if (data.hasOwnProperty('thirdPartySource')) {
          obj['thirdPartySource'] = _ApiClient["default"].convertToType(data['thirdPartySource'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
        throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
      }
      // ensure the json data is a string
      if (data['bidNumber'] && !(typeof data['bidNumber'] === 'string' || data['bidNumber'] instanceof String)) {
        throw new Error("Expected the field `bidNumber` to be a primitive type in the JSON string but got " + data['bidNumber']);
      }
      // ensure the json data is a string
      if (data['endUserName'] && !(typeof data['endUserName'] === 'string' || data['endUserName'] instanceof String)) {
        throw new Error("Expected the field `endUserName` to be a primitive type in the JSON string but got " + data['endUserName']);
      }
      // ensure the json data is a string
      if (data['pageIndex'] && !(typeof data['pageIndex'] === 'string' || data['pageIndex'] instanceof String)) {
        throw new Error("Expected the field `pageIndex` to be a primitive type in the JSON string but got " + data['pageIndex']);
      }
      // ensure the json data is a string
      if (data['recordsPerPage'] && !(typeof data['recordsPerPage'] === 'string' || data['recordsPerPage'] instanceof String)) {
        throw new Error("Expected the field `recordsPerPage` to be a primitive type in the JSON string but got " + data['recordsPerPage']);
      }
      // ensure the json data is a string
      if (data['sorting'] && !(typeof data['sorting'] === 'string' || data['sorting'] instanceof String)) {
        throw new Error("Expected the field `sorting` to be a primitive type in the JSON string but got " + data['sorting']);
      }
      // ensure the json data is a string
      if (data['sortingColumnName'] && !(typeof data['sortingColumnName'] === 'string' || data['sortingColumnName'] instanceof String)) {
        throw new Error("Expected the field `sortingColumnName` to be a primitive type in the JSON string but got " + data['sortingColumnName']);
      }
      // ensure the json data is a string
      if (data['thirdPartySource'] && !(typeof data['thirdPartySource'] === 'string' || data['thirdPartySource'] instanceof String)) {
        throw new Error("Expected the field `thirdPartySource` to be a primitive type in the JSON string but got " + data['thirdPartySource']);
      }
      return true;
    }
  }]);
  return QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest;
}();
/**
 * Unique identifier generated by Ingram Micro's CRM specific to each quote. When applying a filter to the quoteNumber and including a partial quote number in the filter, all quotes containing any information included in the filter can be retrieved as a subset of all available customer quotes.
 * @member {String} quoteNumber
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['quoteNumber'] = undefined;

/**
 * Special Pricing Bid Number, also referred to as a Dart Number by some vendors, is a unique identifier associated with vendor specific products and discounts.
 * @member {String} bidNumber
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['bidNumber'] = undefined;

/**
 * End User Name is the end customer name that is associated with a quote in Ingram Micro's CRM
 * @member {String} endUserName
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['endUserName'] = undefined;

/**
 * Filter to select the beginning date of a desired date range. The default filter is set to the date the user is logged-in to request quotes. Date format: YYYY-MM-DD - An incorrect date input will result in a message \"Date must be entered as YYYY-MM-DD\"
 * @member {Date} fromDate
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['fromDate'] = undefined;

/**
 * Filter to select the end date of a desired date range. The default number of days to request is the previous 30 days from the date user has logged in. Date format: YYYY-MM-DD - An incorrect date input will result in a message \"Date must be entered as YYYY-MM-DD\"
 * @member {Date} toDate
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['toDate'] = undefined;

/**
 * Page index or page number for the list of quotes being returned. When less than 25 quotes are returned, the page number will be \"1\". In cases where more than 25 quotes are returned, and the default quotes per page are 25 (see recordPerPage), then the list will continue on subsequent pages.
 * @member {String} pageIndex
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['pageIndex'] = undefined;

/**
 * Number of records (quotes) to display per page in the quote list. The default is 25, but may be increased using the filter by up to 100 records per page. If more than 100 records are requested a message will be returned \"The number of records requested exceeds the 100 record limit.\" 
 * @member {String} recordsPerPage
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['recordsPerPage'] = undefined;

/**
 * Sort applies to the selected column (sortingColumnName) and may be specified in Ascending (asc) or Descending (desc) order. The default sort is Descending (desc) - most recent first.
 * @member {module:model/QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.SortingEnum} sorting
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['sorting'] = undefined;

/**
 * Refers to the column selected to apply the sorting criteria. The default column is dateCreated and will sort by the most recently created quote first with the following in descending order. The default filter retrieves quotes created within the last 30 days. Filtering allows user to select a specific column to sort: quoteNumber, createdDate, lastModifiedDate, expiryDate, and endUserName.
 * @member {String} sortingColumnName
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['sortingColumnName'] = undefined;

/**
 * Unique identifier used to identify the third party source accessing the services.
 * @member {String} thirdPartySource
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest.prototype['thirdPartySource'] = undefined;

/**
 * Allowed values for the <code>sorting</code> property.
 * @enum {String}
 * @readonly
 */
QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest['SortingEnum'] = {
  /**
   * value: "asc"
   * @const
   */
  "asc": "asc",
  /**
   * value: "desc"
   * @const
   */
  "desc": "desc"
};
var _default = exports["default"] = QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest;