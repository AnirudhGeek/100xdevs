"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bip39_1 = require("bip39");
var ed25519_hd_key_1 = require("ed25519-hd-key");
var nacl = require("tweetnacl");
var web3_js_1 = require("@solana/web3.js");
var mnemonic = (0, bip39_1.generateMnemonic)();
var seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
for (var i = 0; i < 4; i++) {
    var path = "m/44'/501'/".concat(i, "'/0'");
    var derivedSeed = (0, ed25519_hd_key_1.derivePath)(path, seed.toString("hex")).key;
    var secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(web3_js_1.Keypair.fromSecretKey(secretKey).publicKey.toBase58());
}
