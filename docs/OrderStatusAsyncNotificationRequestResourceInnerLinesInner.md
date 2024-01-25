# ResellerApi.OrderStatusAsyncNotificationRequestResourceInnerLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineNumber** | **String** | The Ingram Micro line number for the product | [optional] 
**subOrderNumber** | **String** | The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number. | [optional] 
**lineStatus** | **String** | The status for the line item in the order. One of: Backordered, Open, Shipped | [optional] 
**ingramPartNumber** | **String** | The Ingram Micro part number for the line item. | [optional] 
**vendorPartNumber** | **String** | The vendor part number for the line item. | [optional] 
**requestedQuantity** | **String** | The quantity of the line item requested. | [optional] 
**shippedQuantity** | **String** | The quantity of the line item that has been shipped. | [optional] 
**backorderedQuantity** | **String** | The quantity of the line item that is backordered. | [optional] 
**shipmentDetails** | [**[OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner]**](OrderStatusAsyncNotificationRequestResourceInnerLinesInnerShipmentDetailsInner.md) |  | [optional] 
**serialNumberDetails** | [**[OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner]**](OrderStatusAsyncNotificationRequestResourceInnerLinesInnerSerialNumberDetailsInner.md) |  | [optional] 


