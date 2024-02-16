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
 * The OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner model module.
 * @module model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner
 * @version 1.0.0
 */
var OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner</code>.
   * @alias module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner
   */
  function OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner() {
    _classCallCheck(this, OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner);
    OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner} The populated <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner();
        if (data.hasOwnProperty('attributename')) {
          obj['attributename'] = _ApiClient["default"].convertToType(data['attributename'], 'String');
        }
        if (data.hasOwnProperty('attributevalue')) {
          obj['attributevalue'] = _ApiClient["default"].convertToType(data['attributevalue'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['attributename'] && !(typeof data['attributename'] === 'string' || data['attributename'] instanceof String)) {
        throw new Error("Expected the field `attributename` to be a primitive type in the JSON string but got " + data['attributename']);
      }
      // ensure the json data is a string
      if (data['attributevalue'] && !(typeof data['attributevalue'] === 'string' || data['attributevalue'] instanceof String)) {
        throw new Error("Expected the field `attributevalue` to be a primitive type in the JSON string but got " + data['attributevalue']);
      }
      return true;
    }
  }]);
  return OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner;
}();
/**
 * @member {module:model/OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner.AttributenameEnum} attributename
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner.prototype['attributename'] = undefined;

/**
 * @member {String} attributevalue
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner.prototype['attributevalue'] = undefined;

/**
 * Allowed values for the <code>attributename</code> property.
 * @enum {String}
 * @readonly
 */
OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner['AttributenameEnum'] = {
  /**
   * value: "shipfrom"
   * @const
   */
  "shipfrom": "shipfrom",
  /**
   * value: "specialprice"
   * @const
   */
  "specialprice": "specialprice",
  /**
   * value: "authbidnumber"
   * @const
   */
  "authbidnumber": "authbidnumber",
  /**
   * value: "commenttext"
   * @const
   */
  "commenttext": "commenttext",
  /**
   * value: "serialnumber"
   * @const
   */
  "serialnumber": "serialnumber",
  /**
   * value: "contactnumber"
   * @const
   */
  "contactnumber": "contactnumber",
  /**
   * value: "shipnotestxt"
   * @const
   */
  "shipnotestxt": "shipnotestxt"
};
var _default = exports["default"] = OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInnerProductextendedspecsInner;