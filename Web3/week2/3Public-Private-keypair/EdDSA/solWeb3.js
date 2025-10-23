"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var nacl = require("tweetnacl");
// Generate a new keypair
var keypair = web3_js_1.Keypair.generate();
// Extract the public and private keys
var publicKey = keypair.publicKey.toString();
var secretKey = keypair.secretKey;
// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);
// Convert the message "hello world" to a Uint8Array
var message = new TextEncoder().encode("hello world");
var signature = nacl.sign.detached(message, secretKey);
var result = (_a = nacl.sign) === null || _a === void 0 ? void 0 : _a.detached.verify(message, signature, keypair.publicKey.toBytes());
console.log(result);
