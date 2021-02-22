const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x557B1a31d0EAb447BcB77e7B3Fa94b3DBAF3A542',
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
                  address: '0xf8A92c8EDDe80F8C56D277ff0054cb5BBa7aE864',
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
                          asAddress: '0x921694D16E730E9eDa0bd318199Fe02705f079dd',
                          rawAsHex: '0x000000000000000000000000921694d16e730e9eda0bd318199fe02705f079dd'
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
                          asBN: BigNumber("0x8ac7230489e8000a"),
                          rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  asBN: BigNumber("0x36c090d0ca68880000"),
                                  rawAsBN: BigNumber("0x36c090d0ca68880000")
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
                                  asBN: BigNumber("0x8ac7230489e8000a"),
                                  rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  raw: '0x00000000000000000000000000000000000000000000003635c9adc5de9ffff6'
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
                                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff"),
                                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff")
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
                                  asBN: BigNumber("0x8ac7230489e8000a"),
                                  rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a21600009'
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
                  address: '0x74ddd28E441f1aD10b4C36Dce465F9414140BC01',
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
                          asAddress: '0x921694D16E730E9eDa0bd318199Fe02705f079dd',
                          rawAsHex: '0x000000000000000000000000921694d16e730e9eda0bd318199fe02705f079dd'
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
                          asBN: BigNumber("0x8ac7230489e8000a"),
                          rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  asBN: BigNumber("0x36c090d0ca68880000"),
                                  rawAsBN: BigNumber("0x36c090d0ca68880000")
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
                                  asBN: BigNumber("0x8ac7230489e8000a"),
                                  rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  raw: '0x00000000000000000000000000000000000000000000003635c9adc5de9ffff6'
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
                                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff"),
                                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff")
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
                                  asBN: BigNumber("0x8ac7230489e8000a"),
                                  rawAsBN: BigNumber("0x8ac7230489e8000a")
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
                                  raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a21600009'
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
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
