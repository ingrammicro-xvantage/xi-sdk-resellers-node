/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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

/**
 * The OrderSearchResponseServiceResponseResponsepreamble model module.
 * @module model/OrderSearchResponseServiceResponseResponsepreamble
 * @version 1.0.0
 */
class OrderSearchResponseServiceResponseResponsepreamble {
    /**
     * Constructs a new <code>OrderSearchResponseServiceResponseResponsepreamble</code>.
     * @alias module:model/OrderSearchResponseServiceResponseResponsepreamble
     * @param requeststatus {String} 
     * @param returnmessage {String} 
     */
    constructor(requeststatus, returnmessage) { 
        
        OrderSearchResponseServiceResponseResponsepreamble.initialize(this, requeststatus, returnmessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requeststatus, returnmessage) { 
        obj['requeststatus'] = requeststatus;
        obj['returnmessage'] = returnmessage;
    }

    /**
     * Constructs a <code>OrderSearchResponseServiceResponseResponsepreamble</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchResponseServiceResponseResponsepreamble} obj Optional instance to populate.
     * @return {module:model/OrderSearchResponseServiceResponseResponsepreamble} The populated <code>OrderSearchResponseServiceResponseResponsepreamble</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchResponseServiceResponseResponsepreamble();

            if (data.hasOwnProperty('requeststatus')) {
                obj['requeststatus'] = ApiClient.convertToType(data['requeststatus'], 'String');
            }
            if (data.hasOwnProperty('returnmessage')) {
                obj['returnmessage'] = ApiClient.convertToType(data['returnmessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchResponseServiceResponseResponsepreamble</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchResponseServiceResponseResponsepreamble</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderSearchResponseServiceResponseResponsepreamble.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['requeststatus'] && !(typeof data['requeststatus'] === 'string' || data['requeststatus'] instanceof String)) {
            throw new Error("Expected the field `requeststatus` to be a primitive type in the JSON string but got " + data['requeststatus']);
        }
        // ensure the json data is a string
        if (data['returnmessage'] && !(typeof data['returnmessage'] === 'string' || data['returnmessage'] instanceof String)) {
            throw new Error("Expected the field `returnmessage` to be a primitive type in the JSON string but got " + data['returnmessage']);
        }

        return true;
    }


}

OrderSearchResponseServiceResponseResponsepreamble.RequiredProperties = ["requeststatus", "returnmessage"];

/**
 * @member {String} requeststatus
 */
OrderSearchResponseServiceResponseResponsepreamble.prototype['requeststatus'] = undefined;

/**
 * @member {String} returnmessage
 */
OrderSearchResponseServiceResponseResponsepreamble.prototype['returnmessage'] = undefined;






export default OrderSearchResponseServiceResponseResponsepreamble;

