import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://docs.unrealengine.com/5.3/en-US/",
  match: "https://docs.unrealengine.com/5.3/en-US/**",
  maxPagesToCrawl: 999,
  outputFileName: "../data/output.json",
};