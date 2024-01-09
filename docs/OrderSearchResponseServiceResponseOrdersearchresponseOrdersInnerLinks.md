# ResellerApiDocumentationUnitedStates.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerLinks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **String** | Topic being orders in this case, if it is orders then the link will provide details of the order. | [optional] 
**href** | **String** | The API endpoint for accessing the relevant data | [optional] 
**type** | **String** | The type of call that can be made to the href link | [optional] 



## Enum: TopicEnum


* `orders` (value: `"orders"`)

* `invoices` (value: `"invoices"`)





## Enum: TypeEnum


* `GET` (value: `"GET"`)

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)




