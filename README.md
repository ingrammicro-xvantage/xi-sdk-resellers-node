# xi_sdk_resellers

XiSdkResellers - JavaScript client for xi_sdk_resellers
For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install xi_sdk_resellers --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your xi_sdk_resellers from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

The library is hosted in the git repository, https://github.com/ingrammicro-xvantage/xi-sdk-resellers-node
install it via:

```shell
    npm install ingrammicro-xvantage/xi-sdk-resellers-node
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Quickstart on creating an application can be found [here](getting-started.md)

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var XiSdkResellers = require('xi_sdk_resellers');


var api = new XiSdkResellers.AccesstokenApi()
var grantType = client_credentials; // {String} Keep grant_type as client_credentials only.
var clientId = "clientId_example"; // {String} 
var clientSecret = "clientSecret_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccesstoken(grantType, clientId, clientSecret, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.ingrammicro.com:443*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*XiSdkResellers.AccesstokenApi* | [**getAccesstoken**](docs/AccesstokenApi.md#getAccesstoken) | **GET** /oauth/oauth20/token | Accesstoken
*XiSdkResellers.AsyncOrderCreateApi* | [**postAsyncOrderCreateV7**](docs/AsyncOrderCreateApi.md#postAsyncOrderCreateV7) | **POST** /resellers/v7/orders | Async Order Create
*XiSdkResellers.DealsApi* | [**getResellersV6Dealsdetails**](docs/DealsApi.md#getResellersV6Dealsdetails) | **GET** /resellers/v6/deals/{dealId} | Deals Details
*XiSdkResellers.DealsApi* | [**getResellersV6Dealssearch**](docs/DealsApi.md#getResellersV6Dealssearch) | **GET** /resellers/v6/deals/search | Deals Search
*XiSdkResellers.FreightEstimateApi* | [**postFreightestimate**](docs/FreightEstimateApi.md#postFreightestimate) | **POST** /resellers/v6/freightestimate | Freight Estimate
*XiSdkResellers.InvoicesApi* | [**getInvoicedetailsV61**](docs/InvoicesApi.md#getInvoicedetailsV61) | **GET** /resellers/v6.1/invoices/{invoiceNumber} | Get Invoice Details v6.1
*XiSdkResellers.InvoicesApi* | [**getResellersV6Invoicesearch**](docs/InvoicesApi.md#getResellersV6Invoicesearch) | **GET** /resellers/v6/invoices | Search your invoice
*XiSdkResellers.OrderStatusApi* | [**resellersV1WebhooksOrderstatuseventPost**](docs/OrderStatusApi.md#resellersV1WebhooksOrderstatuseventPost) | **POST** /resellers/v1/webhooks/orderstatusevent | Order Status
*XiSdkResellers.OrdersApi* | [**deleteOrdercancel**](docs/OrdersApi.md#deleteOrdercancel) | **DELETE** /resellers/v6/orders/{OrderNumber} | Cancel your Order
*XiSdkResellers.OrdersApi* | [**getOrderdetailsV61**](docs/OrdersApi.md#getOrderdetailsV61) | **GET** /resellers/v6.1/orders/{ordernumber} | Get Order Details v6.1
*XiSdkResellers.OrdersApi* | [**getResellersV6Ordersearch**](docs/OrdersApi.md#getResellersV6Ordersearch) | **GET** /resellers/v6/orders/search | Search your Orders
*XiSdkResellers.OrdersApi* | [**postCreateorderV6**](docs/OrdersApi.md#postCreateorderV6) | **POST** /resellers/v6/orders | Create your Order
*XiSdkResellers.OrdersApi* | [**putOrdermodify**](docs/OrdersApi.md#putOrdermodify) | **PUT** /resellers/v6/orders/{orderNumber} | Modify your Order
*XiSdkResellers.ProductCatalogApi* | [**getResellerV6Productdetail**](docs/ProductCatalogApi.md#getResellerV6Productdetail) | **GET** /resellers/v6/catalog/details/{ingramPartNumber} | Product Details
*XiSdkResellers.ProductCatalogApi* | [**getResellerV6Productsearch**](docs/ProductCatalogApi.md#getResellerV6Productsearch) | **GET** /resellers/v6/catalog | Search Products
*XiSdkResellers.ProductCatalogApi* | [**postPriceandavailability**](docs/ProductCatalogApi.md#postPriceandavailability) | **POST** /resellers/v6/catalog/priceandavailability | Price and Availability
*XiSdkResellers.QuotesApi* | [**getQuotessearchV6**](docs/QuotesApi.md#getQuotessearchV6) | **GET** /resellers/v6/quotes/search | Quote Search
*XiSdkResellers.QuotesApi* | [**getResellerV6ValidateQuote**](docs/QuotesApi.md#getResellerV6ValidateQuote) | **GET** /resellers/v6/q2o/validatequote | Validate Quote
*XiSdkResellers.QuotesApi* | [**getResellersV6Quotes**](docs/QuotesApi.md#getResellersV6Quotes) | **GET** /resellers/v6/quotes/{quoteNumber} | Get Quote Details
*XiSdkResellers.RenewalsApi* | [**getResellersV6Renewalsdetails**](docs/RenewalsApi.md#getResellersV6Renewalsdetails) | **GET** /resellers/v6/renewals/{renewalId} | Renewals Details
*XiSdkResellers.RenewalsApi* | [**postRenewalssearch**](docs/RenewalsApi.md#postRenewalssearch) | **POST** /resellers/v6/renewals/search | Renewals Search
*XiSdkResellers.ReturnsApi* | [**getResellersV6Returnsdetails**](docs/ReturnsApi.md#getResellersV6Returnsdetails) | **GET** /resellers/v6/returns/{caseRequestNumber} | Returns Details
*XiSdkResellers.ReturnsApi* | [**getResellersV6Returnssearch**](docs/ReturnsApi.md#getResellersV6Returnssearch) | **GET** /resellers/v6/returns/search | Returns Search
*XiSdkResellers.ReturnsApi* | [**postReturnscreate**](docs/ReturnsApi.md#postReturnscreate) | **POST** /resellers/v6/returns/create | Returns Create
*XiSdkResellers.StockUpdateApi* | [**resellersV1WebhooksAvailabilityupdatePost**](docs/StockUpdateApi.md#resellersV1WebhooksAvailabilityupdatePost) | **POST** /resellers/v1/webhooks/availabilityupdate | Stock Update


## Documentation for Models

 - [XiSdkResellers.AccesstokenResponse](docs/AccesstokenResponse.md)
 - [XiSdkResellers.AsyncOrderCreateDTO](docs/AsyncOrderCreateDTO.md)
 - [XiSdkResellers.AsyncOrderCreateDTOAdditionalAttributesInner](docs/AsyncOrderCreateDTOAdditionalAttributesInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOEndUserInfo](docs/AsyncOrderCreateDTOEndUserInfo.md)
 - [XiSdkResellers.AsyncOrderCreateDTOLinesInner](docs/AsyncOrderCreateDTOLinesInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOLinesInnerEndUserInfoInner](docs/AsyncOrderCreateDTOLinesInnerEndUserInfoInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOResellerInfo](docs/AsyncOrderCreateDTOResellerInfo.md)
 - [XiSdkResellers.AsyncOrderCreateDTOShipToInfo](docs/AsyncOrderCreateDTOShipToInfo.md)
 - [XiSdkResellers.AsyncOrderCreateDTOShipmentDetails](docs/AsyncOrderCreateDTOShipmentDetails.md)
 - [XiSdkResellers.AsyncOrderCreateDTOVmfadditionalAttributesInner](docs/AsyncOrderCreateDTOVmfadditionalAttributesInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOWarrantyInfoInner](docs/AsyncOrderCreateDTOWarrantyInfoInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOWarrantyInfoInnerSerialInfoInner](docs/AsyncOrderCreateDTOWarrantyInfoInnerSerialInfoInner.md)
 - [XiSdkResellers.AsyncOrderCreateDTOWarrantyInfoInnerVmfAdditionalAttributesLinesInner](docs/AsyncOrderCreateDTOWarrantyInfoInnerVmfAdditionalAttributesLinesInner.md)
 - [XiSdkResellers.AsyncOrderCreateResponse](docs/AsyncOrderCreateResponse.md)
 - [XiSdkResellers.AvailabilityAsyncNotificationRequest](docs/AvailabilityAsyncNotificationRequest.md)
 - [XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInner](docs/AvailabilityAsyncNotificationRequestResourceInner.md)
 - [XiSdkResellers.AvailabilityAsyncNotificationRequestResourceInnerLinksInner](docs/AvailabilityAsyncNotificationRequestResourceInnerLinksInner.md)
 - [XiSdkResellers.DealsDetailsResponse](docs/DealsDetailsResponse.md)
 - [XiSdkResellers.DealsDetailsResponseProductsInner](docs/DealsDetailsResponseProductsInner.md)
 - [XiSdkResellers.DealsSearchResponse](docs/DealsSearchResponse.md)
 - [XiSdkResellers.DealsSearchResponseDealsInner](docs/DealsSearchResponseDealsInner.md)
 - [XiSdkResellers.Error](docs/Error.md)
 - [XiSdkResellers.ErrorResponse](docs/ErrorResponse.md)
 - [XiSdkResellers.ErrorResponseDTO](docs/ErrorResponseDTO.md)
 - [XiSdkResellers.ErrorResponseErrorsInner](docs/ErrorResponseErrorsInner.md)
 - [XiSdkResellers.ErrorResponseErrorsInnerFieldsInner](docs/ErrorResponseErrorsInnerFieldsInner.md)
 - [XiSdkResellers.Fields](docs/Fields.md)
 - [XiSdkResellers.FreightRequest](docs/FreightRequest.md)
 - [XiSdkResellers.FreightRequestLinesInner](docs/FreightRequestLinesInner.md)
 - [XiSdkResellers.FreightRequestShipToAddressInner](docs/FreightRequestShipToAddressInner.md)
 - [XiSdkResellers.FreightResponse](docs/FreightResponse.md)
 - [XiSdkResellers.FreightResponseFreightEstimateResponse](docs/FreightResponseFreightEstimateResponse.md)
 - [XiSdkResellers.FreightResponseFreightEstimateResponseDistributionInner](docs/FreightResponseFreightEstimateResponseDistributionInner.md)
 - [XiSdkResellers.FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner](docs/FreightResponseFreightEstimateResponseDistributionInnerCarrierListInner.md)
 - [XiSdkResellers.FreightResponseFreightEstimateResponseLinesInner](docs/FreightResponseFreightEstimateResponseLinesInner.md)
 - [XiSdkResellers.GetAccesstoken400Response](docs/GetAccesstoken400Response.md)
 - [XiSdkResellers.GetAccesstoken500Response](docs/GetAccesstoken500Response.md)
 - [XiSdkResellers.GetAccesstoken500ResponseFault](docs/GetAccesstoken500ResponseFault.md)
 - [XiSdkResellers.GetAccesstoken500ResponseFaultDetail](docs/GetAccesstoken500ResponseFaultDetail.md)
 - [XiSdkResellers.GetResellerV6ValidateQuote400Response](docs/GetResellerV6ValidateQuote400Response.md)
 - [XiSdkResellers.GetResellerV6ValidateQuote400ResponseFieldsInner](docs/GetResellerV6ValidateQuote400ResponseFieldsInner.md)
 - [XiSdkResellers.GetResellerV6ValidateQuote500Response](docs/GetResellerV6ValidateQuote500Response.md)
 - [XiSdkResellers.InvoiceDetailsv61Response](docs/InvoiceDetailsv61Response.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseBillToInfo](docs/InvoiceDetailsv61ResponseBillToInfo.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseFxRateInfo](docs/InvoiceDetailsv61ResponseFxRateInfo.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseLinesInner](docs/InvoiceDetailsv61ResponseLinesInner.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner](docs/InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponsePaymentTermsInfo](docs/InvoiceDetailsv61ResponsePaymentTermsInfo.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseShipToInfo](docs/InvoiceDetailsv61ResponseShipToInfo.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseSummary](docs/InvoiceDetailsv61ResponseSummary.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseSummaryForeignFxTotals](docs/InvoiceDetailsv61ResponseSummaryForeignFxTotals.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseSummaryLines](docs/InvoiceDetailsv61ResponseSummaryLines.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseSummaryMiscChargesInner](docs/InvoiceDetailsv61ResponseSummaryMiscChargesInner.md)
 - [XiSdkResellers.InvoiceDetailsv61ResponseSummaryTotals](docs/InvoiceDetailsv61ResponseSummaryTotals.md)
 - [XiSdkResellers.InvoiceSearchResponse](docs/InvoiceSearchResponse.md)
 - [XiSdkResellers.InvoiceSearchResponseInvoicesInner](docs/InvoiceSearchResponseInvoicesInner.md)
 - [XiSdkResellers.OrderCreateRequest](docs/OrderCreateRequest.md)
 - [XiSdkResellers.OrderCreateRequestAdditionalAttributesInner](docs/OrderCreateRequestAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderCreateRequestEndUserInfo](docs/OrderCreateRequestEndUserInfo.md)
 - [XiSdkResellers.OrderCreateRequestLinesInner](docs/OrderCreateRequestLinesInner.md)
 - [XiSdkResellers.OrderCreateRequestLinesInnerAdditionalAttributesInner](docs/OrderCreateRequestLinesInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderCreateRequestLinesInnerEndUserInfoInner](docs/OrderCreateRequestLinesInnerEndUserInfoInner.md)
 - [XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInner](docs/OrderCreateRequestLinesInnerWarrantyInfoInner.md)
 - [XiSdkResellers.OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner](docs/OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.md)
 - [XiSdkResellers.OrderCreateRequestResellerInfo](docs/OrderCreateRequestResellerInfo.md)
 - [XiSdkResellers.OrderCreateRequestShipToInfo](docs/OrderCreateRequestShipToInfo.md)
 - [XiSdkResellers.OrderCreateRequestShipmentDetails](docs/OrderCreateRequestShipmentDetails.md)
 - [XiSdkResellers.OrderCreateRequestVmf](docs/OrderCreateRequestVmf.md)
 - [XiSdkResellers.OrderCreateResponse](docs/OrderCreateResponse.md)
 - [XiSdkResellers.OrderCreateResponseEndUserInfo](docs/OrderCreateResponseEndUserInfo.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInner](docs/OrderCreateResponseOrdersInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerAdditionalAttributesInner](docs/OrderCreateResponseOrdersInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerLinesInner](docs/OrderCreateResponseOrdersInnerLinesInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner](docs/OrderCreateResponseOrdersInnerLinesInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner](docs/OrderCreateResponseOrdersInnerLinesInnerShipmentDetailsInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerLinksInner](docs/OrderCreateResponseOrdersInnerLinksInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerMiscellaneousChargesInner](docs/OrderCreateResponseOrdersInnerMiscellaneousChargesInner.md)
 - [XiSdkResellers.OrderCreateResponseOrdersInnerRejectedLineItemsInner](docs/OrderCreateResponseOrdersInnerRejectedLineItemsInner.md)
 - [XiSdkResellers.OrderCreateResponseShipToInfo](docs/OrderCreateResponseShipToInfo.md)
 - [XiSdkResellers.OrderDetailB2B](docs/OrderDetailB2B.md)
 - [XiSdkResellers.OrderDetailB2BAdditionalAttributesInner](docs/OrderDetailB2BAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderDetailB2BBillToInfo](docs/OrderDetailB2BBillToInfo.md)
 - [XiSdkResellers.OrderDetailB2BEndUserInfo](docs/OrderDetailB2BEndUserInfo.md)
 - [XiSdkResellers.OrderDetailB2BLinesInner](docs/OrderDetailB2BLinesInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerAdditionalAttributesInner](docs/OrderDetailB2BLinesInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInner](docs/OrderDetailB2BLinesInnerEstimatedDatesInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery](docs/OrderDetailB2BLinesInnerEstimatedDatesInnerDelivery.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerDeliveryDeliveryDateRange](docs/OrderDetailB2BLinesInnerEstimatedDatesInnerDeliveryDeliveryDateRange.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShip](docs/OrderDetailB2BLinesInnerEstimatedDatesInnerShip.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange](docs/OrderDetailB2BLinesInnerEstimatedDatesInnerShipShipDateRange.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerLinksInner](docs/OrderDetailB2BLinesInnerLinksInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerMultipleShipmentsInner](docs/OrderDetailB2BLinesInnerMultipleShipmentsInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerScheduleLinesInner](docs/OrderDetailB2BLinesInnerScheduleLinesInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerServiceContractInfo](docs/OrderDetailB2BLinesInnerServiceContractInfo.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerServiceContractInfoContractInfo](docs/OrderDetailB2BLinesInnerServiceContractInfoContractInfo.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo](docs/OrderDetailB2BLinesInnerServiceContractInfoLicenseInfo.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions](docs/OrderDetailB2BLinesInnerServiceContractInfoSubscriptions.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerShipmentDetailsInner](docs/OrderDetailB2BLinesInnerShipmentDetailsInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner](docs/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner](docs/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInner.md)
 - [XiSdkResellers.OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner](docs/OrderDetailB2BLinesInnerShipmentDetailsInnerCarrierDetailsInnerTrackingDetailsInnerSerialNumbersInner.md)
 - [XiSdkResellers.OrderDetailB2BMiscellaneousChargesInner](docs/OrderDetailB2BMiscellaneousChargesInner.md)
 - [XiSdkResellers.OrderDetailB2BShipToInfo](docs/OrderDetailB2BShipToInfo.md)
 - [XiSdkResellers.OrderModifyRequest](docs/OrderModifyRequest.md)
 - [XiSdkResellers.OrderModifyRequestAdditionalAttributesInner](docs/OrderModifyRequestAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderModifyRequestLinesInner](docs/OrderModifyRequestLinesInner.md)
 - [XiSdkResellers.OrderModifyRequestShipToInfo](docs/OrderModifyRequestShipToInfo.md)
 - [XiSdkResellers.OrderModifyResponse](docs/OrderModifyResponse.md)
 - [XiSdkResellers.OrderModifyResponseLinesInner](docs/OrderModifyResponseLinesInner.md)
 - [XiSdkResellers.OrderModifyResponseLinesInnerAdditionalAttributesInner](docs/OrderModifyResponseLinesInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.OrderModifyResponseLinesInnerShipmentDetails](docs/OrderModifyResponseLinesInnerShipmentDetails.md)
 - [XiSdkResellers.OrderModifyResponseRejectedLineItemsInner](docs/OrderModifyResponseRejectedLineItemsInner.md)
 - [XiSdkResellers.OrderModifyResponseShipToInfo](docs/OrderModifyResponseShipToInfo.md)
 - [XiSdkResellers.OrderSearchResponse](docs/OrderSearchResponse.md)
 - [XiSdkResellers.OrderSearchResponseOrdersInner](docs/OrderSearchResponseOrdersInner.md)
 - [XiSdkResellers.OrderSearchResponseOrdersInnerLinks](docs/OrderSearchResponseOrdersInnerLinks.md)
 - [XiSdkResellers.OrderSearchResponseOrdersInnerSubOrdersInner](docs/OrderSearchResponseOrdersInnerSubOrdersInner.md)
 - [XiSdkResellers.OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner](docs/OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequest](docs/OrderStatusAsyncNotificationRequest.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInner](docs/OrderStatusAsyncNotificationRequestResourceInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinesInner](docs/OrderStatusAsyncNotificationRequestResourceInnerLinesInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner](docs/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner](docs/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner](docs/OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInnerPackageDetailsInner.md)
 - [XiSdkResellers.OrderStatusAsyncNotificationRequestResourceInnerLinksInner](docs/OrderStatusAsyncNotificationRequestResourceInnerLinksInner.md)
 - [XiSdkResellers.PostAsyncOrderCreateV7400Response](docs/PostAsyncOrderCreateV7400Response.md)
 - [XiSdkResellers.PostAsyncOrderCreateV7400ResponseFieldsInner](docs/PostAsyncOrderCreateV7400ResponseFieldsInner.md)
 - [XiSdkResellers.PostRenewalssearch400Response](docs/PostRenewalssearch400Response.md)
 - [XiSdkResellers.PriceAndAvailabilityRequest](docs/PriceAndAvailabilityRequest.md)
 - [XiSdkResellers.PriceAndAvailabilityRequestAdditionalAttributesInner](docs/PriceAndAvailabilityRequestAdditionalAttributesInner.md)
 - [XiSdkResellers.PriceAndAvailabilityRequestAvailabilityByWarehouseInner](docs/PriceAndAvailabilityRequestAvailabilityByWarehouseInner.md)
 - [XiSdkResellers.PriceAndAvailabilityRequestProductsInner](docs/PriceAndAvailabilityRequestProductsInner.md)
 - [XiSdkResellers.PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner](docs/PriceAndAvailabilityRequestProductsInnerAdditionalAttributesInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInner](docs/PriceAndAvailabilityResponseInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerAvailability](docs/PriceAndAvailabilityResponseInnerAvailability.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner](docs/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner](docs/PriceAndAvailabilityResponseInnerAvailabilityAvailabilityByWarehouseInnerBackOrderInfoInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInner](docs/PriceAndAvailabilityResponseInnerDiscountsInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner](docs/PriceAndAvailabilityResponseInnerDiscountsInnerQuantityDiscountsInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner](docs/PriceAndAvailabilityResponseInnerDiscountsInnerSpecialPricingInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerPricing](docs/PriceAndAvailabilityResponseInnerPricing.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner](docs/PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner.md)
 - [XiSdkResellers.PriceAndAvailabilityResponseInnerServiceFeesInner](docs/PriceAndAvailabilityResponseInnerServiceFeesInner.md)
 - [XiSdkResellers.ProductDetailResponse](docs/ProductDetailResponse.md)
 - [XiSdkResellers.ProductDetailResponseAdditionalInformation](docs/ProductDetailResponseAdditionalInformation.md)
 - [XiSdkResellers.ProductDetailResponseAdditionalInformationProductWeightInner](docs/ProductDetailResponseAdditionalInformationProductWeightInner.md)
 - [XiSdkResellers.ProductDetailResponseCiscoFields](docs/ProductDetailResponseCiscoFields.md)
 - [XiSdkResellers.ProductDetailResponseIndicators](docs/ProductDetailResponseIndicators.md)
 - [XiSdkResellers.ProductDetailResponseTechnicalSpecificationsInner](docs/ProductDetailResponseTechnicalSpecificationsInner.md)
 - [XiSdkResellers.ProductSearchResponse](docs/ProductSearchResponse.md)
 - [XiSdkResellers.ProductSearchResponseCatalogInner](docs/ProductSearchResponseCatalogInner.md)
 - [XiSdkResellers.ProductSearchResponseCatalogInnerLinksInner](docs/ProductSearchResponseCatalogInnerLinksInner.md)
 - [XiSdkResellers.QuoteDetailsResponse](docs/QuoteDetailsResponse.md)
 - [XiSdkResellers.QuoteDetailsResponseAdditionalAttributesInner](docs/QuoteDetailsResponseAdditionalAttributesInner.md)
 - [XiSdkResellers.QuoteDetailsResponseEndUserInfo](docs/QuoteDetailsResponseEndUserInfo.md)
 - [XiSdkResellers.QuoteDetailsResponseProductsInner](docs/QuoteDetailsResponseProductsInner.md)
 - [XiSdkResellers.QuoteDetailsResponseProductsInnerPrice](docs/QuoteDetailsResponseProductsInnerPrice.md)
 - [XiSdkResellers.QuoteDetailsResponseResellerInfo](docs/QuoteDetailsResponseResellerInfo.md)
 - [XiSdkResellers.QuoteSearchResponse](docs/QuoteSearchResponse.md)
 - [XiSdkResellers.QuoteSearchResponseQuotesInner](docs/QuoteSearchResponseQuotesInner.md)
 - [XiSdkResellers.QuoteSearchResponseQuotesInnerLinks](docs/QuoteSearchResponseQuotesInnerLinks.md)
 - [XiSdkResellers.RenewalsDetailsResponse](docs/RenewalsDetailsResponse.md)
 - [XiSdkResellers.RenewalsDetailsResponseAdditionalAttributesInner](docs/RenewalsDetailsResponseAdditionalAttributesInner.md)
 - [XiSdkResellers.RenewalsDetailsResponseEndUserInfo](docs/RenewalsDetailsResponseEndUserInfo.md)
 - [XiSdkResellers.RenewalsDetailsResponseProductsInner](docs/RenewalsDetailsResponseProductsInner.md)
 - [XiSdkResellers.RenewalsDetailsResponseReferenceNumber](docs/RenewalsDetailsResponseReferenceNumber.md)
 - [XiSdkResellers.RenewalsSearchRequest](docs/RenewalsSearchRequest.md)
 - [XiSdkResellers.RenewalsSearchRequestDateType](docs/RenewalsSearchRequestDateType.md)
 - [XiSdkResellers.RenewalsSearchRequestDateTypeEndDate](docs/RenewalsSearchRequestDateTypeEndDate.md)
 - [XiSdkResellers.RenewalsSearchRequestDateTypeExpirationDate](docs/RenewalsSearchRequestDateTypeExpirationDate.md)
 - [XiSdkResellers.RenewalsSearchRequestDateTypeInvoiceDate](docs/RenewalsSearchRequestDateTypeInvoiceDate.md)
 - [XiSdkResellers.RenewalsSearchRequestDateTypeStartDate](docs/RenewalsSearchRequestDateTypeStartDate.md)
 - [XiSdkResellers.RenewalsSearchRequestStatus](docs/RenewalsSearchRequestStatus.md)
 - [XiSdkResellers.RenewalsSearchRequestStatusOpporutinyStatus](docs/RenewalsSearchRequestStatusOpporutinyStatus.md)
 - [XiSdkResellers.RenewalsSearchResponse](docs/RenewalsSearchResponse.md)
 - [XiSdkResellers.RenewalsSearchResponseRenewalsInner](docs/RenewalsSearchResponseRenewalsInner.md)
 - [XiSdkResellers.RenewalsSearchResponseRenewalsInnerLinksInner](docs/RenewalsSearchResponseRenewalsInnerLinksInner.md)
 - [XiSdkResellers.ReturnsCreateRequest](docs/ReturnsCreateRequest.md)
 - [XiSdkResellers.ReturnsCreateRequestListInner](docs/ReturnsCreateRequestListInner.md)
 - [XiSdkResellers.ReturnsCreateRequestListInnerShipFromInfoInner](docs/ReturnsCreateRequestListInnerShipFromInfoInner.md)
 - [XiSdkResellers.ReturnsCreateResponse](docs/ReturnsCreateResponse.md)
 - [XiSdkResellers.ReturnsCreateResponseReturnsClaimsInner](docs/ReturnsCreateResponseReturnsClaimsInner.md)
 - [XiSdkResellers.ReturnsDetailsResponse](docs/ReturnsDetailsResponse.md)
 - [XiSdkResellers.ReturnsDetailsResponseProductsInner](docs/ReturnsDetailsResponseProductsInner.md)
 - [XiSdkResellers.ReturnsSearchResponse](docs/ReturnsSearchResponse.md)
 - [XiSdkResellers.ReturnsSearchResponseReturnsClaimsInner](docs/ReturnsSearchResponseReturnsClaimsInner.md)
 - [XiSdkResellers.ReturnsSearchResponseReturnsClaimsInnerLinksInner](docs/ReturnsSearchResponseReturnsClaimsInnerLinksInner.md)
 - [XiSdkResellers.ValidateQuoteResponse](docs/ValidateQuoteResponse.md)
 - [XiSdkResellers.ValidateQuoteResponseLinesInner](docs/ValidateQuoteResponseLinesInner.md)
 - [XiSdkResellers.ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner](docs/ValidateQuoteResponseLinesInnerVmfAdditionalAttributesLinesInner.md)
 - [XiSdkResellers.ValidateQuoteResponseVmfAdditionalAttributesInner](docs/ValidateQuoteResponseVmfAdditionalAttributesInner.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: https://api.ingrammicro.com:443/oauth/oauth20/token?grant_type=client_credentials&client_id={ClientId}&client_secret={clientSecret}
- **Method**: Get
- **Scopes**: 
  - write: allows modifying resources
  - read: allows reading resources
 

## Author
-[Ingram Micro Xvantage](https://github.com/ingrammicro-xvantage)

## Contact

For any inquiries or support, please feel free to contact us at:

- Email: xi_support@ingrammicro.com