"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _QuoteDetailsRequest = _interopRequireDefault(require("../model/QuoteDetailsRequest"));
var _QuoteDetailsResponse = _interopRequireDefault(require("../model/QuoteDetailsResponse"));
var _QuoteListRequest = _interopRequireDefault(require("../model/QuoteListRequest"));
var _QuoteListResponse = _interopRequireDefault(require("../model/QuoteListResponse"));
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
* QuotesV4 service.
* @module api/QuotesV4Api
* @version 1.0.0
*/
var QuotesV4Api = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new QuotesV4Api. 
  * @alias module:api/QuotesV4Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function QuotesV4Api(apiClient) {
    _classCallCheck(this, QuotesV4Api);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the postV4Quotedetails operation.
   * @callback module:api/QuotesV4Api~postV4QuotedetailsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/QuoteDetailsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Quote Details
   * A real-time request to delete a previously accepted order must be submitted before the order is released to Ingram Micro’s warehouse. After release the order is no longer eligible for deletion. Order delete transaction submitted after the order is released will be rejected and will not be applied. *Direct ship orders cannot be deleted. Contact your sales rep for assistance.
   * @param {Object} opts Optional parameters
   * @param {module:model/QuoteDetailsRequest} [quoteDetailsRequest] 
   * @param {module:api/QuotesV4Api~postV4QuotedetailsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/QuoteDetailsResponse}
   */
  _createClass(QuotesV4Api, [{
    key: "postV4Quotedetails",
    value: function postV4Quotedetails(opts, callback) {
      opts = opts || {};
      var postBody = opts['quoteDetailsRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _QuoteDetailsResponse["default"];
      return this.apiClient.callApi('/quotes/v1/quotedetails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the postV4Quotesearch operation.
     * @callback module:api/QuotesV4Api~postV4QuotesearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Quote List
     * A real-time request that allows the customer to query Ingram Micro for detailed information for a specific open or shipped order. Orders are searched using Ingram Micro Sales Order Number.
     * @param {Object} opts Optional parameters
     * @param {module:model/QuoteListRequest} [quoteListRequest] 
     * @param {module:api/QuotesV4Api~postV4QuotesearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteListResponse}
     */
  }, {
    key: "postV4Quotesearch",
    value: function postV4Quotesearch(opts, callback) {
      opts = opts || {};
      var postBody = opts['quoteListRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _QuoteListResponse["default"];
      return this.apiClient.callApi('/quotes/v1/quotes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return QuotesV4Api;
}();