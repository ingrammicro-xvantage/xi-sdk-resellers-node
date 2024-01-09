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
import OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner from './OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner';

/**
 * The OrderCreateResponseServiceresponseOrdercreateresponseInner model module.
 * @module model/OrderCreateResponseServiceresponseOrdercreateresponseInner
 * @version 6.0
 */
class OrderCreateResponseServiceresponseOrdercreateresponseInner {
    /**
     * Constructs a new <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
     * @alias module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner
     */
    constructor() { 
        
        OrderCreateResponseServiceresponseOrdercreateresponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner} The populated <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseServiceresponseOrdercreateresponseInner();

            if (data.hasOwnProperty('numberoflineswithsuccess')) {
                obj['numberoflineswithsuccess'] = ApiClient.convertToType(data['numberoflineswithsuccess'], 'String');
            }
            if (data.hasOwnProperty('numberoflineswitherror')) {
                obj['numberoflineswitherror'] = ApiClient.convertToType(data['numberoflineswitherror'], 'String');
            }
            if (data.hasOwnProperty('numberoflineswithwarning')) {
                obj['numberoflineswithwarning'] = ApiClient.convertToType(data['numberoflineswithwarning'], 'String');
            }
            if (data.hasOwnProperty('globalorderid')) {
                obj['globalorderid'] = ApiClient.convertToType(data['globalorderid'], 'String');
            }
            if (data.hasOwnProperty('ordertype')) {
                obj['ordertype'] = ApiClient.convertToType(data['ordertype'], 'String');
            }
            if (data.hasOwnProperty('ordertimestamp')) {
                obj['ordertimestamp'] = ApiClient.convertToType(data['ordertimestamp'], 'String');
            }
            if (data.hasOwnProperty('invoicingsystemorderid')) {
                obj['invoicingsystemorderid'] = ApiClient.convertToType(data['invoicingsystemorderid'], 'String');
            }
            if (data.hasOwnProperty('taxamount')) {
                obj['taxamount'] = ApiClient.convertToType(data['taxamount'], 'Number');
            }
            if (data.hasOwnProperty('freightamount')) {
                obj['freightamount'] = ApiClient.convertToType(data['freightamount'], 'Number');
            }
            if (data.hasOwnProperty('orderamount')) {
                obj['orderamount'] = ApiClient.convertToType(data['orderamount'], 'Number');
            }
            if (data.hasOwnProperty('Lines')) {
                obj['Lines'] = ApiClient.convertToType(data['Lines'], [OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseServiceresponseOrdercreateresponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['numberoflineswithsuccess'] && !(typeof data['numberoflineswithsuccess'] === 'string' || data['numberoflineswithsuccess'] instanceof String)) {
            throw new Error("Expected the field `numberoflineswithsuccess` to be a primitive type in the JSON string but got " + data['numberoflineswithsuccess']);
        }
        // ensure the json data is a string
        if (data['numberoflineswitherror'] && !(typeof data['numberoflineswitherror'] === 'string' || data['numberoflineswitherror'] instanceof String)) {
            throw new Error("Expected the field `numberoflineswitherror` to be a primitive type in the JSON string but got " + data['numberoflineswitherror']);
        }
        // ensure the json data is a string
        if (data['numberoflineswithwarning'] && !(typeof data['numberoflineswithwarning'] === 'string' || data['numberoflineswithwarning'] instanceof String)) {
            throw new Error("Expected the field `numberoflineswithwarning` to be a primitive type in the JSON string but got " + data['numberoflineswithwarning']);
        }
        // ensure the json data is a string
        if (data['globalorderid'] && !(typeof data['globalorderid'] === 'string' || data['globalorderid'] instanceof String)) {
            throw new Error("Expected the field `globalorderid` to be a primitive type in the JSON string but got " + data['globalorderid']);
        }
        // ensure the json data is a string
        if (data['ordertype'] && !(typeof data['ordertype'] === 'string' || data['ordertype'] instanceof String)) {
            throw new Error("Expected the field `ordertype` to be a primitive type in the JSON string but got " + data['ordertype']);
        }
        // ensure the json data is a string
        if (data['ordertimestamp'] && !(typeof data['ordertimestamp'] === 'string' || data['ordertimestamp'] instanceof String)) {
            throw new Error("Expected the field `ordertimestamp` to be a primitive type in the JSON string but got " + data['ordertimestamp']);
        }
        // ensure the json data is a string
        if (data['invoicingsystemorderid'] && !(typeof data['invoicingsystemorderid'] === 'string' || data['invoicingsystemorderid'] instanceof String)) {
            throw new Error("Expected the field `invoicingsystemorderid` to be a primitive type in the JSON string but got " + data['invoicingsystemorderid']);
        }
        if (data['Lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Lines'])) {
                throw new Error("Expected the field `Lines` to be an array in the JSON data but got " + data['Lines']);
            }
            // validate the optional field `Lines` (array)
            for (const item of data['Lines']) {
                OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Number of line items that were successful
 * @member {String} numberoflineswithsuccess
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswithsuccess'] = undefined;

/**
 * Number of line items with error
 * @member {String} numberoflineswitherror
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswitherror'] = undefined;

/**
 * Number of line items with warnings
 * @member {String} numberoflineswithwarning
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['numberoflineswithwarning'] = undefined;

/**
 * Ingram sales order number
 * @member {String} globalorderid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['globalorderid'] = undefined;

/**
 * S=Stocked PO D=Direct Ship PO
 * @member {module:model/OrderCreateResponseServiceresponseOrdercreateresponseInner.OrdertypeEnum} ordertype
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['ordertype'] = undefined;

/**
 * Time order received
 * @member {String} ordertimestamp
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['ordertimestamp'] = undefined;

/**
 * Ingram Micro generated order number
 * @member {String} invoicingsystemorderid
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['invoicingsystemorderid'] = undefined;

/**
 * @member {Number} taxamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['taxamount'] = undefined;

/**
 * Freight amount customer pays for freight
 * @member {Number} freightamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['freightamount'] = undefined;

/**
 * Total amount of order with freight and taxes
 * @member {Number} orderamount
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['orderamount'] = undefined;

/**
 * Collection of lines
 * @member {Array.<module:model/OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner>} Lines
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner.prototype['Lines'] = undefined;





/**
 * Allowed values for the <code>ordertype</code> property.
 * @enum {String}
 * @readonly
 */
OrderCreateResponseServiceresponseOrdercreateresponseInner['OrdertypeEnum'] = {

    /**
     * value: "S"
     * @const
     */
    "S": "S",

    /**
     * value: "D"
     * @const
     */
    "D": "D"
};



export default OrderCreateResponseServiceresponseOrdercreateresponseInner;
