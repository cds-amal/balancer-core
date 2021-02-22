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
      functionName: 'transferFrom',
      contractName: 'BPool',
      arguments: [
        {
          name: 'src',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x13e925187e2E8aA8aBaE45e5aCd93184AD71bb84',
              rawAsHex: '0x00000000000000000000000013e925187e2e8aa8abae45e5acd93184ad71bb84'
            }
          }
        },
        {
          name: 'dst',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11',
              rawAsHex: '0x00000000000000000000000080f5dc6b0db5139fb834b1556b5e68e291040b11'
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
  origin: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11'
}

module.exports = txlog;
