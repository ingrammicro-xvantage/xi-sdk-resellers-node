/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WarehouseListType from './WarehouseListType';

/**
 * The PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner model module.
 * @module model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner
 * @version 1.0.0
 */
class PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner {
    /**
     * Constructs a new <code>PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     * @alias module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner
     */
    constructor() { 
        
        PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner} obj Optional instance to populate.
     * @return {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner} The populated <code>PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner();

            if (data.hasOwnProperty('itemstatus')) {
                obj['itemstatus'] = ApiClient.convertToType(data['itemstatus'], 'String');
            }
            if (data.hasOwnProperty('statusmessage')) {
                obj['statusmessage'] = ApiClient.convertToType(data['statusmessage'], 'String');
            }
            if (data.hasOwnProperty('ingrampartnumber')) {
                obj['ingrampartnumber'] = ApiClient.convertToType(data['ingrampartnumber'], 'String');
            }
            if (data.hasOwnProperty('vendorpartnumber')) {
                obj['vendorpartnumber'] = ApiClient.convertToType(data['vendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('globalskuid')) {
                obj['globalskuid'] = ApiClient.convertToType(data['globalskuid'], 'String');
            }
            if (data.hasOwnProperty('customerprice')) {
                obj['customerprice'] = ApiClient.convertToType(data['customerprice'], 'Number');
            }
            if (data.hasOwnProperty('partdescription1')) {
                obj['partdescription1'] = ApiClient.convertToType(data['partdescription1'], 'String');
            }
            if (data.hasOwnProperty('partdescription2')) {
                obj['partdescription2'] = ApiClient.convertToType(data['partdescription2'], 'String');
            }
            if (data.hasOwnProperty('vendornumber')) {
                obj['vendornumber'] = ApiClient.convertToType(data['vendornumber'], 'String');
            }
            if (data.hasOwnProperty('vendorname')) {
                obj['vendorname'] = ApiClient.convertToType(data['vendorname'], 'String');
            }
            if (data.hasOwnProperty('cpucode')) {
                obj['cpucode'] = ApiClient.convertToType(data['cpucode'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('skustatus')) {
                obj['skustatus'] = ApiClient.convertToType(data['skustatus'], 'String');
            }
            if (data.hasOwnProperty('mediacpu')) {
                obj['mediacpu'] = ApiClient.convertToType(data['mediacpu'], 'String');
            }
            if (data.hasOwnProperty('categorysubcategory')) {
                obj['categorysubcategory'] = ApiClient.convertToType(data['categorysubcategory'], 'String');
            }
            if (data.hasOwnProperty('retailprice')) {
                obj['retailprice'] = ApiClient.convertToType(data['retailprice'], 'Number');
            }
            if (data.hasOwnProperty('newmedia')) {
                obj['newmedia'] = ApiClient.convertToType(data['newmedia'], 'String');
            }
            if (data.hasOwnProperty('enduserrequired')) {
                obj['enduserrequired'] = ApiClient.convertToType(data['enduserrequired'], 'String');
            }
            if (data.hasOwnProperty('backorderflag')) {
                obj['backorderflag'] = ApiClient.convertToType(data['backorderflag'], 'String');
            }
            if (data.hasOwnProperty('skuauthorized')) {
                obj['skuauthorized'] = ApiClient.convertToType(data['skuauthorized'], 'String');
            }
            if (data.hasOwnProperty('extendedvendorpartnumber')) {
                obj['extendedvendorpartnumber'] = ApiClient.convertToType(data['extendedvendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('warehousedetails')) {
                obj['warehousedetails'] = ApiClient.convertToType(data['warehousedetails'], [WarehouseListType]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['itemstatus'] && !(typeof data['itemstatus'] === 'string' || data['itemstatus'] instanceof String)) {
            throw new Error("Expected the field `itemstatus` to be a primitive type in the JSON string but got " + data['itemstatus']);
        }
        // ensure the json data is a string
        if (data['statusmessage'] && !(typeof data['statusmessage'] === 'string' || data['statusmessage'] instanceof String)) {
            throw new Error("Expected the field `statusmessage` to be a primitive type in the JSON string but got " + data['statusmessage']);
        }
        // ensure the json data is a string
        if (data['ingrampartnumber'] && !(typeof data['ingrampartnumber'] === 'string' || data['ingrampartnumber'] instanceof String)) {
            throw new Error("Expected the field `ingrampartnumber` to be a primitive type in the JSON string but got " + data['ingrampartnumber']);
        }
        // ensure the json data is a string
        if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
        }
        // ensure the json data is a string
        if (data['globalskuid'] && !(typeof data['globalskuid'] === 'string' || data['globalskuid'] instanceof String)) {
            throw new Error("Expected the field `globalskuid` to be a primitive type in the JSON string but got " + data['globalskuid']);
        }
        // ensure the json data is a string
        if (data['partdescription1'] && !(typeof data['partdescription1'] === 'string' || data['partdescription1'] instanceof String)) {
            throw new Error("Expected the field `partdescription1` to be a primitive type in the JSON string but got " + data['partdescription1']);
        }
        // ensure the json data is a string
        if (data['partdescription2'] && !(typeof data['partdescription2'] === 'string' || data['partdescription2'] instanceof String)) {
            throw new Error("Expected the field `partdescription2` to be a primitive type in the JSON string but got " + data['partdescription2']);
        }
        // ensure the json data is a string
        if (data['vendornumber'] && !(typeof data['vendornumber'] === 'string' || data['vendornumber'] instanceof String)) {
            throw new Error("Expected the field `vendornumber` to be a primitive type in the JSON string but got " + data['vendornumber']);
        }
        // ensure the json data is a string
        if (data['vendorname'] && !(typeof data['vendorname'] === 'string' || data['vendorname'] instanceof String)) {
            throw new Error("Expected the field `vendorname` to be a primitive type in the JSON string but got " + data['vendorname']);
        }
        // ensure the json data is a string
        if (data['cpucode'] && !(typeof data['cpucode'] === 'string' || data['cpucode'] instanceof String)) {
            throw new Error("Expected the field `cpucode` to be a primitive type in the JSON string but got " + data['cpucode']);
        }
        // ensure the json data is a string
        if (data['class'] && !(typeof data['class'] === 'string' || data['class'] instanceof String)) {
            throw new Error("Expected the field `class` to be a primitive type in the JSON string but got " + data['class']);
        }
        // ensure the json data is a string
        if (data['skustatus'] && !(typeof data['skustatus'] === 'string' || data['skustatus'] instanceof String)) {
            throw new Error("Expected the field `skustatus` to be a primitive type in the JSON string but got " + data['skustatus']);
        }
        // ensure the json data is a string
        if (data['mediacpu'] && !(typeof data['mediacpu'] === 'string' || data['mediacpu'] instanceof String)) {
            throw new Error("Expected the field `mediacpu` to be a primitive type in the JSON string but got " + data['mediacpu']);
        }
        // ensure the json data is a string
        if (data['categorysubcategory'] && !(typeof data['categorysubcategory'] === 'string' || data['categorysubcategory'] instanceof String)) {
            throw new Error("Expected the field `categorysubcategory` to be a primitive type in the JSON string but got " + data['categorysubcategory']);
        }
        // ensure the json data is a string
        if (data['newmedia'] && !(typeof data['newmedia'] === 'string' || data['newmedia'] instanceof String)) {
            throw new Error("Expected the field `newmedia` to be a primitive type in the JSON string but got " + data['newmedia']);
        }
        // ensure the json data is a string
        if (data['enduserrequired'] && !(typeof data['enduserrequired'] === 'string' || data['enduserrequired'] instanceof String)) {
            throw new Error("Expected the field `enduserrequired` to be a primitive type in the JSON string but got " + data['enduserrequired']);
        }
        // ensure the json data is a string
        if (data['backorderflag'] && !(typeof data['backorderflag'] === 'string' || data['backorderflag'] instanceof String)) {
            throw new Error("Expected the field `backorderflag` to be a primitive type in the JSON string but got " + data['backorderflag']);
        }
        // ensure the json data is a string
        if (data['skuauthorized'] && !(typeof data['skuauthorized'] === 'string' || data['skuauthorized'] instanceof String)) {
            throw new Error("Expected the field `skuauthorized` to be a primitive type in the JSON string but got " + data['skuauthorized']);
        }
        // ensure the json data is a string
        if (data['extendedvendorpartnumber'] && !(typeof data['extendedvendorpartnumber'] === 'string' || data['extendedvendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `extendedvendorpartnumber` to be a primitive type in the JSON string but got " + data['extendedvendorpartnumber']);
        }
        if (data['warehousedetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['warehousedetails'])) {
                throw new Error("Expected the field `warehousedetails` to be an array in the JSON data but got " + data['warehousedetails']);
            }
            // validate the optional field `warehousedetails` (array)
            for (const item of data['warehousedetails']) {
                WarehouseListType.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * SUCCESS or FAILED
 * @member {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.ItemstatusEnum} itemstatus
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['itemstatus'] = undefined;

/**
 * Description of itemstatus
 * @member {String} statusmessage
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['statusmessage'] = undefined;

/**
 * Ingram Micro part number
 * @member {String} ingrampartnumber
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['ingrampartnumber'] = undefined;

/**
 * Manufacturer/Vendor part number
 * @member {String} vendorpartnumber
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendorpartnumber'] = undefined;

/**
 * @member {String} globalskuid
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['globalskuid'] = undefined;

/**
 * Customer specific price for the product, excluding taxes
 * @member {Number} customerprice
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['customerprice'] = undefined;

/**
 * Product description part 1
 * @member {String} partdescription1
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['partdescription1'] = undefined;

/**
 * Product description part 2
 * @member {String} partdescription2
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['partdescription2'] = undefined;

/**
 * @member {String} vendornumber
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendornumber'] = undefined;

/**
 * Name of the vendor
 * @member {String} vendorname
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendorname'] = undefined;

/**
 * @member {String} cpucode
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['cpucode'] = undefined;

/**
 * Ingram Micro assigned product classification -  A-Stocked product in all IM warehouses, B-Limited stock in IM warehouses, C-Stocked in fewer wareshouses, D-Ingram discontinued, E-Planned to be phased out as per the vendor, F-Carried for specific customer as per the contract, N-New SKU, O-Discontinued to be liquidated, S-Order for specialized demand, V-Discontinued by vendor, X-Direct Ship products from vendor
 * @member {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.ClassEnum} class
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['class'] = undefined;

/**
 * Identifies if the SKU has been discontinued.
 * @member {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.SkustatusEnum} skustatus
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['skustatus'] = undefined;

/**
 * @member {String} mediacpu
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['mediacpu'] = undefined;

/**
 * @member {String} categorysubcategory
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['categorysubcategory'] = undefined;

/**
 * @member {Number} retailprice
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['retailprice'] = undefined;

/**
 * @member {String} newmedia
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['newmedia'] = undefined;

/**
 * Y - End user required N - Not required End user
 * @member {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.EnduserrequiredEnum} enduserrequired
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['enduserrequired'] = undefined;

/**
 * Y- Allow Backorder Flag N- Not allowed
 * @member {module:model/PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.BackorderflagEnum} backorderflag
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['backorderflag'] = undefined;

/**
 * @member {String} skuauthorized
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['skuauthorized'] = undefined;

/**
 * @member {String} extendedvendorpartnumber
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['extendedvendorpartnumber'] = undefined;

/**
 * @member {Array.<module:model/WarehouseListType>} warehousedetails
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner.prototype['warehousedetails'] = undefined;





/**
 * Allowed values for the <code>itemstatus</code> property.
 * @enum {String}
 * @readonly
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner['ItemstatusEnum'] = {

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};


/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner['ClassEnum'] = {

    /**
     * value: "A"
     * @const
     */
    "A": "A",

    /**
     * value: "B"
     * @const
     */
    "B": "B",

    /**
     * value: "C"
     * @const
     */
    "C": "C",

    /**
     * value: "D"
     * @const
     */
    "D": "D",

    /**
     * value: "E"
     * @const
     */
    "E": "E",

    /**
     * value: "F"
     * @const
     */
    "F": "F",

    /**
     * value: "N"
     * @const
     */
    "N": "N",

    /**
     * value: "O"
     * @const
     */
    "O": "O",

    /**
     * value: "S"
     * @const
     */
    "S": "S",

    /**
     * value: "V"
     * @const
     */
    "V": "V",

    /**
     * value: "X"
     * @const
     */
    "X": "X"
};


/**
 * Allowed values for the <code>skustatus</code> property.
 * @enum {String}
 * @readonly
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner['SkustatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE"
};


/**
 * Allowed values for the <code>enduserrequired</code> property.
 * @enum {String}
 * @readonly
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner['EnduserrequiredEnum'] = {

    /**
     * value: "Y"
     * @const
     */
    "Y": "Y",

    /**
     * value: "N"
     * @const
     */
    "N": "N"
};


/**
 * Allowed values for the <code>backorderflag</code> property.
 * @enum {String}
 * @readonly
 */
PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner['BackorderflagEnum'] = {

    /**
     * value: "Y"
     * @const
     */
    "Y": "Y",

    /**
     * value: "N"
     * @const
     */
    "N": "N"
};



export default PriceAndAvailabilityResponseServiceresponsePriceandstockresponseDetailsInner;

