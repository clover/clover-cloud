require("prototype");
var log = require('./Logger.js').create();

JSONToCustomObject = Class.create({
    /**
     * Initialize the values for this.
     * @private
     */
    initialize: function (configuration) {
    },

    /**
     *
     * @param {Object} jsonobject - an object
     * @param {Object} customobject - an object that is expected to have meta information
     *  attached to it.  This meta information is obtained via getMetaInfo on the passed customobject.
     * @param attachUnknownProperties - if true, then properties that are not recognized will still be
     *  attached to the returned object, or; if the top level customobject has no meta information,
     *  then a copy of the passed jsonobject will be returned.
     * @returns {Object | null}
     */
    transfertoObject: function(jsonobject, customobject, attachUnknownProperties) {
        if(typeof jsonobject === "string") {
            // This should not happen, primitives are set outside this.
            // Try to parse it as a json string
            try {
                jsonobject = JSON.parse(jsonobject);
            } catch(e) {
                log.warn(e);
            }
        }
        // First see if we can do this
        if(customobject["getMetaInfo"] && typeof(customobject.getMetaInfo) === 'function' ) {
            for (var key in jsonobject) {
                // If the object is null or undefined (I don't think it can be undefined here...)
                // Just set the field on the customobject to null or undefined.
                if(jsonobject[key] === null || jsonobject[key] === undefined) {
                    customobject[key] = jsonobject[key];
                } else {
                    var metaInfo = customobject.getMetaInfo(key);
                    if(metaInfo) {
                        // The field exists on the customObject.  Do some checks on type to
                        // make sure we set the field to the proper value.
                        if(this.isPrimitive(metaInfo)) {
                            // Hope for the same type?  There is the possibility
                            // of having different types that are compatible...
                            customobject[key] = jsonobject[key];
                        } else if(this.isArray(metaInfo)) {
                            var elementType = this.getArrayType(metaInfo);
                            var jsonArray = jsonobject[key];
                            // This must be an array
                            if(Array.isArray(jsonArray)) {
                                customobject[key] = [];
                                for (var count = 0; count < jsonArray.length; count++) {
                                    customobject[key][count] = new elementType;
                                    var copied = this.transfertoObject(jsonArray[count], customobject[key][count], attachUnknownProperties);
                                    if (copied) {
                                        customobject[key][count] = copied;
                                    }
                                }
                            } else {
                                // Warn.  We will be tolerant...
                                log.warn("Passed json contains field " + key + " of type " + typeof jsonArray  +
                                  ".  The field on the object is of type array.  No assignment will be made");
                                if(attachUnknownProperties) {
                                    customobject["x_" + key] = jsonArray;
                                }
                            }
                        } else {
                            var fieldType = metaInfo.type;
                            // Might be an enum.  Check here.
                            if(fieldType[jsonobject[key]]) {
                                // It is an 'enum', grab the enum value.
                                customobject[key] = fieldType[jsonobject[key]];
                            } else {
                                try {
                                    // The field is not primitive, or an array, or an 'enum'
                                    // Try to create an instance of the type
                                    customobject[key] = new fieldType;
                                } catch (e) {
                                    throw e;
                                }
                                var copied = this.transfertoObject(jsonobject[key], customobject[key], attachUnknownProperties);
                                if (copied) {
                                    customobject[key][count] = copied;
                                }
                            }
                        }
                    } else if(attachUnknownProperties) {
                        // Add the unknown information as properties.
                        customobject[key] = JSON.parse(JSON.stringify(jsonobject));
                    }
                }
            }
        } else if(attachUnknownProperties) {
            return JSON.parse(JSON.stringify(jsonobject));
        }
        return null;
    },

    isPrimitive: function(metaInfo) {
        var variableType = metaInfo.type;
        return (
            variableType ===  String ||
            variableType ===  Number ||
            variableType ===  Boolean );
    },

    isArray: function(metaInfo) {
        var variableType = metaInfo.type;
        return ( variableType ===  Array );
    },

    getArrayType: function(metaInfo) {
        if(this.isArray(metaInfo)) {
            return metaInfo.elementType;
        }
    },

    /**
     * Not used much.  Could be here for a map, but really do not want to see a map...
     * @param metaInfo
     * @returns {string}
     */
    getValueType: function(metaInfo) {
        return metaInfo.valueType;
    }
});

//
// Expose the module.
//
if ('undefined' !== typeof module) {
    module.exports = JSONToCustomObject;
}
