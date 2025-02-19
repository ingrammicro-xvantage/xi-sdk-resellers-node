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
import OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange from './OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange';

/**
 * The OrderDetailB2BLinesInnerMultipleShipmentsInner model module.
 * @module model/OrderDetailB2BLinesInnerMultipleShipmentsInner
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerMultipleShipmentsInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerMultipleShipmentsInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerMultipleShipmentsInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerMultipleShipmentsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerMultipleShipmentsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerMultipleShipmentsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerMultipleShipmentsInner} The populated <code>OrderDetailB2BLinesInnerMultipleShipmentsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerMultipleShipmentsInner();

            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'String');
            }
            if (data.hasOwnProperty('requestedQuantity')) {
                obj['requestedQuantity'] = ApiClient.convertToType(data['requestedQuantity'], 'Number');
            }
            if (data.hasOwnProperty('confirmedQuantity')) {
                obj['confirmedQuantity'] = ApiClient.convertToType(data['confirmedQuantity'], 'Number');
            }
            if (data.hasOwnProperty('dateType')) {
                obj['dateType'] = ApiClient.convertToType(data['dateType'], 'String');
            }
            if (data.hasOwnProperty('dateRange')) {
                obj['dateRange'] = OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.constructFromObject(data['dateRange']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('deliveryDate')) {
                obj['deliveryDate'] = ApiClient.convertToType(data['deliveryDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerMultipleShipmentsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerMultipleShipmentsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['lineNumber'] && !(typeof data['lineNumber'] === 'string' || data['lineNumber'] instanceof String)) {
            throw new Error("Expected the field `lineNumber` to be a primitive type in the JSON string but got " + data['lineNumber']);
        }
        // ensure the json data is a string
        if (data['dateType'] && !(typeof data['dateType'] === 'string' || data['dateType'] instanceof String)) {
            throw new Error("Expected the field `dateType` to be a primitive type in the JSON string but got " + data['dateType']);
        }
        // validate the optional field `dateRange`
        if (data['dateRange']) { // data not null
          OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.validateJSON(data['dateRange']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // ensure the json data is a string
        if (data['deliveryDate'] && !(typeof data['deliveryDate'] === 'string' || data['deliveryDate'] instanceof String)) {
            throw new Error("Expected the field `deliveryDate` to be a primitive type in the JSON string but got " + data['deliveryDate']);
        }

        return true;
    }


}



/**
 * Line number.
 * @member {String} lineNumber
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['lineNumber'] = undefined;

/**
 * Requested quantity.
 * @member {Number} requestedQuantity
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['requestedQuantity'] = undefined;

/**
 * Confirmed quantity.
 * @member {Number} confirmedQuantity
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['confirmedQuantity'] = undefined;

/**
 * Date type. Example Single or multiple dates.
 * @member {String} dateType
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['dateType'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange} dateRange
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['dateRange'] = undefined;

/**
 * Source.
 * @member {String} source
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['source'] = undefined;

/**
 * Description.
 * @member {String} description
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['description'] = undefined;

/**
 * Date.
 * @member {String} date
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['date'] = undefined;

/**
 * Delivery date.
 * @member {String} deliveryDate
 */
OrderDetailB2BLinesInnerMultipleShipmentsInner.prototype['deliveryDate'] = undefined;






export default OrderDetailB2BLinesInnerMultipleShipmentsInner;

