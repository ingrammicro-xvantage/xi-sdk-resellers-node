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
import PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner from './PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner';

/**
 * The PriceAndAvailabilityResponseInnerAvailability model module.
 * @module model/PriceAndAvailabilityResponseInnerAvailability
 * @version 6.0
 */
class PriceAndAvailabilityResponseInnerAvailability {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseInnerAvailability</code>.
     * @alias module:model/PriceAndAvailabilityResponseInnerAvailability
     */
    constructor() { 
        
        PriceAndAvailabilityResponseInnerAvailability.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseInnerAvailability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseInnerAvailability} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseInnerAvailability} The populated <code>PriceAndAvailabilityResponseInnerAvailability</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseInnerAvailability();

            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Boolean');
            }
            if (data.hasOwnProperty('totalAvailability')) {
                obj['totalAvailability'] = ApiClient.convertToType(data['totalAvailability'], 'Number');
            }
            if (data.hasOwnProperty('availabilityByWarehouse')) {
                obj['availabilityByWarehouse'] = ApiClient.convertToType(data['availabilityByWarehouse'], [PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseInnerAvailability</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseInnerAvailability</code>.
     */
    static validateJSON(data) {
        if (data['availabilityByWarehouse']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['availabilityByWarehouse'])) {
                throw new Error("Expected the field `availabilityByWarehouse` to be an array in the JSON data but got " + data['availabilityByWarehouse']);
            }
            // validate the optional field `availabilityByWarehouse` (array)
            for (const item of data['availabilityByWarehouse']) {
                PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Boolean that indicates if the product ordered is available
 * @member {Boolean} available
 */
PriceAndAvailabilityResponseInnerAvailability.prototype['available'] = undefined;

/**
 * The total amount of available products
 * @member {Number} totalAvailability
 */
PriceAndAvailabilityResponseInnerAvailability.prototype['totalAvailability'] = undefined;

/**
 * @member {Array.<module:model/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner>} availabilityByWarehouse
 */
PriceAndAvailabilityResponseInnerAvailability.prototype['availabilityByWarehouse'] = undefined;






export default PriceAndAvailabilityResponseInnerAvailability;

