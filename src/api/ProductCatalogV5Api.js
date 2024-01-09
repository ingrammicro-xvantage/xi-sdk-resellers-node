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


import ApiClient from "../ApiClient";
import PriceAndAvailabilityRequest from '../model/PriceAndAvailabilityRequest';
import PriceAndAvailabilityResponse from '../model/PriceAndAvailabilityResponse';
import ProductSearchResponse from '../model/ProductSearchResponse';

/**
* ProductCatalogV5 service.
* @module api/ProductCatalogV5Api
* @version 6.0
*/
export default class ProductCatalogV5Api {

    /**
    * Constructs a new ProductCatalogV5Api. 
    * @alias module:api/ProductCatalogV5Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV5CatalogProductsearch operation.
     * @callback module:api/ProductCatalogV5Api~getV5CatalogProductsearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Product Catalog
     * Search the Ingram Micro product catalog using customerNumber, isoCountryCode and partNumber.<ul><li>customerNumber and isoCountryCode fields are required.</li><li>The PartNumber field accepts the following:<ul><li>Ingram part number</li><li>Vendor part number</li><li>Customer part number</li><li>UPC (Universal Product Code)</li></ul></li></ul>
     * @param {String} customerNumber Your unique Ingram Micro customer number
     * @param {String} isoCountryCode 2 chars country code
     * @param {String} partNumber Part Number can be ingram part number or vendor part number or customer part number or UPC
     * @param {module:api/ProductCatalogV5Api~getV5CatalogProductsearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductSearchResponse}
     */
    getV5CatalogProductsearch(customerNumber, isoCountryCode, partNumber, callback) {
      let postBody = null;
      // verify the required parameter 'customerNumber' is set
      if (customerNumber === undefined || customerNumber === null) {
        throw new Error("Missing the required parameter 'customerNumber' when calling getV5CatalogProductsearch");
      }
      // verify the required parameter 'isoCountryCode' is set
      if (isoCountryCode === undefined || isoCountryCode === null) {
        throw new Error("Missing the required parameter 'isoCountryCode' when calling getV5CatalogProductsearch");
      }
      // verify the required parameter 'partNumber' is set
      if (partNumber === undefined || partNumber === null) {
        throw new Error("Missing the required parameter 'partNumber' when calling getV5CatalogProductsearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'customerNumber': customerNumber,
        'isoCountryCode': isoCountryCode,
        'partNumber': partNumber
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Catalog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the multiSKUPriceAndStock operation.
     * @callback module:api/ProductCatalogV5Api~multiSKUPriceAndStockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceAndAvailabilityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find availability of upto 50 SKUs
     * Search the product catalog for the price and availability for up to 50 SKUs at one time. This endpoint helps to confirm the details just prior to placing a real-time call.<ul><li>You may request visibility for reserve stock if you participate in reserved inventory, in addition to the stock that is open to all the partners. Please see the details in the endpoint model below.</li><li>Follow these guidelines when using this endpoint:<ul><li>This endpoint is not for refreshing the full catalog with availability and pricing information. Ingram Micro applies rate limits on this endpoint. Continuous cyclical calls will error out. Customers that perform this activity may lose access to the endpoint.</li><li>For the full catalog refresh, Ingram Micro can provide a Price and Inventory file in flat file format, made available through FTP download. Please contact your Ingram Micro sales rep for details.</li></ul></li></ul>
     * @param {Object} opts Optional parameters
     * @param {module:model/PriceAndAvailabilityRequest} [priceAndAvailabilityRequest] 
     * @param {module:api/ProductCatalogV5Api~multiSKUPriceAndStockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceAndAvailabilityResponse}
     */
    multiSKUPriceAndStock(opts, callback) {
      opts = opts || {};
      let postBody = opts['priceAndAvailabilityRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PriceAndAvailabilityResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Catalog/priceandavailability', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
