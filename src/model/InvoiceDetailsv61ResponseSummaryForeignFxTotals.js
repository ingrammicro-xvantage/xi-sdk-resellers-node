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

/**
 * The InvoiceDetailsv61ResponseSummaryForeignFxTotals model module.
 * @module model/InvoiceDetailsv61ResponseSummaryForeignFxTotals
 * @version 1.0.0
 */
class InvoiceDetailsv61ResponseSummaryForeignFxTotals {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
     * @alias module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseSummaryForeignFxTotals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseSummaryForeignFxTotals} The populated <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseSummaryForeignFxTotals();

            if (data.hasOwnProperty('foreignCurrencyCode')) {
                obj['foreignCurrencyCode'] = ApiClient.convertToType(data['foreignCurrencyCode'], 'String');
            }
            if (data.hasOwnProperty('foreignCurrencyFxRate')) {
                obj['foreignCurrencyFxRate'] = ApiClient.convertToType(data['foreignCurrencyFxRate'], 'Number');
            }
            if (data.hasOwnProperty('foreignTotalTaxableAmount')) {
                obj['foreignTotalTaxableAmount'] = ApiClient.convertToType(data['foreignTotalTaxableAmount'], 'String');
            }
            if (data.hasOwnProperty('foreignTotalTaxAmount')) {
                obj['foreignTotalTaxAmount'] = ApiClient.convertToType(data['foreignTotalTaxAmount'], 'Number');
            }
            if (data.hasOwnProperty('foreignInvoiceAmountDue')) {
                obj['foreignInvoiceAmountDue'] = ApiClient.convertToType(data['foreignInvoiceAmountDue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseSummaryForeignFxTotals</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['foreignCurrencyCode'] && !(typeof data['foreignCurrencyCode'] === 'string' || data['foreignCurrencyCode'] instanceof String)) {
            throw new Error("Expected the field `foreignCurrencyCode` to be a primitive type in the JSON string but got " + data['foreignCurrencyCode']);
        }
        // ensure the json data is a string
        if (data['foreignTotalTaxableAmount'] && !(typeof data['foreignTotalTaxableAmount'] === 'string' || data['foreignTotalTaxableAmount'] instanceof String)) {
            throw new Error("Expected the field `foreignTotalTaxableAmount` to be a primitive type in the JSON string but got " + data['foreignTotalTaxableAmount']);
        }
        // ensure the json data is a string
        if (data['foreignInvoiceAmountDue'] && !(typeof data['foreignInvoiceAmountDue'] === 'string' || data['foreignInvoiceAmountDue'] instanceof String)) {
            throw new Error("Expected the field `foreignInvoiceAmountDue` to be a primitive type in the JSON string but got " + data['foreignInvoiceAmountDue']);
        }

        return true;
    }


}



/**
 * Foreign Currency Code.
 * @member {String} foreignCurrencyCode
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignCurrencyCode'] = undefined;

/**
 * Foreign rate.
 * @member {Number} foreignCurrencyFxRate
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignCurrencyFxRate'] = undefined;

/**
 * Foreign amount.
 * @member {String} foreignTotalTaxableAmount
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignTotalTaxableAmount'] = undefined;

/**
 * Foreign amount.
 * @member {Number} foreignTotalTaxAmount
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignTotalTaxAmount'] = undefined;

/**
 * Foreign due.
 * @member {String} foreignInvoiceAmountDue
 */
InvoiceDetailsv61ResponseSummaryForeignFxTotals.prototype['foreignInvoiceAmountDue'] = undefined;






export default InvoiceDetailsv61ResponseSummaryForeignFxTotals;

