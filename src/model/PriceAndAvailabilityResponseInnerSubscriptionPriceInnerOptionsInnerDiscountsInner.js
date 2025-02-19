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
import PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner from './PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner';
import PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerVolumeDiscountsInner from './PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerVolumeDiscountsInner';

/**
 * The PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner model module.
 * @module model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner} The populated <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner();

            if (data.hasOwnProperty('volumeDiscounts')) {
                obj['volumeDiscounts'] = ApiClient.convertToType(data['volumeDiscounts'], [PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerVolumeDiscountsInner]);
            }
            if (data.hasOwnProperty('specialPricing')) {
                obj['specialPricing'] = ApiClient.convertToType(data['specialPricing'], [PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner</code>.
     */
    static validateJSON(data) {
        if (data['volumeDiscounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['volumeDiscounts'])) {
                throw new Error("Expected the field `volumeDiscounts` to be an array in the JSON data but got " + data['volumeDiscounts']);
            }
            // validate the optional field `volumeDiscounts` (array)
            for (const item of data['volumeDiscounts']) {
                PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerVolumeDiscountsInner.validateJSON(item);
            };
        }
        if (data['specialPricing']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['specialPricing'])) {
                throw new Error("Expected the field `specialPricing` to be an array in the JSON data but got " + data['specialPricing']);
            }
            // validate the optional field `specialPricing` (array)
            for (const item of data['specialPricing']) {
                PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerVolumeDiscountsInner>} volumeDiscounts
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner.prototype['volumeDiscounts'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner>} specialPricing
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner.prototype['specialPricing'] = undefined;






export default PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInner;

