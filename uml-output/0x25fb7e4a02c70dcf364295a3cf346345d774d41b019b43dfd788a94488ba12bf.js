const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x32091C89Fad0E1722aFDE2525801c9b4b5aD29eb',
      contextHash: '0xf04a4f4e4c0323a6950cecb39b90f9cddbd8d1a647ee4a0d9dde56e4e017617d',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'swapExactAmountOut',
      contractName: 'BPool',
      arguments: [
        {
          name: 'tokenIn',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xeAEA508B7C938d903E5C4B615C8AF7c26bfAB4Fe',
              rawAsHex: '0x000000000000000000000000eaea508b7c938d903e5c4b615c8af7c26bfab4fe'
            }
          }
        },
        {
          name: 'maxAmountIn',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x2c3c465ca58ec0000"),
              rawAsBN: BigNumber("0x2c3c465ca58ec0000")
            }
          }
        },
        {
          name: 'tokenOut',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x85a20435894CDA7E83f7408Ed6460F23dA8Ee73e',
              rawAsHex: '0x00000000000000000000000085a20435894cda7e83f7408ed6460f23da8ee73e'
            }
          }
        },
        {
          name: 'tokenAmountOut',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x22b1c8c1227a00000"),
              rawAsBN: BigNumber("0x22b1c8c1227a00000")
            }
          }
        },
        {
          name: 'maxPrice',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x4563918244f40000"),
              rawAsBN: BigNumber("0x4563918244f40000")
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
              value: { kind: 'valid', asString: 'ERR_MAX_OUT_RATIO' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8'
}

module.exports = txlog;
