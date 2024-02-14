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
 * The OrderDetailResponseMiscellaneousChargesInner model module.
 * @module model/OrderDetailResponseMiscellaneousChargesInner
 * @version 1.0.0
 */
class OrderDetailResponseMiscellaneousChargesInner {
    /**
     * Constructs a new <code>OrderDetailResponseMiscellaneousChargesInner</code>.
     * @alias module:model/OrderDetailResponseMiscellaneousChargesInner
     */
    constructor() { 
        
        OrderDetailResponseMiscellaneousChargesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseMiscellaneousChargesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseMiscellaneousChargesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseMiscellaneousChargesInner} The populated <code>OrderDetailResponseMiscellaneousChargesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseMiscellaneousChargesInner();

            if (data.hasOwnProperty('subOrderNumber')) {
                obj['subOrderNumber'] = ApiClient.convertToType(data['subOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('chargeLineReference')) {
                obj['chargeLineReference'] = ApiClient.convertToType(data['chargeLineReference'], 'String');
            }
            if (data.hasOwnProperty('chargeDescription')) {
                obj['chargeDescription'] = ApiClient.convertToType(data['chargeDescription'], 'String');
            }
            if (data.hasOwnProperty('chargeAmount')) {
                obj['chargeAmount'] = ApiClient.convertToType(data['chargeAmount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseMiscellaneousChargesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseMiscellaneousChargesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subOrderNumber'] && !(typeof data['subOrderNumber'] === 'string' || data['subOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `subOrderNumber` to be a primitive type in the JSON string but got " + data['subOrderNumber']);
        }
        // ensure the json data is a string
        if (data['chargeLineReference'] && !(typeof data['chargeLineReference'] === 'string' || data['chargeLineReference'] instanceof String)) {
            throw new Error("Expected the field `chargeLineReference` to be a primitive type in the JSON string but got " + data['chargeLineReference']);
        }
        // ensure the json data is a string
        if (data['chargeDescription'] && !(typeof data['chargeDescription'] === 'string' || data['chargeDescription'] instanceof String)) {
            throw new Error("Expected the field `chargeDescription` to be a primitive type in the JSON string but got " + data['chargeDescription']);
        }

        return true;
    }


}



/**
 * The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number.
 * @member {String} subOrderNumber
 */
OrderDetailResponseMiscellaneousChargesInner.prototype['subOrderNumber'] = undefined;

/**
 * Impulse line number for the miscellaneous charge.
 * @member {String} chargeLineReference
 */
OrderDetailResponseMiscellaneousChargesInner.prototype['chargeLineReference'] = undefined;

/**
 * Description of the miscellaneous charges.
 * @member {String} chargeDescription
 */
OrderDetailResponseMiscellaneousChargesInner.prototype['chargeDescription'] = undefined;

/**
 * The amount of miscellaneous charges.
 * @member {Number} chargeAmount
 */
OrderDetailResponseMiscellaneousChargesInner.prototype['chargeAmount'] = undefined;






export default OrderDetailResponseMiscellaneousChargesInner;

