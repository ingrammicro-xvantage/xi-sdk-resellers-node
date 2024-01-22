# XiSdkResellers.OrderCreateRequestLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerLineNumber** | **String** | The reseller&#39;s line item number for reference in their system. The customer line number needs to be a unique numeric value between 1 and 884. In the event we receive duplicate values or alphanumeric values in the customer line number, we will re-sequence the customer line number. To prevent re-sequencing, please use a unique numeric value between 1 and 884 in the customer line number. | [optional] 
**ingramPartNumber** | **String** | The unique IngramMicro part number. | [optional] 
**quantity** | **Number** | The requested quantity of the line item. | [optional] 
**specialBidNumber** | **String** | The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid number take precedence over header-level bid numbers. | [optional] 
**notes** | **String** | Line-level notes. | [optional] 
**unitPrice** | **Number** | The reseller-requested unit price for the line item. The unit price is not guaranteed. | [optional] 
**endUserPrice** | **Number** | The end user price. | [optional] 
**additionalAttributes** | [**[OrderCreateRequestLinesInnerAdditionalAttributesInner]**](OrderCreateRequestLinesInnerAdditionalAttributesInner.md) |  | [optional] 
**warrantyInfo** | [**[OrderCreateRequestLinesInnerWarrantyInfoInner]**](OrderCreateRequestLinesInnerWarrantyInfoInner.md) | Warranty details for the line. This is required in case of warranty orders. | [optional] 
**endUserInfo** | [**[OrderCreateRequestLinesInnerEndUserInfoInner]**](OrderCreateRequestLinesInnerEndUserInfoInner.md) |  | [optional] 


