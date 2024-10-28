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
 * The PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner model module.
 * @module model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner} The populated <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('discountType')) {
                obj['discountType'] = ApiClient.convertToType(data['discountType'], 'String');
            }
            if (data.hasOwnProperty('discountQtyLimit')) {
                obj['discountQtyLimit'] = ApiClient.convertToType(data['discountQtyLimit'], 'Number');
            }
            if (data.hasOwnProperty('discountExpiryDate')) {
                obj['discountExpiryDate'] = ApiClient.convertToType(data['discountExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('vendorProgramName')) {
                obj['vendorProgramName'] = ApiClient.convertToType(data['vendorProgramName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['discountType'] && !(typeof data['discountType'] === 'string' || data['discountType'] instanceof String)) {
            throw new Error("Expected the field `discountType` to be a primitive type in the JSON string but got " + data['discountType']);
        }
        // ensure the json data is a string
        if (data['discountExpiryDate'] && !(typeof data['discountExpiryDate'] === 'string' || data['discountExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `discountExpiryDate` to be a primitive type in the JSON string but got " + data['discountExpiryDate']);
        }
        // ensure the json data is a string
        if (data['vendorProgramName'] && !(typeof data['vendorProgramName'] === 'string' || data['vendorProgramName'] instanceof String)) {
            throw new Error("Expected the field `vendorProgramName` to be a primitive type in the JSON string but got " + data['vendorProgramName']);
        }

        return true;
    }


}



/**
 * The 3-digit ISO currency code.
 * @member {String} currencyCode
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['currencyCode'] = undefined;

/**
 * The discount for the line item.
 * @member {Number} discount
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['discount'] = undefined;

/**
 * The type of the discount
 * @member {String} discountType
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['discountType'] = undefined;

/**
 * The quantity available at the discounted price
 * @member {Number} discountQtyLimit
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['discountQtyLimit'] = undefined;

/**
 * The date when discount expires.
 * @member {String} discountExpiryDate
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['discountExpiryDate'] = undefined;

/**
 * The vendors discount program name.
 * @member {String} vendorProgramName
 */
PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner.prototype['vendorProgramName'] = undefined;






export default PriceAndAvailabilityResponseInnerSubscriptionPriceInnerOptionsInnerDiscountsInnerSpecialPricingInner;

