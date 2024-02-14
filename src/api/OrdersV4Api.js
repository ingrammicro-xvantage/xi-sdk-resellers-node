/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
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
import OrderCreateRequest from '../model/OrderCreateRequest';
import OrderCreateResponse from '../model/OrderCreateResponse';
import OrderDeleteRequest from '../model/OrderDeleteRequest';
import OrderDeleteResponse from '../model/OrderDeleteResponse';
import OrderDetailRequest from '../model/OrderDetailRequest';
import OrderDetailResponse from '../model/OrderDetailResponse';
import OrderModifyRequest from '../model/OrderModifyRequest';
import OrderModifyResponse from '../model/OrderModifyResponse';
import OrderSearchRequest from '../model/OrderSearchRequest';
import OrderSearchResponse from '../model/OrderSearchResponse';

/**
* OrdersV4 service.
* @module api/OrdersV4Api
* @version 1.0.0
*/
export default class OrdersV4Api {

    /**
    * Constructs a new OrdersV4Api. 
    * @alias module:api/OrdersV4Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postV4Ordercreate operation.
     * @callback module:api/OrdersV4Api~postV4OrdercreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Order
     * The order create transaction is a real-time transaction that allows customers to place standard product and direct ship (licensing and warranties) orders with Ingram Micro using API.
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderCreateRequest} [orderCreateRequest] 
     * @param {module:api/OrdersV4Api~postV4OrdercreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCreateResponse}
     */
    postV4Ordercreate(opts, callback) {
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
        '/orders/v4/ordercreate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV4Orderdelete operation.
     * @callback module:api/OrdersV4Api~postV4OrderdeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Order
     * A real-time request to delete a previously accepted order must be submitted before the order is released to Ingram Micro’s warehouse. After release the order is no longer eligible for deletion. Order delete transaction submitted after the order is released will be rejected and will not be applied. *Direct ship orders cannot be deleted. Contact your sales rep for assistance.
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderDeleteRequest} [orderDeleteRequest] 
     * @param {module:api/OrdersV4Api~postV4OrderdeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDeleteResponse}
     */
    postV4Orderdelete(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderDeleteRequest'];

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
      let returnType = OrderDeleteResponse;
      return this.apiClient.callApi(
        '/orders/v4/orderdelete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV4Orderdetails operation.
     * @callback module:api/OrdersV4Api~postV4OrderdetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderDetailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Order Details
     * A real-time request that allows the customer to query Ingram Micro for detailed information for a specific open or shipped order. Orders are searched using Ingram Micro Sales Order Number.
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderDetailRequest} [orderDetailRequest] 
     * @param {module:api/OrdersV4Api~postV4OrderdetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderDetailResponse}
     */
    postV4Orderdetails(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderDetailRequest'];

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
      let returnType = OrderDetailResponse;
      return this.apiClient.callApi(
        '/orders/v4/orderdetails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV4Ordermodify operation.
     * @callback module:api/OrdersV4Api~postV4OrdermodifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderModifyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an Existing Order
     * The order modify transaction allows for changes to be made after the order creation process but before the order is released to Ingram Micro’s warehouse system.  Order modify transaction submitted after the order is released will be rejected and will not be applied.  Types of modifications allowable: Order release, add comment, and carrier change. NOTE - Direct Ship orders cannot be modified. 
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderModifyRequest} [orderModifyRequest] 
     * @param {module:api/OrdersV4Api~postV4OrdermodifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderModifyResponse}
     */
    postV4Ordermodify(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderModifyRequest'];

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
      let returnType = OrderModifyResponse;
      return this.apiClient.callApi(
        '/orders/v4/ordermodify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postV4Ordersearch operation.
     * @callback module:api/OrdersV4Api~postV4OrdersearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Order Search
     * Search your orders using various search parameters
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderSearchRequest} [orderSearchRequest] 
     * @param {module:api/OrdersV4Api~postV4OrdersearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderSearchResponse}
     */
    postV4Ordersearch(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderSearchRequest'];

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
      let returnType = OrderSearchResponse;
      return this.apiClient.callApi(
        '/orders/v4/orderlookup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
