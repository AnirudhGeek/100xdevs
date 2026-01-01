import {Keypair} from '@solana/web3.js'
import * as nacl from "tweetnacl"

//generate keypair
const keypair = Keypair.generate()

//generating public private keypair
const pubKey = keypair.publicKey
const privKey = keypair.secretKey

//displaying keys 
console.log("Public key : ",pubKey)
console.log("Private key : ",privKey)

//converting message to UintArray
const message = new TextEncoder().encode("hello world")

//signing the message
const sigMsg = nacl.sign.detached(message,privKey)

//verify message 
const verify = nacl.sign.detached.verify(message,sigMsg,keypair.publicKey.toBytes())

console.log(verify)
