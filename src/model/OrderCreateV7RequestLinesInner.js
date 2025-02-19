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
import OrderCreateV7RequestLinesInnerAdditionalAttributesInner from './OrderCreateV7RequestLinesInnerAdditionalAttributesInner';
import OrderCreateV7RequestLinesInnerEndUserInfoInner from './OrderCreateV7RequestLinesInnerEndUserInfoInner';
import OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner from './OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner';

/**
 * The OrderCreateV7RequestLinesInner model module.
 * @module model/OrderCreateV7RequestLinesInner
 * @version 1.0.0
 */
class OrderCreateV7RequestLinesInner {
    /**
     * Constructs a new <code>OrderCreateV7RequestLinesInner</code>.
     * @alias module:model/OrderCreateV7RequestLinesInner
     */
    constructor() { 
        
        OrderCreateV7RequestLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateV7RequestLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateV7RequestLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateV7RequestLinesInner} The populated <code>OrderCreateV7RequestLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateV7RequestLinesInner();

            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('endUserPrice')) {
                obj['endUserPrice'] = ApiClient.convertToType(data['endUserPrice'], 'Number');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = ApiClient.convertToType(data['endUserInfo'], [OrderCreateV7RequestLinesInnerEndUserInfoInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderCreateV7RequestLinesInnerAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('vmfAdditionalAttributesLines')) {
                obj['vmfAdditionalAttributesLines'] = ApiClient.convertToType(data['vmfAdditionalAttributesLines'], [OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateV7RequestLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateV7RequestLinesInner</code>.
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
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        if (data['endUserInfo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['endUserInfo'])) {
                throw new Error("Expected the field `endUserInfo` to be an array in the JSON data but got " + data['endUserInfo']);
            }
            // validate the optional field `endUserInfo` (array)
            for (const item of data['endUserInfo']) {
                OrderCreateV7RequestLinesInnerEndUserInfoInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderCreateV7RequestLinesInnerAdditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['vmfAdditionalAttributesLines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vmfAdditionalAttributesLines'])) {
                throw new Error("Expected the field `vmfAdditionalAttributesLines` to be an array in the JSON data but got " + data['vmfAdditionalAttributesLines']);
            }
            // validate the optional field `vmfAdditionalAttributesLines` (array)
            for (const item of data['vmfAdditionalAttributesLines']) {
                OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's line item number for reference in their system. The customer line number needs to be a unique numeric value between 1 and 884. In the event we receive duplicate values or alphanumeric values in the customer line number, we will re-sequence the customer line number. To prevent re-sequencing, please use a unique numeric value between 1 and 884 in the customer line number.
 * @member {String} customerLineNumber
 */
OrderCreateV7RequestLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
OrderCreateV7RequestLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
OrderCreateV7RequestLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * The requested quantity of the line item.
 * @member {Number} quantity
 */
OrderCreateV7RequestLinesInner.prototype['quantity'] = undefined;

/**
 * The reseller-requested unit price for the line item. The unit price is not guaranteed.
 * @member {Number} unitPrice
 */
OrderCreateV7RequestLinesInner.prototype['unitPrice'] = undefined;

/**
 * The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid number take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderCreateV7RequestLinesInner.prototype['specialBidNumber'] = undefined;

/**
 * The end-user price. Required for Export Orders.
 * @member {Number} endUserPrice
 */
OrderCreateV7RequestLinesInner.prototype['endUserPrice'] = undefined;

/**
 * The attribute field data.
 * @member {String} notes
 */
OrderCreateV7RequestLinesInner.prototype['notes'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateV7RequestLinesInnerEndUserInfoInner>} endUserInfo
 */
OrderCreateV7RequestLinesInner.prototype['endUserInfo'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateV7RequestLinesInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateV7RequestLinesInner.prototype['additionalAttributes'] = undefined;

/**
 * @member {Array.<module:model/OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner>} vmfAdditionalAttributesLines
 */
OrderCreateV7RequestLinesInner.prototype['vmfAdditionalAttributesLines'] = undefined;






export default OrderCreateV7RequestLinesInner;

