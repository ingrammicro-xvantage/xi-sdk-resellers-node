# ResellerApiDocumentationUnitedStates.OrderSearchResponseOrdersInnerSubOrdersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subOrderNumber** | **String** | The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest to the reseller. The middle number is the order number. The two-digit suffix is the sub order number. | [optional] 
**subOrderTotal** | **Number** | The total for the suborder. | [optional] 
**subOrderStatus** | **String** | The status of the suborder. One of:- Shipped, Canceled, Backordered, Processing, On Hold, Delivered | [optional] 
**links** | [**[OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner]**](OrderSearchResponseOrdersInnerSubOrdersInnerLinksInner.md) | Link to Order Details for the sub order(s). | [optional] 


