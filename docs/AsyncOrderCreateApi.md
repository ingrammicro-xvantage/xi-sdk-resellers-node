# XiSdkResellers.AsyncOrderCreateApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAsyncOrderCreateV7**](AsyncOrderCreateApi.md#postAsyncOrderCreateV7) | **POST** /resellers/v7/orders | Async Order Create



## postAsyncOrderCreateV7

> AsyncOrderCreateResponse postAsyncOrderCreateV7(iMCustomerNumber, iMCountryCode, iMCorrelationID, asyncOrderCreateDTO, opts)

Async Order Create

This API will allow customers to perform both standard ordering and quote to order functionality via a single API enabling them to have a single endpoint to cater to all types of orders.  This approach will standardize the ordering flow for customers where they will get the response for all orders on to their webhooks.  It provides the much-awaited async ordering flow for Reseller API where large orders can also be placed via a single API with guaranteed delivery. 

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.AsyncOrderCreateApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction accross all the systems.
let asyncOrderCreateDTO = {"quoteNumber":"QUO-14551943-D2Y9L9","customerOrderNumber":"12345","enduserOrderNumber":"","billToAddressId":"XYZ","endUserInfo":{"companyName":"ABC TECH","contact":"44045678","addressLine1":"Texas","addressLine2":"4","addressLine3":"","city":"","state":"","postalCode":"","countryCode":"US","email":"abc@gmail.com","phoneNumber":"445678901"},"shipToInfo":{"addressId":"12345","companyName":"","contact":"","addressLine1":"Texas","addressLine2":"4","addressLine3":"","city":"","state":"","postalCode":"","countryCode":"US","email":"abc@gmail.com"},"additionalAttributes":[{"attributeName":"VEND_AUTH_NBR_FLG","attributeValue":"ABC1234"}],"vmfAdditionalAttributes":[{"attributeName":"","attributeValue":"","attributeDescription":""}],"lines":[{"customerLineNumber":"12","ingramPartNumber":"YN6231","quantity":"2","vmfAdditionalAttributesLines":[{"attributeName":"","attributeValue":"","attributeDescription":""}]}]}; // AsyncOrderCreateDTO | 
let opts = {
  'iMSenderID': MyCompany // String | Unique value used to identify the sender of the transaction.
};
apiInstance.postAsyncOrderCreateV7(iMCustomerNumber, iMCountryCode, iMCorrelationID, asyncOrderCreateDTO, opts, (error, data, response) => {
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
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **asyncOrderCreateDTO** | [**AsyncOrderCreateDTO**](AsyncOrderCreateDTO.md)|  | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. | [optional] 

### Return type

[**AsyncOrderCreateResponse**](AsyncOrderCreateResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

