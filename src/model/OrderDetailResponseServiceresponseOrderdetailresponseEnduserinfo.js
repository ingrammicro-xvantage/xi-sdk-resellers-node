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
 * The OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo();

            if (data.hasOwnProperty('enduserid')) {
                obj['enduserid'] = ApiClient.convertToType(data['enduserid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['enduserid'] && !(typeof data['enduserid'] === 'string' || data['enduserid'] instanceof String)) {
            throw new Error("Expected the field `enduserid` to be a primitive type in the JSON string but got " + data['enduserid']);
        }

        return true;
    }


}



/**
 * @member {String} enduserid
 */
OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo.prototype['enduserid'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo;

