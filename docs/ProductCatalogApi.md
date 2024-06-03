# XiSdkResellers.ProductCatalogApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResellerV6Productdetail**](ProductCatalogApi.md#getResellerV6Productdetail) | **GET** /resellers/v6/catalog/details/{ingramPartNumber} | Product Details
[**getResellerV6Productsearch**](ProductCatalogApi.md#getResellerV6Productsearch) | **GET** /resellers/v6/catalog | Search Products
[**postPriceandavailability**](ProductCatalogApi.md#postPriceandavailability) | **POST** /resellers/v6/catalog/priceandavailability | Price and Availability



## getResellerV6Productdetail

> ProductDetailResponse getResellerV6Productdetail(ingramPartNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts)

Product Details

Search all the product-related details using a unique Ingram Part Number. Currently, this API is available in the USA, India, and Netherlands.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ProductCatalogApi();
let ingramPartNumber = "6YE881"; // String | Ingram Micro unique part number for the product
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems
let opts = {
  'iMSenderID': "MyCompany" // String | Sender Identification text
};
apiInstance.getResellerV6Productdetail(ingramPartNumber, iMCustomerNumber, iMCountryCode, iMCorrelationID, opts, (error, data, response) => {
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
 **ingramPartNumber** | **String**| Ingram Micro unique part number for the product | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems | 
 **iMSenderID** | **String**| Sender Identification text | [optional] 

### Return type

[**ProductDetailResponse**](ProductDetailResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResellerV6Productsearch

> ProductSearchResponse getResellerV6Productsearch(iMCustomerNumber, iMCorrelationID, iMCountryCode, opts)

Search Products

Search the Ingram Micro product catalog by providing any of the information in the keyword(Ingram part number / vendor part number/ product description / UPC

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ProductCatalogApi();
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction accross all the systems
let iMCountryCode = "US"; // String | Two-character ISO country code.
let opts = {
  'pageNumber': 56, // Number | Current page number. Default is 1
  'pageSize': 56, // Number | Number of records required in the call - max records 100 per page
  'iMSenderID': "MyCompany", // String | Sender Identification text
  'type': "type_example", // String | The SKU type of product. One of Physical, Digital, or Any.
  'hasDiscounts': "true", // String | Specifies if there are discounts available for the product.
  'vendor': ["null"], // [String] | The name of the vendor/manufacturer of the product.
  'vendorPartNumber': ["null"], // [String] | The vendors part number for the product.
  'acceptLanguage': "'en'", // String | Header to the API calls, the content will help us identify the response language.
  'vendorNumber': "vendorNumber_example", // String | Vendor number of the product
  'keyword': ["null"], // [String] | Keyword search,can be ingram part number or vendor part number or product title or vendor nameKeyword search. Can be Ingram Micro part number, vender part number, product title, or vendor name.
  'category': "Accessories", // String | The category of the product. Example: Displays.
  'skipAuthorisation': "true" // String | This parameter is True when you want Skip the authorization, so template will work like current B2b template.
};
apiInstance.getResellerV6Productsearch(iMCustomerNumber, iMCorrelationID, iMCountryCode, opts, (error, data, response) => {
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
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **pageNumber** | **Number**| Current page number. Default is 1 | [optional] 
 **pageSize** | **Number**| Number of records required in the call - max records 100 per page | [optional] 
 **iMSenderID** | **String**| Sender Identification text | [optional] 
 **type** | **String**| The SKU type of product. One of Physical, Digital, or Any. | [optional] 
 **hasDiscounts** | **String**| Specifies if there are discounts available for the product. | [optional] 
 **vendor** | [**[String]**](String.md)| The name of the vendor/manufacturer of the product. | [optional] 
 **vendorPartNumber** | [**[String]**](String.md)| The vendors part number for the product. | [optional] 
 **acceptLanguage** | **String**| Header to the API calls, the content will help us identify the response language. | [optional] [default to &#39;en&#39;]
 **vendorNumber** | **String**| Vendor number of the product | [optional] 
 **keyword** | [**[String]**](String.md)| Keyword search,can be ingram part number or vendor part number or product title or vendor nameKeyword search. Can be Ingram Micro part number, vender part number, product title, or vendor name. | [optional] 
 **category** | **String**| The category of the product. Example: Displays. | [optional] 
 **skipAuthorisation** | **String**| This parameter is True when you want Skip the authorization, so template will work like current B2b template. | [optional] 

### Return type

[**ProductSearchResponse**](ProductSearchResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPriceandavailability

> [PriceAndAvailabilityResponseInner] postPriceandavailability(includeAvailability, includePricing, iMCustomerNumber, iMCountryCode, iMCorrelationID, priceAndAvailabilityRequest, opts)

Price and Availability

The PriceAndAvailability API, will retrieve Pricing, Availability, discounts, Inventory Location, Reserve Inventory for the products upto 50 products. 

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.ProductCatalogApi();
let includeAvailability = true; // Boolean | Pass boolean value as input, if true the response will contain warehouse availability details, if false the response will not hold warehouse availability details
let includePricing = true; // Boolean | Pass boolean value as input, if true the response will contain Pricing details of the Product, if false the response will not hold Pricing details.
let iMCustomerNumber = "20-222222"; // String | Your unique Ingram Micro customer number.
let iMCountryCode = "US"; // String | Two-character ISO country code.
let iMCorrelationID = "fbac82ba-cf0a-4bcf-fc03-0c5084"; // String | Unique transaction number to identify each transaction across all the systems.
let priceAndAvailabilityRequest = {"products":[{"ingramPartNumber":"123512"}]}; // PriceAndAvailabilityRequest | 
let opts = {
  'includeProductAttributes': true, // Boolean | Pass boolean value as input, if true the response will contain detailed attributes related to the Product, if false or not sent the response will contain very few Product details.
  'iMSenderID': "MyCompany" // String | Unique value used to identify the sender of the transaction. Example: MyCompany
};
apiInstance.postPriceandavailability(includeAvailability, includePricing, iMCustomerNumber, iMCountryCode, iMCorrelationID, priceAndAvailabilityRequest, opts, (error, data, response) => {
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
 **includeAvailability** | **Boolean**| Pass boolean value as input, if true the response will contain warehouse availability details, if false the response will not hold warehouse availability details | 
 **includePricing** | **Boolean**| Pass boolean value as input, if true the response will contain Pricing details of the Product, if false the response will not hold Pricing details. | 
 **iMCustomerNumber** | **String**| Your unique Ingram Micro customer number. | 
 **iMCountryCode** | **String**| Two-character ISO country code. | 
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction across all the systems. | 
 **priceAndAvailabilityRequest** | [**PriceAndAvailabilityRequest**](PriceAndAvailabilityRequest.md)|  | 
 **includeProductAttributes** | **Boolean**| Pass boolean value as input, if true the response will contain detailed attributes related to the Product, if false or not sent the response will contain very few Product details. | [optional] 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. Example: MyCompany | [optional] 

### Return type

[**[PriceAndAvailabilityResponseInner]**](PriceAndAvailabilityResponseInner.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

