# XiSdkResellers.OrderModifyResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramOrderNumber** | **String** | The IngramMicro order number. | [optional] 
**changeDescription** | **String** | The description of the change. | [optional] 
**orderModifiedDate** | **String** | The date the order was modified. | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s order number for reference in their system. | [optional] 
**endCustomerOrderNumber** | **String** | The end user/customer&#39;s order number for reference in their system. | [optional] 
**orderTotal** | **Number** | The total for the order. | [optional] 
**notes** | **String** | Order-level notes. | [optional] 
**orderSubTotal** | **Number** | The sub total for the order. | [optional] 
**freightCharges** | **Number** | The freight charges for the order. | [optional] 
**totalTax** | **Number** | The total tax for the order. | [optional] 
**orderStatus** | **String** | The status of the order. One of the following. Backordered, In Progress, Shipped, Delivered, Canceled, On Hold | [optional] 
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit. | [optional] 
**shipToInfo** | [**OrderModifyResponseShipToInfo**](OrderModifyResponseShipToInfo.md) |  | [optional] 
**lines** | [**[OrderModifyResponseLinesInner]**](OrderModifyResponseLinesInner.md) | The line-level details for the order. | [optional] 
**rejectedLineItems** | [**[OrderModifyResponseRejectedLineItemsInner]**](OrderModifyResponseRejectedLineItemsInner.md) | Details for failed lines in the order. | [optional] 
**additionalAttributes** | [**[OrderModifyResponseLinesInnerAdditionalAttributesInner]**](OrderModifyResponseLinesInnerAdditionalAttributesInner.md) | Header-level additional attributes. | [optional] 


