# XiSdkResellers.OrderCreateV7RequestLinesInnerWarrantyInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hardwareLineLink** | **String** | Customer line number of the warranty product in this request for linkage, either hardwareLineLink or warrantyLineLink can be used in a line | [optional] 
**warrantyLineLink** | **String** | Customer line number of the hardware product in this request for linkage, either hardwareLineLink or warrantyLineLink can be used in a line. | [optional] 
**directLineLink** | **String** | Unique value to link hardware and warranty lines. Should be used only when products are purchased from both Ingram and/or vendor but the warranty is purchased through Ingram for them. | [optional] 
**serialInfo** | [**[OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner]**](OrderCreateV7RequestLinesInnerWarrantyInfoInnerSerialInfoInner.md) |  | [optional] 


