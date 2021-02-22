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
      functionName: 'joinswapExternAmountIn',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xf8A92c8EDDe80F8C56D277ff0054cb5BBa7aE864',
              rawAsHex: '0x000000000000000000000000f8a92c8edde80f8c56d277ff0054cb5bba7ae864'
            }
          }
        },
        {
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x56d23e01774957e80"),
              rawAsBN: BigNumber("0x56d23e01774957e80")
            }
          }
        },
        {
          name: 'minPoolAmountOut',
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
          actions: [],
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
          returnKind: 'return',
          returnValues: [
            {
              name: undefined,
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xf8A92c8EDDe80F8C56D277ff0054cb5BBa7aE864',
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
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x56d23e01774957e80"),
                  rawAsBN: BigNumber("0x56d23e01774957e80")
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
                          asBN: BigNumber("0x56d23e01774957e80"),
                          rawAsBN: BigNumber("0x56d23e01774957e80")
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
                          raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc45d127222acca8189'
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
                          asBN: BigNumber("0x56d23e01774957e80"),
                          rawAsBN: BigNumber("0x56d23e01774957e80")
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
                          raw: '0x00000000000000000000000000000000000000000000003ba2ed8ddd53357e76'
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
      returnKind: 'return',
      returnValues: [
        {
          name: 'poolAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x2a5dd8cae0a10d4"),
              rawAsBN: BigNumber("0x2a5dd8cae0a10d4")
            }
          }
        }
      ]
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
