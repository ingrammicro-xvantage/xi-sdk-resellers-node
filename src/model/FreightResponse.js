/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import FreightResponseFreightEstimateResponse from './FreightResponseFreightEstimateResponse';

/**
 * The FreightResponse model module.
 * @module model/FreightResponse
 * @version 1.0.0
 */
class FreightResponse {
    /**
     * Constructs a new <code>FreightResponse</code>.
     * @alias module:model/FreightResponse
     */
    constructor() { 
        
        FreightResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightResponse} obj Optional instance to populate.
     * @return {module:model/FreightResponse} The populated <code>FreightResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightResponse();

            if (data.hasOwnProperty('freightEstimateResponse')) {
                obj['freightEstimateResponse'] = FreightResponseFreightEstimateResponse.constructFromObject(data['freightEstimateResponse']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `freightEstimateResponse`
        if (data['freightEstimateResponse']) { // data not null
          FreightResponseFreightEstimateResponse.validateJSON(data['freightEstimateResponse']);
        }

        return true;
    }


}



/**
 * @member {module:model/FreightResponseFreightEstimateResponse} freightEstimateResponse
 */
FreightResponse.prototype['freightEstimateResponse'] = undefined;






export default FreightResponse;

