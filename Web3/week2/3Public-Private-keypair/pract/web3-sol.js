"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
//generating keypair 
const keypair = web3_js_1.Keypair.generate();
//private and public key 
const secretKey = keypair.secretKey;
const publicKey = keypair.publicKey.toBytes();
//displaying the private and public key
console.log("secret key : ", secretKey);
console.log("pub key : ", publicKey);
//converting the message into uint8Arr
const message = new TextEncoder().encode("Hello World");
//signing the message 
const signature = tweetnacl_1.default.sign.detached(message, secretKey);
//verifying the message 
const verify = tweetnacl_1.default.sign.detached.verify(message, signature, publicKey);
console.log(verify);
