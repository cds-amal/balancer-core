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
      functionName: 'exitswapPoolAmountIn',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenOut',
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
          name: 'poolAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x98f26a68f3c97410"),
              rawAsBN: BigNumber("0x98f26a68f3c97410")
            }
          }
        },
        {
          name: 'minAmountOut',
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
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: '_burn',
              contractName: 'BTokenBase',
              arguments: [
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
                      asBN: BigNumber("0xb3db2b55c0c3071"),
                      rawAsBN: BigNumber("0xb3db2b55c0c3071")
                    }
                  }
                }
              ],
              returnKind: 'revert',
              error: {
                kind: 'revert',
                abi: {
                  name: 'Error',
                  type: 'error',
                  inputs: [
                    {
                      name: '',
                      type: 'string',
                      internalType: 'string'
                    }
                  ]
                },
                status: false,
                arguments: [
                  {
                    value: {
                      type: { typeClass: 'string', typeHint: 'string' },
                      kind: 'value',
                      value: { kind: 'valid', asString: 'ERR_MAX_OUT_RATIO' }
                    }
                  }
                ],
                decodingMode: 'full'
              }
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
                  asBN: BigNumber("0xc097ce7bc90715b36f26026fc10000"),
                  rawAsBN: BigNumber("0xc097ce7bc90715b36f26026fc10000")
                }
              }
            }
          ],
          returnKind: 'unwind'
        }
      ],
      returnKind: 'unwind'
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
