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
import OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery from './OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery';
import OrderDetailB2BLinesInnerEstimatedDatesInnerShip from './OrderDetailB2BLinesInnerEstimatedDatesInnerShip';

/**
 * The OrderDetailB2BLinesInnerEstimatedDatesInner model module.
 * @module model/OrderDetailB2BLinesInnerEstimatedDatesInner
 * @version 1.0.0
 */
class OrderDetailB2BLinesInnerEstimatedDatesInner {
    /**
     * Constructs a new <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
     * @alias module:model/OrderDetailB2BLinesInnerEstimatedDatesInner
     */
    constructor() { 
        
        OrderDetailB2BLinesInnerEstimatedDatesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2BLinesInnerEstimatedDatesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2BLinesInnerEstimatedDatesInner} The populated <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2BLinesInnerEstimatedDatesInner();

            if (data.hasOwnProperty('ship')) {
                obj['ship'] = OrderDetailB2BLinesInnerEstimatedDatesInnerShip.constructFromObject(data['ship']);
            }
            if (data.hasOwnProperty('delivery')) {
                obj['delivery'] = OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery.constructFromObject(data['delivery']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2BLinesInnerEstimatedDatesInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `ship`
        if (data['ship']) { // data not null
          OrderDetailB2BLinesInnerEstimatedDatesInnerShip.validateJSON(data['ship']);
        }
        // validate the optional field `delivery`
        if (data['delivery']) { // data not null
          OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery.validateJSON(data['delivery']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerShip} ship
 */
OrderDetailB2BLinesInnerEstimatedDatesInner.prototype['ship'] = undefined;

/**
 * @member {module:model/OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery} delivery
 */
OrderDetailB2BLinesInnerEstimatedDatesInner.prototype['delivery'] = undefined;






export default OrderDetailB2BLinesInnerEstimatedDatesInner;

