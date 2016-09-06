/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var remotemessage_Method = require("../remotemessage/Method");

  /**
  * @constructor
  * @memberof remotemessage
  */
  Message = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.Message
    * @private
    */
    initialize: function() {
      this._class_ = Message;
      this.method = undefined;
      this.version = 0;
    },

    /**
    * Set the field value
    * The list of message types
    *
    * @memberof remotemessage.Message
    * @param {remotemessage.Method} method 
    */
    setMethod: function(method) {
      this.method = method;
    },

    /**
    * Get the field value
    * The list of message types
    * @memberof remotemessage.Message
    * @return {remotemessage.Method} 
    */
    getMethod: function() {
      return this.method;
    },

    /**
    * Set the field value
    * The version of this message
    *
    * @memberof remotemessage.Message
    * @param {Number|Null} version must be an integer, 
    */
    setVersion: function(version) {
      this.version = version;
    },

    /**
    * Get the field value
    * The version of this message
    * @memberof remotemessage.Message
    * @return {Number|Null} must be an integer, 
    */
    getVersion: function() {
      return this.version;
    },

    /**
    * @memberof remotemessage.Message
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

Message._meta_ =  {fields:  {}};
Message._meta_.fields["method"] = {};
Message._meta_.fields["method"].type = remotemessage_Method;
Message._meta_.fields["version"] = {};
Message._meta_.fields["version"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Message;
}

