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
 * The AddressType model module.
 * @module model/AddressType
 * @version 1.0.0
 */
class AddressType {
    /**
     * Constructs a new <code>AddressType</code>.
     * Address type object
     * @alias module:model/AddressType
     */
    constructor() { 
        
        AddressType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddressType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressType} obj Optional instance to populate.
     * @return {module:model/AddressType} The populated <code>AddressType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressType();

            if (data.hasOwnProperty('attention')) {
                obj['attention'] = ApiClient.convertToType(data['attention'], 'String');
            }
            if (data.hasOwnProperty('name1')) {
                obj['name1'] = ApiClient.convertToType(data['name1'], 'String');
            }
            if (data.hasOwnProperty('name2')) {
                obj['name2'] = ApiClient.convertToType(data['name2'], 'String');
            }
            if (data.hasOwnProperty('addressline1')) {
                obj['addressline1'] = ApiClient.convertToType(data['addressline1'], 'String');
            }
            if (data.hasOwnProperty('addressline2')) {
                obj['addressline2'] = ApiClient.convertToType(data['addressline2'], 'String');
            }
            if (data.hasOwnProperty('addressline3')) {
                obj['addressline3'] = ApiClient.convertToType(data['addressline3'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postalcode')) {
                obj['postalcode'] = ApiClient.convertToType(data['postalcode'], 'String');
            }
            if (data.hasOwnProperty('countrycode')) {
                obj['countrycode'] = ApiClient.convertToType(data['countrycode'], 'String');
            }
            if (data.hasOwnProperty('fax')) {
                obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
            }
            if (data.hasOwnProperty('phonenumber')) {
                obj['phonenumber'] = ApiClient.convertToType(data['phonenumber'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['attention'] && !(typeof data['attention'] === 'string' || data['attention'] instanceof String)) {
            throw new Error("Expected the field `attention` to be a primitive type in the JSON string but got " + data['attention']);
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
        if (data['addressline1'] && !(typeof data['addressline1'] === 'string' || data['addressline1'] instanceof String)) {
            throw new Error("Expected the field `addressline1` to be a primitive type in the JSON string but got " + data['addressline1']);
        }
        // ensure the json data is a string
        if (data['addressline2'] && !(typeof data['addressline2'] === 'string' || data['addressline2'] instanceof String)) {
            throw new Error("Expected the field `addressline2` to be a primitive type in the JSON string but got " + data['addressline2']);
        }
        // ensure the json data is a string
        if (data['addressline3'] && !(typeof data['addressline3'] === 'string' || data['addressline3'] instanceof String)) {
            throw new Error("Expected the field `addressline3` to be a primitive type in the JSON string but got " + data['addressline3']);
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
        if (data['postalcode'] && !(typeof data['postalcode'] === 'string' || data['postalcode'] instanceof String)) {
            throw new Error("Expected the field `postalcode` to be a primitive type in the JSON string but got " + data['postalcode']);
        }
        // ensure the json data is a string
        if (data['countrycode'] && !(typeof data['countrycode'] === 'string' || data['countrycode'] instanceof String)) {
            throw new Error("Expected the field `countrycode` to be a primitive type in the JSON string but got " + data['countrycode']);
        }
        // ensure the json data is a string
        if (data['fax'] && !(typeof data['fax'] === 'string' || data['fax'] instanceof String)) {
            throw new Error("Expected the field `fax` to be a primitive type in the JSON string but got " + data['fax']);
        }
        // ensure the json data is a string
        if (data['phonenumber'] && !(typeof data['phonenumber'] === 'string' || data['phonenumber'] instanceof String)) {
            throw new Error("Expected the field `phonenumber` to be a primitive type in the JSON string but got " + data['phonenumber']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * @member {String} attention
 */
AddressType.prototype['attention'] = undefined;

/**
 * @member {String} name1
 */
AddressType.prototype['name1'] = undefined;

/**
 * @member {String} name2
 */
AddressType.prototype['name2'] = undefined;

/**
 * @member {String} addressline1
 */
AddressType.prototype['addressline1'] = undefined;

/**
 * @member {String} addressline2
 */
AddressType.prototype['addressline2'] = undefined;

/**
 * @member {String} addressline3
 */
AddressType.prototype['addressline3'] = undefined;

/**
 * @member {String} city
 */
AddressType.prototype['city'] = undefined;

/**
 * @member {String} state
 */
AddressType.prototype['state'] = undefined;

/**
 * @member {String} postalcode
 */
AddressType.prototype['postalcode'] = undefined;

/**
 * @member {String} countrycode
 */
AddressType.prototype['countrycode'] = undefined;

/**
 * @member {String} fax
 */
AddressType.prototype['fax'] = undefined;

/**
 * @member {String} phonenumber
 */
AddressType.prototype['phonenumber'] = undefined;

/**
 * @member {String} email
 */
AddressType.prototype['email'] = undefined;






export default AddressType;

