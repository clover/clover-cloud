/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var Class = require("../Class.js");
var device_BuildType = require("../device/BuildType");
var base_Reference = require("../base/Reference");

  /**
  * @constructor
  * @memberof device
  */
  Device = Class.create( {
    /**
    * Initialize the values for this.
    * @memberof device.Device
    * @private
    */
    initialize: function() {
      this._class_ = Device;
      this.id = undefined;
      this.name = undefined;
      this.model = undefined;
      this.merchant = undefined;
      this.orderPrefix = undefined;
      this.terminalPrefix = undefined;
      this.serial = undefined;
      this.buildNumber = undefined;
      this.secureId = undefined;
      this.buildType = undefined;
      this.cpuId = undefined;
      this.imei = undefined;
      this.imsi = undefined;
      this.simIccid = undefined;
      this.deviceCertificate = undefined;
      this.pedCertificate = undefined;
      this.deviceTypeName = undefined;
      this.pinDisabled = false;
      this.offlinePayments = false;
      this.offlinePaymentsAll = false;
      this.offlinePaymentsLimit = undefined;
      this.offlinePaymentsPromptThreshold = undefined;
      this.offlinePaymentsTotalPaymentsLimit = undefined;
      this.offlinePaymentsLimitDefault = undefined;
      this.offlinePaymentsPromptThresholdDefault = undefined;
      this.offlinePaymentsTotalPaymentsLimitDefault = undefined;
      this.offlinePaymentsMaxLimit = undefined;
      this.offlinePaymentsMaxTotalPaymentsLimit = undefined;
      this.showOfflinePayments = undefined;
      this.maxOfflineDays = undefined;
      this.allowStoreAndForward = undefined;
      this.secureReports = undefined;
    },

    /**
    * Set the field value
    * Unique identifier
    *
    * @memberof device.Device
    * @param {String} id 
    */
    setId: function(id) {
      this.id = id;
    },

    /**
    * Get the field value
    * Unique identifier
    * @memberof device.Device
    * @return {String} 
    */
    getId: function() {
      return this.id;
    },

    /**
    * Set the field value
    * Name of the device (if entered)
    *
    * @memberof device.Device
    * @param {String} name 
    */
    setName: function(name) {
      this.name = name;
    },

    /**
    * Get the field value
    * Name of the device (if entered)
    * @memberof device.Device
    * @return {String} 
    */
    getName: function() {
      return this.name;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {String} model 
    */
    setModel: function(model) {
      this.model = model;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {String} 
    */
    getModel: function() {
      return this.model;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {base.Reference} merchant 
    */
    setMerchant: function(merchant) {
      this.merchant = merchant;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {base.Reference} 
    */
    getMerchant: function() {
      return this.merchant;
    },

    /**
    * Set the field value
    * A prefix that will be applied to order numbers. This is useful if the merchant and/or customer needs to track which device an order came from.
    *
    * @memberof device.Device
    * @param {String} orderPrefix 
    */
    setOrderPrefix: function(orderPrefix) {
      this.orderPrefix = orderPrefix;
    },

    /**
    * Get the field value
    * A prefix that will be applied to order numbers. This is useful if the merchant and/or customer needs to track which device an order came from.
    * @memberof device.Device
    * @return {String} 
    */
    getOrderPrefix: function() {
      return this.orderPrefix;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Null|Number} terminalPrefix must be an integer
    */
    setTerminalPrefix: function(terminalPrefix) {
      this.terminalPrefix = terminalPrefix;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Null|Number} must be an integer
    */
    getTerminalPrefix: function() {
      return this.terminalPrefix;
    },

    /**
    * Set the field value
    * The device's serial number.
    *
    * @memberof device.Device
    * @param {String} serial 
    */
    setSerial: function(serial) {
      this.serial = serial;
    },

    /**
    * Get the field value
    * The device's serial number.
    * @memberof device.Device
    * @return {String} 
    */
    getSerial: function() {
      return this.serial;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} buildNumber must be a long integer
    */
    setBuildNumber: function(buildNumber) {
      this.buildNumber = buildNumber;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getBuildNumber: function() {
      return this.buildNumber;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {String} secureId 
    */
    setSecureId: function(secureId) {
      this.secureId = secureId;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {String} 
    */
    getSecureId: function() {
      return this.secureId;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {device.BuildType} buildType 
    */
    setBuildType: function(buildType) {
      this.buildType = buildType;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {device.BuildType} 
    */
    getBuildType: function() {
      return this.buildType;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {String} cpuId 
    */
    setCpuId: function(cpuId) {
      this.cpuId = cpuId;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {String} 
    */
    getCpuId: function() {
      return this.cpuId;
    },

    /**
    * Set the field value
    * The IMEI of the device
    *
    * @memberof device.Device
    * @param {String} imei 
    */
    setImei: function(imei) {
      this.imei = imei;
    },

    /**
    * Get the field value
    * The IMEI of the device
    * @memberof device.Device
    * @return {String} 
    */
    getImei: function() {
      return this.imei;
    },

    /**
    * Set the field value
    * The IMSI of the SIM in the device (if present)
    *
    * @memberof device.Device
    * @param {String} imsi 
    */
    setImsi: function(imsi) {
      this.imsi = imsi;
    },

    /**
    * Get the field value
    * The IMSI of the SIM in the device (if present)
    * @memberof device.Device
    * @return {String} 
    */
    getImsi: function() {
      return this.imsi;
    },

    /**
    * Set the field value
    * The ICCID of the SIM in the device (if present)
    *
    * @memberof device.Device
    * @param {String} simIccid 
    */
    setSimIccid: function(simIccid) {
      this.simIccid = simIccid;
    },

    /**
    * Get the field value
    * The ICCID of the SIM in the device (if present)
    * @memberof device.Device
    * @return {String} 
    */
    getSimIccid: function() {
      return this.simIccid;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {String} deviceCertificate 
    */
    setDeviceCertificate: function(deviceCertificate) {
      this.deviceCertificate = deviceCertificate;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {String} 
    */
    getDeviceCertificate: function() {
      return this.deviceCertificate;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {String} pedCertificate 
    */
    setPedCertificate: function(pedCertificate) {
      this.pedCertificate = pedCertificate;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {String} 
    */
    getPedCertificate: function() {
      return this.pedCertificate;
    },

    /**
    * Set the field value
    * The type of device. Possible values are "GOLDLEAF" (Station), "LEAFCUTTER" (Mobile), "MAPLECUTTER" (Mini), "CLOVER_GO" (Clover Go), or "OTHER" (Unknown).
    *
    * @memberof device.Device
    * @param {String} deviceTypeName 
    */
    setDeviceTypeName: function(deviceTypeName) {
      this.deviceTypeName = deviceTypeName;
    },

    /**
    * Get the field value
    * The type of device. Possible values are "GOLDLEAF" (Station), "LEAFCUTTER" (Mobile), "MAPLECUTTER" (Mini), "CLOVER_GO" (Clover Go), or "OTHER" (Unknown).
    * @memberof device.Device
    * @return {String} 
    */
    getDeviceTypeName: function() {
      return this.deviceTypeName;
    },

    /**
    * Set the field value
    * Whether this device has PIN prompt disabled.
    *
    * @memberof device.Device
    * @param {Boolean} pinDisabled 
    */
    setPinDisabled: function(pinDisabled) {
      this.pinDisabled = pinDisabled;
    },

    /**
    * Get the field value
    * Whether this device has PIN prompt disabled.
    * @memberof device.Device
    * @return {Boolean} 
    */
    getPinDisabled: function() {
      return this.pinDisabled;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Boolean} offlinePayments 
    */
    setOfflinePayments: function(offlinePayments) {
      this.offlinePayments = offlinePayments;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Boolean} 
    */
    getOfflinePayments: function() {
      return this.offlinePayments;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Boolean} offlinePaymentsAll 
    */
    setOfflinePaymentsAll: function(offlinePaymentsAll) {
      this.offlinePaymentsAll = offlinePaymentsAll;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Boolean} 
    */
    getOfflinePaymentsAll: function() {
      return this.offlinePaymentsAll;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsLimit must be a long integer
    */
    setOfflinePaymentsLimit: function(offlinePaymentsLimit) {
      this.offlinePaymentsLimit = offlinePaymentsLimit;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsLimit: function() {
      return this.offlinePaymentsLimit;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsPromptThreshold must be a long integer
    */
    setOfflinePaymentsPromptThreshold: function(offlinePaymentsPromptThreshold) {
      this.offlinePaymentsPromptThreshold = offlinePaymentsPromptThreshold;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsPromptThreshold: function() {
      return this.offlinePaymentsPromptThreshold;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsTotalPaymentsLimit must be a long integer
    */
    setOfflinePaymentsTotalPaymentsLimit: function(offlinePaymentsTotalPaymentsLimit) {
      this.offlinePaymentsTotalPaymentsLimit = offlinePaymentsTotalPaymentsLimit;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsTotalPaymentsLimit: function() {
      return this.offlinePaymentsTotalPaymentsLimit;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsLimitDefault must be a long integer
    */
    setOfflinePaymentsLimitDefault: function(offlinePaymentsLimitDefault) {
      this.offlinePaymentsLimitDefault = offlinePaymentsLimitDefault;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsLimitDefault: function() {
      return this.offlinePaymentsLimitDefault;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsPromptThresholdDefault must be a long integer
    */
    setOfflinePaymentsPromptThresholdDefault: function(offlinePaymentsPromptThresholdDefault) {
      this.offlinePaymentsPromptThresholdDefault = offlinePaymentsPromptThresholdDefault;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsPromptThresholdDefault: function() {
      return this.offlinePaymentsPromptThresholdDefault;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsTotalPaymentsLimitDefault must be a long integer
    */
    setOfflinePaymentsTotalPaymentsLimitDefault: function(offlinePaymentsTotalPaymentsLimitDefault) {
      this.offlinePaymentsTotalPaymentsLimitDefault = offlinePaymentsTotalPaymentsLimitDefault;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsTotalPaymentsLimitDefault: function() {
      return this.offlinePaymentsTotalPaymentsLimitDefault;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsMaxLimit must be a long integer
    */
    setOfflinePaymentsMaxLimit: function(offlinePaymentsMaxLimit) {
      this.offlinePaymentsMaxLimit = offlinePaymentsMaxLimit;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsMaxLimit: function() {
      return this.offlinePaymentsMaxLimit;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} offlinePaymentsMaxTotalPaymentsLimit must be a long integer
    */
    setOfflinePaymentsMaxTotalPaymentsLimit: function(offlinePaymentsMaxTotalPaymentsLimit) {
      this.offlinePaymentsMaxTotalPaymentsLimit = offlinePaymentsMaxTotalPaymentsLimit;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getOfflinePaymentsMaxTotalPaymentsLimit: function() {
      return this.offlinePaymentsMaxTotalPaymentsLimit;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Boolean} showOfflinePayments 
    */
    setShowOfflinePayments: function(showOfflinePayments) {
      this.showOfflinePayments = showOfflinePayments;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Boolean} 
    */
    getShowOfflinePayments: function() {
      return this.showOfflinePayments;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Number} maxOfflineDays must be a long integer
    */
    setMaxOfflineDays: function(maxOfflineDays) {
      this.maxOfflineDays = maxOfflineDays;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Number} must be a long integer
    */
    getMaxOfflineDays: function() {
      return this.maxOfflineDays;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Boolean} allowStoreAndForward 
    */
    setAllowStoreAndForward: function(allowStoreAndForward) {
      this.allowStoreAndForward = allowStoreAndForward;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Boolean} 
    */
    getAllowStoreAndForward: function() {
      return this.allowStoreAndForward;
    },

    /**
    * Set the field value
    * @memberof device.Device
    * @param {Array.<base.Reference>} secureReports An array of 
    */
    setSecureReports: function(secureReports) {
      this.secureReports = secureReports;
    },

    /**
    * Get the field value
    * @memberof device.Device
    * @return {Array.<base.Reference>} An array of 
    */
    getSecureReports: function() {
      return this.secureReports;
    },

    /**
    * @memberof device.Device
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

Device._meta_ =  {fields:  {}};
Device._meta_.fields["id"] = {};
Device._meta_.fields["id"].type = String;
Device._meta_.fields["name"] = {};
Device._meta_.fields["name"].type = String;
Device._meta_.fields["model"] = {};
Device._meta_.fields["model"].type = String;
Device._meta_.fields["merchant"] = {};
Device._meta_.fields["merchant"].type = base_Reference;
Device._meta_.fields["orderPrefix"] = {};
Device._meta_.fields["orderPrefix"].type = String;
Device._meta_.fields["terminalPrefix"] = {};
Device._meta_.fields["terminalPrefix"].type = Number;
Device._meta_.fields["serial"] = {};
Device._meta_.fields["serial"].type = String;
Device._meta_.fields["buildNumber"] = {};
Device._meta_.fields["buildNumber"].type = Number;
Device._meta_.fields["secureId"] = {};
Device._meta_.fields["secureId"].type = String;
Device._meta_.fields["buildType"] = {};
Device._meta_.fields["buildType"].type = device_BuildType;
Device._meta_.fields["cpuId"] = {};
Device._meta_.fields["cpuId"].type = String;
Device._meta_.fields["imei"] = {};
Device._meta_.fields["imei"].type = String;
Device._meta_.fields["imsi"] = {};
Device._meta_.fields["imsi"].type = String;
Device._meta_.fields["simIccid"] = {};
Device._meta_.fields["simIccid"].type = String;
Device._meta_.fields["deviceCertificate"] = {};
Device._meta_.fields["deviceCertificate"].type = String;
Device._meta_.fields["pedCertificate"] = {};
Device._meta_.fields["pedCertificate"].type = String;
Device._meta_.fields["deviceTypeName"] = {};
Device._meta_.fields["deviceTypeName"].type = String;
Device._meta_.fields["pinDisabled"] = {};
Device._meta_.fields["pinDisabled"].type = Boolean;
Device._meta_.fields["offlinePayments"] = {};
Device._meta_.fields["offlinePayments"].type = Boolean;
Device._meta_.fields["offlinePaymentsAll"] = {};
Device._meta_.fields["offlinePaymentsAll"].type = Boolean;
Device._meta_.fields["offlinePaymentsLimit"] = {};
Device._meta_.fields["offlinePaymentsLimit"].type = Number;
Device._meta_.fields["offlinePaymentsPromptThreshold"] = {};
Device._meta_.fields["offlinePaymentsPromptThreshold"].type = Number;
Device._meta_.fields["offlinePaymentsTotalPaymentsLimit"] = {};
Device._meta_.fields["offlinePaymentsTotalPaymentsLimit"].type = Number;
Device._meta_.fields["offlinePaymentsLimitDefault"] = {};
Device._meta_.fields["offlinePaymentsLimitDefault"].type = Number;
Device._meta_.fields["offlinePaymentsPromptThresholdDefault"] = {};
Device._meta_.fields["offlinePaymentsPromptThresholdDefault"].type = Number;
Device._meta_.fields["offlinePaymentsTotalPaymentsLimitDefault"] = {};
Device._meta_.fields["offlinePaymentsTotalPaymentsLimitDefault"].type = Number;
Device._meta_.fields["offlinePaymentsMaxLimit"] = {};
Device._meta_.fields["offlinePaymentsMaxLimit"].type = Number;
Device._meta_.fields["offlinePaymentsMaxTotalPaymentsLimit"] = {};
Device._meta_.fields["offlinePaymentsMaxTotalPaymentsLimit"].type = Number;
Device._meta_.fields["showOfflinePayments"] = {};
Device._meta_.fields["showOfflinePayments"].type = Boolean;
Device._meta_.fields["maxOfflineDays"] = {};
Device._meta_.fields["maxOfflineDays"].type = Number;
Device._meta_.fields["allowStoreAndForward"] = {};
Device._meta_.fields["allowStoreAndForward"].type = Boolean;
Device._meta_.fields["secureReports"] = {};
Device._meta_.fields["secureReports"].type = Array;
Device._meta_.fields["secureReports"].elementType = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Device;
}

