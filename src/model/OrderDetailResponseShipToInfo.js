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
 * The OrderDetailResponseShipToInfo model module.
 * @module model/OrderDetailResponseShipToInfo
 * @version 6.0
 */
class OrderDetailResponseShipToInfo {
    /**
     * Constructs a new <code>OrderDetailResponseShipToInfo</code>.
     * The shipping information provided by the reseller for order delivery.
     * @alias module:model/OrderDetailResponseShipToInfo
     */
    constructor() { 
        
        OrderDetailResponseShipToInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseShipToInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseShipToInfo} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseShipToInfo} The populated <code>OrderDetailResponseShipToInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseShipToInfo();

            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('name1')) {
                obj['name1'] = ApiClient.convertToType(data['name1'], 'String');
            }
            if (data.hasOwnProperty('name2')) {
                obj['name2'] = ApiClient.convertToType(data['name2'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseShipToInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseShipToInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
            throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['name1'] && !(typeof data['name1'] === 'string' || data['name1'] instanceof String)) {
            throw new Error("Expected the field `name1` to be a primitive type in the JSON string but got " + data['name1']);
        }
        // ensure the json data is a string
        if (data['name2'] && !(typeof data['name2'] === 'string' || data['name2'] instanceof String)) {
            throw new Error("Expected the field `name2` to be a primitive type in the JSON string but got " + data['name2']);
        }
        // ensure the json data is a string
        if (data['addressLine1'] && !(typeof data['addressLine1'] === 'string' || data['addressLine1'] instanceof String)) {
            throw new Error("Expected the field `addressLine1` to be a primitive type in the JSON string but got " + data['addressLine1']);
        }
        // ensure the json data is a string
        if (data['addressLine2'] && !(typeof data['addressLine2'] === 'string' || data['addressLine2'] instanceof String)) {
            throw new Error("Expected the field `addressLine2` to be a primitive type in the JSON string but got " + data['addressLine2']);
        }
        // ensure the json data is a string
        if (data['addressLine3'] && !(typeof data['addressLine3'] === 'string' || data['addressLine3'] instanceof String)) {
            throw new Error("Expected the field `addressLine3` to be a primitive type in the JSON string but got " + data['addressLine3']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
            throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * The company contact provided by the reseller.
 * @member {String} contact
 */
OrderDetailResponseShipToInfo.prototype['contact'] = undefined;

/**
 * The name of the company the order will be shipped to.
 * @member {String} companyName
 */
OrderDetailResponseShipToInfo.prototype['companyName'] = undefined;

/**
 * First name.
 * @member {String} name1
 */
OrderDetailResponseShipToInfo.prototype['name1'] = undefined;

/**
 * Last name.
 * @member {String} name2
 */
OrderDetailResponseShipToInfo.prototype['name2'] = undefined;

/**
 * The street address the order will be shipped to.
 * @member {String} addressLine1
 */
OrderDetailResponseShipToInfo.prototype['addressLine1'] = undefined;

/**
 * The building or apartment number the order will be shipped to.
 * @member {String} addressLine2
 */
OrderDetailResponseShipToInfo.prototype['addressLine2'] = undefined;

/**
 * Line 3 of the address the order will be shipped to.
 * @member {String} addressLine3
 */
OrderDetailResponseShipToInfo.prototype['addressLine3'] = undefined;

/**
 * The city the order will be shipped to.
 * @member {String} city
 */
OrderDetailResponseShipToInfo.prototype['city'] = undefined;

/**
 * The state the order will be shipped to.
 * @member {String} state
 */
OrderDetailResponseShipToInfo.prototype['state'] = undefined;

/**
 * The zip or postal code the order will be shipped to.
 * @member {String} postalCode
 */
OrderDetailResponseShipToInfo.prototype['postalCode'] = undefined;

/**
 * The two-character ISO country code the order will be shipped to.
 * @member {String} countryCode
 */
OrderDetailResponseShipToInfo.prototype['countryCode'] = undefined;

/**
 * The company contact phone number.
 * @member {String} phoneNumber
 */
OrderDetailResponseShipToInfo.prototype['phoneNumber'] = undefined;

/**
 * The company contact email address.
 * @member {String} email
 */
OrderDetailResponseShipToInfo.prototype['email'] = undefined;






export default OrderDetailResponseShipToInfo;

