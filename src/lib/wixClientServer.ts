import { collections, products } from "@wix/stores";
import { env } from "@/validation/env";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  const cookieStore = cookies();
  const refreshToken = JSON.parse(
    cookieStore.get("refreshToken")?.value || "{}",
  );
  try {
    if (!refreshToken) {
      throw new Error("refersh token not found");
    }
  } catch (error) {
    const err = (error as { message: string }).message;
    console.log("wixClientServer  error => ", err);
  }

  const wixHeadlessClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken: refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
  return wixHeadlessClient;
};
