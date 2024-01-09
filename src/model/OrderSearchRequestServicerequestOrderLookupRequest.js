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
import OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber from './OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber';
import OrderSearchRequestServicerequestOrderLookupRequestOrderNumber from './OrderSearchRequestServicerequestOrderLookupRequestOrderNumber';

/**
 * The OrderSearchRequestServicerequestOrderLookupRequest model module.
 * @module model/OrderSearchRequestServicerequestOrderLookupRequest
 * @version 6.0
 */
class OrderSearchRequestServicerequestOrderLookupRequest {
    /**
     * Constructs a new <code>OrderSearchRequestServicerequestOrderLookupRequest</code>.
     * @alias module:model/OrderSearchRequestServicerequestOrderLookupRequest
     */
    constructor() { 
        
        OrderSearchRequestServicerequestOrderLookupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchRequestServicerequestOrderLookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchRequestServicerequestOrderLookupRequest} obj Optional instance to populate.
     * @return {module:model/OrderSearchRequestServicerequestOrderLookupRequest} The populated <code>OrderSearchRequestServicerequestOrderLookupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchRequestServicerequestOrderLookupRequest();

            if (data.hasOwnProperty('orderNumber')) {
                obj['orderNumber'] = OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.constructFromObject(data['orderNumber']);
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber.constructFromObject(data['customerOrderNumber']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchRequestServicerequestOrderLookupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchRequestServicerequestOrderLookupRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `orderNumber`
        if (data['orderNumber']) { // data not null
          OrderSearchRequestServicerequestOrderLookupRequestOrderNumber.validateJSON(data['orderNumber']);
        }
        // validate the optional field `customerOrderNumber`
        if (data['customerOrderNumber']) { // data not null
          OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber.validateJSON(data['customerOrderNumber']);
        }

        return true;
    }


}



/**
 * @member {module:model/OrderSearchRequestServicerequestOrderLookupRequestOrderNumber} orderNumber
 */
OrderSearchRequestServicerequestOrderLookupRequest.prototype['orderNumber'] = undefined;

/**
 * @member {module:model/OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber} customerOrderNumber
 */
OrderSearchRequestServicerequestOrderLookupRequest.prototype['customerOrderNumber'] = undefined;






export default OrderSearchRequestServicerequestOrderLookupRequest;

