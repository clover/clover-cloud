/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");

  /**
  * @constructor
  * @memberof customers
  */
  PhoneNumber = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof customers.PhoneNumber
    * @private
    */
    initialize: function() {
      this._class_ = PhoneNumber;
      this.id = undefined;
      this.phoneNumber = undefined;
    },

    /**
    * Set the field value
    * @memberof customers.PhoneNumber
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * @memberof customers.PhoneNumber
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * @memberof customers.PhoneNumber
    * @param {String} phoneNumber 
    */
    setPhoneNumber: function(phoneNumber) {
      this.phoneNumber = phoneNumber;
    },

    /**
    * Get the field value
    * @memberof customers.PhoneNumber
    * @return {String} 
    */
    getPhoneNumber: function() {
      return this.phoneNumber;
    },

    /**
    * @memberof customers.PhoneNumber
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

PhoneNumber._meta_ =  {fields:  {}};
PhoneNumber._meta_.fields["id"] = {};
PhoneNumber._meta_.fields["id"].type = String;
PhoneNumber._meta_.fields["phoneNumber"] = {};
PhoneNumber._meta_.fields["phoneNumber"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PhoneNumber;
}

