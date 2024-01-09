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
 * The OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner model module.
 * @module model/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner
 * @version 6.0
 */
class OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner} The populated <code>OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner();

            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('carrierName')) {
                obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
            }
            if (data.hasOwnProperty('shipFromWarehouseId')) {
                obj['shipFromWarehouseId'] = ApiClient.convertToType(data['shipFromWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('shipFromLocation')) {
                obj['shipFromLocation'] = ApiClient.convertToType(data['shipFromLocation'], 'String');
            }
            if (data.hasOwnProperty('freightAccountNumber')) {
                obj['freightAccountNumber'] = ApiClient.convertToType(data['freightAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('signatureRequired')) {
                obj['signatureRequired'] = ApiClient.convertToType(data['signatureRequired'], 'String');
            }
            if (data.hasOwnProperty('shippingInstructions')) {
                obj['shippingInstructions'] = ApiClient.convertToType(data['shippingInstructions'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }
        // ensure the json data is a string
        if (data['carrierName'] && !(typeof data['carrierName'] === 'string' || data['carrierName'] instanceof String)) {
            throw new Error("Expected the field `carrierName` to be a primitive type in the JSON string but got " + data['carrierName']);
        }
        // ensure the json data is a string
        if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
        }
        // ensure the json data is a string
        if (data['shipFromLocation'] && !(typeof data['shipFromLocation'] === 'string' || data['shipFromLocation'] instanceof String)) {
            throw new Error("Expected the field `shipFromLocation` to be a primitive type in the JSON string but got " + data['shipFromLocation']);
        }
        // ensure the json data is a string
        if (data['freightAccountNumber'] && !(typeof data['freightAccountNumber'] === 'string' || data['freightAccountNumber'] instanceof String)) {
            throw new Error("Expected the field `freightAccountNumber` to be a primitive type in the JSON string but got " + data['freightAccountNumber']);
        }
        // ensure the json data is a string
        if (data['signatureRequired'] && !(typeof data['signatureRequired'] === 'string' || data['signatureRequired'] instanceof String)) {
            throw new Error("Expected the field `signatureRequired` to be a primitive type in the JSON string but got " + data['signatureRequired']);
        }
        // ensure the json data is a string
        if (data['shippingInstructions'] && !(typeof data['shippingInstructions'] === 'string' || data['shippingInstructions'] instanceof String)) {
            throw new Error("Expected the field `shippingInstructions` to be a primitive type in the JSON string but got " + data['shippingInstructions']);
        }

        return true;
    }


}



/**
 * The code for the shipping carrier for the line item.
 * @member {String} carrierCode
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['carrierCode'] = undefined;

/**
 * The name of the shipping carrier for the line item.
 * @member {String} carrierName
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['carrierName'] = undefined;

/**
 * The ID of the warehouse the line item will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * Location from which order is shipped.
 * @member {String} shipFromLocation
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['shipFromLocation'] = undefined;

/**
 * The reseller's shipping account number with carrier. Used to bill the shipping carrier directly from the reseller's account with the carrier.
 * @member {String} freightAccountNumber
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['freightAccountNumber'] = undefined;

/**
 * Specifies whether a signature is required for delivery. Default is False.
 * @member {String} signatureRequired
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['signatureRequired'] = undefined;

/**
 * The shipping instructions for the order.
 * @member {String} shippingInstructions
 */
OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.prototype['shippingInstructions'] = undefined;






export default OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner;

