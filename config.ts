export const generalConfig = {
  ethrpc: 'https://rpc.ankr.com/eth',
  baserpc: 'https://rpc.ankr.com/base',
  sleepFrom: 60,
  sleepTo: 150,
  shuffleWallets: false,
  shuffleCustomModules: true,
  maxGas: 15,
  maxAddressTxCount: 100,
  countModulesFrom: 1,
  countModulesTo: 3,
  customModules: ['l2telegraph', 'mintfun', 'uniswap'],
};

export const bridgeConfig = {
  type: 'official',
  stargateFrom: 'arbitrum', // 'arbitrum', 'optimism', 'random'
  bridgeFrom: 0.001,
  bridgeTo: 0.002,
  stargateBridgeFrom: 0.003,
  stargateBridgeTo: 0.004,
  maxGas: 10, // for official bridge Eth -> Base
};

export const binanceConfig = {
  key: '',
  secret: '',
  withdrawFrom: 0.001, // min: 0.001
  withdrawTo: 0.0013,
  useRefill: false,
};

export const bungeeConfig = {
  refuelFrom: 0.0025, // min: 0.0025
  refuelTo: 0.0035,
  destinationNetwork: 'random', //arbitrum, base, optimism, zksync
};

export const baseBridgeConfig = {
  bridgeFrom: 0.001,
  bridgeTo: 0.0012,
};

export const zoraBridgeConfig = {
  bridgeFrom: 0.001,
  bridgeTo: 0.0012,
};
