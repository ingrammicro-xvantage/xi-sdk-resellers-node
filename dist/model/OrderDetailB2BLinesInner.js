"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OrderDetailB2BLinesInnerAdditionalAttributesInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerAdditionalAttributesInner"));
var _OrderDetailB2BLinesInnerEstimatedDatesInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerEstimatedDatesInner"));
var _OrderDetailB2BLinesInnerLinksInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerLinksInner"));
var _OrderDetailB2BLinesInnerMultipleShipmentsInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerMultipleShipmentsInner"));
var _OrderDetailB2BLinesInnerScheduleLinesInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerScheduleLinesInner"));
var _OrderDetailB2BLinesInnerServiceContractInfo = _interopRequireDefault(require("./OrderDetailB2BLinesInnerServiceContractInfo"));
var _OrderDetailB2BLinesInnerShipmentDetailsInner = _interopRequireDefault(require("./OrderDetailB2BLinesInnerShipmentDetailsInner"));
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
 * The OrderDetailB2BLinesInner model module.
 * @module model/OrderDetailB2BLinesInner
 * @version 1.0.0
 */
var OrderDetailB2BLinesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderDetailB2BLinesInner</code>.
   * @alias module:model/OrderDetailB2BLinesInner
   */
  function OrderDetailB2BLinesInner() {
    _classCallCheck(this, OrderDetailB2BLinesInner);
    OrderDetailB2BLinesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OrderDetailB2BLinesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OrderDetailB2BLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInner} The populated <code>OrderDetailB2BLinesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderDetailB2BLinesInner();
        if (data.hasOwnProperty('subOrderNumber')) {
          obj['subOrderNumber'] = _ApiClient["default"].convertToType(data['subOrderNumber'], 'String');
        }
        if (data.hasOwnProperty('ingramOrderLineNumber')) {
          obj['ingramOrderLineNumber'] = _ApiClient["default"].convertToType(data['ingramOrderLineNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorSalesOrderLineNumber')) {
          obj['vendorSalesOrderLineNumber'] = _ApiClient["default"].convertToType(data['vendorSalesOrderLineNumber'], 'String');
        }
        if (data.hasOwnProperty('customerLineNumber')) {
          obj['customerLineNumber'] = _ApiClient["default"].convertToType(data['customerLineNumber'], 'String');
        }
        if (data.hasOwnProperty('lineStatus')) {
          obj['lineStatus'] = _ApiClient["default"].convertToType(data['lineStatus'], 'String');
        }
        if (data.hasOwnProperty('ingramPartNumber')) {
          obj['ingramPartNumber'] = _ApiClient["default"].convertToType(data['ingramPartNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorPartNumber')) {
          obj['vendorPartNumber'] = _ApiClient["default"].convertToType(data['vendorPartNumber'], 'String');
        }
        if (data.hasOwnProperty('vendorName')) {
          obj['vendorName'] = _ApiClient["default"].convertToType(data['vendorName'], 'String');
        }
        if (data.hasOwnProperty('partDescription')) {
          obj['partDescription'] = _ApiClient["default"].convertToType(data['partDescription'], 'String');
        }
        if (data.hasOwnProperty('unitWeight')) {
          obj['unitWeight'] = _ApiClient["default"].convertToType(data['unitWeight'], 'Number');
        }
        if (data.hasOwnProperty('weightUom')) {
          obj['weightUom'] = _ApiClient["default"].convertToType(data['weightUom'], 'String');
        }
        if (data.hasOwnProperty('unitPrice')) {
          obj['unitPrice'] = _ApiClient["default"].convertToType(data['unitPrice'], 'Number');
        }
        if (data.hasOwnProperty('upcCode')) {
          obj['upcCode'] = _ApiClient["default"].convertToType(data['upcCode'], 'String');
        }
        if (data.hasOwnProperty('extendedPrice')) {
          obj['extendedPrice'] = _ApiClient["default"].convertToType(data['extendedPrice'], 'Number');
        }
        if (data.hasOwnProperty('taxAmount')) {
          obj['taxAmount'] = _ApiClient["default"].convertToType(data['taxAmount'], 'Number');
        }
        if (data.hasOwnProperty('currencyCode')) {
          obj['currencyCode'] = _ApiClient["default"].convertToType(data['currencyCode'], 'String');
        }
        if (data.hasOwnProperty('quantityOrdered')) {
          obj['quantityOrdered'] = _ApiClient["default"].convertToType(data['quantityOrdered'], 'Number');
        }
        if (data.hasOwnProperty('quantityConfirmed')) {
          obj['quantityConfirmed'] = _ApiClient["default"].convertToType(data['quantityConfirmed'], 'Number');
        }
        if (data.hasOwnProperty('quantityBackOrdered')) {
          obj['quantityBackOrdered'] = _ApiClient["default"].convertToType(data['quantityBackOrdered'], 'Number');
        }
        if (data.hasOwnProperty('specialBidNumber')) {
          obj['specialBidNumber'] = _ApiClient["default"].convertToType(data['specialBidNumber'], 'String');
        }
        if (data.hasOwnProperty('requestedDeliverydate')) {
          obj['requestedDeliverydate'] = _ApiClient["default"].convertToType(data['requestedDeliverydate'], 'String');
        }
        if (data.hasOwnProperty('promisedDeliveryDate')) {
          obj['promisedDeliveryDate'] = _ApiClient["default"].convertToType(data['promisedDeliveryDate'], 'String');
        }
        if (data.hasOwnProperty('lineNotes')) {
          obj['lineNotes'] = _ApiClient["default"].convertToType(data['lineNotes'], 'String');
        }
        if (data.hasOwnProperty('shipmentDetails')) {
          obj['shipmentDetails'] = _ApiClient["default"].convertToType(data['shipmentDetails'], [_OrderDetailB2BLinesInnerShipmentDetailsInner["default"]]);
        }
        if (data.hasOwnProperty('serviceContractInfo')) {
          obj['serviceContractInfo'] = _OrderDetailB2BLinesInnerServiceContractInfo["default"].constructFromObject(data['serviceContractInfo']);
        }
        if (data.hasOwnProperty('additionalAttributes')) {
          obj['additionalAttributes'] = _ApiClient["default"].convertToType(data['additionalAttributes'], [_OrderDetailB2BLinesInnerAdditionalAttributesInner["default"]]);
        }
        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_OrderDetailB2BLinesInnerLinksInner["default"]]);
        }
        if (data.hasOwnProperty('estimatedDates')) {
          obj['estimatedDates'] = _ApiClient["default"].convertToType(data['estimatedDates'], [_OrderDetailB2BLinesInnerEstimatedDatesInner["default"]]);
        }
        if (data.hasOwnProperty('scheduleLines')) {
          obj['scheduleLines'] = _ApiClient["default"].convertToType(data['scheduleLines'], [_OrderDetailB2BLinesInnerScheduleLinesInner["default"]]);
        }
        if (data.hasOwnProperty('multipleShipments')) {
          obj['multipleShipments'] = _ApiClient["default"].convertToType(data['multipleShipments'], [_OrderDetailB2BLinesInnerMultipleShipmentsInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
        throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
      }
      // ensure the json data is a string
      if (data['ingramOrderLineNumber'] && !(typeof data['ingramOrderLineNumber'] === 'string' || data['ingramOrderLineNumber'] instanceof String)) {
        throw new Error("Expected the field `ingramOrderLineNumber` to be a primitive type in the JSON string but got " + data['ingramOrderLineNumber']);
      }
      // ensure the json data is a string
      if (data['vendorSalesOrderLineNumber'] && !(typeof data['vendorSalesOrderLineNumber'] === 'string' || data['vendorSalesOrderLineNumber'] instanceof String)) {
        throw new Error("Expected the field `vendorSalesOrderLineNumber` to be a primitive type in the JSON string but got " + data['vendorSalesOrderLineNumber']);
      }
      // ensure the json data is a string
      if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
        throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
      }
      // ensure the json data is a string
      if (data['lineStatus'] && !(typeof data['lineStatus'] === 'string' || data['lineStatus'] instanceof String)) {
        throw new Error("Expected the field `lineStatus` to be a primitive type in the JSON string but got " + data['lineStatus']);
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
      if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
        throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
      }
      // ensure the json data is a string
      if (data['partDescription'] && !(typeof data['partDescription'] === 'string' || data['partDescription'] instanceof String)) {
        throw new Error("Expected the field `partDescription` to be a primitive type in the JSON string but got " + data['partDescription']);
      }
      // ensure the json data is a string
      if (data['weightUom'] && !(typeof data['weightUom'] === 'string' || data['weightUom'] instanceof String)) {
        throw new Error("Expected the field `weightUom` to be a primitive type in the JSON string but got " + data['weightUom']);
      }
      // ensure the json data is a string
      if (data['upcCode'] && !(typeof data['upcCode'] === 'string' || data['upcCode'] instanceof String)) {
        throw new Error("Expected the field `upcCode` to be a primitive type in the JSON string but got " + data['upcCode']);
      }
      // ensure the json data is a string
      if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
        throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
      }
      // ensure the json data is a string
      if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
        throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
      }
      // ensure the json data is a string
      if (data['requestedDeliverydate'] && !(typeof data['requestedDeliverydate'] === 'string' || data['requestedDeliverydate'] instanceof String)) {
        throw new Error("Expected the field `requestedDeliverydate` to be a primitive type in the JSON string but got " + data['requestedDeliverydate']);
      }
      // ensure the json data is a string
      if (data['promisedDeliveryDate'] && !(typeof data['promisedDeliveryDate'] === 'string' || data['promisedDeliveryDate'] instanceof String)) {
        throw new Error("Expected the field `promisedDeliveryDate` to be a primitive type in the JSON string but got " + data['promisedDeliveryDate']);
      }
      // ensure the json data is a string
      if (data['lineNotes'] && !(typeof data['lineNotes'] === 'string' || data['lineNotes'] instanceof String)) {
        throw new Error("Expected the field `lineNotes` to be a primitive type in the JSON string but got " + data['lineNotes']);
      }
      if (data['shipmentDetails']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['shipmentDetails'])) {
          throw new Error("Expected the field `shipmentDetails` to be an array in the JSON data but got " + data['shipmentDetails']);
        }
        // validate the optional field `shipmentDetails` (array)
        var _iterator = _createForOfIteratorHelper(data['shipmentDetails']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _OrderDetailB2BLinesInnerShipmentDetailsInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // validate the optional field `serviceContractInfo`
      if (data['serviceContractInfo']) {
        // data not null
        _OrderDetailB2BLinesInnerServiceContractInfo["default"].validateJSON(data['serviceContractInfo']);
      }
      if (data['additionalAttributes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['additionalAttributes'])) {
          throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
        }
        // validate the optional field `additionalAttributes` (array)
        var _iterator2 = _createForOfIteratorHelper(data['additionalAttributes']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _OrderDetailB2BLinesInnerAdditionalAttributesInner["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['links']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['links'])) {
          throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
        }
        // validate the optional field `links` (array)
        var _iterator3 = _createForOfIteratorHelper(data['links']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _OrderDetailB2BLinesInnerLinksInner["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['estimatedDates']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['estimatedDates'])) {
          throw new Error("Expected the field `estimatedDates` to be an array in the JSON data but got " + data['estimatedDates']);
        }
        // validate the optional field `estimatedDates` (array)
        var _iterator4 = _createForOfIteratorHelper(data['estimatedDates']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _OrderDetailB2BLinesInnerEstimatedDatesInner["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
      }
      if (data['scheduleLines']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['scheduleLines'])) {
          throw new Error("Expected the field `scheduleLines` to be an array in the JSON data but got " + data['scheduleLines']);
        }
        // validate the optional field `scheduleLines` (array)
        var _iterator5 = _createForOfIteratorHelper(data['scheduleLines']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item4 = _step5.value;
            _OrderDetailB2BLinesInnerScheduleLinesInner["default"].validateJSON(_item4);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        ;
      }
      if (data['multipleShipments']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['multipleShipments'])) {
          throw new Error("Expected the field `multipleShipments` to be an array in the JSON data but got " + data['multipleShipments']);
        }
        // validate the optional field `multipleShipments` (array)
        var _iterator6 = _createForOfIteratorHelper(data['multipleShipments']),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _item5 = _step6.value;
            _OrderDetailB2BLinesInnerMultipleShipmentsInner["default"].validateJSON(_item5);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        ;
      }
      return true;
    }
  }]);
  return OrderDetailB2BLinesInner;
}();
/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderDetailB2BLinesInner.prototype['subOrderNumber'] = undefined;

