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
import MultiSKUPriceAndStockResponseServiceresponse from './MultiSKUPriceAndStockResponseServiceresponse';

/**
 * The MultiSKUPriceAndStockResponse model module.
 * @module model/MultiSKUPriceAndStockResponse
 * @version 6.0
 */
class MultiSKUPriceAndStockResponse {
    /**
     * Constructs a new <code>MultiSKUPriceAndStockResponse</code>.
     * Response object model for the multi sku price and stock API endpoint
     * @alias module:model/MultiSKUPriceAndStockResponse
     */
    constructor() { 
        
        MultiSKUPriceAndStockResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiSKUPriceAndStockResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockResponse} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockResponse} The populated <code>MultiSKUPriceAndStockResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiSKUPriceAndStockResponse();

            if (data.hasOwnProperty('serviceresponse')) {
                obj['serviceresponse'] = MultiSKUPriceAndStockResponseServiceresponse.constructFromObject(data['serviceresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `serviceresponse`
        if (data['serviceresponse']) { // data not null
          MultiSKUPriceAndStockResponseServiceresponse.validateJSON(data['serviceresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponse} serviceresponse
 */
MultiSKUPriceAndStockResponse.prototype['serviceresponse'] = undefined;






export default MultiSKUPriceAndStockResponse;

