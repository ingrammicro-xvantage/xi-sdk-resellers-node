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
import OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks from './OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks';
import OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner from './OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner';

/**
 * The OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner model module.
 * @module model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner
 * @version 6.0
 */
class OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner {
    /**
     * Constructs a new <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner</code>.
     * @alias module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner
     * @param ordernumber {String} Ingram micro sales order number
     * @param entrytimestamp {String} The order creation date-time in UTC format
     */
    constructor(ordernumber, entrytimestamp) { 
        
        OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.initialize(this, ordernumber, entrytimestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ordernumber, entrytimestamp) { 
        obj['ordernumber'] = ordernumber;
        obj['entrytimestamp'] = entrytimestamp;
    }

    /**
     * Constructs a <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner} The populated <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner();

            if (data.hasOwnProperty('ordernumber')) {
                obj['ordernumber'] = ApiClient.convertToType(data['ordernumber'], 'String');
            }
            if (data.hasOwnProperty('entrytimestamp')) {
                obj['entrytimestamp'] = ApiClient.convertToType(data['entrytimestamp'], 'String');
            }
            if (data.hasOwnProperty('customerordernumber')) {
                obj['customerordernumber'] = ApiClient.convertToType(data['customerordernumber'], 'String');
            }
            if (data.hasOwnProperty('suborders')) {
                obj['suborders'] = ApiClient.convertToType(data['suborders'], [OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ordernumber'] && !(typeof data['ordernumber'] === 'string' || data['ordernumber'] instanceof String)) {
            throw new Error("Expected the field `ordernumber` to be a primitive type in the JSON string but got " + data['ordernumber']);
        }
        // ensure the json data is a string
        if (data['entrytimestamp'] && !(typeof data['entrytimestamp'] === 'string' || data['entrytimestamp'] instanceof String)) {
            throw new Error("Expected the field `entrytimestamp` to be a primitive type in the JSON string but got " + data['entrytimestamp']);
        }
        // ensure the json data is a string
        if (data['customerordernumber'] && !(typeof data['customerordernumber'] === 'string' || data['customerordernumber'] instanceof String)) {
            throw new Error("Expected the field `customerordernumber` to be a primitive type in the JSON string but got " + data['customerordernumber']);
        }
        if (data['suborders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['suborders'])) {
                throw new Error("Expected the field `suborders` to be an array in the JSON data but got " + data['suborders']);
            }
            // validate the optional field `suborders` (array)
            for (const item of data['suborders']) {
                OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner.validateJSON(item);
            };
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks.validateJSON(data['links']);
        }

        return true;
    }


}

OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.RequiredProperties = ["ordernumber", "entrytimestamp"];

/**
 * Ingram micro sales order number
 * @member {String} ordernumber
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.prototype['ordernumber'] = undefined;

/**
 * The order creation date-time in UTC format
 * @member {String} entrytimestamp
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.prototype['entrytimestamp'] = undefined;

/**
 * PO/Order number submitted while creating the order
 * @member {String} customerordernumber
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.prototype['customerordernumber'] = undefined;

/**
 * An order MAY get divided into various sub orders, for example if the SKUs are being shipped from different warehouse.
 * @member {Array.<module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner>} suborders
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.prototype['suborders'] = undefined;

/**
 * @member {module:model/OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks} links
 */
OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner.prototype['links'] = undefined;






export default OrderSearchResponseServiceResponseOrdersearchresponseOrdersInner;

