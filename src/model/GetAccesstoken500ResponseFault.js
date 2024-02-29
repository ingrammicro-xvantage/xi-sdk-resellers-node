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
import GetAccesstoken500ResponseFaultDetail from './GetAccesstoken500ResponseFaultDetail';

/**
 * The GetAccesstoken500ResponseFault model module.
 * @module model/GetAccesstoken500ResponseFault
 * @version 1.0.0
 */
class GetAccesstoken500ResponseFault {
    /**
     * Constructs a new <code>GetAccesstoken500ResponseFault</code>.
     * @alias module:model/GetAccesstoken500ResponseFault
     */
    constructor() { 
        
        GetAccesstoken500ResponseFault.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccesstoken500ResponseFault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccesstoken500ResponseFault} obj Optional instance to populate.
     * @return {module:model/GetAccesstoken500ResponseFault} The populated <code>GetAccesstoken500ResponseFault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccesstoken500ResponseFault();

            if (data.hasOwnProperty('faultstring')) {
                obj['faultstring'] = ApiClient.convertToType(data['faultstring'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = GetAccesstoken500ResponseFaultDetail.constructFromObject(data['detail']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAccesstoken500ResponseFault</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAccesstoken500ResponseFault</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['faultstring'] && !(typeof data['faultstring'] === 'string' || data['faultstring'] instanceof String)) {
            throw new Error("Expected the field `faultstring` to be a primitive type in the JSON string but got " + data['faultstring']);
        }
        // validate the optional field `detail`
        if (data['detail']) { // data not null
          GetAccesstoken500ResponseFaultDetail.validateJSON(data['detail']);
        }

        return true;
    }


}



/**
 * @member {String} faultstring
 */
GetAccesstoken500ResponseFault.prototype['faultstring'] = undefined;

/**
 * @member {module:model/GetAccesstoken500ResponseFaultDetail} detail
 */
GetAccesstoken500ResponseFault.prototype['detail'] = undefined;






export default GetAccesstoken500ResponseFault;
