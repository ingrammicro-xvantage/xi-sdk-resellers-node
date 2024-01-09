# ResellerApiDocumentationUnitedStates.PriceAndAvailabilityResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productStatusCode** | **String** | Codes signifying whether the sku is active or not. | [optional] 
**productStatusMessage** | **String** | Message returned saying whether sku is active. | [optional] 
**ingramPartNumber** | **String** | Ingram Micro unique part number for the product. | [optional] 
**vendorPartNumber** | **String** | Vendor’s part number for the product. | [optional] 
**extendedVendorPartNumber** | **String** | Extended Vendor Part Number. *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara). | [optional] 
**customerPartNumber** | **String** | Reseller / end-user’s part number for the product. | [optional] 
**upc** | **String** | The UPC code for the product. Consists of 12 numeric digits that are uniquely assigned to each trade item. | [optional] 
**partNumberType** | **String** | Number type of the part. | [optional] 
**vendorNumber** | **String** | Vendor number that identifies the product. | [optional] 
**vendorName** | **String** | Vendor name for the order. | [optional] 
**description** | **String** | The description given for the product. | [optional] 
**productClass** | **String** | Indicates whether the product is directly shipped from the vendor’s warehouse or if the product ships from Ingram Micro’s warehouse. Class Codes are Ingram classifications on how skus are stocked A &#x3D; Product that is stocked usually in all IM warehouses and replenished on a regular basis. B &#x3D; Product that is stocked in limited IM warehouses and replenished on a regular basis C &#x3D; Product that is stocked in fewer IM warehouses and replenished on a regular basis. D &#x3D; Product that Ingram Micro has elected to discontinue. E &#x3D; Product that will be phased out later, according to the vendor. You may not want to replenish this product, but instead sell down what is in stock. F &#x3D; Product that we carry for a specific customer or supplier under a contractual agreement. N &#x3D; New Sku. Classification before first receipt O &#x3D; Discontinued product to be liquidated S&#x3D; Order for Specialized Demand (Order to backorder) X&#x3D; direct ship from Vendor V &#x3D; product that vendor has elected to discontinue. | [optional] 
**uom** | **String** | The description given for the product. | [optional] 
**productStatus** | **String** | Status that gives whether the product is Active. | [optional] 
**acceptBackOrder** | **Boolean** | Boolean that indicates if the product accepts backorder. | [optional] 
**productAuthorized** | **Boolean** | Boolean that indicates whether a product is authorized. | [optional] 
**returnableProduct** | **Boolean** | Boolean that indicates if the product can be returned. | [optional] 
**endUserInfoRequired** | **Boolean** | Boolean that indicates  if end user information is required. | [optional] 
**govtSpecialPriceAvailable** | **Boolean** | Boolean that indicates if special pricing is available for the product. | [optional] 
**govtProgramType** | **String** | Program type, “PA” for government orders, “ED” for education order. | [optional] 
**govtEndUserType** | **String** | Type of end user of the program. F &#x3D; Federal, S &#x3D; State, E &#x3D; Local, K &#x3D; K-12 school, and H &#x3D; Higher Education. | [optional] 
**availability** | [**PriceAndAvailabilityResponseInnerAvailability**](PriceAndAvailabilityResponseInnerAvailability.md) |  | [optional] 
**reserveInventoryDetails** | [**[PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner]**](PriceAndAvailabilityResponseInnerReserveInventoryDetailsInner.md) |  | [optional] 
**pricing** | [**PriceAndAvailabilityResponseInnerPricing**](PriceAndAvailabilityResponseInnerPricing.md) |  | [optional] 
**discounts** | [**[PriceAndAvailabilityResponseInnerDiscountsInner]**](PriceAndAvailabilityResponseInnerDiscountsInner.md) |  | [optional] 
**bundlePartIndicator** | **Boolean** | True of false value to indicate whether it’s bundle part. *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara). | [optional] 
**serviceFees** | [**[PriceAndAvailabilityResponseInnerServiceFeesInner]**](PriceAndAvailabilityResponseInnerServiceFeesInner.md) | *Currently, this feature is not available in these countries (Mexico, Turkey, New Zealand, Colombia, Chile, Brazil, Peru, Western Sahara). | [optional] 


