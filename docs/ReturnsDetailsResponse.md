# ResellerApiDocumentation.ReturnsDetailsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**typeOfDetails** | **String** | The type of the details. Return or Claim. | [optional] 
**rmaClaimId** | **String** | The rmaClaimId claim id. | [optional] 
**caseRequestNumber** | **String** | A unique return request number. | [optional] 
**createdOn** | **Date** | The date on which the return request was created. | [optional] 
**returnReason** | **String** | The reason for the return. | [optional] 
**referenceNumber** | **String** | The reference number for the return. | [optional] 
**status** | **String** | The status of the request. | [optional] 
**returnWarehouseAddress** | **String** | The address of the return warehouse. | [optional] 
**products** | [**[ReturnsDetailsResponseProductsInner]**](ReturnsDetailsResponseProductsInner.md) |  | [optional] 
**subTotal** | **Number** | Sub total amount of the return request. | [optional] 
**tax** | **Number** | The tax amount of the return request. | [optional] 
**additionalFees** | **Number** | The additional fees for the return request. | [optional] 
**estimatedTotal** | **Number** | The total estimated amount for the return request. | [optional] 


