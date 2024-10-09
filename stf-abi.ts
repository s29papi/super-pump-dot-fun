const abi = [
    {
      "inputs": [
        {
          "internalType": "contract ISuperfluid",
          "name": "host",
          "type": "address"
        },
        {
          "internalType": "contract ISuperToken",
          "name": "superTokenLogic",
          "type": "address"
        },
        {   
          "internalType": "contract IConstantOutflowNFT",
          "name": "constantOutflowNFTLogic",
          "type": "address"
        },
        {
          "internalType": "contract IConstantInflowNFT",
          "name": "constantInflowNFTLogic",
          "type": "address"
        },
        {
          "internalType": "contract IPoolAdminNFT",
          "name": "poolAdminNFTLogic",
          "type": "address"
        },
        {
          "internalType": "contract IPoolMemberNFT",
          "name": "poolMemberNFTLogic",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_ALREADY_EXISTS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_DOES_NOT_EXIST",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_NON_UPGRADEABLE_IS_DEPRECATED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_ONLY_GOVERNANCE_OWNER",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_ONLY_HOST",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_UNINITIALIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SUPER_TOKEN_FACTORY_ZERO_ADDRESS",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "uuid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "codeAddress",
          "type": "address"
        }
      ],
      "name": "CodeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract ISuperToken",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "CustomSuperTokenCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract ISuperToken",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SuperTokenCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract ISuperToken",
          "name": "tokenLogic",
          "type": "address"
        }
      ],
      "name": "SuperTokenLogicCreated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CONSTANT_INFLOW_NFT_LOGIC",
      "outputs": [
        {
          "internalType": "contract IConstantInflowNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "CONSTANT_OUTFLOW_NFT_LOGIC",
      "outputs": [ 
        {
          "internalType": "contract IConstantOutflowNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "POOL_ADMIN_NFT_LOGIC",
      "outputs": [
        {
          "internalType": "contract IPoolAdminNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "POOL_MEMBER_NFT_LOGIC",
      "outputs": [
        {
          "internalType": "contract IPoolMemberNFT",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_SUPER_TOKEN_LOGIC",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "castrate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_underlyingToken",
          "type": "address"
        }
      ],
      "name": "computeCanonicalERC20WrapperAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "superTokenAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isDeployed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "_underlyingToken",
          "type": "address"
        }
      ],
      "name": "createCanonicalERC20Wrapper",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "underlyingToken",
          "type": "address"
        },
        {
          "internalType": "enum ISuperTokenFactory.Upgradability",
          "name": "upgradability",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "createERC20Wrapper",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "superToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "underlyingToken",
          "type": "address"
        },
        {
          "internalType": "enum ISuperTokenFactory.Upgradability",
          "name": "upgradability",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "createERC20Wrapper",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "superToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "underlyingToken",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "underlyingDecimals",
          "type": "uint8"
        },
        {
          "internalType": "enum ISuperTokenFactory.Upgradability",
          "name": "upgradability",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "createERC20Wrapper",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "superToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "underlyingToken",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "underlyingDecimals",
          "type": "uint8"
        },
        {
          "internalType": "enum ISuperTokenFactory.Upgradability",
          "name": "upgradability",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "createERC20Wrapper",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "superToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_underlyingTokenAddress",
          "type": "address"
        }
      ],
      "name": "getCanonicalERC20Wrapper",
      "outputs": [
        {
          "internalType": "address",
          "name": "superTokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCodeAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "codeAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getHost",
      "outputs": [
        {
          "internalType": "address",
          "name": "host",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getSuperTokenLogic",
      "outputs": [
        {
          "internalType": "contract ISuperToken",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "underlyingToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "superToken",
              "type": "address"
            }
          ],
          "internalType": "struct SuperTokenFactoryBase.InitializeData[]",
          "name": "_data",
          "type": "tuple[]"
        }
      ],
      "name": "initializeCanonicalWrapperSuperTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "customSuperTokenProxy",
          "type": "address"
        }
      ],
      "name": "initializeCustomSuperToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "updateCode",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

export default abi;