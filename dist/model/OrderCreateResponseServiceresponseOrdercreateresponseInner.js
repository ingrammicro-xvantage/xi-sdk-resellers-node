"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner = _interopRequireDefault(require("./OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner"));
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
 * The OrderCreateResponseServiceresponseOrdercreateresponseInner model module.
 * @module model/OrderCreateResponseServiceresponseOrdercreateresponseInner
 * @version 1.0.0
 */
var OrderCreateResponseServiceresponseOrdercreateresponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
   * @alias module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner
   */
  function OrderCreateResponseServiceresponseOrdercreateresponseInner() {
    _classCallCheck(this, OrderCreateResponseServiceresponseOrdercreateresponseInner);
    OrderCreateResponseServiceresponseOrdercreateresponseInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateResponseServiceresponseOrdercreateresponseInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner} The populated <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateResponseServiceresponseOrdercreateresponseInner();
        if (data.hasOwnProperty('numberoflineswithsuccess')) {
          obj['numberoflineswithsuccess'] = _ApiClient["default"].convertToType(data['numberoflineswithsuccess'], 'String');
        }
        if (data.hasOwnProperty('numberoflineswitherror')) {
          obj['numberoflineswitherror'] = _ApiClient["default"].convertToType(data['numberoflineswitherror'], 'String');
        }
        if (data.hasOwnProperty('numberoflineswithwarning')) {
          obj['numberoflineswithwarning'] = _ApiClient["default"].convertToType(data['numberoflineswithwarning'], 'String');
        }
        if (data.hasOwnProperty('globalorderid')) {
          obj['globalorderid'] = _ApiClient["default"].convertToType(data['globalorderid'], 'String');
        }
        if (data.hasOwnProperty('ordertype')) {
          obj['ordertype'] = _ApiClient["default"].convertToType(data['ordertype'], 'String');
        }
        if (data.hasOwnProperty('ordertimestamp')) {
          obj['ordertimestamp'] = _ApiClient["default"].convertToType(data['ordertimestamp'], 'String');
        }
        if (data.hasOwnProperty('invoicingsystemorderid')) {
          obj['invoicingsystemorderid'] = _ApiClient["default"].convertToType(data['invoicingsystemorderid'], 'String');
        }
        if (data.hasOwnProperty('taxamount')) {
          obj['taxamount'] = _ApiClient["default"].convertToType(data['taxamount'], 'Number');
        }
        if (data.hasOwnProperty('freightamount')) {
          obj['freightamount'] = _ApiClient["default"].convertToType(data['freightamount'], 'Number');
        }
        if (data.hasOwnProperty('orderamount')) {
          obj['orderamount'] = _ApiClient["default"].convertToType(data['orderamount'], 'Number');
        }
        if (data.hasOwnProperty('Lines')) {
          obj['Lines'] = _ApiClient["default"].convertToType(data['Lines'], [_OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['numberoflineswithsuccess'] && !(typeof data['numberoflineswithsuccess'] === 'string' || data['numberoflineswithsuccess'] instanceof String)) {
        throw new Error("Expected the field `numberoflineswithsuccess` to be a primitive type in the JSON string but got " + data['numberoflineswithsuccess']);
      }
      // ensure the json data is a string
      if (data['numberoflineswitherror'] && !(typeof data['numberoflineswitherror'] === 'string' || data['numberoflineswitherror'] instanceof String)) {
        throw new Error("Expected the field `numberoflineswitherror` to be a primitive type in the JSON string but got " + data['numberoflineswitherror']);
      }
      // ensure the json data is a string
      if (data['numberoflineswithwarning'] && !(typeof data['numberoflineswithwarning'] === 'string' || data['numberoflineswithwarning'] instanceof String)) {
        throw new Error("Expected the field `numberoflineswithwarning` to be a primitive type in the JSON string but got " + data['numberoflineswithwarning']);
      }
      // ensure the json data is a string
      if (data['globalorderid'] && !(typeof data['globalorderid'] === 'string' || data['globalorderid'] instanceof String)) {
        throw new Error("Expected the field `globalorderid` to be a primitive type in the JSON string but got " + data['globalorderid']);
      }
      // ensure the json data is a string
      if (data['ordertype'] && !(typeof data['ordertype'] === 'string' || data['ordertype'] instanceof String)) {
        throw new Error("Expected the field `ordertype` to be a primitive type in the JSON string but got " + data['ordertype']);
      }
      // ensure the json data is a string
      if (data['ordertimestamp'] && !(typeof data['ordertimestamp'] === 'string' || data['ordertimestamp'] instanceof String)) {
        throw new Error("Expected the field `ordertimestamp` to be a primitive type in the JSON string but got " + data['ordertimestamp']);
      }
      // ensure the json data is a string
      if (data['invoicingsystemorderid'] && !(typeof data['invoicingsystemorderid'] === 'string' || data['invoicingsystemorderid'] instanceof String)) {
        throw new Error("Expected the field `invoicingsystemorderid` to be a primitive type in the JSON string but got " + data['invoicingsystemorderid']);
      }
      if (data['Lines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['Lines'])) {
          throw new Error("Expected the field `Lines` to be an array in the JSON data but got " + data['Lines']);
        }
        // validate the optional field `Lines` (array)
        var _iterator = _createForOfIteratorHelper(data['Lines']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return OrderCreateResponseServiceresponseOrdercreateresponseInner;
}();
/**
 * Number of line items that were successful
 * @member {String} numberoflineswithsuccess
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswithsuccess'] = undefined;

/**
 * Number of line items with error
 * @member {String} numberoflineswitherror
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswitherror'] = undefined;

/**
 * Number of line items with warnings
 * @member {String} numberoflineswithwarning
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswithwarning'] = undefined;

/**
 * Ingram sales order number
 * @member {String} globalorderid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['globalorderid'] = undefined;

/**
 * S=Stocked PO D=Direct Ship PO
 * @member {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner.OrdertypeEnum} ordertype
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['ordertype'] = undefined;

/**
 * Time order received
 * @member {String} ordertimestamp
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['ordertimestamp'] = undefined;

/**
 * Ingram Micro generated order number
 * @member {String} invoicingsystemorderid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['invoicingsystemorderid'] = undefined;

/**
 * @member {Number} taxamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['taxamount'] = undefined;

/**
 * Freight amount customer pays for freight
 * @member {Number} freightamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['freightamount'] = undefined;

/**
 * Total amount of order with freight and taxes
 * @member {Number} orderamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['orderamount'] = undefined;

/**
 * Collection of lines
 * @member {Array.<module:model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner>} Lines
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['Lines'] = undefined;

/**
 * Allowed values for the <code>ordertype</code> property.
 * @enum {String}
 * @readonly
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner['OrdertypeEnum'] = {
  /**
   * value: "S"
   * @const
   */
  "S": "S",
  /**
   * value: "D"
   * @const
   */
  "D": "D"
};
var _default = exports["default"] = OrderCreateResponseServiceresponseOrdercreateresponseInner;