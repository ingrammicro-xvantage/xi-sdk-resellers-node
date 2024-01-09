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
import QuoteDetailsQuoteDetailResponse from './QuoteDetailsQuoteDetailResponse';

/**
 * The QuoteDetails model module.
 * @module model/QuoteDetails
 * @version 6.0
 */
class QuoteDetails {
    /**
     * Constructs a new <code>QuoteDetails</code>.
     * Response schema for quote details
     * @alias module:model/QuoteDetails
     */
    constructor() { 
        
        QuoteDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetails} obj Optional instance to populate.
     * @return {module:model/QuoteDetails} The populated <code>QuoteDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetails();

            if (data.hasOwnProperty('quoteDetailResponse')) {
                obj['quoteDetailResponse'] = QuoteDetailsQuoteDetailResponse.constructFromObject(data['quoteDetailResponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetails</code>.
     */
    static validateJSON(data) {
        // validate the optional field `quoteDetailResponse`
        if (data['quoteDetailResponse']) { // data not null
          QuoteDetailsQuoteDetailResponse.validateJSON(data['quoteDetailResponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/QuoteDetailsQuoteDetailResponse} quoteDetailResponse
 */
QuoteDetails.prototype['quoteDetailResponse'] = undefined;






export default QuoteDetails;
