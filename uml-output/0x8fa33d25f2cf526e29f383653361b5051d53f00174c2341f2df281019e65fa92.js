const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xF74E6fF6B161A368a19731CAc1770FbC86aC13D4',
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
              asBN: BigNumber("0x8ac7230489e80000"),
              rawAsBN: BigNumber("0x8ac7230489e80000")
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
                  address: '0xf42947cbF7666eFC3DF2974a0c5509F103B947aE',
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
                          asAddress: '0xFc71743FA5C0B8ED708b2af63D5426AecB625023',
                          rawAsHex: '0x000000000000000000000000fc71743fa5c0b8ed708b2af63d5426aecb625023'
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
                          asBN: BigNumber("0x6f05b59d3b20000"),
                          rawAsBN: BigNumber("0x6f05b59d3b20000")
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
                                  asBN: BigNumber("0x4c53ecdc18a60000"),
                                  rawAsBN: BigNumber("0x4c53ecdc18a60000")
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
                                  asBN: BigNumber("0x6f05b59d3b20000"),
                                  rawAsBN: BigNumber("0x6f05b59d3b20000")
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
                                  raw: '0x0000000000000000000000000000000000000000000000004563918244f40000'
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
                                  asBN: BigNumber("0x6f05b59d3b20000"),
                                  rawAsBN: BigNumber("0x6f05b59d3b20000")
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
                                  asBN: BigNumber("0x6f05b59d3b20000"),
                                  rawAsBN: BigNumber("0x6f05b59d3b20000")
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
                                  raw: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000'
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
                  address: '0x9d87788C9689A0e5CB0719F4DEedb2Af2CF88efc',
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
                          asAddress: '0xFc71743FA5C0B8ED708b2af63D5426AecB625023',
                          rawAsHex: '0x000000000000000000000000fc71743fa5c0b8ed708b2af63d5426aecb625023'
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
                          asBN: BigNumber("0x1158e460913cfffec"),
                          rawAsBN: BigNumber("0x1158e460913cfffec")
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
                                  asBN: BigNumber("0xbed1d0263d9f00000"),
                                  rawAsBN: BigNumber("0xbed1d0263d9f00000")
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
                                  asBN: BigNumber("0x1158e460913cfffec"),
                                  rawAsBN: BigNumber("0x1158e460913cfffec")
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
                                  raw: '0x00000000000000000000000000000000000000000000000ad78ebc5ac6200014'
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
                                  asBN: BigNumber("0x1a055690d9db80000"),
                                  rawAsBN: BigNumber("0x1a055690d9db80000")
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
                                  asBN: BigNumber("0x1158e460913cfffec"),
                                  rawAsBN: BigNumber("0x1158e460913cfffec")
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
                                  raw: '0x000000000000000000000000000000000000000000000002b5e3af16b187ffec'
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
                      asBN: BigNumber("0x5f68e8131ecf80000"),
                      rawAsBN: BigNumber("0x5f68e8131ecf80000")
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
                      asBN: BigNumber("0x8ac7230489e80000"),
                      rawAsBN: BigNumber("0x8ac7230489e80000")
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
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
                }
              }
            },
            {
              name: 'tokenWeightIn',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
  origin: '0xFc71743FA5C0B8ED708b2af63D5426AecB625023'
}

module.exports = txlog;
