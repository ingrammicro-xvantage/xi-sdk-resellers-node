/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
import OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner from './OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner';

/**
 * The OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner model module.
 * @module model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner} The populated <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner();

            if (data.hasOwnProperty('trackingNumber')) {
                obj['trackingNumber'] = ApiClient.convertToType(data['trackingNumber'], 'String');
            }
            if (data.hasOwnProperty('trackingUrl')) {
                obj['trackingUrl'] = ApiClient.convertToType(data['trackingUrl'], 'String');
            }
            if (data.hasOwnProperty('packageWeight')) {
                obj['packageWeight'] = ApiClient.convertToType(data['packageWeight'], 'String');
            }
            if (data.hasOwnProperty('cartonNumber')) {
                obj['cartonNumber'] = ApiClient.convertToType(data['cartonNumber'], 'String');
            }
            if (data.hasOwnProperty('quantityInBox')) {
                obj['quantityInBox'] = ApiClient.convertToType(data['quantityInBox'], 'String');
            }
            if (data.hasOwnProperty('serialNumbers')) {
                obj['serialNumbers'] = ApiClient.convertToType(data['serialNumbers'], [OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['trackingNumber'] && !(typeof data['trackingNumber'] === 'string' || data['trackingNumber'] instanceof String)) {
            throw new Error("Expected the field `trackingNumber` to be a primitive type in the JSON string but got " + data['trackingNumber']);
        }
        // ensure the json data is a string
        if (data['trackingUrl'] && !(typeof data['trackingUrl'] === 'string' || data['trackingUrl'] instanceof String)) {
            throw new Error("Expected the field `trackingUrl` to be a primitive type in the JSON string but got " + data['trackingUrl']);
        }
        // ensure the json data is a string
        if (data['packageWeight'] && !(typeof data['packageWeight'] === 'string' || data['packageWeight'] instanceof String)) {
            throw new Error("Expected the field `packageWeight` to be a primitive type in the JSON string but got " + data['packageWeight']);
        }
        // ensure the json data is a string
        if (data['cartonNumber'] && !(typeof data['cartonNumber'] === 'string' || data['cartonNumber'] instanceof String)) {
            throw new Error("Expected the field `cartonNumber` to be a primitive type in the JSON string but got " + data['cartonNumber']);
        }
        // ensure the json data is a string
        if (data['quantityInBox'] && !(typeof data['quantityInBox'] === 'string' || data['quantityInBox'] instanceof String)) {
            throw new Error("Expected the field `quantityInBox` to be a primitive type in the JSON string but got " + data['quantityInBox']);
        }
        if (data['serialNumbers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serialNumbers'])) {
                throw new Error("Expected the field `serialNumbers` to be an array in the JSON data but got " + data['serialNumbers']);
            }
            // validate the optional field `serialNumbers` (array)
            for (const item of data['serialNumbers']) {
                OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The tracking number for the shipment containing the line item.
 * @member {String} trackingNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['trackingNumber'] = undefined;

/**
 * The tracking URL for the shipment containing the line item.
 * @member {String} trackingUrl
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['trackingUrl'] = undefined;

/**
 * The weight of the package for the line item.
 * @member {String} packageWeight
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['packageWeight'] = undefined;

/**
 * The shipment carton number that contains the line item.
 * @member {String} cartonNumber
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['cartonNumber'] = undefined;

/**
 * The quantity of line items in the box.
 * @member {String} quantityInBox
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['quantityInBox'] = undefined;

/**
 * A list of serial numbers of the line items contained in the shipment.
 * @member {Array.<module:model/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner>} serialNumbers
 */
OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.prototype['serialNumbers'] = undefined;






export default OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner;

