# ResellerApiDocumentation.OrderModifyRequestLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramPartNumber** | **String** | The unique IngramMicro part number. | [optional] 
**ingramLineNumber** | **String** | The IngramMicro line number. | [optional] 
**customerLineNumber** | **String** | The reseller&#39;s line number for reference in their system. | [optional] 
**addUpdateDeleteLine** | **String** | The line number that was added, updated, or deleted. | [optional] 
**quantity** | **Number** | The quantity of the line item. | [optional] 
**notes** | **String** | The line-level notes. | [optional] 



## Enum: AddUpdateDeleteLineEnum


* `UPDATE` (value: `"UPDATE"`)

* `DELETE` (value: `"DELETE"`)

* `ADD` (value: `"ADD"`)




