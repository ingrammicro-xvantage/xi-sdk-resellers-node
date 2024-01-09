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
import RenewalsDetailsResponseAdditionalAttributesInner from './RenewalsDetailsResponseAdditionalAttributesInner';
import RenewalsDetailsResponseEndUserInfoInner from './RenewalsDetailsResponseEndUserInfoInner';
import RenewalsDetailsResponseProductsInner from './RenewalsDetailsResponseProductsInner';
import RenewalsDetailsResponseReferenceNumberInner from './RenewalsDetailsResponseReferenceNumberInner';

/**
 * The RenewalsDetailsResponse model module.
 * @module model/RenewalsDetailsResponse
 * @version 6.0
 */
class RenewalsDetailsResponse {
    /**
     * Constructs a new <code>RenewalsDetailsResponse</code>.
     * @alias module:model/RenewalsDetailsResponse
     */
    constructor() { 
        
        RenewalsDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsDetailsResponse} obj Optional instance to populate.
     * @return {module:model/RenewalsDetailsResponse} The populated <code>RenewalsDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsDetailsResponse();

            if (data.hasOwnProperty('renewalId')) {
                obj['renewalId'] = ApiClient.convertToType(data['renewalId'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderNumber')) {
                obj['ingramOrderNumber'] = ApiClient.convertToType(data['ingramOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderDate')) {
                obj['ingramOrderDate'] = ApiClient.convertToType(data['ingramOrderDate'], 'Date');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
            }
            if (data.hasOwnProperty('ingramPurchaseOrderNumber')) {
                obj['ingramPurchaseOrderNumber'] = ApiClient.convertToType(data['ingramPurchaseOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('endCustomerOrderNumber')) {
                obj['endCustomerOrderNumber'] = ApiClient.convertToType(data['endCustomerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('renewalValue')) {
                obj['renewalValue'] = ApiClient.convertToType(data['renewalValue'], 'Number');
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = ApiClient.convertToType(data['endUser'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = ApiClient.convertToType(data['endUserInfo'], [RenewalsDetailsResponseEndUserInfoInner]);
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], [RenewalsDetailsResponseReferenceNumberInner]);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [RenewalsDetailsResponseProductsInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [RenewalsDetailsResponseAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsDetailsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['renewalId'] && !(typeof data['renewalId'] === 'string' || data['renewalId'] instanceof String)) {
            throw new Error("Expected the field `renewalId` to be a primitive type in the JSON string but got " + data['renewalId']);
        }
        // ensure the json data is a string
        if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPurchaseOrderNumber'] && !(typeof data['ingramPurchaseOrderNumber'] === 'string' || data['ingramPurchaseOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPurchaseOrderNumber` to be a primitive type in the JSON string but got " + data['ingramPurchaseOrderNumber']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['endUser'] && !(typeof data['endUser'] === 'string' || data['endUser'] instanceof String)) {
            throw new Error("Expected the field `endUser` to be a primitive type in the JSON string but got " + data['endUser']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        if (data['endUserInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['endUserInfo'])) {
                throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
            }
            // validate the optional field `endUserInfo` (array)
            for (const item of data['endUserInfo']) {
                RenewalsDetailsResponseEndUserInfoInner.validateJSON(item);
            };
        }
        if (data['referenceNumber']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['referenceNumber'])) {
                throw new Error("Expected the field `referenceNumber` to be an array in the JSON data but got " + data['referenceNumber']);
            }
            // validate the optional field `referenceNumber` (array)
            for (const item of data['referenceNumber']) {
                RenewalsDetailsResponseReferenceNumberInner.validateJSON(item);
            };
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                RenewalsDetailsResponseProductsInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                RenewalsDetailsResponseAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Unique Ingram renewal ID.
 * @member {String} renewalId
 */
RenewalsDetailsResponse.prototype['renewalId'] = undefined;

/**
 * The IngramMicro sales order number.
 * @member {String} ingramOrderNumber
 */
RenewalsDetailsResponse.prototype['ingramOrderNumber'] = undefined;

/**
 * The IngramMicro sales order date.
 * @member {Date} ingramOrderDate
 */
RenewalsDetailsResponse.prototype['ingramOrderDate'] = undefined;

/**
 * Renewal expiration date.
 * @member {Date} expirationDate
 */
RenewalsDetailsResponse.prototype['expirationDate'] = undefined;

/**
 * Ingram purchase order number.
 * @member {String} ingramPurchaseOrderNumber
 */
RenewalsDetailsResponse.prototype['ingramPurchaseOrderNumber'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
RenewalsDetailsResponse.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} endCustomerOrderNumber
 */
RenewalsDetailsResponse.prototype['endCustomerOrderNumber'] = undefined;

/**
 * The value of the renewal.
 * @member {Number} renewalValue
 */
RenewalsDetailsResponse.prototype['renewalValue'] = undefined;

/**
 * The company name for the end user/customer.
 * @member {String} endUser
 */
RenewalsDetailsResponse.prototype['endUser'] = undefined;

/**
 * The name of the vendor.
 * @member {String} vendor
 */
RenewalsDetailsResponse.prototype['vendor'] = undefined;

/**
 * The status of the renewal.
 * @member {String} status
 */
RenewalsDetailsResponse.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/RenewalsDetailsResponseEndUserInfoInner>} endUserInfo
 */
RenewalsDetailsResponse.prototype['endUserInfo'] = undefined;

/**
 * @member {Array.<module:model/RenewalsDetailsResponseReferenceNumberInner>} referenceNumber
 */
RenewalsDetailsResponse.prototype['referenceNumber'] = undefined;

/**
 * @member {Array.<module:model/RenewalsDetailsResponseProductsInner>} products
 */
RenewalsDetailsResponse.prototype['products'] = undefined;

/**
 * @member {Array.<module:model/RenewalsDetailsResponseAdditionalAttributesInner>} additionalAttributes
 */
RenewalsDetailsResponse.prototype['additionalAttributes'] = undefined;






export default RenewalsDetailsResponse;

