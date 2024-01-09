/**
 * Reseller API Documentation - United States
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner from './InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner';
import OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerSerialnumberdetailsInner from './OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerSerialnumberdetailsInner';
import OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner from './OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner';

/**
 * The OrderDetailResponseServiceresponseOrderdetailresponseLinesInner model module.
 * @module model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInner
 * @version 6.0
 */
class OrderDetailResponseServiceresponseOrderdetailresponseLinesInner {
    /**
     * Constructs a new <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInner</code>.
     * @alias module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInner
     */
    constructor() { 
        
        OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInner} obj Optional instance to populate.
     * @return {module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInner} The populated <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailResponseServiceresponseOrderdetailresponseLinesInner();

            if (data.hasOwnProperty('linenumber')) {
                obj['linenumber'] = ApiClient.convertToType(data['linenumber'], 'String');
            }
            if (data.hasOwnProperty('globallinenumber')) {
                obj['globallinenumber'] = ApiClient.convertToType(data['globallinenumber'], 'String');
            }
            if (data.hasOwnProperty('ordersuffix')) {
                obj['ordersuffix'] = ApiClient.convertToType(data['ordersuffix'], 'String');
            }
            if (data.hasOwnProperty('erpordernumber')) {
                obj['erpordernumber'] = ApiClient.convertToType(data['erpordernumber'], 'String');
            }
            if (data.hasOwnProperty('linestatus')) {
                obj['linestatus'] = ApiClient.convertToType(data['linestatus'], 'String');
            }
            if (data.hasOwnProperty('partnumber')) {
                obj['partnumber'] = ApiClient.convertToType(data['partnumber'], 'String');
            }
            if (data.hasOwnProperty('manufacturerpartnumber')) {
                obj['manufacturerpartnumber'] = ApiClient.convertToType(data['manufacturerpartnumber'], 'String');
            }
            if (data.hasOwnProperty('vendorname')) {
                obj['vendorname'] = ApiClient.convertToType(data['vendorname'], 'String');
            }
            if (data.hasOwnProperty('vendorcode')) {
                obj['vendorcode'] = ApiClient.convertToType(data['vendorcode'], 'String');
            }
            if (data.hasOwnProperty('partdescription1')) {
                obj['partdescription1'] = ApiClient.convertToType(data['partdescription1'], 'String');
            }
            if (data.hasOwnProperty('partdescription2')) {
                obj['partdescription2'] = ApiClient.convertToType(data['partdescription2'], 'String');
            }
            if (data.hasOwnProperty('unitweight')) {
                obj['unitweight'] = ApiClient.convertToType(data['unitweight'], 'String');
            }
            if (data.hasOwnProperty('unitprice')) {
                obj['unitprice'] = ApiClient.convertToType(data['unitprice'], 'Number');
            }
            if (data.hasOwnProperty('extendedprice')) {
                obj['extendedprice'] = ApiClient.convertToType(data['extendedprice'], 'Number');
            }
            if (data.hasOwnProperty('taxamount')) {
                obj['taxamount'] = ApiClient.convertToType(data['taxamount'], 'Number');
            }
            if (data.hasOwnProperty('requestedquantity')) {
                obj['requestedquantity'] = ApiClient.convertToType(data['requestedquantity'], 'String');
            }
            if (data.hasOwnProperty('confirmedquantity')) {
                obj['confirmedquantity'] = ApiClient.convertToType(data['confirmedquantity'], 'String');
            }
            if (data.hasOwnProperty('backorderquantity')) {
                obj['backorderquantity'] = ApiClient.convertToType(data['backorderquantity'], 'String');
            }
            if (data.hasOwnProperty('serialnumberdetails')) {
                obj['serialnumberdetails'] = ApiClient.convertToType(data['serialnumberdetails'], [OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerSerialnumberdetailsInner]);
            }
            if (data.hasOwnProperty('trackingnumber')) {
                obj['trackingnumber'] = ApiClient.convertToType(data['trackingnumber'], ['String']);
            }
            if (data.hasOwnProperty('shipmentdetails')) {
                obj['shipmentdetails'] = ApiClient.convertToType(data['shipmentdetails'], [OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner]);
            }
            if (data.hasOwnProperty('productextendedspecs')) {
                obj['productextendedspecs'] = ApiClient.convertToType(data['productextendedspecs'], [InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner]);
            }
            if (data.hasOwnProperty('backorderetadate')) {
                obj['backorderetadate'] = ApiClient.convertToType(data['backorderetadate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailResponseServiceresponseOrderdetailresponseLinesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linenumber'] && !(typeof data['linenumber'] === 'string' || data['linenumber'] instanceof String)) {
            throw new Error("Expected the field `linenumber` to be a primitive type in the JSON string but got " + data['linenumber']);
        }
        // ensure the json data is a string
        if (data['globallinenumber'] && !(typeof data['globallinenumber'] === 'string' || data['globallinenumber'] instanceof String)) {
            throw new Error("Expected the field `globallinenumber` to be a primitive type in the JSON string but got " + data['globallinenumber']);
        }
        // ensure the json data is a string
        if (data['ordersuffix'] && !(typeof data['ordersuffix'] === 'string' || data['ordersuffix'] instanceof String)) {
            throw new Error("Expected the field `ordersuffix` to be a primitive type in the JSON string but got " + data['ordersuffix']);
        }
        // ensure the json data is a string
        if (data['erpordernumber'] && !(typeof data['erpordernumber'] === 'string' || data['erpordernumber'] instanceof String)) {
            throw new Error("Expected the field `erpordernumber` to be a primitive type in the JSON string but got " + data['erpordernumber']);
        }
        // ensure the json data is a string
        if (data['linestatus'] && !(typeof data['linestatus'] === 'string' || data['linestatus'] instanceof String)) {
            throw new Error("Expected the field `linestatus` to be a primitive type in the JSON string but got " + data['linestatus']);
        }
        // ensure the json data is a string
        if (data['partnumber'] && !(typeof data['partnumber'] === 'string' || data['partnumber'] instanceof String)) {
            throw new Error("Expected the field `partnumber` to be a primitive type in the JSON string but got " + data['partnumber']);
        }
        // ensure the json data is a string
        if (data['manufacturerpartnumber'] && !(typeof data['manufacturerpartnumber'] === 'string' || data['manufacturerpartnumber'] instanceof String)) {
            throw new Error("Expected the field `manufacturerpartnumber` to be a primitive type in the JSON string but got " + data['manufacturerpartnumber']);
        }
        // ensure the json data is a string
        if (data['vendorname'] && !(typeof data['vendorname'] === 'string' || data['vendorname'] instanceof String)) {
            throw new Error("Expected the field `vendorname` to be a primitive type in the JSON string but got " + data['vendorname']);
        }
        // ensure the json data is a string
        if (data['vendorcode'] && !(typeof data['vendorcode'] === 'string' || data['vendorcode'] instanceof String)) {
            throw new Error("Expected the field `vendorcode` to be a primitive type in the JSON string but got " + data['vendorcode']);
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
        if (data['unitweight'] && !(typeof data['unitweight'] === 'string' || data['unitweight'] instanceof String)) {
            throw new Error("Expected the field `unitweight` to be a primitive type in the JSON string but got " + data['unitweight']);
        }
        // ensure the json data is a string
        if (data['requestedquantity'] && !(typeof data['requestedquantity'] === 'string' || data['requestedquantity'] instanceof String)) {
            throw new Error("Expected the field `requestedquantity` to be a primitive type in the JSON string but got " + data['requestedquantity']);
        }
        // ensure the json data is a string
        if (data['confirmedquantity'] && !(typeof data['confirmedquantity'] === 'string' || data['confirmedquantity'] instanceof String)) {
            throw new Error("Expected the field `confirmedquantity` to be a primitive type in the JSON string but got " + data['confirmedquantity']);
        }
        // ensure the json data is a string
        if (data['backorderquantity'] && !(typeof data['backorderquantity'] === 'string' || data['backorderquantity'] instanceof String)) {
            throw new Error("Expected the field `backorderquantity` to be a primitive type in the JSON string but got " + data['backorderquantity']);
        }
        if (data['serialnumberdetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serialnumberdetails'])) {
                throw new Error("Expected the field `serialnumberdetails` to be an array in the JSON data but got " + data['serialnumberdetails']);
            }
            // validate the optional field `serialnumberdetails` (array)
            for (const item of data['serialnumberdetails']) {
                OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerSerialnumberdetailsInner.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trackingnumber'])) {
            throw new Error("Expected the field `trackingnumber` to be an array in the JSON data but got " + data['trackingnumber']);
        }
        if (data['shipmentdetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipmentdetails'])) {
                throw new Error("Expected the field `shipmentdetails` to be an array in the JSON data but got " + data['shipmentdetails']);
            }
            // validate the optional field `shipmentdetails` (array)
            for (const item of data['shipmentdetails']) {
                OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner.validateJSON(item);
            };
        }
        if (data['productextendedspecs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productextendedspecs'])) {
                throw new Error("Expected the field `productextendedspecs` to be an array in the JSON data but got " + data['productextendedspecs']);
            }
            // validate the optional field `productextendedspecs` (array)
            for (const item of data['productextendedspecs']) {
                InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['backorderetadate'] && !(typeof data['backorderetadate'] === 'string' || data['backorderetadate'] instanceof String)) {
            throw new Error("Expected the field `backorderetadate` to be a primitive type in the JSON string but got " + data['backorderetadate']);
        }

        return true;
    }


}



