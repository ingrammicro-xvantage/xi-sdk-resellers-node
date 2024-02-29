/**
 * XI Sdk Resellers
 * For Ingram Micro Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FreightRequest from '../model/FreightRequest';
import FreightResponse from '../model/FreightResponse';
import GetResellerV6ValidateQuote500Response from '../model/GetResellerV6ValidateQuote500Response';
import PostRenewalssearch400Response from '../model/PostRenewalssearch400Response';

/**
* FreightEstimate service.
* @module api/FreightEstimateApi
* @version 1.0.0
*/
export default class FreightEstimateApi {

    /**
    * Constructs a new FreightEstimateApi. 
    * @alias module:api/FreightEstimateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postFreightestimate operation.
     * @callback module:api/FreightEstimateApi~postFreightestimateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FreightResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Freight Estimate
     * The freight estimator endpoint will allow customers to understand the freight cost for an order.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} iMCustomerContact Logged in Users email address contact.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction.
     * @param {module:model/FreightRequest} [freightRequest] 
     * @param {module:api/FreightEstimateApi~postFreightestimateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FreightResponse}
     */
    postFreightestimate(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMCustomerContact, opts, callback) {
      opts = opts || {};
      let postBody = opts['freightRequest'];
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postFreightestimate");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postFreightestimate");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postFreightestimate");
      }
      // verify the required parameter 'iMCustomerContact' is set
      if (iMCustomerContact === undefined || iMCustomerContact === null) {
        throw new Error("Missing the required parameter 'iMCustomerContact' when calling postFreightestimate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-CustomerContact': iMCustomerContact,
        'IM-SenderID': opts['iMSenderID']
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FreightResponse;
      return this.apiClient.callApi(
        '/resellers/v6/freightestimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
