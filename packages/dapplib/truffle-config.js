require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth right purpose good narrow forget tuna'; 
let testAccounts = [
"0x58be763c30a59ef442145fcf53c955d94f2a2a05220acbb4f7b3e0c9620287e7",
"0x26f00a8d423c7045c4b89dcddc843eb2583bc6f9d4b71b626d552000d1faa827",
"0x116c3d05d5c0384d58de98948be5efea26212da80806b9ffcb893890cb106b31",
"0x186680ec102fc4f2af7e050f61b3ecf425a125b6a977ddac97e5c3a062cc6f59",
"0x110de1cd0eb15305694699a17ac8d2dfd14a2c731a9969cf8434bdac9ff0a1ed",
"0xfd0c21ca101797910bb96787297aaf9114fd27e2fd203e10dbbbcb058115e928",
"0x52b355dbb6b179411523d71fdc7527f1ac1e48e840bde217cc0e7736737c15b6",
"0x9aa412b2751edc02ffd6bbf3510288611403d5f85f27f4aa1f0096352df3c9c4",
"0x14f38f8219e363f17bc7fa150e7dd21bf72be2cd6126462e061d9125b06d9d15",
"0xa241cc6b93035b63babd4cd054db88a0c3550e81b7a2cd9ed98c71bc8894bb4a"
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

