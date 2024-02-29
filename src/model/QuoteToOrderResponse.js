/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
 * The QuoteToOrderResponse model module.
 * @module model/QuoteToOrderResponse
 * @version 1.0.0
 */
class QuoteToOrderResponse {
    /**
     * Constructs a new <code>QuoteToOrderResponse</code>.
     * @alias module:model/QuoteToOrderResponse
     */
    constructor() { 
        
        QuoteToOrderResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteToOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteToOrderResponse} obj Optional instance to populate.
     * @return {module:model/QuoteToOrderResponse} The populated <code>QuoteToOrderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteToOrderResponse();

            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('confirmationNumber')) {
                obj['confirmationNumber'] = ApiClient.convertToType(data['confirmationNumber'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteToOrderResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteToOrderResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['confirmationNumber'] && !(typeof data['confirmationNumber'] === 'string' || data['confirmationNumber'] instanceof String)) {
            throw new Error("Expected the field `confirmationNumber` to be a primitive type in the JSON string but got " + data['confirmationNumber']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Unique identifier generated by Ingram Micro's CRM specific to each quote.
 * @member {String} quoteNumber
 */
QuoteToOrderResponse.prototype['quoteNumber'] = undefined;

/**
 * A unique confirmation number for tracking purposes.
 * @member {String} confirmationNumber
 */
QuoteToOrderResponse.prototype['confirmationNumber'] = undefined;

/**
 * A confirmation message.
 * @member {String} message
 */
QuoteToOrderResponse.prototype['message'] = undefined;






export default QuoteToOrderResponse;

