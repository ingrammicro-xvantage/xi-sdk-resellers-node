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

/**
 * The OrderCreateResponseOrdersInnerAdditionalAttributesInner model module.
 * @module model/OrderCreateResponseOrdersInnerAdditionalAttributesInner
 * @version 1.0.0
 */
class OrderCreateResponseOrdersInnerAdditionalAttributesInner {
    /**
     * Constructs a new <code>OrderCreateResponseOrdersInnerAdditionalAttributesInner</code>.
     * @alias module:model/OrderCreateResponseOrdersInnerAdditionalAttributesInner
     */
    constructor() { 
        
        OrderCreateResponseOrdersInnerAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateResponseOrdersInnerAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateResponseOrdersInnerAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateResponseOrdersInnerAdditionalAttributesInner} The populated <code>OrderCreateResponseOrdersInnerAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateResponseOrdersInnerAdditionalAttributesInner();

            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderCreateResponseOrdersInnerAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateResponseOrdersInnerAdditionalAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attributeName'] && !(typeof data['attributeName'] === 'string' || data['attributeName'] instanceof String)) {
            throw new Error("Expected the field `attributeName` to be a primitive type in the JSON string but got " + data['attributeName']);
        }
        // ensure the json data is a string
        if (data['attributeValue'] && !(typeof data['attributeValue'] === 'string' || data['attributeValue'] instanceof String)) {
            throw new Error("Expected the field `attributeValue` to be a primitive type in the JSON string but got " + data['attributeValue']);
        }

        return true;
    }


}



/**
 *  allowPartialOrder: Allow orders with failed lines. (SAP) Depends on backorder settings.   dpasRating: DX rating by Department of Defense is the highest rating by the highest offices and meant to be top priority. DO any other gov offices at the federal level to priotize.   dpasProgramId: Identifies the actual agency that signed off on the DPAS priority.   storageLocation: Determine the location of the product stock in SAP for Marketplaces.  soldTo: To be used in cases when Sold-To is different than Customer ID.  Z101: Used for end customer details such as name, address, phone, etc. This information flows to SAP and is used by warehouse.  euDepId: DEP ID would be the 'End User DEP/ABM Organization ID' up to 32 characters and is assigned by Apple.  depOrderNbr: depordernbr is 'End User PO to reseller' Can appear in message lines or dedicated end user po#.  
 * @member {String} attributeName
 */
OrderCreateResponseOrdersInnerAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * Attribute value
 * @member {String} attributeValue
 */
OrderCreateResponseOrdersInnerAdditionalAttributesInner.prototype['attributeValue'] = undefined;






export default OrderCreateResponseOrdersInnerAdditionalAttributesInner;

