/**
 * Reseller API
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
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
 * The OrderDetailB2BLinesInnerEstimatedDatesInnerShip model module.
 * @module model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip
 * @version 6.0
 */
class OrderDetailB2BLinesInnerEstimatedDatesInnerShip {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
     * @alias module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerEstimatedDatesInnerShip.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} The populated <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerEstimatedDatesInnerShip();

            if (data.hasOwnProperty('shipDateType')) {
                obj['shipDateType'] = ApiClient.convertToType(data['shipDateType'], 'String');
            }
            if (data.hasOwnProperty('shipDateRange')) {
                obj['shipDateRange'] = OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.constructFromObject(data['shipDateRange']);
            }
            if (data.hasOwnProperty('shipSource')) {
                obj['shipSource'] = ApiClient.convertToType(data['shipSource'], 'String');
            }
            if (data.hasOwnProperty('shipDescription')) {
                obj['shipDescription'] = ApiClient.convertToType(data['shipDescription'], 'String');
            }
            if (data.hasOwnProperty('shipDate')) {
                obj['shipDate'] = ApiClient.convertToType(data['shipDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInnerShip</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shipDateType'] && !(typeof data['shipDateType'] === 'string' || data['shipDateType'] instanceof String)) {
            throw new Error("Expected the field `shipDateType` to be a primitive type in the JSON string but got " + data['shipDateType']);
        }
        // validate the optional field `shipDateRange`
        if (data['shipDateRange']) { // data not null
          OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.validateJSON(data['shipDateRange']);
        }
        // ensure the json data is a string
        if (data['shipSource'] && !(typeof data['shipSource'] === 'string' || data['shipSource'] instanceof String)) {
            throw new Error("Expected the field `shipSource` to be a primitive type in the JSON string but got " + data['shipSource']);
        }
        // ensure the json data is a string
        if (data['shipDescription'] && !(typeof data['shipDescription'] === 'string' || data['shipDescription'] instanceof String)) {
            throw new Error("Expected the field `shipDescription` to be a primitive type in the JSON string but got " + data['shipDescription']);
        }
        // ensure the json data is a string
        if (data['shipDate'] && !(typeof data['shipDate'] === 'string' || data['shipDate'] instanceof String)) {
            throw new Error("Expected the field `shipDate` to be a primitive type in the JSON string but got " + data['shipDate']);
        }

        return true;
    }


}



/**
 * Date type. Example Single or multiple dates.
 * @member {String} shipDateType
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDateType'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange} shipDateRange
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDateRange'] = undefined;

/**
 * Source of the shipment.
 * @member {String} shipSource
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipSource'] = undefined;

/**
 * Shipment description.
 * @member {String} shipDescription
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDescription'] = undefined;

/**
 * Ship date.
 * @member {String} shipDate
 */
OrderDetailB2BLinesInnerEstimatedDatesInnerShip.prototype['shipDate'] = undefined;






export default OrderDetailB2BLinesInnerEstimatedDatesInnerShip;

