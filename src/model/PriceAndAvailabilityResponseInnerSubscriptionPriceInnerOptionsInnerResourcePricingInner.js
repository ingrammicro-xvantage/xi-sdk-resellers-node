/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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

/**
 * The PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner model module.
 * @module model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner} The populated <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('msrp')) {
                obj['msrp'] = ApiClient.convertToType(data['msrp'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('margin')) {
                obj['margin'] = ApiClient.convertToType(data['margin'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('subscriptionPeriod')) {
                obj['subscriptionPeriod'] = ApiClient.convertToType(data['subscriptionPeriod'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['subscriptionPeriod'] && !(typeof data['subscriptionPeriod'] === 'string' || data['subscriptionPeriod'] instanceof String)) {
            throw new Error("Expected the field `subscriptionPeriod` to be a primitive type in the JSON string but got " + data['subscriptionPeriod']);
        }

        return true;
    }


}



/**
 * Name of the type of pricing.
 * @member {String} name
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['name'] = undefined;

/**
 * Quantity of the line item.
 * @member {Number} quantity
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['quantity'] = undefined;

/**
 * Manufacturer Suggested Retail Price.
 * @member {Number} msrp
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['msrp'] = undefined;

/**
 * The unit price of the line item.
 * @member {Number} unitPrice
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['unitPrice'] = undefined;

/**
 * Reseller’s margin percentage
 * @member {Number} margin
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['margin'] = undefined;

/**
 * The 3-digit ISO currency code.
 * @member {String} currencyCode
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['currencyCode'] = undefined;

/**
 * The subscription period of the line item.
 * @member {String} subscriptionPeriod
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner.prototype['subscriptionPeriod'] = undefined;






export default PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerResourcePricingInner;

