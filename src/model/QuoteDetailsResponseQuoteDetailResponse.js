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
import QuoteDetailsQuoteDetailResponseResponsePreamble from './QuoteDetailsQuoteDetailResponseResponsePreamble';
import QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse from './QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse';

/**
 * The QuoteDetailsResponseQuoteDetailResponse model module.
 * @module model/QuoteDetailsResponseQuoteDetailResponse
 * @version 6.0
 */
class QuoteDetailsResponseQuoteDetailResponse {
    /**
     * Constructs a new <code>QuoteDetailsResponseQuoteDetailResponse</code>.
     * @alias module:model/QuoteDetailsResponseQuoteDetailResponse
     */
    constructor() { 
        
        QuoteDetailsResponseQuoteDetailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsResponseQuoteDetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseQuoteDetailResponse} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseQuoteDetailResponse} The populated <code>QuoteDetailsResponseQuoteDetailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsResponseQuoteDetailResponse();

            if (data.hasOwnProperty('responsePreamble')) {
                obj['responsePreamble'] = QuoteDetailsQuoteDetailResponseResponsePreamble.constructFromObject(data['responsePreamble']);
            }
            if (data.hasOwnProperty('retrieveQuoteResponse')) {
                obj['retrieveQuoteResponse'] = QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.constructFromObject(data['retrieveQuoteResponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseQuoteDetailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseQuoteDetailResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsePreamble`
        if (data['responsePreamble']) { // data not null
          QuoteDetailsQuoteDetailResponseResponsePreamble.validateJSON(data['responsePreamble']);
        }
        // validate the optional field `retrieveQuoteResponse`
        if (data['retrieveQuoteResponse']) { // data not null
          QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.validateJSON(data['retrieveQuoteResponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseResponsePreamble} responsePreamble
 */
QuoteDetailsResponseQuoteDetailResponse.prototype['responsePreamble'] = undefined;

/**
 * @member {module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse} retrieveQuoteResponse
 */
QuoteDetailsResponseQuoteDetailResponse.prototype['retrieveQuoteResponse'] = undefined;






export default QuoteDetailsResponseQuoteDetailResponse;

