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
      functionName: 'joinPool',
      contractName: 'BPool',
      arguments: [
        {
          name: 'poolAmountOut',
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
          name: 'maxAmountsIn',
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
                value: {
                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
                }
              },
              {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                  rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
                }
              }
            ]
          }
        }
      ],
      actions: [
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
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a215fffff"),
                          rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a215fffff")
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
                          asBN: BigNumber("0x8ac7230489e80000"),
                          rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff'
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
                          asBN: BigNumber("0x3635c9adc5dea00000"),
                          rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                          asBN: BigNumber("0x8ac7230489e80000"),
                          rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          raw: '0x000000000000000000000000000000000000000000000036c090d0ca68880000'
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
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a215fffff"),
                          rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffc9ca36523a215fffff")
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
                          asBN: BigNumber("0x8ac7230489e80000"),
                          rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          raw: '0xffffffffffffffffffffffffffffffffffffffffffffffc93f6f2f359777ffff'
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
                          asBN: BigNumber("0x3635c9adc5dea00000"),
                          rawAsBN: BigNumber("0x3635c9adc5dea00000")
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
                          asBN: BigNumber("0x8ac7230489e80000"),
                          rawAsBN: BigNumber("0x8ac7230489e80000")
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
                          raw: '0x000000000000000000000000000000000000000000000036c090d0ca68880000'
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
        { type: 'callinternal', actions: [], returnKind: 'return' }
      ],
      returnKind: 'unwind',
      returnValues: []
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
