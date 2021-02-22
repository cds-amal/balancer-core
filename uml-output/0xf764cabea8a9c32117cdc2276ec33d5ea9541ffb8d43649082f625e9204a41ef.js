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
      functionName: 'exitswapExternAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x74ddd28E441f1aD10b4C36Dce465F9414140BC01',
              rawAsHex: '0x00000000000000000000000074ddd28e441f1ad10b4c36dce465f9414140bc01'
            }
          }
        },
        {
          name: 'tokenAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x617116f8f7acfd260"),
              rawAsBN: BigNumber("0x617116f8f7acfd260")
            }
          }
        },
        {
          name: 'maxPoolAmountIn',
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
            },
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
                                  asBN: BigNumber("0x617116f8f7acfd260"),
                                  rawAsBN: BigNumber("0x617116f8f7acfd260")
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
                                          asBN: BigNumber("0x3bbf512563d6159112"),
                                          rawAsBN: BigNumber("0x3bbf512563d6159112")
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
                                          asBN: BigNumber("0x617116f8f7acfd260"),
                                          rawAsBN: BigNumber("0x617116f8f7acfd260")
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
                                          raw: '0x000000000000000000000000000000000000000000000035a83fb5d45b45beb2'
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
                                          asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc440aeda9c29ea6eed"),
                                          rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc440aeda9c29ea6eed")
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
                                          asBN: BigNumber("0x617116f8f7acfd260"),
                                          rawAsBN: BigNumber("0x617116f8f7acfd260")
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
                                          raw: '0xffffffffffffffffffffffffffffffffffffffffffffffca57c04a2ba4ba414d'
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
                              asBN: BigNumber("0x5f97828197a5d031c"),
                              rawAsBN: BigNumber("0x5f97828197a5d031c")
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
                              asBN: BigNumber("0x98f26a68d53d1834"),
                              rawAsBN: BigNumber("0x98f26a68d53d1834")
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
                              asBN: BigNumber("0x56085bdb0a51feae8"),
                              rawAsBN: BigNumber("0x56085bdb0a51feae8")
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
                          asBN: BigNumber("0x98f26a68d53d1834"),
                          rawAsBN: BigNumber("0x98f26a68d53d1834")
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
                          asBN: BigNumber("0x98f26a68d53d1834"),
                          rawAsBN: BigNumber("0x98f26a68d53d1834")
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
                      asBN: BigNumber("0x84a90ac1bb780b2556b665d34020000"),
                      rawAsBN: BigNumber("0x84a90ac1bb780b2556b665d34020000")
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
                  asBN: BigNumber("0x54846a9868b668bfc6fa36cc52bf6000"),
                  rawAsBN: BigNumber("0x54846a9868b668bfc6fa36cc52bf6000")
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
          name: 'poolAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x98f26a68d53d1834"),
              rawAsBN: BigNumber("0x98f26a68d53d1834")
            }
          }
        }
      ]
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
