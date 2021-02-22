const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x32091C89Fad0E1722aFDE2525801c9b4b5aD29eb',
      contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'swapExactAmountIn',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xeAEA508B7C938d903E5C4B615C8AF7c26bfAB4Fe',
              rawAsHex: '0x000000000000000000000000eaea508b7c938d903e5c4b615c8af7c26bfab4fe'
            }
          }
        },
        {
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0xde0b6b3a7640000"),
              rawAsBN: BigNumber("0xde0b6b3a7640000")
            }
          }
        },
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x85a20435894CDA7E83f7408Ed6460F23dA8Ee73e',
              rawAsHex: '0x00000000000000000000000085a20435894cda7e83f7408ed6460f23da8ee73e'
            }
          }
        },
        {
          name: 'minAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x1bc16d674ec80000"),
              rawAsBN: BigNumber("0x1bc16d674ec80000")
            }
          }
        },
        {
          name: 'maxPrice',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x30927f74c9de0000"),
              rawAsBN: BigNumber("0x30927f74c9de0000")
            }
          }
        }
      ],
      actions: [
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callinternal',
              actions: [
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: 'calcInGivenOut',
                  contractName: 'BMath',
                  arguments: [
                    {
                      name: 'tokenBalanceIn',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: {
                          asBN: BigNumber("0xde0b6b3a7640000"),
                          rawAsBN: BigNumber("0xde0b6b3a7640000")
                        }
                      }
                    },
                    {
                      name: 'tokenWeightIn',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: {
                          asBN: BigNumber("0xde0b6b3a7640000"),
                          rawAsBN: BigNumber("0xde0b6b3a7640000")
                        }
                      }
                    },
                    {
                      name: 'tokenBalanceOut',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    },
                    {
                      name: 'tokenWeightOut',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    },
                    {
                      name: 'tokenAmountOut',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    },
                    {
                      name: 'swapFee',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: [
                    {
                      name: undefined,
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
                      }
                    }
                  ]
                }
              ],
              functionName: '_mintPoolShare',
              contractName: 'BPool',
              arguments: [
                {
                  name: 'amount',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: {
                      asBN: BigNumber("0x259da6542d43623e66a74390c2237800"),
                      rawAsBN: BigNumber("0x259da6542d43623e66a74390c2237800")
                    }
                  }
                }
              ],
              returnKind: 'revert',
              error: {
                kind: 'revert',
                abi: {
                  name: 'Error',
                  type: 'error',
                  inputs: [
                    {
                      name: '',
                      type: 'string',
                      internalType: 'string'
                    }
                  ]
                },
                status: false,
                arguments: [
                  {
                    value: {
                      type: { typeClass: 'string', typeHint: 'string' },
                      kind: 'value',
                      value: { kind: 'valid', asString: 'ERR_LIMIT_OUT' }
                    }
                  }
                ],
                decodingMode: 'full'
              }
            }
          ],
          functionName: '_mintPoolShare',
          contractName: 'BPool',
          arguments: [
            {
              name: 'amount',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xc097ce7bc90715ba3bf9f5695f7800"),
                  rawAsBN: BigNumber("0xc097ce7bc90715ba3bf9f5695f7800")
                }
              }
            }
          ],
          returnKind: 'unwind'
        }
      ],
      returnKind: 'unwind'
    }
  ],
  origin: '0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8'
}

module.exports = txlog;
