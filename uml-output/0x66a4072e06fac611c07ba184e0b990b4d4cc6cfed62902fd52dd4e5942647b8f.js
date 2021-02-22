const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xc3fD4370DBD845d346ad20FE2172a4658D40056e',
      contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'exitswapPoolAmountIn',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xdE35a13412F40550019017b808a49046495d2DC2',
              rawAsHex: '0x000000000000000000000000de35a13412f40550019017b808a49046495d2dc2'
            }
          }
        },
        {
          name: 'poolAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0xa7ebd5e43639f830"),
              rawAsBN: BigNumber("0xa7ebd5e43639f830")
            }
          }
        },
        {
          name: 'minAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
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
                      type: 'callinternal',
                      actions: [
                        {
                          type: 'callinternal',
                          actions: [
                            {
                              type: 'callexternal',
                              address: '0xdE35a13412F40550019017b808a49046495d2DC2',
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
                                      asAddress: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896',
                                      rawAsHex: '0x0000000000000000000000009e18775ab5f17ac9f8d63ef132c700204d2a1896'
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
                                      asBN: BigNumber("0xcc1b9b842c7d2ec"),
                                      rawAsBN: BigNumber("0xcc1b9b842c7d2ec")
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
                                              asBN: BigNumber("0x432ca08912eef010"),
                                              rawAsBN: BigNumber("0x432ca08912eef010")
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
                                              asBN: BigNumber("0xcc1b9b842c7d2ec"),
                                              rawAsBN: BigNumber("0xcc1b9b842c7d2ec")
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
                                              raw: '0x000000000000000000000000000000000000000000000000366ae6d0d0271d24'
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
                                              asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffbcd35f76ed110fef"),
                                              rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffbcd35f76ed110fef")
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
                                              asBN: BigNumber("0xcc1b9b842c7d2ec"),
                                              rawAsBN: BigNumber("0xcc1b9b842c7d2ec")
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
                                              raw: '0xffffffffffffffffffffffffffffffffffffffffffffffffc995192f2fd8e2db'
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
                                    type: {
                                      typeClass: 'bool',
                                      typeHint: 'bool'
                                    },
                                    kind: 'value',
                                    value: { asBoolean: true }
                                  }
                                }
                              ],
                              returnKind: 'return'
                            }
                          ],
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
                                  asBN: BigNumber("0x68f365ae9ee30efcc"),
                                  rawAsBN: BigNumber("0x68f365ae9ee30efcc")
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
                                  asBN: BigNumber("0xa7ebd5e43639f830"),
                                  rawAsBN: BigNumber("0xa7ebd5e43639f830")
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
                                value: {
                                  asBN: BigNumber("0x5e74a8505b7f6f79c"),
                                  rawAsBN: BigNumber("0x5e74a8505b7f6f79c")
                                }
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
                          returnKind: 'return'
                        }
                      ],
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
                              asBN: BigNumber("0xa7ebd5e43639f830"),
                              rawAsBN: BigNumber("0xa7ebd5e43639f830")
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
                              asBN: BigNumber("0xa7ebd5e43639f830"),
                              rawAsBN: BigNumber("0xa7ebd5e43639f830")
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
                      returnKind: 'unwind'
                    }
                  ],
                  functionName: '_pushUnderlying',
                  contractName: 'BPool',
                  arguments: [
                    {
                      name: 'erc20',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x000000000000000000000000A7eBd5e43639F830',
                          rawAsHex: '0x000000000000000000000000000000000000000000000000a7ebd5e43639f830'
                        }
                      }
                    },
                    {
                      name: 'to',
                      value: {
                        type: {
                          typeClass: 'address',
                          kind: 'specific',
                          payable: false
                        },
                        kind: 'value',
                        value: {
                          asAddress: '0x0000000000000000000000000000000000000001',
                          rawAsHex: '0x0000000000000000000000000000000000000000000000000000000000000001'
                        }
                      }
                    },
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
                          asBN: BigNumber("0x10000000000000000000000000000000000000000"),
                          rawAsBN: BigNumber("0x10000000000000000000000000000000000000000")
                        }
                      }
                    }
                  ],
                  returnKind: 'unwind'
                }
              ],
              functionName: '_burn',
              contractName: 'BTokenBase',
              arguments: [
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
                      asBN: BigNumber("0xb3db2b55bfeb144"),
                      rawAsBN: BigNumber("0xb3db2b55bfeb144")
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
                  asBN: BigNumber("0xc097ce7bc90715b6c3ccbce9d90000"),
                  rawAsBN: BigNumber("0xc097ce7bc90715b6c3ccbce9d90000")
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
              asBN: BigNumber("0xcc1b9b842c7d2ec"),
              rawAsBN: BigNumber("0xcc1b9b842c7d2ec")
            }
          }
        }
      ]
    }
  ],
  origin: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896'
}

module.exports = txlog;
