/**
 * XmlForm.IO API
 * XmlForm.IO API for working with web forms backed by XML data
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@xmlform.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JwtLoginRequest model module.
 * @module model/JwtLoginRequest
 * @version 1.0
 */
class JwtLoginRequest {
    /**
     * Constructs a new <code>JwtLoginRequest</code>.
     * @alias module:model/JwtLoginRequest
     */
    constructor() { 
        
        JwtLoginRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JwtLoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JwtLoginRequest} obj Optional instance to populate.
     * @return {module:model/JwtLoginRequest} The populated <code>JwtLoginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JwtLoginRequest();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>JwtLoginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>JwtLoginRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['client_id'] && !(typeof data['client_id'] === 'string' || data['client_id'] instanceof String)) {
            throw new Error("Expected the field `client_id` to be a primitive type in the JSON string but got " + data['client_id']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
        }

        return true;
    }


}



/**
 * The Client id
 * @member {String} client_id
 */
JwtLoginRequest.prototype['client_id'] = undefined;

/**
 * The Client secret
 * @member {String} client_secret
 */
JwtLoginRequest.prototype['client_secret'] = undefined;






export default JwtLoginRequest;

