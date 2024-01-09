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
import PriceAndAvailabilityRequestServicerequestPriceandstockrequestItemInner from './PriceAndAvailabilityRequestServicerequestPriceandstockrequestItemInner';

/**
 * The PriceAndAvailabilityRequestServicerequestPriceandstockrequest model module.
 * @module model/PriceAndAvailabilityRequestServicerequestPriceandstockrequest
 * @version 6.0
 */
class PriceAndAvailabilityRequestServicerequestPriceandstockrequest {
    /**
     * Constructs a new <code>PriceAndAvailabilityRequestServicerequestPriceandstockrequest</code>.
     * @alias module:model/PriceAndAvailabilityRequestServicerequestPriceandstockrequest
     */
    constructor() { 
        
        PriceAndAvailabilityRequestServicerequestPriceandstockrequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityRequestServicerequestPriceandstockrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityRequestServicerequestPriceandstockrequest} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityRequestServicerequestPriceandstockrequest} The populated <code>PriceAndAvailabilityRequestServicerequestPriceandstockrequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityRequestServicerequestPriceandstockrequest();

            if (data.hasOwnProperty('showwarehouseavailability')) {
                obj['showwarehouseavailability'] = ApiClient.convertToType(data['showwarehouseavailability'], 'String');
            }
            if (data.hasOwnProperty('extravailabilityflag')) {
                obj['extravailabilityflag'] = ApiClient.convertToType(data['extravailabilityflag'], 'String');
            }
            if (data.hasOwnProperty('includeallsystems')) {
                obj['includeallsystems'] = ApiClient.convertToType(data['includeallsystems'], 'Boolean');
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ApiClient.convertToType(data['item'], [PriceAndAvailabilityRequestServicerequestPriceandstockrequestItemInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityRequestServicerequestPriceandstockrequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityRequestServicerequestPriceandstockrequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['showwarehouseavailability'] && !(typeof data['showwarehouseavailability'] === 'string' || data['showwarehouseavailability'] instanceof String)) {
            throw new Error("Expected the field `showwarehouseavailability` to be a primitive type in the JSON string but got " + data['showwarehouseavailability']);
        }
        // ensure the json data is a string
        if (data['extravailabilityflag'] && !(typeof data['extravailabilityflag'] === 'string' || data['extravailabilityflag'] instanceof String)) {
            throw new Error("Expected the field `extravailabilityflag` to be a primitive type in the JSON string but got " + data['extravailabilityflag']);
        }
        if (data['item']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['item'])) {
                throw new Error("Expected the field `item` to be an array in the JSON data but got " + data['item']);
            }
            // validate the optional field `item` (array)
            for (const item of data['item']) {
                PriceAndAvailabilityRequestServicerequestPriceandstockrequestItemInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * True/false to show the availability of individual warehouses
 * @member {String} showwarehouseavailability
 */
PriceAndAvailabilityRequestServicerequestPriceandstockrequest.prototype['showwarehouseavailability'] = undefined;

/**
 * Y/N to show extra availability flag
 * @member {String} extravailabilityflag
 */
PriceAndAvailabilityRequestServicerequestPriceandstockrequest.prototype['extravailabilityflag'] = undefined;

/**
 * Flag to indicate if the price and stock information is required for all Ingram Micro systems.
 * @member {Boolean} includeallsystems
 */
PriceAndAvailabilityRequestServicerequestPriceandstockrequest.prototype['includeallsystems'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityRequestServicerequestPriceandstockrequestItemInner>} item
 */
PriceAndAvailabilityRequestServicerequestPriceandstockrequest.prototype['item'] = undefined;






export default PriceAndAvailabilityRequestServicerequestPriceandstockrequest;
