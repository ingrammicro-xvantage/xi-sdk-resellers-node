/**
 * Reseller API
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
import InvoiceDetailResponseServiceresponseInvoicedetailresponse from './InvoiceDetailResponseServiceresponseInvoicedetailresponse';
import InvoiceDetailResponseServiceresponseResponsepreamble from './InvoiceDetailResponseServiceresponseResponsepreamble';

/**
 * The InvoiceDetailResponseServiceresponse model module.
 * @module model/InvoiceDetailResponseServiceresponse
 * @version 6.0
 */
class InvoiceDetailResponseServiceresponse {
    /**
     * Constructs a new <code>InvoiceDetailResponseServiceresponse</code>.
     * @alias module:model/InvoiceDetailResponseServiceresponse
     */
    constructor() { 
        
        InvoiceDetailResponseServiceresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailResponseServiceresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailResponseServiceresponse} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailResponseServiceresponse} The populated <code>InvoiceDetailResponseServiceresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailResponseServiceresponse();

            if (data.hasOwnProperty('responsepreamble')) {
                obj['responsepreamble'] = InvoiceDetailResponseServiceresponseResponsepreamble.constructFromObject(data['responsepreamble']);
            }
            if (data.hasOwnProperty('invoicedetailresponse')) {
                obj['invoicedetailresponse'] = InvoiceDetailResponseServiceresponseInvoicedetailresponse.constructFromObject(data['invoicedetailresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailResponseServiceresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailResponseServiceresponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsepreamble`
        if (data['responsepreamble']) { // data not null
          InvoiceDetailResponseServiceresponseResponsepreamble.validateJSON(data['responsepreamble']);
        }
        // validate the optional field `invoicedetailresponse`
        if (data['invoicedetailresponse']) { // data not null
          InvoiceDetailResponseServiceresponseInvoicedetailresponse.validateJSON(data['invoicedetailresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/InvoiceDetailResponseServiceresponseResponsepreamble} responsepreamble
 */
InvoiceDetailResponseServiceresponse.prototype['responsepreamble'] = undefined;

/**
 * @member {module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponse} invoicedetailresponse
 */
InvoiceDetailResponseServiceresponse.prototype['invoicedetailresponse'] = undefined;






export default InvoiceDetailResponseServiceresponse;

