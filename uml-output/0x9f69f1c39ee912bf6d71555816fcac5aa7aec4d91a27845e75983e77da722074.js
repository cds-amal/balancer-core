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
      functionName: 'joinswapPoolAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xe422eFaBBb7dFf499686446157F107b5c26FE2e8',
              rawAsHex: '0x000000000000000000000000e422efabbb7dff499686446157f107b5c26fe2e8'
            }
          }
        },
        {
          name: 'poolAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x98a7d9b8314c2710"),
              rawAsBN: BigNumber("0x98a7d9b8314c2710")
            }
          }
        },
        {
          name: 'maxAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
              rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
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
                      address: '0xe422eFaBBb7dFf499686446157F107b5c26FE2e8',
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
                              asAddress: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896',
                              rawAsHex: '0x0000000000000000000000009e18775ab5f17ac9f8d63ef132c700204d2a1896'
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
                              asAddress: '0xc3fD4370DBD845d346ad20FE2172a4658D40056e',
                              rawAsHex: '0x000000000000000000000000c3fd4370dbd845d346ad20fe2172a4658d40056e'
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
                              asBN: BigNumber("0x22fd512f614456f8"),
                              rawAsBN: BigNumber("0x22fd512f614456f8")
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
                                      asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff59776f94274fffff"),
                                      rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff59776f94274fffff")
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
                                      asBN: BigNumber("0x22fd512f614456f8"),
                                      rawAsBN: BigNumber("0x22fd512f614456f8")
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
                                      raw: '0xffffffffffffffffffffffffffffffffffffffffffffffff367a1e64c60ba907'
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
                                      asBN: BigNumber("0xa688906bd8b00000"),
                                      rawAsBN: BigNumber("0xa688906bd8b00000")
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
                                      asBN: BigNumber("0x22fd512f614456f8"),
                                      rawAsBN: BigNumber("0x22fd512f614456f8")
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
                                      raw: '0x000000000000000000000000000000000000000000000000c985e19b39f456f8'
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
                          asBN: BigNumber("0x1e55597b2e1a4d83f20aa3c06e06000"),
                          rawAsBN: BigNumber("0x1e55597b2e1a4d83f20aa3c06e06000")
                        }
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
                      asBN: BigNumber("0xc9816711dbd368d8"),
                      rawAsBN: BigNumber("0xc9816711dbd368d8")
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
                      asBN: BigNumber("0xa688906bd8b00000"),
                      rawAsBN: BigNumber("0xa688906bd8b00000")
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
                      asBN: BigNumber("0x22f8d6a6032368d8"),
                      rawAsBN: BigNumber("0x22f8d6a6032368d8")
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
              returnKind: 'unwind'
            }
          ],
          functionName: '_burn',
          contractName: 'BTokenBase',
          arguments: [
            {
              name: 'amt',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x10cac896d2519e12"),
                  rawAsBN: BigNumber("0x10cac896d2519e12")
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
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x22fd512f614456f8"),
              rawAsBN: BigNumber("0x22fd512f614456f8")
            }
          }
        }
      ]
    }
  ],
  origin: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896'
}

module.exports = txlog;
