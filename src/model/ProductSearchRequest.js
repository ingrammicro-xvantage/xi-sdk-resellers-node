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
import ProductSearchRequestServicerequest from './ProductSearchRequestServicerequest';

/**
 * The ProductSearchRequest model module.
 * @module model/ProductSearchRequest
 * @version 6.0
 */
class ProductSearchRequest {
    /**
     * Constructs a new <code>ProductSearchRequest</code>.
     * Request object model for the product search endpoint
     * @alias module:model/ProductSearchRequest
     */
    constructor() { 
        
        ProductSearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductSearchRequest} obj Optional instance to populate.
     * @return {module:model/ProductSearchRequest} The populated <code>ProductSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductSearchRequest();

            if (data.hasOwnProperty('servicerequest')) {
                obj['servicerequest'] = ProductSearchRequestServicerequest.constructFromObject(data['servicerequest']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductSearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductSearchRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `servicerequest`
        if (data['servicerequest']) { // data not null
          ProductSearchRequestServicerequest.validateJSON(data['servicerequest']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductSearchRequestServicerequest} servicerequest
 */
ProductSearchRequest.prototype['servicerequest'] = undefined;






export default ProductSearchRequest;

