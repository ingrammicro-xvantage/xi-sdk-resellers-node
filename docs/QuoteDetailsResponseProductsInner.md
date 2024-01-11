# ResellerApiDocumentation.QuoteDetailsResponseProductsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteProductGuid** | **String** | Quote Product GUID  is the primary quote key in Ingram Micro&#39;s CRM - needed to retrieve quote details. | [optional] 
**lineNumber** | **String** | Line number which the product will appear in the quote.  Line number is manditory when unique configurations are included in a quote and mainting the item line order is required. | [optional] 
**quantity** | **Number** | Quantity of product line item quoted. | [optional] 
**notes** | **String** | Product line item comments. | [optional] 
**EAN** | **String** | EANUPC | [optional] 
**coO** | **String** | Country of Origin. | [optional] 
**ingramPartNumber** | **String** | Ingram Micro SKU (stock keeping unit). An identification, usually alphanumeric, of a particular product that allows it to be tracked for inventory purposes | [optional] 
**vendorPartNumber** | **String** | Vendor Part Number | [optional] 
**description** | **String** | Product description.  Note - The quote view api returns only the product short description as maintained in Ingram Micro&#39;s crm system.  For long descriptions, please refer to alternative information sources. | [optional] 
**weight** | **Number** | Weight is provided based on country standard.  For countries following Imperial standards - weight is presented as pounds with decimal.  In countries following metric standards, weight is provided as kilograms with decimal. | [optional] 
**weightUom** | **String** | Unit of measure | [optional] 
**isSuggestionProduct** | **Boolean** | Flag to indicate if a product line item is a suggested product.  The suggested product is provided in addition to the requested quoted products and a suggested option.  Suggested products are grouped together for subtotal and total calculations. | [optional] 
**vpnCategory** | **String** | Vendor product category specific to Cisco. HWDW (hardware) or service. | [optional] 
**quoteProductsSupplierPartAuxiliaryId** | **String** | Vendor product configuration ID specific to Cisco. | [optional] 
**vendorName** | **String** | Vendor name of the product | [optional] 
**terms** | **String** | Terms of the quote | [optional] 
**price** | [**QuoteDetailsResponseProductsInnerPrice**](QuoteDetailsResponseProductsInnerPrice.md) |  | [optional] 


