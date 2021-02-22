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
      functionName: 'swapExactAmountIn',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xa91a65aeC9a6D0f355B58D8055673FC8d01d6477',
              rawAsHex: '0x000000000000000000000000a91a65aec9a6d0f355b58d8055673fc8d01d6477'
            }
          }
        },
        {
          name: 'tokenAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x22b1c8c1227a0000"),
              rawAsBN: BigNumber("0x22b1c8c1227a0000")
            }
          }
        },
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x676F5c2Fe8eAE4e72fd9CDD9A78A307C4f17BB20',
              rawAsHex: '0x000000000000000000000000676f5c2fe8eae4e72fd9cdd9a78a307c4f17bb20'
            }
          }
        },
        {
          name: 'minAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x19bff2ff57968c0000"),
              rawAsBN: BigNumber("0x19bff2ff57968c0000")
            }
          }
        },
        {
          name: 'maxPrice',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0xad78ebc5ac6200000"),
              rawAsBN: BigNumber("0xad78ebc5ac6200000")
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
              value: { kind: 'valid', asString: 'ERR_SWAP_NOT_PUBLIC' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0x13e925187e2E8aA8aBaE45e5aCd93184AD71bb84'
}

module.exports = txlog;
