/**
 * XI SDK Resellers
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
import ErrorResponseErrorsInnerFieldsInner from './ErrorResponseErrorsInnerFieldsInner';

/**
 * The ErrorResponseErrorsInner model module.
 * @module model/ErrorResponseErrorsInner
 * @version 6.0
 */
class ErrorResponseErrorsInner {
    /**
     * Constructs a new <code>ErrorResponseErrorsInner</code>.
     * @alias module:model/ErrorResponseErrorsInner
     */
    constructor() { 
        
        ErrorResponseErrorsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponseErrorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorResponseErrorsInner} obj Optional instance to populate.
     * @return {module:model/ErrorResponseErrorsInner} The populated <code>ErrorResponseErrorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponseErrorsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [ErrorResponseErrorsInnerFieldsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorResponseErrorsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorResponseErrorsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fields'])) {
                throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
            }
            // validate the optional field `fields` (array)
            for (const item of data['fields']) {
                ErrorResponseErrorsInnerFieldsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Unique Id to identify error.
 * @member {String} id
 */
ErrorResponseErrorsInner.prototype['id'] = undefined;

/**
 * Describes the type of the error.
 * @member {String} type
 */
ErrorResponseErrorsInner.prototype['type'] = undefined;

/**
 * Describes the error message.
 * @member {String} message
 */
ErrorResponseErrorsInner.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/ErrorResponseErrorsInnerFieldsInner>} fields
 */
ErrorResponseErrorsInner.prototype['fields'] = undefined;






export default ErrorResponseErrorsInner;

