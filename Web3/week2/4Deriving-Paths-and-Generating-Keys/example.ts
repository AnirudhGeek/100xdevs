import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import * as nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`;  //Derivation path for solana
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secretKey).publicKey.toBase58());
}

//practiced making HD wallet logic
