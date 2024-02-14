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
 * The OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner model module.
 * @module model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner
 * @version 1.0.0
 */
var OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner</code>.
   * @alias module:model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner
   */
  function OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner() {
    _classCallCheck(this, OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner);
    OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner} The populated <code>OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner();
        if (data.hasOwnProperty('addlineorupdateline')) {
          obj['addlineorupdateline'] = _ApiClient["default"].convertToType(data['addlineorupdateline'], 'String');
        }
        if (data.hasOwnProperty('linenumber')) {
          obj['linenumber'] = _ApiClient["default"].convertToType(data['linenumber'], 'String');
        }
        if (data.hasOwnProperty('customerlinenumber')) {
          obj['customerlinenumber'] = _ApiClient["default"].convertToType(data['customerlinenumber'], 'String');
        }
        if (data.hasOwnProperty('ingrampartnumber')) {
          obj['ingrampartnumber'] = _ApiClient["default"].convertToType(data['ingrampartnumber'], 'String');
        }
        if (data.hasOwnProperty('quantityordered')) {
          obj['quantityordered'] = _ApiClient["default"].convertToType(data['quantityordered'], 'Number');
        }
        if (data.hasOwnProperty('customerpartnumber')) {
          obj['customerpartnumber'] = _ApiClient["default"].convertToType(data['customerpartnumber'], 'String');
        }
        if (data.hasOwnProperty('linetype')) {
          obj['linetype'] = _ApiClient["default"].convertToType(data['linetype'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['addlineorupdateline'] && !(typeof data['addlineorupdateline'] === 'string' || data['addlineorupdateline'] instanceof String)) {
        throw new Error("Expected the field `addlineorupdateline` to be a primitive type in the JSON string but got " + data['addlineorupdateline']);
      }
      // ensure the json data is a string
      if (data['linenumber'] && !(typeof data['linenumber'] === 'string' || data['linenumber'] instanceof String)) {
        throw new Error("Expected the field `linenumber` to be a primitive type in the JSON string but got " + data['linenumber']);
      }
      // ensure the json data is a string
      if (data['customerlinenumber'] && !(typeof data['customerlinenumber'] === 'string' || data['customerlinenumber'] instanceof String)) {
        throw new Error("Expected the field `customerlinenumber` to be a primitive type in the JSON string but got " + data['customerlinenumber']);
      }
      // ensure the json data is a string
      if (data['ingrampartnumber'] && !(typeof data['ingrampartnumber'] === 'string' || data['ingrampartnumber'] instanceof String)) {
        throw new Error("Expected the field `ingrampartnumber` to be a primitive type in the JSON string but got " + data['ingrampartnumber']);
      }
      // ensure the json data is a string
      if (data['customerpartnumber'] && !(typeof data['customerpartnumber'] === 'string' || data['customerpartnumber'] instanceof String)) {
        throw new Error("Expected the field `customerpartnumber` to be a primitive type in the JSON string but got " + data['customerpartnumber']);
      }
      // ensure the json data is a string
      if (data['linetype'] && !(typeof data['linetype'] === 'string' || data['linetype'] instanceof String)) {
        throw new Error("Expected the field `linetype` to be a primitive type in the JSON string but got " + data['linetype']);
      }
      return true;
    }
  }]);
  return OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner;
}();
/**
 * @member {String} addlineorupdateline
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['addlineorupdateline'] = undefined;

/**
 * @member {String} linenumber
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['linenumber'] = undefined;

/**
 * @member {String} customerlinenumber
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['customerlinenumber'] = undefined;

/**
 * @member {String} ingrampartnumber
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['ingrampartnumber'] = undefined;

/**
 * @member {Number} quantityordered
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['quantityordered'] = undefined;

/**
 * @member {String} customerpartnumber
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['customerpartnumber'] = undefined;

/**
 * @member {String} linetype
 */
OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.prototype['linetype'] = undefined;
var _default = exports["default"] = OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner;