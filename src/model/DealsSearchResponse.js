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
import DealsSearchResponseDealsInner from './DealsSearchResponseDealsInner';

/**
 * The DealsSearchResponse model module.
 * @module model/DealsSearchResponse
 * @version 6.0
 */
class DealsSearchResponse {
    /**
     * Constructs a new <code>DealsSearchResponse</code>.
     * @alias module:model/DealsSearchResponse
     */
    constructor() { 
        
        DealsSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealsSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealsSearchResponse} obj Optional instance to populate.
     * @return {module:model/DealsSearchResponse} The populated <code>DealsSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealsSearchResponse();

            if (data.hasOwnProperty('recordsFound')) {
                obj['recordsFound'] = ApiClient.convertToType(data['recordsFound'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('deals')) {
                obj['deals'] = ApiClient.convertToType(data['deals'], [DealsSearchResponseDealsInner]);
            }
            if (data.hasOwnProperty('nextPage')) {
                obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'String');
            }
            if (data.hasOwnProperty('previousPage')) {
                obj['previousPage'] = ApiClient.convertToType(data['previousPage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealsSearchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealsSearchResponse</code>.
     */
    static validateJSON(data) {
        if (data['deals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deals'])) {
                throw new Error("Expected the field `deals` to be an array in the JSON data but got " + data['deals']);
            }
            // validate the optional field `deals` (array)
            for (const item of data['deals']) {
                DealsSearchResponseDealsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextPage'] && !(typeof data['nextPage'] === 'string' || data['nextPage'] instanceof String)) {
            throw new Error("Expected the field `nextPage` to be a primitive type in the JSON string but got " + data['nextPage']);
        }
        // ensure the json data is a string
        if (data['previousPage'] && !(typeof data['previousPage'] === 'string' || data['previousPage'] instanceof String)) {
            throw new Error("Expected the field `previousPage` to be a primitive type in the JSON string but got " + data['previousPage']);
        }

        return true;
    }


}



/**
 * Number of records found.
 * @member {Number} recordsFound
 */
DealsSearchResponse.prototype['recordsFound'] = undefined;

/**
 * Number of records in a page.
 * @member {Number} pageSize
 */
DealsSearchResponse.prototype['pageSize'] = undefined;

/**
 * Number of page.
 * @member {Number} pageNumber
 */
DealsSearchResponse.prototype['pageNumber'] = undefined;

/**
 * @member {Array.<module:model/DealsSearchResponseDealsInner>} deals
 */
DealsSearchResponse.prototype['deals'] = undefined;

/**
 * URL for the next page.
 * @member {String} nextPage
 */
DealsSearchResponse.prototype['nextPage'] = undefined;

/**
 * URL for the previous page.
 * @member {String} previousPage
 */
DealsSearchResponse.prototype['previousPage'] = undefined;






export default DealsSearchResponse;

