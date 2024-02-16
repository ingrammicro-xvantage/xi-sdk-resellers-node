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
 * The OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser model module.
 * @module model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser
 * @version 1.0.0
 */
var OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser</code>.
   * @alias module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser
   */
  function OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser() {
    _classCallCheck(this, OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser);
    OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser} The populated <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('addressline1')) {
          obj['addressline1'] = _ApiClient["default"].convertToType(data['addressline1'], 'String');
        }
        if (data.hasOwnProperty('addressline2')) {
          obj['addressline2'] = _ApiClient["default"].convertToType(data['addressline2'], 'String');
        }
        if (data.hasOwnProperty('addressline3')) {
          obj['addressline3'] = _ApiClient["default"].convertToType(data['addressline3'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('postalcode')) {
          obj['postalcode'] = _ApiClient["default"].convertToType(data['postalcode'], 'String');
        }
        if (data.hasOwnProperty('countrycode')) {
          obj['countrycode'] = _ApiClient["default"].convertToType(data['countrycode'], 'String');
        }
        if (data.hasOwnProperty('phonenumber')) {
          obj['phonenumber'] = _ApiClient["default"].convertToType(data['phonenumber'], 'String');
        }
        if (data.hasOwnProperty('extensionnumber')) {
          obj['extensionnumber'] = _ApiClient["default"].convertToType(data['extensionnumber'], 'String');
        }
        if (data.hasOwnProperty('faxnumber')) {
          obj['faxnumber'] = _ApiClient["default"].convertToType(data['faxnumber'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
        throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
      }
      // ensure the json data is a string
      if (data['addressline1'] && !(typeof data['addressline1'] === 'string' || data['addressline1'] instanceof String)) {
        throw new Error("Expected the field `addressline1` to be a primitive type in the JSON string but got " + data['addressline1']);
      }
      // ensure the json data is a string
      if (data['addressline2'] && !(typeof data['addressline2'] === 'string' || data['addressline2'] instanceof String)) {
        throw new Error("Expected the field `addressline2` to be a primitive type in the JSON string but got " + data['addressline2']);
      }
      // ensure the json data is a string
      if (data['addressline3'] && !(typeof data['addressline3'] === 'string' || data['addressline3'] instanceof String)) {
        throw new Error("Expected the field `addressline3` to be a primitive type in the JSON string but got " + data['addressline3']);
      }
      // ensure the json data is a string
      if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
        throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
      }
      // ensure the json data is a string
      if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
        throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
      }
      // ensure the json data is a string
      if (data['postalcode'] && !(typeof data['postalcode'] === 'string' || data['postalcode'] instanceof String)) {
        throw new Error("Expected the field `postalcode` to be a primitive type in the JSON string but got " + data['postalcode']);
      }
      // ensure the json data is a string
      if (data['countrycode'] && !(typeof data['countrycode'] === 'string' || data['countrycode'] instanceof String)) {
        throw new Error("Expected the field `countrycode` to be a primitive type in the JSON string but got " + data['countrycode']);
      }
      // ensure the json data is a string
      if (data['phonenumber'] && !(typeof data['phonenumber'] === 'string' || data['phonenumber'] instanceof String)) {
        throw new Error("Expected the field `phonenumber` to be a primitive type in the JSON string but got " + data['phonenumber']);
      }
      // ensure the json data is a string
      if (data['extensionnumber'] && !(typeof data['extensionnumber'] === 'string' || data['extensionnumber'] instanceof String)) {
        throw new Error("Expected the field `extensionnumber` to be a primitive type in the JSON string but got " + data['extensionnumber']);
      }
      // ensure the json data is a string
      if (data['faxnumber'] && !(typeof data['faxnumber'] === 'string' || data['faxnumber'] instanceof String)) {
        throw new Error("Expected the field `faxnumber` to be a primitive type in the JSON string but got " + data['faxnumber']);
      }
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      return true;
    }
  }]);
  return OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser;
}();
/**
 * @member {String} id
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['id'] = undefined;

/**
 * @member {String} addressline1
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['addressline1'] = undefined;

/**
 * @member {String} addressline2
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['addressline2'] = undefined;

/**
 * @member {String} addressline3
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['addressline3'] = undefined;

/**
 * @member {String} city
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['city'] = undefined;

/**
 * @member {String} state
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['state'] = undefined;

/**
 * @member {String} postalcode
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['postalcode'] = undefined;

/**
 * @member {String} countrycode
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['countrycode'] = undefined;

/**
 * @member {String} phonenumber
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['phonenumber'] = undefined;

/**
 * @member {String} extensionnumber
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['extensionnumber'] = undefined;

/**
 * @member {String} faxnumber
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['faxnumber'] = undefined;

/**
 * @member {String} email
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser.prototype['email'] = undefined;
var _default = exports["default"] = OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerEnduser;