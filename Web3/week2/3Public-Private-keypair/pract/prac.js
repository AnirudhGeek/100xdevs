"use strict";
// import * as ed from "@noble/ed25519"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
//generating keypair
const keypair = web3_js_1.Keypair.generate();
//secret key and public key
const secretKey = keypair.secretKey;
const publicKey = keypair.publicKey.toBytes();
//message 
const message = new TextEncoder().encode("hello world");
//signing message 
const signature = tweetnacl_1.default.sign.detached(message, secretKey);
//verify message 
const verify = tweetnacl_1.default.sign.detached.verify(message, signature, publicKey);
console.log(verify);
