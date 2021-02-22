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
      functionName: 'approve',
      contractName: 'BPool',
      arguments: [
        {
          name: 'dst',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639',
              rawAsHex: '0x0000000000000000000000002adf5ec001a3d952135a1b42b12bec2a18129639'
            }
          }
        },
        {
          name: 'amt',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x2b5e3af16b1880000"),
              rawAsBN: BigNumber("0x2b5e3af16b1880000")
            }
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
  origin: '0x13e925187e2E8aA8aBaE45e5aCd93184AD71bb84'
}

module.exports = txlog;
