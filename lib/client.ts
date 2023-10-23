import { createClient } from "microcms-js-sdk";

if (!process.env.API_SERVICE_DOMAIN) {
  throw new Error("microCMSのサービスドメインが設定されていません。");
}

if (!process.env.API_KEY) {
  throw new Error("microCMSのAPIキーが設定されていません。");
}

export const client = createClient({
  serviceDomain: process.env.API_SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});
