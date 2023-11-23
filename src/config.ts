import { z } from 'zod';

import type { Page } from "playwright";

const Page: z.ZodType<Page> = z.any();

export const configSchema = z.object({
  /**
   * URL to start the crawl
   * @example "https://www.builder.io/c/docs/developers"
   * @default ""
   */
  url: "https://docs.unrealengine.com/5.3/en-US/",
  /**
   * Pattern to match against for links on a page to subsequently crawl
   * @example "https://www.builder.io/c/docs/**"
   * @default ""
   */
  match: "https://docs.unrealengine.com/5.3/en-US/**",

  /**
   * Selector to grab the inner text from
   * @example ".docs-builder-container"
   * @default ""
   */
  selector: z.string().optional(),
  /**
   * Don't crawl more than this many pages
   * @default 50
   */
  maxPagesToCrawl: 999,
  /**
   * File name for the finished data
   * @default "UENIRVANA.json"
   */
  outputFileName: "../data/UENIRVANA.json",
  /** Optional cookie to be set. E.g. for Cookie Consent */
  cookie: z.object({
    name: z.string(),
    value: z.string(),
  }).optional(),
  /** Optional function to run for each page found */
  onVisitPage: z.function()
      .args(z.object({
        page: Page,
        pushData: z.function()
            .args(z.any())
            .returns(z.promise(z.void()))
      }))
      .returns(z.promise(z.void()))
      .optional(),
  /** Optional timeout for waiting for a selector to appear */
  waitForSelectorTimeout: z.number().int().nonnegative().optional(),
});

export type Config = z.infer<typeof configSchema>;

