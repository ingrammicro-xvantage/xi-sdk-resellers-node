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
 * The OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails();

            if (data.hasOwnProperty('trackingnumber')) {
                obj['trackingnumber'] = ApiClient.convertToType(data['trackingnumber'], 'String');
            }
            if (data.hasOwnProperty('packageweight')) {
                obj['packageweight'] = ApiClient.convertToType(data['packageweight'], 'String');
            }
            if (data.hasOwnProperty('cartonnumber')) {
                obj['cartonnumber'] = ApiClient.convertToType(data['cartonnumber'], 'String');
            }
            if (data.hasOwnProperty('quantityinbox')) {
                obj['quantityinbox'] = ApiClient.convertToType(data['quantityinbox'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['trackingnumber'] && !(typeof data['trackingnumber'] === 'string' || data['trackingnumber'] instanceof String)) {
            throw new Error("Expected the field `trackingnumber` to be a primitive type in the JSON string but got " + data['trackingnumber']);
        }
        // ensure the json data is a string
        if (data['packageweight'] && !(typeof data['packageweight'] === 'string' || data['packageweight'] instanceof String)) {
            throw new Error("Expected the field `packageweight` to be a primitive type in the JSON string but got " + data['packageweight']);
        }
        // ensure the json data is a string
        if (data['cartonnumber'] && !(typeof data['cartonnumber'] === 'string' || data['cartonnumber'] instanceof String)) {
            throw new Error("Expected the field `cartonnumber` to be a primitive type in the JSON string but got " + data['cartonnumber']);
        }
        // ensure the json data is a string
        if (data['quantityinbox'] && !(typeof data['quantityinbox'] === 'string' || data['quantityinbox'] instanceof String)) {
            throw new Error("Expected the field `quantityinbox` to be a primitive type in the JSON string but got " + data['quantityinbox']);
        }

        return true;
    }


}



/**
 * @member {String} trackingnumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails.prototype['trackingnumber'] = undefined;

/**
 * @member {String} packageweight
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails.prototype['packageweight'] = undefined;

/**
 * @member {String} cartonnumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails.prototype['cartonnumber'] = undefined;

/**
 * @member {String} quantityinbox
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails.prototype['quantityinbox'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInnerPackagedetails;

