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


import ApiClient from "../ApiClient";
import GetResellerV6ValidateQuote500Response from '../model/GetResellerV6ValidateQuote500Response';
import PostQuoteToOrderV6400Response from '../model/PostQuoteToOrderV6400Response';
import QuoteToOrderDetailsDTO from '../model/QuoteToOrderDetailsDTO';
import QuoteToOrderResponse from '../model/QuoteToOrderResponse';

/**
* QuoteToOrder service.
* @module api/QuoteToOrderApi
* @version 6.0
*/
export default class QuoteToOrderApi {

    /**
    * Constructs a new QuoteToOrderApi. 
    * @alias module:api/QuoteToOrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postQuoteToOrderV6 operation.
     * @callback module:api/QuoteToOrderApi~postQuoteToOrderV6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/QuoteToOrderResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Quote To Order
     * The “Quote to Order” (QTO) endpoint allows a customer to create an order using the existing quote which is in “Ready to Order” status. A customer can create an order using Configure to order (CTO) quote or a non-configure to order (Non-CTO) quote. Upon successful submission of the order create request, a confirmation message will be returned as an API response. <br > <br >Ingram Micro offers webhooks as a method to send notifications to Resellers once the order creation request is received. All the updates related to Order creation will be pushed as a notification to the customer via a pre-defined callback URL as an HTTP post. <br > <br > **Prerequisite:** Pre-defined callback URL <br > <br > Before creating an order using the quote, it’s recommended to validate the quote using the “Validate Quote” endpoint. Validate Quote endpoint will not only validate the quote but also outline all the mandatory fields required by the vendor at a header level and at the line level which a customer need to pass to the Quote To Order endpoint request.  For a detailed understanding of the “Validate Quote” endpoint, review the “Validate Quote” endpoint documentation. <br ><br > **How it works:** <br ><br > - The customer validates the quote with a quote number from Validate Quote endpoint. <br > - The customer copies all the mandatory fields required by the vendor and adds them to the QTO request body. <br > - The customer provides all the values for Vendor mandatory fields along with other required information for QTO to create an order. <br > - After the order creation request receipt acknowledgment from the QTO endpoint, all further order creation updates will be provided via webhook push notification.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {module:model/QuoteToOrderDetailsDTO} quoteToOrderDetailsDTO 
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction.
     * @param {module:api/QuoteToOrderApi~postQuoteToOrderV6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/QuoteToOrderResponse}
     */
    postQuoteToOrderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, quoteToOrderDetailsDTO, opts, callback) {
      opts = opts || {};
      let postBody = quoteToOrderDetailsDTO;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postQuoteToOrderV6");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postQuoteToOrderV6");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postQuoteToOrderV6");
      }
      // verify the required parameter 'quoteToOrderDetailsDTO' is set
      if (quoteToOrderDetailsDTO === undefined || quoteToOrderDetailsDTO === null) {
        throw new Error("Missing the required parameter 'quoteToOrderDetailsDTO' when calling postQuoteToOrderV6");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = QuoteToOrderResponse;
      return this.apiClient.callApi(
        '/resellers/v6/q2o/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
