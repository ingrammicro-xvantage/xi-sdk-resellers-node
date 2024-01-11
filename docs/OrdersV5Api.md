# ResellerApiDocumentation.OrdersV5Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrdersOrderNumber**](OrdersV5Api.md#deleteOrdersOrderNumber) | **DELETE** /resellers/v5/Orders/{ordernumber} | Cancel an Existing Order
[**getOrdersSearch**](OrdersV5Api.md#getOrdersSearch) | **GET** /resellers/v5/Orders/search | Search your Orders
[**getV5OrdersDetails**](OrdersV5Api.md#getV5OrdersDetails) | **GET** /resellers/v5/Orders/{ordernumber} | Get Order Details
[**postV5OrdersCreate**](OrdersV5Api.md#postV5OrdersCreate) | **POST** /resellers/v5/Orders | Create a New Order



## deleteOrdersOrderNumber

> OrderCancelResponse deleteOrdersOrderNumber(ordernumber, customerNumber, isoCountryCode, entryDate)

Cancel an Existing Order

This endpoint is a request to cancel a previously accepted order. Use your Ingram Micro sales order number to cancel an order.   The &lt;strong&gt;orderNumber, isoCountryCode, customerNumber&lt;/strong&gt; and &lt;strong&gt;entryDate&lt;/strong&gt; parameters are required.   This call must be submitted &lt;strong&gt;before&lt;/strong&gt; the order is released to Ingram Micro’s warehouse. The order cannot be canceled once it is released to the warehouse.   Direct ship orders cannot be canceled. Contact your Ingram Micro sales rep for assistance.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.OrdersV5Api();
let ordernumber = 20-RD128; // String | Ingram Micro sales order number
let customerNumber = "customerNumber_example"; // String | Your unique Ingram Micro customer number
let isoCountryCode = "isoCountryCode_example"; // String | 2 chars ISO country code
let entryDate = "'2020-04-03'"; // String | Order entry date (yyyy-mm-dd)
apiInstance.deleteOrdersOrderNumber(ordernumber, customerNumber, isoCountryCode, entryDate, (error, data, response) => {
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
 **ordernumber** | **String**| Ingram Micro sales order number | 
 **customerNumber** | **String**| Your unique Ingram Micro customer number | 
 **isoCountryCode** | **String**| 2 chars ISO country code | 
 **entryDate** | **String**| Order entry date (yyyy-mm-dd) | [default to &#39;2020-04-03&#39;]

### Return type

[**OrderCancelResponse**](OrderCancelResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersSearch

> OrderSearchResponse getOrdersSearch(customerNumber, isocountrycode, opts)

Search your Orders

Search your Ingram Micro orders. This endpoint searches by multiple order parameters and supports pagination of results. Search using one or more of the parameters below:   &lt;ul&gt;&lt;li&gt;ordernumber — Ingram Micro sales order number&lt;/li&gt;&lt;li&gt;customerordernumber — The PO or order number provided by you when creating an order&lt;/li&gt;&lt;li&gt;orderstatus — user order status codes for the search, default is set to \&quot;any\&quot;&lt;/li&gt;&lt;li&gt;startcreatetimestamp and endcreatetimestamp — Order create date range&lt;/li&gt;&lt;/ul&gt;   For pagination, please use these parameters:  &lt;ul&gt;&lt;li&gt;pagesize — default 25, max 100&lt;/li&gt;&lt;li&gt;pagenumber — default 1&lt;/li&gt;&lt;/ul&gt;   Order Status Values:  &lt;ul&gt;&lt;li&gt;P – PENDING&lt;/li&gt;&lt;li&gt;R – RELEASED&lt;/li&gt;&lt;li&gt;4 – SHIPPED&lt;/li&gt;&lt;li&gt;I – INVOICED&lt;/li&gt;&lt;li&gt;V – VOIDED&lt;/li&gt;&lt;/ul&gt;   The search endpoint also returns HATEOAS links for order details and invoice details, if applicable.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.OrdersV5Api();
let customerNumber = 20-222222; // String | Your unique Ingram Micro customer number
let isocountrycode = US; // String | 2 char iso country code
let opts = {
  'ordernumber': "ordernumber_example", // String | Ingram sales order number
  'customerordernumber': ZENPO1, // String | Search using your PO/Order number
  'orderstatus': , // String | Ingram Micro order status
  'startcreatetimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Search start date/time in UTC format
  'endcreatetimestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | Search end date/time in UTC format
  'pagesize': 56, // Number | Number of records required in the call
  'pagenumber': 1 // Number | the page number reference
};
apiInstance.getOrdersSearch(customerNumber, isocountrycode, opts, (error, data, response) => {
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
 **customerNumber** | **String**| Your unique Ingram Micro customer number | 
 **isocountrycode** | **String**| 2 char iso country code | 
 **ordernumber** | **String**| Ingram sales order number | [optional] 
 **customerordernumber** | **String**| Search using your PO/Order number | [optional] 
 **orderstatus** | **String**| Ingram Micro order status | [optional] [default to &#39;any&#39;]
 **startcreatetimestamp** | **Date**| Search start date/time in UTC format | [optional] 
 **endcreatetimestamp** | **Date**| Search end date/time in UTC format | [optional] 
 **pagesize** | **Number**| Number of records required in the call | [optional] 
 **pagenumber** | **Number**| the page number reference | [optional] [default to 1]

### Return type

[**OrderSearchResponse**](OrderSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV5OrdersDetails

> OrderDetailResponse getV5OrdersDetails(ordernumber, customernumber, isocountrycode, opts)

Get Order Details

Use your Ingram Micro sales order number to search for existing orders or retrieve existing order details.   &lt;b&gt;The sales order number, customer number and isoCountryCode are required parameters.&lt;/b&gt;   The sales order number is returned in the Order Create POST response. Ingram Micro recommends that you save this number for future uses.   The IM sales order number can also be retrieved by searching for your existing order using the Order Search GET endpoint. You will need the customer PO number or order number that was provided at the time of order creation.   In a case when the IM sales order number is repeated, you can refine the result by providing customer order number for additional filtering or using the date range to filter orders by creation date.   Use the \&quot;simulate\&quot; query parameter to test the GET order response for various order statuses. This parameter is only available in the sandbox to help with development and testing of the GET order endpoint.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.OrdersV5Api();
let ordernumber = 20-RD128; // String | Ingram Micro sales order number
let customernumber = "'20-222222'"; // String | Your unique Ingram Micro customer number
let isocountrycode = "'US'"; // String | 2 chars ISO country code
let opts = {
  'customerordernumber': "customerordernumber_example", // String | Your PO/Order Number provide at the time of order creation
  'startcreatetimestamp': Sun Mar 15 00:00:00 UTC 2020, // Date | Filter start date - format YYYY-MM-DD
  'endcreatetimestamp': 2020-04-20, // String | Filter end date - format YYYY-MM-DD
  'simulate':  // String | Order response for various order statuses. Not for use in production.
};
apiInstance.getV5OrdersDetails(ordernumber, customernumber, isocountrycode, opts, (error, data, response) => {
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
 **ordernumber** | **String**| Ingram Micro sales order number | 
 **customernumber** | **String**| Your unique Ingram Micro customer number | [default to &#39;20-222222&#39;]
 **isocountrycode** | **String**| 2 chars ISO country code | [default to &#39;US&#39;]
 **customerordernumber** | **String**| Your PO/Order Number provide at the time of order creation | [optional] 
 **startcreatetimestamp** | **Date**| Filter start date - format YYYY-MM-DD | [optional] 
 **endcreatetimestamp** | **String**| Filter end date - format YYYY-MM-DD | [optional] 
 **simulate** | **String**| Order response for various order statuses. Not for use in production. | [optional] 

### Return type

[**OrderDetailResponse**](OrderDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV5OrdersCreate

> OrderCreateResponse postV5OrdersCreate(opts)

Create a New Order

Instantly create and place orders. The POST API supports stocked SKUs as well as licensing and warranties SKUs.   Every order to be created with this API must complete these validations to be placed and processed:&lt;ul&gt;&lt;li&gt;SKU, shipping address, product authorization and stock allocations must clear validation.&lt;/li&gt;&lt;li&gt;Ingram Micro Sales validates pricing, stock or other processing parameters. Ingram Micro sales may place an order a hold if revision is necessary.&lt;/li&gt;&lt;li&gt;Credit validation confirms available credit prior to processing an order. If an order does not clear credit validation, the Ingram Micro sales rep or accounts receivable manager will contact you for next steps.&lt;/li&gt;&lt;li&gt;Warehouse validation selects the location closest to the destination zip code. If the stock is not available in any of the warehouses, Ingram Micro places a backorder in the warehouse closest to the destination zip code.&lt;/li&gt;&lt;/ul&gt;   Ingram Micro recommends that you provide the &lt;strong&gt;ingrampartnumber&lt;/strong&gt; for each SKU contained in each order.   When using &lt;strong&gt;vendorpartnumber&lt;/strong&gt; to place an order, please use the product search endpoint to find the &lt;strong&gt;ingrampartnumber&lt;/strong&gt; for a specific &lt;strong&gt;vendorpartnumber&lt;/strong&gt;, and then supply the &lt;strong&gt;ingrampartnumber&lt;/strong&gt; to place an order.   &lt;strong&gt;NOTE:&lt;/strong&gt; You must have net terms to use the &lt;strong&gt;Ingram Micro Order Create API&lt;/strong&gt;. Ingram Micro offers trade credit when using our APIs, and repayment is based on net terms. For example, if your net terms agreement is net-30, you will have 30 days to make a full payment. Ingram Micro does not allow credit card transactions for API ordering.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.OrdersV5Api();
let opts = {
  'orderCreateRequest': {"ordercreaterequest":{"requestpreamble":{"isocountrycode":"US","customernumber":"20-222222"},"ordercreatedetails":{"customerponumber":"CustumerPO-1","shiptoaddress":{"attention":"John Smith","addressline1":"Ingram Micro","addressline2":"3351 Michelson Dr","city":"Long Beach","state":"CA","postalcode":"92612","countrycode":"US"},"carriercode":"OT","lines":[{"linetype":"P","linenumber":"002","quantity":"1","ingrampartnumber":"TSXML3"}],"extendedspecs":[{"attributename":"isdirectshiporder","attributevalue":"false"},{"attributename":"euponumber","attributevalue":"1234"},{"attributename":"commenttext","attributevalue":"Happy Birthday Mom"},{"attributename":"duplicatecustomerordernumbervalidate","attributevalue":"ALLOW"},{"attributename":"commenttext","attributevalue":"///This order must ship on FedEx"},{"attributename":"commenttext","attributevalue":"/// 3rd account# 12345678"}]}}} // OrderCreateRequest | 
};
apiInstance.postV5OrdersCreate(opts, (error, data, response) => {
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
 **orderCreateRequest** | [**OrderCreateRequest**](OrderCreateRequest.md)|  | [optional] 

### Return type

[**OrderCreateResponse**](OrderCreateResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

