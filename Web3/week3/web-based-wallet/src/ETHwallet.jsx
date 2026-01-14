import { mnemonicToSeed } from "bip39";
import { useState } from "react";

import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";

const ETHwallet = () => {
  const [mnemonic, setMnemonic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  async function handleClick() {
    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    setCurrentIndex(currentIndex + 1);
    setAddresses([...addresses, wallet.address]);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-gray-800 px-4 py-2 text-2xl hover:cursor-pointer text-white border-black rounded-lg hover:bg-black"
      >
        Add new ethereum wallet
      </button>
      {addresses.map((p) => (
        <div>Eth - {p}</div>
      ))}
    </div>
  );
};

export default ETHwallet;
