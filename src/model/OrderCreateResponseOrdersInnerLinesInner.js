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
import OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner from './OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner';
import OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner from './OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner';

/**
 * The OrderCreateResponseOrdersInnerLinesInner model module.
 * @module model/OrderCreateResponseOrdersInnerLinesInner
 * @version 1.0.0
 */
class OrderCreateResponseOrdersInnerLinesInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInnerLinesInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInnerLinesInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInnerLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerLinesInner} The populated <code>OrderCreateResponseOrdersInnerLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInnerLinesInner();

            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramLineNumber')) {
                obj['ingramLineNumber'] = ApiClient.convertToType(data['ingramLineNumber'], 'String');
            }
            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('lineStatus')) {
                obj['lineStatus'] = ApiClient.convertToType(data['lineStatus'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('extendedUnitPrice')) {
                obj['extendedUnitPrice'] = ApiClient.convertToType(data['extendedUnitPrice'], 'Number');
            }
            if (data.hasOwnProperty('quantityOrdered')) {
                obj['quantityOrdered'] = ApiClient.convertToType(data['quantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('quantityConfirmed')) {
                obj['quantityConfirmed'] = ApiClient.convertToType(data['quantityConfirmed'], 'Number');
            }
            if (data.hasOwnProperty('quantityBackOrdered')) {
                obj['quantityBackOrdered'] = ApiClient.convertToType(data['quantityBackOrdered'], 'Number');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('shipmentDetails')) {
                obj['shipmentDetails'] = ApiClient.convertToType(data['shipmentDetails'], [OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
        }
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['lineStatus'] && !(typeof data['lineStatus'] === 'string' || data['lineStatus'] instanceof String)) {
            throw new Error("Expected the field `lineStatus` to be a primitive type in the JSON string but got " + data['lineStatus']);
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
        if (data['shipmentDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipmentDetails'])) {
                throw new Error("Expected the field `shipmentDetails` to be an array in the JSON data but got " + data['shipmentDetails']);
            }
            // validate the optional field `shipmentDetails` (array)
            for (const item of data['shipmentDetails']) {
                OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['subOrderNumber'] = undefined;

/**
 * The Ingram Micro line number for the product.
 * @member {String} ingramLineNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['ingramLineNumber'] = undefined;

/**
 * The reseller's line number for reference in their system.
 * @member {String} customerLineNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['customerLineNumber'] = undefined;

/**
 * The status for the line item in the order. One of: Backordered, Open
 * @member {String} lineStatus
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['lineStatus'] = undefined;

/**
 * The Ingram Micro part number for the line item.
 * @member {String} ingramPartNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor part number for the line item.
 * @member {String} vendorPartNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * The unit price for the line item.
 * @member {Number} unitPrice
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['unitPrice'] = undefined;

/**
 * The extended list price (unit price X quantity) for the line item.
 * @member {Number} extendedUnitPrice
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['extendedUnitPrice'] = undefined;

/**
 * The quantity of the line item ordered.
 * @member {Number} quantityOrdered
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['quantityOrdered'] = undefined;

/**
 * The quantity of the line item that has been confirmed.
 * @member {Number} quantityConfirmed
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['quantityConfirmed'] = undefined;

/**
 * The quantity of the line item that is backordered.
 * @member {Number} quantityBackOrdered
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['quantityBackOrdered'] = undefined;

/**
 * The bid number for the line item provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['specialBidNumber'] = undefined;

/**
 * Line-level notes.
 * @member {String} notes
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['notes'] = undefined;

/**
 * The shipment details for the line item.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner>} shipmentDetails
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['shipmentDetails'] = undefined;

/**
 * SAP requested and country-specific line level details.
 * @member {Array.<module:model/OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner>} additionalAttributes
 */
OrderCreateResponseOrdersInnerLinesInner.prototype['additionalAttributes'] = undefined;






export default OrderCreateResponseOrdersInnerLinesInner;

