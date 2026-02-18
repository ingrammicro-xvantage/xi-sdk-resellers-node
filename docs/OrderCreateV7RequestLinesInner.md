# XiSdkResellers.OrderCreateV7RequestLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerLineNumber** | **String** | The reseller&#39;s line item number for reference in their system. The customer line number needs to be a unique numeric value between 1 and 884. In the event we receive duplicate values or alphanumeric values in the customer line number, we will re-sequence the customer line number. To prevent re-sequencing, please use a unique numeric value between 1 and 884 in the customer line number. | [optional] 
**ingramPartNumber** | **String** | The unique IngramMicro part number. | [optional] 
**vendorPartNumber** | **String** | The vendor&#39;s part number for the line item. | [optional] 
**quantity** | **Number** | The requested quantity of the line item. | [optional] 
**unitPrice** | **Number** | The reseller-requested unit price for the line item. The unit price is not guaranteed. | [optional] 
**specialBidNumber** | **String** | The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid number take precedence over header-level bid numbers. | [optional] 
**endUserPrice** | **Number** | The end-user price. Required for Export Orders. | [optional] 
**notes** | **String** | The attribute field data. | [optional] 
**resourceId** | **String** | The resource id of the subscription | [optional] 
**planid** | **String** | ID of the subscription plan | [optional] 
**subscriptionPeriod** | [**OrderCreateV7RequestLinesInnerSubscriptionPeriod**](OrderCreateV7RequestLinesInnerSubscriptionPeriod.md) |  | [optional] 
**billingPeriod** | [**OrderCreateV7RequestLinesInnerBillingPeriod**](OrderCreateV7RequestLinesInnerBillingPeriod.md) |  | [optional] 
**margin** | **Number** | Line-level margin requested by customer | [optional] 
**endCustomerPrice** | **Number** | Line-level end-customer price requsted by customer | [optional] 
**vriAdditionalAttributes** | [**[OrderCreateV7RequestVmfVendorAdditionalAttributesInner]**](OrderCreateV7RequestVmfVendorAdditionalAttributesInner.md) | The object containing the list of Vendor Mandatory Fields required by the vendor for the subscription products. | [optional] 
**endUserInfo** | [**[OrderCreateV7RequestLinesInnerEndUserInfoInner]**](OrderCreateV7RequestLinesInnerEndUserInfoInner.md) |  | [optional] 
**additionalAttributes** | [**[OrderCreateV7RequestLinesInnerAdditionalAttributesInner]**](OrderCreateV7RequestLinesInnerAdditionalAttributesInner.md) |  | [optional] 
**warrantyInfo** | [**OrderCreateV7RequestLinesInnerWarrantyInfo**](OrderCreateV7RequestLinesInnerWarrantyInfo.md) |  | [optional] 
**vmfAdditionalAttributesLines** | [**[OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner]**](OrderCreateV7RequestLinesInnerVmfAdditionalAttributesLinesInner.md) | The object containing the list of fields required at a line level by the vendor.&lt;br&gt; This a &lt;code&gt;Deprecated&lt;/code&gt; object. Kindly use &lt;b&gt;vmfVendorAdditionalAttributes&lt;/b&gt; object | [optional] 


