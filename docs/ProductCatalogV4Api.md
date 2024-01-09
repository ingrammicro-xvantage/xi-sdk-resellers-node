# ResellerApiDocumentationUnitedStates.ProductCatalogV4Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postV4Multiskupriceandstock**](ProductCatalogV4Api.md#postV4Multiskupriceandstock) | **POST** /products/v4/multiskupriceandstock | Product availability for upto 50 SKUs
[**postV4Productsearch**](ProductCatalogV4Api.md#postV4Productsearch) | **POST** /products/v4/productsearch | Real-time Product Search



## postV4Multiskupriceandstock

> MultiSKUPriceAndStockResponse postV4Multiskupriceandstock(opts)

Product availability for upto 50 SKUs

Find price and availability of up to 50 SKUs in a single request. As you increase the number of items in the request response time will be extended. This transaction must not be used as a continuous cyclical call to populate availability and pricing for your full catalog. Customers that perform this activity will lose access to price and availability.  Ingram can provide a Price catalog file and an Inventory file in flat file format, which can be obtained through FTP download. Please contact 1800-616-4665 or Electronic.Services@ingrammicro.com for more information on these files.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.ProductCatalogV4Api();
let opts = {
  'multiSKUPriceAndStockRequest': {  
   "servicerequest":{
        "requestpreamble":{  
         "customernumber":"20-222222",
         "isocountrycode":"US"
      },
      "priceandstockrequest":{  
         "showwarehouseavailability":"True",
         "extravailabilityflag":"Y",
         "item":[  
           {"ingrampartnumber":"TB6489","quantity":1}
         ],
         "includeallsystems":false
      }
   }
} // MultiSKUPriceAndStockRequest | 
};
apiInstance.postV4Multiskupriceandstock(opts, (error, data, response) => {
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
 **multiSKUPriceAndStockRequest** | [**MultiSKUPriceAndStockRequest**](MultiSKUPriceAndStockRequest.md)|  | [optional] 

### Return type

[**MultiSKUPriceAndStockResponse**](MultiSKUPriceAndStockResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV4Productsearch

> ProductSearchResponse postV4Productsearch(opts)

Real-time Product Search

A real time search that provides the Ingram Micro part number using the manufacturer part number.  This API is helpful to eliminate any errors when a manufactuer has the same part number and Ingram Micro has had to create multiple sku numbers 

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.ProductCatalogV4Api();
let opts = {
  'productSearchRequest': {"servicerequest":{"requestpreamble":{"customernumber":"20-222222","isocountrycode":"US"},"productsearchrequest":{"searchcriteria":{"ingrampartnumber":"TSXML3"}}}} // ProductSearchRequest | 
};
apiInstance.postV4Productsearch(opts, (error, data, response) => {
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
 **productSearchRequest** | [**ProductSearchRequest**](ProductSearchRequest.md)|  | [optional] 

### Return type

[**ProductSearchResponse**](ProductSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

