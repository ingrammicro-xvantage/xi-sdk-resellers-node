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
 * The ProductDetailResponseTechnicalSpecificationsInner model module.
 * @module model/ProductDetailResponseTechnicalSpecificationsInner
 * @version 6.0
 */
class ProductDetailResponseTechnicalSpecificationsInner {
    /**
     * Constructs a new <code>ProductDetailResponseTechnicalSpecificationsInner</code>.
     * @alias module:model/ProductDetailResponseTechnicalSpecificationsInner
     */
    constructor() { 
        
        ProductDetailResponseTechnicalSpecificationsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailResponseTechnicalSpecificationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailResponseTechnicalSpecificationsInner} obj Optional instance to populate.
     * @return {module:model/ProductDetailResponseTechnicalSpecificationsInner} The populated <code>ProductDetailResponseTechnicalSpecificationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailResponseTechnicalSpecificationsInner();

            if (data.hasOwnProperty('headername')) {
                obj['headername'] = ApiClient.convertToType(data['headername'], 'String');
            }
            if (data.hasOwnProperty('attributevalue')) {
                obj['attributevalue'] = ApiClient.convertToType(data['attributevalue'], 'String');
            }
            if (data.hasOwnProperty('attributedisplay')) {
                obj['attributedisplay'] = ApiClient.convertToType(data['attributedisplay'], 'String');
            }
            if (data.hasOwnProperty('attributename')) {
                obj['attributename'] = ApiClient.convertToType(data['attributename'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDetailResponseTechnicalSpecificationsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDetailResponseTechnicalSpecificationsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['headername'] && !(typeof data['headername'] === 'string' || data['headername'] instanceof String)) {
            throw new Error("Expected the field `headername` to be a primitive type in the JSON string but got " + data['headername']);
        }
        // ensure the json data is a string
        if (data['attributevalue'] && !(typeof data['attributevalue'] === 'string' || data['attributevalue'] instanceof String)) {
            throw new Error("Expected the field `attributevalue` to be a primitive type in the JSON string but got " + data['attributevalue']);
        }
        // ensure the json data is a string
        if (data['attributedisplay'] && !(typeof data['attributedisplay'] === 'string' || data['attributedisplay'] instanceof String)) {
            throw new Error("Expected the field `attributedisplay` to be a primitive type in the JSON string but got " + data['attributedisplay']);
        }
        // ensure the json data is a string
        if (data['attributename'] && !(typeof data['attributename'] === 'string' || data['attributename'] instanceof String)) {
            throw new Error("Expected the field `attributename` to be a primitive type in the JSON string but got " + data['attributename']);
        }

        return true;
    }


}



/**
 * Example : 'Basic'
 * @member {String} headername
 */
ProductDetailResponseTechnicalSpecificationsInner.prototype['headername'] = undefined;

/**
 * Example : 'LCD Monitor'
 * @member {String} attributevalue
 */
ProductDetailResponseTechnicalSpecificationsInner.prototype['attributevalue'] = undefined;

/**
 * Example : 'Basic|Product Type|LCD Monitor'
 * @member {String} attributedisplay
 */
ProductDetailResponseTechnicalSpecificationsInner.prototype['attributedisplay'] = undefined;

/**
 * Example : 'Product Type'
 * @member {String} attributename
 */
ProductDetailResponseTechnicalSpecificationsInner.prototype['attributename'] = undefined;






export default ProductDetailResponseTechnicalSpecificationsInner;
