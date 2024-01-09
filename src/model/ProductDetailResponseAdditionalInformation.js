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
import ProductDetailResponseAdditionalInformationProductWeightInner from './ProductDetailResponseAdditionalInformationProductWeightInner';

/**
 * The ProductDetailResponseAdditionalInformation model module.
 * @module model/ProductDetailResponseAdditionalInformation
 * @version 6.0
 */
class ProductDetailResponseAdditionalInformation {
    /**
     * Constructs a new <code>ProductDetailResponseAdditionalInformation</code>.
     * Additional Information related to the product.
     * @alias module:model/ProductDetailResponseAdditionalInformation
     */
    constructor() { 
        
        ProductDetailResponseAdditionalInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailResponseAdditionalInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailResponseAdditionalInformation} obj Optional instance to populate.
     * @return {module:model/ProductDetailResponseAdditionalInformation} The populated <code>ProductDetailResponseAdditionalInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailResponseAdditionalInformation();

            if (data.hasOwnProperty('productWeight')) {
                obj['productWeight'] = ApiClient.convertToType(data['productWeight'], [ProductDetailResponseAdditionalInformationProductWeightInner]);
            }
            if (data.hasOwnProperty('isBulkFreight')) {
                obj['isBulkFreight'] = ApiClient.convertToType(data['isBulkFreight'], 'Boolean');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'String');
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = ApiClient.convertToType(data['length'], 'String');
            }
            if (data.hasOwnProperty('netWeight')) {
                obj['netWeight'] = ApiClient.convertToType(data['netWeight'], 'String');
            }
            if (data.hasOwnProperty('dimensionUnit')) {
                obj['dimensionUnit'] = ApiClient.convertToType(data['dimensionUnit'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDetailResponseAdditionalInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDetailResponseAdditionalInformation</code>.
     */
    static validateJSON(data) {
        if (data['productWeight']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productWeight'])) {
                throw new Error("Expected the field `productWeight` to be an array in the JSON data but got " + data['productWeight']);
            }
            // validate the optional field `productWeight` (array)
            for (const item of data['productWeight']) {
                ProductDetailResponseAdditionalInformationProductWeightInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['height'] && !(typeof data['height'] === 'string' || data['height'] instanceof String)) {
            throw new Error("Expected the field `height` to be a primitive type in the JSON string but got " + data['height']);
        }
        // ensure the json data is a string
        if (data['width'] && !(typeof data['width'] === 'string' || data['width'] instanceof String)) {
            throw new Error("Expected the field `width` to be a primitive type in the JSON string but got " + data['width']);
        }
        // ensure the json data is a string
        if (data['length'] && !(typeof data['length'] === 'string' || data['length'] instanceof String)) {
            throw new Error("Expected the field `length` to be a primitive type in the JSON string but got " + data['length']);
        }
        // ensure the json data is a string
        if (data['netWeight'] && !(typeof data['netWeight'] === 'string' || data['netWeight'] instanceof String)) {
            throw new Error("Expected the field `netWeight` to be a primitive type in the JSON string but got " + data['netWeight']);
        }
        // ensure the json data is a string
        if (data['dimensionUnit'] && !(typeof data['dimensionUnit'] === 'string' || data['dimensionUnit'] instanceof String)) {
            throw new Error("Expected the field `dimensionUnit` to be a primitive type in the JSON string but got " + data['dimensionUnit']);
        }

        return true;
    }


}



/**
 * Weight information related to the product.
 * @member {Array.<module:model/ProductDetailResponseAdditionalInformationProductWeightInner>} productWeight
 */
ProductDetailResponseAdditionalInformation.prototype['productWeight'] = undefined;

/**
 * Example : true or false
 * @member {Boolean} isBulkFreight
 */
ProductDetailResponseAdditionalInformation.prototype['isBulkFreight'] = undefined;

/**
 * Example : '5.2 Inches'
 * @member {String} height
 */
ProductDetailResponseAdditionalInformation.prototype['height'] = undefined;

/**
 * Example : '13 inches'
 * @member {String} width
 */
ProductDetailResponseAdditionalInformation.prototype['width'] = undefined;

/**
 * Example : '20.4 inches'
 * @member {String} length
 */
ProductDetailResponseAdditionalInformation.prototype['length'] = undefined;

/**
 * Example : '10 lb'
 * @member {String} netWeight
 */
ProductDetailResponseAdditionalInformation.prototype['netWeight'] = undefined;

/**
 * Example : 'Unit value'
 * @member {String} dimensionUnit
 */
ProductDetailResponseAdditionalInformation.prototype['dimensionUnit'] = undefined;






export default ProductDetailResponseAdditionalInformation;

