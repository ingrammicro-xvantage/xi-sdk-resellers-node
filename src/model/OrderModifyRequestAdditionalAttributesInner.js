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
 * The OrderModifyRequestAdditionalAttributesInner model module.
 * @module model/OrderModifyRequestAdditionalAttributesInner
 * @version 6.0
 */
class OrderModifyRequestAdditionalAttributesInner {
    /**
     * Constructs a new <code>OrderModifyRequestAdditionalAttributesInner</code>.
     * @alias module:model/OrderModifyRequestAdditionalAttributesInner
     */
    constructor() { 
        
        OrderModifyRequestAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyRequestAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequestAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequestAdditionalAttributesInner} The populated <code>OrderModifyRequestAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyRequestAdditionalAttributesInner();

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
     * Validates the JSON data with respect to <code>OrderModifyRequestAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequestAdditionalAttributesInner</code>.
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
 * Example values are 'entryMethod', 'enableCommentsAsLines', 'regionCode'
 * @member {String} attributeName
 */
OrderModifyRequestAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * Attribute Value
 * @member {String} attributeValue
 */
OrderModifyRequestAdditionalAttributesInner.prototype['attributeValue'] = undefined;






export default OrderModifyRequestAdditionalAttributesInner;

