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
import OrderDetailB2BAdditionalAttributesInner from './OrderDetailB2BAdditionalAttributesInner';
import OrderDetailB2BBillToInfo from './OrderDetailB2BBillToInfo';
import OrderDetailB2BEndUserInfo from './OrderDetailB2BEndUserInfo';
import OrderDetailB2BLinesInner from './OrderDetailB2BLinesInner';
import OrderDetailB2BMiscellaneousChargesInner from './OrderDetailB2BMiscellaneousChargesInner';
import OrderDetailB2BShipToInfo from './OrderDetailB2BShipToInfo';

/**
 * The OrderDetailB2B model module.
 * @module model/OrderDetailB2B
 * @version 1.0.0
 */
class OrderDetailB2B {
    /**
     * Constructs a new <code>OrderDetailB2B</code>.
     * @alias module:model/OrderDetailB2B
     */
    constructor() { 
        
        OrderDetailB2B.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailB2B</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailB2B} obj Optional instance to populate.
     * @return {module:model/OrderDetailB2B} The populated <code>OrderDetailB2B</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailB2B();

            if (data.hasOwnProperty('ingramOrderNumber')) {
                obj['ingramOrderNumber'] = ApiClient.convertToType(data['ingramOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderDate')) {
                obj['ingramOrderDate'] = ApiClient.convertToType(data['ingramOrderDate'], 'String');
            }
            if (data.hasOwnProperty('orderType')) {
                obj['orderType'] = ApiClient.convertToType(data['orderType'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('endCustomerOrderNumber')) {
                obj['endCustomerOrderNumber'] = ApiClient.convertToType(data['endCustomerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('webOrderId')) {
                obj['webOrderId'] = ApiClient.convertToType(data['webOrderId'], 'String');
            }
            if (data.hasOwnProperty('vendorSalesOrderNumber')) {
                obj['vendorSalesOrderNumber'] = ApiClient.convertToType(data['vendorSalesOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPurchaseOrderNumber')) {
                obj['ingramPurchaseOrderNumber'] = ApiClient.convertToType(data['ingramPurchaseOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('orderStatus')) {
                obj['orderStatus'] = ApiClient.convertToType(data['orderStatus'], 'String');
            }
            if (data.hasOwnProperty('orderTotal')) {
                obj['orderTotal'] = ApiClient.convertToType(data['orderTotal'], 'Number');
            }
            if (data.hasOwnProperty('orderSubTotal')) {
                obj['orderSubTotal'] = ApiClient.convertToType(data['orderSubTotal'], 'Number');
            }
            if (data.hasOwnProperty('freightCharges')) {
                obj['freightCharges'] = ApiClient.convertToType(data['freightCharges'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('totalWeight')) {
                obj['totalWeight'] = ApiClient.convertToType(data['totalWeight'], 'Number');
            }
            if (data.hasOwnProperty('totalTax')) {
                obj['totalTax'] = ApiClient.convertToType(data['totalTax'], 'Number');
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = ApiClient.convertToType(data['totalFees'], 'Number');
            }
            if (data.hasOwnProperty('paymentTerms')) {
                obj['paymentTerms'] = ApiClient.convertToType(data['paymentTerms'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('billToInfo')) {
                obj['billToInfo'] = OrderDetailB2BBillToInfo.constructFromObject(data['billToInfo']);
            }
            if (data.hasOwnProperty('shipToInfo')) {
                obj['shipToInfo'] = OrderDetailB2BShipToInfo.constructFromObject(data['shipToInfo']);
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = OrderDetailB2BEndUserInfo.constructFromObject(data['endUserInfo']);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [OrderDetailB2BLinesInner]);
            }
            if (data.hasOwnProperty('miscellaneousCharges')) {
                obj['miscellaneousCharges'] = ApiClient.convertToType(data['miscellaneousCharges'], [OrderDetailB2BMiscellaneousChargesInner]);
            }
            if (data.hasOwnProperty('additionalAttributes')) {
                obj['additionalAttributes'] = ApiClient.convertToType(data['additionalAttributes'], [OrderDetailB2BAdditionalAttributesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailB2B</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailB2B</code>.
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
        if (data['orderType'] && !(typeof data['orderType'] === 'string' || data['orderType'] instanceof String)) {
            throw new Error("Expected the field `orderType` to be a primitive type in the JSON string but got " + data['orderType']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['webOrderId'] && !(typeof data['webOrderId'] === 'string' || data['webOrderId'] instanceof String)) {
            throw new Error("Expected the field `webOrderId` to be a primitive type in the JSON string but got " + data['webOrderId']);
        }
        // ensure the json data is a string
        if (data['vendorSalesOrderNumber'] && !(typeof data['vendorSalesOrderNumber'] === 'string' || data['vendorSalesOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorSalesOrderNumber` to be a primitive type in the JSON string but got " + data['vendorSalesOrderNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPurchaseOrderNumber'] && !(typeof data['ingramPurchaseOrderNumber'] === 'string' || data['ingramPurchaseOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPurchaseOrderNumber` to be a primitive type in the JSON string but got " + data['ingramPurchaseOrderNumber']);
        }
        // ensure the json data is a string
        if (data['orderStatus'] && !(typeof data['orderStatus'] === 'string' || data['orderStatus'] instanceof String)) {
            throw new Error("Expected the field `orderStatus` to be a primitive type in the JSON string but got " + data['orderStatus']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['paymentTerms'] && !(typeof data['paymentTerms'] === 'string' || data['paymentTerms'] instanceof String)) {
            throw new Error("Expected the field `paymentTerms` to be a primitive type in the JSON string but got " + data['paymentTerms']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // validate the optional field `billToInfo`
        if (data['billToInfo']) { // data not null
          OrderDetailB2BBillToInfo.validateJSON(data['billToInfo']);
        }
        // validate the optional field `shipToInfo`
        if (data['shipToInfo']) { // data not null
          OrderDetailB2BShipToInfo.validateJSON(data['shipToInfo']);
        }
        // validate the optional field `endUserInfo`
        if (data['endUserInfo']) { // data not null
          OrderDetailB2BEndUserInfo.validateJSON(data['endUserInfo']);
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                OrderDetailB2BLinesInner.validateJSON(item);
            };
        }
        if (data['miscellaneousCharges']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['miscellaneousCharges'])) {
                throw new Error("Expected the field `miscellaneousCharges` to be an array in the JSON data but got " + data['miscellaneousCharges']);
            }
            // validate the optional field `miscellaneousCharges` (array)
            for (const item of data['miscellaneousCharges']) {
                OrderDetailB2BMiscellaneousChargesInner.validateJSON(item);
            };
        }
        if (data['additionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['additionalAttributes'])) {
                throw new Error("Expected the field `additionalAttributes` to be an array in the JSON data but got " + data['additionalAttributes']);
            }
            // validate the optional field `additionalAttributes` (array)
            for (const item of data['additionalAttributes']) {
                OrderDetailB2BAdditionalAttributesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The IngramMicro sales order number.
 * @member {String} ingramOrderNumber
 */
OrderDetailB2B.prototype['ingramOrderNumber'] = undefined;

/**
 * The IngramMicro sales order date.
 * @member {String} ingramOrderDate
 */
OrderDetailB2B.prototype['ingramOrderDate'] = undefined;

/**
 * The IngramMicro sales order type.
 * @member {String} orderType
 */
OrderDetailB2B.prototype['orderType'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
OrderDetailB2B.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} endCustomerOrderNumber
 */
OrderDetailB2B.prototype['endCustomerOrderNumber'] = undefined;

/**
 * The web order id of the order.
 * @member {String} webOrderId
 */
OrderDetailB2B.prototype['webOrderId'] = undefined;

/**
 * The vendor's order number for reference in their system
 * @member {String} vendorSalesOrderNumber
 */
OrderDetailB2B.prototype['vendorSalesOrderNumber'] = undefined;

/**
 * Ingram purchase order number.
 * @member {String} ingramPurchaseOrderNumber
 */
OrderDetailB2B.prototype['ingramPurchaseOrderNumber'] = undefined;

/**
 * The header-level status of the order. One of- Shipped, Canceled, Backordered, Processing, On Hold, Delivered.
 * @member {String} orderStatus
 */
OrderDetailB2B.prototype['orderStatus'] = undefined;

/**
 * The total cost for the order, includes subtotal, freight charges, and tax.
 * @member {Number} orderTotal
 */
OrderDetailB2B.prototype['orderTotal'] = undefined;

/**
 * The sub total cost for the order, not including tax and freight.
 * @member {Number} orderSubTotal
 */
OrderDetailB2B.prototype['orderSubTotal'] = undefined;

/**
 * The freight charges for the order.
 * @member {Number} freightCharges
 */
OrderDetailB2B.prototype['freightCharges'] = undefined;

/**
 * The country-specific three digit ISO 4217 currency code for the order.
 * @member {String} currencyCode
 */
OrderDetailB2B.prototype['currencyCode'] = undefined;

/**
 * Total order weight. unit -- North america - Pounds , other countries will be KG.
 * @member {Number} totalWeight
 */
OrderDetailB2B.prototype['totalWeight'] = undefined;

/**
 * Total tax on the orders placed.
 * @member {Number} totalTax
 */
OrderDetailB2B.prototype['totalTax'] = undefined;

/**
 * Total fees on the orders placed.
 * @member {Number} totalFees
 */
OrderDetailB2B.prototype['totalFees'] = undefined;

/**
 * The payment terms of the order. (Ex- Net 30 days).
 * @member {String} paymentTerms
 */
OrderDetailB2B.prototype['paymentTerms'] = undefined;

/**
 * The header-level notes for the order.
 * @member {String} notes
 */
OrderDetailB2B.prototype['notes'] = undefined;

/**
 * @member {module:model/OrderDetailB2BBillToInfo} billToInfo
 */
OrderDetailB2B.prototype['billToInfo'] = undefined;

/**
 * @member {module:model/OrderDetailB2BShipToInfo} shipToInfo
 */
OrderDetailB2B.prototype['shipToInfo'] = undefined;

/**
 * @member {module:model/OrderDetailB2BEndUserInfo} endUserInfo
 */
OrderDetailB2B.prototype['endUserInfo'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BLinesInner>} lines
 */
OrderDetailB2B.prototype['lines'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BMiscellaneousChargesInner>} miscellaneousCharges
 */
OrderDetailB2B.prototype['miscellaneousCharges'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailB2BAdditionalAttributesInner>} additionalAttributes
 */
OrderDetailB2B.prototype['additionalAttributes'] = undefined;






export default OrderDetailB2B;

