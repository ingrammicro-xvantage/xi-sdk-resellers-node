# ResellerApiDocumentationUnitedStates.QuoteToOrderDetailsDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteNumber** | **String** | A unique identifier generated by Ingram Micro&#39;s CRM specific to each quote. | [optional] 
**customerOrderNumber** | **String** | The reseller&#39;s order number for reference in their system. | [optional] 
**enduserOrderNumber** | **String** | The end customer&#39;s order number for reference in their system. | [optional] 
**billToAddressId** | **String** | Suffix used to identify billing address. Created during onboarding. Resellers are provided with one or more address IDs depending on how many bill to addresses they need for various flooring companies they are using for credit. | [optional] 
**endUserInfo** | [**[QuoteToOrderDetailsDTOEndUserInfoInner]**](QuoteToOrderDetailsDTOEndUserInfoInner.md) | The contact information for the end user/customer provided by the reseller. Used to determine pricing and discounts. | [optional] 
**shipToInfo** | [**[QuoteToOrderDetailsDTOShipToInfoInner]**](QuoteToOrderDetailsDTOShipToInfoInner.md) | The shipping information provided by the reseller for order delivery. | [optional] 
**additionalAttributes** | [**[QuoteToOrderDetailsDTOAdditionalAttributesInner]**](QuoteToOrderDetailsDTOAdditionalAttributesInner.md) | Additional order create attributes. | [optional] 
**vmfadditionalAttributes** | [**[QuoteToOrderDetailsDTOVmfadditionalAttributesInner]**](QuoteToOrderDetailsDTOVmfadditionalAttributesInner.md) | The object containing the list of fields required at a header level by the vendor. | [optional] 
**lines** | [**[QuoteToOrderDetailsDTOLinesInner]**](QuoteToOrderDetailsDTOLinesInner.md) | The object containing the lines that require vendor mandatory fields. | [optional] 

