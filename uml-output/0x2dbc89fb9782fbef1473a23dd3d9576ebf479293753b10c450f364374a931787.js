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
      functionName: 'gulp',
      contractName: 'BPool',
      arguments: [
        {
          name: 'token',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xEC7863fA20dF477E90C593d626b375B5ec63B6eD',
              rawAsHex: '0x000000000000000000000000ec7863fa20df477e90c593d626b375b5ec63b6ed'
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
              value: { kind: 'valid', asString: 'ERR_NOT_BOUND' }
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
