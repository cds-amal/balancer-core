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
      functionName: 'bind',
      contractName: 'BPool',
      arguments: [
        {
          name: 'token',
          value: {
            type: { typeClass: 'address', kind: 'specific', payable: false },
            kind: 'value',
            value: {
              asAddress: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
              rawAsHex: '0x000000000000000000000000fda3860b6f5109856ed53c6126c9ae489898d953'
            }
          }
        },
        {
          name: 'balance',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x8ac7230489e80000"),
              rawAsBN: BigNumber("0x8ac7230489e80000")
            }
          }
        },
        {
          name: 'denorm',
          value: {
            type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
            kind: 'value',
            value: {
              asBN: BigNumber("0x22b1c8c1227a0000"),
              rawAsBN: BigNumber("0x22b1c8c1227a0000")
            }
          }
        }
      ],
      actions: [
        {
          type: 'callexternal',
          address: '0xFDA3860B6f5109856ed53c6126c9Ae489898D953',
          contextHash: '0x9a47ecfc3a4d14269a7eea63cd22411791f5aa3d34740510739468adb830c5b9',
          value: BigNumber("0x0"),
          kind: 'function',
          isDelegate: false,
          functionName: 'transferFrom',
          contractName: 'TToken',
          arguments: [
            {
              name: 'src',
              value: {
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
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
                type: {
                  typeClass: 'address',
                  kind: 'specific',
                  payable: false
                },
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
                  asBN: BigNumber("0x8ac7230489e80000"),
                  rawAsBN: BigNumber("0x8ac7230489e80000")
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
                  value: { kind: 'valid', asString: 'ERR_BTOKEN_BAD_CALLER' }
                }
              }
            ],
            decodingMode: 'full'
          }
        }
      ],
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
              value: { kind: 'valid', asString: 'ERR_BTOKEN_BAD_CALLER' }
            }
          }
        ],
        decodingMode: 'full'
      }
    }
  ],
  origin: '0x13e925187e2E8aA8aBaE45e5aCd93184AD71bb84'
}

module.exports = txlog;
