const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xF74E6fF6B161A368a19731CAc1770FbC86aC13D4',
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
  origin: '0x5608c5f8A567a2Ec4666EF63774a32e38cba639b'
}

module.exports = txlog;
