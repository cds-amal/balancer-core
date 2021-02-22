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
      functionName: 'exitswapExternAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenOut',
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
          name: 'tokenAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x26452d28c74dc000"),
              rawAsBN: BigNumber("0x26452d28c74dc000")
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
                                  asBN: BigNumber("0x26452d28c74dc000"),
                                  rawAsBN: BigNumber("0x26452d28c74dc000")
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
                                          asBN: BigNumber("0xc985e19b39f456f8"),
                                          rawAsBN: BigNumber("0xc985e19b39f456f8")
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
                                          asBN: BigNumber("0x26452d28c74dc000"),
                                          rawAsBN: BigNumber("0x26452d28c74dc000")
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
                                          raw: '0x000000000000000000000000000000000000000000000000a340b47272a696f8'
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
                                          asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff367a1e64c60ba907"),
                                          rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffff367a1e64c60ba907")
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
                                          asBN: BigNumber("0x26452d28c74dc000"),
                                          rawAsBN: BigNumber("0x26452d28c74dc000")
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
                                          raw: '0xffffffffffffffffffffffffffffffffffffffffffffffff5cbf4b8d8d596907'
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
                              asBN: BigNumber("0x5e74a8505b7f6f79c"),
                              rawAsBN: BigNumber("0x5e74a8505b7f6f79c")
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
                              asBN: BigNumber("0x97210d4ce5380e4f"),
                              rawAsBN: BigNumber("0x97210d4ce5380e4f")
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
                              asBN: BigNumber("0x5502977b8d2bee94d"),
                              rawAsBN: BigNumber("0x5502977b8d2bee94d")
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
                          asBN: BigNumber("0x97210d4ce5380e4f"),
                          rawAsBN: BigNumber("0x97210d4ce5380e4f")
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
                          asBN: BigNumber("0x97210d4ce5380e4f"),
                          rawAsBN: BigNumber("0x97210d4ce5380e4f")
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
                      asBN: BigNumber("0x8315674194efa170affa1d1f38e0000"),
                      rawAsBN: BigNumber("0x8315674194efa170affa1d1f38e0000")
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
                  asBN: BigNumber("0x2131b229f4cfb77e6be4a992a806000"),
                  rawAsBN: BigNumber("0x2131b229f4cfb77e6be4a992a806000")
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
              asBN: BigNumber("0x97210d4ce5380e4f"),
              rawAsBN: BigNumber("0x97210d4ce5380e4f")
            }
          }
        }
      ]
    }
  ],
  origin: '0x9E18775Ab5F17ac9f8D63EF132c700204D2A1896'
}

module.exports = txlog;
