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
      functionName: 'finalize',
      contractName: 'BPool',
      arguments: [],
      actions: [],
      returnKind: 'return',
      returnValues: []
    }
  ],
  origin: '0x921694D16E730E9eDa0bd318199Fe02705f079dd'
}

module.exports = txlog;
