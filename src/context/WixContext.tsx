"use client";
import React, { createContext, ReactNode, useContext } from "react";
import Cookies from "js-cookie";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { env } from "@/validation/env";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixHeadlessClient = createClient({
  modules: {
    products,
    collections,
    // currentCart
  },
  auth: OAuthStrategy({
    clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: {
      refreshToken: refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClientTS = typeof wixHeadlessClient;

export const WixClientContext = createContext<WixClientTS>(wixHeadlessClient);

type Props = { children: ReactNode };

function WixContextPro({ children }: Props) {
  return (
    <WixClientContext.Provider value={wixHeadlessClient}>
      {children}
    </WixClientContext.Provider>
  );
}
export default WixContextPro;
