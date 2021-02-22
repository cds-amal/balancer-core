const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x109B885840D277412536c1CfcEF3a5026b0C56E3',
      contextHash: '0x54a558f6ebe15a29c0a0696b74a9ec5a093df19bb48d999c0f6b27e8fc9562c8',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'collect',
      contractName: 'BFactory',
      arguments: [
        {
          name: 'pool',
          value: {
            type: {
              typeClass: 'contract',
              kind: 'native',
              id: 'shimmedcompilationNumber(0):3473',
              typeName: 'BPool',
              contractKind: 'contract',
              payable: false
            },
            kind: 'value',
            value: {
              kind: 'known',
              address: '0xF74E6fF6B161A368a19731CAc1770FbC86aC13D4',
              rawAddress: '0xf74e6ff6b161a368a19731cac1770fbc86ac13d4',
              class: {
                typeClass: 'contract',
                kind: 'native',
                id: 'shimmedcompilationNumber(0):3473',
                typeName: 'BPool',
                contractKind: 'contract',
                payable: false
              }
            }
          }
        }
      ],
      actions: [
        {
          type: 'callexternal',
          address: '0xF74E6fF6B161A368a19731CAc1770FbC86aC13D4',
          contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'balanceOf',
          contractName: 'BPool',
          arguments: [
            {
              name: 'whom',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
                kind: 'value',
                value: {
                  asAddress: '0x109B885840D277412536c1CfcEF3a5026b0C56E3',
                  rawAsHex: '0x000000000000000000000000109b885840d277412536c1cfcef3a5026b0c56e3'
                }
              }
            }
          ],
          actions: [],
          returnKind: 'return',
          returnValues: [
            {
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0xF74E6fF6B161A368a19731CAc1770FbC86aC13D4',
          contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'transfer',
          contractName: 'BPool',
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
                  asAddress: '0x5608c5f8A567a2Ec4666EF63774a32e38cba639b',
                  rawAsHex: '0x0000000000000000000000005608c5f8a567a2ec4666ef63774a32e38cba639b'
                }
              }
            },
            {
              name: 'amt',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: BigNumber("0x0"), rawAsBN: BigNumber("0x0") }
              }
            }
          ],
          actions: [],
          returnKind: 'return',
          returnValues: [
            {
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x5608c5f8A567a2Ec4666EF63774a32e38cba639b'
}

module.exports = txlog;