/**
 * Impulse line number
 * @member {String} linenumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['linenumber'] = undefined;

/**
 * Line of the Globel Sku / Customer Line Number
 * @member {String} globallinenumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['globallinenumber'] = undefined;

/**
 * Order Suffix
 * @member {String} ordersuffix
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['ordersuffix'] = undefined;

/**
 * Sales order number
 * @member {String} erpordernumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['erpordernumber'] = undefined;

/**
 * Status of the line
 * @member {String} linestatus
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['linestatus'] = undefined;

/**
 * Ingram part number
 * @member {String} partnumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['partnumber'] = undefined;

/**
 * manufacture number of the product
 * @member {String} manufacturerpartnumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['manufacturerpartnumber'] = undefined;

/**
 * name of the vendor
 * @member {String} vendorname
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['vendorname'] = undefined;

/**
 * Ingram Micro assigned code for the vendor
 * @member {String} vendorcode
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['vendorcode'] = undefined;

/**
 * @member {String} partdescription1
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['partdescription1'] = undefined;

/**
 * @member {String} partdescription2
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['partdescription2'] = undefined;

/**
 * weight of the product unit
 * @member {String} unitweight
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['unitweight'] = undefined;

/**
 * Customer price of the unit
 * @member {Number} unitprice
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['unitprice'] = undefined;

/**
 * extended price of the order
 * @member {Number} extendedprice
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['extendedprice'] = undefined;

/**
 * tax amount for the order
 * @member {Number} taxamount
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['taxamount'] = undefined;

/**
 * no. of units requested
 * @member {String} requestedquantity
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['requestedquantity'] = undefined;

/**
 * no. of units confirmed available
 * @member {String} confirmedquantity
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['confirmedquantity'] = undefined;

/**
 * quantity of back order
 * @member {String} backorderquantity
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['backorderquantity'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerSerialnumberdetailsInner>} serialnumberdetails
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['serialnumberdetails'] = undefined;

/**
 * @member {Array.<String>} trackingnumber
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['trackingnumber'] = undefined;

/**
 * @member {Array.<module:model/OrderDetailResponseServiceresponseOrderdetailresponseLinesInnerShipmentdetailsInner>} shipmentdetails
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['shipmentdetails'] = undefined;

/**
 * @member {Array.<module:model/InvoiceDetailResponseServiceresponseInvoicedetailresponseExtendedspecsInner>} productextendedspecs
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['productextendedspecs'] = undefined;

/**
 * estimated date of back order
 * @member {String} backorderetadate
 */
OrderDetailResponseServiceresponseOrderdetailresponseLinesInner.prototype['backorderetadate'] = undefined;






export default OrderDetailResponseServiceresponseOrderdetailresponseLinesInner;
