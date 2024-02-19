# XiSdkResellers.InvoiceDetailsv61Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | The Invoice number for the order. | [optional] 
**invoiceStatus** | **String** | Status of the invoice. | [optional] 
**invoiceDate** | **Date** | Date of an Invoice. | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s order number for reference in their system. | [optional] 
**endCustomerOrderNumber** | **String** | The end customer&#39;s order number for reference in their system. | [optional] 
**orderNumber** | **String** | The end customer&#39;s order number for reference in their system. | [optional] 
**orderDate** | **Date** | The date and time in UTC format that the order was created. | [optional] 
**billToID** | **String** | Bill to party | [optional] 
**invoiceType** | **String** | Type of the Invoice | [optional] 
**invoiceDueDate** | **String** | Date when the invoice is due. | [optional] 
**customerCountryCode** | **String** | Customer country code. | [optional] 
**customerNumber** | **String** | Unique customer number in Ingram&#39;s system. | [optional] 
**ingramOrderNumber** | **String** | The IngramMicro sales order number. | [optional] 
**notes** | **String** | Notes for the invoice. | [optional] 
**paymentTermsInfo** | [**InvoiceDetailsv61ResponsePaymentTermsInfo**](InvoiceDetailsv61ResponsePaymentTermsInfo.md) |  | [optional] 
**billToInfo** | [**InvoiceDetailsv61ResponseBillToInfo**](InvoiceDetailsv61ResponseBillToInfo.md) |  | [optional] 
**shipToInfo** | [**InvoiceDetailsv61ResponseShipToInfo**](InvoiceDetailsv61ResponseShipToInfo.md) |  | [optional] 
**lines** | [**[InvoiceDetailsv61ResponseLinesInner]**](InvoiceDetailsv61ResponseLinesInner.md) |  | [optional] 
**fxRateInfo** | [**InvoiceDetailsv61ResponseFxRateInfo**](InvoiceDetailsv61ResponseFxRateInfo.md) |  | [optional] 
**summary** | [**InvoiceDetailsv61ResponseSummary**](InvoiceDetailsv61ResponseSummary.md) |  | [optional] 


