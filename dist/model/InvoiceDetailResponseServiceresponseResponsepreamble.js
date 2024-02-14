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
 * The InvoiceDetailResponseServiceresponseResponsepreamble model module.
 * @module model/InvoiceDetailResponseServiceresponseResponsepreamble
 * @version 1.0.0
 */
var InvoiceDetailResponseServiceresponseResponsepreamble = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvoiceDetailResponseServiceresponseResponsepreamble</code>.
   * @alias module:model/InvoiceDetailResponseServiceresponseResponsepreamble
   */
  function InvoiceDetailResponseServiceresponseResponsepreamble() {
    _classCallCheck(this, InvoiceDetailResponseServiceresponseResponsepreamble);
    InvoiceDetailResponseServiceresponseResponsepreamble.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(InvoiceDetailResponseServiceresponseResponsepreamble, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>InvoiceDetailResponseServiceresponseResponsepreamble</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailResponseServiceresponseResponsepreamble} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailResponseServiceresponseResponsepreamble} The populated <code>InvoiceDetailResponseServiceresponseResponsepreamble</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvoiceDetailResponseServiceresponseResponsepreamble();
        if (data.hasOwnProperty('responsestatus')) {
          obj['responsestatus'] = _ApiClient["default"].convertToType(data['responsestatus'], 'String');
        }
        if (data.hasOwnProperty('statuscode')) {
          obj['statuscode'] = _ApiClient["default"].convertToType(data['statuscode'], 'String');
        }
        if (data.hasOwnProperty('responsemessage')) {
          obj['responsemessage'] = _ApiClient["default"].convertToType(data['responsemessage'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailResponseServiceresponseResponsepreamble</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailResponseServiceresponseResponsepreamble</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['responsestatus'] && !(typeof data['responsestatus'] === 'string' || data['responsestatus'] instanceof String)) {
        throw new Error("Expected the field `responsestatus` to be a primitive type in the JSON string but got " + data['responsestatus']);
      }
      // ensure the json data is a string
      if (data['statuscode'] && !(typeof data['statuscode'] === 'string' || data['statuscode'] instanceof String)) {
        throw new Error("Expected the field `statuscode` to be a primitive type in the JSON string but got " + data['statuscode']);
      }
      // ensure the json data is a string
      if (data['responsemessage'] && !(typeof data['responsemessage'] === 'string' || data['responsemessage'] instanceof String)) {
        throw new Error("Expected the field `responsemessage` to be a primitive type in the JSON string but got " + data['responsemessage']);
      }
      return true;
    }
  }]);
  return InvoiceDetailResponseServiceresponseResponsepreamble;
}();
/**
 * @member {String} responsestatus
 */
InvoiceDetailResponseServiceresponseResponsepreamble.prototype['responsestatus'] = undefined;

/**
 * @member {String} statuscode
 */
InvoiceDetailResponseServiceresponseResponsepreamble.prototype['statuscode'] = undefined;

/**
 * @member {String} responsemessage
 */
InvoiceDetailResponseServiceresponseResponsepreamble.prototype['responsemessage'] = undefined;
var _default = exports["default"] = InvoiceDetailResponseServiceresponseResponsepreamble;