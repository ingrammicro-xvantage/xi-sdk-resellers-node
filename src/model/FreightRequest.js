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
import FreightRequestLinesInner from './FreightRequestLinesInner';
import FreightRequestShipToAddressInner from './FreightRequestShipToAddressInner';

/**
 * The FreightRequest model module.
 * @module model/FreightRequest
 * @version 6.0
 */
class FreightRequest {
    /**
     * Constructs a new <code>FreightRequest</code>.
     * @alias module:model/FreightRequest
     */
    constructor() { 
        
        FreightRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightRequest} obj Optional instance to populate.
     * @return {module:model/FreightRequest} The populated <code>FreightRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightRequest();

            if (data.hasOwnProperty('billToAddressId')) {
                obj['billToAddressId'] = ApiClient.convertToType(data['billToAddressId'], 'String');
            }
            if (data.hasOwnProperty('shipToAddressId')) {
                obj['shipToAddressId'] = ApiClient.convertToType(data['shipToAddressId'], 'String');
            }
            if (data.hasOwnProperty('shipToAddress')) {
                obj['shipToAddress'] = ApiClient.convertToType(data['shipToAddress'], [FreightRequestShipToAddressInner]);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [FreightRequestLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
            throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
        }
        // ensure the json data is a string
        if (data['shipToAddressId'] && !(typeof data['shipToAddressId'] === 'string' || data['shipToAddressId'] instanceof String)) {
            throw new Error("Expected the field `shipToAddressId` to be a primitive type in the JSON string but got " + data['shipToAddressId']);
        }
        if (data['shipToAddress']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipToAddress'])) {
                throw new Error("Expected the field `shipToAddress` to be an array in the JSON data but got " + data['shipToAddress']);
            }
            // validate the optional field `shipToAddress` (array)
            for (const item of data['shipToAddress']) {
                FreightRequestShipToAddressInner.validateJSON(item);
            };
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                FreightRequestLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit.
 * @member {String} billToAddressId
 */
FreightRequest.prototype['billToAddressId'] = undefined;

/**
 * The ID references the reseller's address in Ingram Micro's system for shipping. Provided to resellers during the onboarding process.
 * @member {String} shipToAddressId
 */
FreightRequest.prototype['shipToAddressId'] = undefined;

/**
 * The shipping information.
 * @member {Array.<module:model/FreightRequestShipToAddressInner>} shipToAddress
 */
FreightRequest.prototype['shipToAddress'] = undefined;

/**
 * @member {Array.<module:model/FreightRequestLinesInner>} lines
 */
FreightRequest.prototype['lines'] = undefined;






export default FreightRequest;

