# XiSdkResellers.OrderCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerOrderNumber** | **String** | The reseller&#39;s unique PO/Order number. | [optional] 
**endCustomerOrderNumber** | **String** | The end user/customer&#39;s Purchase Order number. | [optional] 
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit | [optional] 
**specialBidNumber** | **String** | The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers. | [optional] 
**orderSplit** | **Boolean** | true for multiple orders | [optional] 
**processedPartially** | **Boolean** | true for partial order succesfully placed | [optional] 
**purchaseOrderTotal** | **Number** | Total of all the orders including taxes and fees. | [optional] 
**shipToInfo** | [**OrderCreateResponseShipToInfo**](OrderCreateResponseShipToInfo.md) |  | [optional] 
**endUserInfo** | [**OrderCreateResponseEndUserInfo**](OrderCreateResponseEndUserInfo.md) |  | [optional] 
**orders** | [**[OrderCreateResponseOrdersInner]**](OrderCreateResponseOrdersInner.md) | Order-level details. | [optional] 


