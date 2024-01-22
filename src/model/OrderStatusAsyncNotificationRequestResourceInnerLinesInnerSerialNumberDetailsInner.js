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

/**
 * The OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner model module.
 * @module model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner
 * @version 6.0
 */
class OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner {
    /**
     * Constructs a new <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner</code>.
     * @alias module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner
     */
    constructor() { 
        
        OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner} obj Optional instance to populate.
     * @return {module:model/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner} The populated <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner();

            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['serialNumber'] && !(typeof data['serialNumber'] === 'string' || data['serialNumber'] instanceof String)) {
            throw new Error("Expected the field `serialNumber` to be a primitive type in the JSON string but got " + data['serialNumber']);
        }

        return true;
    }


}



/**
 * The serial number for the line item.                  
 * @member {String} serialNumber
 */
OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner.prototype['serialNumber'] = undefined;






export default OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner;

