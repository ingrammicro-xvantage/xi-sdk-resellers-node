# XiSdkResellers.OrderCreateV7Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **String** | Field for identifying whether it is a reseller or vendor event. For eg, resellers/orders | [optional] 
**event** | **String** | The event sent in the request. For eg, im::create. | [optional] 
**eventTimeStamp** | **String** | The timestamp at which the event was sent. | [optional] 
**eventId** | **String** | A unique id used as identifier for the sepcific event and used for generating the x-hub signature. | [optional] 
**eventType** | **String** | The event name sent in the event request. | [optional] 
**resource** | [**OrderCreateV7ResponseResource**](OrderCreateV7ResponseResource.md) |  | [optional] 


