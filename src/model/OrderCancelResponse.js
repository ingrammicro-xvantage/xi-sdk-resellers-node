/**
 * Reseller API Documentation - United States
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
import OrderCancelResponseServiceresponse from './OrderCancelResponseServiceresponse';

/**
 * The OrderCancelResponse model module.
 * @module model/OrderCancelResponse
 * @version 6.0
 */
class OrderCancelResponse {
    /**
     * Constructs a new <code>OrderCancelResponse</code>.
     * Response schema for order delete endpoint
     * @alias module:model/OrderCancelResponse
     */
    constructor() { 
        
        OrderCancelResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCancelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCancelResponse} obj Optional instance to populate.
     * @return {module:model/OrderCancelResponse} The populated <code>OrderCancelResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCancelResponse();

            if (data.hasOwnProperty('serviceresponse')) {
                obj['serviceresponse'] = OrderCancelResponseServiceresponse.constructFromObject(data['serviceresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCancelResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCancelResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `serviceresponse`
        if (data['serviceresponse']) { // data not null
          OrderCancelResponseServiceresponse.validateJSON(data['serviceresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderCancelResponseServiceresponse} serviceresponse
 */
OrderCancelResponse.prototype['serviceresponse'] = undefined;






export default OrderCancelResponse;

