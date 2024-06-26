/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
import AsyncOrderCreateDTO from '../model/AsyncOrderCreateDTO';
import AsyncOrderCreateResponse from '../model/AsyncOrderCreateResponse';
import ErrorResponse from '../model/ErrorResponse';
import ErrorResponseDTO from '../model/ErrorResponseDTO';
import OrderCreateRequest from '../model/OrderCreateRequest';
import OrderCreateResponse from '../model/OrderCreateResponse';
import OrderDetailB2B from '../model/OrderDetailB2B';
import OrderModifyRequest from '../model/OrderModifyRequest';
import OrderModifyResponse from '../model/OrderModifyResponse';
import OrderSearchResponse from '../model/OrderSearchResponse';
import PostCreateorderV7400Response from '../model/PostCreateorderV7400Response';
import PostCreateorderV7500Response from '../model/PostCreateorderV7500Response';

/**
* Orders service.
* @module api/OrdersApi
* @version 1.0.0
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteOrdercancel operation.
     * @callback module:api/OrdersApi~deleteOrdercancelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel your Order
     * This call must be submitted before the order is released to Ingram Micro’s warehouse. The order cannot be canceled once it is released to the warehouse. Order should be on customer hold to delete any order from Ingram system.
     * @param {String} orderNumber Ingram Micro sales order number.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [regionCode] Region code for sandbox testing - Not for use in production.
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/OrdersApi~deleteOrdercancelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteOrdercancel(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderNumber' is set
      if (orderNumber === undefined || orderNumber === null) {
        throw new Error("Missing the required parameter 'orderNumber' when calling deleteOrdercancel");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling deleteOrdercancel");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling deleteOrdercancel");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling deleteOrdercancel");
      }

      let pathParams = {
        'OrderNumber': orderNumber
      };
      let queryParams = {
        'regionCode': opts['regionCode']
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/resellers/v6/orders/{OrderNumber}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderdetailsV61 operation.
     * @callback module:api/OrdersApi~getOrderdetailsV61Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailB2B} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Details v6.1
     * The Orders details API endpoint allows a customer to retrieve their Ingram Micro orders details by using the Ingram Micro sales order number as a path parameter. The sales order number, IM-CustomerNumber, IM-CountryCode, and IM-CorrelationID are required parameters.<br><br>*Service contracts, subscriptions, and license information are unavailable at the moment, this information will be available in the future. <br><br> Recent bug fixes:   - Fixed duplication of serial numbers in the API response.   - Fixed API time-out issues   - Fixed missing tracking information.   - Implemented enhanced order status.  
     * @param {String} ordernumber The Ingram Micro sales order number.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany.
     * @param {Date} [ingramOrderDate] The date and time in UTC format that the order was created.
     * @param {String} [vendorNumber] Vendor Number.
     * @param {module:model/String} [simulateStatus] Order response for various order statuses. Not for use in production.
     * @param {Boolean} [isIml] True/False only for IML customers.
     * @param {String} [regionCode] Region code for sandbox testing - Not for use in production.
     * @param {module:api/OrdersApi~getOrderdetailsV61Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDetailB2B}
     */
    getOrderdetailsV61(ordernumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ordernumber' is set
      if (ordernumber === undefined || ordernumber === null) {
        throw new Error("Missing the required parameter 'ordernumber' when calling getOrderdetailsV61");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getOrderdetailsV61");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getOrderdetailsV61");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getOrderdetailsV61");
      }

      let pathParams = {
        'ordernumber': ordernumber
      };
      let queryParams = {
        'ingramOrderDate': opts['ingramOrderDate'],
        'vendorNumber': opts['vendorNumber'],
        'simulateStatus': opts['simulateStatus'],
        'isIml': opts['isIml'],
        'regionCode': opts['regionCode']
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderDetailB2B;
      return this.apiClient.callApi(
        '/resellers/v6.1/orders/{ordernumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResellersV6Ordersearch operation.
     * @callback module:api/OrdersApi~getResellersV6OrdersearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search your Orders
     * The Orders Search API endpoint allows a customer to search their Ingram Micro orders by using any of the available query string parameters, customer can search their order by using single query string parameters or combining them together. This endpoint supports the pagination of results.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {Object} opts Optional parameters
     * @param {String} [ingramOrderNumber] The Ingram Micro order number.
     * @param {module:model/String} [orderStatus] Ingram Micro order status.
     * @param {Array.<String>} [orderStatusIn] Ingram Micro order status(can use it for multiple entries).
     * @param {String} [ingramOrderDate] Search by Order date(yyyy-MM-dd).
     * @param {Array.<String>} [ingramOrderDateBt] Search with the start and end date(only 2 entries allowed).
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {String} [customerOrderNumber] Search using your PO/Order number.
     * @param {Number} [pageSize] The number of records required in the call - max records 100 per page.
     * @param {Number} [pageNumber] The page number reference.
     * @param {String} [endCustomerOrderNumber] End customer/user purchase order number.
     * @param {Array.<String>} [invoiceDateBt] Invoice date of order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia.
     * @param {Array.<String>} [shipDateBt] Shipment date of order, search with the start and end date(only 2 entries allowed).
     * @param {Array.<String>} [deliveryDateBt] The delivery date of the order, search with the start and end date(only 2 entries allowed).*Currently, this feature is not available in Australia
     * @param {String} [ingramPartNumber] Ingram Micro unique part number for the product.
     * @param {String} [vendorPartNumber] Vendor’s part number for the product.
     * @param {String} [serialNumber] A serial number of the product.
     * @param {String} [trackingNumber] The tracking number of the order.*Currently, this feature is not available in Australia
     * @param {String} [vendorName] Name of the vendor.
     * @param {String} [specialBidNumber] The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers.*Currently, this feature is not available in Australia
     * @param {module:api/OrdersApi~getResellersV6OrdersearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSearchResponse}
     */
    getResellersV6Ordersearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling getResellersV6Ordersearch");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling getResellersV6Ordersearch");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling getResellersV6Ordersearch");
      }

      let pathParams = {
      };
      let queryParams = {
        'ingramOrderNumber': opts['ingramOrderNumber'],
        'orderStatus': opts['orderStatus'],
        'orderStatus-in': this.apiClient.buildCollectionParam(opts['orderStatusIn'], 'multi'),
        'ingramOrderDate': opts['ingramOrderDate'],
        'ingramOrderDate-bt': this.apiClient.buildCollectionParam(opts['ingramOrderDateBt'], 'multi'),
        'customerOrderNumber': opts['customerOrderNumber'],
        'pageSize': opts['pageSize'],
        'pageNumber': opts['pageNumber'],
        'endCustomerOrderNumber': opts['endCustomerOrderNumber'],
        'invoiceDate_bt': this.apiClient.buildCollectionParam(opts['invoiceDateBt'], 'multi'),
        'shipDate_bt': this.apiClient.buildCollectionParam(opts['shipDateBt'], 'multi'),
        'deliveryDate_bt': this.apiClient.buildCollectionParam(opts['deliveryDateBt'], 'multi'),
        'ingramPartNumber': opts['ingramPartNumber'],
        'vendorPartNumber': opts['vendorPartNumber'],
        'serialNumber': opts['serialNumber'],
        'trackingNumber': opts['trackingNumber'],
        'vendorName': opts['vendorName'],
        'specialBidNumber': opts['specialBidNumber']
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderSearchResponse;
      return this.apiClient.callApi(
        '/resellers/v6/orders/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCreateorderV6 operation.
     * @callback module:api/OrdersApi~postCreateorderV6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create your Order
     * Instantly create and place orders. The POST API supports stocked SKUs as well as licensing and warranties SKUs. IM-CustomerNumber, IM-CountryCode, IM-SenderID and IM-CorrelationID are required parameters. Ingram Micro recommends that you provide the ingrampartnumber for each SKU contained in each order. NOTE: You must have net terms to use the Ingram Micro Order Create API. Ingram Micro offers trade credit when using our APIs, and repayment is based on net terms. For example, if your net terms agreement is net-30, you will have 30 days to make a full payment. Ingram Micro does not allow credit card transactions for API ordering. 
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {module:model/OrderCreateRequest} orderCreateRequest 
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/OrdersApi~postCreateorderV6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCreateResponse}
     */
    postCreateorderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, orderCreateRequest, opts, callback) {
      opts = opts || {};
      let postBody = orderCreateRequest;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postCreateorderV6");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postCreateorderV6");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postCreateorderV6");
      }
      // verify the required parameter 'orderCreateRequest' is set
      if (orderCreateRequest === undefined || orderCreateRequest === null) {
        throw new Error("Missing the required parameter 'orderCreateRequest' when calling postCreateorderV6");
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
      let returnType = OrderCreateResponse;
      return this.apiClient.callApi(
        '/resellers/v6/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postCreateorderV7 operation.
     * @callback module:api/OrdersApi~postCreateorderV7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AsyncOrderCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create your Order v7
     * This API will allow customers to perform both standard ordering and quote to order functionality via a single API enabling them to have a single endpoint to cater to all types of orders.  This approach will standardize the ordering flow for customers where they will get the response for all orders on to their webhooks.  It provides the much-awaited async ordering flow for Reseller API where large orders can also be placed via a single API with guaranteed delivery. 
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction accross all the systems.
     * @param {module:model/AsyncOrderCreateDTO} asyncOrderCreateDTO 
     * @param {Object} opts Optional parameters
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction.
     * @param {module:api/OrdersApi~postCreateorderV7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AsyncOrderCreateResponse}
     */
    postCreateorderV7(iMCustomerNumber, iMCountryCode, iMCorrelationID, asyncOrderCreateDTO, opts, callback) {
      opts = opts || {};
      let postBody = asyncOrderCreateDTO;
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling postCreateorderV7");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling postCreateorderV7");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling postCreateorderV7");
      }
      // verify the required parameter 'asyncOrderCreateDTO' is set
      if (asyncOrderCreateDTO === undefined || asyncOrderCreateDTO === null) {
        throw new Error("Missing the required parameter 'asyncOrderCreateDTO' when calling postCreateorderV7");
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
      let returnType = AsyncOrderCreateResponse;
      return this.apiClient.callApi(
        '/resellers/v7/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putOrdermodify operation.
     * @callback module:api/OrdersApi~putOrdermodifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderModifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify your Order
     * The Order Modify API endpoint allows for changes to be made to an order after the order creation process as long as the order was created with the customer hold flag.  * Orders can be modified within 24hrs of being placed with the customer hold flag, after 24hrs they are voided if they are not released by the customer.  * Modifying orders that were placed without the customer hold flag is not possible 
     * @param {String} orderNumber Ingram sales order number.
     * @param {String} iMCustomerNumber Your unique Ingram Micro customer number.
     * @param {String} iMCountryCode Two-character ISO country code.
     * @param {String} iMCorrelationID Unique transaction number to identify each transaction across all the systems.
     * @param {module:model/OrderModifyRequest} orderModifyRequest 
     * @param {Object} opts Optional parameters
     * @param {String} [actionCode] Action code to be used for order release.
     * @param {String} [regionCode] Region code paramter to be used only for order release functionality.Region code is only for sandbox not for production
     * @param {String} [iMSenderID] Unique value used to identify the sender of the transaction. Example: MyCompany
     * @param {module:api/OrdersApi~putOrdermodifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderModifyResponse}
     */
    putOrdermodify(orderNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, orderModifyRequest, opts, callback) {
      opts = opts || {};
      let postBody = orderModifyRequest;
      // verify the required parameter 'orderNumber' is set
      if (orderNumber === undefined || orderNumber === null) {
        throw new Error("Missing the required parameter 'orderNumber' when calling putOrdermodify");
      }
      // verify the required parameter 'iMCustomerNumber' is set
      if (iMCustomerNumber === undefined || iMCustomerNumber === null) {
        throw new Error("Missing the required parameter 'iMCustomerNumber' when calling putOrdermodify");
      }
      // verify the required parameter 'iMCountryCode' is set
      if (iMCountryCode === undefined || iMCountryCode === null) {
        throw new Error("Missing the required parameter 'iMCountryCode' when calling putOrdermodify");
      }
      // verify the required parameter 'iMCorrelationID' is set
      if (iMCorrelationID === undefined || iMCorrelationID === null) {
        throw new Error("Missing the required parameter 'iMCorrelationID' when calling putOrdermodify");
      }
      // verify the required parameter 'orderModifyRequest' is set
      if (orderModifyRequest === undefined || orderModifyRequest === null) {
        throw new Error("Missing the required parameter 'orderModifyRequest' when calling putOrdermodify");
      }

      let pathParams = {
        'orderNumber': orderNumber
      };
      let queryParams = {
        'actionCode': opts['actionCode'],
        'regionCode': opts['regionCode']
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
      let returnType = OrderModifyResponse;
      return this.apiClient.callApi(
        '/resellers/v6/orders/{orderNumber}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
