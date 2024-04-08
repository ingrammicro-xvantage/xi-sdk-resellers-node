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

/**
 * The AsyncOrderCreateDTOVmfadditionalAttributesInner model module.
 * @module model/AsyncOrderCreateDTOVmfadditionalAttributesInner
 * @version 1.0.0
 */
class AsyncOrderCreateDTOVmfadditionalAttributesInner {
    /**
     * Constructs a new <code>AsyncOrderCreateDTOVmfadditionalAttributesInner</code>.
     * @alias module:model/AsyncOrderCreateDTOVmfadditionalAttributesInner
     */
    constructor() { 
        
        AsyncOrderCreateDTOVmfadditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AsyncOrderCreateDTOVmfadditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AsyncOrderCreateDTOVmfadditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/AsyncOrderCreateDTOVmfadditionalAttributesInner} The populated <code>AsyncOrderCreateDTOVmfadditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AsyncOrderCreateDTOVmfadditionalAttributesInner();

            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AsyncOrderCreateDTOVmfadditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AsyncOrderCreateDTOVmfadditionalAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributeName'] && !(typeof data['attributeName'] === 'string' || data['attributeName'] instanceof String)) {
            throw new Error("Expected the field `attributeName` to be a primitive type in the JSON string but got " + data['attributeName']);
        }
        // ensure the json data is a string
        if (data['attributeValue'] && !(typeof data['attributeValue'] === 'string' || data['attributeValue'] instanceof String)) {
            throw new Error("Expected the field `attributeValue` to be a primitive type in the JSON string but got " + data['attributeValue']);
        }

        return true;
    }


}



/**
 * The name of the header level field.
 * @member {String} attributeName
 */
AsyncOrderCreateDTOVmfadditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * The value of the header level field.
 * @member {String} attributeValue
 */
AsyncOrderCreateDTOVmfadditionalAttributesInner.prototype['attributeValue'] = undefined;






export default AsyncOrderCreateDTOVmfadditionalAttributesInner;

