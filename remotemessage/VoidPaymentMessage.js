/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var remotemessage_Method = require("../remotemessage/Method");
var order_VoidReason = require("../order/VoidReason");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");

  /**
  * @constructor
  * @augments remotemessage.Message
  * @memberof remotemessage
  */
  VoidPaymentMessage = Class.create(remotemessage_Message, {
    /**
    * Initialize the values for this.
    * @memberof remotemessage.VoidPaymentMessage
    * @private
    */
    initialize: function($super) {
      $super();
      this._class_ = VoidPaymentMessage;
      this.setMethod(remotemessage_Method["VOID_PAYMENT"]);
      this.payment = undefined;
      this.voidReason = undefined;
    },

    /**
    * Set the field value
    * A payment
    *
    * @memberof remotemessage.VoidPaymentMessage
    * @param {payments.Payment} payment 
    */
    setPayment: function(payment) {
      this.payment = payment;
    },

    /**
    * Get the field value
    * A payment
    * @memberof remotemessage.VoidPaymentMessage
    * @return {payments.Payment} 
    */
    getPayment: function() {
      return this.payment;
    },

    /**
    * Set the field value
    * @memberof remotemessage.VoidPaymentMessage
    * @param {order.VoidReason} voidReason 
    */
    setVoidReason: function(voidReason) {
      this.voidReason = voidReason;
    },

    /**
    * Get the field value
    * @memberof remotemessage.VoidPaymentMessage
    * @return {order.VoidReason} 
    */
    getVoidReason: function() {
      return this.voidReason;
    }
  });

VoidPaymentMessage._meta_ =  {fields:  {}};
VoidPaymentMessage._meta_.fields["payment"] = {};
VoidPaymentMessage._meta_.fields["payment"].type = payments_Payment;
VoidPaymentMessage._meta_.fields["voidReason"] = {};
VoidPaymentMessage._meta_.fields["voidReason"].type = order_VoidReason;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidPaymentMessage;
}

