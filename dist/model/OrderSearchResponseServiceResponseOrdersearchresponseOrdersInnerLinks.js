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
 * The OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks model module.
 * @module model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks
 * @version 1.0.0
 */
var OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks</code>.
   * HATEOAS links for the main order
   * @alias module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks
   */
  function OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks() {
    _classCallCheck(this, OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks);
    OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks} The populated <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks();
        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }
        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['topic'] && !(typeof data['topic'] === 'string' || data['topic'] instanceof String)) {
        throw new Error("Expected the field `topic` to be a primitive type in the JSON string but got " + data['topic']);
      }
      // ensure the json data is a string
      if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
        throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
  return OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks;
}();
/**
 * Topic being orders in this case, if it is orders then the link will provide details of the order.
 * @member {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.TopicEnum} topic
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.prototype['topic'] = undefined;

/**
 * The API endpoint for accessing the relevant data
 * @member {String} href
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.prototype['href'] = undefined;

/**
 * The type of call that can be made to the href link
 * @member {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.TypeEnum} type
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.prototype['type'] = undefined;

/**
 * Allowed values for the <code>topic</code> property.
 * @enum {String}
 * @readonly
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks['TopicEnum'] = {
  /**
   * value: "orders"
   * @const
   */
  "orders": "orders",
  /**
   * value: "invoices"
   * @const
   */
  "invoices": "invoices"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks['TypeEnum'] = {
  /**
   * value: "GET"
   * @const
   */
  "GET": "GET",
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",
  /**
   * value: "PUT"
   * @const
   */
  "PUT": "PUT"
};
var _default = exports["default"] = OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks;