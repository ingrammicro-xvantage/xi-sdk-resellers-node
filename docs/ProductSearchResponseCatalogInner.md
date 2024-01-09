# ResellerApiDocumentationUnitedStates.ProductSearchResponseCatalogInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the product. | [optional] 
**category** | **String** | The category of the product. Example: Displays. | [optional] 
**subCategory** | **String** | The sub category for the product. Example: ComputernMonitors. | [optional] 
**productType** | **String** | The product type of the product. Example: LCD Monitors. | [optional] 
**ingramPartNumber** | **String** | The Unique IngramMicro part number for the product. | [optional] 
**vendorPartNumber** | **String** | The vendor part number for the product. | [optional] 
**upcCode** | **String** | The UPC code for the product. Consists of 12 numeric digits that are uniquly assigned to each trade item. | [optional] 
**vendorName** | **String** | The name of the vendor/manufacturer of the product. | [optional] 
**endUserRequired** | **String** | Indicates whether the contact information for the end user/customer is required, which determines pricing and discounts. | [optional] 
**hasDiscounts** | **String** | Specifies if there are discounts available for the product. | [optional] 
**type** | **String** | The SKU type of product. One of Physical, Digital, or Any. | [optional] 
**discontinued** | **String** | Indicates if the product has been discontinued. | [optional] 
**newProduct** | **String** | Indicates if the product is new. For digital products, newer than 10 days. For physical products, newer than 150 days. | [optional] 
**directShip** | **String** | Indicates if the product will be shipped directly to the reseller or end user from the vendor/manufacturer. | [optional] 
**hasWarranty** | **String** | Indicates if the product has a warranty. | [optional] 
**links** | [**[ProductSearchResponseCatalogInnerLinksInner]**](ProductSearchResponseCatalogInnerLinksInner.md) |  | [optional] 
**extraDescription** | **String** | The extended description of the product. | [optional] 
**replacementSku** | **String** | Identifies a SKU that is a comparable subsititution of the current SKU if available. | [optional] 
**authorizedToPurchase** | **String** | It is true when it exists in matched queries field of ealstic search API. | [optional] 


