# XiSdkResellers.OrderCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerOrderNumber** | **String** | The reseller&#39;s unique PO/Order number. | 
**endCustomerOrderNumber** | **String** | The end user/customer&#39;s Purchase Order number. | [optional] 
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit. | [optional] 
**specialBidNumber** | **String** | The bid number provided to the reseller by the vendor for special pricing and discounts. Line-level bid numbers take precedence over header-level bid numbers. | [optional] 
**notes** | **String** | Order level notes. | [optional] 
**acceptBackOrder** | **Boolean** | ENUM [\&quot;true\&quot;,\&quot;false\&quot;] - accept order if this item is backordered. This field along with shipComplete field decides the value of backorderflag. The value of this field is ignored when shipComplete field is present. | [optional] 
**resellerInfo** | [**OrderCreateRequestResellerInfo**](OrderCreateRequestResellerInfo.md) |  | [optional] 
**vmf** | [**OrderCreateRequestVmf**](OrderCreateRequestVmf.md) |  | [optional] 
**shipToInfo** | [**OrderCreateRequestShipToInfo**](OrderCreateRequestShipToInfo.md) |  | [optional] 
**endUserInfo** | [**OrderCreateRequestEndUserInfo**](OrderCreateRequestEndUserInfo.md) |  | [optional] 
**lines** | [**[OrderCreateRequestLinesInner]**](OrderCreateRequestLinesInner.md) | The line-level details of the order. | [optional] 
**shipmentDetails** | [**OrderCreateRequestShipmentDetails**](OrderCreateRequestShipmentDetails.md) |  | [optional] 
**additionalAttributes** | [**[OrderCreateRequestAdditionalAttributesInner]**](OrderCreateRequestAdditionalAttributesInner.md) | Shipment-level additional attributes. | [optional] 


