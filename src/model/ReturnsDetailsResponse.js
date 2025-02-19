/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import ReturnsDetailsResponseProductsInner from './ReturnsDetailsResponseProductsInner';

/**
 * The ReturnsDetailsResponse model module.
 * @module model/ReturnsDetailsResponse
 * @version 1.0.0
 */
class ReturnsDetailsResponse {
    /**
     * Constructs a new <code>ReturnsDetailsResponse</code>.
     * @alias module:model/ReturnsDetailsResponse
     */
    constructor() { 
        
        ReturnsDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReturnsDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsDetailsResponse} obj Optional instance to populate.
     * @return {module:model/ReturnsDetailsResponse} The populated <code>ReturnsDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsDetailsResponse();

            if (data.hasOwnProperty('typeOfDetails')) {
                obj['typeOfDetails'] = ApiClient.convertToType(data['typeOfDetails'], 'String');
            }
            if (data.hasOwnProperty('rmaClaimId')) {
                obj['rmaClaimId'] = ApiClient.convertToType(data['rmaClaimId'], 'String');
            }
            if (data.hasOwnProperty('caseRequestNumber')) {
                obj['caseRequestNumber'] = ApiClient.convertToType(data['caseRequestNumber'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
            }
            if (data.hasOwnProperty('returnReason')) {
                obj['returnReason'] = ApiClient.convertToType(data['returnReason'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('returnWarehouseAddress')) {
                obj['returnWarehouseAddress'] = ApiClient.convertToType(data['returnWarehouseAddress'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ReturnsDetailsResponseProductsInner]);
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = ApiClient.convertToType(data['subTotal'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('additionalFees')) {
                obj['additionalFees'] = ApiClient.convertToType(data['additionalFees'], 'Number');
            }
            if (data.hasOwnProperty('estimatedTotal')) {
                obj['estimatedTotal'] = ApiClient.convertToType(data['estimatedTotal'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReturnsDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReturnsDetailsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['typeOfDetails'] && !(typeof data['typeOfDetails'] === 'string' || data['typeOfDetails'] instanceof String)) {
            throw new Error("Expected the field `typeOfDetails` to be a primitive type in the JSON string but got " + data['typeOfDetails']);
        }
        // ensure the json data is a string
        if (data['rmaClaimId'] && !(typeof data['rmaClaimId'] === 'string' || data['rmaClaimId'] instanceof String)) {
            throw new Error("Expected the field `rmaClaimId` to be a primitive type in the JSON string but got " + data['rmaClaimId']);
        }
        // ensure the json data is a string
        if (data['caseRequestNumber'] && !(typeof data['caseRequestNumber'] === 'string' || data['caseRequestNumber'] instanceof String)) {
            throw new Error("Expected the field `caseRequestNumber` to be a primitive type in the JSON string but got " + data['caseRequestNumber']);
        }
        // ensure the json data is a string
        if (data['createdOn'] && !(typeof data['createdOn'] === 'string' || data['createdOn'] instanceof String)) {
            throw new Error("Expected the field `createdOn` to be a primitive type in the JSON string but got " + data['createdOn']);
        }
        // ensure the json data is a string
        if (data['returnReason'] && !(typeof data['returnReason'] === 'string' || data['returnReason'] instanceof String)) {
            throw new Error("Expected the field `returnReason` to be a primitive type in the JSON string but got " + data['returnReason']);
        }
        // ensure the json data is a string
        if (data['referenceNumber'] && !(typeof data['referenceNumber'] === 'string' || data['referenceNumber'] instanceof String)) {
            throw new Error("Expected the field `referenceNumber` to be a primitive type in the JSON string but got " + data['referenceNumber']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['returnWarehouseAddress'] && !(typeof data['returnWarehouseAddress'] === 'string' || data['returnWarehouseAddress'] instanceof String)) {
            throw new Error("Expected the field `returnWarehouseAddress` to be a primitive type in the JSON string but got " + data['returnWarehouseAddress']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                ReturnsDetailsResponseProductsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The type of the details. Return or Claim.
 * @member {String} typeOfDetails
 */
ReturnsDetailsResponse.prototype['typeOfDetails'] = undefined;

/**
 * The rmaClaimId claim id.
 * @member {String} rmaClaimId
 */
ReturnsDetailsResponse.prototype['rmaClaimId'] = undefined;

/**
 * A unique return request number.
 * @member {String} caseRequestNumber
 */
ReturnsDetailsResponse.prototype['caseRequestNumber'] = undefined;

/**
 * The date on which the return request was created.
 * @member {String} createdOn
 */
ReturnsDetailsResponse.prototype['createdOn'] = undefined;

/**
 * The reason for the return.
 * @member {String} returnReason
 */
ReturnsDetailsResponse.prototype['returnReason'] = undefined;

/**
 * The reference number for the return.
 * @member {String} referenceNumber
 */
ReturnsDetailsResponse.prototype['referenceNumber'] = undefined;

/**
 * The status of the request.
 * @member {String} status
 */
ReturnsDetailsResponse.prototype['status'] = undefined;

/**
 * The address of the return warehouse.
 * @member {String} returnWarehouseAddress
 */
ReturnsDetailsResponse.prototype['returnWarehouseAddress'] = undefined;

/**
 * @member {Array.<module:model/ReturnsDetailsResponseProductsInner>} products
 */
ReturnsDetailsResponse.prototype['products'] = undefined;

/**
 * Sub total amount of the return request.
 * @member {Number} subTotal
 */
ReturnsDetailsResponse.prototype['subTotal'] = undefined;

/**
 * The tax amount of the return request.
 * @member {Number} tax
 */
ReturnsDetailsResponse.prototype['tax'] = undefined;

/**
 * The additional fees for the return request.
 * @member {Number} additionalFees
 */
ReturnsDetailsResponse.prototype['additionalFees'] = undefined;

/**
 * The total estimated amount for the return request.
 * @member {Number} estimatedTotal
 */
ReturnsDetailsResponse.prototype['estimatedTotal'] = undefined;






export default ReturnsDetailsResponse;

