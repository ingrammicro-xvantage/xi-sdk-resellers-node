# ResellerApiDocumentationUnitedStates.OrderModifyResponseLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subOrderNumber** | **String** | The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number. | [optional] 
**ingramLineNumber** | **String** | The IngramMicro line number. | [optional] 
**customerLineNumber** | **String** | The reseller&#39;s line number for reference in their system. | [optional] 
**ingramPartNumber** | **String** | The unique IngramMicro part number for the line item. | [optional] 
**vendorPartNumber** | **String** | The vendor&#39;s part number for the line item. | [optional] 
**quantityOrdered** | **Number** | The quantity ordered of the line item. | [optional] 
**quantityConfirmed** | **Number** | The quantity confirmed of the line item. | [optional] 
**quantityBackOrdered** | **Number** | The quantity backordered of the line item. | [optional] 
**shipmentDetails** | [**OrderModifyResponseLinesInnerShipmentDetails**](OrderModifyResponseLinesInnerShipmentDetails.md) |  | [optional] 
**additionalAttributes** | [**[OrderModifyResponseLinesInnerAdditionalAttributesInner]**](OrderModifyResponseLinesInnerAdditionalAttributesInner.md) | SAP requested and country-specific line level details. | [optional] 
**notes** | **String** | Line-level notes for the order. | [optional] 


