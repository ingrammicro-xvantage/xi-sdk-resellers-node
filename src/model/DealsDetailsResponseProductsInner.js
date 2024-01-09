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

/**
 * The DealsDetailsResponseProductsInner model module.
 * @module model/DealsDetailsResponseProductsInner
 * @version 6.0
 */
class DealsDetailsResponseProductsInner {
    /**
     * Constructs a new <code>DealsDetailsResponseProductsInner</code>.
     * @alias module:model/DealsDetailsResponseProductsInner
     */
    constructor() { 
        
        DealsDetailsResponseProductsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealsDetailsResponseProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealsDetailsResponseProductsInner} obj Optional instance to populate.
     * @return {module:model/DealsDetailsResponseProductsInner} The populated <code>DealsDetailsResponseProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealsDetailsResponseProductsInner();

            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('productDescription')) {
                obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
            }
            if (data.hasOwnProperty('msrp')) {
                obj['msrp'] = ApiClient.convertToType(data['msrp'], 'Number');
            }
            if (data.hasOwnProperty('extendedMSRP')) {
                obj['extendedMSRP'] = ApiClient.convertToType(data['extendedMSRP'], 'Number');
            }
            if (data.hasOwnProperty('standardPrice')) {
                obj['standardPrice'] = ApiClient.convertToType(data['standardPrice'], 'Number');
            }
            if (data.hasOwnProperty('approvedQuantity')) {
                obj['approvedQuantity'] = ApiClient.convertToType(data['approvedQuantity'], 'Number');
            }
            if (data.hasOwnProperty('remainingQuantity')) {
                obj['remainingQuantity'] = ApiClient.convertToType(data['remainingQuantity'], 'Number');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('specialConditions')) {
                obj['specialConditions'] = ApiClient.convertToType(data['specialConditions'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
            }
            if (data.hasOwnProperty('daysRemaining')) {
                obj['daysRemaining'] = ApiClient.convertToType(data['daysRemaining'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealsDetailsResponseProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealsDetailsResponseProductsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['productDescription'] && !(typeof data['productDescription'] === 'string' || data['productDescription'] instanceof String)) {
            throw new Error("Expected the field `productDescription` to be a primitive type in the JSON string but got " + data['productDescription']);
        }
        // ensure the json data is a string
        if (data['comments'] && !(typeof data['comments'] === 'string' || data['comments'] instanceof String)) {
            throw new Error("Expected the field `comments` to be a primitive type in the JSON string but got " + data['comments']);
        }
        // ensure the json data is a string
        if (data['specialConditions'] && !(typeof data['specialConditions'] === 'string' || data['specialConditions'] instanceof String)) {
            throw new Error("Expected the field `specialConditions` to be a primitive type in the JSON string but got " + data['specialConditions']);
        }

        return true;
    }


}



/**
 * Unique Ingram part number.
 * @member {String} ingramPartNumber
 */
DealsDetailsResponseProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor Part number for the product.
 * @member {String} vendorPartNumber
 */
DealsDetailsResponseProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item.
 * @member {String} upc
 */
DealsDetailsResponseProductsInner.prototype['upc'] = undefined;

/**
 * Description of the product.
 * @member {String} productDescription
 */
DealsDetailsResponseProductsInner.prototype['productDescription'] = undefined;

/**
 * Manufacturer Suggested Retail Price.
 * @member {Number} msrp
 */
DealsDetailsResponseProductsInner.prototype['msrp'] = undefined;

/**
 * Extended MSRP - Manufacturer Suggested Retail Price X Quantity.
 * @member {Number} extendedMSRP
 */
DealsDetailsResponseProductsInner.prototype['extendedMSRP'] = undefined;

/**
 * Standard price of the line item.
 * @member {Number} standardPrice
 */
DealsDetailsResponseProductsInner.prototype['standardPrice'] = undefined;

/**
 * Total quantity approved for the deal.
 * @member {Number} approvedQuantity
 */
DealsDetailsResponseProductsInner.prototype['approvedQuantity'] = undefined;

/**
 * The quantity remaining as part of the deal for the customer to order.
 * @member {Number} remainingQuantity
 */
DealsDetailsResponseProductsInner.prototype['remainingQuantity'] = undefined;

/**
 * Comments of the deal.
 * @member {String} comments
 */
DealsDetailsResponseProductsInner.prototype['comments'] = undefined;

/**
 * Special conditions of the deal.
 * @member {String} specialConditions
 */
DealsDetailsResponseProductsInner.prototype['specialConditions'] = undefined;

/**
 * Start Date.
 * @member {Date} startDate
 */
DealsDetailsResponseProductsInner.prototype['startDate'] = undefined;

/**
 * Expiration date.
 * @member {Date} expirationDate
 */
DealsDetailsResponseProductsInner.prototype['expirationDate'] = undefined;

/**
 * Number of days remaining before the deal expires.
 * @member {Number} daysRemaining
 */
DealsDetailsResponseProductsInner.prototype['daysRemaining'] = undefined;






export default DealsDetailsResponseProductsInner;
