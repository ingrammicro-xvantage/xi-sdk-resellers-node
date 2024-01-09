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

/**
 * The InvoiceDetailResponseServiceresponseInvoicedetailresponse model module.
 * @module model/InvoiceDetailResponseServiceresponseInvoicedetailresponse
 * @version 6.0
 */
class InvoiceDetailResponseServiceresponseInvoicedetailresponse {
    /**
     * Constructs a new <code>InvoiceDetailResponseServiceresponseInvoicedetailresponse</code>.
     * @alias module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponse
     */
    constructor() { 
        
        InvoiceDetailResponseServiceresponseInvoicedetailresponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailResponseServiceresponseInvoicedetailresponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponse} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponse} The populated <code>InvoiceDetailResponseServiceresponseInvoicedetailresponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailResponseServiceresponseInvoicedetailresponse();

            if (data.hasOwnProperty('customernumber')) {
                obj['customernumber'] = ApiClient.convertToType(data['customernumber'], 'String');
            }
            if (data.hasOwnProperty('invoicenumber')) {
                obj['invoicenumber'] = ApiClient.convertToType(data['invoicenumber'], 'String');
            }
            if (data.hasOwnProperty('invoicedate')) {
                obj['invoicedate'] = ApiClient.convertToType(data['invoicedate'], 'Date');
            }
            if (data.hasOwnProperty('invoicetype')) {
                obj['invoicetype'] = ApiClient.convertToType(data['invoicetype'], 'String');
            }
            if (data.hasOwnProperty('customerordernumber')) {
                obj['customerordernumber'] = ApiClient.convertToType(data['customerordernumber'], 'String');
            }
            if (data.hasOwnProperty('customerfreightamount')) {
                obj['customerfreightamount'] = ApiClient.convertToType(data['customerfreightamount'], 'Number');
            }
            if (data.hasOwnProperty('customerforeignfrightamt')) {
                obj['customerforeignfrightamt'] = ApiClient.convertToType(data['customerforeignfrightamt'], 'Number');
            }
            if (data.hasOwnProperty('totaltaxamount')) {
                obj['totaltaxamount'] = ApiClient.convertToType(data['totaltaxamount'], 'Number');
            }
            if (data.hasOwnProperty('totalamount')) {
                obj['totalamount'] = ApiClient.convertToType(data['totalamount'], 'Number');
            }
            if (data.hasOwnProperty('shiptosuffix')) {
                obj['shiptosuffix'] = ApiClient.convertToType(data['shiptosuffix'], 'String');
            }
            if (data.hasOwnProperty('billtosuffix')) {
                obj['billtosuffix'] = ApiClient.convertToType(data['billtosuffix'], 'String');
            }
            if (data.hasOwnProperty('freightamount')) {
                obj['freightamount'] = ApiClient.convertToType(data['freightamount'], 'Number');
            }
            if (data.hasOwnProperty('paymentterms')) {
                obj['paymentterms'] = ApiClient.convertToType(data['paymentterms'], 'String');
            }
            if (data.hasOwnProperty('orderdate')) {
                obj['orderdate'] = ApiClient.convertToType(data['orderdate'], 'String');
            }
            if (data.hasOwnProperty('carrier')) {
                obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
            }
            if (data.hasOwnProperty('carrierdescription')) {
                obj['carrierdescription'] = ApiClient.convertToType(data['carrierdescription'], 'String');
            }
            if (data.hasOwnProperty('discountamount')) {
                obj['discountamount'] = ApiClient.convertToType(data['discountamount'], 'Number');
            }
            if (data.hasOwnProperty('taxtype')) {
                obj['taxtype'] = ApiClient.convertToType(data['taxtype'], 'String');
            }
            if (data.hasOwnProperty('enduserponumber')) {
                obj['enduserponumber'] = ApiClient.convertToType(data['enduserponumber'], 'String');
            }
            if (data.hasOwnProperty('freightforwardercode')) {
                obj['freightforwardercode'] = ApiClient.convertToType(data['freightforwardercode'], 'String');
            }
            if (data.hasOwnProperty('creditmemoreasoncode')) {
                obj['creditmemoreasoncode'] = ApiClient.convertToType(data['creditmemoreasoncode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailResponseServiceresponseInvoicedetailresponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailResponseServiceresponseInvoicedetailresponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customernumber'] && !(typeof data['customernumber'] === 'string' || data['customernumber'] instanceof String)) {
            throw new Error("Expected the field `customernumber` to be a primitive type in the JSON string but got " + data['customernumber']);
        }
        // ensure the json data is a string
        if (data['invoicenumber'] && !(typeof data['invoicenumber'] === 'string' || data['invoicenumber'] instanceof String)) {
            throw new Error("Expected the field `invoicenumber` to be a primitive type in the JSON string but got " + data['invoicenumber']);
        }
        // ensure the json data is a string
        if (data['invoicetype'] && !(typeof data['invoicetype'] === 'string' || data['invoicetype'] instanceof String)) {
            throw new Error("Expected the field `invoicetype` to be a primitive type in the JSON string but got " + data['invoicetype']);
        }
        // ensure the json data is a string
        if (data['customerordernumber'] && !(typeof data['customerordernumber'] === 'string' || data['customerordernumber'] instanceof String)) {
            throw new Error("Expected the field `customerordernumber` to be a primitive type in the JSON string but got " + data['customerordernumber']);
        }
        // ensure the json data is a string
        if (data['shiptosuffix'] && !(typeof data['shiptosuffix'] === 'string' || data['shiptosuffix'] instanceof String)) {
            throw new Error("Expected the field `shiptosuffix` to be a primitive type in the JSON string but got " + data['shiptosuffix']);
        }
        // ensure the json data is a string
        if (data['billtosuffix'] && !(typeof data['billtosuffix'] === 'string' || data['billtosuffix'] instanceof String)) {
            throw new Error("Expected the field `billtosuffix` to be a primitive type in the JSON string but got " + data['billtosuffix']);
        }
        // ensure the json data is a string
        if (data['paymentterms'] && !(typeof data['paymentterms'] === 'string' || data['paymentterms'] instanceof String)) {
            throw new Error("Expected the field `paymentterms` to be a primitive type in the JSON string but got " + data['paymentterms']);
        }
        // ensure the json data is a string
        if (data['orderdate'] && !(typeof data['orderdate'] === 'string' || data['orderdate'] instanceof String)) {
            throw new Error("Expected the field `orderdate` to be a primitive type in the JSON string but got " + data['orderdate']);
        }
        // ensure the json data is a string
        if (data['carrier'] && !(typeof data['carrier'] === 'string' || data['carrier'] instanceof String)) {
            throw new Error("Expected the field `carrier` to be a primitive type in the JSON string but got " + data['carrier']);
        }
        // ensure the json data is a string
        if (data['carrierdescription'] && !(typeof data['carrierdescription'] === 'string' || data['carrierdescription'] instanceof String)) {
            throw new Error("Expected the field `carrierdescription` to be a primitive type in the JSON string but got " + data['carrierdescription']);
        }
        // ensure the json data is a string
        if (data['taxtype'] && !(typeof data['taxtype'] === 'string' || data['taxtype'] instanceof String)) {
            throw new Error("Expected the field `taxtype` to be a primitive type in the JSON string but got " + data['taxtype']);
        }
        // ensure the json data is a string
        if (data['enduserponumber'] && !(typeof data['enduserponumber'] === 'string' || data['enduserponumber'] instanceof String)) {
            throw new Error("Expected the field `enduserponumber` to be a primitive type in the JSON string but got " + data['enduserponumber']);
        }
        // ensure the json data is a string
        if (data['freightforwardercode'] && !(typeof data['freightforwardercode'] === 'string' || data['freightforwardercode'] instanceof String)) {
            throw new Error("Expected the field `freightforwardercode` to be a primitive type in the JSON string but got " + data['freightforwardercode']);
        }
        // ensure the json data is a string
        if (data['creditmemoreasoncode'] && !(typeof data['creditmemoreasoncode'] === 'string' || data['creditmemoreasoncode'] instanceof String)) {
            throw new Error("Expected the field `creditmemoreasoncode` to be a primitive type in the JSON string but got " + data['creditmemoreasoncode']);
        }

        return true;
    }


}



