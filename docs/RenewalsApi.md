# ResellerApiDocumentation.RenewalsApi

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResellersV6Renewalsdetails**](RenewalsApi.md#getResellersV6Renewalsdetails) | **GET** /resellers/v6/renewals/{renewalId} | Renewals Details
[**postRenewalssearch**](RenewalsApi.md#postRenewalssearch) | **POST** /resellers/v6/renewals/search | Renewals Search



## getResellersV6Renewalsdetails

> RenewalsDetailsResponse getResellersV6Renewalsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, renewalId, opts)

Renewals Details

The Renewal Details API endpoint will retrieve all the details related to the renewal. The customer is required to pass renewalId as a path parameter while sending a request.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.RenewalsApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let renewalId = 123456; // String | Unique Ingram renewal ID.
let opts = {
  'iMSenderID': MyCompany // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.getResellersV6Renewalsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, renewalId, opts, (error, data, response) => {
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
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **renewalId** | **String**| Unique Ingram renewal ID. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**RenewalsDetailsResponse**](RenewalsDetailsResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postRenewalssearch

> RenewalsSearchResponse postRenewalssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, contentType, opts)

Renewals Search

The Renewal Search API, by default, will retrieve all the renewals that are associated with the customer’s account. The customer will be able to search for renewals via basic search or advanced search. Basic search is available thru the query string parameters, whereas the advanced search is available thru the request body schema. 

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.RenewalsApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let contentType = application/json; // String | The media type for JSON Request.
let opts = {
  'iMSenderID': MyCompany, // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'customerOrderNumber': "customerOrderNumber_example", // String | The reseller's unique PO/Order number.
  'ingramPurchaseOrderNumber': "ingramPurchaseOrderNumber_example", // String | Sales order number.
  'serialNumber': "serialNumber_example", // String | A serial number of the product.
  'page': "page_example", // String | Number of page.
  'size': "size_example", // String | The submitted pagesize, default is 25.
  'sort': "sort_example", // String | Refers to the column selected to apply the sorting criteria.
  'renewalsSearchRequest': [{"status":{"OpporutinyStatus":{"value":"Closed","subStatus":"Renewal went direct"}},"dateType":{"startDate":{"customStartDate":"05/27/2023","customEndDate":"06/26/2023"},"endDate":{"customStartDate":"06/26/2023","customEndDate":"07/26/2023"},"invoiceDate":{"customStartDate":"05/27/2023","customEndDate":"06/26/2023"},"expirationDate":{"customStartDate":"06/26/2023","customEndDate":"07/26/2023"}},"vendor":"HP","endUser":"STARK"}] // RenewalsSearchRequest | 
};
apiInstance.postRenewalssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, contentType, opts, (error, data, response) => {
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
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **contentType** | **String**| The media type for JSON Request. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 
 **customerOrderNumber** | **String**| The reseller&#39;s unique PO/Order number. | [optional] 
 **ingramPurchaseOrderNumber** | **String**| Sales order number. | [optional] 
 **serialNumber** | **String**| A serial number of the product. | [optional] 
 **page** | **String**| Number of page. | [optional] 
 **size** | **String**| The submitted pagesize, default is 25. | [optional] 
 **sort** | **String**| Refers to the column selected to apply the sorting criteria. | [optional] 
 **renewalsSearchRequest** | [**RenewalsSearchRequest**](RenewalsSearchRequest.md)|  | [optional] 

### Return type

[**RenewalsSearchResponse**](RenewalsSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

