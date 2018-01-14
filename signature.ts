import { objectsig } from './pb'

import * as multihashes from 'multihashes'
import multihashing from 'multihashing'
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

// verify verifies a signature with an async pattern
export async function verify(pubKey: any, data: Uint8Array, sig: Uint8Array): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {
            pubKey.verify(data, sig, (err: any, valid: boolean) => {
                if (err) {
                    return reject(err)
                }
                resolve(valid)
            })
        } catch (e) {
            reject(e)
        }
    })
}

// Signature extends the protobuf Signature object.
export class Signature extends objectsig.Signature implements objectsig.ISignature {
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

    // verify throws an error if the signature does not check out.
    public async verify(pub: any, data: Uint8Array) {
        if (!this.matchesPublicKey(pub)) {
            throw new Error("object was not signed with given public key")
        }

        if (!(await verify(pub, data, this.signature))) {
            throw new Error("signature failed to validate")
        }
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
