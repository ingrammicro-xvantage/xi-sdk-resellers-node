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

/**
 * The FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner model module.
 * @module model/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner
 * @version 6.0
 */
class FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner {
    /**
     * Constructs a new <code>FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner</code>.
     * @alias module:model/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner
     */
    constructor() { 
        
        FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner} obj Optional instance to populate.
     * @return {module:model/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner} The populated <code>FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner();

            if (data.hasOwnProperty('carrierCode')) {
                obj['carrierCode'] = ApiClient.convertToType(data['carrierCode'], 'String');
            }
            if (data.hasOwnProperty('shipVia')) {
                obj['shipVia'] = ApiClient.convertToType(data['shipVia'], 'String');
            }
            if (data.hasOwnProperty('carrierMode')) {
                obj['carrierMode'] = ApiClient.convertToType(data['carrierMode'], 'String');
            }
            if (data.hasOwnProperty('estimatedFreightCharge')) {
                obj['estimatedFreightCharge'] = ApiClient.convertToType(data['estimatedFreightCharge'], 'Number');
            }
            if (data.hasOwnProperty('daysInTransit')) {
                obj['daysInTransit'] = ApiClient.convertToType(data['daysInTransit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['carrierCode'] && !(typeof data['carrierCode'] === 'string' || data['carrierCode'] instanceof String)) {
            throw new Error("Expected the field `carrierCode` to be a primitive type in the JSON string but got " + data['carrierCode']);
        }
        // ensure the json data is a string
        if (data['shipVia'] && !(typeof data['shipVia'] === 'string' || data['shipVia'] instanceof String)) {
            throw new Error("Expected the field `shipVia` to be a primitive type in the JSON string but got " + data['shipVia']);
        }
        // ensure the json data is a string
        if (data['carrierMode'] && !(typeof data['carrierMode'] === 'string' || data['carrierMode'] instanceof String)) {
            throw new Error("Expected the field `carrierMode` to be a primitive type in the JSON string but got " + data['carrierMode']);
        }

        return true;
    }


}



/**
 * The code for the shipping carrier for the line item.
 * @member {String} carrierCode
 */
FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.prototype['carrierCode'] = undefined;

/**
 * The name of the shipping carrier.
 * @member {String} shipVia
 */
FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.prototype['shipVia'] = undefined;

/**
 * Mode of the carrier.
 * @member {String} carrierMode
 */
FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.prototype['carrierMode'] = undefined;

/**
 * Estimated freight charge.
 * @member {Number} estimatedFreightCharge
 */
FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.prototype['estimatedFreightCharge'] = undefined;

/**
 * Number of transit days.
 * @member {Number} daysInTransit
 */
FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.prototype['daysInTransit'] = undefined;






export default FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner;

