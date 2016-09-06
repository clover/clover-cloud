/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var base_Reference = require("../base/Reference");

  /**
  * @constructor
  * @memberof base
  */
  ServiceCharge = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof base.ServiceCharge
    * @private
    */
    initialize: function() {
      this._class_ = ServiceCharge;
      this.id = undefined;
      this.orderRef = undefined;
      this.name = undefined;
      this.enabled = undefined;
      this.percentage = undefined;
      this.percentageDecimal = undefined;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof base.ServiceCharge
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof base.ServiceCharge
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * The order with which the service charge is associated
    *
    * @memberof base.ServiceCharge
    * @param {base.Reference} orderRef 
    */
    setOrderRef: function(orderRef) {
      this.orderRef = orderRef;
    },

    /**
    * Get the field value
    * The order with which the service charge is associated
    * @memberof base.ServiceCharge
    * @return {base.Reference} 
    */
    getOrderRef: function() {
      return this.orderRef;
    },

    /**
    * Set the field value
    * Service charge name
    *
    * @memberof base.ServiceCharge
    * @param {String} name 
    */
    setName: function(name) {
      this.name = name;
    },

    /**
    * Get the field value
    * Service charge name
    * @memberof base.ServiceCharge
    * @return {String} 
    */
    getName: function() {
      return this.name;
    },

    /**
    * Set the field value
    * If this service charge is enabled
    *
    * @memberof base.ServiceCharge
    * @param {Boolean} enabled 
    */
    setEnabled: function(enabled) {
      this.enabled = enabled;
    },

    /**
    * Get the field value
    * If this service charge is enabled
    * @memberof base.ServiceCharge
    * @return {Boolean} 
    */
    getEnabled: function() {
      return this.enabled;
    },

    /**
    * Set the field value
    * DEPRECATED
    *
    * @memberof base.ServiceCharge
    * @param {Number} percentage must be a long integer
    */
    setPercentage: function(percentage) {
      this.percentage = percentage;
    },

    /**
    * Get the field value
    * DEPRECATED
    * @memberof base.ServiceCharge
    * @return {Number} must be a long integer
    */
    getPercentage: function() {
      return this.percentage;
    },

    /**
    * Set the field value
    * Percent to charge times 10000, e.g. 12.5% will be 125000
    *
    * @memberof base.ServiceCharge
    * @param {Number} percentageDecimal must be a long integer
    */
    setPercentageDecimal: function(percentageDecimal) {
      this.percentageDecimal = percentageDecimal;
    },

    /**
    * Get the field value
    * Percent to charge times 10000, e.g. 12.5% will be 125000
    * @memberof base.ServiceCharge
    * @return {Number} must be a long integer
    */
    getPercentageDecimal: function() {
      return this.percentageDecimal;
    },

    /**
    * @memberof base.ServiceCharge
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

ServiceCharge._meta_ =  {fields:  {}};
ServiceCharge._meta_.fields["id"] = {};
ServiceCharge._meta_.fields["id"].type = String;
ServiceCharge._meta_.fields["orderRef"] = {};
ServiceCharge._meta_.fields["orderRef"].type = base_Reference;
ServiceCharge._meta_.fields["name"] = {};
ServiceCharge._meta_.fields["name"].type = String;
ServiceCharge._meta_.fields["enabled"] = {};
ServiceCharge._meta_.fields["enabled"].type = Boolean;
ServiceCharge._meta_.fields["percentage"] = {};
ServiceCharge._meta_.fields["percentage"].type = Number;
ServiceCharge._meta_.fields["percentageDecimal"] = {};
ServiceCharge._meta_.fields["percentageDecimal"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = ServiceCharge;
}

