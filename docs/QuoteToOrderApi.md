# ResellerApiDocumentationUnitedStates.QuoteToOrderApi

All URIs are relative to *https://api.ingrammicro.com:443/sandbox*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postQuoteToOrderV6**](QuoteToOrderApi.md#postQuoteToOrderV6) | **POST** /resellers/v6/q2o/orders | Quote To Order



## postQuoteToOrderV6

> QuoteToOrderResponse postQuoteToOrderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, quoteToOrderDetailsDTO, opts)

Quote To Order

The “Quote to Order” (QTO) endpoint allows a customer to create an order using the existing quote which is in “Ready to Order” status. A customer can create an order using Configure to order (CTO) quote or a non-configure to order (Non-CTO) quote. Upon successful submission of the order create request, a confirmation message will be returned as an API response. &lt;br &gt; &lt;br &gt;Ingram Micro offers webhooks as a method to send notifications to Resellers once the order creation request is received. All the updates related to Order creation will be pushed as a notification to the customer via a pre-defined callback URL as an HTTP post. &lt;br &gt; &lt;br &gt; **Prerequisite:** Pre-defined callback URL &lt;br &gt; &lt;br &gt; Before creating an order using the quote, it’s recommended to validate the quote using the “Validate Quote” endpoint. Validate Quote endpoint will not only validate the quote but also outline all the mandatory fields required by the vendor at a header level and at the line level which a customer need to pass to the Quote To Order endpoint request.  For a detailed understanding of the “Validate Quote” endpoint, review the “Validate Quote” endpoint documentation. &lt;br &gt;&lt;br &gt; **How it works:** &lt;br &gt;&lt;br &gt; - The customer validates the quote with a quote number from Validate Quote endpoint. &lt;br &gt; - The customer copies all the mandatory fields required by the vendor and adds them to the QTO request body. &lt;br &gt; - The customer provides all the values for Vendor mandatory fields along with other required information for QTO to create an order. &lt;br &gt; - After the order creation request receipt acknowledgment from the QTO endpoint, all further order creation updates will be provided via webhook push notification.

### Example

```javascript
import ResellerApiDocumentationUnitedStates from 'reseller_api_documentation_united_states';
let defaultClient = ResellerApiDocumentationUnitedStates.ApiClient.instance;
// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ResellerApiDocumentationUnitedStates.QuoteToOrderApi();
let iMCustomerNumber = 20-222222; // String | Your unique Ingram Micro customer number.
let iMCountryCode = US; // String | Two-character ISO country code.
let iMCorrelationID = fbac82ba-cf0a-4bcf-fc03-0c5084; // String | Unique transaction number to identify each transaction accross all the systems.
let quoteToOrderDetailsDTO = {"quoteNumber":"QUO-14551943-D2Y9L9","customerOrderNumber":"12345","enduserOrderNumber":"","billToAddressId":"XYZ","endUserInfo":{"companyName":"ABC TECH","contact":"44045678","addressLine1":"Texas","addressLine2":"4","addressLine3":"","city":"","state":"","postalCode":"","countryCode":"US","email":"abc@gmail.com","phoneNumber":"445678901"},"shipToInfo":{"addressId":"12345","companyName":"","contact":"","addressLine1":"Texas","addressLine2":"4","addressLine3":"","city":"","state":"","postalCode":"","countryCode":"US","email":"abc@gmail.com"},"additionalAttributes":[{"attributeName":"VEND_AUTH_NBR_FLG","attributeValue":"ABC1234"}],"vmfAdditionalAttributes":[{"attributeName":"","attributeValue":"","attributeDescription":""}],"lines":[{"customerLineNumber":"12","ingramPartNumber":"YN6231","quantity":"2","vmfAdditionalAttributesLines":[{"attributeName":"","attributeValue":"","attributeDescription":""}]}]}; // QuoteToOrderDetailsDTO | 
let opts = {
  'iMSenderID': MyCompany // String | Unique value used to identify the sender of the transaction.
};
apiInstance.postQuoteToOrderV6(iMCustomerNumber, iMCountryCode, iMCorrelationID, quoteToOrderDetailsDTO, opts, (error, data, response) => {
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
 **iMCorrelationID** | **String**| Unique transaction number to identify each transaction accross all the systems. | 
 **quoteToOrderDetailsDTO** | [**QuoteToOrderDetailsDTO**](QuoteToOrderDetailsDTO.md)|  | 
 **iMSenderID** | **String**| Unique value used to identify the sender of the transaction. | [optional] 

### Return type

[**QuoteToOrderResponse**](QuoteToOrderResponse.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

