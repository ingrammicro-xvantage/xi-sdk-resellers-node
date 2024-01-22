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
import QuoteListResponseQuoteSearchResponse from './QuoteListResponseQuoteSearchResponse';

/**
 * The QuoteListResponse model module.
 * @module model/QuoteListResponse
 * @version 6.0
 */
class QuoteListResponse {
    /**
     * Constructs a new <code>QuoteListResponse</code>.
     * Response schema for get quote list endpoint
     * @alias module:model/QuoteListResponse
     */
    constructor() { 
        
        QuoteListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteListResponse} obj Optional instance to populate.
     * @return {module:model/QuoteListResponse} The populated <code>QuoteListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteListResponse();

            if (data.hasOwnProperty('quoteSearchResponse')) {
                obj['quoteSearchResponse'] = QuoteListResponseQuoteSearchResponse.constructFromObject(data['quoteSearchResponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteListResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `quoteSearchResponse`
        if (data['quoteSearchResponse']) { // data not null
          QuoteListResponseQuoteSearchResponse.validateJSON(data['quoteSearchResponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/QuoteListResponseQuoteSearchResponse} quoteSearchResponse
 */
QuoteListResponse.prototype['quoteSearchResponse'] = undefined;






export default QuoteListResponse;

