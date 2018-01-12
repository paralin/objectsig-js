/* tslint:disable */
import * as $protobuf from 'protobufjs'

/** Namespace objectsig. */
export namespace objectsig {
  /** Properties of a Signature. */
  interface ISignature {
    /** Signature keyMultihash */
    keyMultihash?: Uint8Array | null

    /** Signature signature */
    signature?: Uint8Array | null
  }

  /** Represents a Signature. */
  class Signature implements ISignature {
    /**
     * Constructs a new Signature.
     * @param [properties] Properties to set
     */
    constructor(properties?: objectsig.ISignature)

    /** Signature keyMultihash. */
    public keyMultihash: Uint8Array

    /** Signature signature. */
    public signature: Uint8Array

    /**
     * Creates a new Signature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signature instance
     */
    public static create(properties?: objectsig.ISignature): objectsig.Signature

    /**
     * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: objectsig.ISignature, writer?: $protobuf.Writer): $protobuf.Writer

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: objectsig.ISignature,
      writer?: $protobuf.Writer
    ): $protobuf.Writer

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): objectsig.Signature

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): objectsig.Signature

    /**
     * Verifies a Signature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signature
     */
    public static fromObject(object: { [k: string]: any }): objectsig.Signature

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @param message Signature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: objectsig.Signature,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any }

    /**
     * Converts this Signature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any }
  }
}
