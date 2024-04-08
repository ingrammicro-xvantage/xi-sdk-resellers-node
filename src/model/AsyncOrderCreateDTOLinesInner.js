/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
import AsyncOrderCreateDTOLinesInnerEndUserInfoInner from './AsyncOrderCreateDTOLinesInnerEndUserInfoInner';

/**
 * The AsyncOrderCreateDTOLinesInner model module.
 * @module model/AsyncOrderCreateDTOLinesInner
 * @version 1.0.0
 */
class AsyncOrderCreateDTOLinesInner {
    /**
     * Constructs a new <code>AsyncOrderCreateDTOLinesInner</code>.
     * @alias module:model/AsyncOrderCreateDTOLinesInner
     */
    constructor() { 
        
        AsyncOrderCreateDTOLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AsyncOrderCreateDTOLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AsyncOrderCreateDTOLinesInner} obj Optional instance to populate.
     * @return {module:model/AsyncOrderCreateDTOLinesInner} The populated <code>AsyncOrderCreateDTOLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsyncOrderCreateDTOLinesInner();

            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('endUserPrice')) {
                obj['endUserPrice'] = ApiClient.convertToType(data['endUserPrice'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = ApiClient.convertToType(data['endUserInfo'], [AsyncOrderCreateDTOLinesInnerEndUserInfoInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AsyncOrderCreateDTOLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AsyncOrderCreateDTOLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['quantity'] && !(typeof data['quantity'] === 'string' || data['quantity'] instanceof String)) {
            throw new Error("Expected the field `quantity` to be a primitive type in the JSON string but got " + data['quantity']);
        }
        // ensure the json data is a string
        if (data['unitPrice'] && !(typeof data['unitPrice'] === 'string' || data['unitPrice'] instanceof String)) {
            throw new Error("Expected the field `unitPrice` to be a primitive type in the JSON string but got " + data['unitPrice']);
        }
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        // ensure the json data is a string
        if (data['endUserPrice'] && !(typeof data['endUserPrice'] === 'string' || data['endUserPrice'] instanceof String)) {
            throw new Error("Expected the field `endUserPrice` to be a primitive type in the JSON string but got " + data['endUserPrice']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        if (data['endUserInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['endUserInfo'])) {
                throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
            }
            // validate the optional field `endUserInfo` (array)
            for (const item of data['endUserInfo']) {
                AsyncOrderCreateDTOLinesInnerEndUserInfoInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's line item number for reference in their system.
 * @member {String} customerLineNumber
 */
AsyncOrderCreateDTOLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * Unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
AsyncOrderCreateDTOLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The quantity of the line item.
 * @member {String} quantity
 */
AsyncOrderCreateDTOLinesInner.prototype['quantity'] = undefined;

/**
 * Unit Price of Item
 * @member {String} unitPrice
 */
AsyncOrderCreateDTOLinesInner.prototype['unitPrice'] = undefined;

/**
 * @member {String} specialBidNumber
 */
AsyncOrderCreateDTOLinesInner.prototype['specialBidNumber'] = undefined;

/**
 * @member {String} endUserPrice
 */
AsyncOrderCreateDTOLinesInner.prototype['endUserPrice'] = undefined;

/**
 * @member {String} notes
 */
AsyncOrderCreateDTOLinesInner.prototype['notes'] = undefined;

/**
 * The contact information for the end user/customer provided by the reseller. Used to determine pricing and discounts.
 * @member {Array.<module:model/AsyncOrderCreateDTOLinesInnerEndUserInfoInner>} endUserInfo
 */
AsyncOrderCreateDTOLinesInner.prototype['endUserInfo'] = undefined;






export default AsyncOrderCreateDTOLinesInner;
