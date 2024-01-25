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
 * The QuoteDetailsResponseProductsInnerPrice model module.
 * @module model/QuoteDetailsResponseProductsInnerPrice
 * @version 6.0
 */
class QuoteDetailsResponseProductsInnerPrice {
    /**
     * Constructs a new <code>QuoteDetailsResponseProductsInnerPrice</code>.
     * @alias module:model/QuoteDetailsResponseProductsInnerPrice
     */
    constructor() { 
        
        QuoteDetailsResponseProductsInnerPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsResponseProductsInnerPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseProductsInnerPrice} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseProductsInnerPrice} The populated <code>QuoteDetailsResponseProductsInnerPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsResponseProductsInnerPrice();

            if (data.hasOwnProperty('quotePrice')) {
                obj['quotePrice'] = ApiClient.convertToType(data['quotePrice'], 'Number');
            }
            if (data.hasOwnProperty('msrp')) {
                obj['msrp'] = ApiClient.convertToType(data['msrp'], 'Number');
            }
            if (data.hasOwnProperty('extendedMsrp')) {
                obj['extendedMsrp'] = ApiClient.convertToType(data['extendedMsrp'], 'Number');
            }
            if (data.hasOwnProperty('extendedQuotePrice')) {
                obj['extendedQuotePrice'] = ApiClient.convertToType(data['extendedQuotePrice'], 'Number');
            }
            if (data.hasOwnProperty('discountOffList')) {
                obj['discountOffList'] = ApiClient.convertToType(data['discountOffList'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseProductsInnerPrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseProductsInnerPrice</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Ingram Micro quoted price specific to the reseller and quote.
 * @member {Number} quotePrice
 */
QuoteDetailsResponseProductsInnerPrice.prototype['quotePrice'] = undefined;

/**
 * Manufacturer Suggested Retail Price
 * @member {Number} msrp
 */
QuoteDetailsResponseProductsInnerPrice.prototype['msrp'] = undefined;

/**
 * Extended MSRP - Manufacturer Suggested Retail Price X Quantity
 * @member {Number} extendedMsrp
 */
QuoteDetailsResponseProductsInnerPrice.prototype['extendedMsrp'] = undefined;

/**
 * Extended reseller quoted price (cost to reseller) X Quantity
 * @member {Number} extendedQuotePrice
 */
QuoteDetailsResponseProductsInnerPrice.prototype['extendedQuotePrice'] = undefined;

/**
 * Discount off list percentage
 * @member {Number} discountOffList
 */
QuoteDetailsResponseProductsInnerPrice.prototype['discountOffList'] = undefined;






export default QuoteDetailsResponseProductsInnerPrice;

