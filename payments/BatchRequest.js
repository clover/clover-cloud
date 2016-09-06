/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");

  /**
  * @constructor
  * @memberof payments
  */
  BatchRequest = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof payments.BatchRequest
    * @private
    */
    initialize: function() {
      this._class_ = BatchRequest;
      this.devices = undefined;
    },

    /**
    * Set the field value
    * @memberof payments.BatchRequest
    * @param {Array.<String>} devices An array of 
    */
    setDevices: function(devices) {
      this.devices = devices;
    },

    /**
    * Get the field value
    * @memberof payments.BatchRequest
    * @return {Array.<String>} An array of 
    */
    getDevices: function() {
      return this.devices;
    },

    /**
    * @memberof payments.BatchRequest
    * @private
    */
    getMetaInfo: function(fieldName) {
      var curclass = this._class_;
      do {
        var fieldMetaInfo = curclass._meta_.fields[fieldName];
        if(fieldMetaInfo) {
          return fieldMetaInfo;
        }
        curclass = curclass.superclass;
      } while(curclass);
      return null;
    },

    toString: function() {
      return JSON.stringify(this);
    }

  });

BatchRequest._meta_ =  {fields:  {}};
BatchRequest._meta_.fields["devices"] = {};
BatchRequest._meta_.fields["devices"].type = Array;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BatchRequest;
}

