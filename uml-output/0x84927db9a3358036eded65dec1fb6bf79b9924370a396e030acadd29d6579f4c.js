const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xFeEcc6540F3b31419ccCe325497a3C61A7533383',
      contextHash: '0x9a47ecfc3a4d14269a7eea63cd22411791f5aa3d34740510739468adb830c5b9',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'approve',
      contractName: 'TToken',
      arguments: [
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
              asBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
              rawAsBN: BigNumber("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
            }
          }
        }
      ],
      actions: [],
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
