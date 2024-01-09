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
import MultiSKUPriceAndStockRequestServicerequest from './MultiSKUPriceAndStockRequestServicerequest';

/**
 * The MultiSKUPriceAndStockRequest model module.
 * @module model/MultiSKUPriceAndStockRequest
 * @version 6.0
 */
class MultiSKUPriceAndStockRequest {
    /**
     * Constructs a new <code>MultiSKUPriceAndStockRequest</code>.
     * Request object model for the multi sku price and stock API endpoint
     * @alias module:model/MultiSKUPriceAndStockRequest
     */
    constructor() { 
        
        MultiSKUPriceAndStockRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiSKUPriceAndStockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockRequest} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockRequest} The populated <code>MultiSKUPriceAndStockRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiSKUPriceAndStockRequest();

            if (data.hasOwnProperty('servicerequest')) {
                obj['servicerequest'] = MultiSKUPriceAndStockRequestServicerequest.constructFromObject(data['servicerequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `servicerequest`
        if (data['servicerequest']) { // data not null
          MultiSKUPriceAndStockRequestServicerequest.validateJSON(data['servicerequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/MultiSKUPriceAndStockRequestServicerequest} servicerequest
 */
MultiSKUPriceAndStockRequest.prototype['servicerequest'] = undefined;






export default MultiSKUPriceAndStockRequest;

