# XiSdkResellers.ProductDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingramPartNumber** | **String** | Ingram Micro unique part number for the product. | [optional] 
**vendorPartNumber** | **String** | Vendor’s part number for the product. | [optional] 
**customerPartNumber** | **String** | Reseller / end-user’s part number for the product. | [optional] 
**productAuthorized** | **String** | Boolean that indicates whether a product is authorized. | [optional] 
**description** | **String** | The description given for the product. | [optional] 
**upc** | **String** | The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item. | [optional] 
**productCategory** | **String** | The category of the product. | [optional] 
**productSubCategory** | **String** | The sub-category of the product. | [optional] 
**vendorName** | **String** | Vendor name for the order. | [optional] 
**vendorNumber** | **String** | Vendor number that identifies the product. | [optional] 
**productStatusCode** | **String** | Status code of the product. | [optional] 
**productClass** | **String** | Indicates whether the product is directly shipped from the vendor’s warehouse or if the product ships from Ingram Micro’s warehouse. Class Codes are Ingram classifications on how skus are stocked A &#x3D; Product that is stocked usually in all IM warehouses and replenished on a regular basis. B &#x3D; Product that is stocked in limited IM warehouses and replenished on a regular basis C &#x3D; Product that is stocked in fewer IM warehouses and replenished on a regular basis. D &#x3D; Product that Ingram Micro has elected to discontinue. E &#x3D; Product that will be phased out later, according to the vendor. You may not want to replenish this product, but instead sell down what is in stock. F &#x3D; Product that we carry for a specific customer or supplier under a contractual agreement. N &#x3D; New Sku. Classification before first receipt O &#x3D; Discontinued product to be liquidated S&#x3D; Order for Specialized Demand (Order to backorder) X&#x3D; direct ship from Vendor V &#x3D; product that vendor has elected to discontinue. | [optional] 
**indicators** | [**ProductDetailResponseIndicators**](ProductDetailResponseIndicators.md) |  | [optional] 
**ciscoFields** | [**ProductDetailResponseCiscoFields**](ProductDetailResponseCiscoFields.md) |  | [optional] 
**warrantyInformation** | **[Object]** | Warranty information related to the product. | [optional] 
**additionalInformation** | [**ProductDetailResponseAdditionalInformation**](ProductDetailResponseAdditionalInformation.md) |  | [optional] 


