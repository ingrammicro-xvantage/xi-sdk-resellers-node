# ResellerApiDocumentationUnitedStates.InvoicesV5Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoices**](InvoicesV5Api.md#getInvoices) | **GET** /resellers/v5/invoices/{invoiceNumber} | Get Invoice Details



## getInvoices

> InvoiceDetails getInvoices(invoiceNumber, customerNumber, isoCountryCode)

Get Invoice Details

View invoice details. This is a request to query invoice details for a specific Ingram Micro order placed in the last 9 months, whether open or shipped.   &lt;strong&gt;invoiceNumber&lt;/strong&gt;, &lt;strong&gt;isoCountryCode&lt;/strong&gt; and &lt;strong&gt;customerNumber&lt;/strong&gt; parameters are required.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.InvoicesV5Api();
let invoiceNumber = "'20-RCW67-11'"; // String | Ingram Micro Invoice Number
let customerNumber = "'20-222222'"; // String | Your unique Ingram Micro customer number
let isoCountryCode = "'US'"; // String | ISO 2 char country code
apiInstance.getInvoices(invoiceNumber, customerNumber, isoCountryCode, (error, data, response) => {
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
 **invoiceNumber** | **String**| Ingram Micro Invoice Number | [default to &#39;20-RCW67-11&#39;]
 **customerNumber** | **String**| Your unique Ingram Micro customer number | [default to &#39;20-222222&#39;]
 **isoCountryCode** | **String**| ISO 2 char country code | [default to &#39;US&#39;]

### Return type

[**InvoiceDetails**](InvoiceDetails.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

