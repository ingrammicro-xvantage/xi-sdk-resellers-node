/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
import InvoiceDetailsv61ResponseBillToInfo from './InvoiceDetailsv61ResponseBillToInfo';
import InvoiceDetailsv61ResponseFxRateInfo from './InvoiceDetailsv61ResponseFxRateInfo';
import InvoiceDetailsv61ResponseLinesInner from './InvoiceDetailsv61ResponseLinesInner';
import InvoiceDetailsv61ResponsePaymentTermsInfo from './InvoiceDetailsv61ResponsePaymentTermsInfo';
import InvoiceDetailsv61ResponseShipToInfo from './InvoiceDetailsv61ResponseShipToInfo';
import InvoiceDetailsv61ResponseSummary from './InvoiceDetailsv61ResponseSummary';

/**
 * The InvoiceDetailsv61Response model module.
 * @module model/InvoiceDetailsv61Response
 * @version 1.0.0
 */
class InvoiceDetailsv61Response {
    /**
     * Constructs a new <code>InvoiceDetailsv61Response</code>.
     * @alias module:model/InvoiceDetailsv61Response
     */
    constructor() { 
        
        InvoiceDetailsv61Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61Response} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61Response} The populated <code>InvoiceDetailsv61Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61Response();

            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('invoiceStatus')) {
                obj['invoiceStatus'] = ApiClient.convertToType(data['invoiceStatus'], 'String');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('endCustomerOrderNumber')) {
                obj['endCustomerOrderNumber'] = ApiClient.convertToType(data['endCustomerOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('orderNumber')) {
                obj['orderNumber'] = ApiClient.convertToType(data['orderNumber'], 'String');
            }
            if (data.hasOwnProperty('orderDate')) {
                obj['orderDate'] = ApiClient.convertToType(data['orderDate'], 'String');
            }
            if (data.hasOwnProperty('billToID')) {
                obj['billToID'] = ApiClient.convertToType(data['billToID'], 'String');
            }
            if (data.hasOwnProperty('invoiceType')) {
                obj['invoiceType'] = ApiClient.convertToType(data['invoiceType'], 'String');
            }
            if (data.hasOwnProperty('invoiceDueDate')) {
                obj['invoiceDueDate'] = ApiClient.convertToType(data['invoiceDueDate'], 'String');
            }
            if (data.hasOwnProperty('customerCountryCode')) {
                obj['customerCountryCode'] = ApiClient.convertToType(data['customerCountryCode'], 'String');
            }
            if (data.hasOwnProperty('customerNumber')) {
                obj['customerNumber'] = ApiClient.convertToType(data['customerNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramOrderNumber')) {
                obj['ingramOrderNumber'] = ApiClient.convertToType(data['ingramOrderNumber'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('paymentTermsInfo')) {
                obj['paymentTermsInfo'] = InvoiceDetailsv61ResponsePaymentTermsInfo.constructFromObject(data['paymentTermsInfo']);
            }
            if (data.hasOwnProperty('billToInfo')) {
                obj['billToInfo'] = InvoiceDetailsv61ResponseBillToInfo.constructFromObject(data['billToInfo']);
            }
            if (data.hasOwnProperty('shipToInfo')) {
                obj['shipToInfo'] = InvoiceDetailsv61ResponseShipToInfo.constructFromObject(data['shipToInfo']);
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [InvoiceDetailsv61ResponseLinesInner]);
            }
            if (data.hasOwnProperty('fxRateInfo')) {
                obj['fxRateInfo'] = InvoiceDetailsv61ResponseFxRateInfo.constructFromObject(data['fxRateInfo']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = InvoiceDetailsv61ResponseSummary.constructFromObject(data['summary']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
            throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
        }
        // ensure the json data is a string
        if (data['invoiceStatus'] && !(typeof data['invoiceStatus'] === 'string' || data['invoiceStatus'] instanceof String)) {
            throw new Error("Expected the field `invoiceStatus` to be a primitive type in the JSON string but got " + data['invoiceStatus']);
        }
        // ensure the json data is a string
        if (data['invoiceDate'] && !(typeof data['invoiceDate'] === 'string' || data['invoiceDate'] instanceof String)) {
            throw new Error("Expected the field `invoiceDate` to be a primitive type in the JSON string but got " + data['invoiceDate']);
        }
        // ensure the json data is a string
        if (data['customerOrderNumber'] && !(typeof data['customerOrderNumber'] === 'string' || data['customerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `customerOrderNumber` to be a primitive type in the JSON string but got " + data['customerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['endCustomerOrderNumber'] && !(typeof data['endCustomerOrderNumber'] === 'string' || data['endCustomerOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `endCustomerOrderNumber` to be a primitive type in the JSON string but got " + data['endCustomerOrderNumber']);
        }
        // ensure the json data is a string
        if (data['orderNumber'] && !(typeof data['orderNumber'] === 'string' || data['orderNumber'] instanceof String)) {
            throw new Error("Expected the field `orderNumber` to be a primitive type in the JSON string but got " + data['orderNumber']);
        }
        // ensure the json data is a string
        if (data['orderDate'] && !(typeof data['orderDate'] === 'string' || data['orderDate'] instanceof String)) {
            throw new Error("Expected the field `orderDate` to be a primitive type in the JSON string but got " + data['orderDate']);
        }
        // ensure the json data is a string
        if (data['billToID'] && !(typeof data['billToID'] === 'string' || data['billToID'] instanceof String)) {
            throw new Error("Expected the field `billToID` to be a primitive type in the JSON string but got " + data['billToID']);
        }
        // ensure the json data is a string
        if (data['invoiceType'] && !(typeof data['invoiceType'] === 'string' || data['invoiceType'] instanceof String)) {
            throw new Error("Expected the field `invoiceType` to be a primitive type in the JSON string but got " + data['invoiceType']);
        }
        // ensure the json data is a string
        if (data['invoiceDueDate'] && !(typeof data['invoiceDueDate'] === 'string' || data['invoiceDueDate'] instanceof String)) {
            throw new Error("Expected the field `invoiceDueDate` to be a primitive type in the JSON string but got " + data['invoiceDueDate']);
        }
        // ensure the json data is a string
        if (data['customerCountryCode'] && !(typeof data['customerCountryCode'] === 'string' || data['customerCountryCode'] instanceof String)) {
            throw new Error("Expected the field `customerCountryCode` to be a primitive type in the JSON string but got " + data['customerCountryCode']);
        }
        // ensure the json data is a string
        if (data['customerNumber'] && !(typeof data['customerNumber'] === 'string' || data['customerNumber'] instanceof String)) {
            throw new Error("Expected the field `customerNumber` to be a primitive type in the JSON string but got " + data['customerNumber']);
        }
        // ensure the json data is a string
        if (data['ingramOrderNumber'] && !(typeof data['ingramOrderNumber'] === 'string' || data['ingramOrderNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramOrderNumber` to be a primitive type in the JSON string but got " + data['ingramOrderNumber']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // validate the optional field `paymentTermsInfo`
        if (data['paymentTermsInfo']) { // data not null
          InvoiceDetailsv61ResponsePaymentTermsInfo.validateJSON(data['paymentTermsInfo']);
        }
        // validate the optional field `billToInfo`
        if (data['billToInfo']) { // data not null
          InvoiceDetailsv61ResponseBillToInfo.validateJSON(data['billToInfo']);
        }
        // validate the optional field `shipToInfo`
        if (data['shipToInfo']) { // data not null
          InvoiceDetailsv61ResponseShipToInfo.validateJSON(data['shipToInfo']);
        }
        if (data['lines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lines'])) {
                throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
            }
            // validate the optional field `lines` (array)
            for (const item of data['lines']) {
                InvoiceDetailsv61ResponseLinesInner.validateJSON(item);
            };
        }
        // validate the optional field `fxRateInfo`
        if (data['fxRateInfo']) { // data not null
          InvoiceDetailsv61ResponseFxRateInfo.validateJSON(data['fxRateInfo']);
        }
        // validate the optional field `summary`
        if (data['summary']) { // data not null
          InvoiceDetailsv61ResponseSummary.validateJSON(data['summary']);
        }

        return true;
    }


}



/**
 * The Invoice number for the order.
 * @member {String} invoiceNumber
 */
InvoiceDetailsv61Response.prototype['invoiceNumber'] = undefined;

/**
 * Status of the invoice.
 * @member {String} invoiceStatus
 */
InvoiceDetailsv61Response.prototype['invoiceStatus'] = undefined;

/**
 * Date of an Invoice.
 * @member {String} invoiceDate
 */
InvoiceDetailsv61Response.prototype['invoiceDate'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {String} customerOrderNumber
 */
InvoiceDetailsv61Response.prototype['customerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} endCustomerOrderNumber
 */
InvoiceDetailsv61Response.prototype['endCustomerOrderNumber'] = undefined;

/**
 * The end customer's order number for reference in their system.
 * @member {String} orderNumber
 */
InvoiceDetailsv61Response.prototype['orderNumber'] = undefined;

/**
 * The date and time in UTC format that the order was created.
 * @member {String} orderDate
 */
InvoiceDetailsv61Response.prototype['orderDate'] = undefined;

/**
 * Bill to party
 * @member {String} billToID
 */
InvoiceDetailsv61Response.prototype['billToID'] = undefined;

/**
 * Type of the Invoice
 * @member {String} invoiceType
 */
InvoiceDetailsv61Response.prototype['invoiceType'] = undefined;

/**
 * Date when the invoice is due.
 * @member {String} invoiceDueDate
 */
InvoiceDetailsv61Response.prototype['invoiceDueDate'] = undefined;

/**
 * Customer country code.
 * @member {String} customerCountryCode
 */
InvoiceDetailsv61Response.prototype['customerCountryCode'] = undefined;

/**
 * Unique customer number in Ingram's system.
 * @member {String} customerNumber
 */
InvoiceDetailsv61Response.prototype['customerNumber'] = undefined;

/**
 * The IngramMicro sales order number.
 * @member {String} ingramOrderNumber
 */
InvoiceDetailsv61Response.prototype['ingramOrderNumber'] = undefined;

/**
 * Notes for the invoice.
 * @member {String} notes
 */
InvoiceDetailsv61Response.prototype['notes'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponsePaymentTermsInfo} paymentTermsInfo
 */
InvoiceDetailsv61Response.prototype['paymentTermsInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseBillToInfo} billToInfo
 */
InvoiceDetailsv61Response.prototype['billToInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseShipToInfo} shipToInfo
 */
InvoiceDetailsv61Response.prototype['shipToInfo'] = undefined;

/**
 * @member {Array.<module:model/InvoiceDetailsv61ResponseLinesInner>} lines
 */
InvoiceDetailsv61Response.prototype['lines'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseFxRateInfo} fxRateInfo
 */
InvoiceDetailsv61Response.prototype['fxRateInfo'] = undefined;

/**
 * @member {module:model/InvoiceDetailsv61ResponseSummary} summary
 */
InvoiceDetailsv61Response.prototype['summary'] = undefined;






export default InvoiceDetailsv61Response;

