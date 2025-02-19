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
 * The RenewalsDetailsResponseAdditionalAttributesInner model module.
 * @module model/RenewalsDetailsResponseAdditionalAttributesInner
 * @version 1.0.0
 */
class RenewalsDetailsResponseAdditionalAttributesInner {
    /**
     * Constructs a new <code>RenewalsDetailsResponseAdditionalAttributesInner</code>.
     * @alias module:model/RenewalsDetailsResponseAdditionalAttributesInner
     */
    constructor() { 
        
        RenewalsDetailsResponseAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsDetailsResponseAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsDetailsResponseAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/RenewalsDetailsResponseAdditionalAttributesInner} The populated <code>RenewalsDetailsResponseAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsDetailsResponseAdditionalAttributesInner();

            if (data.hasOwnProperty('attributeDescription')) {
                obj['attributeDescription'] = ApiClient.convertToType(data['attributeDescription'], 'String');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
            }
            if (data.hasOwnProperty('isConsolidated')) {
                obj['isConsolidated'] = ApiClient.convertToType(data['isConsolidated'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsDetailsResponseAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsDetailsResponseAdditionalAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributeDescription'] && !(typeof data['attributeDescription'] === 'string' || data['attributeDescription'] instanceof String)) {
            throw new Error("Expected the field `attributeDescription` to be a primitive type in the JSON string but got " + data['attributeDescription']);
        }
        // ensure the json data is a string
        if (data['attributeValue'] && !(typeof data['attributeValue'] === 'string' || data['attributeValue'] instanceof String)) {
            throw new Error("Expected the field `attributeValue` to be a primitive type in the JSON string but got " + data['attributeValue']);
        }
        // ensure the json data is a string
        if (data['startDate'] && !(typeof data['startDate'] === 'string' || data['startDate'] instanceof String)) {
            throw new Error("Expected the field `startDate` to be a primitive type in the JSON string but got " + data['startDate']);
        }
        // ensure the json data is a string
        if (data['expirationDate'] && !(typeof data['expirationDate'] === 'string' || data['expirationDate'] instanceof String)) {
            throw new Error("Expected the field `expirationDate` to be a primitive type in the JSON string but got " + data['expirationDate']);
        }
        // ensure the json data is a string
        if (data['isConsolidated'] && !(typeof data['isConsolidated'] === 'string' || data['isConsolidated'] instanceof String)) {
            throw new Error("Expected the field `isConsolidated` to be a primitive type in the JSON string but got " + data['isConsolidated']);
        }

        return true;
    }


}



/**
 * The description of the additional attribute.
 * @member {String} attributeDescription
 */
RenewalsDetailsResponseAdditionalAttributesInner.prototype['attributeDescription'] = undefined;

/**
 * The value of the additional attribute.
 * @member {String} attributeValue
 */
RenewalsDetailsResponseAdditionalAttributesInner.prototype['attributeValue'] = undefined;

/**
 * The attribute start date.
 * @member {String} startDate
 */
RenewalsDetailsResponseAdditionalAttributesInner.prototype['startDate'] = undefined;

/**
 * The attribute expiration date.
 * @member {String} expirationDate
 */
RenewalsDetailsResponseAdditionalAttributesInner.prototype['expirationDate'] = undefined;

/**
 * Is the line item consolidated? Yes or No.
 * @member {String} isConsolidated
 */
RenewalsDetailsResponseAdditionalAttributesInner.prototype['isConsolidated'] = undefined;






export default RenewalsDetailsResponseAdditionalAttributesInner;

