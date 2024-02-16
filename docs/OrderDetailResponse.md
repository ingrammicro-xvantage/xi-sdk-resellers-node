# XiSdkResellers.OrderDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramOrderNumber** | **String** | The IngramMicro sales order number. | [optional] 
**ingramOrderDate** | **String** | The date and time in UTC format that the order was created. | [optional] 
**orderType** | **String** | The order type. One of B &#x3D; Branch Transfer, C &#x3D; COD, D &#x3D; Direct Ship, F &#x3D; Future Order, P &#x3D; Special Order, M &#x3D; Memo, Q &#x3D; Quote, S &#x3D; Sales Order. | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s order number for reference in their system. | [optional] 
**endCustomerOrderNumber** | **String** | The end user/customer&#39;s order number for reference in their system. | [optional] 
**vendorSalesOrderNumber** | **String** | The vendor&#39;s order number for reference in their system. | [optional] 
**orderStatus** | **String** | The header-level status of the order. One of- Shipped, Canceled, Backordered, Processing, On Hold, Delivered. | [optional] 
**orderTotal** | **Number** | The total cost for the order, includes subtotal, freight charges, and tax. | [optional] 
**orderSubTotal** | **Number** | The sub total cost for the order, not including tax and freight. | [optional] 
**freightCharges** | **Number** | The freight charges for the order. | [optional] 
**currencyCode** | **String** | The country-specific three digit ISO 4217 currency code for the order. | [optional] 
**totalWeight** | **Number** | The total weight of the order. Pounds in North America, KG in all other countries. | [optional] 
**totalTax** | **Number** | The total tax for the order. | [optional] 
**paymentTerms** | **String** | The payment terms of the order. (Ex- Net 30 days). | [optional] 
**notes** | **String** | The header-level notes for the order. | [optional] 
**billToInfo** | [**OrderDetailResponseBillToInfo**](OrderDetailResponseBillToInfo.md) |  | [optional] 
**shipToInfo** | [**OrderDetailResponseShipToInfo**](OrderDetailResponseShipToInfo.md) |  | [optional] 
**endUserInfo** | [**OrderDetailResponseEndUserInfo**](OrderDetailResponseEndUserInfo.md) |  | [optional] 
**lines** | [**[OrderDetailResponseLinesInner]**](OrderDetailResponseLinesInner.md) |  | [optional] 
**miscellaneousCharges** | [**[OrderDetailResponseMiscellaneousChargesInner]**](OrderDetailResponseMiscellaneousChargesInner.md) |  | [optional] 
**additionalAttributes** | [**[OrderDetailResponseLinesInnerAdditionalAttributesInner]**](OrderDetailResponseLinesInnerAdditionalAttributesInner.md) |  | [optional] 


