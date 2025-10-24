import type { APIRoute } from "astro";
import { searchDocs } from "../../lib/orama-index";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const term = url.searchParams.get("q") ?? "";

  const results = await searchDocs(term);

  return new Response(JSON.stringify(results), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