/**
 * @member {String} customernumber
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['customernumber'] = undefined;

/**
 * @member {String} invoicenumber
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['invoicenumber'] = undefined;

/**
 * @member {Date} invoicedate
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['invoicedate'] = undefined;

/**
 * @member {String} invoicetype
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['invoicetype'] = undefined;

/**
 * @member {String} customerordernumber
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['customerordernumber'] = undefined;

/**
 * @member {Number} customerfreightamount
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['customerfreightamount'] = undefined;

/**
 * @member {Number} customerforeignfrightamt
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['customerforeignfrightamt'] = undefined;

/**
 * @member {Number} totaltaxamount
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['totaltaxamount'] = undefined;

/**
 * @member {Number} totalamount
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['totalamount'] = undefined;

/**
 * @member {String} shiptosuffix
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['shiptosuffix'] = undefined;

/**
 * @member {String} billtosuffix
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['billtosuffix'] = undefined;

/**
 * @member {Number} freightamount
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['freightamount'] = undefined;

/**
 * @member {String} paymentterms
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['paymentterms'] = undefined;

/**
 * @member {String} orderdate
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['orderdate'] = undefined;

/**
 * @member {String} carrier
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['carrier'] = undefined;

/**
 * @member {String} carrierdescription
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['carrierdescription'] = undefined;

/**
 * @member {Number} discountamount
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['discountamount'] = undefined;

/**
 * @member {String} taxtype
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['taxtype'] = undefined;

/**
 * @member {String} enduserponumber
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['enduserponumber'] = undefined;

/**
 * @member {String} freightforwardercode
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['freightforwardercode'] = undefined;

/**
 * @member {String} creditmemoreasoncode
 */
InvoiceDetailResponseServiceresponseInvoicedetailresponse.prototype['creditmemoreasoncode'] = undefined;






export default InvoiceDetailResponseServiceresponseInvoicedetailresponse;
