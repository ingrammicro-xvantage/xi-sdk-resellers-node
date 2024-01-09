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
import MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse from './MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse';
import PriceAndAvailabilityResponseServiceresponseResponsepreamble from './PriceAndAvailabilityResponseServiceresponseResponsepreamble';

/**
 * The MultiSKUPriceAndStockResponseServiceresponse model module.
 * @module model/MultiSKUPriceAndStockResponseServiceresponse
 * @version 6.0
 */
class MultiSKUPriceAndStockResponseServiceresponse {
    /**
     * Constructs a new <code>MultiSKUPriceAndStockResponseServiceresponse</code>.
     * @alias module:model/MultiSKUPriceAndStockResponseServiceresponse
     */
    constructor() { 
        
        MultiSKUPriceAndStockResponseServiceresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiSKUPriceAndStockResponseServiceresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockResponseServiceresponse} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockResponseServiceresponse} The populated <code>MultiSKUPriceAndStockResponseServiceresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiSKUPriceAndStockResponseServiceresponse();

            if (data.hasOwnProperty('responsepreamble')) {
                obj['responsepreamble'] = PriceAndAvailabilityResponseServiceresponseResponsepreamble.constructFromObject(data['responsepreamble']);
            }
            if (data.hasOwnProperty('priceandstockresponse')) {
                obj['priceandstockresponse'] = MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse.constructFromObject(data['priceandstockresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockResponseServiceresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockResponseServiceresponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsepreamble`
        if (data['responsepreamble']) { // data not null
          PriceAndAvailabilityResponseServiceresponseResponsepreamble.validateJSON(data['responsepreamble']);
        }
        // validate the optional field `priceandstockresponse`
        if (data['priceandstockresponse']) { // data not null
          MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse.validateJSON(data['priceandstockresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/PriceAndAvailabilityResponseServiceresponseResponsepreamble} responsepreamble
 */
MultiSKUPriceAndStockResponseServiceresponse.prototype['responsepreamble'] = undefined;

/**
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse} priceandstockresponse
 */
MultiSKUPriceAndStockResponseServiceresponse.prototype['priceandstockresponse'] = undefined;






export default MultiSKUPriceAndStockResponseServiceresponse;

