import { objectsig } from './pb'
import * as crypto from 'libp2p-crypto'

import * as multihashing from 'multihashing'
import toBuffer from 'typedarray-to-buffer'

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

// newSignature builds a new signature from a private key, hash code, and data.
// Hash code is the multihashing code, uses "sha256" on default.
export async function newSignature(priv: any, data: Uint8Array, code?: string): Promise<objectsig.Signature> {
    code = code || "sha2-256"
    let signature = await sign(priv, data)
    let keyMultihash = multihashing.digest(toBuffer(priv.public.bytes), code)
    return new objectsig.Signature({ signature, keyMultihash })
}
