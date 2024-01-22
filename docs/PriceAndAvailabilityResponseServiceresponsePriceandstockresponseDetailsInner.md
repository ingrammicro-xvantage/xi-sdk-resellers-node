# ResellerApi.PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemstatus** | **String** | SUCCESS or FAILED | [optional] 
**statusmessage** | **String** | Description of itemstatus | [optional] 
**ingrampartnumber** | **String** | Ingram Micro part number | [optional] 
**vendorpartnumber** | **String** | Manufacturer/Vendor part number | [optional] 
**globalskuid** | **String** |  | [optional] 
**customerprice** | **Number** | Customer specific price for the product, excluding taxes | [optional] 
**partdescription1** | **String** | Product description part 1 | [optional] 
**partdescription2** | **String** | Product description part 2 | [optional] 
**vendornumber** | **String** |  | [optional] 
**vendorname** | **String** | Name of the vendor | [optional] 
**cpucode** | **String** |  | [optional] 
**_class** | **String** | Ingram Micro assigned product classification -  A-Stocked product in all IM warehouses, B-Limited stock in IM warehouses, C-Stocked in fewer wareshouses, D-Ingram discontinued, E-Planned to be phased out as per the vendor, F-Carried for specific customer as per the contract, N-New SKU, O-Discontinued to be liquidated, S-Order for specialized demand, V-Discontinued by vendor, X-Direct Ship products from vendor | [optional] 
**skustatus** | **String** | Identifies if the SKU has been discontinued. | [optional] 
**mediacpu** | **String** |  | [optional] 
**categorysubcategory** | **String** |  | [optional] 
**retailprice** | **Number** |  | [optional] 
**newmedia** | **String** |  | [optional] 
**enduserrequired** | **String** | Y - End user required N - Not required End user | [optional] 
**backorderflag** | **String** | Y- Allow Backorder Flag N- Not allowed | [optional] 
**skuauthorized** | **String** |  | [optional] 
**extendedvendorpartnumber** | **String** |  | [optional] 
**warehousedetails** | [**[WarehouseListType]**](WarehouseListType.md) |  | [optional] 



## Enum: ItemstatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILED` (value: `"FAILED"`)





## Enum: ClassEnum


* `A` (value: `"A"`)

* `B` (value: `"B"`)

* `C` (value: `"C"`)

* `D` (value: `"D"`)

* `E` (value: `"E"`)

* `F` (value: `"F"`)

* `N` (value: `"N"`)

* `O` (value: `"O"`)

* `S` (value: `"S"`)

* `V` (value: `"V"`)

* `X` (value: `"X"`)





## Enum: SkustatusEnum


* `ACTIVE` (value: `"ACTIVE"`)





## Enum: EnduserrequiredEnum


* `Y` (value: `"Y"`)

* `N` (value: `"N"`)





## Enum: BackorderflagEnum


* `Y` (value: `"Y"`)

* `N` (value: `"N"`)




