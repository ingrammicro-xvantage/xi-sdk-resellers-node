# XiSdkResellers.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subordernumber** | **String** | A sub order number | [optional] 
**statuscode** | **String** | Order status code | [optional] 
**status** | **String** | Details of the order statuscode - i.e. statuscode &#x3D; 4 then status &#x3D; SHIPPED | [optional] 
**holdreasoncode** | **String** | Will be returned in case of order on hold | [optional] 
**holdreason** | **String** | Reason for order hold - will be returned if the order is on hold | [optional] 
**links** | [**[OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner]**](OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInnerLinksInner.md) | HATEOAS links for the details and invoices of the sub-orders if available | [optional] 


