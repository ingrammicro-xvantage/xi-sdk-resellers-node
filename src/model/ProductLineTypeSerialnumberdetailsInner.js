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
 * The ProductLineTypeSerialnumberdetailsInner model module.
 * @module model/ProductLineTypeSerialnumberdetailsInner
 * @version 6.0
 */
class ProductLineTypeSerialnumberdetailsInner {
    /**
     * Constructs a new <code>ProductLineTypeSerialnumberdetailsInner</code>.
     * @alias module:model/ProductLineTypeSerialnumberdetailsInner
     */
    constructor() { 
        
        ProductLineTypeSerialnumberdetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductLineTypeSerialnumberdetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductLineTypeSerialnumberdetailsInner} obj Optional instance to populate.
     * @return {module:model/ProductLineTypeSerialnumberdetailsInner} The populated <code>ProductLineTypeSerialnumberdetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductLineTypeSerialnumberdetailsInner();

            if (data.hasOwnProperty('serialnumber')) {
                obj['serialnumber'] = ApiClient.convertToType(data['serialnumber'], 'String');
            }
            if (data.hasOwnProperty('deliverynumber')) {
                obj['deliverynumber'] = ApiClient.convertToType(data['deliverynumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductLineTypeSerialnumberdetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductLineTypeSerialnumberdetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serialnumber'] && !(typeof data['serialnumber'] === 'string' || data['serialnumber'] instanceof String)) {
            throw new Error("Expected the field `serialnumber` to be a primitive type in the JSON string but got " + data['serialnumber']);
        }
        // ensure the json data is a string
        if (data['deliverynumber'] && !(typeof data['deliverynumber'] === 'string' || data['deliverynumber'] instanceof String)) {
            throw new Error("Expected the field `deliverynumber` to be a primitive type in the JSON string but got " + data['deliverynumber']);
        }

        return true;
    }


}



/**
 * @member {String} serialnumber
 */
ProductLineTypeSerialnumberdetailsInner.prototype['serialnumber'] = undefined;

/**
 * @member {String} deliverynumber
 */
ProductLineTypeSerialnumberdetailsInner.prototype['deliverynumber'] = undefined;






export default ProductLineTypeSerialnumberdetailsInner;
