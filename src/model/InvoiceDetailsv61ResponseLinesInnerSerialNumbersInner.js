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
 * The InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner model module.
 * @module model/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner
 * @version 6.0
 */
class InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner</code>.
     * @alias module:model/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner} The populated <code>InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner();

            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serialNumber'] && !(typeof data['serialNumber'] === 'string' || data['serialNumber'] instanceof String)) {
            throw new Error("Expected the field `serialNumber` to be a primitive type in the JSON string but got " + data['serialNumber']);
        }

        return true;
    }


}



/**
 * Serial number of the product.
 * @member {String} serialNumber
 */
InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner.prototype['serialNumber'] = undefined;






export default InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner;

