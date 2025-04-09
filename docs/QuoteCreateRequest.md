# XiSdkResellers.QuoteCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quoteName** | **String** | Quote Name given to quote by sales team or system generated. Generally used as a reference to identify the quote. | [optional] 
**firstname** | **String** | Logged in Users firstname | [optional] 
**lastname** | **String** | Logged in Users Lastname | [optional] 
**customerContact** | **String** | Logged in Users email address contact. | [optional] 
**quoteExpiryDate** | **String** | The date on which a quote will expire. | [optional] 
**customerNeed** | **String** | Any special need from the customer. | [optional] 
**endUserInfo** | [**QuoteCreateRequestEndUserInfo**](QuoteCreateRequestEndUserInfo.md) |  | [optional] 
**dealId** | **String** | Price discount identifyer to specify a pricing discount that has been applied to the quote. | [optional] 
**pricingType** | **String** | Pricing type of the quote. | [optional] 
**sendQuoteCopy** | **String** | List of email addressed to whom the quote will be emailed after it&#39;s created. (Max 10 email ids) | [optional] 
**products** | [**[QuoteCreateRequestProductsInner]**](QuoteCreateRequestProductsInner.md) |  | [optional] 


