/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import OrderCreateResponseEndUserInfo from './OrderCreateResponseEndUserInfo';
import OrderCreateResponseOrdersInner from './OrderCreateResponseOrdersInner';
import OrderCreateResponseShipToInfo from './OrderCreateResponseShipToInfo';

/**
 * The OrderCreateResponse model module.
 * @module model/OrderCreateResponse
 * @version 1.0.0
 */
class OrderCreateResponse {
    /**
     * Constructs a new <code>OrderCreateResponse</code>.
     * @alias module:model/OrderCreateResponse
     */
    constructor() { 
        
        OrderCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponse} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponse} The populated <code>OrderCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponse();

            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('endCustomerOrderNumber')) {
                obj['endCustomerOrderNumber'] = ApiClient.convertToType(data['endCustomerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('billToAddressId')) {
                obj['billToAddressId'] = ApiClient.convertToType(data['billToAddressId'], 'String');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('orderSplit')) {
                obj['orderSplit'] = ApiClient.convertToType(data['orderSplit'], 'Boolean');
            }
            if (data.hasOwnProperty('processedPartially')) {
                obj['processedPartially'] = ApiClient.convertToType(data['processedPartially'], 'Boolean');
            }
            if (data.hasOwnProperty('purchaseOrderTotal')) {
                obj['purchaseOrderTotal'] = ApiClient.convertToType(data['purchaseOrderTotal'], 'Number');
            }
            if (data.hasOwnProperty('shipToInfo')) {
                obj['shipToInfo'] = OrderCreateResponseShipToInfo.constructFromObject(data['shipToInfo']);
            }
            if (data.hasOwnProperty('endUserInfo')) {
                obj['endUserInfo'] = OrderCreateResponseEndUserInfo.constructFromObject(data['endUserInfo']);
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [OrderCreateResponseOrdersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
            throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
        }
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        // validate the optional field `shipToInfo`
        if (data['shipToInfo']) { // data not null
          OrderCreateResponseShipToInfo.validateJSON(data['shipToInfo']);
        }
        // validate the optional field `endUserInfo`
        if (data['endUserInfo']) { // data not null
          OrderCreateResponseEndUserInfo.validateJSON(data['endUserInfo']);
        }
        if (data['orders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orders'])) {
                throw new Error("Expected the field `orders` to be an array in the JSON data but got " + data['orders']);
            }
            // validate the optional field `orders` (array)
            for (const item of data['orders']) {
                OrderCreateResponseOrdersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's unique PO/Order number.
 * @member {String} customerOrderNumber
 */
OrderCreateResponse.prototype['customerOrderNumber'] = undefined;

/**
 * The end user/customer's Purchase Order number.
 * @member {String} endCustomerOrderNumber
 */
OrderCreateResponse.prototype['endCustomerOrderNumber'] = undefined;

/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit
 * @member {String} billToAddressId
 */
OrderCreateResponse.prototype['billToAddressId'] = undefined;

/**
 * The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.
 * @member {String} specialBidNumber
 */
OrderCreateResponse.prototype['specialBidNumber'] = undefined;

/**
 * true for multiple orders
 * @member {Boolean} orderSplit
 */
OrderCreateResponse.prototype['orderSplit'] = undefined;

/**
 * true for partial order succesfully placed
 * @member {Boolean} processedPartially
 */
OrderCreateResponse.prototype['processedPartially'] = undefined;

/**
 * Total of all the orders including taxes and fees.
 * @member {Number} purchaseOrderTotal
 */
OrderCreateResponse.prototype['purchaseOrderTotal'] = undefined;

/**
 * @member {module:model/OrderCreateResponseShipToInfo} shipToInfo
 */
OrderCreateResponse.prototype['shipToInfo'] = undefined;

/**
 * @member {module:model/OrderCreateResponseEndUserInfo} endUserInfo
 */
OrderCreateResponse.prototype['endUserInfo'] = undefined;

/**
 * Order-level details.
 * @member {Array.<module:model/OrderCreateResponseOrdersInner>} orders
 */
OrderCreateResponse.prototype['orders'] = undefined;






export default OrderCreateResponse;

