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
import OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner from './OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner';

/**
 * The OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner model module.
 * @module model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner
 * @version 6.0
 */
class OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner} The populated <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner();

            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('carrierName')) {
                obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('shippedDate')) {
                obj['shippedDate'] = ApiClient.convertToType(data['shippedDate'], 'String');
            }
            if (data.hasOwnProperty('estimatedDeliveryDate')) {
                obj['estimatedDeliveryDate'] = ApiClient.convertToType(data['estimatedDeliveryDate'], 'String');
            }
            if (data.hasOwnProperty('deliveredDate')) {
                obj['deliveredDate'] = ApiClient.convertToType(data['deliveredDate'], 'String');
            }
            if (data.hasOwnProperty('carrierPickupDate')) {
                obj['carrierPickupDate'] = ApiClient.convertToType(data['carrierPickupDate'], 'String');
            }
            if (data.hasOwnProperty('trackingDetails')) {
                obj['trackingDetails'] = ApiClient.convertToType(data['trackingDetails'], [OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner</code>.
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
        if (data['shippedDate'] && !(typeof data['shippedDate'] === 'string' || data['shippedDate'] instanceof String)) {
            throw new Error("Expected the field `shippedDate` to be a primitive type in the JSON string but got " + data['shippedDate']);
        }
        // ensure the json data is a string
        if (data['estimatedDeliveryDate'] && !(typeof data['estimatedDeliveryDate'] === 'string' || data['estimatedDeliveryDate'] instanceof String)) {
            throw new Error("Expected the field `estimatedDeliveryDate` to be a primitive type in the JSON string but got " + data['estimatedDeliveryDate']);
        }
        // ensure the json data is a string
        if (data['deliveredDate'] && !(typeof data['deliveredDate'] === 'string' || data['deliveredDate'] instanceof String)) {
            throw new Error("Expected the field `deliveredDate` to be a primitive type in the JSON string but got " + data['deliveredDate']);
        }
        // ensure the json data is a string
        if (data['carrierPickupDate'] && !(typeof data['carrierPickupDate'] === 'string' || data['carrierPickupDate'] instanceof String)) {
            throw new Error("Expected the field `carrierPickupDate` to be a primitive type in the JSON string but got " + data['carrierPickupDate']);
        }
        if (data['trackingDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['trackingDetails'])) {
                throw new Error("Expected the field `trackingDetails` to be an array in the JSON data but got " + data['trackingDetails']);
            }
            // validate the optional field `trackingDetails` (array)
            for (const item of data['trackingDetails']) {
                OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The carrier code for the shipment containing the line item.
 * @member {String} carrierCode
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['carrierCode'] = undefined;

/**
 * The name of the carrier of the shipment containing the line item.
 * @member {String} carrierName
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['carrierName'] = undefined;

/**
 * The quantity shipped of the line item.
 * @member {Number} quantity
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['quantity'] = undefined;

/**
 * The actual date when line item shipped.
 * @member {String} shippedDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['shippedDate'] = undefined;

/**
 * The date the line item is expected to be delivered.
 * @member {String} estimatedDeliveryDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['estimatedDeliveryDate'] = undefined;

/**
 * The actual date of delivery of the line item.
 * @member {String} deliveredDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['deliveredDate'] = undefined;

/**
 * The actual date when carrier picked up line item.
 * @member {String} carrierPickupDate
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['carrierPickupDate'] = undefined;

/**
 * The tracking details for the shipment containing the line item.
 * @member {Array.<module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner>} trackingDetails
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.prototype['trackingDetails'] = undefined;






export default OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner;

