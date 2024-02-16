"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata = _interopRequireDefault(require("./OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata"));
var _OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner = _interopRequireDefault(require("./OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner"));
var _OrderModifyRequestServicerequestOrdermodifyrequestShipto = _interopRequireDefault(require("./OrderModifyRequestServicerequestOrdermodifyrequestShipto"));
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
 * The OrderModifyRequestServicerequestOrdermodifyrequest model module.
 * @module model/OrderModifyRequestServicerequestOrdermodifyrequest
 * @version 1.0.0
 */
var OrderModifyRequestServicerequestOrdermodifyrequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
   * @alias module:model/OrderModifyRequestServicerequestOrdermodifyrequest
   */
  function OrderModifyRequestServicerequestOrdermodifyrequest() {
    _classCallCheck(this, OrderModifyRequestServicerequestOrdermodifyrequest);
    OrderModifyRequestServicerequestOrdermodifyrequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderModifyRequestServicerequestOrdermodifyrequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderModifyRequestServicerequestOrdermodifyrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequestServicerequestOrdermodifyrequest} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequestServicerequestOrdermodifyrequest} The populated <code>OrderModifyRequestServicerequestOrdermodifyrequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderModifyRequestServicerequestOrdermodifyrequest();
        if (data.hasOwnProperty('ingramorderbranch')) {
          obj['ingramorderbranch'] = _ApiClient["default"].convertToType(data['ingramorderbranch'], 'String');
        }
        if (data.hasOwnProperty('ingramordernumber')) {
          obj['ingramordernumber'] = _ApiClient["default"].convertToType(data['ingramordernumber'], 'String');
        }
        if (data.hasOwnProperty('ingramorderdist')) {
          obj['ingramorderdist'] = _ApiClient["default"].convertToType(data['ingramorderdist'], 'String');
        }
        if (data.hasOwnProperty('ingramordership')) {
          obj['ingramordership'] = _ApiClient["default"].convertToType(data['ingramordership'], 'String');
        }
        if (data.hasOwnProperty('customerponumber')) {
          obj['customerponumber'] = _ApiClient["default"].convertToType(data['customerponumber'], 'String');
        }
        if (data.hasOwnProperty('shipto')) {
          obj['shipto'] = _OrderModifyRequestServicerequestOrdermodifyrequestShipto["default"].constructFromObject(data['shipto']);
        }
        if (data.hasOwnProperty('headerdata')) {
          obj['headerdata'] = _OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata["default"].constructFromObject(data['headerdata']);
        }
        if (data.hasOwnProperty('linedata')) {
          obj['linedata'] = _ApiClient["default"].convertToType(data['linedata'], [_OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['ingramorderbranch'] && !(typeof data['ingramorderbranch'] === 'string' || data['ingramorderbranch'] instanceof String)) {
        throw new Error("Expected the field `ingramorderbranch` to be a primitive type in the JSON string but got " + data['ingramorderbranch']);
      }
      // ensure the json data is a string
      if (data['ingramordernumber'] && !(typeof data['ingramordernumber'] === 'string' || data['ingramordernumber'] instanceof String)) {
        throw new Error("Expected the field `ingramordernumber` to be a primitive type in the JSON string but got " + data['ingramordernumber']);
      }
      // ensure the json data is a string
      if (data['ingramorderdist'] && !(typeof data['ingramorderdist'] === 'string' || data['ingramorderdist'] instanceof String)) {
        throw new Error("Expected the field `ingramorderdist` to be a primitive type in the JSON string but got " + data['ingramorderdist']);
      }
      // ensure the json data is a string
      if (data['ingramordership'] && !(typeof data['ingramordership'] === 'string' || data['ingramordership'] instanceof String)) {
        throw new Error("Expected the field `ingramordership` to be a primitive type in the JSON string but got " + data['ingramordership']);
      }
      // ensure the json data is a string
      if (data['customerponumber'] && !(typeof data['customerponumber'] === 'string' || data['customerponumber'] instanceof String)) {
        throw new Error("Expected the field `customerponumber` to be a primitive type in the JSON string but got " + data['customerponumber']);
      }
      // validate the optional field `shipto`
      if (data['shipto']) {
        // data not null
        _OrderModifyRequestServicerequestOrdermodifyrequestShipto["default"].validateJSON(data['shipto']);
      }
      // validate the optional field `headerdata`
      if (data['headerdata']) {
        // data not null
        _OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata["default"].validateJSON(data['headerdata']);
      }
      if (data['linedata']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['linedata'])) {
          throw new Error("Expected the field `linedata` to be an array in the JSON data but got " + data['linedata']);
        }
        // validate the optional field `linedata` (array)
        var _iterator = _createForOfIteratorHelper(data['linedata']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner["default"].validateJSON(item);
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
  return OrderModifyRequestServicerequestOrdermodifyrequest;
}();
/**
 * @member {String} ingramorderbranch
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramorderbranch'] = undefined;

/**
 * @member {String} ingramordernumber
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramordernumber'] = undefined;

/**
 * @member {String} ingramorderdist
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramorderdist'] = undefined;

/**
 * @member {String} ingramordership
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramordership'] = undefined;

/**
 * @member {String} customerponumber
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['customerponumber'] = undefined;

/**
 * @member {module:model/OrderModifyRequestServicerequestOrdermodifyrequestShipto} shipto
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['shipto'] = undefined;

/**
 * @member {module:model/OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata} headerdata
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['headerdata'] = undefined;

/**
 * @member {Array.<module:model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner>} linedata
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['linedata'] = undefined;
var _default = exports["default"] = OrderModifyRequestServicerequestOrdermodifyrequest;