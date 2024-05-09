# XiSdkResellers.OrderStatusApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resellersV1WebhooksOrderstatuseventPost**](OrderStatusApi.md#resellersV1WebhooksOrderstatuseventPost) | **POST** /resellers/v1/webhooks/orderstatusevent | Order Status



## resellersV1WebhooksOrderstatuseventPost

> resellersV1WebhooksOrderstatuseventPost(targeturl, xHubSignature, orderStatusAsyncNotificationRequest)

Order Status

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';
let defaultClient = XiSdkResellers.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new XiSdkResellers.OrderStatusApi();
let targeturl = "https://59a2dc5368073ab42fd9a92e210a9fdb.m.pipedream.net/"; // String | The webhook url where the request needs to sent.
let xHubSignature = "3LeaTfLE5FLj1FcYflwdwFosH4ADHmMbds6thtirGC3e9lEkF9/1pt4T2fQQGlxf40EznDBER0b60M75K6ZW0A=="; // String | Ingram Micro creates a signature token by use of a secret key + Event ID. The algorithm to generate the secret ley is given at link https://developer.ingrammicro.com/reseller/article/how-use-webhook-secret-key. Use the event Id in the below sample along with your secret key to generate the key. Alternatively, to send try this out, use a random text to see how it works.
let orderStatusAsyncNotificationRequest = {"topic":"resellers/orders","event":"im::updated","eventTimeStamp":"2021-11-01T13:02:06.369Z","eventId":"N01CIB9VVFYKR9J6ZW","resource":[{"eventType":"im::order_shipped","orderNumber":"20-RD128","customerOrderNumber":"ZENPO","orderEntryTimeStamp":"2020-04-03T08:54:39-07:00","lines":[{"ingramLineNumber":"001","subOrderNumber":"20-RD128-21","lineStatus":"IM::shipped","ingramPartNumber":"5CX895","vendorPartNumber":"TC57HO-1PEZU4P-NA","requestedQuantity":3,"shippedQuantity":2,"backOrderedQuantity":1,"shipmentDetails":[{"shipmentDate":"2019-11-06","shipFromWarehouseId":"10","warehouseName":"New York","carrierCode":"4M","carrierName":"SMARTPOST-BM","packageDetails":[{"cartonNumber":"","quantityInbox":"","trackingNumber":""}]}],"serialNumberDetails":[{"serialNumber":"123123123"}]}],"links":[{"topic":"orders","href":"/resellers/v5/orders/20-RD128","type":"GET"}]}]}; // OrderStatusAsyncNotificationRequest | 
apiInstance.resellersV1WebhooksOrderstatuseventPost(targeturl, xHubSignature, orderStatusAsyncNotificationRequest, (error, data, response) => {
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
 **orderStatusAsyncNotificationRequest** | [**OrderStatusAsyncNotificationRequest**](OrderStatusAsyncNotificationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

