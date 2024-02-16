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
 * The ReturnsDetailsResponseProductsInner model module.
 * @module model/ReturnsDetailsResponseProductsInner
 * @version 1.0.0
 */
var ReturnsDetailsResponseProductsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReturnsDetailsResponseProductsInner</code>.
   * @alias module:model/ReturnsDetailsResponseProductsInner
   */
  function ReturnsDetailsResponseProductsInner() {
    _classCallCheck(this, ReturnsDetailsResponseProductsInner);
    ReturnsDetailsResponseProductsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ReturnsDetailsResponseProductsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ReturnsDetailsResponseProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsDetailsResponseProductsInner} obj Optional instance to populate.
     * @return {module:model/ReturnsDetailsResponseProductsInner} The populated <code>ReturnsDetailsResponseProductsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReturnsDetailsResponseProductsInner();
        if (data.hasOwnProperty('ingramLineNumber')) {
          obj['ingramLineNumber'] = _ApiClient["default"].convertToType(data['ingramLineNumber'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('ingramPartNumber')) {
          obj['ingramPartNumber'] = _ApiClient["default"].convertToType(data['ingramPartNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorPartNumber')) {
          obj['vendorPartNumber'] = _ApiClient["default"].convertToType(data['vendorPartNumber'], 'String');
        }
        if (data.hasOwnProperty('upc')) {
          obj['upc'] = _ApiClient["default"].convertToType(data['upc'], 'String');
        }
        if (data.hasOwnProperty('invoiceDate')) {
          obj['invoiceDate'] = _ApiClient["default"].convertToType(data['invoiceDate'], 'Date');
        }
        if (data.hasOwnProperty('invoiceNumber')) {
          obj['invoiceNumber'] = _ApiClient["default"].convertToType(data['invoiceNumber'], 'String');
        }
        if (data.hasOwnProperty('customerOrderNumber')) {
          obj['customerOrderNumber'] = _ApiClient["default"].convertToType(data['customerOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('requestDetails')) {
          obj['requestDetails'] = _ApiClient["default"].convertToType(data['requestDetails'], 'String');
        }
        if (data.hasOwnProperty('quantity')) {
          obj['quantity'] = _ApiClient["default"].convertToType(data['quantity'], 'Number');
        }
        if (data.hasOwnProperty('unitPrice')) {
          obj['unitPrice'] = _ApiClient["default"].convertToType(data['unitPrice'], 'Number');
        }
        if (data.hasOwnProperty('extendedPrice')) {
          obj['extendedPrice'] = _ApiClient["default"].convertToType(data['extendedPrice'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('returnBranch')) {
          obj['returnBranch'] = _ApiClient["default"].convertToType(data['returnBranch'], 'Number');
        }
        if (data.hasOwnProperty('shipFromBranch')) {
          obj['shipFromBranch'] = _ApiClient["default"].convertToType(data['shipFromBranch'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsDetailsResponseProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsDetailsResponseProductsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      // ensure the json data is a string
      if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
      }
      // ensure the json data is a string
      if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
        throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
      }
      // ensure the json data is a string
      if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
        throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
      }
      // ensure the json data is a string
      if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
        throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
      }
      // ensure the json data is a string
      if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
      }
      // ensure the json data is a string
      if (data['requestDetails'] && !(typeof data['requestDetails'] === 'string' || data['requestDetails'] instanceof String)) {
        throw new Error("Expected the field `requestDetails` to be a primitive type in the JSON string but got " + data['requestDetails']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      return true;
    }
  }]);
  return ReturnsDetailsResponseProductsInner;
}();
/**
 * Unique Ingram Micro line number.
 * @member {String} ingramLineNumber
 */
ReturnsDetailsResponseProductsInner.prototype['ingramLineNumber'] = undefined;

/**
 * The description of the line item product.
 * @member {String} description
 */
ReturnsDetailsResponseProductsInner.prototype['description'] = undefined;

/**
 * Unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
ReturnsDetailsResponseProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
ReturnsDetailsResponseProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The UPC code of a product.
 * @member {String} upc
 */
ReturnsDetailsResponseProductsInner.prototype['upc'] = undefined;

/**
 * The date of the invoice.
 * @member {Date} invoiceDate
 */
ReturnsDetailsResponseProductsInner.prototype['invoiceDate'] = undefined;

/**
 * Ingram micro Invoice number.
 * @member {String} invoiceNumber
 */
ReturnsDetailsResponseProductsInner.prototype['invoiceNumber'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
ReturnsDetailsResponseProductsInner.prototype['customerOrderNumber'] = undefined;

/**
 * Request details.
 * @member {String} requestDetails
 */
ReturnsDetailsResponseProductsInner.prototype['requestDetails'] = undefined;

/**
 * The quantity of the line item.
 * @member {Number} quantity
 */
ReturnsDetailsResponseProductsInner.prototype['quantity'] = undefined;

/**
 * The unit price of the line item.
 * @member {Number} unitPrice
 */
ReturnsDetailsResponseProductsInner.prototype['unitPrice'] = undefined;

/**
 * Unit price X quantity for the line item.
 * @member {Number} extendedPrice
 */
ReturnsDetailsResponseProductsInner.prototype['extendedPrice'] = undefined;

/**
 * The status of the line item.
 * @member {String} status
 */
ReturnsDetailsResponseProductsInner.prototype['status'] = undefined;

/**
 * The code of the return branch.
 * @member {Number} returnBranch
 */
ReturnsDetailsResponseProductsInner.prototype['returnBranch'] = undefined;

/**
 * The code of the ship from branch.
 * @member {Number} shipFromBranch
 */
ReturnsDetailsResponseProductsInner.prototype['shipFromBranch'] = undefined;
var _default = exports["default"] = ReturnsDetailsResponseProductsInner;