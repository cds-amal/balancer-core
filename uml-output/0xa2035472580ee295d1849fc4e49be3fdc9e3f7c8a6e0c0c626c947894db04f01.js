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
      functionName: 'joinswapPoolAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
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
          name: 'poolAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x8b0aec5f6942f248"),
              rawAsBN: BigNumber("0x8b0aec5f6942f248")
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
                  type: 'callexternal',
                  address: '0x74ddd28E441f1aD10b4C36Dce465F9414140BC01',
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
                          asAddress: '0x921694D16E730E9eDa0bd318199Fe02705f079dd',
                          rawAsHex: '0x000000000000000000000000921694d16e730e9eda0bd318199fe02705f079dd'
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
                          asAddress: '0x557B1a31d0EAb447BcB77e7B3Fa94b3DBAF3A542',
                          rawAsHex: '0x000000000000000000000000557b1a31d0eab447bcb77e7b3fa94b3dbaf3a542'
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
                          asBN: BigNumber("0x58987779df775911c"),
                          rawAsBN: BigNumber("0x58987779df775911c")
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
                                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a21600009"),
                                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a21600009")
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
                                  asBN: BigNumber("0x58987779df775911c"),
                                  rawAsBN: BigNumber("0x58987779df775911c")
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
                                  raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc440aeda9c29ea6eed'
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
                                  asBN: BigNumber("0x3635c9adc5de9ffff6"),
                                  rawAsBN: BigNumber("0x3635c9adc5de9ffff6")
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
                                  asBN: BigNumber("0x58987779df775911c"),
                                  rawAsBN: BigNumber("0x58987779df775911c")
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
                                  raw: '0x00000000000000000000000000000000000000000000003bbf512563d6159112'
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
                      asBN: BigNumber("0x4cd7c68c12da0a1908c47764217b6000"),
                      rawAsBN: BigNumber("0x4cd7c68c12da0a1908c47764217b6000")
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x3bbf49e367f9a5df1d"),
                  rawAsBN: BigNumber("0x3bbf49e367f9a5df1d")
                }
              }
            },
            {
              name: 'tokenWeightIn',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x3635c9adc5de9ffff6"),
                  rawAsBN: BigNumber("0x3635c9adc5de9ffff6")
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
                value: {
                  asBN: BigNumber("0x5898035a21b05df27"),
                  rawAsBN: BigNumber("0x5898035a21b05df27")
                }
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
      returnValues: [
        {
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x58987779df775911c"),
              rawAsBN: BigNumber("0x58987779df775911c")
            }
          }
        }
      ],
      returnKind: 'unwind'
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
