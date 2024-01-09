# ResellerApiDocumentationUnitedStates.QuotesV4Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postV4Quotedetails**](QuotesV4Api.md#postV4Quotedetails) | **POST** /quotes/v1/quotedetails | Get Quote Details
[**postV4Quotesearch**](QuotesV4Api.md#postV4Quotesearch) | **POST** /quotes/v1/quotes | Get Quote List



## postV4Quotedetails

> QuoteDetailsResponse postV4Quotedetails(opts)

Get Quote Details

A real-time request to delete a previously accepted order must be submitted before the order is released to Ingram Micro’s warehouse. After release the order is no longer eligible for deletion. Order delete transaction submitted after the order is released will be rejected and will not be applied. *Direct ship orders cannot be deleted. Contact your sales rep for assistance.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.QuotesV4Api();
let opts = {
  'quoteDetailsRequest': {"servicerequest":{"requestpreamble":{"isocountrycode":"US","customerumber":"20-222222"},"OrderDeleteRequestDetails":{"entryDate":"2019-01-22","orderBranch":"20","orderNumber":"RC62Z"}}} // QuoteDetailsRequest | 
};
apiInstance.postV4Quotedetails(opts, (error, data, response) => {
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
 **quoteDetailsRequest** | [**QuoteDetailsRequest**](QuoteDetailsRequest.md)|  | [optional] 

### Return type

[**QuoteDetailsResponse**](QuoteDetailsResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Quotesearch

> QuoteListResponse postV4Quotesearch(opts)

Get Quote List

A real-time request that allows the customer to query Ingram Micro for detailed information for a specific open or shipped order. Orders are searched using Ingram Micro Sales Order Number.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.QuotesV4Api();
let opts = {
  'quoteListRequest': {"servicerequest":{"requestpreamble":{"isocountrycode":"US","customernumber":"20-222222"},"orderdetailrequest":{"ordernumber":"20-B2V9H"}}} // QuoteListRequest | 
};
apiInstance.postV4Quotesearch(opts, (error, data, response) => {
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
 **quoteListRequest** | [**QuoteListRequest**](QuoteListRequest.md)|  | [optional] 

### Return type

[**QuoteListResponse**](QuoteListResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

