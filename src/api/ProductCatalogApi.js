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
import ErrorResponse from '../model/ErrorResponse';
import PriceAndAvailabilityRequest from '../model/PriceAndAvailabilityRequest';
import PriceAndAvailabilityResponseInner from '../model/PriceAndAvailabilityResponseInner';
import ProductDetailResponse from '../model/ProductDetailResponse';
import ProductSearchResponse from '../model/ProductSearchResponse';

/**
* ProductCatalog service.
* @module api/ProductCatalogApi
* @version 6.0
*/
export default class ProductCatalogApi {

    /**
    * Constructs a new ProductCatalogApi. 
    * @alias module:api/ProductCatalogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getResellerV6Productdetail operation.
     * @callback module:api/ProductCatalogApi~getResellerV6ProductdetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Product Details
     * Search all the product-related details using a unique Ingram Part Number. Currently, this API is available in the USA, India, and Netherlands.
     * @param {String} ingramPartNumber Ingram Micro unique part number for the product
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Sender Identification text
     * @param {module:api/ProductCatalogApi~getResellerV6ProductdetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductDetailResponse}
     */
    getResellerV6Productdetail(ingramPartNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ingramPartNumber' is set
      if (ingramPartNumber === undefined || ingramPartNumber === null) {
        throw new Error("Missing the required parameter 'ingramPartNumber' when calling getResellerV6Productdetail");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellerV6Productdetail");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellerV6Productdetail");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellerV6Productdetail");
      }

      let pathParams = {
        'ingramPartNumber': ingramPartNumber
      };
      let queryParams = {
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-SenderID': opts['iMSenderID'],
        'IM-CorrelationID': iMCorrelationID
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductDetailResponse;
      return this.apiClient.callApi(
        '/resellers/v6/catalog/details/{ingramPartNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResellerV6Productsearch operation.
     * @callback module:api/ProductCatalogApi~getResellerV6ProductsearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Products
     * Search the Ingram Micro product catalog by providing any of the information in the keyword(Ingram part number / vendor part number/ product description / UPC
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {Object} opts Optional parameters
     * @param {Number} [pageNumber] Current page number. Default is 1
     * @param {Number} [pageSize] Number of records required in the call - max records 100 per page
     * @param {String} [iMSenderID] Sender Identification text
     * @param {module:model/String} [type] The SKU type of product. One of Physical, Digital, or Any.
     * @param {String} [hasDiscounts] Specifies if there are discounts available for the product.
     * @param {Array.<String>} [vendor] The name of the vendor/manufacturer of the product.
     * @param {Array.<String>} [vendorPartNumber] The vendors part number for the product.
     * @param {String} [acceptLanguage = 'en')] Header to the API calls, the content will help us identify the response language.
     * @param {String} [vendorNumber] Vendor number of the product
     * @param {Array.<String>} [keyword] Keyword search,can be ingram part number or vendor part number or product title or vendor nameKeyword search. Can be Ingram Micro part number, vender part number, product title, or vendor name.
     * @param {String} [category] The category of the product. Example: Displays.
     * @param {String} [skipAuthorisation] This parameter is True when you want Skip the authorization, so template will work like current B2b template.
     * @param {module:api/ProductCatalogApi~getResellerV6ProductsearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductSearchResponse}
     */
    getResellerV6Productsearch(iMCustomerNumber, iMCorrelationID, iMCountryCode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellerV6Productsearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellerV6Productsearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellerV6Productsearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'pageNumber': opts['pageNumber'],
        'pageSize': opts['pageSize'],
        'type': opts['type'],
        'hasDiscounts': opts['hasDiscounts'],
        'vendor': this.apiClient.buildCollectionParam(opts['vendor'], 'multi'),
        'vendorPartNumber': this.apiClient.buildCollectionParam(opts['vendorPartNumber'], 'multi'),
        'vendorNumber': opts['vendorNumber'],
        'keyword': this.apiClient.buildCollectionParam(opts['keyword'], 'multi'),
        'category': opts['category'],
        'skipAuthorisation': opts['skipAuthorisation']
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-SenderID': opts['iMSenderID'],
        'IM-CorrelationID': iMCorrelationID,
        'IM-CountryCode': iMCountryCode,
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/catalog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postPriceandavailability operation.
     * @callback module:api/ProductCatalogApi~postPriceandavailabilityCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PriceAndAvailabilityResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Price and Availability
     * The PriceAndAvailability API, will retrieve Pricing, Availability, discounts, Inventory Location, Reserve Inventory for the products upto 50 products. 
     * @param {Array.<Boolean>} includeAvailability Pass boolean value as input, if true the response will contain warehouse availability details, if false the response will not hold warehouse availability details
     * @param {Boolean} includePricing Pass boolean value as input, if true the response will contain Pricing details of the Product, if false the response will not hold Pricing details.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {module:model/PriceAndAvailabilityRequest} priceAndAvailabilityRequest 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [includeProductAttributes] Pass boolean value as input, if true the response will contain detailed attributes related to the Product, if false or not sent the response will contain very few Product details.
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/ProductCatalogApi~postPriceandavailabilityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PriceAndAvailabilityResponseInner>}
     */
    postPriceandavailability(includeAvailability, includePricing, iMCustomerNumber, iMCountryCode, iMCorrelationID, priceAndAvailabilityRequest, opts, callback) {
      opts = opts || {};
      let postBody = priceAndAvailabilityRequest;
      // verify the required parameter 'includeAvailability' is set
      if (includeAvailability === undefined || includeAvailability === null) {
        throw new Error("Missing the required parameter 'includeAvailability' when calling postPriceandavailability");
      }
      // verify the required parameter 'includePricing' is set
      if (includePricing === undefined || includePricing === null) {
        throw new Error("Missing the required parameter 'includePricing' when calling postPriceandavailability");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postPriceandavailability");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postPriceandavailability");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postPriceandavailability");
      }
      // verify the required parameter 'priceAndAvailabilityRequest' is set
      if (priceAndAvailabilityRequest === undefined || priceAndAvailabilityRequest === null) {
        throw new Error("Missing the required parameter 'priceAndAvailabilityRequest' when calling postPriceandavailability");
      }

      let pathParams = {
      };
      let queryParams = {
        'includeAvailability': this.apiClient.buildCollectionParam(includeAvailability, 'multi'),
        'includePricing': includePricing,
        'includeProductAttributes': opts['includeProductAttributes']
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-SenderID': opts['iMSenderID']
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [PriceAndAvailabilityResponseInner];
      return this.apiClient.callApi(
        '/resellers/v6/catalog/priceandavailability', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}