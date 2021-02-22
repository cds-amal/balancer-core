const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x109B885840D277412536c1CfcEF3a5026b0C56E3',
      contextHash: '0x54a558f6ebe15a29c0a0696b74a9ec5a093df19bb48d999c0f6b27e8fc9562c8',
      value: BigNumber("0x0"),
      kind: 'function',
      isDelegate: false,
      functionName: 'setBLabs',
      contractName: 'BFactory',
      arguments: [
        {
          name: 'b',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xf01163423b07967D10Cc0Cd1a7f36C8c3a5C2413',
              rawAsHex: '0x000000000000000000000000f01163423b07967d10cc0cd1a7f36c8c3a5c2413'
            }
          }
        }
      ],
      actions: [],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x5608c5f8A567a2Ec4666EF63774a32e38cba639b'
}

module.exports = txlog;
