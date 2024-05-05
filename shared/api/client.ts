import createClient from "openapi-fetch";

import { backendBaseUrl } from "shared/config";
import type { paths } from "./v1";

export const { GET, POST, DELETE, PUT } = createClient<paths>({
  baseUrl: backendBaseUrl,
});
