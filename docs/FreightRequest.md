# ResellerApi.FreightRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit. | [optional] 
**shipToAddressId** | **String** | The ID references the reseller&#39;s address in Ingram Micro&#39;s system for shipping. Provided to resellers during the onboarding process. | [optional] 
**shipToAddress** | [**[FreightRequestShipToAddressInner]**](FreightRequestShipToAddressInner.md) | The shipping information. | [optional] 
**lines** | [**[FreightRequestLinesInner]**](FreightRequestLinesInner.md) |  | [optional] 


