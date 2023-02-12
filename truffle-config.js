module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    mainnet: {
      host: "127.0.0.1",
      port:  8545,
      network_id: 1,
     },
     testnet: {
      host: "127.0.0.1",
      port:  8545,
      network_id: 3,
     },
  },
  
  compilers: {
    solc: {
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
}
