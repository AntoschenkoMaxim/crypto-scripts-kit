export const scrollBridgeAbi = [
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_value', type: 'uint256' },
      { internalType: 'bytes', name: '_message', type: 'bytes' },
      { internalType: 'uint256', name: '_gasLimit', type: 'uint256' },
    ],
    name: 'sendMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;
