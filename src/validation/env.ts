import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ACCESSRORIES_CATEGORY_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_WIX_CLIENT_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_WIX_CLIENT_ID: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    ACCESSRORIES_CATEGORY_ID: process.env.ACCESSRORIES_CATEGORY_ID,
  },
});
