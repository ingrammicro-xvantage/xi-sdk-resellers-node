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

/**
 * The RenewalsSearchRequestDataTypeEndDate model module.
 * @module model/RenewalsSearchRequestDataTypeEndDate
 * @version 6.0
 */
class RenewalsSearchRequestDataTypeEndDate {
    /**
     * Constructs a new <code>RenewalsSearchRequestDataTypeEndDate</code>.
     * @alias module:model/RenewalsSearchRequestDataTypeEndDate
     */
    constructor() { 
        
        RenewalsSearchRequestDataTypeEndDate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsSearchRequestDataTypeEndDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchRequestDataTypeEndDate} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchRequestDataTypeEndDate} The populated <code>RenewalsSearchRequestDataTypeEndDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsSearchRequestDataTypeEndDate();

            if (data.hasOwnProperty('customStartDate')) {
                obj['customStartDate'] = ApiClient.convertToType(data['customStartDate'], 'String');
            }
            if (data.hasOwnProperty('customEndDate')) {
                obj['customEndDate'] = ApiClient.convertToType(data['customEndDate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchRequestDataTypeEndDate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchRequestDataTypeEndDate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customStartDate'] && !(typeof data['customStartDate'] === 'string' || data['customStartDate'] instanceof String)) {
            throw new Error("Expected the field `customStartDate` to be a primitive type in the JSON string but got " + data['customStartDate']);
        }
        // ensure the json data is a string
        if (data['customEndDate'] && !(typeof data['customEndDate'] === 'string' || data['customEndDate'] instanceof String)) {
            throw new Error("Expected the field `customEndDate` to be a primitive type in the JSON string but got " + data['customEndDate']);
        }

        return true;
    }


}



/**
 * Custom from date for Renewal end date.
 * @member {String} customStartDate
 */
RenewalsSearchRequestDataTypeEndDate.prototype['customStartDate'] = undefined;

/**
 * Custom to date for Renewal end date.
 * @member {String} customEndDate
 */
RenewalsSearchRequestDataTypeEndDate.prototype['customEndDate'] = undefined;






export default RenewalsSearchRequestDataTypeEndDate;

