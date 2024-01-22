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
 * The InvoiceDetailResponse model module.
 * @module model/InvoiceDetailResponse
 * @version 6.0
 */
class InvoiceDetailResponse {
    /**
     * Constructs a new <code>InvoiceDetailResponse</code>.
     * @alias module:model/InvoiceDetailResponse
     */
    constructor() { 
        
        InvoiceDetailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailResponse} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailResponse} The populated <code>InvoiceDetailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailResponse();

            if (data.hasOwnProperty('serviceresponse')) {
                obj['serviceresponse'] = InvoiceDetailResponseServiceresponse.constructFromObject(data['serviceresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailResponse</code>.
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
InvoiceDetailResponse.prototype['serviceresponse'] = undefined;






export default InvoiceDetailResponse;

