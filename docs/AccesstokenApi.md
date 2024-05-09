# XiSdkResellers.AccesstokenApi

All URIs are relative to *https://api.ingrammicro.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccesstoken**](AccesstokenApi.md#getAccesstoken) | **GET** /oauth/oauth20/token | Accesstoken



## getAccesstoken

> AccesstokenResponse getAccesstoken(grantType, clientId, clientSecret)

Accesstoken

The Authentication endpoint will provide an access token to access the API.

### Example

```javascript
import XiSdkResellers from 'xi_sdk_resellers';

let apiInstance = new XiSdkResellers.AccesstokenApi();
let grantType = "client_credentials"; // String | Keep grant_type as client_credentials only.
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 
apiInstance.getAccesstoken(grantType, clientId, clientSecret, (error, data, response) => {
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
 **grantType** | **String**| Keep grant_type as client_credentials only. | 
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 

### Return type

[**AccesstokenResponse**](AccesstokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

