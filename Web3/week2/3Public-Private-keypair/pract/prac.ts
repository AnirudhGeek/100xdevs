// import * as ed from "@noble/ed25519"

// const main = async()=>{
//     //generating private key
//     const privateKey =  ed.utils.randomSecretKey()

//     //generating public key from private key 
//     const publicKey = await ed.getPublicKeyAsync(privateKey)

//     //message 
//     const message = new TextEncoder().encode("hello world")

//     //signing message 
//     const signature = await ed.signAsync(message,privateKey)

//     //verify message 
//     const verify = await ed.verifyAsync(signature,message,publicKey)
//     console.log(verify)
// }

// main()



//solana
import { Keypair } from "@solana/web3.js"
import nacl from "tweetnacl"

//generating keypair
const keypair = Keypair.generate()

//secret key and public key
const secretKey = keypair.secretKey
const publicKey = keypair.publicKey.toBytes()

//message 
const message = new TextEncoder().encode("hello world")

//signing message 
const signature = nacl.sign.detached(message,secretKey)

//verify message 
const verify = nacl.sign.detached.verify(message,signature,publicKey)
console.log(verify)