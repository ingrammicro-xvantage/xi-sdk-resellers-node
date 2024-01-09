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
 * The OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner();

            if (data.hasOwnProperty('attributename')) {
                obj['attributename'] = ApiClient.convertToType(data['attributename'], 'String');
            }
            if (data.hasOwnProperty('attributevalue')) {
                obj['attributevalue'] = ApiClient.convertToType(data['attributevalue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributename'] && !(typeof data['attributename'] === 'string' || data['attributename'] instanceof String)) {
            throw new Error("Expected the field `attributename` to be a primitive type in the JSON string but got " + data['attributename']);
        }
        // ensure the json data is a string
        if (data['attributevalue'] && !(typeof data['attributevalue'] === 'string' || data['attributevalue'] instanceof String)) {
            throw new Error("Expected the field `attributevalue` to be a primitive type in the JSON string but got " + data['attributevalue']);
        }

        return true;
    }


}



/**
 * termscode' | 'termsdescription' | 'commenttext' are the atrribute name
 * @member {String} attributename
 */
OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner.prototype['attributename'] = undefined;

/**
 * values of these fields are send . termscode' | 'termsdescription' | 'commenttext' are the atrribute name
 * @member {String} attributevalue
 */
OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner.prototype['attributevalue'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner;

