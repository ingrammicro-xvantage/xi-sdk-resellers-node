/**
 * Reseller API
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
import OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata from './OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata';
import OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner from './OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner';
import OrderModifyRequestServicerequestOrdermodifyrequestShipto from './OrderModifyRequestServicerequestOrdermodifyrequestShipto';

/**
 * The OrderModifyRequestServicerequestOrdermodifyrequest model module.
 * @module model/OrderModifyRequestServicerequestOrdermodifyrequest
 * @version 6.0
 */
class OrderModifyRequestServicerequestOrdermodifyrequest {
    /**
     * Constructs a new <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
     * @alias module:model/OrderModifyRequestServicerequestOrdermodifyrequest
     */
    constructor() { 
        
        OrderModifyRequestServicerequestOrdermodifyrequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderModifyRequestServicerequestOrdermodifyrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderModifyRequestServicerequestOrdermodifyrequest} obj Optional instance to populate.
     * @return {module:model/OrderModifyRequestServicerequestOrdermodifyrequest} The populated <code>OrderModifyRequestServicerequestOrdermodifyrequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModifyRequestServicerequestOrdermodifyrequest();

            if (data.hasOwnProperty('ingramorderbranch')) {
                obj['ingramorderbranch'] = ApiClient.convertToType(data['ingramorderbranch'], 'String');
            }
            if (data.hasOwnProperty('ingramordernumber')) {
                obj['ingramordernumber'] = ApiClient.convertToType(data['ingramordernumber'], 'String');
            }
            if (data.hasOwnProperty('ingramorderdist')) {
                obj['ingramorderdist'] = ApiClient.convertToType(data['ingramorderdist'], 'String');
            }
            if (data.hasOwnProperty('ingramordership')) {
                obj['ingramordership'] = ApiClient.convertToType(data['ingramordership'], 'String');
            }
            if (data.hasOwnProperty('customerponumber')) {
                obj['customerponumber'] = ApiClient.convertToType(data['customerponumber'], 'String');
            }
            if (data.hasOwnProperty('shipto')) {
                obj['shipto'] = OrderModifyRequestServicerequestOrdermodifyrequestShipto.constructFromObject(data['shipto']);
            }
            if (data.hasOwnProperty('headerdata')) {
                obj['headerdata'] = OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata.constructFromObject(data['headerdata']);
            }
            if (data.hasOwnProperty('linedata')) {
                obj['linedata'] = ApiClient.convertToType(data['linedata'], [OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderModifyRequestServicerequestOrdermodifyrequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramorderbranch'] && !(typeof data['ingramorderbranch'] === 'string' || data['ingramorderbranch'] instanceof String)) {
            throw new Error("Expected the field `ingramorderbranch` to be a primitive type in the JSON string but got " + data['ingramorderbranch']);
        }
        // ensure the json data is a string
        if (data['ingramordernumber'] && !(typeof data['ingramordernumber'] === 'string' || data['ingramordernumber'] instanceof String)) {
            throw new Error("Expected the field `ingramordernumber` to be a primitive type in the JSON string but got " + data['ingramordernumber']);
        }
        // ensure the json data is a string
        if (data['ingramorderdist'] && !(typeof data['ingramorderdist'] === 'string' || data['ingramorderdist'] instanceof String)) {
            throw new Error("Expected the field `ingramorderdist` to be a primitive type in the JSON string but got " + data['ingramorderdist']);
        }
        // ensure the json data is a string
        if (data['ingramordership'] && !(typeof data['ingramordership'] === 'string' || data['ingramordership'] instanceof String)) {
            throw new Error("Expected the field `ingramordership` to be a primitive type in the JSON string but got " + data['ingramordership']);
        }
        // ensure the json data is a string
        if (data['customerponumber'] && !(typeof data['customerponumber'] === 'string' || data['customerponumber'] instanceof String)) {
            throw new Error("Expected the field `customerponumber` to be a primitive type in the JSON string but got " + data['customerponumber']);
        }
        // validate the optional field `shipto`
        if (data['shipto']) { // data not null
          OrderModifyRequestServicerequestOrdermodifyrequestShipto.validateJSON(data['shipto']);
        }
        // validate the optional field `headerdata`
        if (data['headerdata']) { // data not null
          OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata.validateJSON(data['headerdata']);
        }
        if (data['linedata']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['linedata'])) {
                throw new Error("Expected the field `linedata` to be an array in the JSON data but got " + data['linedata']);
            }
            // validate the optional field `linedata` (array)
            for (const item of data['linedata']) {
                OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} ingramorderbranch
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramorderbranch'] = undefined;

/**
 * @member {String} ingramordernumber
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramordernumber'] = undefined;

/**
 * @member {String} ingramorderdist
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramorderdist'] = undefined;

/**
 * @member {String} ingramordership
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['ingramordership'] = undefined;

/**
 * @member {String} customerponumber
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['customerponumber'] = undefined;

/**
 * @member {module:model/OrderModifyRequestServicerequestOrdermodifyrequestShipto} shipto
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['shipto'] = undefined;

/**
 * @member {module:model/OrderModifyRequestServicerequestOrdermodifyrequestHeaderdata} headerdata
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['headerdata'] = undefined;

/**
 * @member {Array.<module:model/OrderModifyRequestServicerequestOrdermodifyrequestLinedataInner>} linedata
 */
OrderModifyRequestServicerequestOrdermodifyrequest.prototype['linedata'] = undefined;






export default OrderModifyRequestServicerequestOrdermodifyrequest;

