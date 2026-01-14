import React, { useEffect, useState } from "react";
import { generateMnemonic, mnemonicToSeed, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";

const SolanaWallet = () => {
  const [mnemonic, setMnemonic] = useState(null);
  const [index, setIndex] = useState(1);
  const [publicKeys, setPublicKeys] = useState([]);

  useEffect(()=>{
    setMnemonic(generateMnemonic());

  },[])
  const seed = mnemonic ? mnemonicToSeedSync(mnemonic) : null;

  async function handleClick() {
    // console.log(mnemonic)
    // console.log(seed)
    console.log(index);
    
    // console.log("ehy");
    const path = `m/44'/501'/${index}'/0'`; //derivation path for solana
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
    console.log(publicKey);
    setPublicKeys(prev=>[...prev,publicKey]);
    console.log(publicKeys);
    const nextIndex = index+1
    setIndex(nextIndex);

  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-gray-800 px-4 py-2 text-2xl hover:cursor-pointer text-white border-black rounded-lg hover:bg-black"
      >
        Add new solana wallet
      </button>
      {publicKeys?.length > 0
        ? publicKeys?.map((singleKey, index) => (
            <ul key={index}>{singleKey}</ul>
          ))
        : null}
    </div>
  );
};

export default SolanaWallet;
