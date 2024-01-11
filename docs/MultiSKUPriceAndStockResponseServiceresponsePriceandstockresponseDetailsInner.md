# ResellerApiDocumentation.MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemstatus** | **String** |  | [optional] 
**statusmessage** | **String** |  | [optional] 
**ingrampartnumber** | **String** | SKU number for the product for which order needs to be created with Ingram Micro | [optional] 
**vendorpartnumber** | **String** | Vendor Part number for the product | [optional] 
**globalskuid** | **String** |  | [optional] 
**customerprice** | **String** | Customer specific price for the product, excluding taxes | [optional] 
**partdescription1** | **String** | Description on the part number that is being requested | [optional] 
**partdescription2** | **String** | Contuiation of description on the part number that is being requested | [optional] 
**vendornumber** | **String** | Internal four digit code assigned by Ingram | [optional] 
**vendorname** | **String** | Name of the vendor | [optional] 
**cpucode** | **String** | Ingram internal code for a product | [optional] 
**_class** | **String** | Ingram Micro assigned product classification. | [optional] 
**skustatus** | **String** | Identifies if the SKU has been discontinued. Rules must be defined on the values to be sent out to partner. | [optional] 
**mediacpu** | **String** |  | [optional] 
**categorysubcategory** | **String** | Ingram&#39;s internal categorization of the product | [optional] 
**retailprice** | **Number** | MSRP Price 0.00 | 
**newmedia** | **String** | Internal four-digit code assigned by Ingram to represent the item group | [optional] 
**enduserrequired** | **String** | Y - End user required N - Not required End user | [optional] 
**backorderflag** | **String** | Y- Allow Backorder Flag N- Not allowed | [optional] 
**skuauthorized** | **String** |  | [optional] 
**extendedvendorpartnumber** | **String** |  | [optional] 
**warehousedetails** | [**[MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner]**](MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.md) |  | [optional] 



## Enum: ClassEnum


* `A-Stocked product in all IM warehouses` (value: `"A-Stocked product in all IM warehouses"`)

* `B-Limited stock in IM warehouses` (value: `"B-Limited stock in IM warehouses"`)

* `C-Stocked in fewer wareshouses` (value: `"C-Stocked in fewer wareshouses"`)

* `D-Ingram discontinued` (value: `"D-Ingram discontinued"`)

* `E-Planned to be phased out as per the vendor` (value: `"E-Planned to be phased out as per the vendor"`)

* `F-Carried for specific customer as per the contract` (value: `"F-Carried for specific customer as per the contract"`)

* `N-New SKU` (value: `"N-New SKU"`)

* `O-Discontinued to be liquidated` (value: `"O-Discontinued to be liquidated"`)

* `S-Order for specialized demand` (value: `"S-Order for specialized demand"`)

* `V-Discontinued by vendor` (value: `"V-Discontinued by vendor"`)

* `X-Direct Ship products from vendor` (value: `"X-Direct Ship products from vendor"`)





## Enum: EnduserrequiredEnum


* `Y-End user data required` (value: `"Y-End user data required"`)

* `N-End user data not required` (value: `"N-End user data not required"`)





## Enum: BackorderflagEnum


* `Y- Can be backordered` (value: `"Y- Can be backordered"`)

* `N-Cannot be backordered` (value: `"N-Cannot be backordered"`)




