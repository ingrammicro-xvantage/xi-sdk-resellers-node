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
 * The PriceAndAvailabilityRequestAvailabilityByWarehouseInner model module.
 * @module model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner
 * @version 1.0.0
 */
var PriceAndAvailabilityRequestAvailabilityByWarehouseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
   * @alias module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner
   */
  function PriceAndAvailabilityRequestAvailabilityByWarehouseInner() {
    _classCallCheck(this, PriceAndAvailabilityRequestAvailabilityByWarehouseInner);
    PriceAndAvailabilityRequestAvailabilityByWarehouseInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PriceAndAvailabilityRequestAvailabilityByWarehouseInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestAvailabilityByWarehouseInner} The populated <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PriceAndAvailabilityRequestAvailabilityByWarehouseInner();
        if (data.hasOwnProperty('availabilityByWarehouseId')) {
          obj['availabilityByWarehouseId'] = _ApiClient["default"].convertToType(data['availabilityByWarehouseId'], 'String');
        }
        if (data.hasOwnProperty('availabilityForAllLocation')) {
          obj['availabilityForAllLocation'] = _ApiClient["default"].convertToType(data['availabilityForAllLocation'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestAvailabilityByWarehouseInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['availabilityByWarehouseId'] && !(typeof data['availabilityByWarehouseId'] === 'string' || data['availabilityByWarehouseId'] instanceof String)) {
        throw new Error("Expected the field `availabilityByWarehouseId` to be a primitive type in the JSON string but got " + data['availabilityByWarehouseId']);
      }
      return true;
    }
  }]);
  return PriceAndAvailabilityRequestAvailabilityByWarehouseInner;
}();
/**
 * Plant/warehouse Id of a particular location in order to get just the inventory of that location.
 * @member {String} availabilityByWarehouseId
 */
PriceAndAvailabilityRequestAvailabilityByWarehouseInner.prototype['availabilityByWarehouseId'] = undefined;

/**
 * Pass boolean value as input, if true the response will contain warehouse location details, if false the response will not hold warehouse location details. By default value is true.
 * @member {Boolean} availabilityForAllLocation
 */
PriceAndAvailabilityRequestAvailabilityByWarehouseInner.prototype['availabilityForAllLocation'] = undefined;
var _default = exports["default"] = PriceAndAvailabilityRequestAvailabilityByWarehouseInner;