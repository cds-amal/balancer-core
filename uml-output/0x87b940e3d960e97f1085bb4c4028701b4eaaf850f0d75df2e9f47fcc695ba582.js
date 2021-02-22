const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
      contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'swapExactAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xa91a65aeC9a6D0f355B58D8055673FC8d01d6477',
              rawAsHex: '0x000000000000000000000000a91a65aec9a6d0f355b58d8055673fc8d01d6477'
            }
          }
        },
        {
          name: 'maxAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x29a2241af62c0000"),
              rawAsBN: BigNumber("0x29a2241af62c0000")
            }
          }
        },
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
              rawAsHex: '0x000000000000000000000000fda3860b6f5109856ed53c6126c9ae489898d953'
            }
          }
        },
        {
          name: 'tokenAmountOut',
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
          name: 'maxPrice',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x1b1ae4d6e2ef500000"),
              rawAsBN: BigNumber("0x1b1ae4d6e2ef500000")
            }
          }
        }
      ],
      actions: [
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callexternal',
              address: '0xa91a65aeC9a6D0f355B58D8055673FC8d01d6477',
              contextHash: '0x9a47ecfc3a4d14269a7eea63cd22411791f5aa3d34740510739468adb830c5b9',
              value: BigNumber("0x0"),
              kind: 'function',
              isDelegate: false,
              functionName: 'transferFrom',
              contractName: 'TToken',
              arguments: [
                {
                  name: 'src',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11',
                      rawAsHex: '0x00000000000000000000000080f5dc6b0db5139fb834b1556b5e68e291040b11'
                    }
                  }
                },
                {
                  name: 'dst',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
                      rawAsHex: '0x0000000000000000000000005c533a481ec8f95b63204aa15bed110a3e9072b4'
                    }
                  }
                },
                {
                  name: 'amt',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: {
                      asBN: BigNumber("0x26475c56c1a421e5"),
                      rawAsBN: BigNumber("0x26475c56c1a421e5")
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
                      actions: [],
                      functionName: 'sub',
                      contractName: 'TToken',
                      arguments: [
                        {
                          name: 'a',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x86ec3163bb4d8000"),
                              rawAsBN: BigNumber("0x86ec3163bb4d8000")
                            }
                          }
                        },
                        {
                          name: 'b',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x26475c56c1a421e5"),
                              rawAsBN: BigNumber("0x26475c56c1a421e5")
                            }
                          }
                        }
                      ],
                      returnKind: 'return',
                      returnValues: [
                        {
                          name: undefined,
                          value: {
                            type: { typeClass: 'bool', typeHint: 'bool' },
                            kind: 'error',
                            error: {
                              kind: 'BoolPaddingError',
                              paddingType: 'left',
                              raw: '0x00000000000000000000000000000000000000000000000060a4d50cf9a95e1b'
                            }
                          }
                        }
                      ],
                      waitingForFunctionDefinition: false
                    },
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'add',
                      contractName: 'TToken',
                      arguments: [
                        {
                          name: 'a',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x2fb474098f67c0000"),
                              rawAsBN: BigNumber("0x2fb474098f67c0000")
                            }
                          }
                        },
                        {
                          name: 'b',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x26475c56c1a421e5"),
                              rawAsBN: BigNumber("0x26475c56c1a421e5")
                            }
                          }
                        }
                      ],
                      returnKind: 'return',
                      returnValues: [
                        {
                          name: undefined,
                          value: {
                            type: { typeClass: 'bool', typeHint: 'bool' },
                            kind: 'error',
                            error: {
                              kind: 'BoolPaddingError',
                              paddingType: 'left',
                              raw: '0x000000000000000000000000000000000000000000000003218e9cefb82021e5'
                            }
                          }
                        }
                      ],
                      waitingForFunctionDefinition: false
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              returnValues: [
                {
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: true }
                  }
                }
              ],
              returnKind: 'return'
            },
            {
              type: 'callexternal',
              address: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
              contextHash: '0x9a47ecfc3a4d14269a7eea63cd22411791f5aa3d34740510739468adb830c5b9',
              value: BigNumber("0x0"),
              kind: 'function',
              isDelegate: false,
              functionName: 'transfer',
              contractName: 'TToken',
              arguments: [
                {
                  name: 'dst',
                  value: {
                    type: {
                      typeClass: 'address',
                      kind: 'specific',
                      payable: false
                    },
                    kind: 'value',
                    value: {
                      asAddress: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11',
                      rawAsHex: '0x00000000000000000000000080f5dc6b0db5139fb834b1556b5e68e291040b11'
                    }
                  }
                },
                {
                  name: 'amt',
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
                }
              ],
              actions: [
                {
                  type: 'callinternal',
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'sub',
                      contractName: 'TToken',
                      arguments: [
                        {
                          name: 'a',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0x1236efcbcbb340000"),
                              rawAsBN: BigNumber("0x1236efcbcbb340000")
                            }
                          }
                        },
                        {
                          name: 'b',
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
                        }
                      ],
                      returnKind: 'return',
                      returnValues: [
                        {
                          name: undefined,
                          value: {
                            type: { typeClass: 'bool', typeHint: 'bool' },
                            kind: 'error',
                            error: {
                              kind: 'BoolPaddingError',
                              paddingType: 'left',
                              raw: '0x000000000000000000000000000000000000000000000001158e460913d00000'
                            }
                          }
                        }
                      ],
                      waitingForFunctionDefinition: false
                    },
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'add',
                      contractName: 'TToken',
                      arguments: [
                        {
                          name: 'a',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: {
                              asBN: BigNumber("0xe172ffbe9bb5000"),
                              rawAsBN: BigNumber("0xe172ffbe9bb5000")
                            }
                          }
                        },
                        {
                          name: 'b',
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
                        }
                      ],
                      returnKind: 'return',
                      returnValues: [
                        {
                          name: undefined,
                          value: {
                            type: { typeClass: 'bool', typeHint: 'bool' },
                            kind: 'error',
                            error: {
                              kind: 'BoolPaddingError',
                              paddingType: 'left',
                              raw: '0x0000000000000000000000000000000000000000000000001bf7e6af911f5000'
                            }
                          }
                        }
                      ],
                      waitingForFunctionDefinition: false
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              returnValues: [
                {
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: true }
                  }
                }
              ],
              returnKind: 'return'
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
                  asBN: BigNumber("0xc097ce7bc90715ba36a62bdc884000"),
                  rawAsBN: BigNumber("0xc097ce7bc90715ba36a62bdc884000")
                }
              }
            }
          ],
          returnKind: 'return'
        }
      ],
      returnKind: 'unwind',
      returnValues: [
        {
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x26475c56c1a421e5"),
              rawAsBN: BigNumber("0x26475c56c1a421e5")
            }
          }
        },
        {
          name: 'spotPriceAfter',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x2832cd9564e6a68b"),
              rawAsBN: BigNumber("0x2832cd9564e6a68b")
            }
          }
        }
      ]
    }
  ],
  origin: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11'
}

module.exports = txlog;
