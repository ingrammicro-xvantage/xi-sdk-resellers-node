# ResellerApiDocumentationUnitedStates.OrderCreateResponseServiceresponseOrdercreateresponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberoflineswithsuccess** | **String** | Number of line items that were successful | [optional] 
**numberoflineswitherror** | **String** | Number of line items with error | [optional] 
**numberoflineswithwarning** | **String** | Number of line items with warnings | [optional] 
**globalorderid** | **String** | Ingram sales order number | [optional] 
**ordertype** | **String** | S&#x3D;Stocked PO D&#x3D;Direct Ship PO | [optional] 
**ordertimestamp** | **String** | Time order received | [optional] 
**invoicingsystemorderid** | **String** | Ingram Micro generated order number | [optional] 
**taxamount** | **Number** |  | [optional] 
**freightamount** | **Number** | Freight amount customer pays for freight | [optional] 
**orderamount** | **Number** | Total amount of order with freight and taxes | [optional] 
**lines** | [**[OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner]**](OrderCreateResponseServiceresponseOrdercreateresponseInnerLinesInner.md) | Collection of lines | [optional] 



## Enum: OrdertypeEnum


* `S` (value: `"S"`)

* `D` (value: `"D"`)




