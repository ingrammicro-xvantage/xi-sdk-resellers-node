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
 * The ProductDetailResponseSubscriptionDetailsInnerOptionsInner model module.
 * @module model/ProductDetailResponseSubscriptionDetailsInnerOptionsInner
 * @version 1.0.0
 */
class ProductDetailResponseSubscriptionDetailsInnerOptionsInner {
    /**
     * Constructs a new <code>ProductDetailResponseSubscriptionDetailsInnerOptionsInner</code>.
     * @alias module:model/ProductDetailResponseSubscriptionDetailsInnerOptionsInner
     */
    constructor() { 
        
        ProductDetailResponseSubscriptionDetailsInnerOptionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDetailResponseSubscriptionDetailsInnerOptionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductDetailResponseSubscriptionDetailsInnerOptionsInner} obj Optional instance to populate.
     * @return {module:model/ProductDetailResponseSubscriptionDetailsInnerOptionsInner} The populated <code>ProductDetailResponseSubscriptionDetailsInnerOptionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDetailResponseSubscriptionDetailsInnerOptionsInner();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'String');
            }
            if (data.hasOwnProperty('resourceName')) {
                obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('minUnits')) {
                obj['minUnits'] = ApiClient.convertToType(data['minUnits'], 'Number');
            }
            if (data.hasOwnProperty('maxUnits')) {
                obj['maxUnits'] = ApiClient.convertToType(data['maxUnits'], 'Number');
            }
            if (data.hasOwnProperty('dependsOn')) {
                obj['dependsOn'] = ApiClient.convertToType(data['dependsOn'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDetailResponseSubscriptionDetailsInnerOptionsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDetailResponseSubscriptionDetailsInnerOptionsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['resourceId'] && !(typeof data['resourceId'] === 'string' || data['resourceId'] instanceof String)) {
            throw new Error("Expected the field `resourceId` to be a primitive type in the JSON string but got " + data['resourceId']);
        }
        // ensure the json data is a string
        if (data['resourceName'] && !(typeof data['resourceName'] === 'string' || data['resourceName'] instanceof String)) {
            throw new Error("Expected the field `resourceName` to be a primitive type in the JSON string but got " + data['resourceName']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['dependsOn'] && !(typeof data['dependsOn'] === 'string' || data['dependsOn'] instanceof String)) {
            throw new Error("Expected the field `dependsOn` to be a primitive type in the JSON string but got " + data['dependsOn']);
        }

        return true;
    }


}



/**
 * ID of the subscription resource
 * @member {String} resourceId
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['resourceId'] = undefined;

/**
 * Name of the subscription resource
 * @member {String} resourceName
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['resourceName'] = undefined;

/**
 * Vendor’s part number for the product.
 * @member {String} vendorPartNumber
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['vendorPartNumber'] = undefined;

/**
 * Minimum units must be purchased.
 * @member {Number} minUnits
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['minUnits'] = undefined;

/**
 * Maximum units are available for purchase.
 * @member {Number} maxUnits
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['maxUnits'] = undefined;

/**
 * The name of the product must be purchased to purchase this product.
 * @member {String} dependsOn
 */
ProductDetailResponseSubscriptionDetailsInnerOptionsInner.prototype['dependsOn'] = undefined;






export default ProductDetailResponseSubscriptionDetailsInnerOptionsInner;

