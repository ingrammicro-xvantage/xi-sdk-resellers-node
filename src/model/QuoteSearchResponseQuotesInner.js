/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import QuoteSearchResponseQuotesInnerLinks from './QuoteSearchResponseQuotesInnerLinks';

/**
 * The QuoteSearchResponseQuotesInner model module.
 * @module model/QuoteSearchResponseQuotesInner
 * @version 1.0.0
 */
class QuoteSearchResponseQuotesInner {
    /**
     * Constructs a new <code>QuoteSearchResponseQuotesInner</code>.
     * @alias module:model/QuoteSearchResponseQuotesInner
     */
    constructor() { 
        
        QuoteSearchResponseQuotesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteSearchResponseQuotesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteSearchResponseQuotesInner} obj Optional instance to populate.
     * @return {module:model/QuoteSearchResponseQuotesInner} The populated <code>QuoteSearchResponseQuotesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteSearchResponseQuotesInner();

            if (data.hasOwnProperty('quoteGuid')) {
                obj['quoteGuid'] = ApiClient.convertToType(data['quoteGuid'], 'String');
            }
            if (data.hasOwnProperty('quoteName')) {
                obj['quoteName'] = ApiClient.convertToType(data['quoteName'], 'String');
            }
            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('endUserContact')) {
                obj['endUserContact'] = ApiClient.convertToType(data['endUserContact'], 'String');
            }
            if (data.hasOwnProperty('specialBidNumber')) {
                obj['specialBidNumber'] = ApiClient.convertToType(data['specialBidNumber'], 'String');
            }
            if (data.hasOwnProperty('quoteTotal')) {
                obj['quoteTotal'] = ApiClient.convertToType(data['quoteTotal'], 'Number');
            }
            if (data.hasOwnProperty('quoteStatus')) {
                obj['quoteStatus'] = ApiClient.convertToType(data['quoteStatus'], 'String');
            }
            if (data.hasOwnProperty('ingramQuoteDate')) {
                obj['ingramQuoteDate'] = ApiClient.convertToType(data['ingramQuoteDate'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('ingramQuoteExpiryDate')) {
                obj['ingramQuoteExpiryDate'] = ApiClient.convertToType(data['ingramQuoteExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('endUserName')) {
                obj['endUserName'] = ApiClient.convertToType(data['endUserName'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('quoteType')) {
                obj['quoteType'] = ApiClient.convertToType(data['quoteType'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = QuoteSearchResponseQuotesInnerLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteSearchResponseQuotesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteSearchResponseQuotesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['quoteGuid'] && !(typeof data['quoteGuid'] === 'string' || data['quoteGuid'] instanceof String)) {
            throw new Error("Expected the field `quoteGuid` to be a primitive type in the JSON string but got " + data['quoteGuid']);
        }
        // ensure the json data is a string
        if (data['quoteName'] && !(typeof data['quoteName'] === 'string' || data['quoteName'] instanceof String)) {
            throw new Error("Expected the field `quoteName` to be a primitive type in the JSON string but got " + data['quoteName']);
        }
        // ensure the json data is a string
        if (data['quoteNumber'] && !(typeof data['quoteNumber'] === 'string' || data['quoteNumber'] instanceof String)) {
            throw new Error("Expected the field `quoteNumber` to be a primitive type in the JSON string but got " + data['quoteNumber']);
        }
        // ensure the json data is a string
        if (data['revision'] && !(typeof data['revision'] === 'string' || data['revision'] instanceof String)) {
            throw new Error("Expected the field `revision` to be a primitive type in the JSON string but got " + data['revision']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['endUserContact'] && !(typeof data['endUserContact'] === 'string' || data['endUserContact'] instanceof String)) {
            throw new Error("Expected the field `endUserContact` to be a primitive type in the JSON string but got " + data['endUserContact']);
        }
        // ensure the json data is a string
        if (data['specialBidNumber'] && !(typeof data['specialBidNumber'] === 'string' || data['specialBidNumber'] instanceof String)) {
            throw new Error("Expected the field `specialBidNumber` to be a primitive type in the JSON string but got " + data['specialBidNumber']);
        }
        // ensure the json data is a string
        if (data['quoteStatus'] && !(typeof data['quoteStatus'] === 'string' || data['quoteStatus'] instanceof String)) {
            throw new Error("Expected the field `quoteStatus` to be a primitive type in the JSON string but got " + data['quoteStatus']);
        }
        // ensure the json data is a string
        if (data['ingramQuoteDate'] && !(typeof data['ingramQuoteDate'] === 'string' || data['ingramQuoteDate'] instanceof String)) {
            throw new Error("Expected the field `ingramQuoteDate` to be a primitive type in the JSON string but got " + data['ingramQuoteDate']);
        }
        // ensure the json data is a string
        if (data['lastModifiedDate'] && !(typeof data['lastModifiedDate'] === 'string' || data['lastModifiedDate'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedDate` to be a primitive type in the JSON string but got " + data['lastModifiedDate']);
        }
        // ensure the json data is a string
        if (data['ingramQuoteExpiryDate'] && !(typeof data['ingramQuoteExpiryDate'] === 'string' || data['ingramQuoteExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `ingramQuoteExpiryDate` to be a primitive type in the JSON string but got " + data['ingramQuoteExpiryDate']);
        }
        // ensure the json data is a string
        if (data['endUserName'] && !(typeof data['endUserName'] === 'string' || data['endUserName'] instanceof String)) {
            throw new Error("Expected the field `endUserName` to be a primitive type in the JSON string but got " + data['endUserName']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }
        // ensure the json data is a string
        if (data['createdBy'] && !(typeof data['createdBy'] === 'string' || data['createdBy'] instanceof String)) {
            throw new Error("Expected the field `createdBy` to be a primitive type in the JSON string but got " + data['createdBy']);
        }
        // ensure the json data is a string
        if (data['quoteType'] && !(typeof data['quoteType'] === 'string' || data['quoteType'] instanceof String)) {
            throw new Error("Expected the field `quoteType` to be a primitive type in the JSON string but got " + data['quoteType']);
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          QuoteSearchResponseQuotesInnerLinks.validateJSON(data['links']);
        }

        return true;
    }


}



/**
 * @member {String} quoteGuid
 */
QuoteSearchResponseQuotesInner.prototype['quoteGuid'] = undefined;

/**
 * Quote Name given to quote by sales team or system generated.  Generally used as a reference to identify the quote.
 * @member {String} quoteName
 */
QuoteSearchResponseQuotesInner.prototype['quoteName'] = undefined;

/**
 * Unique identifier generated by Ingram Micros CRM specific to each quote.  When applying a filter to the quoteNumber and including a partial quote number in the filter, all quotes containing any information included in the filter can be retrieved as a subset of all available customer quotes.
 * @member {String} quoteNumber
 */
QuoteSearchResponseQuotesInner.prototype['quoteNumber'] = undefined;

/**
 * When a quote has been revised and updated, the quote number remains the same throughout the lifecycle of the quote, however, a Revision number is updated for each revision of the quote.  The revision numbers is associated with the Unique Quote Number.
 * @member {String} revision
 */
QuoteSearchResponseQuotesInner.prototype['revision'] = undefined;

/**
 * The country-specific three digit ISO 4217 currency code for the order.
 * @member {String} currencyCode
 */
QuoteSearchResponseQuotesInner.prototype['currencyCode'] = undefined;

/**
 * End User Name is the end customer name that is associated with a quote in Ingram Micros CRM.
 * @member {String} endUserContact
 */
QuoteSearchResponseQuotesInner.prototype['endUserContact'] = undefined;

/**
 * Special Pricing Bid Number, also refers to as Dart Number relates to a unique pricing deal associated with a vendor for the quote.
 * @member {String} specialBidNumber
 */
QuoteSearchResponseQuotesInner.prototype['specialBidNumber'] = undefined;

/**
 * Total amount of quoted price for all products in the quote.
 * @member {Number} quoteTotal
 */
QuoteSearchResponseQuotesInner.prototype['quoteTotal'] = undefined;

/**
 * This refers to the primary status of the quote.
 * @member {String} quoteStatus
 */
QuoteSearchResponseQuotesInner.prototype['quoteStatus'] = undefined;

/**
 * Date the Quote was initially Created.
 * @member {String} ingramQuoteDate
 */
QuoteSearchResponseQuotesInner.prototype['ingramQuoteDate'] = undefined;

/**
 * Date the Quote was last updated or modified.
 * @member {String} lastModifiedDate
 */
QuoteSearchResponseQuotesInner.prototype['lastModifiedDate'] = undefined;

/**
 * Date when the Quote Expires.
 * @member {String} ingramQuoteExpiryDate
 */
QuoteSearchResponseQuotesInner.prototype['ingramQuoteExpiryDate'] = undefined;

/**
 * End User Name
 * @member {String} endUserName
 */
QuoteSearchResponseQuotesInner.prototype['endUserName'] = undefined;

/**
 * Name of the vendor.
 * @member {String} vendor
 */
QuoteSearchResponseQuotesInner.prototype['vendor'] = undefined;

/**
 * Name of the end user/customer who created a quote.
 * @member {String} createdBy
 */
QuoteSearchResponseQuotesInner.prototype['createdBy'] = undefined;

/**
 * Type of quote
 * @member {String} quoteType
 */
QuoteSearchResponseQuotesInner.prototype['quoteType'] = undefined;

/**
 * @member {module:model/QuoteSearchResponseQuotesInnerLinks} links
 */
QuoteSearchResponseQuotesInner.prototype['links'] = undefined;






export default QuoteSearchResponseQuotesInner;

