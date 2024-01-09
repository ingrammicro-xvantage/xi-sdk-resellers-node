# ResellerApiDocumentationUnitedStates.OrdersV4Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postV4Ordercreate**](OrdersV4Api.md#postV4Ordercreate) | **POST** /orders/v4/ordercreate | Create a new Order
[**postV4Orderdelete**](OrdersV4Api.md#postV4Orderdelete) | **POST** /orders/v4/orderdelete | Delete an Order
[**postV4Orderdetails**](OrdersV4Api.md#postV4Orderdetails) | **POST** /orders/v4/orderdetails | Get Order Details
[**postV4Ordermodify**](OrdersV4Api.md#postV4Ordermodify) | **POST** /orders/v4/ordermodify | Modify an Existing Order
[**postV4Ordersearch**](OrdersV4Api.md#postV4Ordersearch) | **POST** /orders/v4/orderlookup | Order Search



## postV4Ordercreate

> OrderCreateResponse postV4Ordercreate(opts)

Create a new Order

The order create transaction is a real-time transaction that allows customers to place standard product and direct ship (licensing and warranties) orders with Ingram Micro using API.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.OrdersV4Api();
let opts = {
  'orderCreateRequest': {"ordercreaterequest":{"requestpreamble":{"isocountrycode":"US","customernumber":"20-222222"},"ordercreatedetails":{"systemid":"","customerponumber":"TESTAPI10156","billtosuffix":"000","shiptoaddress":{"attention":"HARRY WELLS","addressline1":"THE COMPUTER STORE","addressline2":"754 LAS PALMAS DR","city":"IRVINE","state":"CA","postalcode":"926022004","countrycode":"US"},"lines":[{"linetype":"P","linenumber":"001","globalskuid":"","quantity":"1","ingrampartnumber":"NE7872"}],"extendedspecs":[{"attributename":"entrymethod","attributevalue":"WEBS"}]}}} // OrderCreateRequest | 
};
apiInstance.postV4Ordercreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderCreateRequest** | [**OrderCreateRequest**](OrderCreateRequest.md)|  | [optional] 

### Return type

[**OrderCreateResponse**](OrderCreateResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Orderdelete

> OrderDeleteResponse postV4Orderdelete(opts)

Delete an Order

A real-time request to delete a previously accepted order must be submitted before the order is released to Ingram Micro’s warehouse. After release the order is no longer eligible for deletion. Order delete transaction submitted after the order is released will be rejected and will not be applied. *Direct ship orders cannot be deleted. Contact your sales rep for assistance.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.OrdersV4Api();
let opts = {
  'orderDeleteRequest': {"servicerequest":{"requestpreamble":{"isocountrycode":"US","customerumber":"20-222222"},"OrderDeleteRequestDetails":{"entryDate":"2019-01-22","orderBranch":"20","orderNumber":"RC62Z"}}} // OrderDeleteRequest | 
};
apiInstance.postV4Orderdelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderDeleteRequest** | [**OrderDeleteRequest**](OrderDeleteRequest.md)|  | [optional] 

### Return type

[**OrderDeleteResponse**](OrderDeleteResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Orderdetails

> OrderDetailResponse postV4Orderdetails(opts)

Get Order Details

A real-time request that allows the customer to query Ingram Micro for detailed information for a specific open or shipped order. Orders are searched using Ingram Micro Sales Order Number.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.OrdersV4Api();
let opts = {
  'orderDetailRequest': {"servicerequest":{"requestpreamble":{"isocountrycode":"US","customernumber":"20-222222"},"orderdetailrequest":{"ordernumber":"20-B2V9H"}}} // OrderDetailRequest | 
};
apiInstance.postV4Orderdetails(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderDetailRequest** | [**OrderDetailRequest**](OrderDetailRequest.md)|  | [optional] 

### Return type

[**OrderDetailResponse**](OrderDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Ordermodify

> OrderModifyResponse postV4Ordermodify(opts)

Modify an Existing Order

The order modify transaction allows for changes to be made after the order creation process but before the order is released to Ingram Micro’s warehouse system.  Order modify transaction submitted after the order is released will be rejected and will not be applied.  Types of modifications allowable: Order release, add comment, and carrier change. NOTE - Direct Ship orders cannot be modified. 

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.OrdersV4Api();
let opts = {
  'orderModifyRequest': new ResellerApiDocumentationUnitedStates.OrderModifyRequest() // OrderModifyRequest | 
};
apiInstance.postV4Ordermodify(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderModifyRequest** | [**OrderModifyRequest**](OrderModifyRequest.md)|  | [optional] 

### Return type

[**OrderModifyResponse**](OrderModifyResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Ordersearch

> OrderSearchResponse postV4Ordersearch(opts)

Order Search

Search your orders using various search parameters

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.OrdersV4Api();
let opts = {
  'orderSearchRequest': new ResellerApiDocumentationUnitedStates.OrderSearchRequest() // OrderSearchRequest | 
};
apiInstance.postV4Ordersearch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderSearchRequest** | [**OrderSearchRequest**](OrderSearchRequest.md)|  | [optional] 

### Return type

[**OrderSearchResponse**](OrderSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

