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
import OrderModifyRequestAdditionalAttributesInner from './OrderModifyRequestAdditionalAttributesInner';
import OrderModifyRequestLinesInner from './OrderModifyRequestLinesInner';
import OrderModifyRequestShipToInfo from './OrderModifyRequestShipToInfo';

/**
 * The OrderModifyRequest model module.
 * @module model/OrderModifyRequest
 * @version 1.0.0
 */
class OrderModifyRequest {
    /**
     * Constructs a new <code>OrderModifyRequest</code>.
     * @alias module:model/OrderModifyRequest
     */
    constructor() { 
        
        OrderModifyRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequest} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequest} The populated <code>OrderModifyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyRequest();

            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('shipToInfo')) {
                obj['shipToInfo'] = OrderModifyRequestShipToInfo.constructFromObject(data['shipToInfo']);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [OrderModifyRequestLinesInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderModifyRequestAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // validate the optional field `shipToInfo`
        if (data['shipToInfo']) { // data not null
          OrderModifyRequestShipToInfo.validateJSON(data['shipToInfo']);
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                OrderModifyRequestLinesInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderModifyRequestAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Shipment-level notes.
 * @member {String} notes
 */
OrderModifyRequest.prototype['notes'] = undefined;

/**
 * @member {module:model/OrderModifyRequestShipToInfo} shipToInfo
 */
OrderModifyRequest.prototype['shipToInfo'] = undefined;

/**
 * The order line items.
 * @member {Array.<module:model/OrderModifyRequestLinesInner>} lines
 */
OrderModifyRequest.prototype['lines'] = undefined;

/**
 * Header-level additional attributes.
 * @member {Array.<module:model/OrderModifyRequestAdditionalAttributesInner>} additionalAttributes
 */
OrderModifyRequest.prototype['additionalAttributes'] = undefined;






export default OrderModifyRequest;

