/**
 * Reseller API Documentation - United States
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

/**
 * The PostQuoteToOrderV6400ResponseFieldsInner model module.
 * @module model/PostQuoteToOrderV6400ResponseFieldsInner
 * @version 6.0
 */
class PostQuoteToOrderV6400ResponseFieldsInner {
    /**
     * Constructs a new <code>PostQuoteToOrderV6400ResponseFieldsInner</code>.
     * @alias module:model/PostQuoteToOrderV6400ResponseFieldsInner
     */
    constructor() { 
        
        PostQuoteToOrderV6400ResponseFieldsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostQuoteToOrderV6400ResponseFieldsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostQuoteToOrderV6400ResponseFieldsInner} obj Optional instance to populate.
     * @return {module:model/PostQuoteToOrderV6400ResponseFieldsInner} The populated <code>PostQuoteToOrderV6400ResponseFieldsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostQuoteToOrderV6400ResponseFieldsInner();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostQuoteToOrderV6400ResponseFieldsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostQuoteToOrderV6400ResponseFieldsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * Name of the field.
 * @member {String} field
 */
PostQuoteToOrderV6400ResponseFieldsInner.prototype['field'] = undefined;

/**
 * A filed level error message.
 * @member {String} message
 */
PostQuoteToOrderV6400ResponseFieldsInner.prototype['message'] = undefined;

/**
 * Value of the message.
 * @member {String} value
 */
PostQuoteToOrderV6400ResponseFieldsInner.prototype['value'] = undefined;






export default PostQuoteToOrderV6400ResponseFieldsInner;

