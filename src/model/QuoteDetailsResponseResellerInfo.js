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
 * The QuoteDetailsResponseResellerInfo model module.
 * @module model/QuoteDetailsResponseResellerInfo
 * @version 1.0.0
 */
class QuoteDetailsResponseResellerInfo {
    /**
     * Constructs a new <code>QuoteDetailsResponseResellerInfo</code>.
     * @alias module:model/QuoteDetailsResponseResellerInfo
     */
    constructor() { 
        
        QuoteDetailsResponseResellerInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsResponseResellerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseResellerInfo} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseResellerInfo} The populated <code>QuoteDetailsResponseResellerInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsResponseResellerInfo();

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('customerNumber')) {
                obj['customerNumber'] = ApiClient.convertToType(data['customerNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseResellerInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseResellerInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
            throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }
        // ensure the json data is a string
        if (data['customerNumber'] && !(typeof data['customerNumber'] === 'string' || data['customerNumber'] instanceof String)) {
            throw new Error("Expected the field `customerNumber` to be a primitive type in the JSON string but got " + data['customerNumber']);
        }

        return true;
    }


}



/**
 * Contact Name
 * @member {String} contact
 */
QuoteDetailsResponseResellerInfo.prototype['contact'] = undefined;

/**
 * Ingram Micro Customer's Account Name
 * @member {String} companyName
 */
QuoteDetailsResponseResellerInfo.prototype['companyName'] = undefined;

/**
 * Account Contact Email Address
 * @member {String} email
 */
QuoteDetailsResponseResellerInfo.prototype['email'] = undefined;

/**
 * Account Phone Number
 * @member {String} phoneNumber
 */
QuoteDetailsResponseResellerInfo.prototype['phoneNumber'] = undefined;

/**
 * Reseller account number
 * @member {String} customerNumber
 */
QuoteDetailsResponseResellerInfo.prototype['customerNumber'] = undefined;






export default QuoteDetailsResponseResellerInfo;

