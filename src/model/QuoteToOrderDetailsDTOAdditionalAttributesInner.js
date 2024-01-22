/**
 * XI SDK Resellers
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
 * The QuoteToOrderDetailsDTOAdditionalAttributesInner model module.
 * @module model/QuoteToOrderDetailsDTOAdditionalAttributesInner
 * @version 6.0
 */
class QuoteToOrderDetailsDTOAdditionalAttributesInner {
    /**
     * Constructs a new <code>QuoteToOrderDetailsDTOAdditionalAttributesInner</code>.
     * @alias module:model/QuoteToOrderDetailsDTOAdditionalAttributesInner
     */
    constructor() { 
        
        QuoteToOrderDetailsDTOAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteToOrderDetailsDTOAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteToOrderDetailsDTOAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/QuoteToOrderDetailsDTOAdditionalAttributesInner} The populated <code>QuoteToOrderDetailsDTOAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteToOrderDetailsDTOAdditionalAttributesInner();

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
     * Validates the JSON data with respect to <code>QuoteToOrderDetailsDTOAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteToOrderDetailsDTOAdditionalAttributesInner</code>.
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
 * The attribute name. allowDuplicateCustomerOrderNumber: Allow orders with duplicate customer PO numbers. Enables resellers to have the same PO number for multiple orders. enableCommentsAsLines:  It will enable comments as lines.
 * @member {String} attributeName
 */
QuoteToOrderDetailsDTOAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * The attribute field data.
 * @member {String} attributeValue
 */
QuoteToOrderDetailsDTOAdditionalAttributesInner.prototype['attributeValue'] = undefined;






export default QuoteToOrderDetailsDTOAdditionalAttributesInner;

