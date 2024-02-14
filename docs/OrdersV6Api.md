# XiSdkResellers.OrdersV6Api

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderdetailsV6**](OrdersV6Api.md#getOrderdetailsV6) | **GET** /resellers/v6/orders/{ordernumber} | Get Order Details v6



## getOrderdetailsV6

> OrderDetailResponse getOrderdetailsV6(ordernumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Get Order Details v6

Use your Ingram Micro sales order number to search for existing orders or retrieve existing order details.  The sales order number, IM-CustomerNumber, IM-CountryCode, IM-SenderID and IM-CorrelationID are required parameters.  In a case when the IM sales order number is repeated, you can refine the result by providing for additional filtering.  Use the \&quot;simulateStatus\&quot; query parameter to test the GET order response for various order statuses. This parameter is only available in the sandbox to help with development and testing of the GET order endpoint.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrdersV6Api();
let ordernumber = 20-RD3QV; // String | The Ingram Micro sales order number.
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction accross all the systems.
let opts = {
  'iMSenderID': MyCompany, // String | Unique value used to identify the sender of the transaction. Example: MyCompany.
  'ingramOrderDate': Wed May 13 00:00:00 UTC 2020, // Date | The date and time in UTC format that the order was created.
  'vendorNumber': "vendorNumber_example", // String | Vendor Number.
  'simulateStatus': "simulateStatus_example", // String | Order response for various order statuses. Not for use in production.
  'isIml': true, // Boolean | True/False only for IML customers.
  'regionCode': "regionCode_example" // String | Region code for sandbox testing - Not for use in production.
};
apiInstance.getOrderdetailsV6(ordernumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **ordernumber** | **String**| The Ingram Micro sales order number. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany. | [optional] 
 **ingramOrderDate** | **Date**| The date and time in UTC format that the order was created. | [optional] 
 **vendorNumber** | **String**| Vendor Number. | [optional] 
 **simulateStatus** | **String**| Order response for various order statuses. Not for use in production. | [optional] 
 **isIml** | **Boolean**| True/False only for IML customers. | [optional] 
 **regionCode** | **String**| Region code for sandbox testing - Not for use in production. | [optional] 

### Return type

[**OrderDetailResponse**](OrderDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

