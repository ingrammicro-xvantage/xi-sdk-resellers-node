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

/**
 * The GetAccesstoken500ResponseFaultDetail model module.
 * @module model/GetAccesstoken500ResponseFaultDetail
 * @version 1.0.0
 */
class GetAccesstoken500ResponseFaultDetail {
    /**
     * Constructs a new <code>GetAccesstoken500ResponseFaultDetail</code>.
     * @alias module:model/GetAccesstoken500ResponseFaultDetail
     */
    constructor() { 
        
        GetAccesstoken500ResponseFaultDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccesstoken500ResponseFaultDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccesstoken500ResponseFaultDetail} obj Optional instance to populate.
     * @return {module:model/GetAccesstoken500ResponseFaultDetail} The populated <code>GetAccesstoken500ResponseFaultDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccesstoken500ResponseFaultDetail();

            if (data.hasOwnProperty('errorcode')) {
                obj['errorcode'] = ApiClient.convertToType(data['errorcode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAccesstoken500ResponseFaultDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAccesstoken500ResponseFaultDetail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['errorcode'] && !(typeof data['errorcode'] === 'string' || data['errorcode'] instanceof String)) {
            throw new Error("Expected the field `errorcode` to be a primitive type in the JSON string but got " + data['errorcode']);
        }

        return true;
    }


}



/**
 * @member {String} errorcode
 */
GetAccesstoken500ResponseFaultDetail.prototype['errorcode'] = undefined;






export default GetAccesstoken500ResponseFaultDetail;
