"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderCreateRequestAdditionalAttributesInner = _interopRequireDefault(require("./OrderCreateRequestAdditionalAttributesInner"));
var _OrderCreateRequestEndUserInfo = _interopRequireDefault(require("./OrderCreateRequestEndUserInfo"));
var _OrderCreateRequestLinesInner = _interopRequireDefault(require("./OrderCreateRequestLinesInner"));
var _OrderCreateRequestResellerInfo = _interopRequireDefault(require("./OrderCreateRequestResellerInfo"));
var _OrderCreateRequestShipToInfo = _interopRequireDefault(require("./OrderCreateRequestShipToInfo"));
var _OrderCreateRequestShipmentDetails = _interopRequireDefault(require("./OrderCreateRequestShipmentDetails"));
var _OrderCreateRequestVmf = _interopRequireDefault(require("./OrderCreateRequestVmf"));
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
 * The OrderCreateRequest model module.
 * @module model/OrderCreateRequest
 * @version 1.0.0
 */
var OrderCreateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderCreateRequest</code>.
   * @alias module:model/OrderCreateRequest
   * @param customerOrderNumber {String} The reseller's unique PO/Order number.
   */
  function OrderCreateRequest(customerOrderNumber) {
    _classCallCheck(this, OrderCreateRequest);
    OrderCreateRequest.initialize(this, customerOrderNumber);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderCreateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, customerOrderNumber) {
      obj['customerOrderNumber'] = customerOrderNumber;
    }

    /**
     * Constructs a <code>OrderCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequest} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequest} The populated <code>OrderCreateRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderCreateRequest();
        if (data.hasOwnProperty('customerOrderNumber')) {
          obj['customerOrderNumber'] = _ApiClient["default"].convertToType(data['customerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('endCustomerOrderNumber')) {
          obj['endCustomerOrderNumber'] = _ApiClient["default"].convertToType(data['endCustomerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('billToAddressId')) {
          obj['billToAddressId'] = _ApiClient["default"].convertToType(data['billToAddressId'], 'String');
        }
        if (data.hasOwnProperty('specialBidNumber')) {
          obj['specialBidNumber'] = _ApiClient["default"].convertToType(data['specialBidNumber'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], 'String');
        }
        if (data.hasOwnProperty('acceptBackOrder')) {
          obj['acceptBackOrder'] = _ApiClient["default"].convertToType(data['acceptBackOrder'], 'Boolean');
        }
        if (data.hasOwnProperty('resellerInfo')) {
          obj['resellerInfo'] = _OrderCreateRequestResellerInfo["default"].constructFromObject(data['resellerInfo']);
        }
        if (data.hasOwnProperty('vmf')) {
          obj['vmf'] = _OrderCreateRequestVmf["default"].constructFromObject(data['vmf']);
        }
        if (data.hasOwnProperty('shipToInfo')) {
          obj['shipToInfo'] = _OrderCreateRequestShipToInfo["default"].constructFromObject(data['shipToInfo']);
        }
        if (data.hasOwnProperty('endUserInfo')) {
          obj['endUserInfo'] = _OrderCreateRequestEndUserInfo["default"].constructFromObject(data['endUserInfo']);
        }
        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_OrderCreateRequestLinesInner["default"]]);
        }
        if (data.hasOwnProperty('shipmentDetails')) {
          obj['shipmentDetails'] = _OrderCreateRequestShipmentDetails["default"].constructFromObject(data['shipmentDetails']);
        }
        if (data.hasOwnProperty('additionalAttributes')) {
          obj['additionalAttributes'] = _ApiClient["default"].convertToType(data['additionalAttributes'], [_OrderCreateRequestAdditionalAttributesInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequest</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(OrderCreateRequest.RequiredProperties),
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
      if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
        throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
      }
      // ensure the json data is a string
      if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
        throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
      }
      // ensure the json data is a string
      if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
        throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
      }
      // validate the optional field `resellerInfo`
      if (data['resellerInfo']) {
        // data not null
        _OrderCreateRequestResellerInfo["default"].validateJSON(data['resellerInfo']);
      }
      // validate the optional field `vmf`
      if (data['vmf']) {
        // data not null
        _OrderCreateRequestVmf["default"].validateJSON(data['vmf']);
      }
      // validate the optional field `shipToInfo`
      if (data['shipToInfo']) {
        // data not null
        _OrderCreateRequestShipToInfo["default"].validateJSON(data['shipToInfo']);
      }
      // validate the optional field `endUserInfo`
      if (data['endUserInfo']) {
        // data not null
        _OrderCreateRequestEndUserInfo["default"].validateJSON(data['endUserInfo']);
      }
      if (data['lines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
          throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }
        // validate the optional field `lines` (array)
        var _iterator2 = _createForOfIteratorHelper(data['lines']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _OrderCreateRequestLinesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `shipmentDetails`
      if (data['shipmentDetails']) {
        // data not null
        _OrderCreateRequestShipmentDetails["default"].validateJSON(data['shipmentDetails']);
      }
      if (data['additionalAttributes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['additionalAttributes'])) {
          throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
        }
        // validate the optional field `additionalAttributes` (array)
        var _iterator3 = _createForOfIteratorHelper(data['additionalAttributes']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _OrderCreateRequestAdditionalAttributesInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      return true;
    }
  }]);
  return OrderCreateRequest;
}();
OrderCreateRequest.RequiredProperties = ["customerOrderNumber"];

/**
 * The reseller's unique PO/Order number.
 * @member {String} customerOrderNumber
 */
OrderCreateRequest.prototype['customerOrderNumber'] = undefined;

/**
 * The end user/customer's Purchase Order number.
 * @member {String} endCustomerOrderNumber
 */
OrderCreateRequest.prototype['endCustomerOrderNumber'] = undefined;

/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit.
 * @member {String} billToAddressId
 */
OrderCreateRequest.prototype['billToAddressId'] = undefined;

/**
 * The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderCreateRequest.prototype['specialBidNumber'] = undefined;

/**
 * Order level notes.
 * @member {String} notes
 */
OrderCreateRequest.prototype['notes'] = undefined;

/**
 * ENUM [\"true\",\"false\"] - accept order if this item is backordered. This field along with shipComplete field decides the value of backorderflag. The value of this field is ignored when shipComplete field is present.
 * @member {Boolean} acceptBackOrder
 */
OrderCreateRequest.prototype['acceptBackOrder'] = undefined;

/**
 * @member {module:model/OrderCreateRequestResellerInfo} resellerInfo
 */
OrderCreateRequest.prototype['resellerInfo'] = undefined;

/**
 * @member {module:model/OrderCreateRequestVmf} vmf
 */
OrderCreateRequest.prototype['vmf'] = undefined;

/**
 * @member {module:model/OrderCreateRequestShipToInfo} shipToInfo
 */
OrderCreateRequest.prototype['shipToInfo'] = undefined;

/**
 * @member {module:model/OrderCreateRequestEndUserInfo} endUserInfo
 */
OrderCreateRequest.prototype['endUserInfo'] = undefined;

/**
 * The line-level details of the order.
 * @member {Array.<module:model/OrderCreateRequestLinesInner>} lines
 */
OrderCreateRequest.prototype['lines'] = undefined;

/**
 * @member {module:model/OrderCreateRequestShipmentDetails} shipmentDetails
 */
OrderCreateRequest.prototype['shipmentDetails'] = undefined;

/**
 * Shipment-level additional attributes.
 * @member {Array.<module:model/OrderCreateRequestAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateRequest.prototype['additionalAttributes'] = undefined;
var _default = exports["default"] = OrderCreateRequest;