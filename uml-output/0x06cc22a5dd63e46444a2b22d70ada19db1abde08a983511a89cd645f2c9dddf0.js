const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x83Ca49772392EdaEd99e1A477E6b2521354CCF07',
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
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8',
              rawAsHex: '0x000000000000000000000000d365202063c9c6b460f43d9b61cfce2c3f518fa8'
            }
          }
        },
        {
          name: 'dst',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x32091C89Fad0E1722aFDE2525801c9b4b5aD29eb',
              rawAsHex: '0x00000000000000000000000032091c89fad0e1722afde2525801c9b4b5ad29eb'
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
                      asBN: BigNumber("0x340aad21b3b700000"),
                      rawAsBN: BigNumber("0x340aad21b3b700000")
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
                      raw: '0x000000000000000000000000000000000000000000000002b5e3af16b1880000'
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
                      asBN: BigNumber("0x22b1c8c1227a00000"),
                      rawAsBN: BigNumber("0x22b1c8c1227a00000")
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
                      raw: '0x000000000000000000000000000000000000000000000002b5e3af16b1880000'
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
  origin: '0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8'
}

module.exports = txlog;
