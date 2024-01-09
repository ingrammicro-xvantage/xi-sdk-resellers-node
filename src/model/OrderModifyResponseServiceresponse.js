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
import OrderModifyResponseServiceresponseOrdermodifyresponse from './OrderModifyResponseServiceresponseOrdermodifyresponse';
import OrderModifyResponseServiceresponseResponsepreamble from './OrderModifyResponseServiceresponseResponsepreamble';

/**
 * The OrderModifyResponseServiceresponse model module.
 * @module model/OrderModifyResponseServiceresponse
 * @version 6.0
 */
class OrderModifyResponseServiceresponse {
    /**
     * Constructs a new <code>OrderModifyResponseServiceresponse</code>.
     * @alias module:model/OrderModifyResponseServiceresponse
     */
    constructor() { 
        
        OrderModifyResponseServiceresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyResponseServiceresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyResponseServiceresponse} obj Optional instance to populate.
     * @return {module:model/OrderModifyResponseServiceresponse} The populated <code>OrderModifyResponseServiceresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyResponseServiceresponse();

            if (data.hasOwnProperty('responsepreamble')) {
                obj['responsepreamble'] = OrderModifyResponseServiceresponseResponsepreamble.constructFromObject(data['responsepreamble']);
            }
            if (data.hasOwnProperty('ordermodifyresponse')) {
                obj['ordermodifyresponse'] = OrderModifyResponseServiceresponseOrdermodifyresponse.constructFromObject(data['ordermodifyresponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyResponseServiceresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyResponseServiceresponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `responsepreamble`
        if (data['responsepreamble']) { // data not null
          OrderModifyResponseServiceresponseResponsepreamble.validateJSON(data['responsepreamble']);
        }
        // validate the optional field `ordermodifyresponse`
        if (data['ordermodifyresponse']) { // data not null
          OrderModifyResponseServiceresponseOrdermodifyresponse.validateJSON(data['ordermodifyresponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderModifyResponseServiceresponseResponsepreamble} responsepreamble
 */
OrderModifyResponseServiceresponse.prototype['responsepreamble'] = undefined;

/**
 * @member {module:model/OrderModifyResponseServiceresponseOrdermodifyresponse} ordermodifyresponse
 */
OrderModifyResponseServiceresponse.prototype['ordermodifyresponse'] = undefined;






export default OrderModifyResponseServiceresponse;

