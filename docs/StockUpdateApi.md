# XiSdkResellers.StockUpdateApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resellersV1WebhooksAvailabilityupdatePost**](StockUpdateApi.md#resellersV1WebhooksAvailabilityupdatePost) | **POST** /resellers/v1/webhooks/availabilityupdate | Stock Update



## resellersV1WebhooksAvailabilityupdatePost

> resellersV1WebhooksAvailabilityupdatePost(targeturl, xHubSignature, availabilityAsyncNotificationRequest)

Stock Update

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.StockUpdateApi();
let targeturl = https://59a2dc5368073ab42fd9a92e210a9fdb.m.pipedream.net/; // String | The webhook url where the request needs to sent.
let xHubSignature = 3LeaTfLE5FLj1FcYflwdwFosH4ADHmMbds6thtirGC3e9lEkF9/1pt4T2fQQGlxf40EznDBER0b60M75K6ZW0A==; // String | Ingram Micro creates a signature token by use of a secret key + Event ID. The algorithm to generate the secret ley is given at link https://developer.ingrammicro.com/reseller/article/how-use-webhook-secret-key. Use the event Id in the below sample along with your secret key to generate the key. Alternatively, to send try this out, use a random text to see how it works.
let availabilityAsyncNotificationRequest = {"topic":"resellers/catalog","event":"im::updated","eventTimeStamp":"2021-11-01T13:02:06.369Z","eventId":"AH7ESSIWSIO22Y77DD","resource":[{"eventType":"IM::STOCK_UPDATE","ingramPartNumber":"5CX579","vendorPartNumber":"710412-001-BTI","vendorName":"BATTERY TECHNOLOGY INC.","upcCode":"0886734869201","skuStatus":null,"backOrderFlag":"Y","totalAvailability":"120","links":[{"topic":"orders","href":"/resellers/v5/catalog/5CX579","type":"GET"}]},{"eventType":"IM::STOCK_UPDATE","ingramPartNumber":"5CT275","vendorPartNumber":"AC-U90W-HP","vendorName":"BATTERY TECHNOLOGY INC.","upcCode":"0745473120182","skuStatus":null,"backOrderFlag":"Y","totalAvailability":"120","links":[{"topic":"orders","href":"/resellers/v5/catalog/5CT275","type":"GET"}]}]}; // AvailabilityAsyncNotificationRequest | 
apiInstance.resellersV1WebhooksAvailabilityupdatePost(targeturl, xHubSignature, availabilityAsyncNotificationRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targeturl** | **String**| The webhook url where the request needs to sent. | 
 **xHubSignature** | **String**| Ingram Micro creates a signature token by use of a secret key + Event ID. The algorithm to generate the secret ley is given at link https://developer.ingrammicro.com/reseller/article/how-use-webhook-secret-key. Use the event Id in the below sample along with your secret key to generate the key. Alternatively, to send try this out, use a random text to see how it works. | 
 **availabilityAsyncNotificationRequest** | [**AvailabilityAsyncNotificationRequest**](AvailabilityAsyncNotificationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