/**
 * Unique Ingram Micro line number. Starts with 001.
 * @member {String} ingramOrderLineNumber
 */
OrderDetailB2BLinesInner.prototype['ingramOrderLineNumber'] = undefined;

/**
 * The vendor's sales order line number.
 * @member {String} vendorSalesOrderLineNumber
 */
OrderDetailB2BLinesInner.prototype['vendorSalesOrderLineNumber'] = undefined;

/**
 * The reseller's line item number for reference in their system.
 * @member {String} customerLineNumber
 */
OrderDetailB2BLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The status for the line item in the order. One of- Backordered, In Progress, Shipped, Delivered, Canceled, On Hold.
 * @member {String} lineStatus
 */
OrderDetailB2BLinesInner.prototype['lineStatus'] = undefined;

/**
 * Unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
OrderDetailB2BLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
OrderDetailB2BLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * The vendor's name for the part in their system.
 * @member {String} vendorName
 */
OrderDetailB2BLinesInner.prototype['vendorName'] = undefined;

/**
 * The vendor's description of the part in their system.
 * @member {String} partDescription
 */
OrderDetailB2BLinesInner.prototype['partDescription'] = undefined;

/**
 * The unit weight of the line item.
 * @member {Number} unitWeight
 */
OrderDetailB2BLinesInner.prototype['unitWeight'] = undefined;

