# ResellerApiDocumentationUnitedStates.InvoicesApi

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoicedetailsV61**](InvoicesApi.md#getInvoicedetailsV61) | **GET** /resellers/v6.1/invoices/{invoiceNumber} | Get Invoice Details v6.1
[**getResellersV6Invoicesearch**](InvoicesApi.md#getResellersV6Invoicesearch) | **GET** /resellers/v6/invoices/ | Search your invoice



## getInvoicedetailsV61

> InvoiceDetailsv61Response getInvoicedetailsV61(invoiceNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts)

Get Invoice Details v6.1

Use your Ingram Micro invoice number to search for existing invoices or retrieve existing invoice details.  The invoice number, IM-CustomerNumber, IM-CountryCode, IM-ApplicationId and IM-CorrelationID are required parameters.  .

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.InvoicesApi();
let invoiceNumber = 335238411; // String | The Ingram Micro invoice number.
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let iMApplicationID = MyCompany; // String | Unique value used to identify the sender of the transaction. Example: MyCompany.
let opts = {
  'customerType': invoice, // String | it should be invoice or order
  'includeSerialNumbers': false // Boolean | if serial in the response send as true or else false
};
apiInstance.getInvoicedetailsV61(invoiceNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, iMApplicationID, opts, (error, data, response) => {
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
 **invoiceNumber** | **String**| The Ingram Micro invoice number. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **iMApplicationID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany. | 
 **customerType** | **String**| it should be invoice or order | [optional] 
 **includeSerialNumbers** | **Boolean**| if serial in the response send as true or else false | [optional] 

### Return type

[**InvoiceDetailsv61Response**](InvoiceDetailsv61Response.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResellersV6Invoicesearch

> InvoiceSearchResponse getResellersV6Invoicesearch(iMApplicationID, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Search your invoice

Search your Ingram Micro invoices. This endpoint searches by multiple invoice parameters and supports pagination of results.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.InvoicesApi();
let iMApplicationID = MyCompany; // String | Unique value used to identify the sender of the transaction. Example: MyCompany
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction across all the systems.
let opts = {
  'paymentTermsNetDate': 2021-04-23, // String | Search by payment terms net date(yyyy-MM-dd).
  'invoiceDate': 2021-04-23, // String | Search by invoice date(yyyy-MM-dd).
  'invoiceDueDate': 2021-04-23, // String | Search by invoice date from(yyyy-MM-dd).
  'orderDate': 2021-04-23, // String | Search by OrderDate date(yyyy-MM-dd).
  'orderFromDate': 2021-04-23, // String | Search by OrderFromDate date(yyyy-MM-dd).
  'orderToDate': 2021-04-23, // String | Search by OrderToDate date(yyyy-MM-dd).
  'orderNumber': 2021-04-23, // String | Search by order number
  'deliveryNumber': 335238411, // String | Search by delivery number.
  'invoiceNumber': "invoiceNumber_example", // String | The Ingram Micro invoice number.
  'invoiceStatus': "invoiceStatus_example", // String | Ingram Micro invoice status.
  'invoiceType': "invoiceType_example", // String | Ingram Micro InvoiceType.
  'customerOrderNumber': "customerOrderNumber_example", // String | Ingram Micro CustomerOrderNumber.
  'endCustomerOrderNumber': "endCustomerOrderNumber_example", // String | Ingram Micro EndCustomerOrderNumber.
  'specialBidNumber': "specialBidNumber_example", // String | Ingram Micro SpecialBidNumber.
  'invoiceFromDueDate': 2021-04-23, // String | Search by invoice due date from(yyyy-MM-dd).
  'invoiceToDueDate': 2021-04-23, // String | Search by invoice due date to(yyyy-MM-dd).
  'invoiceFromDate': ["2021-04-23"], // [String] | Search by invoice date from(yyyy-MM-dd).
  'invoiceToDate': ["2021-04-23"], // [String] | Search by invoice date To(yyyy-MM-dd).
  'pageSize': 56, // Number | Number of records required in the call - max records 100 per page.
  'pageNumber': 56, // Number | The page number reference.
  'orderby': InvoiceDate, // String | Column name with which we want to sort.
  'direction': desc, // String | asc or desc , along with orderby column result set will be sorted.
  'serialNumber': "serialNumber_example" // String | Serial number of the product.
};
apiInstance.getResellersV6Invoicesearch(iMApplicationID, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **iMApplicationID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **paymentTermsNetDate** | **String**| Search by payment terms net date(yyyy-MM-dd). | [optional] 
 **invoiceDate** | **String**| Search by invoice date(yyyy-MM-dd). | [optional] 
 **invoiceDueDate** | **String**| Search by invoice date from(yyyy-MM-dd). | [optional] 
 **orderDate** | **String**| Search by OrderDate date(yyyy-MM-dd). | [optional] 
 **orderFromDate** | **String**| Search by OrderFromDate date(yyyy-MM-dd). | [optional] 
 **orderToDate** | **String**| Search by OrderToDate date(yyyy-MM-dd). | [optional] 
 **orderNumber** | **String**| Search by order number | [optional] 
 **deliveryNumber** | **String**| Search by delivery number. | [optional] 
 **invoiceNumber** | **String**| The Ingram Micro invoice number. | [optional] 
 **invoiceStatus** | **String**| Ingram Micro invoice status. | [optional] 
 **invoiceType** | **String**| Ingram Micro InvoiceType. | [optional] 
 **customerOrderNumber** | **String**| Ingram Micro CustomerOrderNumber. | [optional] 
 **endCustomerOrderNumber** | **String**| Ingram Micro EndCustomerOrderNumber. | [optional] 
 **specialBidNumber** | **String**| Ingram Micro SpecialBidNumber. | [optional] 
 **invoiceFromDueDate** | **String**| Search by invoice due date from(yyyy-MM-dd). | [optional] 
 **invoiceToDueDate** | **String**| Search by invoice due date to(yyyy-MM-dd). | [optional] 
 **invoiceFromDate** | [**[String]**](String.md)| Search by invoice date from(yyyy-MM-dd). | [optional] 
 **invoiceToDate** | [**[String]**](String.md)| Search by invoice date To(yyyy-MM-dd). | [optional] 
 **pageSize** | **Number**| Number of records required in the call - max records 100 per page. | [optional] 
 **pageNumber** | **Number**| The page number reference. | [optional] 
 **orderby** | **String**| Column name with which we want to sort. | [optional] 
 **direction** | **String**| asc or desc , along with orderby column result set will be sorted. | [optional] 
 **serialNumber** | **String**| Serial number of the product. | [optional] 

### Return type

[**InvoiceSearchResponse**](InvoiceSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

