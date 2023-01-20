import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import {ConnectionProvider,WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {GlowWalletAdapter,PhantomWalletAdapter,SlopeWalletAdapter} from '@solana/wallet-adapter-wallets';
import {clusterApiUrl} from '@solana/web3.js';
import {useMemo} from 'react';

export const WalletConnectionProvider = ({children}) => {

const network = WalletAdapterNetwork.Devnet;
const endpoint = useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet)
    return "https://long-icy-hill.solana-devnet.discover.quiknode.pro/c7799501028427df4cdf9a38353644332434f492/";

    return clusterApiUrl(network);
}, [network]);
const wallets = useMemo(() => [
new PhantomWalletAdapter(),
new SlopeWalletAdapter(),
new GlowWalletAdapter(),
], []);

return (
<ConnectionProvider endpoint={endpoint}>
<WalletProvider wallets={wallets} autoConnect>
<WalletModalProvider>{children}</WalletModalProvider>
</WalletProvider>
</ConnectionProvider>
);
};