/**
 * The unit of measure for the line item.
 * @member {String} weightUom
 */
OrderDetailB2BLinesInner.prototype['weightUom'] = undefined;

/**
 * The unit price of the line item.
 * @member {Number} unitPrice
 */
OrderDetailB2BLinesInner.prototype['unitPrice'] = undefined;

/**
 * The UPC code of a product.
 * @member {String} upcCode
 */
OrderDetailB2BLinesInner.prototype['upcCode'] = undefined;

/**
 * Unit price X quantity for the line item.
 * @member {Number} extendedPrice
 */
OrderDetailB2BLinesInner.prototype['extendedPrice'] = undefined;

/**
 * The tax amount for the line item.
 * @member {Number} taxAmount
 */
OrderDetailB2BLinesInner.prototype['taxAmount'] = undefined;

/**
 * The country-specific three character ISO 4217 currency code for the line item.
 * @member {String} currencyCode
 */
OrderDetailB2BLinesInner.prototype['currencyCode'] = undefined;

/**
 * The quantity ordered of the line item.
 * @member {Number} quantityOrdered
 */
OrderDetailB2BLinesInner.prototype['quantityOrdered'] = undefined;

/**
 * The quantity confirmed for the line item.
 * @member {Number} quantityConfirmed
 */
OrderDetailB2BLinesInner.prototype['quantityConfirmed'] = undefined;

