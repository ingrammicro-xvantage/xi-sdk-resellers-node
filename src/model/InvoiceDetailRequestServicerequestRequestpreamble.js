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
 * The InvoiceDetailRequestServicerequestRequestpreamble model module.
 * @module model/InvoiceDetailRequestServicerequestRequestpreamble
 * @version 6.0
 */
class InvoiceDetailRequestServicerequestRequestpreamble {
    /**
     * Constructs a new <code>InvoiceDetailRequestServicerequestRequestpreamble</code>.
     * @alias module:model/InvoiceDetailRequestServicerequestRequestpreamble
     * @param isocountrycode {String} 
     * @param customernumber {String} 
     */
    constructor(isocountrycode, customernumber) { 
        
        InvoiceDetailRequestServicerequestRequestpreamble.initialize(this, isocountrycode, customernumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isocountrycode, customernumber) { 
        obj['isocountrycode'] = isocountrycode;
        obj['customernumber'] = customernumber;
    }

    /**
     * Constructs a <code>InvoiceDetailRequestServicerequestRequestpreamble</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailRequestServicerequestRequestpreamble} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailRequestServicerequestRequestpreamble} The populated <code>InvoiceDetailRequestServicerequestRequestpreamble</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailRequestServicerequestRequestpreamble();

            if (data.hasOwnProperty('isocountrycode')) {
                obj['isocountrycode'] = ApiClient.convertToType(data['isocountrycode'], 'String');
            }
            if (data.hasOwnProperty('customernumber')) {
                obj['customernumber'] = ApiClient.convertToType(data['customernumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailRequestServicerequestRequestpreamble</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailRequestServicerequestRequestpreamble</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InvoiceDetailRequestServicerequestRequestpreamble.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['isocountrycode'] && !(typeof data['isocountrycode'] === 'string' || data['isocountrycode'] instanceof String)) {
            throw new Error("Expected the field `isocountrycode` to be a primitive type in the JSON string but got " + data['isocountrycode']);
        }
        // ensure the json data is a string
        if (data['customernumber'] && !(typeof data['customernumber'] === 'string' || data['customernumber'] instanceof String)) {
            throw new Error("Expected the field `customernumber` to be a primitive type in the JSON string but got " + data['customernumber']);
        }

        return true;
    }


}

InvoiceDetailRequestServicerequestRequestpreamble.RequiredProperties = ["isocountrycode", "customernumber"];

/**
 * @member {String} isocountrycode
 */
InvoiceDetailRequestServicerequestRequestpreamble.prototype['isocountrycode'] = undefined;

/**
 * @member {String} customernumber
 */
InvoiceDetailRequestServicerequestRequestpreamble.prototype['customernumber'] = undefined;






export default InvoiceDetailRequestServicerequestRequestpreamble;
