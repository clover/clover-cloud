/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_LogLevelEnum = require("../remotemessage/LogLevelEnum");

  /**
  * @constructor
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  LogMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.LogMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = LogMessage;
      this.setMethod(remotemessage_Method["LOG_MESSAGE"]);
      this.logLevel = undefined;
      this.messages = undefined;
    },

    /**
    * Set the field value
    * @memberof remotemessage.LogMessage
    * @param {remotemessage.LogLevelEnum} logLevel 
    */
    setLogLevel: function(logLevel) {
      this.logLevel = logLevel;
    },

    /**
    * Get the field value
    * @memberof remotemessage.LogMessage
    * @return {remotemessage.LogLevelEnum} 
    */
    getLogLevel: function() {
      return this.logLevel;
    },

    /**
    * Set the field value
    * @memberof remotemessage.LogMessage
    * @param {Object.<String,String>} messages A map of <String> to <>
    */
    setMessages: function(messages) {
      this.messages = messages;
    },

    /**
    * Get the field value
    * @memberof remotemessage.LogMessage
    * @return {Object.<String,String>} A map of <String> to <>
    */
    getMessages: function() {
      return this.messages;
    }
  });

LogMessage._meta_ =  {fields:  {}};
LogMessage._meta_.fields["logLevel"] = {};
LogMessage._meta_.fields["logLevel"].type = remotemessage_LogLevelEnum;
LogMessage._meta_.fields["messages"] = {};
LogMessage._meta_.fields["messages"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = LogMessage;
}

