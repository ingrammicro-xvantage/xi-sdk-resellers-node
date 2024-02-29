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
import OrderSearchResponseOrdersInnerLinks from './OrderSearchResponseOrdersInnerLinks';
import OrderSearchResponseOrdersInnerSubOrdersInner from './OrderSearchResponseOrdersInnerSubOrdersInner';

/**
 * The OrderSearchResponseOrdersInner model module.
 * @module model/OrderSearchResponseOrdersInner
 * @version 1.0.0
 */
class OrderSearchResponseOrdersInner {
    /**
     * Constructs a new <code>OrderSearchResponseOrdersInner</code>.
     * @alias module:model/OrderSearchResponseOrdersInner
     */
    constructor() { 
        
        OrderSearchResponseOrdersInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchResponseOrdersInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseOrdersInner} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseOrdersInner} The populated <code>OrderSearchResponseOrdersInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponseOrdersInner();

            if (data.hasOwnProperty('ingramOrderNumber')) {
                obj['ingramOrderNumber'] = ApiClient.convertToType(data['ingramOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderDate')) {
                obj['ingramOrderDate'] = ApiClient.convertToType(data['ingramOrderDate'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorSalesOrderNumber')) {
                obj['vendorSalesOrderNumber'] = ApiClient.convertToType(data['vendorSalesOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('endUserCompanyName')) {
                obj['endUserCompanyName'] = ApiClient.convertToType(data['endUserCompanyName'], 'String');
            }
            if (data.hasOwnProperty('orderTotal')) {
                obj['orderTotal'] = ApiClient.convertToType(data['orderTotal'], 'Number');
            }
            if (data.hasOwnProperty('orderStatus')) {
                obj['orderStatus'] = ApiClient.convertToType(data['orderStatus'], 'String');
            }
            if (data.hasOwnProperty('subOrders')) {
                obj['subOrders'] = ApiClient.convertToType(data['subOrders'], [OrderSearchResponseOrdersInnerSubOrdersInner]);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = OrderSearchResponseOrdersInnerLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseOrdersInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseOrdersInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramOrderDate'] && !(typeof data['ingramOrderDate'] === 'string' || data['ingramOrderDate'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderDate` to be a primitive type in the JSON string but got " + data['ingramOrderDate']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['vendorSalesOrderNumber'] && !(typeof data['vendorSalesOrderNumber'] === 'string' || data['vendorSalesOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorSalesOrderNumber` to be a primitive type in the JSON string but got " + data['vendorSalesOrderNumber']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['endUserCompanyName'] && !(typeof data['endUserCompanyName'] === 'string' || data['endUserCompanyName'] instanceof String)) {
            throw new Error("Expected the field `endUserCompanyName` to be a primitive type in the JSON string but got " + data['endUserCompanyName']);
        }
        // ensure the json data is a string
        if (data['orderStatus'] && !(typeof data['orderStatus'] === 'string' || data['orderStatus'] instanceof String)) {
            throw new Error("Expected the field `orderStatus` to be a primitive type in the JSON string but got " + data['orderStatus']);
        }
        if (data['subOrders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subOrders'])) {
                throw new Error("Expected the field `subOrders` to be an array in the JSON data but got " + data['subOrders']);
            }
            // validate the optional field `subOrders` (array)
            for (const item of data['subOrders']) {
                OrderSearchResponseOrdersInnerSubOrdersInner.validateJSON(item);
            };
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          OrderSearchResponseOrdersInnerLinks.validateJSON(data['links']);
        }

        return true;
    }


}



/**
 * The Ingram Micro order number.
 * @member {String} ingramOrderNumber
 */
OrderSearchResponseOrdersInner.prototype['ingramOrderNumber'] = undefined;

/**
 * The date the order was created(UTC).
 * @member {String} ingramOrderDate
 */
OrderSearchResponseOrdersInner.prototype['ingramOrderDate'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
OrderSearchResponseOrdersInner.prototype['customerOrderNumber'] = undefined;

/**
 * The vendor's order number.(only for D-Type Orders)
 * @member {String} vendorSalesOrderNumber
 */
OrderSearchResponseOrdersInner.prototype['vendorSalesOrderNumber'] = undefined;

/**
 * The name of the vendor.
 * @member {String} vendorName
 */
OrderSearchResponseOrdersInner.prototype['vendorName'] = undefined;

/**
 * The company name of the end user/customer.
 * @member {String} endUserCompanyName
 */
OrderSearchResponseOrdersInner.prototype['endUserCompanyName'] = undefined;

/**
 * The total of the order.
 * @member {Number} orderTotal
 */
OrderSearchResponseOrdersInner.prototype['orderTotal'] = undefined;

/**
 * The header-level status of the order.(OPEN/CLOSED/CANCELLED)
 * @member {String} orderStatus
 */
OrderSearchResponseOrdersInner.prototype['orderStatus'] = undefined;

/**
 * Individual Ingram Micro order numbers associated with a single reseller PO.
 * @member {Array.<module:model/OrderSearchResponseOrdersInnerSubOrdersInner>} subOrders
 */
OrderSearchResponseOrdersInner.prototype['subOrders'] = undefined;

/**
 * @member {module:model/OrderSearchResponseOrdersInnerLinks} links
 */
OrderSearchResponseOrdersInner.prototype['links'] = undefined;






export default OrderSearchResponseOrdersInner;

