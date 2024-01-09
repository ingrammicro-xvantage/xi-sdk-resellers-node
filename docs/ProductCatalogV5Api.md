# ResellerApiDocumentationUnitedStates.ProductCatalogV5Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV5CatalogProductsearch**](ProductCatalogV5Api.md#getV5CatalogProductsearch) | **GET** /resellers/v5/Catalog | Search Product Catalog
[**multiSKUPriceAndStock**](ProductCatalogV5Api.md#multiSKUPriceAndStock) | **POST** /resellers/v5/Catalog/priceandavailability | Find availability of upto 50 SKUs



## getV5CatalogProductsearch

> ProductSearchResponse getV5CatalogProductsearch(customerNumber, isoCountryCode, partNumber)

Search Product Catalog

Search the Ingram Micro product catalog using customerNumber, isoCountryCode and partNumber.&lt;ul&gt;&lt;li&gt;customerNumber and isoCountryCode fields are required.&lt;/li&gt;&lt;li&gt;The PartNumber field accepts the following:&lt;ul&gt;&lt;li&gt;Ingram part number&lt;/li&gt;&lt;li&gt;Vendor part number&lt;/li&gt;&lt;li&gt;Customer part number&lt;/li&gt;&lt;li&gt;UPC (Universal Product Code)&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.ProductCatalogV5Api();
let customerNumber = "'20-222222'"; // String | Your unique Ingram Micro customer number
let isoCountryCode = "'US'"; // String | 2 chars country code
let partNumber = "'1AQ821'"; // String | Part Number can be ingram part number or vendor part number or customer part number or UPC
apiInstance.getV5CatalogProductsearch(customerNumber, isoCountryCode, partNumber, (error, data, response) => {
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
 **customerNumber** | **String**| Your unique Ingram Micro customer number | [default to &#39;20-222222&#39;]
 **isoCountryCode** | **String**| 2 chars country code | [default to &#39;US&#39;]
 **partNumber** | **String**| Part Number can be ingram part number or vendor part number or customer part number or UPC | [default to &#39;1AQ821&#39;]

### Return type

[**ProductSearchResponse**](ProductSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## multiSKUPriceAndStock

> PriceAndAvailabilityResponse multiSKUPriceAndStock(opts)

Find availability of upto 50 SKUs

Search the product catalog for the price and availability for up to 50 SKUs at one time. This endpoint helps to confirm the details just prior to placing a real-time call.&lt;ul&gt;&lt;li&gt;You may request visibility for reserve stock if you participate in reserved inventory, in addition to the stock that is open to all the partners. Please see the details in the endpoint model below.&lt;/li&gt;&lt;li&gt;Follow these guidelines when using this endpoint:&lt;ul&gt;&lt;li&gt;This endpoint is not for refreshing the full catalog with availability and pricing information. Ingram Micro applies rate limits on this endpoint. Continuous cyclical calls will error out. Customers that perform this activity may lose access to the endpoint.&lt;/li&gt;&lt;li&gt;For the full catalog refresh, Ingram Micro can provide a Price and Inventory file in flat file format, made available through FTP download. Please contact your Ingram Micro sales rep for details.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.ProductCatalogV5Api();
let opts = {
  'priceAndAvailabilityRequest': {"servicerequest":{"requestpreamble":{"customernumber":"20-222223","isocountrycode":"US"},"priceandstockrequest":{"showwarehouseavailability":"True","extravailabilityflag":"Y","item":[{"ingrampartnumber":"TB6489","quantity":1},{"ingrampartnumber":"1AQ821","quantity":1}],"includeallsystems":false}}} // PriceAndAvailabilityRequest | 
};
apiInstance.multiSKUPriceAndStock(opts, (error, data, response) => {
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
 **priceAndAvailabilityRequest** | [**PriceAndAvailabilityRequest**](PriceAndAvailabilityRequest.md)|  | [optional] 

### Return type

[**PriceAndAvailabilityResponse**](PriceAndAvailabilityResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

