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
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser';
import QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes from './QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes';
import QuoteProductList from './QuoteProductList';

/**
 * The QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse model module.
 * @module model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse
 * @version 6.0
 */
class QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse {
    /**
     * Constructs a new <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
     * @alias module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse
     */
    constructor() { 
        
        QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse} obj Optional instance to populate.
     * @return {module:model/QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse} The populated <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse();

            if (data.hasOwnProperty('quoteGuid')) {
                obj['quoteGuid'] = ApiClient.convertToType(data['quoteGuid'], 'String');
            }
            if (data.hasOwnProperty('quoteName')) {
                obj['quoteName'] = ApiClient.convertToType(data['quoteName'], 'String');
            }
            if (data.hasOwnProperty('quoteNumber')) {
                obj['quoteNumber'] = ApiClient.convertToType(data['quoteNumber'], 'String');
            }
            if (data.hasOwnProperty('quoteExpiryDate')) {
                obj['quoteExpiryDate'] = ApiClient.convertToType(data['quoteExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('revisionNumber')) {
                obj['revisionNumber'] = ApiClient.convertToType(data['revisionNumber'], 'String');
            }
            if (data.hasOwnProperty('introPreamble')) {
                obj['introPreamble'] = ApiClient.convertToType(data['introPreamble'], 'String');
            }
            if (data.hasOwnProperty('purchaseInstructions')) {
                obj['purchaseInstructions'] = ApiClient.convertToType(data['purchaseInstructions'], 'String');
            }
            if (data.hasOwnProperty('legalTerms')) {
                obj['legalTerms'] = ApiClient.convertToType(data['legalTerms'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('priceDeviationId')) {
                obj['priceDeviationId'] = ApiClient.convertToType(data['priceDeviationId'], 'String');
            }
            if (data.hasOwnProperty('priceDeviationStartDate')) {
                obj['priceDeviationStartDate'] = ApiClient.convertToType(data['priceDeviationStartDate'], 'String');
            }
            if (data.hasOwnProperty('priceDeviationExpiryDate')) {
                obj['priceDeviationExpiryDate'] = ApiClient.convertToType(data['priceDeviationExpiryDate'], 'String');
            }
            if (data.hasOwnProperty('customerNeed')) {
                obj['customerNeed'] = ApiClient.convertToType(data['customerNeed'], 'String');
            }
            if (data.hasOwnProperty('solutionProposed')) {
                obj['solutionProposed'] = ApiClient.convertToType(data['solutionProposed'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
            }
            if (data.hasOwnProperty('leasingCalculations')) {
                obj['leasingCalculations'] = ApiClient.convertToType(data['leasingCalculations'], 'String');
            }
            if (data.hasOwnProperty('leasingInstructions')) {
                obj['leasingInstructions'] = ApiClient.convertToType(data['leasingInstructions'], 'String');
            }
            if (data.hasOwnProperty('accountInfo')) {
                obj['accountInfo'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.constructFromObject(data['accountInfo']);
            }
            if (data.hasOwnProperty('contactInfo')) {
                obj['contactInfo'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo.constructFromObject(data['contactInfo']);
            }
            if (data.hasOwnProperty('vendorAttributes')) {
                obj['vendorAttributes'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.constructFromObject(data['vendorAttributes']);
            }
            if (data.hasOwnProperty('endUser')) {
                obj['endUser'] = QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.constructFromObject(data['endUser']);
            }
            if (data.hasOwnProperty('quoteProductList')) {
                obj['quoteProductList'] = ApiClient.convertToType(data['quoteProductList'], [QuoteProductList]);
            }
            if (data.hasOwnProperty('totalQuoteProductCount')) {
                obj['totalQuoteProductCount'] = ApiClient.convertToType(data['totalQuoteProductCount'], 'String');
            }
            if (data.hasOwnProperty('totalExtendedMsrp')) {
                obj['totalExtendedMsrp'] = ApiClient.convertToType(data['totalExtendedMsrp'], 'String');
            }
            if (data.hasOwnProperty('totalQuantity')) {
                obj['totalQuantity'] = ApiClient.convertToType(data['totalQuantity'], 'String');
            }
            if (data.hasOwnProperty('totalExtendedQuotePrice')) {
                obj['totalExtendedQuotePrice'] = ApiClient.convertToType(data['totalExtendedQuotePrice'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse</code>.
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
        if (data['quoteExpiryDate'] && !(typeof data['quoteExpiryDate'] === 'string' || data['quoteExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `quoteExpiryDate` to be a primitive type in the JSON string but got " + data['quoteExpiryDate']);
        }
        // ensure the json data is a string
        if (data['revisionNumber'] && !(typeof data['revisionNumber'] === 'string' || data['revisionNumber'] instanceof String)) {
            throw new Error("Expected the field `revisionNumber` to be a primitive type in the JSON string but got " + data['revisionNumber']);
        }
        // ensure the json data is a string
        if (data['introPreamble'] && !(typeof data['introPreamble'] === 'string' || data['introPreamble'] instanceof String)) {
            throw new Error("Expected the field `introPreamble` to be a primitive type in the JSON string but got " + data['introPreamble']);
        }
        // ensure the json data is a string
        if (data['purchaseInstructions'] && !(typeof data['purchaseInstructions'] === 'string' || data['purchaseInstructions'] instanceof String)) {
            throw new Error("Expected the field `purchaseInstructions` to be a primitive type in the JSON string but got " + data['purchaseInstructions']);
        }
        // ensure the json data is a string
        if (data['legalTerms'] && !(typeof data['legalTerms'] === 'string' || data['legalTerms'] instanceof String)) {
            throw new Error("Expected the field `legalTerms` to be a primitive type in the JSON string but got " + data['legalTerms']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        // ensure the json data is a string
        if (data['priceDeviationId'] && !(typeof data['priceDeviationId'] === 'string' || data['priceDeviationId'] instanceof String)) {
            throw new Error("Expected the field `priceDeviationId` to be a primitive type in the JSON string but got " + data['priceDeviationId']);
        }
        // ensure the json data is a string
        if (data['priceDeviationStartDate'] && !(typeof data['priceDeviationStartDate'] === 'string' || data['priceDeviationStartDate'] instanceof String)) {
            throw new Error("Expected the field `priceDeviationStartDate` to be a primitive type in the JSON string but got " + data['priceDeviationStartDate']);
        }
        // ensure the json data is a string
        if (data['priceDeviationExpiryDate'] && !(typeof data['priceDeviationExpiryDate'] === 'string' || data['priceDeviationExpiryDate'] instanceof String)) {
            throw new Error("Expected the field `priceDeviationExpiryDate` to be a primitive type in the JSON string but got " + data['priceDeviationExpiryDate']);
        }
        // ensure the json data is a string
        if (data['customerNeed'] && !(typeof data['customerNeed'] === 'string' || data['customerNeed'] instanceof String)) {
            throw new Error("Expected the field `customerNeed` to be a primitive type in the JSON string but got " + data['customerNeed']);
        }
        // ensure the json data is a string
        if (data['solutionProposed'] && !(typeof data['solutionProposed'] === 'string' || data['solutionProposed'] instanceof String)) {
            throw new Error("Expected the field `solutionProposed` to be a primitive type in the JSON string but got " + data['solutionProposed']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
            throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
        }
        // ensure the json data is a string
        if (data['modified'] && !(typeof data['modified'] === 'string' || data['modified'] instanceof String)) {
            throw new Error("Expected the field `modified` to be a primitive type in the JSON string but got " + data['modified']);
        }
        // ensure the json data is a string
        if (data['leasingCalculations'] && !(typeof data['leasingCalculations'] === 'string' || data['leasingCalculations'] instanceof String)) {
            throw new Error("Expected the field `leasingCalculations` to be a primitive type in the JSON string but got " + data['leasingCalculations']);
        }
        // ensure the json data is a string
        if (data['leasingInstructions'] && !(typeof data['leasingInstructions'] === 'string' || data['leasingInstructions'] instanceof String)) {
            throw new Error("Expected the field `leasingInstructions` to be a primitive type in the JSON string but got " + data['leasingInstructions']);
        }
        // validate the optional field `accountInfo`
        if (data['accountInfo']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo.validateJSON(data['accountInfo']);
        }
        // validate the optional field `contactInfo`
        if (data['contactInfo']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo.validateJSON(data['contactInfo']);
        }
        // validate the optional field `vendorAttributes`
        if (data['vendorAttributes']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes.validateJSON(data['vendorAttributes']);
        }
        // validate the optional field `endUser`
        if (data['endUser']) { // data not null
          QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser.validateJSON(data['endUser']);
        }
        if (data['quoteProductList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['quoteProductList'])) {
                throw new Error("Expected the field `quoteProductList` to be an array in the JSON data but got " + data['quoteProductList']);
            }
            // validate the optional field `quoteProductList` (array)
            for (const item of data['quoteProductList']) {
                QuoteProductList.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['totalQuoteProductCount'] && !(typeof data['totalQuoteProductCount'] === 'string' || data['totalQuoteProductCount'] instanceof String)) {
            throw new Error("Expected the field `totalQuoteProductCount` to be a primitive type in the JSON string but got " + data['totalQuoteProductCount']);
        }
        // ensure the json data is a string
        if (data['totalExtendedMsrp'] && !(typeof data['totalExtendedMsrp'] === 'string' || data['totalExtendedMsrp'] instanceof String)) {
            throw new Error("Expected the field `totalExtendedMsrp` to be a primitive type in the JSON string but got " + data['totalExtendedMsrp']);
        }
        // ensure the json data is a string
        if (data['totalQuantity'] && !(typeof data['totalQuantity'] === 'string' || data['totalQuantity'] instanceof String)) {
            throw new Error("Expected the field `totalQuantity` to be a primitive type in the JSON string but got " + data['totalQuantity']);
        }
        // ensure the json data is a string
        if (data['totalExtendedQuotePrice'] && !(typeof data['totalExtendedQuotePrice'] === 'string' || data['totalExtendedQuotePrice'] instanceof String)) {
            throw new Error("Expected the field `totalExtendedQuotePrice` to be a primitive type in the JSON string but got " + data['totalExtendedQuotePrice']);
        }

        return true;
    }


}



/**
 * @member {String} quoteGuid
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteGuid'] = undefined;

/**
 * @member {String} quoteName
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteName'] = undefined;

/**
 * @member {String} quoteNumber
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteNumber'] = undefined;

/**
 * @member {String} quoteExpiryDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteExpiryDate'] = undefined;

/**
 * @member {String} revisionNumber
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['revisionNumber'] = undefined;

/**
 * @member {String} introPreamble
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['introPreamble'] = undefined;

/**
 * @member {String} purchaseInstructions
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['purchaseInstructions'] = undefined;

/**
 * @member {String} legalTerms
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['legalTerms'] = undefined;

/**
 * @member {String} currencyCode
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['currencyCode'] = undefined;

/**
 * @member {String} priceDeviationId
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationId'] = undefined;

/**
 * @member {String} priceDeviationStartDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationStartDate'] = undefined;

/**
 * @member {String} priceDeviationExpiryDate
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['priceDeviationExpiryDate'] = undefined;

/**
 * @member {String} customerNeed
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['customerNeed'] = undefined;

/**
 * @member {String} solutionProposed
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['solutionProposed'] = undefined;

/**
 * @member {String} status
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['status'] = undefined;

/**
 * @member {String} created
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['created'] = undefined;

/**
 * @member {String} modified
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['modified'] = undefined;

/**
 * @member {String} leasingCalculations
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingCalculations'] = undefined;

/**
 * @member {String} leasingInstructions
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['leasingInstructions'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseAccountInfo} accountInfo
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['accountInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseContactInfo} contactInfo
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['contactInfo'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseVendorAttributes} vendorAttributes
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['vendorAttributes'] = undefined;

/**
 * @member {module:model/QuoteDetailsQuoteDetailResponseRetrieveQuoteResponseEndUser} endUser
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['endUser'] = undefined;

/**
 * @member {Array.<module:model/QuoteProductList>} quoteProductList
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['quoteProductList'] = undefined;

/**
 * @member {String} totalQuoteProductCount
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalQuoteProductCount'] = undefined;

/**
 * @member {String} totalExtendedMsrp
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalExtendedMsrp'] = undefined;

/**
 * @member {String} totalQuantity
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalQuantity'] = undefined;

/**
 * @member {String} totalExtendedQuotePrice
 */
QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse.prototype['totalExtendedQuotePrice'] = undefined;






export default QuoteDetailsResponseQuoteDetailResponseRetrieveQuoteResponse;

