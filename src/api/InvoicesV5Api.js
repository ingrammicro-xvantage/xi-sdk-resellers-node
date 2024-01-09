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
import InvoiceDetails from '../model/InvoiceDetails';

/**
* InvoicesV5 service.
* @module api/InvoicesV5Api
* @version 6.0
*/
export default class InvoicesV5Api {

    /**
    * Constructs a new InvoicesV5Api. 
    * @alias module:api/InvoicesV5Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInvoices operation.
     * @callback module:api/InvoicesV5Api~getInvoicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Invoice Details
     * View invoice details. This is a request to query invoice details for a specific Ingram Micro order placed in the last 9 months, whether open or shipped.   <strong>invoiceNumber</strong>, <strong>isoCountryCode</strong> and <strong>customerNumber</strong> parameters are required.
     * @param {String} invoiceNumber Ingram Micro Invoice Number
     * @param {String} customerNumber Your unique Ingram Micro customer number
     * @param {String} isoCountryCode ISO 2 char country code
     * @param {module:api/InvoicesV5Api~getInvoicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceDetails}
     */
    getInvoices(invoiceNumber, customerNumber, isoCountryCode, callback) {
      let postBody = null;
      // verify the required parameter 'invoiceNumber' is set
      if (invoiceNumber === undefined || invoiceNumber === null) {
        throw new Error("Missing the required parameter 'invoiceNumber' when calling getInvoices");
      }
      // verify the required parameter 'customerNumber' is set
      if (customerNumber === undefined || customerNumber === null) {
        throw new Error("Missing the required parameter 'customerNumber' when calling getInvoices");
      }
      // verify the required parameter 'isoCountryCode' is set
      if (isoCountryCode === undefined || isoCountryCode === null) {
        throw new Error("Missing the required parameter 'isoCountryCode' when calling getInvoices");
      }

      let pathParams = {
        'invoiceNumber': invoiceNumber
      };
      let queryParams = {
        'customerNumber': customerNumber,
        'isoCountryCode': isoCountryCode
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceDetails;
      return this.apiClient.callApi(
        '/resellers/v5/invoices/{invoiceNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}