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
import InvoiceDetailResponse from '../model/InvoiceDetailResponse';

/**
* InvoicesV6 service.
* @module api/InvoicesV6Api
* @version 6.0
*/
export default class InvoicesV6Api {

    /**
    * Constructs a new InvoicesV6Api. 
    * @alias module:api/InvoicesV6Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInvoicedetailsV6 operation.
     * @callback module:api/InvoicesV6Api~getInvoicedetailsV6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Invoice Details v6
     * Use your Ingram Micro invoice number to search for existing invoices or retrieve existing invoice details.  The invoice number, IM-CustomerNumber, IM-CountryCode, IM-ApplicationId and IM-CorrelationID are required parameters.  .
     * @param {String} invoicenumber The Ingram Micro invoice number.
     * @param {String} version Version of codebase.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} iMApplicationID Unique value used to identify the sender of the transaction. Example: MyCompany.
     * @param {Object} opts Optional parameters
     * @param {String} [customerType] it should be invoice or order
     * @param {Boolean} [includeSerialNumbers] if serial in the response send as true or else false
     * @param {module:api/InvoicesV6Api~getInvoicedetailsV6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceDetailResponse}
     */
    getInvoicedetailsV6(invoicenumber, version, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'invoicenumber' is set
      if (invoicenumber === undefined || invoicenumber === null) {
        throw new Error("Missing the required parameter 'invoicenumber' when calling getInvoicedetailsV6");
      }
      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling getInvoicedetailsV6");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getInvoicedetailsV6");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getInvoicedetailsV6");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getInvoicedetailsV6");
      }
      // verify the required parameter 'iMApplicationID' is set
      if (iMApplicationID === undefined || iMApplicationID === null) {
        throw new Error("Missing the required parameter 'iMApplicationID' when calling getInvoicedetailsV6");
      }

      let pathParams = {
        'invoicenumber': invoicenumber
      };
      let queryParams = {
        'customerType': opts['customerType'],
        'includeSerialNumbers': opts['includeSerialNumbers']
      };
      let headerParams = {
        'version': version,
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID,
        'IM-ApplicationID': iMApplicationID
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceDetailResponse;
      return this.apiClient.callApi(
        '/resellers/v6/invoices/{invoicenumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}