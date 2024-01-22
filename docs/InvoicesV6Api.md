# XiSdkResellers.InvoicesV6Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoicedetailsV6**](InvoicesV6Api.md#getInvoicedetailsV6) | **GET** /resellers/v6/invoices/{invoicenumber} | Get Invoice Details v6



## getInvoicedetailsV6

> InvoiceDetailResponse getInvoicedetailsV6(invoicenumber, version, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts)

Get Invoice Details v6

Use your Ingram Micro invoice number to search for existing invoices or retrieve existing invoice details.  The invoice number, IM-CustomerNumber, IM-CountryCode, IM-ApplicationId and IM-CorrelationID are required parameters.  .

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.InvoicesV6Api();
let invoicenumber = 335238411; // String | The Ingram Micro invoice number.
let version = 20-222222; // String | Version of codebase.
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let iMApplicationID = MyCompany; // String | Unique value used to identify the sender of the transaction. Example: MyCompany.
let opts = {
  'customerType': invoice, // String | it should be invoice or order
  'includeSerialNumbers': false // Boolean | if serial in the response send as true or else false
};
apiInstance.getInvoicedetailsV6(invoicenumber, version, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts, (error, data, response) => {
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
 **invoicenumber** | **String**| The Ingram Micro invoice number. | 
 **version** | **String**| Version of codebase. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **iMApplicationID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany. | 
 **customerType** | **String**| it should be invoice or order | [optional] 
 **includeSerialNumbers** | **Boolean**| if serial in the response send as true or else false | [optional] 

### Return type

[**InvoiceDetailResponse**](InvoiceDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

