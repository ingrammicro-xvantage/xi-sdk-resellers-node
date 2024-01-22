/**
 * XI SDK Resellers
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
 * The ReturnsDetailsResponseProductsInner model module.
 * @module model/ReturnsDetailsResponseProductsInner
 * @version 6.0
 */
class ReturnsDetailsResponseProductsInner {
    /**
     * Constructs a new <code>ReturnsDetailsResponseProductsInner</code>.
     * @alias module:model/ReturnsDetailsResponseProductsInner
     */
    constructor() { 
        
        ReturnsDetailsResponseProductsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsDetailsResponseProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsDetailsResponseProductsInner} obj Optional instance to populate.
     * @return {module:model/ReturnsDetailsResponseProductsInner} The populated <code>ReturnsDetailsResponseProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsDetailsResponseProductsInner();

            if (data.hasOwnProperty('ingramLineNumber')) {
                obj['ingramLineNumber'] = ApiClient.convertToType(data['ingramLineNumber'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ingramPartNumber')) {
                obj['ingramPartNumber'] = ApiClient.convertToType(data['ingramPartNumber'], 'String');
            }
            if (data.hasOwnProperty('vendorPartNumber')) {
                obj['vendorPartNumber'] = ApiClient.convertToType(data['vendorPartNumber'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('invoiceDate')) {
                obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'Date');
            }
            if (data.hasOwnProperty('invoiceNumber')) {
                obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
            }
            if (data.hasOwnProperty('customerOrderNumber')) {
                obj['customerOrderNumber'] = ApiClient.convertToType(data['customerOrderNumber'], 'Number');
            }
            if (data.hasOwnProperty('requestDetails')) {
                obj['requestDetails'] = ApiClient.convertToType(data['requestDetails'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('extendedPrice')) {
                obj['extendedPrice'] = ApiClient.convertToType(data['extendedPrice'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('returnBranch')) {
                obj['returnBranch'] = ApiClient.convertToType(data['returnBranch'], 'Number');
            }
            if (data.hasOwnProperty('shipFromBranch')) {
                obj['shipFromBranch'] = ApiClient.convertToType(data['shipFromBranch'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsDetailsResponseProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsDetailsResponseProductsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ingramLineNumber'] && !(typeof data['ingramLineNumber'] === 'string' || data['ingramLineNumber'] instanceof String)) {
            throw new Error("Expected the field `ingramLineNumber` to be a primitive type in the JSON string but got " + data['ingramLineNumber']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['invoiceNumber'] && !(typeof data['invoiceNumber'] === 'string' || data['invoiceNumber'] instanceof String)) {
            throw new Error("Expected the field `invoiceNumber` to be a primitive type in the JSON string but got " + data['invoiceNumber']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * Unique Ingram Micro line number.
 * @member {String} ingramLineNumber
 */
ReturnsDetailsResponseProductsInner.prototype['ingramLineNumber'] = undefined;

/**
 * The description of the line item product.
 * @member {String} description
 */
ReturnsDetailsResponseProductsInner.prototype['description'] = undefined;

/**
 * Unique IngramMicro part number.
 * @member {String} ingramPartNumber
 */
ReturnsDetailsResponseProductsInner.prototype['ingramPartNumber'] = undefined;

/**
 * The vendor's part number for the line item.
 * @member {String} vendorPartNumber
 */
ReturnsDetailsResponseProductsInner.prototype['vendorPartNumber'] = undefined;

/**
 * The UPC code of a product.
 * @member {String} upc
 */
ReturnsDetailsResponseProductsInner.prototype['upc'] = undefined;

/**
 * The date of the invoice.
 * @member {Date} invoiceDate
 */
ReturnsDetailsResponseProductsInner.prototype['invoiceDate'] = undefined;

/**
 * Ingram micro Invoice number.
 * @member {String} invoiceNumber
 */
ReturnsDetailsResponseProductsInner.prototype['invoiceNumber'] = undefined;

/**
 * The reseller's order number for reference in their system.
 * @member {Number} customerOrderNumber
 */
ReturnsDetailsResponseProductsInner.prototype['customerOrderNumber'] = undefined;

/**
 * Request details.
 * @member {Number} requestDetails
 */
ReturnsDetailsResponseProductsInner.prototype['requestDetails'] = undefined;

/**
 * The quantity of the line item.
 * @member {Number} quantity
 */
ReturnsDetailsResponseProductsInner.prototype['quantity'] = undefined;

/**
 * The unit price of the line item.
 * @member {Number} unitPrice
 */
ReturnsDetailsResponseProductsInner.prototype['unitPrice'] = undefined;

/**
 * Unit price X quantity for the line item.
 * @member {Number} extendedPrice
 */
ReturnsDetailsResponseProductsInner.prototype['extendedPrice'] = undefined;

/**
 * The status of the line item.
 * @member {String} status
 */
ReturnsDetailsResponseProductsInner.prototype['status'] = undefined;

/**
 * The code of the return branch.
 * @member {Number} returnBranch
 */
ReturnsDetailsResponseProductsInner.prototype['returnBranch'] = undefined;

/**
 * The code of the ship from branch.
 * @member {Number} shipFromBranch
 */
ReturnsDetailsResponseProductsInner.prototype['shipFromBranch'] = undefined;






export default ReturnsDetailsResponseProductsInner;

