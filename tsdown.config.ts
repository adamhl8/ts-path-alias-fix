import { tsdownBinConfig } from "@adamhl8/configs"
import { defineConfig } from "tsdown"

const config = tsdownBinConfig({ entry: "./src/index.ts", publint: true } as const)

export default defineConfig(config)
