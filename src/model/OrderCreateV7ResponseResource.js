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
import OrderCreateV7ResponseResourceOrdersInner from './OrderCreateV7ResponseResourceOrdersInner';
import OrderCreateV7ResponseResourceShipToInfo from './OrderCreateV7ResponseResourceShipToInfo';

/**
 * The OrderCreateV7ResponseResource model module.
 * @module model/OrderCreateV7ResponseResource
 * @version 1.0.0
 */
class OrderCreateV7ResponseResource {
    /**
     * Constructs a new <code>OrderCreateV7ResponseResource</code>.
     * @alias module:model/OrderCreateV7ResponseResource
     */
    constructor() { 
        
        OrderCreateV7ResponseResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateV7ResponseResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateV7ResponseResource} obj Optional instance to populate.
     * @return {module:model/OrderCreateV7ResponseResource} The populated <code>OrderCreateV7ResponseResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateV7ResponseResource();

            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('billToAddressId')) {
                obj['billToAddressId'] = ApiClient.convertToType(data['billToAddressId'], 'String');
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
                obj['shipToInfo'] = OrderCreateV7ResponseResourceShipToInfo.constructFromObject(data['shipToInfo']);
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [OrderCreateV7ResponseResourceOrdersInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateV7ResponseResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateV7ResponseResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['billToAddressId'] && !(typeof data['billToAddressId'] === 'string' || data['billToAddressId'] instanceof String)) {
            throw new Error("Expected the field `billToAddressId` to be a primitive type in the JSON string but got " + data['billToAddressId']);
        }
        // validate the optional field `shipToInfo`
        if (data['shipToInfo']) { // data not null
          OrderCreateV7ResponseResourceShipToInfo.validateJSON(data['shipToInfo']);
        }
        if (data['orders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orders'])) {
                throw new Error("Expected the field `orders` to be an array in the JSON data but got " + data['orders']);
            }
            // validate the optional field `orders` (array)
            for (const item of data['orders']) {
                OrderCreateV7ResponseResourceOrdersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The reseller's unique PO/Order number.
 * @member {String} customerOrderNumber
 */
OrderCreateV7ResponseResource.prototype['customerOrderNumber'] = undefined;

/**
 * Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit
 * @member {String} billToAddressId
 */
OrderCreateV7ResponseResource.prototype['billToAddressId'] = undefined;

/**
 * true for multiple orders
 * @member {Boolean} orderSplit
 */
OrderCreateV7ResponseResource.prototype['orderSplit'] = undefined;

/**
 * true for partial order succesfully placed
 * @member {Boolean} processedPartially
 */
OrderCreateV7ResponseResource.prototype['processedPartially'] = undefined;

/**
 * Total of all the orders including taxes and fees.
 * @member {Number} purchaseOrderTotal
 */
OrderCreateV7ResponseResource.prototype['purchaseOrderTotal'] = undefined;

/**
 * @member {module:model/OrderCreateV7ResponseResourceShipToInfo} shipToInfo
 */
OrderCreateV7ResponseResource.prototype['shipToInfo'] = undefined;

/**
 * Order-level details.
 * @member {Array.<module:model/OrderCreateV7ResponseResourceOrdersInner>} orders
 */
OrderCreateV7ResponseResource.prototype['orders'] = undefined;






export default OrderCreateV7ResponseResource;

