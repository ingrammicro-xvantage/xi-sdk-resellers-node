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
import AvailabilityAsyncNotificationRequestResourceInner from './AvailabilityAsyncNotificationRequestResourceInner';

/**
 * The AvailabilityAsyncNotificationRequest model module.
 * @module model/AvailabilityAsyncNotificationRequest
 * @version 1.0.0
 */
class AvailabilityAsyncNotificationRequest {
    /**
     * Constructs a new <code>AvailabilityAsyncNotificationRequest</code>.
     * @alias module:model/AvailabilityAsyncNotificationRequest
     */
    constructor() { 
        
        AvailabilityAsyncNotificationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AvailabilityAsyncNotificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailabilityAsyncNotificationRequest} obj Optional instance to populate.
     * @return {module:model/AvailabilityAsyncNotificationRequest} The populated <code>AvailabilityAsyncNotificationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailabilityAsyncNotificationRequest();

            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('eventTimeStamp')) {
                obj['eventTimeStamp'] = ApiClient.convertToType(data['eventTimeStamp'], 'String');
            }
            if (data.hasOwnProperty('eventId')) {
                obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], [AvailabilityAsyncNotificationRequestResourceInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailabilityAsyncNotificationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailabilityAsyncNotificationRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['topic'] && !(typeof data['topic'] === 'string' || data['topic'] instanceof String)) {
            throw new Error("Expected the field `topic` to be a primitive type in the JSON string but got " + data['topic']);
        }
        // ensure the json data is a string
        if (data['event'] && !(typeof data['event'] === 'string' || data['event'] instanceof String)) {
            throw new Error("Expected the field `event` to be a primitive type in the JSON string but got " + data['event']);
        }
        // ensure the json data is a string
        if (data['eventTimeStamp'] && !(typeof data['eventTimeStamp'] === 'string' || data['eventTimeStamp'] instanceof String)) {
            throw new Error("Expected the field `eventTimeStamp` to be a primitive type in the JSON string but got " + data['eventTimeStamp']);
        }
        // ensure the json data is a string
        if (data['eventId'] && !(typeof data['eventId'] === 'string' || data['eventId'] instanceof String)) {
            throw new Error("Expected the field `eventId` to be a primitive type in the JSON string but got " + data['eventId']);
        }
        if (data['resource']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['resource'])) {
                throw new Error("Expected the field `resource` to be an array in the JSON data but got " + data['resource']);
            }
            // validate the optional field `resource` (array)
            for (const item of data['resource']) {
                AvailabilityAsyncNotificationRequestResourceInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Field for identifying whether it is a reseller or vendor event. For eg, resellers/orders
 * @member {String} topic
 */
AvailabilityAsyncNotificationRequest.prototype['topic'] = undefined;

/**
 * The event sent in the request. For eg, im::create.
 * @member {String} event
 */
AvailabilityAsyncNotificationRequest.prototype['event'] = undefined;

/**
 * The timestamp at which the event was sent.
 * @member {String} eventTimeStamp
 */
AvailabilityAsyncNotificationRequest.prototype['eventTimeStamp'] = undefined;

/**
 * A unique id used as identifier for the sepcific event and used for generating the x-hub signature.
 * @member {String} eventId
 */
AvailabilityAsyncNotificationRequest.prototype['eventId'] = undefined;

/**
 * @member {Array.<module:model/AvailabilityAsyncNotificationRequestResourceInner>} resource
 */
AvailabilityAsyncNotificationRequest.prototype['resource'] = undefined;






export default AvailabilityAsyncNotificationRequest;

