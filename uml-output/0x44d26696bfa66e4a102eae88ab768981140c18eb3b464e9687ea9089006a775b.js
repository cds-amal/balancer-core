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
              asBN: BigNumber("0x56085bdb092159960"),
              rawAsBN: BigNumber("0x56085bdb092159960")
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
              actions: [],
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
                      asBN: BigNumber("0x2ff044cb18c6b8c3a0f8b33afd60b6000"),
                      rawAsBN: BigNumber("0x2ff044cb18c6b8c3a0f8b33afd60b6000")
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
                      value: { kind: 'valid', asString: 'ERR_MAX_IN_RATIO' }
                    }
                  }
                ],
                decodingMode: 'full'
              }
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
                  asBN: BigNumber("0x7304478d3f21918bfd"),
                  rawAsBN: BigNumber("0x7304478d3f21918bfd")
                }
              }
            },
            {
              name: 'tokenWeightIn',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: {
                  asBN: BigNumber("0x3bbf512563d6159112"),
                  rawAsBN: BigNumber("0x3bbf512563d6159112")
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
                  asBN: BigNumber("0x3744f667db4b7bfaeb"),
                  rawAsBN: BigNumber("0x3744f667db4b7bfaeb")
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
          name: undefined,
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: { asBN: BigNumber("0x1"), rawAsBN: BigNumber("0x1") }
          }
        }
      ],
      returnKind: 'unwind'
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
