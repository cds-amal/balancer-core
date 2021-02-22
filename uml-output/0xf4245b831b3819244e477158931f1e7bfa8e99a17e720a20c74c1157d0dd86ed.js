const BigNumber = require("bignumber.js");

const txlog = 
{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0xb18BE19c0dd5E4197D8fB43b61022F5f5aeF231b',
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
  origin: '0x2ADf5EC001a3D952135a1b42B12BEC2A18129639'
}

module.exports = txlog;
