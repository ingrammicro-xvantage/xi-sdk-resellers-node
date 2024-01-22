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
 * The OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner();

            if (data.hasOwnProperty('commenttext1')) {
                obj['commenttext1'] = ApiClient.convertToType(data['commenttext1'], 'String');
            }
            if (data.hasOwnProperty('commenttext2')) {
                obj['commenttext2'] = ApiClient.convertToType(data['commenttext2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['commenttext1'] && !(typeof data['commenttext1'] === 'string' || data['commenttext1'] instanceof String)) {
            throw new Error("Expected the field `commenttext1` to be a primitive type in the JSON string but got " + data['commenttext1']);
        }
        // ensure the json data is a string
        if (data['commenttext2'] && !(typeof data['commenttext2'] === 'string' || data['commenttext2'] instanceof String)) {
            throw new Error("Expected the field `commenttext2` to be a primitive type in the JSON string but got " + data['commenttext2']);
        }

        return true;
    }


}



/**
 * @member {String} commenttext1
 */
OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner.prototype['commenttext1'] = undefined;

/**
 * @member {String} commenttext2
 */
OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner.prototype['commenttext2'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner;

