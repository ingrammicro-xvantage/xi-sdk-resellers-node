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
import OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner from './OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner';

/**
 * The OrderSearchResponseOrdersInnerSubOrdersInner model module.
 * @module model/OrderSearchResponseOrdersInnerSubOrdersInner
 * @version 1.0.0
 */
class OrderSearchResponseOrdersInnerSubOrdersInner {
    /**
     * Constructs a new <code>OrderSearchResponseOrdersInnerSubOrdersInner</code>.
     * @alias module:model/OrderSearchResponseOrdersInnerSubOrdersInner
     */
    constructor() { 
        
        OrderSearchResponseOrdersInnerSubOrdersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchResponseOrdersInnerSubOrdersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseOrdersInnerSubOrdersInner} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseOrdersInnerSubOrdersInner} The populated <code>OrderSearchResponseOrdersInnerSubOrdersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponseOrdersInnerSubOrdersInner();

            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('subOrderTotal')) {
                obj['subOrderTotal'] = ApiClient.convertToType(data['subOrderTotal'], 'Number');
            }
            if (data.hasOwnProperty('subOrderStatus')) {
                obj['subOrderStatus'] = ApiClient.convertToType(data['subOrderStatus'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseOrdersInnerSubOrdersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseOrdersInnerSubOrdersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
        }
        // ensure the json data is a string
        if (data['subOrderStatus'] && !(typeof data['subOrderStatus'] === 'string' || data['subOrderStatus'] instanceof String)) {
            throw new Error("Expected the field `subOrderStatus` to be a primitive type in the JSON string but got " + data['subOrderStatus']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest to the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderSearchResponseOrdersInnerSubOrdersInner.prototype['subOrderNumber'] = undefined;

/**
 * The total for the suborder.
 * @member {Number} subOrderTotal
 */
OrderSearchResponseOrdersInnerSubOrdersInner.prototype['subOrderTotal'] = undefined;

/**
 * The status of the suborder. One of:- Shipped, Canceled, Backordered, Processing, On Hold, Delivered
 * @member {String} subOrderStatus
 */
OrderSearchResponseOrdersInnerSubOrdersInner.prototype['subOrderStatus'] = undefined;

/**
 * Link to Order Details for the sub order(s).
 * @member {Array.<module:model/OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner>} links
 */
OrderSearchResponseOrdersInnerSubOrdersInner.prototype['links'] = undefined;






export default OrderSearchResponseOrdersInnerSubOrdersInner;

