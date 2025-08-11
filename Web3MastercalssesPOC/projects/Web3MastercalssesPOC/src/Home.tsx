// src/components/Home.tsx

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
// import ConnectWallet from './ConnectWallet'
import ConnectWallet from './components/ConnectWallet'
// import Transact from './Transact'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState(false)
  const [openTransactModal, setOpenTransactModal] = useState(false)
  const [openMintModal, setOpenMintModal] = useState(false)

  const { activeAddress } = useWallet()

  return (
    
  <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(to right, #C06C84, #355C7D)' }}
    >
    {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500 px-4"> */}
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-teal-600">MasterPass 🎟️</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Your ticket to join the next-gen Web3 event. Connect, explore, and get inspired!
        </p>

        <div className="space-y-4">
          <button
            className="btn btn-primary w-full"
            onClick={() => setOpenWalletModal(true)}
            data-test-id="connect-wallet"
          >
            Connect Wallet
          </button>

          {activeAddress && (
            <>
              <button
                className="btn btn-accent w-full"
                onClick={() => setOpenTransactModal(true)}
                data-test-id="open-transact-modal"
              >
                Send Payment (1 ALGO)
              </button>

              <button
                className="btn btn-success w-full"
                onClick={() => setOpenMintModal(true)}
                data-test-id="open-mint-modal"
              >
                Mint MasterPass NFT
              </button>
            </>
          )}
        </div>

        {/* Modals */}
        <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
        <Transact openModal={openTransactModal} setModalState={setOpenTransactModal} />
        <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      </div>
    </div>
  )
}

export default Home
