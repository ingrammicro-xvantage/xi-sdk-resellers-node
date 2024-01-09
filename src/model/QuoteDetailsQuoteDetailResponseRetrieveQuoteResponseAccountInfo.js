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
 * The QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo model module.
 * @module model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo
 * @version 6.0
 */
class QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo {
    /**
     * Constructs a new <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo</code>.
     * @alias module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo
     */
    constructor() { 
        
        QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo} The populated <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo();

            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('bcn')) {
                obj['bcn'] = ApiClient.convertToType(data['bcn'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['accountName'] && !(typeof data['accountName'] === 'string' || data['accountName'] instanceof String)) {
            throw new Error("Expected the field `accountName` to be a primitive type in the JSON string but got " + data['accountName']);
        }
        // ensure the json data is a string
        if (data['bcn'] && !(typeof data['bcn'] === 'string' || data['bcn'] instanceof String)) {
            throw new Error("Expected the field `bcn` to be a primitive type in the JSON string but got " + data['bcn']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * @member {String} accountName
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.prototype['accountName'] = undefined;

/**
 * @member {String} bcn
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.prototype['bcn'] = undefined;

/**
 * @member {String} phone
 */
QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.prototype['phone'] = undefined;






export default QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo;
