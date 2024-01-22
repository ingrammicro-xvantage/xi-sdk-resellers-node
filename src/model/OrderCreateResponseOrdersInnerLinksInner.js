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

/**
 * The OrderCreateResponseOrdersInnerLinksInner model module.
 * @module model/OrderCreateResponseOrdersInnerLinksInner
 * @version 6.0
 */
class OrderCreateResponseOrdersInnerLinksInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInnerLinksInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInnerLinksInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInnerLinksInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerLinksInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerLinksInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerLinksInner} The populated <code>OrderCreateResponseOrdersInnerLinksInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInnerLinksInner();

            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerLinksInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerLinksInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['topic'] && !(typeof data['topic'] === 'string' || data['topic'] instanceof String)) {
            throw new Error("Expected the field `topic` to be a primitive type in the JSON string but got " + data['topic']);
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Provides the details of the orders.
 * @member {String} topic
 */
OrderCreateResponseOrdersInnerLinksInner.prototype['topic'] = undefined;

/**
 * The URL endpoint for accessing the relevant data.
 * @member {String} href
 */
OrderCreateResponseOrdersInnerLinksInner.prototype['href'] = undefined;

/**
 * The type of call that can be made to the href link (GET, POST, Etc.).
 * @member {String} type
 */
OrderCreateResponseOrdersInnerLinksInner.prototype['type'] = undefined;






export default OrderCreateResponseOrdersInnerLinksInner;

