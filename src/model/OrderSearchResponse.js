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
import OrderSearchResponseOrdersInner from './OrderSearchResponseOrdersInner';

/**
 * The OrderSearchResponse model module.
 * @module model/OrderSearchResponse
 * @version 1.0.0
 */
class OrderSearchResponse {
    /**
     * Constructs a new <code>OrderSearchResponse</code>.
     * @alias module:model/OrderSearchResponse
     */
    constructor() { 
        
        OrderSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponse} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponse} The populated <code>OrderSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponse();

            if (data.hasOwnProperty('recordsFound')) {
                obj['recordsFound'] = ApiClient.convertToType(data['recordsFound'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [OrderSearchResponseOrdersInner]);
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
     * Validates the JSON data with respect to <code>OrderSearchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponse</code>.
     */
    static validateJSON(data) {
        if (data['orders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orders'])) {
                throw new Error("Expected the field `orders` to be an array in the JSON data but got " + data['orders']);
            }
            // validate the optional field `orders` (array)
            for (const item of data['orders']) {
                OrderSearchResponseOrdersInner.validateJSON(item);
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
 * No of recourds found for the search.
 * @member {Number} recordsFound
 */
OrderSearchResponse.prototype['recordsFound'] = undefined;

/**
 * No of results per page.(default is 25)
 * @member {Number} pageSize
 */
OrderSearchResponse.prototype['pageSize'] = undefined;

/**
 * Current page number.(default is 1)
 * @member {Number} pageNumber
 */
OrderSearchResponse.prototype['pageNumber'] = undefined;

/**
 * The details for the order.
 * @member {Array.<module:model/OrderSearchResponseOrdersInner>} orders
 */
OrderSearchResponse.prototype['orders'] = undefined;

/**
 * link/URL for accessing next page.
 * @member {String} nextPage
 */
OrderSearchResponse.prototype['nextPage'] = undefined;

/**
 * link/URL for accessing previous page.
 * @member {String} previousPage
 */
OrderSearchResponse.prototype['previousPage'] = undefined;






export default OrderSearchResponse;

