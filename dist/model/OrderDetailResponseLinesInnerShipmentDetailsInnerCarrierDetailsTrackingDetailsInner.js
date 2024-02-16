"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInnerSerialNumbersInner = _interopRequireDefault(require("./OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInnerSerialNumbersInner"));
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
 * The OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner model module.
 * @module model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner
 * @version 1.0.0
 */
var OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner</code>.
   * The tracking details for the shipment containing the line item.
   * @alias module:model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner
   */
  function OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner() {
    _classCallCheck(this, OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner);
    OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner} The populated <code>OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner();
        if (data.hasOwnProperty('trackingNumber')) {
          obj['trackingNumber'] = _ApiClient["default"].convertToType(data['trackingNumber'], 'String');
        }
        if (data.hasOwnProperty('trackingUrl')) {
          obj['trackingUrl'] = _ApiClient["default"].convertToType(data['trackingUrl'], 'String');
        }
        if (data.hasOwnProperty('packageWeight')) {
          obj['packageWeight'] = _ApiClient["default"].convertToType(data['packageWeight'], 'String');
        }
        if (data.hasOwnProperty('cartonNumber')) {
          obj['cartonNumber'] = _ApiClient["default"].convertToType(data['cartonNumber'], 'String');
        }
        if (data.hasOwnProperty('quantityInBox')) {
          obj['quantityInBox'] = _ApiClient["default"].convertToType(data['quantityInBox'], 'String');
        }
        if (data.hasOwnProperty('SerialNumbers')) {
          obj['SerialNumbers'] = _ApiClient["default"].convertToType(data['SerialNumbers'], [_OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInnerSerialNumbersInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['trackingNumber'] && !(typeof data['trackingNumber'] === 'string' || data['trackingNumber'] instanceof String)) {
        throw new Error("Expected the field `trackingNumber` to be a primitive type in the JSON string but got " + data['trackingNumber']);
      }
      // ensure the json data is a string
      if (data['trackingUrl'] && !(typeof data['trackingUrl'] === 'string' || data['trackingUrl'] instanceof String)) {
        throw new Error("Expected the field `trackingUrl` to be a primitive type in the JSON string but got " + data['trackingUrl']);
      }
      // ensure the json data is a string
      if (data['packageWeight'] && !(typeof data['packageWeight'] === 'string' || data['packageWeight'] instanceof String)) {
        throw new Error("Expected the field `packageWeight` to be a primitive type in the JSON string but got " + data['packageWeight']);
      }
      // ensure the json data is a string
      if (data['cartonNumber'] && !(typeof data['cartonNumber'] === 'string' || data['cartonNumber'] instanceof String)) {
        throw new Error("Expected the field `cartonNumber` to be a primitive type in the JSON string but got " + data['cartonNumber']);
      }
      // ensure the json data is a string
      if (data['quantityInBox'] && !(typeof data['quantityInBox'] === 'string' || data['quantityInBox'] instanceof String)) {
        throw new Error("Expected the field `quantityInBox` to be a primitive type in the JSON string but got " + data['quantityInBox']);
      }
      if (data['SerialNumbers']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['SerialNumbers'])) {
          throw new Error("Expected the field `SerialNumbers` to be an array in the JSON data but got " + data['SerialNumbers']);
        }
        // validate the optional field `SerialNumbers` (array)
        var _iterator = _createForOfIteratorHelper(data['SerialNumbers']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInnerSerialNumbersInner["default"].validateJSON(item);
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
  return OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner;
}();
/**
 * The tracking number for the shipment containing the line item.
 * @member {String} trackingNumber
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['trackingNumber'] = undefined;

/**
 * The tracking URL for the shipment containing the line item.
 * @member {String} trackingUrl
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['trackingUrl'] = undefined;

/**
 * The weight of the package for the line item.
 * @member {String} packageWeight
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['packageWeight'] = undefined;

/**
 * The shipment carton number that contains the line item.
 * @member {String} cartonNumber
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['cartonNumber'] = undefined;

/**
 * The quantity of line items in the box.
 * @member {String} quantityInBox
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['quantityInBox'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInnerSerialNumbersInner>} SerialNumbers
 */
OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner.prototype['SerialNumbers'] = undefined;
var _default = exports["default"] = OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetailsTrackingDetailsInner;