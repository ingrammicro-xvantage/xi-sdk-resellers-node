# ResellerApiDocumentationUnitedStates.InvoicesV4Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postV4Invoicedetails**](InvoicesV4Api.md#postV4Invoicedetails) | **POST** /invoices/v4/invoicedetails | Get Invoice Details



## postV4Invoicedetails

> InvoiceDetailResponse postV4Invoicedetails(opts)

Get Invoice Details

A real-time request that allows the customer to query Ingram Micro for Invoice information for a specific open or shipped order (in the past 9 months). Orders are searched using Ingram Micro Sales Order Number.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.InvoicesV4Api();
let opts = {
  'invoiceDetailRequest': {"servicerequest":{"requestpreamble":{"isocountrycode":"US","customernumber":"20-222222"},"invoicedetailrequest":{"invoicenumber":"30-13649-13","customerponumber":"DH-200732"}}} // InvoiceDetailRequest | 
};
apiInstance.postV4Invoicedetails(opts, (error, data, response) => {
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
 **invoiceDetailRequest** | [**InvoiceDetailRequest**](InvoiceDetailRequest.md)|  | [optional] 

### Return type

[**InvoiceDetailResponse**](InvoiceDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

