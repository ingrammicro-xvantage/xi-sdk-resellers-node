# ResellerApiDocumentationUnitedStates.OrderDetailResponseServiceresponseOrderdetailresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ordernumber** | **String** |  | [optional] 
**ordertype** | **String** | Order Type   B - BRANCH TRANSFER C - CASH ORDER D - DIRECT ORDER F - FUTURE ORDER P - SPECIAL ORDER Q - QUOTE ORDER S - STOCK ORDER M - MEMO ORDER | [optional] 
**customerordernumber** | **String** | Customer PO number | [optional] 
**enduserponumber** | **String** | End User PO number | [optional] 
**orderstatus** | **String** | Status of order within Ingram system S - SALES HOLD H - TAG HOLD I - INVOICED P - PENDING E - BILLING ERROR F - FORCE BILLING V - VOIDED T - TRANSFERRED D - HOLD SHIPMENT R - RELEASED O - IM ONLINE HOLD U - BILL FOR HISTORY ONLY W - ORDER NOT PRINTED A - DROP SHIP HOLD B - INTERNET CUST ORIG HOLD 1 - PICKED 2 - INSPECTED 3 - PACKED 4 - SHIPPED C - CREDIT HOLD 9 - CISCO 3A6 Q - RMA HOLD G - CREDIT HOLD N - CREDIT HOLD | [optional] 
**entrytimestamp** | **String** | Time stamp of the order placed | [optional] 
**entrymethoddescription** | **String** | Description of the entry method  | [optional] 
**ordertotalvalue** | **Number** | Total order value | [optional] 
**ordersubtotal** | **Number** | Subtotal order value | [optional] 
**freightamount** | **String** | Freight charges | [optional] 
**currencycode** | **String** | Country specific currency code | [optional] 
**totalweight** | **String** | Total order weight. unit -- North america - Pounds , other countries will be KG | [optional] 
**totaltax** | **String** | total tax on the orders placed | [optional] 
**billtoaddress** | [**OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress**](OrderDetailResponseServiceresponseOrderdetailresponseBilltoaddress.md) |  | [optional] 
**shiptoaddress** | [**OrderDetailResponseServiceresponseOrderdetailresponseShiptoaddress**](OrderDetailResponseServiceresponseOrderdetailresponseShiptoaddress.md) |  | [optional] 
**enduserinfo** | [**OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo**](OrderDetailResponseServiceresponseOrderdetailresponseEnduserinfo.md) |  | [optional] 
**lines** | [**[OrderDetailResponseServiceresponseOrderdetailresponseLinesInner]**](OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.md) |  | [optional] 
**commentlines** | [**[OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner]**](OrderDetailResponseServiceresponseOrderdetailresponseCommentlinesInner.md) |  | [optional] 
**miscfeeline** | [**[OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner]**](OrderDetailResponseServiceresponseOrderdetailresponseMiscfeelineInner.md) |  | [optional] 
**extendedspecs** | [**[OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner]**](OrderDetailResponseServiceresponseOrderdetailresponseExtendedspecsInner.md) |  | [optional] 


