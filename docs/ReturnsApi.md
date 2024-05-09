# XiSdkResellers.ReturnsApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResellersV6Returnsdetails**](ReturnsApi.md#getResellersV6Returnsdetails) | **GET** /resellers/v6/returns/{caseRequestNumber} | Returns Details
[**getResellersV6Returnssearch**](ReturnsApi.md#getResellersV6Returnssearch) | **GET** /resellers/v6/returns/search | Returns Search
[**postReturnscreate**](ReturnsApi.md#postReturnscreate) | **POST** /resellers/v6/returns/create | Returns Create



## getResellersV6Returnsdetails

> ReturnsDetailsResponse getResellersV6Returnsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, caseRequestNumber, opts)

Returns Details

The Returns Details API will retrieve all the details related to the specific caseRequestNumber.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ReturnsApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let caseRequestNumber = "12345678"; // String | A unique return request number.
let opts = {
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.getResellersV6Returnsdetails(iMCustomerNumber, iMCountryCode, iMCorrelationID, caseRequestNumber, opts, (error, data, response) => {
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
 **caseRequestNumber** | **String**| A unique return request number. | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**ReturnsDetailsResponse**](ReturnsDetailsResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResellersV6Returnssearch

> ReturnsSearchResponse getResellersV6Returnssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Returns Search

The Returns Search API, by default, will retrieve all the returns that are associated with the customer’s account. The customer will be able to search returns using the query parameters. The Returns Search response will return the following information:  returnClaimId, caseRequestNumber, createdOn, referenceNumber, and returnReason.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ReturnsApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let opts = {
  'iMSenderID': "MyCompany", // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'caseRequestNumber': "caseRequestNumber_example", // String | A unique return request number.
  'invoiceNumber': "invoiceNumber_example", // String | The Invoice number for the order.
  'returnClaimId': "returnClaimId_example", // String | A unique return claim Id.
  'referenceNumber': "referenceNumber_example", // String | The reference number for the return.
  'ingramPartNumber': "ingramPartNumber_example", // String | Unique IngramMicro part number.
  'vendorPartNumber': "vendorPartNumber_example", // String | The vendor's part number.
  'returnStatusIn': "returnStatusIn_example", // String | Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided.
  'claimStatusIn': "claimStatusIn_example", // String | Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided.
  'createdOnBt': "createdOnBt_example", // String | The date on which the return request was created. 
  'modifiedOnBt': "modifiedOnBt_example", // String | The date on which the return request was last updated.
  'returnReasonIn': "returnReasonIn_example", // String | Comma separated Pre-defined value. test, (EW) Express Warehousing, (AR) Account Receivables, (BB) Buy Back, (BE) Stock Balance Exception, (BO) Bill Only, (CE) Credit Dept Use - Credit Exception, (CF) Configuration Fee, (CS ) Customer Service Discretion, (CS1) Customer Service Discretion CS Error, (DE) Defective Exception, (DF) Defective Items, (DI) Direct Credit, (DM) Damaged from Carrier, (DN) Damaged Without Product, (DT) Direct/ Special Order, (DT1) Direct Ship billed, not shipped., (FO) Freight Out, (FX) No-Scan, (IN) Incomplete, (LS) Lost Shipment, (MN) Minimum Order Fee Credit, (OS) Over Shipment, (PR) Pricing Error, (RF) Refusal Credit, (RI) Re-Invoice, (RP) Return For Repair, (RT) Return Not Credited, (RTD) RCN, (SB) Stock Balance, (SD) Sales Discretion, (SH) Incorrect Shipping And Handling, (SS) Short Shipment, (SSK) Short Ship kit, (SW) Sales Writeoff, (TE) Opened Return, (TR) Training Refund, (TX) Tax Credit, (WS) Wrong Sales Sealed, (WW) Wrong Warehouse, (FS) Warehouse Failed Serial# Capture, Latin America Vebdor Credits, Select Source, ITAD - Trade-in Credit, Withholding Tax
  'page': "page_example", // String | Number of page.
  'size': "size_example", // String | The submitted pagesize, default is 25
  'sort': "sort_example", // String | Refers to the column selected to apply the sorting criteria.
  'sortingColumnName': "sortingColumnName_example" // String | The column name which will be sorted on.
};
apiInstance.getResellersV6Returnssearch(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **caseRequestNumber** | **String**| A unique return request number. | [optional] 
 **invoiceNumber** | **String**| The Invoice number for the order. | [optional] 
 **returnClaimId** | **String**| A unique return claim Id. | [optional] 
 **referenceNumber** | **String**| The reference number for the return. | [optional] 
 **ingramPartNumber** | **String**| Unique IngramMicro part number. | [optional] 
 **vendorPartNumber** | **String**| The vendor&#39;s part number. | [optional] 
 **returnStatusIn** | **String**| Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided. | [optional] 
 **claimStatusIn** | **String**| Comma-separated values of pre-defined status. Open, Approved, Partially Approved, Denied, Voided. | [optional] 
 **createdOnBt** | **String**| The date on which the return request was created.  | [optional] 
 **modifiedOnBt** | **String**| The date on which the return request was last updated. | [optional] 
 **returnReasonIn** | **String**| Comma separated Pre-defined value. test, (EW) Express Warehousing, (AR) Account Receivables, (BB) Buy Back, (BE) Stock Balance Exception, (BO) Bill Only, (CE) Credit Dept Use - Credit Exception, (CF) Configuration Fee, (CS ) Customer Service Discretion, (CS1) Customer Service Discretion CS Error, (DE) Defective Exception, (DF) Defective Items, (DI) Direct Credit, (DM) Damaged from Carrier, (DN) Damaged Without Product, (DT) Direct/ Special Order, (DT1) Direct Ship billed, not shipped., (FO) Freight Out, (FX) No-Scan, (IN) Incomplete, (LS) Lost Shipment, (MN) Minimum Order Fee Credit, (OS) Over Shipment, (PR) Pricing Error, (RF) Refusal Credit, (RI) Re-Invoice, (RP) Return For Repair, (RT) Return Not Credited, (RTD) RCN, (SB) Stock Balance, (SD) Sales Discretion, (SH) Incorrect Shipping And Handling, (SS) Short Shipment, (SSK) Short Ship kit, (SW) Sales Writeoff, (TE) Opened Return, (TR) Training Refund, (TX) Tax Credit, (WS) Wrong Sales Sealed, (WW) Wrong Warehouse, (FS) Warehouse Failed Serial# Capture, Latin America Vebdor Credits, Select Source, ITAD - Trade-in Credit, Withholding Tax | [optional] 
 **page** | **String**| Number of page. | [optional] 
 **size** | **String**| The submitted pagesize, default is 25 | [optional] 
 **sort** | **String**| Refers to the column selected to apply the sorting criteria. | [optional] 
 **sortingColumnName** | **String**| The column name which will be sorted on. | [optional] 

### Return type

[**ReturnsSearchResponse**](ReturnsSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postReturnscreate

> ReturnsCreateResponse postReturnscreate(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Returns Create

Return create endpoint will allow customers to create a return request. In order to create a request, the customer must provide either ingramPartNumber or vendorPartNumber along with other required fields listed below. 

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ReturnsApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let opts = {
  'iMSenderID': "MyCompany", // String | Unique value used to identify the sender of the transaction. Example: MyCompany
  'returnsCreateRequest': {"list":[{"invoiceNumber":"40-NFERG-11","invoiceDate":"2023-07-18","customerOrderNumber":"","ingramPartNumber":"164B2G","vendorPartNumber":"","serialNumber":"","quantity":"1","primaryReason":"I have not received part or all of my order","secondaryReason":"Received only partial shipment.","notes":"B2BCartCreation20","referenceNumber":"RefNum","billToAddressId":"000","shipFromInfo":{"companyName":"ABC TECH","contact":"STARK","addressLine1":"17501 W 98TH ST SPC 1833","addressLine2":"string","addressLine3":"string","city":"LENEXA","state":"KS","postalCode":"662191736","countryCode":"US","email":"stark@gmail.com","phoneNumber":""},"numberOfBoxes":"1"}]} // ReturnsCreateRequest | 
};
apiInstance.postReturnscreate(iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **returnsCreateRequest** | [**ReturnsCreateRequest**](ReturnsCreateRequest.md)|  | [optional] 

### Return type

[**ReturnsCreateResponse**](ReturnsCreateResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

