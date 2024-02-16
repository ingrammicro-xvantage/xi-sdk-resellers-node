"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The ReturnsCreateRequestListInnerShipFromInfoInner model module.
 * @module model/ReturnsCreateRequestListInnerShipFromInfoInner
 * @version 1.0.0
 */
var ReturnsCreateRequestListInnerShipFromInfoInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReturnsCreateRequestListInnerShipFromInfoInner</code>.
   * @alias module:model/ReturnsCreateRequestListInnerShipFromInfoInner
   * @param companyName {String} Name of the company from where the product will be shipped.
   * @param contact {String} Contact name of the person from where the product will be shipped.
   * @param addressLine1 {String} Ship from Address Line1.
   * @param city {String} Ship from City.
   * @param state {String} Ship from state.
   * @param postalCode {String} Ship from postal code.
   * @param countryCode {String} ship from country code.
   * @param email {String} Ship from email.
   */
  function ReturnsCreateRequestListInnerShipFromInfoInner(companyName, contact, addressLine1, city, state, postalCode, countryCode, email) {
    _classCallCheck(this, ReturnsCreateRequestListInnerShipFromInfoInner);
    ReturnsCreateRequestListInnerShipFromInfoInner.initialize(this, companyName, contact, addressLine1, city, state, postalCode, countryCode, email);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ReturnsCreateRequestListInnerShipFromInfoInner, null, [{
    key: "initialize",
    value: function initialize(obj, companyName, contact, addressLine1, city, state, postalCode, countryCode, email) {
      obj['companyName'] = companyName;
      obj['contact'] = contact;
      obj['addressLine1'] = addressLine1;
      obj['city'] = city;
      obj['state'] = state;
      obj['postalCode'] = postalCode;
      obj['countryCode'] = countryCode;
      obj['email'] = email;
    }

    /**
     * Constructs a <code>ReturnsCreateRequestListInnerShipFromInfoInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsCreateRequestListInnerShipFromInfoInner} obj Optional instance to populate.
     * @return {module:model/ReturnsCreateRequestListInnerShipFromInfoInner} The populated <code>ReturnsCreateRequestListInnerShipFromInfoInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReturnsCreateRequestListInnerShipFromInfoInner();
        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }
        if (data.hasOwnProperty('contact')) {
          obj['contact'] = _ApiClient["default"].convertToType(data['contact'], 'String');
        }
        if (data.hasOwnProperty('addressLine1')) {
          obj['addressLine1'] = _ApiClient["default"].convertToType(data['addressLine1'], 'String');
        }
        if (data.hasOwnProperty('addressLine2')) {
          obj['addressLine2'] = _ApiClient["default"].convertToType(data['addressLine2'], 'String');
        }
        if (data.hasOwnProperty('addressLine3')) {
          obj['addressLine3'] = _ApiClient["default"].convertToType(data['addressLine3'], 'String');
        }
        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }
        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }
        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }
        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsCreateRequestListInnerShipFromInfoInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsCreateRequestListInnerShipFromInfoInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ReturnsCreateRequestListInnerShipFromInfoInner.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data.hasOwnProperty(property)) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
        throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
      }
      // ensure the json data is a string
      if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
        throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
      }
      // ensure the json data is a string
      if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
        throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
      }
      // ensure the json data is a string
      if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
        throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
      }
      // ensure the json data is a string
      if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
        throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
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
      if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
        throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
      }
      // ensure the json data is a string
      if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
        throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
      }
      // ensure the json data is a string
      if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
        throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
      }
      // ensure the json data is a string
      if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
        throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
      }
      return true;
    }
  }]);
  return ReturnsCreateRequestListInnerShipFromInfoInner;
}();
ReturnsCreateRequestListInnerShipFromInfoInner.RequiredProperties = ["companyName", "contact", "addressLine1", "city", "state", "postalCode", "countryCode", "email"];

/**
 * Name of the company from where the product will be shipped.
 * @member {String} companyName
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['companyName'] = undefined;

/**
 * Contact name of the person from where the product will be shipped.
 * @member {String} contact
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['contact'] = undefined;

/**
 * Ship from Address Line1.
 * @member {String} addressLine1
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['addressLine1'] = undefined;

/**
 * Ship from Address Line2.
 * @member {String} addressLine2
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['addressLine2'] = undefined;

/**
 * Ship from Address Line3.
 * @member {String} addressLine3
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['addressLine3'] = undefined;

/**
 * Ship from City.
 * @member {String} city
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['city'] = undefined;

/**
 * Ship from state.
 * @member {String} state
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['state'] = undefined;

/**
 * Ship from postal code.
 * @member {String} postalCode
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['postalCode'] = undefined;

/**
 * ship from country code.
 * @member {String} countryCode
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['countryCode'] = undefined;

/**
 * Ship from email.
 * @member {String} email
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['email'] = undefined;

/**
 * Ship from phone number.
 * @member {String} phoneNumber
 */
ReturnsCreateRequestListInnerShipFromInfoInner.prototype['phoneNumber'] = undefined;
var _default = exports["default"] = ReturnsCreateRequestListInnerShipFromInfoInner;