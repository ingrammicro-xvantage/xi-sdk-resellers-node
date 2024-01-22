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
import InvoiceDetailResponseServiceresponse from './InvoiceDetailResponseServiceresponse';

/**
 * The InvoiceDetails model module.
 * @module model/InvoiceDetails
 * @version 6.0
 */
class InvoiceDetails {
    /**
     * Constructs a new <code>InvoiceDetails</code>.
     * @alias module:model/InvoiceDetails
     */
    constructor() { 
        
        InvoiceDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetails} obj Optional instance to populate.
     * @return {module:model/InvoiceDetails} The populated <code>InvoiceDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetails();

            if (data.hasOwnProperty('serviceresponse')) {
                obj['serviceresponse'] = InvoiceDetailResponseServiceresponse.constructFromObject(data['serviceresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetails</code>.
     */
    static validateJSON(data) {
        // validate the optional field `serviceresponse`
        if (data['serviceresponse']) { // data not null
          InvoiceDetailResponseServiceresponse.validateJSON(data['serviceresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/InvoiceDetailResponseServiceresponse} serviceresponse
 */
InvoiceDetails.prototype['serviceresponse'] = undefined;






export default InvoiceDetails;

