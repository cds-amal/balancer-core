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
      functionName: 'setPublicSwap',
      contractName: 'BPool',
      arguments: [
        {
          name: 'public_',
          value: {
            type: { typeClass: 'bool', typeHint: 'bool' },
            kind: 'value',
            value: { asBoolean: true }
          }
        }
      ],
      actions: [],
      returnKind: 'return',
      returnValues: []
    }
  ],
  origin: '0xD365202063c9c6B460f43D9b61CfcE2C3f518fa8'
}

module.exports = txlog;
