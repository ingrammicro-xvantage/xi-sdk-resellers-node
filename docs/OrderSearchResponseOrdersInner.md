# ResellerApiDocumentation.OrderSearchResponseOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramOrderNumber** | **String** | The Ingram Micro order number. | [optional] 
**ingramOrderDate** | **String** | The date the order was created(UTC). | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s order number for reference in their system. | [optional] 
**vendorSalesOrderNumber** | **String** | The vendor&#39;s order number.(only for D-Type Orders) | [optional] 
**vendorName** | **String** | The name of the vendor. | [optional] 
**endUserCompanyName** | **String** | The company name of the end user/customer. | [optional] 
**orderTotal** | **Number** | The total of the order. | [optional] 
**orderStatus** | **String** | The header-level status of the order.(OPEN/CLOSED/CANCELLED) | [optional] 
**subOrders** | [**[OrderSearchResponseOrdersInnerSubOrdersInner]**](OrderSearchResponseOrdersInnerSubOrdersInner.md) | Individual Ingram Micro order numbers associated with a single reseller PO. | [optional] 
**links** | [**OrderSearchResponseOrdersInnerLinks**](OrderSearchResponseOrdersInnerLinks.md) |  | [optional] 


