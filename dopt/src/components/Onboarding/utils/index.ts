import { DoptApiClient } from "@dopt/users-javascript-browser-client";

export const doptApiClient = new DoptApiClient({
  apiKey: import.meta.env.VITE_APP_DOPT_API_KEY as string
});
