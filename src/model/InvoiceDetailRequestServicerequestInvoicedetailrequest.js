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
 * The InvoiceDetailRequestServicerequestInvoicedetailrequest model module.
 * @module model/InvoiceDetailRequestServicerequestInvoicedetailrequest
 * @version 6.0
 */
class InvoiceDetailRequestServicerequestInvoicedetailrequest {
    /**
     * Constructs a new <code>InvoiceDetailRequestServicerequestInvoicedetailrequest</code>.
     * @alias module:model/InvoiceDetailRequestServicerequestInvoicedetailrequest
     * @param invoicenumber {String} 
     */
    constructor(invoicenumber) { 
        
        InvoiceDetailRequestServicerequestInvoicedetailrequest.initialize(this, invoicenumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, invoicenumber) { 
        obj['invoicenumber'] = invoicenumber;
    }

    /**
     * Constructs a <code>InvoiceDetailRequestServicerequestInvoicedetailrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailRequestServicerequestInvoicedetailrequest} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailRequestServicerequestInvoicedetailrequest} The populated <code>InvoiceDetailRequestServicerequestInvoicedetailrequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailRequestServicerequestInvoicedetailrequest();

            if (data.hasOwnProperty('invoicenumber')) {
                obj['invoicenumber'] = ApiClient.convertToType(data['invoicenumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailRequestServicerequestInvoicedetailrequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailRequestServicerequestInvoicedetailrequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InvoiceDetailRequestServicerequestInvoicedetailrequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['invoicenumber'] && !(typeof data['invoicenumber'] === 'string' || data['invoicenumber'] instanceof String)) {
            throw new Error("Expected the field `invoicenumber` to be a primitive type in the JSON string but got " + data['invoicenumber']);
        }

        return true;
    }


}

InvoiceDetailRequestServicerequestInvoicedetailrequest.RequiredProperties = ["invoicenumber"];

/**
 * @member {String} invoicenumber
 */
InvoiceDetailRequestServicerequestInvoicedetailrequest.prototype['invoicenumber'] = undefined;






export default InvoiceDetailRequestServicerequestInvoicedetailrequest;

