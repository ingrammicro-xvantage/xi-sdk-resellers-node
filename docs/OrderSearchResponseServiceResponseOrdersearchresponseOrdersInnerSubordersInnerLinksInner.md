# ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **String** | topic being orders or invoices, if it is orders then the link will provide details of the order. If its invoices then the link provides details of the invoice | [optional] 
**href** | **String** | The API endpoint for accessing the relevant data | [optional] 
**type** | **String** | The type of call that can be made to the href link | [optional] 



## Enum: TopicEnum


* `orders` (value: `"orders"`)

* `invoices` (value: `"invoices"`)





## Enum: TypeEnum


* `GET` (value: `"GET"`)

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)




