# XiSdkResellers.DealsApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResellersV6Dealsdetails**](DealsApi.md#getResellersV6Dealsdetails) | **GET** /resellers/v6/deals/{dealId} | Deals Details
[**getResellersV6Dealssearch**](DealsApi.md#getResellersV6Dealssearch) | **GET** /resellers/v6/deals/search | Deals Search



## getResellersV6Dealsdetails

> DealsDetailsResponse getResellersV6Dealsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationId, dealId)

Deals Details

The Deals Details API will retrieve all the details related to the specific deal id.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.DealsApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let iMApplicationId = "MyCompany"; // String | Unique value used to identify the sender of the transaction. Example: MyCompany
let dealId = "12345678"; // String | Unique deal ID.
apiInstance.getResellersV6Dealsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationId, dealId, (error, data, response) => {
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
 **iMApplicationId** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | 
 **dealId** | **String**| Unique deal ID. | 

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
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.DealsApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let opts = {
  'iMSenderID': "MyCompany", // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'endUser': "EnduserCompany", // String | The end user/customer's name.
  'vendor': "Cisco", // String | The vendor's name.
  'dealId': "12345678", // String | Deal/Special bid number.
  'size': 56, // Number | The number of records required in the call - max records 100 per page.
  'page': 56 // Number | The page number reference.
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
 **size** | **Number**| The number of records required in the call - max records 100 per page. | [optional] 
 **page** | **Number**| The page number reference. | [optional] 

### Return type

[**DealsSearchResponse**](DealsSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

