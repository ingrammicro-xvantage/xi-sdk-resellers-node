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
import ProductDetailResponseAdditionalInformation from './ProductDetailResponseAdditionalInformation';
import ProductDetailResponseCiscoFields from './ProductDetailResponseCiscoFields';
import ProductDetailResponseIndicators from './ProductDetailResponseIndicators';
import ProductDetailResponseTechnicalSpecificationsInner from './ProductDetailResponseTechnicalSpecificationsInner';

/**
 * The ProductDetailResponse model module.
 * @module model/ProductDetailResponse
 * @version 1.0.0
 */
class ProductDetailResponse {
    /**
     * Constructs a new <code>ProductDetailResponse</code>.
     * @alias module:model/ProductDetailResponse
     */
    constructor() { 
        
        ProductDetailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailResponse} obj Optional instance to populate.
     * @return {module:model/ProductDetailResponse} The populated <code>ProductDetailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailResponse();

            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('customerPartNumber')) {
                obj['customerPartNumber'] = ApiClient.convertToType(data['customerPartNumber'], 'String');
            }
            if (data.hasOwnProperty('productAuthorized')) {
                obj['productAuthorized'] = ApiClient.convertToType(data['productAuthorized'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('productDetailDescription')) {
                obj['productDetailDescription'] = ApiClient.convertToType(data['productDetailDescription'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('productCategory')) {
                obj['productCategory'] = ApiClient.convertToType(data['productCategory'], 'String');
            }
            if (data.hasOwnProperty('productSubCategory')) {
                obj['productSubCategory'] = ApiClient.convertToType(data['productSubCategory'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('vendorNumber')) {
                obj['vendorNumber'] = ApiClient.convertToType(data['vendorNumber'], 'String');
            }
            if (data.hasOwnProperty('productStatusCode')) {
                obj['productStatusCode'] = ApiClient.convertToType(data['productStatusCode'], 'String');
            }
            if (data.hasOwnProperty('productClass')) {
                obj['productClass'] = ApiClient.convertToType(data['productClass'], 'String');
            }
            if (data.hasOwnProperty('indicators')) {
                obj['indicators'] = ProductDetailResponseIndicators.constructFromObject(data['indicators']);
            }
            if (data.hasOwnProperty('ciscoFields')) {
                obj['ciscoFields'] = ProductDetailResponseCiscoFields.constructFromObject(data['ciscoFields']);
            }
            if (data.hasOwnProperty('technicalSpecifications')) {
                obj['technicalSpecifications'] = ApiClient.convertToType(data['technicalSpecifications'], [ProductDetailResponseTechnicalSpecificationsInner]);
            }
            if (data.hasOwnProperty('warrantyInformation')) {
                obj['warrantyInformation'] = ApiClient.convertToType(data['warrantyInformation'], [Object]);
            }
            if (data.hasOwnProperty('additionalInformation')) {
                obj['additionalInformation'] = ProductDetailResponseAdditionalInformation.constructFromObject(data['additionalInformation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDetailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDetailResponse</code>.
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
        if (data['customerPartNumber'] && !(typeof data['customerPartNumber'] === 'string' || data['customerPartNumber'] instanceof String)) {
            throw new Error("Expected the field `customerPartNumber` to be a primitive type in the JSON string but got " + data['customerPartNumber']);
        }
        // ensure the json data is a string
        if (data['productAuthorized'] && !(typeof data['productAuthorized'] === 'string' || data['productAuthorized'] instanceof String)) {
            throw new Error("Expected the field `productAuthorized` to be a primitive type in the JSON string but got " + data['productAuthorized']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['productDetailDescription'] && !(typeof data['productDetailDescription'] === 'string' || data['productDetailDescription'] instanceof String)) {
            throw new Error("Expected the field `productDetailDescription` to be a primitive type in the JSON string but got " + data['productDetailDescription']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['productCategory'] && !(typeof data['productCategory'] === 'string' || data['productCategory'] instanceof String)) {
            throw new Error("Expected the field `productCategory` to be a primitive type in the JSON string but got " + data['productCategory']);
        }
        // ensure the json data is a string
        if (data['productSubCategory'] && !(typeof data['productSubCategory'] === 'string' || data['productSubCategory'] instanceof String)) {
            throw new Error("Expected the field `productSubCategory` to be a primitive type in the JSON string but got " + data['productSubCategory']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['vendorNumber'] && !(typeof data['vendorNumber'] === 'string' || data['vendorNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorNumber` to be a primitive type in the JSON string but got " + data['vendorNumber']);
        }
        // ensure the json data is a string
        if (data['productStatusCode'] && !(typeof data['productStatusCode'] === 'string' || data['productStatusCode'] instanceof String)) {
            throw new Error("Expected the field `productStatusCode` to be a primitive type in the JSON string but got " + data['productStatusCode']);
        }
        // ensure the json data is a string
        if (data['productClass'] && !(typeof data['productClass'] === 'string' || data['productClass'] instanceof String)) {
            throw new Error("Expected the field `productClass` to be a primitive type in the JSON string but got " + data['productClass']);
        }
        // validate the optional field `indicators`
        if (data['indicators']) { // data not null
          ProductDetailResponseIndicators.validateJSON(data['indicators']);
        }
        // validate the optional field `ciscoFields`
        if (data['ciscoFields']) { // data not null
          ProductDetailResponseCiscoFields.validateJSON(data['ciscoFields']);
        }
        if (data['technicalSpecifications']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['technicalSpecifications'])) {
                throw new Error("Expected the field `technicalSpecifications` to be an array in the JSON data but got " + data['technicalSpecifications']);
            }
            // validate the optional field `technicalSpecifications` (array)
            for (const item of data['technicalSpecifications']) {
                ProductDetailResponseTechnicalSpecificationsInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['warrantyInformation'])) {
            throw new Error("Expected the field `warrantyInformation` to be an array in the JSON data but got " + data['warrantyInformation']);
        }
        // validate the optional field `additionalInformation`
        if (data['additionalInformation']) { // data not null
          ProductDetailResponseAdditionalInformation.validateJSON(data['additionalInformation']);
        }

        return true;
    }


}



/**
 * Ingram Micro unique part number for the product.
 * @member {String} ingramPartNumber
 */
ProductDetailResponse.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor’s part number for the product.
 * @member {String} vendorPartNumber
 */
ProductDetailResponse.prototype['vendorPartNumber'] = undefined;

/**
 * Reseller / end-user’s part number for the product.
 * @member {String} customerPartNumber
 */
ProductDetailResponse.prototype['customerPartNumber'] = undefined;

/**
 * Boolean that indicates whether a product is authorized.
 * @member {String} productAuthorized
 */
ProductDetailResponse.prototype['productAuthorized'] = undefined;

/**
 * The description given for the product.
 * @member {String} description
 */
ProductDetailResponse.prototype['description'] = undefined;

/**
 * The detailed description given for the product.
 * @member {String} productDetailDescription
 */
ProductDetailResponse.prototype['productDetailDescription'] = undefined;

/**
 * The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item.
 * @member {String} upc
 */
ProductDetailResponse.prototype['upc'] = undefined;

/**
 * The category of the product.
 * @member {String} productCategory
 */
ProductDetailResponse.prototype['productCategory'] = undefined;

/**
 * The sub-category of the product.
 * @member {String} productSubCategory
 */
ProductDetailResponse.prototype['productSubCategory'] = undefined;

/**
 * Vendor name for the order.
 * @member {String} vendorName
 */
ProductDetailResponse.prototype['vendorName'] = undefined;

/**
 * Vendor number that identifies the product.
 * @member {String} vendorNumber
 */
ProductDetailResponse.prototype['vendorNumber'] = undefined;

/**
 * Status code of the product.
 * @member {String} productStatusCode
 */
ProductDetailResponse.prototype['productStatusCode'] = undefined;

/**
 * Indicates whether the product is directly shipped from the vendor’s warehouse or if the product ships from Ingram Micro’s warehouse. Class Codes are Ingram classifications on how skus are stocked A = Product that is stocked usually in all IM warehouses and replenished on a regular basis. B = Product that is stocked in limited IM warehouses and replenished on a regular basis C = Product that is stocked in fewer IM warehouses and replenished on a regular basis. D = Product that Ingram Micro has elected to discontinue. E = Product that will be phased out later, according to the vendor. You may not want to replenish this product, but instead sell down what is in stock. F = Product that we carry for a specific customer or supplier under a contractual agreement. N = New Sku. Classification before first receipt O = Discontinued product to be liquidated S= Order for Specialized Demand (Order to backorder) X= direct ship from Vendor V = product that vendor has elected to discontinue.
 * @member {String} productClass
 */
ProductDetailResponse.prototype['productClass'] = undefined;

/**
 * @member {module:model/ProductDetailResponseIndicators} indicators
 */
ProductDetailResponse.prototype['indicators'] = undefined;

/**
 * @member {module:model/ProductDetailResponseCiscoFields} ciscoFields
 */
ProductDetailResponse.prototype['ciscoFields'] = undefined;

/**
 * Technical specifications of the product.
 * @member {Array.<module:model/ProductDetailResponseTechnicalSpecificationsInner>} technicalSpecifications
 */
ProductDetailResponse.prototype['technicalSpecifications'] = undefined;

/**
 * Warranty information related to the product.
 * @member {Array.<Object>} warrantyInformation
 */
ProductDetailResponse.prototype['warrantyInformation'] = undefined;

/**
 * @member {module:model/ProductDetailResponseAdditionalInformation} additionalInformation
 */
ProductDetailResponse.prototype['additionalInformation'] = undefined;






export default ProductDetailResponse;

