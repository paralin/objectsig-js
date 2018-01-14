import { newSignature, sign } from '../src/signature'
import { objectsig } from '../src/pb'

import * as crypto from 'libp2p-crypto'
import toBuffer from 'typedarray-to-buffer'

let data = new Uint8Array([0x0, 0x50, 0x10, 0x52, 0x2])
var privKeyData = new Uint8Array([
    0x8, 0x1, 0x12, 0x60, 0x1e, 0x44, 0xea, 0x95, 0x57, 0x6d,
    0x5f, 0xef, 0x82, 0xba, 0xbb, 0x9e, 0xe0, 0x70, 0x89, 0x17,
    0xf7, 0x93, 0xf3, 0xc5, 0xcb, 0x42, 0x4d, 0xf2, 0x64, 0xf5,
    0xd8, 0x6e, 0xaf, 0x70, 0x68, 0x3c, 0xcb, 0xc, 0x70, 0x70,
    0xb8, 0xd3, 0x57, 0xbe, 0x43, 0x95, 0x33, 0xe0, 0xdf, 0xdd,
    0x95, 0xcc, 0xe5, 0xa0, 0x7a, 0xa8, 0xfc, 0x1a, 0xbd, 0x65,
    0x47, 0xba, 0x15, 0x48, 0x73, 0xe5, 0x84, 0xc7, 0xcb, 0xc,
    0x70, 0x70, 0xb8, 0xd3, 0x57, 0xbe, 0x43, 0x95, 0x33, 0xe0,
    0xdf, 0xdd, 0x95, 0xcc, 0xe5, 0xa0, 0x7a, 0xa8, 0xfc, 0x1a,
    0xbd, 0x65, 0x47, 0xba, 0x15, 0x48, 0x73, 0xe5, 0x84, 0xc7,
])
var expectedSigData = new Uint8Array([
    0xa, 0x22, 0x12, 0x20, 0xf, 0xf9, 0xfc, 0xc, 0xbd, 0x31, 0xfb, 0x79,
    0x36, 0x58, 0x3d, 0x6, 0x8, 0xe, 0x85, 0xd, 0x13, 0xfa, 0xc3, 0x48,
    0x72, 0xe3, 0x20, 0x37, 0xc0, 0x9, 0xa3, 0x9c, 0x57, 0x73, 0x96,
    0xaf, 0x1a, 0x40, 0x23, 0x9, 0x70, 0x58, 0xdb, 0xc0, 0x10, 0xa5,
    0x2b, 0x0, 0x71, 0xf4, 0x3b, 0xfe, 0x62, 0x6e, 0xb9, 0xba, 0x1b,
    0x15, 0xdb, 0xc4, 0x8, 0x65, 0x79, 0x9b, 0xce, 0xbe, 0x3c, 0x84,
    0xfd, 0x2d, 0x55, 0x60, 0xf3, 0xa7, 0x95, 0xb0, 0x10, 0xf6, 0x53,
    0x4d, 0x6d, 0x6a, 0xc2, 0x9c, 0xe9, 0x42, 0x5f, 0xb4, 0x3d, 0xf9,
    0xb9, 0xbf, 0x5f, 0x46, 0x1c, 0x59, 0x88, 0x7, 0x2a, 0x5d, 0x46, 0x3,
])

async function unmarshalPrivKey(privKeyData: Uint8Array): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        crypto.keys.unmarshalPrivateKey(privKeyData, (err: any, privKeyParsed: any) => {
            if (err) {
                return reject(err)
            }
            resolve(privKeyParsed)
        })
    })
}

describe('signature', () => {
    it('signs data', async () => {
        let privKey = await unmarshalPrivKey(privKeyData)
        expect(privKey).not.toBeNull()
        let sig = await newSignature(privKey, data)
        expect(sig).not.toBeNull()
        let sigData = objectsig.Signature.encode(sig).finish()
        expect(sig.matchesPublicKey(privKey.public)).toEqual(true)
        expect(sigData).toEqual(toBuffer(expectedSigData))
        await sig.verify(privKey.public, data)
    })
})
