"use client";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { goerli, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, provider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY })]
);

const { connectors } = getDefaultWallets({
  appName: "Polll dApp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

import { Neucha } from "next/font/google";
const fonta = Neucha({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Polll Dapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonta.className}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
