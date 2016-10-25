// Contains all the configuration specific to our Server.
// Please note that the DefinePlugin of webpack will inline/replace all the
// respective "process.env.*" variables below with the actual values.
// These config values then become a part of the server bundle.

import path from "path"

export const CLIENT_BUNDLE_HTTP_PATH = process.env.CLIENT_BUNDLE_HTTP_PATH

export const ABSOLUTE_CLIENT_OUTPUT_PATH = path.resolve(
  process.env.APP_ROOT,
  process.env.CLIENT_BUNDLE_OUTPUT_PATH
)

export const ABSOLUTE_ASSETSINFO_PATH = path.resolve(
  process.env.APP_ROOT,
  process.env.CLIENT_BUNDLE_OUTPUT_PATH,
  process.env.CLIENT_BUNDLE_ASSETS_FILENAME
)

export const ABSOLUTE_CHUNKMANIFEST_PATH = path.resolve(
  process.env.APP_ROOT,
  process.env.CLIENT_BUNDLE_OUTPUT_PATH,
  process.env.CLIENT_BUNDLE_CHUNK_MANIFEST_FILENAME
)

export const ABSOLUTE_PUBLIC_DIR_PATH = path.resolve(
  process.env.APP_ROOT,
  process.env.CLIENT_PUBLIC_PATH
)
