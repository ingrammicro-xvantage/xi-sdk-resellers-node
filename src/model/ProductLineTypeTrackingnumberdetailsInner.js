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
 * The ProductLineTypeTrackingnumberdetailsInner model module.
 * @module model/ProductLineTypeTrackingnumberdetailsInner
 * @version 6.0
 */
class ProductLineTypeTrackingnumberdetailsInner {
    /**
     * Constructs a new <code>ProductLineTypeTrackingnumberdetailsInner</code>.
     * @alias module:model/ProductLineTypeTrackingnumberdetailsInner
     */
    constructor() { 
        
        ProductLineTypeTrackingnumberdetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductLineTypeTrackingnumberdetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductLineTypeTrackingnumberdetailsInner} obj Optional instance to populate.
     * @return {module:model/ProductLineTypeTrackingnumberdetailsInner} The populated <code>ProductLineTypeTrackingnumberdetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductLineTypeTrackingnumberdetailsInner();

            if (data.hasOwnProperty('trackingnumber')) {
                obj['trackingnumber'] = ApiClient.convertToType(data['trackingnumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductLineTypeTrackingnumberdetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductLineTypeTrackingnumberdetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['trackingnumber'] && !(typeof data['trackingnumber'] === 'string' || data['trackingnumber'] instanceof String)) {
            throw new Error("Expected the field `trackingnumber` to be a primitive type in the JSON string but got " + data['trackingnumber']);
        }

        return true;
    }


}



/**
 * @member {String} trackingnumber
 */
ProductLineTypeTrackingnumberdetailsInner.prototype['trackingnumber'] = undefined;






export default ProductLineTypeTrackingnumberdetailsInner;

