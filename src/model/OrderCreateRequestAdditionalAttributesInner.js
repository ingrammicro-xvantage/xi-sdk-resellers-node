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
 * The OrderCreateRequestAdditionalAttributesInner model module.
 * @module model/OrderCreateRequestAdditionalAttributesInner
 * @version 6.0
 */
class OrderCreateRequestAdditionalAttributesInner {
    /**
     * Constructs a new <code>OrderCreateRequestAdditionalAttributesInner</code>.
     * @alias module:model/OrderCreateRequestAdditionalAttributesInner
     */
    constructor() { 
        
        OrderCreateRequestAdditionalAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCreateRequestAdditionalAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCreateRequestAdditionalAttributesInner} obj Optional instance to populate.
     * @return {module:model/OrderCreateRequestAdditionalAttributesInner} The populated <code>OrderCreateRequestAdditionalAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCreateRequestAdditionalAttributesInner();

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
     * Validates the JSON data with respect to <code>OrderCreateRequestAdditionalAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderCreateRequestAdditionalAttributesInner</code>.
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
 * allowPartialOrder: Allow orders with failed lines. (SAP) Depends on backorder settings.    DpasRating: DX rating by Department of Defense is the highest rating by the highest offices and meant to be top priority. DO any other gov offices at the federal level to priotize.    DpasProgramId: Identifies the actual agency that signed off on the DPAS priority.    allowDuplicateCustomerOrderNumber: Allow orders with duplicate customer PO numbers. Enables resellers to have the same PO number for multiple orders.     channelCode: Determine storage location for Markeplace(SAP) for different orderTypes.    customerPOType: Used for pricing, similar to orderType. Possible SAP values- ZXML and ZWEB.    storageLocation: Determine the location of the product stock in SAP for Marketplaces.    soldTo: To be used in cases when Sold-To is different than Customer ID.    orderType: Order Type[SAP]- ZOR and ZLCN.    endUserSearchTerm: Search ID for a end user contact is used in SAP to determine the contact name.    Z101: Used for end customer details such as name, address, phone, etc. This information flows to SAP and is used by warehouse.    euDepId: DEP ID would be the 'End User DEP/ABM Organization ID' up to 32 characters and is assigned by Apple.    depOrderNbr: depordernbr is 'End User PO to reseller' Can appear in message lines or dedicated end user po#.    govtProgramType: Program type, “PA” for government orders, “ED” for education order.    govtEndUserType: Type of end user of the program. F = Federal, S = State, E = Local, K = K-12 school, and H = Higher Education    govtSolicitationNumber: Education order’s contract number    govtPublicPrivateCode: Determines TAX / NO TAX.   'P' PUBLIC SECTOR,   'R' PRIVATE SECTOR.  Value needs only to be provided for EDUCATION order.    govtEndUserData: Name of the End user of the program. For example, STATE OF OHIO, CHICAGO SCHOOLDISTRICT etc.    govtEndUserPostalCode: 9 CHAR FIELD / Zip Code of the End user of the order.    dynamicMessageLine1: Custom Dynamic Message line 1.    allowOrderOnCustomerHold: Boolean value flag which allows a customer to create an order with the hold status.
 * @member {String} attributeName
 */
OrderCreateRequestAdditionalAttributesInner.prototype['attributeName'] = undefined;

/**
 * attributefield data
 * @member {String} attributeValue
 */
OrderCreateRequestAdditionalAttributesInner.prototype['attributeValue'] = undefined;






export default OrderCreateRequestAdditionalAttributesInner;

