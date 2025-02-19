/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrderDetailB2BLinesInnerAdditionalAttributesInner from './OrderDetailB2BLinesInnerAdditionalAttributesInner';
import OrderDetailB2BLinesInnerEstimatedDatesInner from './OrderDetailB2BLinesInnerEstimatedDatesInner';
import OrderDetailB2BLinesInnerLinksInner from './OrderDetailB2BLinesInnerLinksInner';
import OrderDetailB2BLinesInnerMultipleShipmentsInner from './OrderDetailB2BLinesInnerMultipleShipmentsInner';
import OrderDetailB2BLinesInnerScheduleLinesInner from './OrderDetailB2BLinesInnerScheduleLinesInner';
import OrderDetailB2BLinesInnerServiceContractInfo from './OrderDetailB2BLinesInnerServiceContractInfo';
import OrderDetailB2BLinesInnerShipmentDetailsInner from './OrderDetailB2BLinesInnerShipmentDetailsInner';

/**
 * The OrderDetailB2BLinesInner model module.
 * @module model/OrderDetailB2BLinesInner
 * @version 1.0.0
 */
class OrderDetailB2BLinesInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInner</code>.
     * @alias module:model/OrderDetailB2BLinesInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInner} The populated <code>OrderDetailB2BLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInner();

            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderLineNumber')) {
                obj['ingramOrderLineNumber'] = ApiClient.convertToType(data['ingramOrderLineNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorSalesOrderLineNumber')) {
                obj['vendorSalesOrderLineNumber'] = ApiClient.convertToType(data['vendorSalesOrderLineNumber'], 'String');
            }
            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('lineStatus')) {
                obj['lineStatus'] = ApiClient.convertToType(data['lineStatus'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('partDescription')) {
                obj['partDescription'] = ApiClient.convertToType(data['partDescription'], 'String');
            }
            if (data.hasOwnProperty('unitWeight')) {
                obj['unitWeight'] = ApiClient.convertToType(data['unitWeight'], 'Number');
            }
            if (data.hasOwnProperty('weightUom')) {
                obj['weightUom'] = ApiClient.convertToType(data['weightUom'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('upcCode')) {
                obj['upcCode'] = ApiClient.convertToType(data['upcCode'], 'String');
            }
            if (data.hasOwnProperty('extendedPrice')) {
                obj['extendedPrice'] = ApiClient.convertToType(data['extendedPrice'], 'Number');
            }
            if (data.hasOwnProperty('taxAmount')) {
                obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('quantityOrdered')) {
                obj['quantityOrdered'] = ApiClient.convertToType(data['quantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('quantityConfirmed')) {
                obj['quantityConfirmed'] = ApiClient.convertToType(data['quantityConfirmed'], 'Number');
            }
            if (data.hasOwnProperty('quantityBackOrdered')) {
                obj['quantityBackOrdered'] = ApiClient.convertToType(data['quantityBackOrdered'], 'Number');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('requestedDeliverydate')) {
                obj['requestedDeliverydate'] = ApiClient.convertToType(data['requestedDeliverydate'], 'String');
            }
            if (data.hasOwnProperty('promisedDeliveryDate')) {
                obj['promisedDeliveryDate'] = ApiClient.convertToType(data['promisedDeliveryDate'], 'String');
            }
            if (data.hasOwnProperty('backOrderETADate')) {
                obj['backOrderETADate'] = ApiClient.convertToType(data['backOrderETADate'], 'String');
            }
            if (data.hasOwnProperty('lineNotes')) {
                obj['lineNotes'] = ApiClient.convertToType(data['lineNotes'], 'String');
            }
            if (data.hasOwnProperty('shipmentDetails')) {
                obj['shipmentDetails'] = ApiClient.convertToType(data['shipmentDetails'], [OrderDetailB2BLinesInnerShipmentDetailsInner]);
            }
            if (data.hasOwnProperty('serviceContractInfo')) {
                obj['serviceContractInfo'] = OrderDetailB2BLinesInnerServiceContractInfo.constructFromObject(data['serviceContractInfo']);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderDetailB2BLinesInnerAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [OrderDetailB2BLinesInnerLinksInner]);
            }
            if (data.hasOwnProperty('estimatedDates')) {
                obj['estimatedDates'] = ApiClient.convertToType(data['estimatedDates'], [OrderDetailB2BLinesInnerEstimatedDatesInner]);
            }
            if (data.hasOwnProperty('scheduleLines')) {
                obj['scheduleLines'] = ApiClient.convertToType(data['scheduleLines'], [OrderDetailB2BLinesInnerScheduleLinesInner]);
            }
            if (data.hasOwnProperty('multipleShipments')) {
                obj['multipleShipments'] = ApiClient.convertToType(data['multipleShipments'], [OrderDetailB2BLinesInnerMultipleShipmentsInner]);
            }
            if (data.hasOwnProperty('defaultCarrierName')) {
                obj['defaultCarrierName'] = ApiClient.convertToType(data['defaultCarrierName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInner</code>.
     */
    static validateJSON(data) {
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
        if (data['backOrderETADate'] && !(typeof data['backOrderETADate'] === 'string' || data['backOrderETADate'] instanceof String)) {
            throw new Error("Expected the field `backOrderETADate` to be a primitive type in the JSON string but got " + data['backOrderETADate']);
        }
        // ensure the json data is a string
        if (data['lineNotes'] && !(typeof data['lineNotes'] === 'string' || data['lineNotes'] instanceof String)) {
            throw new Error("Expected the field `lineNotes` to be a primitive type in the JSON string but got " + data['lineNotes']);
        }
        if (data['shipmentDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipmentDetails'])) {
                throw new Error("Expected the field `shipmentDetails` to be an array in the JSON data but got " + data['shipmentDetails']);
            }
            // validate the optional field `shipmentDetails` (array)
            for (const item of data['shipmentDetails']) {
                OrderDetailB2BLinesInnerShipmentDetailsInner.validateJSON(item);
            };
        }
        // validate the optional field `serviceContractInfo`
        if (data['serviceContractInfo']) { // data not null
          OrderDetailB2BLinesInnerServiceContractInfo.validateJSON(data['serviceContractInfo']);
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderDetailB2BLinesInnerAdditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                OrderDetailB2BLinesInnerLinksInner.validateJSON(item);
            };
        }
        if (data['estimatedDates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['estimatedDates'])) {
                throw new Error("Expected the field `estimatedDates` to be an array in the JSON data but got " + data['estimatedDates']);
            }
            // validate the optional field `estimatedDates` (array)
            for (const item of data['estimatedDates']) {
                OrderDetailB2BLinesInnerEstimatedDatesInner.validateJSON(item);
            };
        }
        if (data['scheduleLines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['scheduleLines'])) {
                throw new Error("Expected the field `scheduleLines` to be an array in the JSON data but got " + data['scheduleLines']);
            }
            // validate the optional field `scheduleLines` (array)
            for (const item of data['scheduleLines']) {
                OrderDetailB2BLinesInnerScheduleLinesInner.validateJSON(item);
            };
        }
        if (data['multipleShipments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['multipleShipments'])) {
                throw new Error("Expected the field `multipleShipments` to be an array in the JSON data but got " + data['multipleShipments']);
            }
            // validate the optional field `multipleShipments` (array)
            for (const item of data['multipleShipments']) {
                OrderDetailB2BLinesInnerMultipleShipmentsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['defaultCarrierName'] && !(typeof data['defaultCarrierName'] === 'string' || data['defaultCarrierName'] instanceof String)) {
            throw new Error("Expected the field `defaultCarrierName` to be a primitive type in the JSON string but got " + data['defaultCarrierName']);
        }

        return true;
    }


}



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
 * Backorder ETA date
 * @member {String} backOrderETADate
 */
OrderDetailB2BLinesInner.prototype['backOrderETADate'] = undefined;

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

/**
 * @member {String} defaultCarrierName
 */
OrderDetailB2BLinesInner.prototype['defaultCarrierName'] = undefined;






export default OrderDetailB2BLinesInner;

