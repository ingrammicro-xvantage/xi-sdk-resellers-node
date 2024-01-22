# ResellerApi.AvailabilityAsyncNotificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **String** | Field for identifying whether it is a reseller or vendor event. For eg, resellers/orders | [optional] 
**event** | **String** | The event sent in the request. For eg, im::create. | [optional] 
**eventTimeStamp** | **String** | The timestamp at which the event was sent. | [optional] 
**eventId** | **String** | A unique id used as identifier for the sepcific event and used for generating the x-hub signature. | [optional] 
**resource** | [**[AvailabilityAsyncNotificationRequestResourceInner]**](AvailabilityAsyncNotificationRequestResourceInner.md) |  | [optional] 


