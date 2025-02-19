/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
 * The InvoiceDetailsv61ResponseSummaryLines model module.
 * @module model/InvoiceDetailsv61ResponseSummaryLines
 * @version 1.0.0
 */
class InvoiceDetailsv61ResponseSummaryLines {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseSummaryLines</code>.
     * @alias module:model/InvoiceDetailsv61ResponseSummaryLines
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseSummaryLines.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryLines</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryLines} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryLines} The populated <code>InvoiceDetailsv61ResponseSummaryLines</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseSummaryLines();

            if (data.hasOwnProperty('productLineCount')) {
                obj['productLineCount'] = ApiClient.convertToType(data['productLineCount'], 'Number');
            }
            if (data.hasOwnProperty('productLineTotalQuantity')) {
                obj['productLineTotalQuantity'] = ApiClient.convertToType(data['productLineTotalQuantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryLines</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryLines</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Number of lines in the order.
 * @member {Number} productLineCount
 */
InvoiceDetailsv61ResponseSummaryLines.prototype['productLineCount'] = undefined;

/**
 * Total quantity of the order.
 * @member {Number} productLineTotalQuantity
 */
InvoiceDetailsv61ResponseSummaryLines.prototype['productLineTotalQuantity'] = undefined;






export default InvoiceDetailsv61ResponseSummaryLines;

