# XiSdkResellers.OrderDetailResponseLinesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subOrderNumber** | **String** | The sub order number. The two-digit prefix is the warehouse code of the warehouse nearest the reseller. The middle number is the order number. The two-digit suffix is the sub order number. | [optional] 
**ingramOrderLineNumber** | **String** | Unique Ingram Micro line number. Starts with 001. | [optional] 
**vendorSalesOrderLineNumber** | **String** | The vendor&#39;s sales order line number. | [optional] 
**customerLinenumber** | **String** | The reseller&#39;s line item number for reference in their system. | [optional] 
**lineStatus** | **String** | The status for the line item in the order. One of- Backordered, In Progress, Shipped, Delivered, Canceled, On Hold | [optional] 
**ingramPartNumber** | **String** | Unique IngramMicro part number. | [optional] 
**vendorPartNumber** | **String** | The vendor&#39;s part number for the line item. | [optional] 
**vendorName** | **String** | The vendor&#39;s name for the part in their system. | [optional] 
**partDescription** | **String** | The vendor&#39;s description of the part in their system. | [optional] 
**unitWeight** | **Number** | The unit weight of the line item. | [optional] 
**weightUom** | **String** | The unit of measure for the line item. | [optional] 
**unitPrice** | **Number** | The unit price of the line item. | [optional] 
**upcCode** | **String** | The UPC code of a product. | [optional] 
**extendedPrice** | **Number** | Unit price X quantity for the line item. | [optional] 
**taxAmount** | **Number** | The tax amount for the line item. | [optional] 
**currencyCode** | **String** | The country-specific three character ISO 4217 currency code for the line item. | [optional] 
**quantityOrdered** | **Number** | The quantity ordered of the line item. | [optional] 
**quantityConfirmed** | **Number** | The quantity confirmed for the line item. | [optional] 
**quantityBackOrdered** | **Number** | The quantity backordered for the line item. | [optional] 
**specialBidNumber** | **String** | The line-level bid number provided to the reseller by the vendor for special pricing and discounts. Used to track the bid number in the case of split orders or where different line items have different bid numbers. Line-level bid numbers take precedence over header-level bid numbers. | [optional] 
**requestedDeliveryDate** | **Date** | Reseller-requested delivery date. Delivery date is not guaranteed. | [optional] 
**promisedDeliveryDate** | **Date** | The delivery date promised by IngramMicro. | [optional] 
**lineNotes** | **String** | Line-level notes for the order. | [optional] 
**shipmentDetails** | [**[OrderDetailResponseLinesInnerShipmentDetailsInner]**](OrderDetailResponseLinesInnerShipmentDetailsInner.md) |  | [optional] 
**additionalAttributes** | [**[OrderDetailResponseLinesInnerAdditionalAttributesInner]**](OrderDetailResponseLinesInnerAdditionalAttributesInner.md) |  | [optional] 
**links** | [**[OrderDetailResponseLinesInnerLinksInner]**](OrderDetailResponseLinesInnerLinksInner.md) |  | [optional] 


