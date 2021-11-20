require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember history grid arch sun tree'; 
let testAccounts = [
"0x6c88893de146cbf9b3e14242499a1c63afc5ef4d2e5996bbb2e669dc64c39e5f",
"0x1b4f859f960a2e5333e8d4bbe2ebda40e649d2918c3d49474e12abdb412ba8f4",
"0x13985dda67301341c23924ca017f407cc377fefb1661c9fc72e642583dd30543",
"0xc90e39639feca6635a919c50e8fbc1123993c9203340a9f303e3348af1e1b009",
"0xe9c421a5662ea5360d626c25eb4120ee85f65ab3fb4715f410684baf9b10509a",
"0x1453d2ca820ae9d62bf23fcd371f48dd0a66f6f979b4cf4bc3ea3239c7c3a91c",
"0x53d8a541e5a7665674f28420aa8a2e56011f41430ae3f1fe66879022aa0b7571",
"0xbc1a6106a6e30533b41b2d6ca1608da4b173b1d94b1a6820fe6649fc6158138d",
"0xb8ae67df0dbcfcc09b102d6e700d8d97c1e5e3a8d2ca8759c5d466a9aa267f17",
"0xdff33da2ba526b3d55816095629263eb96b06bd2b80ea607ca8530b4079db2d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

