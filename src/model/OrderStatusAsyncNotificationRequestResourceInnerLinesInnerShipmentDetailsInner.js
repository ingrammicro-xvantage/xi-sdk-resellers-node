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
import OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner from './OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner';

/**
 * The OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner model module.
 * @module model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner
 * @version 6.0
 */
class OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner {
    /**
     * Constructs a new <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner</code>.
     * @alias module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner
     */
    constructor() { 
        
        OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner} The populated <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner();

            if (data.hasOwnProperty('shipmentDate')) {
                obj['shipmentDate'] = ApiClient.convertToType(data['shipmentDate'], 'String');
            }
            if (data.hasOwnProperty('shipFromWarehouseId')) {
                obj['shipFromWarehouseId'] = ApiClient.convertToType(data['shipFromWarehouseId'], 'String');
            }
            if (data.hasOwnProperty('warehouseName')) {
                obj['warehouseName'] = ApiClient.convertToType(data['warehouseName'], 'String');
            }
            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('carrierName')) {
                obj['carrierName'] = ApiClient.convertToType(data['carrierName'], 'String');
            }
            if (data.hasOwnProperty('packageDetails')) {
                obj['packageDetails'] = ApiClient.convertToType(data['packageDetails'], [OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['shipmentDate'] && !(typeof data['shipmentDate'] === 'string' || data['shipmentDate'] instanceof String)) {
            throw new Error("Expected the field `shipmentDate` to be a primitive type in the JSON string but got " + data['shipmentDate']);
        }
        // ensure the json data is a string
        if (data['shipFromWarehouseId'] && !(typeof data['shipFromWarehouseId'] === 'string' || data['shipFromWarehouseId'] instanceof String)) {
            throw new Error("Expected the field `shipFromWarehouseId` to be a primitive type in the JSON string but got " + data['shipFromWarehouseId']);
        }
        // ensure the json data is a string
        if (data['warehouseName'] && !(typeof data['warehouseName'] === 'string' || data['warehouseName'] instanceof String)) {
            throw new Error("Expected the field `warehouseName` to be a primitive type in the JSON string but got " + data['warehouseName']);
        }
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }
        // ensure the json data is a string
        if (data['carrierName'] && !(typeof data['carrierName'] === 'string' || data['carrierName'] instanceof String)) {
            throw new Error("Expected the field `carrierName` to be a primitive type in the JSON string but got " + data['carrierName']);
        }
        if (data['packageDetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['packageDetails'])) {
                throw new Error("Expected the field `packageDetails` to be an array in the JSON data but got " + data['packageDetails']);
            }
            // validate the optional field `packageDetails` (array)
            for (const item of data['packageDetails']) {
                OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The date the line item was shipped.
 * @member {String} shipmentDate
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['shipmentDate'] = undefined;

/**
 * The ID of the warehouse the product will ship from.
 * @member {String} shipFromWarehouseId
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['shipFromWarehouseId'] = undefined;

/**
 * \"\"
 * @member {String} warehouseName
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['warehouseName'] = undefined;

/**
 * The carrier code for the shipment containing the  line item.
 * @member {String} carrierCode
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['carrierCode'] = undefined;

/**
 * The name of the carrier of the shipment containing   the line item.
 * @member {String} carrierName
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['carrierName'] = undefined;

/**
 * @member {Array.<module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner>} packageDetails
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.prototype['packageDetails'] = undefined;






export default OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner;

