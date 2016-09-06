/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var remotepay_PaymentResponse = require("../remotepay/PaymentResponse");

/** The response to an authorization request */
  /**
  * @constructor
  * @augments remotepay.PaymentResponse
  * @memberof remotepay
  */
  AuthResponse = Class.create(remotepay_PaymentResponse, {
    /**
    * Initialize the values for this.
    * @memberof remotepay.AuthResponse
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = AuthResponse;
    }
  });

AuthResponse._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AuthResponse;
}

