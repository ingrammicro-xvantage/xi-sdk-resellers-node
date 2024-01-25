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
import OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetails from './OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetails';

/**
 * The OrderDetailResponseLinesInnerShipmentDetailsInner model module.
 * @module model/OrderDetailResponseLinesInnerShipmentDetailsInner
 * @version 6.0
 */
class OrderDetailResponseLinesInnerShipmentDetailsInner {
    /**
     * Constructs a new <code>OrderDetailResponseLinesInnerShipmentDetailsInner</code>.
     * Shipping details for the line item.
     * @alias module:model/OrderDetailResponseLinesInnerShipmentDetailsInner
     */
    constructor() { 
        
        OrderDetailResponseLinesInnerShipmentDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseLinesInnerShipmentDetailsInner} The populated <code>OrderDetailResponseLinesInnerShipmentDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseLinesInnerShipmentDetailsInner();

            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('estimatedShipDate')) {
                obj['estimatedShipDate'] = ApiClient.convertToType(data['estimatedShipDate'], 'Date');
            }
            if (data.hasOwnProperty('shippedDate')) {
                obj['shippedDate'] = ApiClient.convertToType(data['shippedDate'], 'Date');
            }
            if (data.hasOwnProperty('estimatedDeliveryDate')) {
                obj['estimatedDeliveryDate'] = ApiClient.convertToType(data['estimatedDeliveryDate'], 'Date');
            }
            if (data.hasOwnProperty('deliveredDate')) {
                obj['deliveredDate'] = ApiClient.convertToType(data['deliveredDate'], 'Date');
            }
            if (data.hasOwnProperty('shipFromWarehouseId')) {
                obj['shipFromWarehouseId'] = ApiClient.convertToType(data['shipFromWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('shipFromLocation')) {
                obj['shipFromLocation'] = ApiClient.convertToType(data['shipFromLocation'], 'String');
            }
            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
            }
            if (data.hasOwnProperty('carrierDetails')) {
                obj['carrierDetails'] = OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetails.constructFromObject(data['carrierDetails']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseLinesInnerShipmentDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
        }
        // ensure the json data is a string
        if (data['shipFromLocation'] && !(typeof data['shipFromLocation'] === 'string' || data['shipFromLocation'] instanceof String)) {
            throw new Error("Expected the field `shipFromLocation` to be a primitive type in the JSON string but got " + data['shipFromLocation']);
        }
        // ensure the json data is a string
        if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
            throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
        }
        // validate the optional field `carrierDetails`
        if (data['carrierDetails']) { // data not null
          OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetails.validateJSON(data['carrierDetails']);
        }

        return true;
    }


}



/**
 * The quantity shipped of the line item.
 * @member {Number} quantity
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['quantity'] = undefined;

/**
 * The estimated ship date for the line item.
 * @member {Date} estimatedShipDate
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['estimatedShipDate'] = undefined;

/**
 * The date the line item was shipped.
 * @member {Date} shippedDate
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['shippedDate'] = undefined;

/**
 * The date the line item is expected to be delivered.
 * @member {Date} estimatedDeliveryDate
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['estimatedDeliveryDate'] = undefined;

/**
 * The actual date of delivery of the line item.
 * @member {Date} deliveredDate
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['deliveredDate'] = undefined;

/**
 * The ID of the warehouse the product will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * The city and state the line item ships from.
 * @member {String} shipFromLocation
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['shipFromLocation'] = undefined;

/**
 * The Ingram Micro invoice number for the line item.
 * @member {String} invoiceNumber
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['invoiceNumber'] = undefined;

/**
 * The date the IngramMicro invoice was created for the line item.
 * @member {Date} invoiceDate
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['invoiceDate'] = undefined;

/**
 * @member {module:model/OrderDetailResponseLinesInnerShipmentDetailsInnerCarrierDetails} carrierDetails
 */
OrderDetailResponseLinesInnerShipmentDetailsInner.prototype['carrierDetails'] = undefined;






export default OrderDetailResponseLinesInnerShipmentDetailsInner;

