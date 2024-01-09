# ResellerApiDocumentationUnitedStates.OrderCreateRequestOrdercreaterequestOrdercreatedetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerponumber** | **String** | The customers unique Purchase Order number. Keep it unique to retrieve order information | 
**ordertype** | **String** | Order Type - Standard orders, Direct ship orders | 
**enduserordernumber** | **String** | Customers End-user PO number | [optional] 
**billtosuffix** | **String** | Designates flooring acct to be used | [optional] 
**shiptosuffix** | **String** | Applies to customers with multiple ship to locations (store locations) | [optional] 
**shiptoaddress** | [**OrderCreateRequestOrdercreaterequestOrdercreatedetailsShiptoaddress**](OrderCreateRequestOrdercreaterequestOrdercreatedetailsShiptoaddress.md) |  | 
**carriercode** | **String** | A customer can dictate what carrier to use for their shipment (Ingram 2-digit carrier code is required). Our recommendation is leave this field blank which will allow Ingram Micro to choose the best carrier to gain the best freight rates. | [optional] 
**thirdpartyfreightaccountnumber** | **String** | Refers to a third-party freight account number for charging freight against. The account number should be passed within this field and the appropriate carrier code should be supplied within the carrier code tags. Prior to sending your request containing the third-party account number, it must be first entered into our system. Your Ingram Micro Sales Representative can action this for you. If submitted within an order without this preapproval the third-party account number will be ignored.  Note: USA partners- For FedEx Air only (carrier codes F1, FO, F2, FG.), please send three leading zeros before your third-party freight account number (i.e.: 000999999999.)  | [optional] 
**specialbidnumber** | **String** | This is the special quote number given to a customer either by a vendor for special pricing or by Ingram Micro. To receive the special pricing assigned to this number it must be included on the order. | [optional] 
**lines** | [**[OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInner]**](OrderCreateRequestOrdercreaterequestOrdercreatedetailsLinesInner.md) |  | 
**extendedspecs** | [**[OrderCreateRequestOrdercreaterequestOrdercreatedetailsExtendedspecsInner]**](OrderCreateRequestOrdercreaterequestOrdercreatedetailsExtendedspecsInner.md) |  | [optional] 



## Enum: OrdertypeEnum


* `Standard` (value: `"Standard"`)

* `Direct Ship` (value: `"Direct Ship"`)




