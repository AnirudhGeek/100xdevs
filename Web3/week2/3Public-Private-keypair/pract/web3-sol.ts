import { Keypair} from "@solana/web3.js";
import nacl from "tweetnacl";

//generating keypair 
const keypair = Keypair.generate()

//private and public key 
const secretKey = keypair.secretKey
const publicKey = keypair.publicKey.toBytes()

//displaying the private and public key
console.log("secret key : ",secretKey)
console.log("pub key : ",publicKey)

//converting the message into uint8Arr
const message = new TextEncoder().encode("Hello World")

//signing the message 
const signature = nacl.sign.detached(message,secretKey)

//verifying the message 
const verify = nacl.sign.detached.verify(message,signature,publicKey)
console.log(verify)