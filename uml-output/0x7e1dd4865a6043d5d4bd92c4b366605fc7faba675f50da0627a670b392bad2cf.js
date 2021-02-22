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
      functionName: 'swapExactAmountIn',
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
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x22b1c8c1227a0000"),
              rawAsBN: BigNumber("0x22b1c8c1227a0000")
            }
          }
        },
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x676F5c2Fe8eAE4e72fd9CDD9A78A307C4f17BB20',
              rawAsHex: '0x000000000000000000000000676f5c2fe8eae4e72fd9cdd9a78a307c4f17bb20'
            }
          }
        },
        {
          name: 'minAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x19bff2ff57968c0000"),
              rawAsBN: BigNumber("0x19bff2ff57968c0000")
            }
          }
        },
        {
          name: 'maxPrice',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0xad78ebc5ac6200000"),
              rawAsBN: BigNumber("0xad78ebc5ac6200000")
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
                              asBN: BigNumber("0x22b1c8c1227a0000"),
                              rawAsBN: BigNumber("0x22b1c8c1227a0000")
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
                                      asBN: BigNumber("0xa99dfa24ddc78000"),
                                      rawAsBN: BigNumber("0xa99dfa24ddc78000")
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
                                      asBN: BigNumber("0x22b1c8c1227a0000"),
                                      rawAsBN: BigNumber("0x22b1c8c1227a0000")
                                    }
                                  }
                                }
                              ],
                              returnKind: 'return',
                              returnValues: [
                                {
                                  name: undefined,
                                  value: {
                                    type: {
                                      typeClass: 'bool',
                                      typeHint: 'bool'
                                    },
                                    kind: 'error',
                                    error: {
                                      kind: 'BoolPaddingError',
                                      paddingType: 'left',
                                      raw: '0x00000000000000000000000000000000000000000000000086ec3163bb4d8000'
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
                                      asBN: BigNumber("0x2d89577d7d4020000"),
                                      rawAsBN: BigNumber("0x2d89577d7d4020000")
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
                                      asBN: BigNumber("0x22b1c8c1227a0000"),
                                      rawAsBN: BigNumber("0x22b1c8c1227a0000")
                                    }
                                  }
                                }
                              ],
                              returnKind: 'return',
                              returnValues: [
                                {
                                  name: undefined,
                                  value: {
                                    type: {
                                      typeClass: 'bool',
                                      typeHint: 'bool'
                                    },
                                    kind: 'error',
                                    error: {
                                      kind: 'BoolPaddingError',
                                      paddingType: 'left',
                                      raw: '0x000000000000000000000000000000000000000000000002fb474098f67c0000'
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
                      address: '0x676F5c2Fe8eAE4e72fd9CDD9A78A307C4f17BB20',
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
                              asBN: BigNumber("0x19cc85107f3f88bb18"),
                              rawAsBN: BigNumber("0x19cc85107f3f88bb18")
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
                                      asBN: BigNumber("0x23934c5a09da1900000"),
                                      rawAsBN: BigNumber("0x23934c5a09da1900000")
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
                                      asBN: BigNumber("0x19cc85107f3f88bb18"),
                                      rawAsBN: BigNumber("0x19cc85107f3f88bb18")
                                    }
                                  }
                                }
                              ],
                              returnKind: 'return',
                              returnValues: [
                                {
                                  name: undefined,
                                  value: {
                                    type: {
                                      typeClass: 'bool',
                                      typeHint: 'bool'
                                    },
                                    kind: 'error',
                                    error: {
                                      kind: 'BoolPaddingError',
                                      paddingType: 'left',
                                      raw: '0x00000000000000000000000000000000000000000000021f6840901e620744e8'
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
                                    value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                                      asBN: BigNumber("0x19cc85107f3f88bb18"),
                                      rawAsBN: BigNumber("0x19cc85107f3f88bb18")
                                    }
                                  }
                                }
                              ],
                              returnKind: 'return',
                              returnValues: [
                                {
                                  name: undefined,
                                  value: {
                                    type: {
                                      typeClass: 'bool',
                                      typeHint: 'bool'
                                    },
                                    kind: 'error',
                                    error: {
                                      kind: 'BoolPaddingError',
                                      paddingType: 'left',
                                      raw: '0x000000000000000000000000000000000000000000000019cc85107f3f88bb18'
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
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
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
                      asBN: BigNumber("0x277f21d862b9f3f4c2986c799155a000"),
                      rawAsBN: BigNumber("0x277f21d862b9f3f4c2986c799155a000")
                    }
                  }
                }
              ],
              returnKind: 'unwind'
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
          returnKind: 'unwind'
        }
      ],
      returnKind: 'unwind',
      returnValues: [
        {
          name: 'tokenAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x19cc85107f3f88bb18"),
              rawAsBN: BigNumber("0x19cc85107f3f88bb18")
            }
          }
        },
        {
          name: 'spotPriceAfter',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x138d36887c3ebc"),
              rawAsBN: BigNumber("0x138d36887c3ebc")
            }
          }
        }
      ]
    }
  ],
  origin: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11'
}

module.exports = txlog;
