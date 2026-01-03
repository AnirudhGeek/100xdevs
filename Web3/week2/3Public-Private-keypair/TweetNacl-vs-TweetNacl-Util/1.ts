//tweetnacl
//   => It provides fast, secure cryptographic primitives, but works only with Uint8Array
//   => Main features
//          =>Public-key encryption (asymmetric)
//          =>Secret-key encryption (symmetric)
//          =>Digital signatures
//          =>Hashing
//          =>Secure random key generation

// Example
import nacl from "tweetnacl";

const keyPair = nacl.sign.keyPair();
const message = new Uint8Array([1, 2, 3]);
const signature = nacl.sign.detached(message, keyPair.secretKey);

const isValid = nacl.sign.detached.verify(
  message,
  signature,
  keyPair.publicKey
);
console.log(isValid)



//tweetnacl-util
        //tweetnacl-util is a helper/utility package. Problem with tweetnacl is that it only understands Uint8Array. tweetnacl-util converts strings ⇄ Uint8Array

        // Features
                // => UTF-8 encoding / decoding
                // => Base64 encoding / decoding


        //Example
// import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

const message2 = "hello web3";
const messageUint8 = naclUtil.decodeUTF8(message2);

const keyPair2 = nacl.sign.keyPair();
const signature2 = nacl.sign.detached(messageUint8, keyPair2.secretKey);

const isValid2 = nacl.sign.detached.verify(
  messageUint8,
  signature2,
  keyPair2.publicKey
);

console.log(isValid2)
