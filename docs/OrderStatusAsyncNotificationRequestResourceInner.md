# ResellerApiDocumentation.OrderStatusAsyncNotificationRequestResourceInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | **String** | The event name sent in the event request. | [optional] 
**orderNumber** | **String** | The Ingram Micro order number. | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s unique PO/Order number. | [optional] 
**orderEntryTimeStamp** | **String** | The timestamp at which the order was created. | [optional] 
**lines** | [**[OrderStatusAsyncNotificationRequestResourceInnerLinesInner]**](OrderStatusAsyncNotificationRequestResourceInnerLinesInner.md) | The line-level details for the order. | [optional] 
**links** | [**[OrderStatusAsyncNotificationRequestResourceInnerLinksInner]**](OrderStatusAsyncNotificationRequestResourceInnerLinksInner.md) | Link to Order Details for the order(s). | [optional] 


