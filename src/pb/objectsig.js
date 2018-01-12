/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.objectsig = (function() {

    /**
     * Namespace objectsig.
     * @exports objectsig
     * @namespace
     */
    var objectsig = {};

    objectsig.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof objectsig
         * @interface ISignature
         * @property {Uint8Array|null} [keyMultihash] Signature keyMultihash
         * @property {Uint8Array|null} [signature] Signature signature
         */

        /**
         * Constructs a new Signature.
         * @memberof objectsig
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {objectsig.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature keyMultihash.
         * @member {Uint8Array} keyMultihash
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.keyMultihash = $util.newBuffer([]);

        /**
         * Signature signature.
         * @member {Uint8Array} signature
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature=} [properties] Properties to set
         * @returns {objectsig.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encode
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.keyMultihash);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.objectsig.Signature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyMultihash = reader.bytes();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                if (!(message.keyMultihash && typeof message.keyMultihash.length === "number" || $util.isString(message.keyMultihash)))
                    return "keyMultihash: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {objectsig.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.objectsig.Signature)
                return object;
            var message = new $root.objectsig.Signature();
            if (object.keyMultihash != null)
                if (typeof object.keyMultihash === "string")
                    $util.base64.decode(object.keyMultihash, message.keyMultihash = $util.newBuffer($util.base64.length(object.keyMultihash)), 0);
                else if (object.keyMultihash.length)
                    message.keyMultihash = object.keyMultihash;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.keyMultihash = options.bytes === String ? "" : [];
                object.signature = options.bytes === String ? "" : [];
            }
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                object.keyMultihash = options.bytes === String ? $util.base64.encode(message.keyMultihash, 0, message.keyMultihash.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyMultihash) : message.keyMultihash;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof objectsig.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signature;
    })();

    return objectsig;
})();

module.exports = $root;
