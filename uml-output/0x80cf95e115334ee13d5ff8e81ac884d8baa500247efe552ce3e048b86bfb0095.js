const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
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
              asBN: BigNumber("0x4563918244f40000"),
              rawAsBN: BigNumber("0x4563918244f40000")
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
          address: '0xa91a65aeC9a6D0f355B58D8055673FC8d01d6477',
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
                  asAddress: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639',
                  rawAsHex: '0x0000000000000000000000002adf5ec001a3d952135a1b42b12bec2a18129639'
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
                  asAddress: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
                  rawAsHex: '0x0000000000000000000000005c533a481ec8f95b63204aa15bed110a3e9072b4'
                }
              }
            },
            {
              name: 'amt',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x22b1c8c1227a0000"),
                  rawAsBN: BigNumber("0x22b1c8c1227a0000")
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
                          asBN: BigNumber("0x15af1d78b58c40000"),
                          rawAsBN: BigNumber("0x15af1d78b58c40000")
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
                          asBN: BigNumber("0x22b1c8c1227a0000"),
                          rawAsBN: BigNumber("0x22b1c8c1227a0000")
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
                          raw: '0x00000000000000000000000000000000000000000000000138400eca364a0000'
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
                          asBN: BigNumber("0x2b5e3af16b1880000"),
                          rawAsBN: BigNumber("0x2b5e3af16b1880000")
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
                          asBN: BigNumber("0x22b1c8c1227a0000"),
                          rawAsBN: BigNumber("0x22b1c8c1227a0000")
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
                          raw: '0x000000000000000000000000000000000000000000000002d89577d7d4020000'
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
          address: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
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
                  asAddress: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639',
                  rawAsHex: '0x0000000000000000000000002adf5ec001a3d952135a1b42b12bec2a18129639'
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
                  asAddress: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
                  rawAsHex: '0x0000000000000000000000005c533a481ec8f95b63204aa15bed110a3e9072b4'
                }
              }
            },
            {
              name: 'amt',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0xde0b6b3a7640000"),
                  rawAsBN: BigNumber("0xde0b6b3a7640000")
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
                          asBN: BigNumber("0x3782dace9d900000"),
                          rawAsBN: BigNumber("0x3782dace9d900000")
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
                          asBN: BigNumber("0xde0b6b3a7640000"),
                          rawAsBN: BigNumber("0xde0b6b3a7640000")
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
                          raw: '0x00000000000000000000000000000000000000000000000029a2241af62c0000'
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
                          asBN: BigNumber("0x1158e460913d00000"),
                          rawAsBN: BigNumber("0x1158e460913d00000")
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
                          asBN: BigNumber("0xde0b6b3a7640000"),
                          rawAsBN: BigNumber("0xde0b6b3a7640000")
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
                          raw: '0x000000000000000000000000000000000000000000000001236efcbcbb340000'
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
          address: '0x676F5c2Fe8eAE4e72fd9CDD9A78A307C4f17BB20',
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
                  asAddress: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639',
                  rawAsHex: '0x0000000000000000000000002adf5ec001a3d952135a1b42b12bec2a18129639'
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
                  asAddress: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
                  rawAsHex: '0x0000000000000000000000005c533a481ec8f95b63204aa15bed110a3e9072b4'
                }
              }
            },
            {
              name: 'amt',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x1b1ae4d6e2ef500000"),
                  rawAsBN: BigNumber("0x1b1ae4d6e2ef500000")
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
                          asBN: BigNumber("0x878678326eac9000000"),
                          rawAsBN: BigNumber("0x878678326eac9000000")
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
                          asBN: BigNumber("0x1b1ae4d6e2ef500000"),
                          rawAsBN: BigNumber("0x1b1ae4d6e2ef500000")
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
                          raw: '0x00000000000000000000000000000000000000000000085d4c9e5007d9b00000'
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
                          asBN: BigNumber("0x21e19e0c9bab2400000"),
                          rawAsBN: BigNumber("0x21e19e0c9bab2400000")
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
                          asBN: BigNumber("0x1b1ae4d6e2ef500000"),
                          rawAsBN: BigNumber("0x1b1ae4d6e2ef500000")
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
                          raw: '0x00000000000000000000000000000000000000000000023934c5a09da1900000'
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
  origin: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639'
}

module.exports = txlog;
