/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
import ErrorResponse from '../model/ErrorResponse';
import InvoiceDetailsv61Response from '../model/InvoiceDetailsv61Response';
import InvoiceSearchResponse from '../model/InvoiceSearchResponse';

/**
* Invoices service.
* @module api/InvoicesApi
* @version 1.0.0
*/
export default class InvoicesApi {

    /**
    * Constructs a new InvoicesApi. 
    * @alias module:api/InvoicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInvoicedetailsV61 operation.
     * @callback module:api/InvoicesApi~getInvoicedetailsV61Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceDetailsv61Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Invoice Details v6.1
     * Use your Ingram Micro invoice number to search for existing invoices or retrieve existing invoice details.  The invoice number, IM-CustomerNumber, IM-CountryCode, IM-ApplicationId and IM-CorrelationID are required parameters.  .
     * @param {String} invoiceNumber The Ingram Micro invoice number.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {String} iMApplicationID Unique value used to identify the sender of the transaction. Example: MyCompany.
     * @param {Object} opts Optional parameters
     * @param {String} [customerType] it should be invoice or order
     * @param {Boolean} [includeSerialNumbers] if serial in the response send as true or else false
     * @param {module:api/InvoicesApi~getInvoicedetailsV61Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceDetailsv61Response}
     */
    getInvoicedetailsV61(invoiceNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'invoiceNumber' is set
      if (invoiceNumber === undefined || invoiceNumber === null) {
        throw new Error("Missing the required parameter 'invoiceNumber' when calling getInvoicedetailsV61");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getInvoicedetailsV61");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getInvoicedetailsV61");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getInvoicedetailsV61");
      }
      // verify the required parameter 'iMApplicationID' is set
      if (iMApplicationID === undefined || iMApplicationID === null) {
        throw new Error("Missing the required parameter 'iMApplicationID' when calling getInvoicedetailsV61");
      }

      let pathParams = {
        'invoiceNumber': invoiceNumber
      };
      let queryParams = {
        'customerType': opts['customerType'],
        'includeSerialNumbers': opts['includeSerialNumbers']
      };
      let headerParams = {
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
      let returnType = InvoiceDetailsv61Response;
      return this.apiClient.callApi(
        '/resellers/v6.1/invoices/{invoiceNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResellersV6Invoicesearch operation.
     * @callback module:api/InvoicesApi~getResellersV6InvoicesearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search your invoice
     * Search your Ingram Micro invoices. This endpoint searches by multiple invoice parameters and supports pagination of results.
     * @param {String} iMApplicationID Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [paymentTermsNetDate] Search by payment terms net date(yyyy-MM-dd).
     * @param {String} [invoiceDate] Search by invoice date(yyyy-MM-dd).
     * @param {String} [invoiceDueDate] Search by invoice date from(yyyy-MM-dd).
     * @param {String} [orderDate] Search by OrderDate date(yyyy-MM-dd).
     * @param {String} [orderFromDate] Search by OrderFromDate date(yyyy-MM-dd).
     * @param {String} [orderToDate] Search by OrderToDate date(yyyy-MM-dd).
     * @param {String} [orderNumber] Search by order number
     * @param {String} [deliveryNumber] Search by delivery number.
     * @param {String} [invoiceNumber] The Ingram Micro invoice number.
     * @param {String} [invoiceStatus] Ingram Micro invoice status.
     * @param {String} [invoiceType] Ingram Micro InvoiceType.
     * @param {String} [customerOrderNumber] Ingram Micro CustomerOrderNumber.
     * @param {String} [endCustomerOrderNumber] Ingram Micro EndCustomerOrderNumber.
     * @param {String} [specialBidNumber] Ingram Micro SpecialBidNumber.
     * @param {String} [invoiceFromDueDate] Search by invoice due date from(yyyy-MM-dd).
     * @param {String} [invoiceToDueDate] Search by invoice due date to(yyyy-MM-dd).
     * @param {Array.<String>} [invoiceFromDate] Search by invoice date from(yyyy-MM-dd).
     * @param {Array.<String>} [invoiceToDate] Search by invoice date To(yyyy-MM-dd).
     * @param {Number} [pageSize] Number of records required in the call - max records 100 per page.
     * @param {Number} [pageNumber] The page number reference.
     * @param {String} [orderby] Column name with which we want to sort.
     * @param {String} [direction] asc or desc , along with orderby column result set will be sorted.
     * @param {String} [serialNumber] Serial number of the product.
     * @param {module:api/InvoicesApi~getResellersV6InvoicesearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceSearchResponse}
     */
    getResellersV6Invoicesearch(iMApplicationID, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMApplicationID' is set
      if (iMApplicationID === undefined || iMApplicationID === null) {
        throw new Error("Missing the required parameter 'iMApplicationID' when calling getResellersV6Invoicesearch");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Invoicesearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Invoicesearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Invoicesearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'paymentTermsNetDate': opts['paymentTermsNetDate'],
        'invoiceDate': opts['invoiceDate'],
        'invoiceDueDate': opts['invoiceDueDate'],
        'orderDate': opts['orderDate'],
        'orderFromDate': opts['orderFromDate'],
        'orderToDate': opts['orderToDate'],
        'orderNumber': opts['orderNumber'],
        'DeliveryNumber': opts['deliveryNumber'],
        'invoiceNumber': opts['invoiceNumber'],
        'invoiceStatus': opts['invoiceStatus'],
        'invoiceType': opts['invoiceType'],
        'customerOrderNumber': opts['customerOrderNumber'],
        'endCustomerOrderNumber': opts['endCustomerOrderNumber'],
        'specialBidNumber': opts['specialBidNumber'],
        'invoiceFromDueDate': opts['invoiceFromDueDate'],
        'invoiceToDueDate': opts['invoiceToDueDate'],
        'invoiceFromDate': this.apiClient.buildCollectionParam(opts['invoiceFromDate'], 'multi'),
        'invoiceToDate': this.apiClient.buildCollectionParam(opts['invoiceToDate'], 'multi'),
        'pageSize': opts['pageSize'],
        'pageNumber': opts['pageNumber'],
        'orderby': opts['orderby'],
        'direction': opts['direction'],
        'serialNumber': opts['serialNumber']
      };
      let headerParams = {
        'IM-ApplicationID': iMApplicationID,
        'IM-CustomerNumber': iMCustomerNumber,
        'IM-CountryCode': iMCountryCode,
        'IM-CorrelationID': iMCorrelationID
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InvoiceSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
