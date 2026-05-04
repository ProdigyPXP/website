export interface ExtensionStats {
  chrome: number | null;
  edge: number | null;
  total: number;
}

async function fetchChromeUsers(): Promise<number | null> {
  const res = await fetch(
    "https://chromewebstore.google.com/detail/mbjjannikkfihddnepoionimbedjnbib",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    }
  );
  const html = await res.text();
  const match = html.match(/([\d,]+)\+?\s+users/);
  if (!match) return null;
  return parseInt(match[1].replace(/,/g, ""), 10);
}

async function fetchEdgeUsers(): Promise<number | null> {
  const res = await fetch(
    "https://microsoftedge.microsoft.com/addons/detail/prodigy-hacking-extension/ekoakjipfmjpmlkldiikhoigaflfkjej",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0",
      },
      next: { revalidate: 3600 },
    }
  );
  const html = await res.text();
  const match = html.match(/itemProp="userInteractionCount"\s+content="(\d+)"/i);
  if (!match) return null;
  return parseInt(match[1], 10);
}

export async function getExtensionStats(): Promise<ExtensionStats> {
  const [chrome, edge] = await Promise.allSettled([
    fetchChromeUsers(),
    fetchEdgeUsers(),
  ]);
  const chromeUsers = chrome.status === "fulfilled" ? chrome.value : null;
  const edgeUsers = edge.status === "fulfilled" ? edge.value : null;
  return {
    chrome: chromeUsers,
    edge: edgeUsers,
    total: (chromeUsers ?? 0) + (edgeUsers ?? 0),
  };
}
