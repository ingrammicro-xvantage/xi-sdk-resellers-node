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
import RenewalsSearchRequestStatusOpporutinyStatus from './RenewalsSearchRequestStatusOpporutinyStatus';

/**
 * The RenewalsSearchRequestStatus model module.
 * @module model/RenewalsSearchRequestStatus
 * @version 6.0
 */
class RenewalsSearchRequestStatus {
    /**
     * Constructs a new <code>RenewalsSearchRequestStatus</code>.
     * @alias module:model/RenewalsSearchRequestStatus
     */
    constructor() { 
        
        RenewalsSearchRequestStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsSearchRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchRequestStatus} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchRequestStatus} The populated <code>RenewalsSearchRequestStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsSearchRequestStatus();

            if (data.hasOwnProperty('OpporutinyStatus')) {
                obj['OpporutinyStatus'] = RenewalsSearchRequestStatusOpporutinyStatus.constructFromObject(data['OpporutinyStatus']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchRequestStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchRequestStatus</code>.
     */
    static validateJSON(data) {
        // validate the optional field `OpporutinyStatus`
        if (data['OpporutinyStatus']) { // data not null
          RenewalsSearchRequestStatusOpporutinyStatus.validateJSON(data['OpporutinyStatus']);
        }

        return true;
    }


}



/**
 * @member {module:model/RenewalsSearchRequestStatusOpporutinyStatus} OpporutinyStatus
 */
RenewalsSearchRequestStatus.prototype['OpporutinyStatus'] = undefined;






export default RenewalsSearchRequestStatus;

