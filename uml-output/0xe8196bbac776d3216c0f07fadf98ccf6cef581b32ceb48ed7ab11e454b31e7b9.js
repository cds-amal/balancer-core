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
      functionName: 'exitPool',
      contractName: 'BPool',
      arguments: [
        {
          name: 'poolAmountIn',
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
          name: 'minAmountsOut',
          value: {
            type: {
              typeClass: 'array',
              baseType: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
              kind: 'dynamic',
              location: 'calldata',
              typeHint: 'uint256[]'
            },
            kind: 'value',
            value: [
              {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              },
              {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            ]
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
                          asBN: BigNumber("0x8e1bc9bf040000"),
                          rawAsBN: BigNumber("0x8e1bc9bf040000")
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
                                  asBN: BigNumber("0x3810f6985c940000"),
                                  rawAsBN: BigNumber("0x3810f6985c940000")
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
                                  asBN: BigNumber("0x8e1bc9bf040000"),
                                  rawAsBN: BigNumber("0x8e1bc9bf040000")
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
                                  raw: '0x0000000000000000000000000000000000000000000000003782dace9d900000'
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
                                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffc7ef0967a36bffff"),
                                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffc7ef0967a36bffff")
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
                                  asBN: BigNumber("0x8e1bc9bf040000"),
                                  rawAsBN: BigNumber("0x8e1bc9bf040000")
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
                                  raw: '0xffffffffffffffffffffffffffffffffffffffffffffffffc87d2531626fffff'
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
                  address: '0xe422eFaBBb7dFf499686446157F107b5c26FE2e8',
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
                          asBN: BigNumber("0x1aa535d3d0c0000"),
                          rawAsBN: BigNumber("0x1aa535d3d0c0000")
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
                                  asBN: BigNumber("0xa832e3c915bc0000"),
                                  rawAsBN: BigNumber("0xa832e3c915bc0000")
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
                                  asBN: BigNumber("0x1aa535d3d0c0000"),
                                  rawAsBN: BigNumber("0x1aa535d3d0c0000")
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
                                  raw: '0x000000000000000000000000000000000000000000000000a688906bd8b00000'
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
                                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff57cd1c36ea43ffff"),
                                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff57cd1c36ea43ffff")
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
                                  asBN: BigNumber("0x1aa535d3d0c0000"),
                                  rawAsBN: BigNumber("0x1aa535d3d0c0000")
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
                                  raw: '0xffffffffffffffffffffffffffffffffffffffffffffffff59776f94274fffff'
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
                      asBN: BigNumber("0x579a814e10a740000"),
                      rawAsBN: BigNumber("0x579a814e10a740000")
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
                    value: {
                      asBN: BigNumber("0x56bc75e2d63100000"),
                      rawAsBN: BigNumber("0x56bc75e2d63100000")
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            },
            {
              name: 'tokenWeightOut',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            },
            {
              name: 'tokenAmountOut',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            },
            {
              name: 'swapFee',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            }
          ],
          returnKind: 'unwind'
        }
      ],
      returnKind: 'unwind',
      returnValues: []
    }
  ],
  origin: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896'
}

module.exports = txlog;
