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

/**
 * The PriceAndAvailabilityResponseInnerPricing model module.
 * @module model/PriceAndAvailabilityResponseInnerPricing
 * @version 6.0
 */
class PriceAndAvailabilityResponseInnerPricing {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerPricing</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerPricing
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerPricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerPricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerPricing} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerPricing} The populated <code>PriceAndAvailabilityResponseInnerPricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerPricing();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('retailPrice')) {
                obj['retailPrice'] = ApiClient.convertToType(data['retailPrice'], 'Number');
            }
            if (data.hasOwnProperty('mapPrice')) {
                obj['mapPrice'] = ApiClient.convertToType(data['mapPrice'], 'Number');
            }
            if (data.hasOwnProperty('customerPrice')) {
                obj['customerPrice'] = ApiClient.convertToType(data['customerPrice'], 'Number');
            }
            if (data.hasOwnProperty('specialBidPricingAvailable')) {
                obj['specialBidPricingAvailable'] = ApiClient.convertToType(data['specialBidPricingAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('webDiscountsAvailable')) {
                obj['webDiscountsAvailable'] = ApiClient.convertToType(data['webDiscountsAvailable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerPricing</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerPricing</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }

        return true;
    }


}



/**
 * The 3-digit ISO currency code.
 * @member {String} currencyCode
 */
PriceAndAvailabilityResponseInnerPricing.prototype['currencyCode'] = undefined;

/**
 * The retail price of the product.
 * @member {Number} retailPrice
 */
PriceAndAvailabilityResponseInnerPricing.prototype['retailPrice'] = undefined;

/**
 * Minimum Advertised Price (MAP). If required by the vendor, resellers can not sell below MAP price.
 * @member {Number} mapPrice
 */
PriceAndAvailabilityResponseInnerPricing.prototype['mapPrice'] = undefined;

/**
 * The price customer pays after all special pricing and discounts have been applied.
 * @member {Number} customerPrice
 */
PriceAndAvailabilityResponseInnerPricing.prototype['customerPrice'] = undefined;

/**
 * Boolean values specifies whether special Bid discounts are available for the product.
 * @member {Boolean} specialBidPricingAvailable
 */
PriceAndAvailabilityResponseInnerPricing.prototype['specialBidPricingAvailable'] = undefined;

/**
 * Boolean values specifies whether web Discounts are available for the product.
 * @member {Boolean} webDiscountsAvailable
 */
PriceAndAvailabilityResponseInnerPricing.prototype['webDiscountsAvailable'] = undefined;






export default PriceAndAvailabilityResponseInnerPricing;

