# ResellerApiDocumentationUnitedStates.DealsApi

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResellersV6Dealsdetails**](DealsApi.md#getResellersV6Dealsdetails) | **GET** /resellers/v6/deals/{dealId} | Deals Details
[**getResellersV6Dealssearch**](DealsApi.md#getResellersV6Dealssearch) | **GET** /resellers/v6/deals/search | Deals Search



## getResellersV6Dealsdetails

> DealsDetailsResponse getResellersV6Dealsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, dealId, opts)

Deals Details

The Deals Details API will retrieve all the details related to the specific deal id.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.DealsApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let dealId = 12345678; // String | Unique deal ID.
let opts = {
  'iMSenderID': MyCompany // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.getResellersV6Dealsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, dealId, opts, (error, data, response) => {
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
 **dealId** | **String**| Unique deal ID. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**DealsDetailsResponse**](DealsDetailsResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResellersV6Dealssearch

> DealsSearchResponse getResellersV6Dealssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Deals Search

The Deals Search API, by default, will retrieve all the deals that are associated with the customer’s account. The customer will be able to search deals using the End-user name, Vendor name, or DealID. 

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.DealsApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let opts = {
  'iMSenderID': MyCompany, // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'endUser': EnduserCompany, // String | The end user/customer's name.
  'vendor': Cisco, // String | The vendor's name.
  'dealId': 12345678 // String | Deal/Special bid number.
};
apiInstance.getResellersV6Dealssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 
 **endUser** | **String**| The end user/customer&#39;s name. | [optional] 
 **vendor** | **String**| The vendor&#39;s name. | [optional] 
 **dealId** | **String**| Deal/Special bid number. | [optional] 

### Return type

[**DealsSearchResponse**](DealsSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

