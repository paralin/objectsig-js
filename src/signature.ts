import { objectsig } from './pb'
import * as crypto from 'libp2p-crypto'

import * as multihashes from 'multihashes'
import multihashing from 'multihashing'
import toBuffer from 'typedarray-to-buffer'
import Buffer from 'buffer'

// sign signs a message with an async pattern
export async function sign(privKey: any, data: Uint8Array): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
        try {
            privKey.sign(data, (err: any, signature: Uint8Array) => {
                if (err) {
                    return reject(err)
                }
                resolve(signature)
            })
        } catch (e) {
            reject(e)
        }
    })
}

// Signature extends the protobuf Signature object.
export class Signature extends objectsig.Signature {
    constructor(obj: objectsig.ISignature) {
        super(obj)
    }

    // matchesPublicKey checks if a signature matches a given public key.
    // Throws if anything is invalid.
    public matchesPublicKey(pub: any): boolean {
        let pubData = pub.bytes
        let keyMulti = multihashes.decode(toBuffer(this.keyMultihash))
        let ourMh = multihashing(toBuffer(pubData), keyMulti.code)
        let ourKeyMulti = multihashes.decode(ourMh)

        return !(keyMulti.digest.compare(ourKeyMulti.digest))
    }
}

// newSignature builds a new signature from a private key, hash code, and data.
// Hash code is the multihashing code, uses "sha256" on default.
export async function newSignature(priv: any, data: Uint8Array, code?: string): Promise<Signature> {
    code = code || "sha2-256"
    let signature = await sign(priv, data)
    let keyMultihash = multihashing(toBuffer(priv.public.bytes), code)
    return new Signature({ signature, keyMultihash })
}
