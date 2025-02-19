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
import ValidateQuoteResponseLinesInner from './ValidateQuoteResponseLinesInner';
import ValidateQuoteResponseVmfAdditionalAttributesInner from './ValidateQuoteResponseVmfAdditionalAttributesInner';

/**
 * The ValidateQuoteResponse model module.
 * @module model/ValidateQuoteResponse
 * @version 1.0.0
 */
class ValidateQuoteResponse {
    /**
     * Constructs a new <code>ValidateQuoteResponse</code>.
     * @alias module:model/ValidateQuoteResponse
     */
    constructor() { 
        
        ValidateQuoteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ValidateQuoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateQuoteResponse} obj Optional instance to populate.
     * @return {module:model/ValidateQuoteResponse} The populated <code>ValidateQuoteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateQuoteResponse();

            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('vmfAdditionalAttributes')) {
                obj['vmfAdditionalAttributes'] = ApiClient.convertToType(data['vmfAdditionalAttributes'], [ValidateQuoteResponseVmfAdditionalAttributesInner]);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [ValidateQuoteResponseLinesInner]);
            }
            if (data.hasOwnProperty('quoteType')) {
                obj['quoteType'] = ApiClient.convertToType(data['quoteType'], 'Number');
            }
            if (data.hasOwnProperty('vendorGroupName')) {
                obj['vendorGroupName'] = ApiClient.convertToType(data['vendorGroupName'], 'String');
            }
            if (data.hasOwnProperty('vendorQuoteNumber')) {
                obj['vendorQuoteNumber'] = ApiClient.convertToType(data['vendorQuoteNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorMasterNumber')) {
                obj['vendorMasterNumber'] = ApiClient.convertToType(data['vendorMasterNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateQuoteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateQuoteResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        if (data['vmfAdditionalAttributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['vmfAdditionalAttributes'])) {
                throw new Error("Expected the field `vmfAdditionalAttributes` to be an array in the JSON data but got " + data['vmfAdditionalAttributes']);
            }
            // validate the optional field `vmfAdditionalAttributes` (array)
            for (const item of data['vmfAdditionalAttributes']) {
                ValidateQuoteResponseVmfAdditionalAttributesInner.validateJSON(item);
            };
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                ValidateQuoteResponseLinesInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['vendorGroupName'] && !(typeof data['vendorGroupName'] === 'string' || data['vendorGroupName'] instanceof String)) {
            throw new Error("Expected the field `vendorGroupName` to be a primitive type in the JSON string but got " + data['vendorGroupName']);
        }
        // ensure the json data is a string
        if (data['vendorQuoteNumber'] && !(typeof data['vendorQuoteNumber'] === 'string' || data['vendorQuoteNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorQuoteNumber` to be a primitive type in the JSON string but got " + data['vendorQuoteNumber']);
        }
        // ensure the json data is a string
        if (data['vendorMasterNumber'] && !(typeof data['vendorMasterNumber'] === 'string' || data['vendorMasterNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorMasterNumber` to be a primitive type in the JSON string but got " + data['vendorMasterNumber']);
        }

        return true;
    }


}



/**
 * A unique identifier generated by Ingram Micro's CRM specific to each quote.
 * @member {String} quoteNumber
 */
ValidateQuoteResponse.prototype['quoteNumber'] = undefined;

/**
 * The name of the vendor.
 * @member {String} vendorName
 */
ValidateQuoteResponse.prototype['vendorName'] = undefined;

/**
 * The object containing the list of fields required at a header level by the vendor.
 * @member {Array.<module:model/ValidateQuoteResponseVmfAdditionalAttributesInner>} vmfAdditionalAttributes
 */
ValidateQuoteResponse.prototype['vmfAdditionalAttributes'] = undefined;

/**
 * The object containing the lines from the quote.
 * @member {Array.<module:model/ValidateQuoteResponseLinesInner>} lines
 */
ValidateQuoteResponse.prototype['lines'] = undefined;

/**
 * @member {Number} quoteType
 */
ValidateQuoteResponse.prototype['quoteType'] = undefined;

/**
 * @member {String} vendorGroupName
 */
ValidateQuoteResponse.prototype['vendorGroupName'] = undefined;

/**
 * @member {String} vendorQuoteNumber
 */
ValidateQuoteResponse.prototype['vendorQuoteNumber'] = undefined;

/**
 * @member {String} vendorMasterNumber
 */
ValidateQuoteResponse.prototype['vendorMasterNumber'] = undefined;






export default ValidateQuoteResponse;

