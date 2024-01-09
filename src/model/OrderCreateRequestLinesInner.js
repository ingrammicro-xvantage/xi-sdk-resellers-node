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
import OrderCreateRequestLinesInnerAdditionalAttributesInner from './OrderCreateRequestLinesInnerAdditionalAttributesInner';
import OrderCreateRequestLinesInnerEndUserInfoInner from './OrderCreateRequestLinesInnerEndUserInfoInner';
import OrderCreateRequestLinesInnerWarrantyInfoInner from './OrderCreateRequestLinesInnerWarrantyInfoInner';

/**
 * The OrderCreateRequestLinesInner model module.
 * @module model/OrderCreateRequestLinesInner
 * @version 6.0
 */
class OrderCreateRequestLinesInner {
    /**
     * Constructs a new <code>OrderCreateRequestLinesInner</code>.
     * @alias module:model/OrderCreateRequestLinesInner
     */
    constructor() { 
        
        OrderCreateRequestLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateRequestLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestLinesInner} The populated <code>OrderCreateRequestLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateRequestLinesInner();

            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('endUserPrice')) {
                obj['endUserPrice'] = ApiClient.convertToType(data['endUserPrice'], 'Number');
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderCreateRequestLinesInnerAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('warrantyInfo')) {
                obj['warrantyInfo'] = ApiClient.convertToType(data['warrantyInfo'], [OrderCreateRequestLinesInnerWarrantyInfoInner]);
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = ApiClient.convertToType(data['endUserInfo'], [OrderCreateRequestLinesInnerEndUserInfoInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateRequestLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderCreateRequestLinesInnerAdditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['warrantyInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['warrantyInfo'])) {
                throw new Error("Expected the field `warrantyInfo` to be an array in the JSON data but got " + data['warrantyInfo']);
            }
            // validate the optional field `warrantyInfo` (array)
            for (const item of data['warrantyInfo']) {
                OrderCreateRequestLinesInnerWarrantyInfoInner.validateJSON(item);
            };
        }
        if (data['endUserInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['endUserInfo'])) {
                throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
            }
            // validate the optional field `endUserInfo` (array)
            for (const item of data['endUserInfo']) {
                OrderCreateRequestLinesInnerEndUserInfoInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's line item number for reference in their system. The customer line number needs to be a unique numeric value between 1 and 884. In the event we receive duplicate values or alphanumeric values in the customer line number, we will re-sequence the customer line number. To prevent re-sequencing, please use a unique numeric value between 1 and 884 in the customer line number.
 * @member {String} customerLineNumber
 */
OrderCreateRequestLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
OrderCreateRequestLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The requested quantity of the line item.
 * @member {Number} quantity
 */
OrderCreateRequestLinesInner.prototype['quantity'] = undefined;

/**
 * The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid number take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderCreateRequestLinesInner.prototype['specialBidNumber'] = undefined;

/**
 * Line-level notes.
 * @member {String} notes
 */
OrderCreateRequestLinesInner.prototype['notes'] = undefined;

/**
 * The reseller-requested unit price for the line item. The unit price is not guaranteed.
 * @member {Number} unitPrice
 */
OrderCreateRequestLinesInner.prototype['unitPrice'] = undefined;

/**
 * The end user price.
 * @member {Number} endUserPrice
 */
OrderCreateRequestLinesInner.prototype['endUserPrice'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateRequestLinesInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateRequestLinesInner.prototype['additionalAttributes'] = undefined;

/**
 * Warranty details for the line. This is required in case of warranty orders.
 * @member {Array.<module:model/OrderCreateRequestLinesInnerWarrantyInfoInner>} warrantyInfo
 */
OrderCreateRequestLinesInner.prototype['warrantyInfo'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateRequestLinesInnerEndUserInfoInner>} endUserInfo
 */
OrderCreateRequestLinesInner.prototype['endUserInfo'] = undefined;






export default OrderCreateRequestLinesInner;
