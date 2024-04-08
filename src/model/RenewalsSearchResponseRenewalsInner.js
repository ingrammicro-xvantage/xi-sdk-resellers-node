/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
import RenewalsSearchResponseRenewalsInnerLinksInner from './RenewalsSearchResponseRenewalsInnerLinksInner';

/**
 * The RenewalsSearchResponseRenewalsInner model module.
 * @module model/RenewalsSearchResponseRenewalsInner
 * @version 1.0.0
 */
class RenewalsSearchResponseRenewalsInner {
    /**
     * Constructs a new <code>RenewalsSearchResponseRenewalsInner</code>.
     * @alias module:model/RenewalsSearchResponseRenewalsInner
     */
    constructor() { 
        
        RenewalsSearchResponseRenewalsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewalsSearchResponseRenewalsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewalsSearchResponseRenewalsInner} obj Optional instance to populate.
     * @return {module:model/RenewalsSearchResponseRenewalsInner} The populated <code>RenewalsSearchResponseRenewalsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewalsSearchResponseRenewalsInner();

            if (data.hasOwnProperty('renewalId')) {
                obj['renewalId'] = ApiClient.convertToType(data['renewalId'], 'Number');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = ApiClient.convertToType(data['endUser'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
            }
            if (data.hasOwnProperty('renewalValue')) {
                obj['renewalValue'] = ApiClient.convertToType(data['renewalValue'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [RenewalsSearchResponseRenewalsInnerLinksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RenewalsSearchResponseRenewalsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RenewalsSearchResponseRenewalsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['referenceNumber'] && !(typeof data['referenceNumber'] === 'string' || data['referenceNumber'] instanceof String)) {
            throw new Error("Expected the field `referenceNumber` to be a primitive type in the JSON string but got " + data['referenceNumber']);
        }
        // ensure the json data is a string
        if (data['endUser'] && !(typeof data['endUser'] === 'string' || data['endUser'] instanceof String)) {
            throw new Error("Expected the field `endUser` to be a primitive type in the JSON string but got " + data['endUser']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['expirationDate'] && !(typeof data['expirationDate'] === 'string' || data['expirationDate'] instanceof String)) {
            throw new Error("Expected the field `expirationDate` to be a primitive type in the JSON string but got " + data['expirationDate']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
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
 * Unique renewal ID.
 * @member {Number} renewalId
 */
RenewalsSearchResponseRenewalsInner.prototype['renewalId'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
RenewalsSearchResponseRenewalsInner.prototype['customerOrderNumber'] = undefined;

/**
 * Renewal reference number. It could be notification id or quote number.
 * @member {String} referenceNumber
 */
RenewalsSearchResponseRenewalsInner.prototype['referenceNumber'] = undefined;

/**
 * The company name for the end user/customer.
 * @member {String} endUser
 */
RenewalsSearchResponseRenewalsInner.prototype['endUser'] = undefined;

/**
 * The name of the vendor.
 * @member {String} vendor
 */
RenewalsSearchResponseRenewalsInner.prototype['vendor'] = undefined;

/**
 * Renewal expiration date.
 * @member {String} expirationDate
 */
RenewalsSearchResponseRenewalsInner.prototype['expirationDate'] = undefined;

/**
 * The value of the renewal.
 * @member {Number} renewalValue
 */
RenewalsSearchResponseRenewalsInner.prototype['renewalValue'] = undefined;

/**
 * The status of the renewal.
 * @member {String} status
 */
RenewalsSearchResponseRenewalsInner.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/RenewalsSearchResponseRenewalsInnerLinksInner>} links
 */
RenewalsSearchResponseRenewalsInner.prototype['links'] = undefined;






export default RenewalsSearchResponseRenewalsInner;

