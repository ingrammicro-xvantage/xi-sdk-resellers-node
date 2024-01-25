# ResellerApi.OrderCreateRequestShipmentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierCode** | **String** | The code for the shipping carrier for the line item. | [optional] 
**freightAccountNumber** | **String** | The reseller &#39;s shipping account number with carrier. Used to bill the shipping carrier directly from the reseller&#39;s account with the carrier. | [optional] 
**shipComplete** | **String** | Specifies whether the shipment will be shipped only when all products are fulfilled. The value of this field along with acceptBackOrder field decides the value of backorderflag. If this field is set, acceptBackOrder field is ignored. Possible values for this field are true, C, P, E.    With value as true or C, backorderflag will be set as C.    With value as P, or E, backorderflag will be set as P or E respectively.    C &#x3D; Ship complete at distribution level.    P &#x3D; ship complete at line level.    E &#x3D; ship complete across all distributions.  | [optional] 
**requestedDeliveryDate** | **Date** | The reseller-requested delivery date in UTC format. Delivery date is not guaranteed. | [optional] 
**signatureRequired** | **Boolean** | Specifies whether a signature is required for delivery. Default is False. | [optional] 
**shippingInstructions** | **String** |  | [optional] 


