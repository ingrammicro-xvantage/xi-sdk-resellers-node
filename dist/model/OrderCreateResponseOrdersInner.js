"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderCreateResponseOrdersInnerAdditionalAttributesInner = _interopRequireDefault(require("./OrderCreateResponseOrdersInnerAdditionalAttributesInner"));
var _OrderCreateResponseOrdersInnerLinesInner = _interopRequireDefault(require("./OrderCreateResponseOrdersInnerLinesInner"));
var _OrderCreateResponseOrdersInnerLinksInner = _interopRequireDefault(require("./OrderCreateResponseOrdersInnerLinksInner"));
var _OrderCreateResponseOrdersInnerMiscellaneousChargesInner = _interopRequireDefault(require("./OrderCreateResponseOrdersInnerMiscellaneousChargesInner"));
var _OrderCreateResponseOrdersInnerRejectedLineItemsInner = _interopRequireDefault(require("./OrderCreateResponseOrdersInnerRejectedLineItemsInner"));
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
 * The OrderCreateResponseOrdersInner model module.
 * @module model/OrderCreateResponseOrdersInner
 * @version 1.0.0
 */
var OrderCreateResponseOrdersInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateResponseOrdersInner</code>.
   * @alias module:model/OrderCreateResponseOrdersInner
   */
  function OrderCreateResponseOrdersInner() {
    _classCallCheck(this, OrderCreateResponseOrdersInner);
    OrderCreateResponseOrdersInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateResponseOrdersInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateResponseOrdersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInner} The populated <code>OrderCreateResponseOrdersInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateResponseOrdersInner();
        if (data.hasOwnProperty('numberOfLinesWithSuccess')) {
          obj['numberOfLinesWithSuccess'] = _ApiClient["default"].convertToType(data['numberOfLinesWithSuccess'], 'Number');
        }
        if (data.hasOwnProperty('numberOfLinesWithError')) {
          obj['numberOfLinesWithError'] = _ApiClient["default"].convertToType(data['numberOfLinesWithError'], 'Number');
        }
        if (data.hasOwnProperty('numberOfLinesWithWarning')) {
          obj['numberOfLinesWithWarning'] = _ApiClient["default"].convertToType(data['numberOfLinesWithWarning'], 'Number');
        }
        if (data.hasOwnProperty('ingramOrderNumber')) {
          obj['ingramOrderNumber'] = _ApiClient["default"].convertToType(data['ingramOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('ingramOrderDate')) {
          obj['ingramOrderDate'] = _ApiClient["default"].convertToType(data['ingramOrderDate'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('orderType')) {
          obj['orderType'] = _ApiClient["default"].convertToType(data['orderType'], 'String');
        }
        if (data.hasOwnProperty('orderTotal')) {
          obj['orderTotal'] = _ApiClient["default"].convertToType(data['orderTotal'], 'Number');
        }
        if (data.hasOwnProperty('freightCharges')) {
          obj['freightCharges'] = _ApiClient["default"].convertToType(data['freightCharges'], 'Number');
        }
        if (data.hasOwnProperty('totalTax')) {
          obj['totalTax'] = _ApiClient["default"].convertToType(data['totalTax'], 'Number');
        }
        if (data.hasOwnProperty('currencyCode')) {
          obj['currencyCode'] = _ApiClient["default"].convertToType(data['currencyCode'], 'String');
        }
        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_OrderCreateResponseOrdersInnerLinesInner["default"]]);
        }
        if (data.hasOwnProperty('miscellaneousCharges')) {
          obj['miscellaneousCharges'] = _ApiClient["default"].convertToType(data['miscellaneousCharges'], [_OrderCreateResponseOrdersInnerMiscellaneousChargesInner["default"]]);
        }
        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_OrderCreateResponseOrdersInnerLinksInner["default"]]);
        }
        if (data.hasOwnProperty('rejectedLineItems')) {
          obj['rejectedLineItems'] = _ApiClient["default"].convertToType(data['rejectedLineItems'], [_OrderCreateResponseOrdersInnerRejectedLineItemsInner["default"]]);
        }
        if (data.hasOwnProperty('additionalAttributes')) {
          obj['additionalAttributes'] = _ApiClient["default"].convertToType(data['additionalAttributes'], [_OrderCreateResponseOrdersInnerAdditionalAttributesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
      }
      // ensure the json data is a string
      if (data['ingramOrderDate'] && !(typeof data['ingramOrderDate'] === 'string' || data['ingramOrderDate'] instanceof String)) {
        throw new Error("Expected the field `ingramOrderDate` to be a primitive type in the JSON string but got " + data['ingramOrderDate']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      // ensure the json data is a string
      if (data['orderType'] && !(typeof data['orderType'] === 'string' || data['orderType'] instanceof String)) {
        throw new Error("Expected the field `orderType` to be a primitive type in the JSON string but got " + data['orderType']);
      }
      // ensure the json data is a string
      if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
        throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
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
            _OrderCreateResponseOrdersInnerLinesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['miscellaneousCharges']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['miscellaneousCharges'])) {
          throw new Error("Expected the field `miscellaneousCharges` to be an array in the JSON data but got " + data['miscellaneousCharges']);
        }
        // validate the optional field `miscellaneousCharges` (array)
        var _iterator2 = _createForOfIteratorHelper(data['miscellaneousCharges']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _OrderCreateResponseOrdersInnerMiscellaneousChargesInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['links']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['links'])) {
          throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
        }
        // validate the optional field `links` (array)
        var _iterator3 = _createForOfIteratorHelper(data['links']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _OrderCreateResponseOrdersInnerLinksInner["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['rejectedLineItems']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['rejectedLineItems'])) {
          throw new Error("Expected the field `rejectedLineItems` to be an array in the JSON data but got " + data['rejectedLineItems']);
        }
        // validate the optional field `rejectedLineItems` (array)
        var _iterator4 = _createForOfIteratorHelper(data['rejectedLineItems']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _OrderCreateResponseOrdersInnerRejectedLineItemsInner["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
        var _iterator5 = _createForOfIteratorHelper(data['additionalAttributes']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item4 = _step5.value;
            _OrderCreateResponseOrdersInnerAdditionalAttributesInner["default"].validateJSON(_item4);
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
  return OrderCreateResponseOrdersInner;
}();
/**
 * The number of lines in the order that were successful.
 * @member {Number} numberOfLinesWithSuccess
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithSuccess'] = undefined;

/**
 * The number of lines in the order that have errors.
 * @member {Number} numberOfLinesWithError
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithError'] = undefined;

/**
 * The number of lines in the order that have a warning.
 * @member {Number} numberOfLinesWithWarning
 */
OrderCreateResponseOrdersInner.prototype['numberOfLinesWithWarning'] = undefined;

/**
 * The Ingram Micro order number.
 * @member {String} ingramOrderNumber
 */
OrderCreateResponseOrdersInner.prototype['ingramOrderNumber'] = undefined;

/**
 * The date in UTC format that the order was created in Ingram Micro's system.
 * @member {String} ingramOrderDate
 */
OrderCreateResponseOrdersInner.prototype['ingramOrderDate'] = undefined;

/**
 * Order-level notes.
 * @member {String} notes
 */
OrderCreateResponseOrdersInner.prototype['notes'] = undefined;

/**
 * The order typer. One of: S=Stocked PO D=Direct Ship PO
 * @member {String} orderType
 */
OrderCreateResponseOrdersInner.prototype['orderType'] = undefined;

/**
 * The total price for the order.
 * @member {Number} orderTotal
 */
OrderCreateResponseOrdersInner.prototype['orderTotal'] = undefined;

/**
 * The total freight charges for the order.
 * @member {Number} freightCharges
 */
OrderCreateResponseOrdersInner.prototype['freightCharges'] = undefined;

/**
 * The total tax for the order.
 * @member {Number} totalTax
 */
OrderCreateResponseOrdersInner.prototype['totalTax'] = undefined;

/**
 * The country-specific three character ISO 4217 currency code used for the order.
 * @member {String} currencyCode
 */
OrderCreateResponseOrdersInner.prototype['currencyCode'] = undefined;

/**
 * The line-level details for the order.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinesInner>} lines
 */
OrderCreateResponseOrdersInner.prototype['lines'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerMiscellaneousChargesInner>} miscellaneousCharges
 */
OrderCreateResponseOrdersInner.prototype['miscellaneousCharges'] = undefined;

/**
 * Link to Order Details for the order(s).
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinksInner>} links
 */
OrderCreateResponseOrdersInner.prototype['links'] = undefined;

/**
 * A list of rejected line items.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerRejectedLineItemsInner>} rejectedLineItems
 */
OrderCreateResponseOrdersInner.prototype['rejectedLineItems'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateResponseOrdersInner.prototype['additionalAttributes'] = undefined;
var _default = exports["default"] = OrderCreateResponseOrdersInner;