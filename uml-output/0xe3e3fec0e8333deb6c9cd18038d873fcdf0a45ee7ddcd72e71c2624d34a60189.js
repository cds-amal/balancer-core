const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
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
              asAddress: '0x5c533A481ec8f95b63204Aa15BeD110a3e9072b4',
              rawAsHex: '0x0000000000000000000000005c533a481ec8f95b63204aa15bed110a3e9072b4'
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
  origin: '0x80f5Dc6B0db5139FB834B1556B5e68E291040b11'
}

module.exports = txlog;
