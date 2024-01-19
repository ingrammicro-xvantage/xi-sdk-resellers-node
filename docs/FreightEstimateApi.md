# XiSdkResellers.FreightEstimateApi

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postFreightestimate**](FreightEstimateApi.md#postFreightestimate) | **POST** /resellers/v6/freightestimate | Freight Estimate



## postFreightestimate

> FreightResponse postFreightestimate(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMCustomerContact, opts)

Freight Estimate

The freight estimator endpoint will allow customers to understand the freight cost for an order.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.FreightEstimateApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let iMCustomerContact = John.Doe@reseller.com; // String | Logged in Users email address contact.
let opts = {
  'iMSenderID': MyCompany, // String | Unique value used to identify the sender of the transaction.
  'freightRequest': {"billToAddressId":"000","shipToAddressId":"200","shipToAddress":{"companyName":"ABC TECH","addressLine1":"17501 W 98TH ST SPC 1833","addressLine2":"string","addressLine3":"string","city":"LENEXA","state":"KS","postalCode":"662191736","countryCode":"US"},"lines":[{"customerLineNumber":"001","ingramPartNumber":"A300-123456","quantity":"1","warehouseId":"20","carrierCode":""},{"customerLineNumber":"002","ingramPartNumber":"A300-789012","quantity":"1","warehouseId":"10","carrierCode":""}]} // FreightRequest | 
};
apiInstance.postFreightestimate(iMCustomerNumber, iMCountryCode, iMCorrelationID, iMCustomerContact, opts, (error, data, response) => {
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
 **iMCustomerContact** | **String**| Logged in Users email address contact. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. | [optional] 
 **freightRequest** | [**FreightRequest**](FreightRequest.md)|  | [optional] 

### Return type

[**FreightResponse**](FreightResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

