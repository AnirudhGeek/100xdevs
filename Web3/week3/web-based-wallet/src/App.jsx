import React from 'react'
import SolanaWallet from './SolanaWallet'
import ETHwallet from './ETHwallet'


const App = () => {

  return (
    <div className='text-2xl mt-10 flex justify-center items-center gap-50'>
      <SolanaWallet/>
      <ETHwallet/>
    </div>
  )
}

export default App
