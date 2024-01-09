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
import OrderDeleteRequestServicerequestOrderDeleteRequestDetails from './OrderDeleteRequestServicerequestOrderDeleteRequestDetails';
import OrderDeleteRequestServicerequestRequestpreamble from './OrderDeleteRequestServicerequestRequestpreamble';

/**
 * The OrderDeleteRequestServicerequest model module.
 * @module model/OrderDeleteRequestServicerequest
 * @version 6.0
 */
class OrderDeleteRequestServicerequest {
    /**
     * Constructs a new <code>OrderDeleteRequestServicerequest</code>.
     * @alias module:model/OrderDeleteRequestServicerequest
     * @param requestpreamble {module:model/OrderDeleteRequestServicerequestRequestpreamble} 
     */
    constructor(requestpreamble) { 
        
        OrderDeleteRequestServicerequest.initialize(this, requestpreamble);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestpreamble) { 
        obj['requestpreamble'] = requestpreamble;
    }

    /**
     * Constructs a <code>OrderDeleteRequestServicerequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDeleteRequestServicerequest} obj Optional instance to populate.
     * @return {module:model/OrderDeleteRequestServicerequest} The populated <code>OrderDeleteRequestServicerequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDeleteRequestServicerequest();

            if (data.hasOwnProperty('requestpreamble')) {
                obj['requestpreamble'] = OrderDeleteRequestServicerequestRequestpreamble.constructFromObject(data['requestpreamble']);
            }
            if (data.hasOwnProperty('OrderDeleteRequestDetails')) {
                obj['OrderDeleteRequestDetails'] = OrderDeleteRequestServicerequestOrderDeleteRequestDetails.constructFromObject(data['OrderDeleteRequestDetails']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDeleteRequestServicerequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDeleteRequestServicerequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrderDeleteRequestServicerequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `requestpreamble`
        if (data['requestpreamble']) { // data not null
          OrderDeleteRequestServicerequestRequestpreamble.validateJSON(data['requestpreamble']);
        }
        // validate the optional field `OrderDeleteRequestDetails`
        if (data['OrderDeleteRequestDetails']) { // data not null
          OrderDeleteRequestServicerequestOrderDeleteRequestDetails.validateJSON(data['OrderDeleteRequestDetails']);
        }

        return true;
    }


}

OrderDeleteRequestServicerequest.RequiredProperties = ["requestpreamble"];

/**
 * @member {module:model/OrderDeleteRequestServicerequestRequestpreamble} requestpreamble
 */
OrderDeleteRequestServicerequest.prototype['requestpreamble'] = undefined;

/**
 * @member {module:model/OrderDeleteRequestServicerequestOrderDeleteRequestDetails} OrderDeleteRequestDetails
 */
OrderDeleteRequestServicerequest.prototype['OrderDeleteRequestDetails'] = undefined;






export default OrderDeleteRequestServicerequest;
