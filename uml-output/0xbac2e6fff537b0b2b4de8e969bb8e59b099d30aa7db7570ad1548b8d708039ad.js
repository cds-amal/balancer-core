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
              kind: 'unknown',
              address: '0xFc71743FA5C0B8ED708b2af63D5426AecB625023',
              rawAddress: '0xfc71743fa5c0b8ed708b2af63d5426aecb625023'
            }
          }
        }
      ],
      actions: [],
      returnKind: 'revert',
      error: {
        kind: 'revert',
        abi: {
          name: 'Error',
          type: 'error',
          inputs: [ { name: '', type: 'string', internalType: 'string' } ]
        },
        status: false,
        arguments: [
          {
            value: {
              type: { typeClass: 'string', typeHint: 'string' },
              kind: 'value',
              value: { kind: 'valid', asString: 'ERR_NOT_BLABS' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0xFc71743FA5C0B8ED708b2af63D5426AecB625023'
}

module.exports = txlog;
