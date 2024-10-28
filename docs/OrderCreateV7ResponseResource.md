# XiSdkResellers.OrderCreateV7ResponseResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerOrderNumber** | **String** | The reseller&#39;s unique PO/Order number. | [optional] 
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit | [optional] 
**orderSplit** | **Boolean** | true for multiple orders | [optional] 
**processedPartially** | **Boolean** | true for partial order succesfully placed | [optional] 
**purchaseOrderTotal** | **Number** | Total of all the orders including taxes and fees. | [optional] 
**shipToInfo** | [**OrderCreateV7ResponseResourceShipToInfo**](OrderCreateV7ResponseResourceShipToInfo.md) |  | [optional] 
**orders** | [**[OrderCreateV7ResponseResourceOrdersInner]**](OrderCreateV7ResponseResourceOrdersInner.md) | Order-level details. | [optional] 


