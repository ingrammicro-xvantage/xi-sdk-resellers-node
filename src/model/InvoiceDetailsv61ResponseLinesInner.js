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
import InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner from './InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner';

/**
 * The InvoiceDetailsv61ResponseLinesInner model module.
 * @module model/InvoiceDetailsv61ResponseLinesInner
 * @version 1.0.0
 */
class InvoiceDetailsv61ResponseLinesInner {
    /**
     * Constructs a new <code>InvoiceDetailsv61ResponseLinesInner</code>.
     * @alias module:model/InvoiceDetailsv61ResponseLinesInner
     */
    constructor() { 
        
        InvoiceDetailsv61ResponseLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceDetailsv61ResponseLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetailsv61ResponseLinesInner} obj Optional instance to populate.
     * @return {module:model/InvoiceDetailsv61ResponseLinesInner} The populated <code>InvoiceDetailsv61ResponseLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetailsv61ResponseLinesInner();

            if (data.hasOwnProperty('ingramLineNumber')) {
                obj['ingramLineNumber'] = ApiClient.convertToType(data['ingramLineNumber'], 'String');
            }
            if (data.hasOwnProperty('customerLineNumber')) {
                obj['customerLineNumber'] = ApiClient.convertToType(data['customerLineNumber'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('customerPartNumber')) {
                obj['customerPartNumber'] = ApiClient.convertToType(data['customerPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorName')) {
                obj['vendorName'] = ApiClient.convertToType(data['vendorName'], 'String');
            }
            if (data.hasOwnProperty('productDescription')) {
                obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
            }
            if (data.hasOwnProperty('unitWeight')) {
                obj['unitWeight'] = ApiClient.convertToType(data['unitWeight'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('unitOfMeasure')) {
                obj['unitOfMeasure'] = ApiClient.convertToType(data['unitOfMeasure'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('extendedPrice')) {
                obj['extendedPrice'] = ApiClient.convertToType(data['extendedPrice'], 'Number');
            }
            if (data.hasOwnProperty('taxPercentage')) {
                obj['taxPercentage'] = ApiClient.convertToType(data['taxPercentage'], 'Number');
            }
            if (data.hasOwnProperty('taxRate')) {
                obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'Number');
            }
            if (data.hasOwnProperty('taxAmount')) {
                obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'Number');
            }
            if (data.hasOwnProperty('serialNumbers')) {
                obj['serialNumbers'] = ApiClient.convertToType(data['serialNumbers'], [InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner]);
            }
            if (data.hasOwnProperty('quantityOrdered')) {
                obj['quantityOrdered'] = ApiClient.convertToType(data['quantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('quantityShipped')) {
                obj['quantityShipped'] = ApiClient.convertToType(data['quantityShipped'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceDetailsv61ResponseLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceDetailsv61ResponseLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
        }
        // ensure the json data is a string
        if (data['customerLineNumber'] && !(typeof data['customerLineNumber'] === 'string' || data['customerLineNumber'] instanceof String)) {
            throw new Error("Expected the field `customerLineNumber` to be a primitive type in the JSON string but got " + data['customerLineNumber']);
        }
        // ensure the json data is a string
        if (data['ingramPartNumber'] && !(typeof data['ingramPartNumber'] === 'string' || data['ingramPartNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramPartNumber` to be a primitive type in the JSON string but got " + data['ingramPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorPartNumber'] && !(typeof data['vendorPartNumber'] === 'string' || data['vendorPartNumber'] instanceof String)) {
            throw new Error("Expected the field `vendorPartNumber` to be a primitive type in the JSON string but got " + data['vendorPartNumber']);
        }
        // ensure the json data is a string
        if (data['customerPartNumber'] && !(typeof data['customerPartNumber'] === 'string' || data['customerPartNumber'] instanceof String)) {
            throw new Error("Expected the field `customerPartNumber` to be a primitive type in the JSON string but got " + data['customerPartNumber']);
        }
        // ensure the json data is a string
        if (data['vendorName'] && !(typeof data['vendorName'] === 'string' || data['vendorName'] instanceof String)) {
            throw new Error("Expected the field `vendorName` to be a primitive type in the JSON string but got " + data['vendorName']);
        }
        // ensure the json data is a string
        if (data['productDescription'] && !(typeof data['productDescription'] === 'string' || data['productDescription'] instanceof String)) {
            throw new Error("Expected the field `productDescription` to be a primitive type in the JSON string but got " + data['productDescription']);
        }
        // ensure the json data is a string
        if (data['unitOfMeasure'] && !(typeof data['unitOfMeasure'] === 'string' || data['unitOfMeasure'] instanceof String)) {
            throw new Error("Expected the field `unitOfMeasure` to be a primitive type in the JSON string but got " + data['unitOfMeasure']);
        }
        // ensure the json data is a string
        if (data['currencyCode'] && !(typeof data['currencyCode'] === 'string' || data['currencyCode'] instanceof String)) {
            throw new Error("Expected the field `currencyCode` to be a primitive type in the JSON string but got " + data['currencyCode']);
        }
        if (data['serialNumbers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serialNumbers'])) {
                throw new Error("Expected the field `serialNumbers` to be an array in the JSON data but got " + data['serialNumbers']);
            }
            // validate the optional field `serialNumbers` (array)
            for (const item of data['serialNumbers']) {
                InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Unique line number from Ingram.
 * @member {String} ingramLineNumber
 */
InvoiceDetailsv61ResponseLinesInner.prototype['ingramLineNumber'] = undefined;

/**
 * Line number passes by customer while creating an order.
 * @member {String} customerLineNumber
 * @default '0'
 */
InvoiceDetailsv61ResponseLinesInner.prototype['customerLineNumber'] = '0';

/**
 * Ingram Micro SKU (stock keeping unit). An identification, usually alphanumeric, of a particular product that allows it to be tracked for inventory purposes.
 * @member {String} ingramPartNumber
 */
InvoiceDetailsv61ResponseLinesInner.prototype['ingramPartNumber'] = undefined;

/**
 * Vendor Part Number.
 * @member {String} vendorPartNumber
 */
InvoiceDetailsv61ResponseLinesInner.prototype['vendorPartNumber'] = undefined;

/**
 * Part number from customer's system.
 * @member {String} customerPartNumber
 */
InvoiceDetailsv61ResponseLinesInner.prototype['customerPartNumber'] = undefined;

/**
 * Name of the vendor.
 * @member {String} vendorName
 */
InvoiceDetailsv61ResponseLinesInner.prototype['vendorName'] = undefined;

/**
 * Description of the product.
 * @member {String} productDescription
 */
InvoiceDetailsv61ResponseLinesInner.prototype['productDescription'] = undefined;

/**
 * Weight of the product.
 * @member {Number} unitWeight
 */
InvoiceDetailsv61ResponseLinesInner.prototype['unitWeight'] = undefined;

/**
 * Quantity of the product.
 * @member {Number} quantity
 */
InvoiceDetailsv61ResponseLinesInner.prototype['quantity'] = undefined;

/**
 * Unit price of the product.
 * @member {Number} unitPrice
 */
InvoiceDetailsv61ResponseLinesInner.prototype['unitPrice'] = undefined;

/**
 * Unit of measure of the product.
 * @member {String} unitOfMeasure
 */
InvoiceDetailsv61ResponseLinesInner.prototype['unitOfMeasure'] = undefined;

/**
 * Currency code.
 * @member {String} currencyCode
 */
InvoiceDetailsv61ResponseLinesInner.prototype['currencyCode'] = undefined;

/**
 * Extended price of the product.
 * @member {Number} extendedPrice
 */
InvoiceDetailsv61ResponseLinesInner.prototype['extendedPrice'] = undefined;

/**
 * Tax percentage
 * @member {Number} taxPercentage
 */
InvoiceDetailsv61ResponseLinesInner.prototype['taxPercentage'] = undefined;

/**
 * Tax rate
 * @member {Number} taxRate
 */
InvoiceDetailsv61ResponseLinesInner.prototype['taxRate'] = undefined;

/**
 * Line level tax amount.
 * @member {Number} taxAmount
 */
InvoiceDetailsv61ResponseLinesInner.prototype['taxAmount'] = undefined;

/**
 * @member {Array.<module:model/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner>} serialNumbers
 */
InvoiceDetailsv61ResponseLinesInner.prototype['serialNumbers'] = undefined;

/**
 * Quantity ordered by the customer.
 * @member {Number} quantityOrdered
 */
InvoiceDetailsv61ResponseLinesInner.prototype['quantityOrdered'] = undefined;

/**
 * Quantity shipped to the customer.
 * @member {Number} quantityShipped
 */
InvoiceDetailsv61ResponseLinesInner.prototype['quantityShipped'] = undefined;






export default InvoiceDetailsv61ResponseLinesInner;

