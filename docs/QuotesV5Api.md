# ResellerApiDocumentation.QuotesV5Api

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV5QuotesDetails**](QuotesV5Api.md#getV5QuotesDetails) | **GET** /resellers/v5/quote/{quoteNumber} | Get Quote Details
[**postV5QuotesSearch**](QuotesV5Api.md#postV5QuotesSearch) | **POST** /resellers/v5/quote/search | Search Quotes



## getV5QuotesDetails

> QuoteDetails getV5QuotesDetails(quoteNumber, customerNumber, isoCountryCode, opts)

Get Quote Details

The quote details API provides all quote details associated with the quote number provided.   The “&lt;strong&gt;quoteNumber&lt;/strong&gt;”, “&lt;strong&gt;isoCountryCode&lt;/strong&gt;” and “&lt;strong&gt;customerNumber&lt;/strong&gt;” parameters are required.

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.QuotesV5Api();
let quoteNumber = "'QUO-25576-C8S2W7'"; // String | Ingram Micro Quote Number
let customerNumber = "'20-222222'"; // String | Your Ingram Micro unique customer number
let isoCountryCode = "'US'"; // String | 
let opts = {
  'thirdPartySource': "'customer'" // String | Unique identifier used to identify the third party source accessing the services
};
apiInstance.getV5QuotesDetails(quoteNumber, customerNumber, isoCountryCode, opts, (error, data, response) => {
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
 **quoteNumber** | **String**| Ingram Micro Quote Number | [default to &#39;QUO-25576-C8S2W7&#39;]
 **customerNumber** | **String**| Your Ingram Micro unique customer number | [default to &#39;20-222222&#39;]
 **isoCountryCode** | **String**|  | [default to &#39;US&#39;]
 **thirdPartySource** | **String**| Unique identifier used to identify the third party source accessing the services | [optional] [default to &#39;customer&#39;]

### Return type

[**QuoteDetails**](QuoteDetails.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV5QuotesSearch

> QuoteListResponse postV5QuotesSearch(opts)

Search Quotes

This endpoint enables the retrieval and filtering of relevant quote list key criteria data, such as quote number, special bid numbers, end user name, status, and date ranges from the Ingram Micro system. By default, the Quotes endpoint retrieves quotes modified or created within the last 30 days.   Observe these additional parameters:&lt;ul&gt;&lt;li&gt;Only active quotes are available through this API.&lt;/li&gt;&lt;li&gt;Quotes older than 365 days are excluded by default.&lt;/li&gt;&lt;li&gt;You can use date range filters to retrieve quotes older than 30 days and up to 365 days.&lt;/li&gt;&lt;li&gt;Quotes that are in draft and closed states are excluded, and are not accessible through this API.&lt;/li&gt;&lt;/ul&gt;

### Example

```javascript
import ResellerApiDocumentation from 'reseller_api_documentation';
let defaultClient = ResellerApiDocumentation.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentation.QuotesV5Api();
let opts = {
  'quoteListRequest': {"quoteSearchRequest":{"requestPreamble":{"customerNumber":"20-222222","customerContact":"customer@im.com","isoCountryCode":"US"},"retrieveQuoteRequest":{"fromDate":"2019-08-01","toDate":"2019-11-01","pageIndex":1,"recordsPerPage":5,"sorting":"desc","sortingColumnName":"createdon","thirdPartySource":"3RDPIDCONWISE"}}} // QuoteListRequest | 
};
apiInstance.postV5QuotesSearch(opts, (error, data, response) => {
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
 **quoteListRequest** | [**QuoteListRequest**](QuoteListRequest.md)|  | [optional] 

### Return type

[**QuoteListResponse**](QuoteListResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

