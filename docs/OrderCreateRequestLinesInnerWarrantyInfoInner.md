# ResellerApiDocumentationUnitedStates.OrderCreateRequestLinesInnerWarrantyInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directLineLink** | **String** | Unique value to link hardware and warranty lines. Should be used only when products are purchased from both Ingram and/or vendor but the warranty is purchased through Ingram for them. | [optional] 
**warrantyLineLink** | **String** | Customer line number of the hardware product in this request for linkage, either hardwareLineLink or warrantyLineLink can be used in a line. | [optional] 
**hardwareLineLink** | **String** | Customer line number of the warranty product in this request for linkage, either hardwareLineLink or warrantyLineLink can be used in a line  | [optional] 
**serialInfo** | [**[OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner]**](OrderCreateRequestLinesInnerWarrantyInfoInnerSerialInfoInner.md) | Serial information of the hardware to be associated with the warranty, applicable on post sale orders. | [optional] 


