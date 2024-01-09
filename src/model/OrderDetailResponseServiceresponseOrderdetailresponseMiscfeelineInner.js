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

/**
 * The OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('chargeamount')) {
                obj['chargeamount'] = ApiClient.convertToType(data['chargeamount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['chargeamount'] && !(typeof data['chargeamount'] === 'string' || data['chargeamount'] instanceof String)) {
            throw new Error("Expected the field `chargeamount` to be a primitive type in the JSON string but got " + data['chargeamount']);
        }

        return true;
    }


}



/**
 * Handling charges/Miscellaneous Fee description
 * @member {String} description
 */
OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner.prototype['description'] = undefined;

/**
 * Handling charges/ Miscelaneous fee amount
 * @member {String} chargeamount
 */
OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner.prototype['chargeamount'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner;

