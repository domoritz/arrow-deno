import { assertExists } from "https://deno.land/std@0.122.0/testing/asserts.ts";
import { arrow } from "./mod.ts";

Deno.test("arrow exists", () => {
  assertExists(arrow);
});
