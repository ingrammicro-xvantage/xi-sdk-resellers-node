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
 * The OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber model module.
 * @module model/OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber
 * @version 6.0
 */
class OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber {
    /**
     * Constructs a new <code>OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber</code>.
     * @alias module:model/OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber
     */
    constructor() { 
        
        OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber} obj Optional instance to populate.
     * @return {module:model/OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber} The populated <code>OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber();

            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }

        return true;
    }


}



/**
 * @member {String} customerOrderNumber
 */
OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber.prototype['customerOrderNumber'] = undefined;






export default OrderSearchRequestServicerequestOrderLookupRequestCustomerOrderNumber;