/**
 * The quantity backordered for the line item.
 * @member {Number} quantityBackOrdered
 */
OrderDetailB2BLinesInner.prototype['quantityBackOrdered'] = undefined;

/**
 * The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid numbers take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderDetailB2BLinesInner.prototype['specialBidNumber'] = undefined;

/**
 * Reseller-requested delivery date. Delivery date is not guaranteed.
 * @member {String} requestedDeliverydate
 */
OrderDetailB2BLinesInner.prototype['requestedDeliverydate'] = undefined;

/**
 * The delivery date promised by IngramMicro.
 * @member {String} promisedDeliveryDate
 */
OrderDetailB2BLinesInner.prototype['promisedDeliveryDate'] = undefined;

/**
 * Line-level notes for the order.
 * @member {String} lineNotes
 */
OrderDetailB2BLinesInner.prototype['lineNotes'] = undefined;

/**
 * Shipping details for the line item.
 * @member {Array.<module:model/OrderDetailB2BLinesInnerShipmentDetailsInner>} shipmentDetails
 */
OrderDetailB2BLinesInner.prototype['shipmentDetails'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerServiceContractInfo} serviceContractInfo
 */
OrderDetailB2BLinesInner.prototype['serviceContractInfo'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderDetailB2BLinesInner.prototype['additionalAttributes'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInnerLinksInner>} links
 */
OrderDetailB2BLinesInner.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInnerEstimatedDatesInner>} estimatedDates
 */
OrderDetailB2BLinesInner.prototype['estimatedDates'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInnerScheduleLinesInner>} scheduleLines
 */
OrderDetailB2BLinesInner.prototype['scheduleLines'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInnerMultipleShipmentsInner>} multipleShipments
 */
OrderDetailB2BLinesInner.prototype['multipleShipments'] = undefined;
var _default = exports["default"] = OrderDetailB2BLinesInner;