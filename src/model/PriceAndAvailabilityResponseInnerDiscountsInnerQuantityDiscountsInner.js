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

/**
 * The PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner model module.
 * @module model/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner} The populated <code>PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner();

            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = ApiClient.convertToType(data['conditionType'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('currencyType')) {
                obj['currencyType'] = ApiClient.convertToType(data['currencyType'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['conditionType'] && !(typeof data['conditionType'] === 'string' || data['conditionType'] instanceof String)) {
            throw new Error("Expected the field `conditionType` to be a primitive type in the JSON string but got " + data['conditionType']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['currencyType'] && !(typeof data['currencyType'] === 'string' || data['currencyType'] instanceof String)) {
            throw new Error("Expected the field `currencyType` to be a primitive type in the JSON string but got " + data['currencyType']);
        }

        return true;
    }


}



/**
 * Indicates when the discount is applied after ordering the product.
 * @member {String} conditionType
 */
PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.prototype['conditionType'] = undefined;

/**
 * The country-specific three digit ISO 4217 currency code for the order.
 * @member {String} currencyCode
 */
PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.prototype['currencyCode'] = undefined;

/**
 * Type of currency.
 * @member {String} currencyType
 */
PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.prototype['currencyType'] = undefined;

/**
 * The total discounted quantity of the product.
 * @member {Number} quantity
 */
PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.prototype['quantity'] = undefined;

/**
 * The total price of all the discounts applied.
 * @member {Number} amount
 */
PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.prototype['amount'] = undefined;






export default PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner;

