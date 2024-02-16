# XiSdkResellers.InvoiceDetailsv61ResponseLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramLineNumber** | **String** | Unique line number from Ingram. | [optional] 
**customerLineNumber** | **String** | Line number passes by customer while creating an order. | [optional] [default to &#39;0&#39;]
**ingramPartNumber** | **String** | Ingram Micro SKU (stock keeping unit). An identification, usually alphanumeric, of a particular product that allows it to be tracked for inventory purposes. | [optional] 
**vendorPartNumber** | **String** | Vendor Part Number. | [optional] 
**customerPartNumber** | **String** | Part number from customer&#39;s system. | [optional] 
**vendorName** | **String** | Name of the vendor. | [optional] 
**productDescription** | **String** | Description of the product. | [optional] 
**unitWeight** | **Number** | Weight of the product. | [optional] 
**quantity** | **Number** | Quantity of the product. | [optional] 
**unitPrice** | **Number** | Unit price of the product. | [optional] 
**unitOfMeasure** | **String** | Unit of measure of the product. | [optional] 
**currencyCode** | **String** | Currency code. | [optional] 
**extendedPrice** | **Number** | Extended price of the product. | [optional] 
**taxPercentage** | **Number** | Tax percentage | [optional] 
**taxRate** | **Number** | Tax rate | [optional] 
**taxAmount** | **Number** | Line level tax amount. | [optional] 
**serialNumbers** | [**[InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner]**](InvoiceDetailsv61ResponseLinesInnerSerialNumbersInner.md) |  | [optional] 
**quantityOrdered** | **Number** | Quantity ordered by the customer. | [optional] 
**quantityShipped** | **Number** | Quantity shipped to the customer. | [optional] 


