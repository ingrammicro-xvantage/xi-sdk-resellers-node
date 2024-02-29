/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
 * The PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner model module.
 * @module model/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner
 * @version 1.0.0
 */
class PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner</code>.
     * @alias module:model/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner
     */
    constructor() { 
        
        PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner} The populated <code>PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner();

            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributeName'] && !(typeof data['attributeName'] === 'string' || data['attributeName'] instanceof String)) {
            throw new Error("Expected the field `attributeName` to be a primitive type in the JSON string but got " + data['attributeName']);
        }
        // ensure the json data is a string
        if (data['attributeValue'] && !(typeof data['attributeValue'] === 'string' || data['attributeValue'] instanceof String)) {
            throw new Error("Expected the field `attributeValue` to be a primitive type in the JSON string but got " + data['attributeValue']);
        }

        return true;
    }


}



/**
 * governmentprogramcode: Special Discount details will be provided based on the governmentprogramcode if available. shiptostatebrazil: Attribute Specific to Brazil. shipfrombranchnumber: If provided, displays only the availability of the specified branch number.
 * @member {String} attributeName
 */
PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * key value pair -key value.
 * @member {String} attributeValue
 */
PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner.prototype['attributeValue'] = undefined;






export default PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner;

