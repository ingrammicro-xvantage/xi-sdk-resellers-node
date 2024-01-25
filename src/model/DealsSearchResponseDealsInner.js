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
import RenewalsSearchResponseRenewalsInnerLinksInner from './RenewalsSearchResponseRenewalsInnerLinksInner';

/**
 * The DealsSearchResponseDealsInner model module.
 * @module model/DealsSearchResponseDealsInner
 * @version 6.0
 */
class DealsSearchResponseDealsInner {
    /**
     * Constructs a new <code>DealsSearchResponseDealsInner</code>.
     * @alias module:model/DealsSearchResponseDealsInner
     */
    constructor() { 
        
        DealsSearchResponseDealsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealsSearchResponseDealsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealsSearchResponseDealsInner} obj Optional instance to populate.
     * @return {module:model/DealsSearchResponseDealsInner} The populated <code>DealsSearchResponseDealsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealsSearchResponseDealsInner();

            if (data.hasOwnProperty('dealId')) {
                obj['dealId'] = ApiClient.convertToType(data['dealId'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = ApiClient.convertToType(data['endUser'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('dealExpiryDate')) {
                obj['dealExpiryDate'] = ApiClient.convertToType(data['dealExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [RenewalsSearchResponseRenewalsInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealsSearchResponseDealsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealsSearchResponseDealsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dealId'] && !(typeof data['dealId'] === 'string' || data['dealId'] instanceof String)) {
            throw new Error("Expected the field `dealId` to be a primitive type in the JSON string but got " + data['dealId']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['endUser'] && !(typeof data['endUser'] === 'string' || data['endUser'] instanceof String)) {
            throw new Error("Expected the field `endUser` to be a primitive type in the JSON string but got " + data['endUser']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                RenewalsSearchResponseRenewalsInnerLinksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Deal/Special bid number.
 * @member {String} dealId
 */
DealsSearchResponseDealsInner.prototype['dealId'] = undefined;

/**
 * Most recent version number of the deal.
 * @member {String} version
 */
DealsSearchResponseDealsInner.prototype['version'] = undefined;

/**
 * The end user/customer's name.
 * @member {String} endUser
 */
DealsSearchResponseDealsInner.prototype['endUser'] = undefined;

/**
 * The vendor's name.
 * @member {String} vendor
 */
DealsSearchResponseDealsInner.prototype['vendor'] = undefined;

/**
 * Expiration date of the deal/Special bid.
 * @member {Date} dealExpiryDate
 */
DealsSearchResponseDealsInner.prototype['dealExpiryDate'] = undefined;

/**
 * @member {Array.<module:model/RenewalsSearchResponseRenewalsInnerLinksInner>} links
 */
DealsSearchResponseDealsInner.prototype['links'] = undefined;






export default DealsSearchResponseDealsInner;

