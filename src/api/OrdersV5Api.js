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
import OrderCancelResponse from '../model/OrderCancelResponse';
import OrderCreateRequest from '../model/OrderCreateRequest';
import OrderCreateResponse from '../model/OrderCreateResponse';
import OrderDetailResponse from '../model/OrderDetailResponse';
import OrderSearchResponse from '../model/OrderSearchResponse';

/**
* OrdersV5 service.
* @module api/OrdersV5Api
* @version 6.0
*/
export default class OrdersV5Api {

    /**
    * Constructs a new OrdersV5Api. 
    * @alias module:api/OrdersV5Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteOrdersOrderNumber operation.
     * @callback module:api/OrdersV5Api~deleteOrdersOrderNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderCancelResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel an Existing Order
     * This endpoint is a request to cancel a previously accepted order. Use your Ingram Micro sales order number to cancel an order.   The <strong>orderNumber, isoCountryCode, customerNumber</strong> and <strong>entryDate</strong> parameters are required.   This call must be submitted <strong>before</strong> the order is released to Ingram Micro’s warehouse. The order cannot be canceled once it is released to the warehouse.   Direct ship orders cannot be canceled. Contact your Ingram Micro sales rep for assistance.
     * @param {String} ordernumber Ingram Micro sales order number
     * @param {String} customerNumber Your unique Ingram Micro customer number
     * @param {String} isoCountryCode 2 chars ISO country code
     * @param {String} entryDate Order entry date (yyyy-mm-dd)
     * @param {module:api/OrdersV5Api~deleteOrdersOrderNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCancelResponse}
     */
    deleteOrdersOrderNumber(ordernumber, customerNumber, isoCountryCode, entryDate, callback) {
      let postBody = null;
      // verify the required parameter 'ordernumber' is set
      if (ordernumber === undefined || ordernumber === null) {
        throw new Error("Missing the required parameter 'ordernumber' when calling deleteOrdersOrderNumber");
      }
      // verify the required parameter 'customerNumber' is set
      if (customerNumber === undefined || customerNumber === null) {
        throw new Error("Missing the required parameter 'customerNumber' when calling deleteOrdersOrderNumber");
      }
      // verify the required parameter 'isoCountryCode' is set
      if (isoCountryCode === undefined || isoCountryCode === null) {
        throw new Error("Missing the required parameter 'isoCountryCode' when calling deleteOrdersOrderNumber");
      }
      // verify the required parameter 'entryDate' is set
      if (entryDate === undefined || entryDate === null) {
        throw new Error("Missing the required parameter 'entryDate' when calling deleteOrdersOrderNumber");
      }

      let pathParams = {
        'ordernumber': ordernumber
      };
      let queryParams = {
        'customerNumber': customerNumber,
        'isoCountryCode': isoCountryCode,
        'entryDate': entryDate
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderCancelResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Orders/{ordernumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrdersSearch operation.
     * @callback module:api/OrdersV5Api~getOrdersSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search your Orders
     * Search your Ingram Micro orders. This endpoint searches by multiple order parameters and supports pagination of results. Search using one or more of the parameters below:   <ul><li>ordernumber — Ingram Micro sales order number</li><li>customerordernumber — The PO or order number provided by you when creating an order</li><li>orderstatus — user order status codes for the search, default is set to \"any\"</li><li>startcreatetimestamp and endcreatetimestamp — Order create date range</li></ul>   For pagination, please use these parameters:  <ul><li>pagesize — default 25, max 100</li><li>pagenumber — default 1</li></ul>   Order Status Values:  <ul><li>P – PENDING</li><li>R – RELEASED</li><li>4 – SHIPPED</li><li>I – INVOICED</li><li>V – VOIDED</li></ul>   The search endpoint also returns HATEOAS links for order details and invoice details, if applicable.
     * @param {String} customerNumber Your unique Ingram Micro customer number
     * @param {String} isocountrycode 2 char iso country code
     * @param {Object} opts Optional parameters
     * @param {String} [ordernumber] Ingram sales order number
     * @param {String} [customerordernumber] Search using your PO/Order number
     * @param {module:model/String} [orderstatus = 'any')] Ingram Micro order status
     * @param {Date} [startcreatetimestamp] Search start date/time in UTC format
     * @param {Date} [endcreatetimestamp] Search end date/time in UTC format
     * @param {Number} [pagesize] Number of records required in the call
     * @param {Number} [pagenumber = 1)] the page number reference
     * @param {module:api/OrdersV5Api~getOrdersSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSearchResponse}
     */
    getOrdersSearch(customerNumber, isocountrycode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'customerNumber' is set
      if (customerNumber === undefined || customerNumber === null) {
        throw new Error("Missing the required parameter 'customerNumber' when calling getOrdersSearch");
      }
      // verify the required parameter 'isocountrycode' is set
      if (isocountrycode === undefined || isocountrycode === null) {
        throw new Error("Missing the required parameter 'isocountrycode' when calling getOrdersSearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'customerNumber': customerNumber,
        'isocountrycode': isocountrycode,
        'ordernumber': opts['ordernumber'],
        'customerordernumber': opts['customerordernumber'],
        'orderstatus': opts['orderstatus'],
        'startcreatetimestamp': opts['startcreatetimestamp'],
        'endcreatetimestamp': opts['endcreatetimestamp'],
        'pagesize': opts['pagesize'],
        'pagenumber': opts['pagenumber']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Orders/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getV5OrdersDetails operation.
     * @callback module:api/OrdersV5Api~getV5OrdersDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Details
     * Use your Ingram Micro sales order number to search for existing orders or retrieve existing order details.   <b>The sales order number, customer number and isoCountryCode are required parameters.</b>   The sales order number is returned in the Order Create POST response. Ingram Micro recommends that you save this number for future uses.   The IM sales order number can also be retrieved by searching for your existing order using the Order Search GET endpoint. You will need the customer PO number or order number that was provided at the time of order creation.   In a case when the IM sales order number is repeated, you can refine the result by providing customer order number for additional filtering or using the date range to filter orders by creation date.   Use the \"simulate\" query parameter to test the GET order response for various order statuses. This parameter is only available in the sandbox to help with development and testing of the GET order endpoint.
     * @param {String} ordernumber Ingram Micro sales order number
     * @param {String} customernumber Your unique Ingram Micro customer number
     * @param {String} isocountrycode 2 chars ISO country code
     * @param {Object} opts Optional parameters
     * @param {String} [customerordernumber] Your PO/Order Number provide at the time of order creation
     * @param {Date} [startcreatetimestamp] Filter start date - format YYYY-MM-DD
     * @param {String} [endcreatetimestamp] Filter end date - format YYYY-MM-DD
     * @param {module:model/String} [simulate] Order response for various order statuses. Not for use in production.
     * @param {module:api/OrdersV5Api~getV5OrdersDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDetailResponse}
     */
    getV5OrdersDetails(ordernumber, customernumber, isocountrycode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ordernumber' is set
      if (ordernumber === undefined || ordernumber === null) {
        throw new Error("Missing the required parameter 'ordernumber' when calling getV5OrdersDetails");
      }
      // verify the required parameter 'customernumber' is set
      if (customernumber === undefined || customernumber === null) {
        throw new Error("Missing the required parameter 'customernumber' when calling getV5OrdersDetails");
      }
      // verify the required parameter 'isocountrycode' is set
      if (isocountrycode === undefined || isocountrycode === null) {
        throw new Error("Missing the required parameter 'isocountrycode' when calling getV5OrdersDetails");
      }

      let pathParams = {
        'ordernumber': ordernumber
      };
      let queryParams = {
        'customernumber': customernumber,
        'isocountrycode': isocountrycode,
        'customerordernumber': opts['customerordernumber'],
        'startcreatetimestamp': opts['startcreatetimestamp'],
        'endcreatetimestamp': opts['endcreatetimestamp'],
        'simulate': opts['simulate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['application'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderDetailResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Orders/{ordernumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV5OrdersCreate operation.
     * @callback module:api/OrdersV5Api~postV5OrdersCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a New Order
     * Instantly create and place orders. The POST API supports stocked SKUs as well as licensing and warranties SKUs.   Every order to be created with this API must complete these validations to be placed and processed:<ul><li>SKU, shipping address, product authorization and stock allocations must clear validation.</li><li>Ingram Micro Sales validates pricing, stock or other processing parameters. Ingram Micro sales may place an order a hold if revision is necessary.</li><li>Credit validation confirms available credit prior to processing an order. If an order does not clear credit validation, the Ingram Micro sales rep or accounts receivable manager will contact you for next steps.</li><li>Warehouse validation selects the location closest to the destination zip code. If the stock is not available in any of the warehouses, Ingram Micro places a backorder in the warehouse closest to the destination zip code.</li></ul>   Ingram Micro recommends that you provide the <strong>ingrampartnumber</strong> for each SKU contained in each order.   When using <strong>vendorpartnumber</strong> to place an order, please use the product search endpoint to find the <strong>ingrampartnumber</strong> for a specific <strong>vendorpartnumber</strong>, and then supply the <strong>ingrampartnumber</strong> to place an order.   <strong>NOTE:</strong> You must have net terms to use the <strong>Ingram Micro Order Create API</strong>. Ingram Micro offers trade credit when using our APIs, and repayment is based on net terms. For example, if your net terms agreement is net-30, you will have 30 days to make a full payment. Ingram Micro does not allow credit card transactions for API ordering.
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderCreateRequest} [orderCreateRequest] 
     * @param {module:api/OrdersV5Api~postV5OrdersCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCreateResponse}
     */
    postV5OrdersCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderCreateRequest'];

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
      let returnType = OrderCreateResponse;
      return this.apiClient.callApi(
        '/resellers/v5/Orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
