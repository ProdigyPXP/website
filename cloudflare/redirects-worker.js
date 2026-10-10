// Cloudflare Worker "play-redirects": subdomain redirects for playorig.in and
// everything on prodigyorigin.com (301 -> playorig.in). Replaces the old Vercel
// `origin-redirect` project. Apex/www of playorig.in pass through to GitHub Pages.

const CHROME = "https://chromewebstore.google.com/detail/meckkcfdiildmoohhfkddapggojdhpgo";
const EDGE =
  "https://microsoftedge.microsoft.com/addons/detail/prodigy-hacking-extension/ekoakjipfmjpmlkldiikhoigaflfkjej";
const FIREFOX = "https://addons.mozilla.org/en-US/firefox/addon/playorigin/";
const GET = "https://playorig.in/get";
const DISCORD = "https://dsc.gg/ProdigyPXP";
const YOUTUBE = "https://youtube.com/@ProdigyPXP";
const GITHUB = "https://github.com/ProdigyPXP";
const PRIVACY = "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/meta/PRIVACY_POLICY.md";

// label -> [destination, status]
const SUBDOMAINS = {
  firefox: [FIREFOX, 301],
  edge: [EDGE, 301],
  chrome: [CHROME, 301],
  extension: [GET, 302],
  ext: [GET, 302],
  discord: [DISCORD, 301],
  dsc: [DISCORD, 301],
  youtube: [YOUTUBE, 301],
  yt: [YOUTUBE, 301],
  github: [GITHUB, 301],
  gh: [GITHUB, 301],
  privacy: [PRIVACY, 301],
  privacypolicy: [PRIVACY, 301],
};
// Labels that only existed on playorig.in in the old config. On prodigyorigin.com
// only these existed: firefox, edge, chrome, extension.
const OLD_DOMAIN_LABELS = new Set(["firefox", "edge", "chrome", "extension"]);

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();

    if (host === "playorig.in" || host === "www.playorig.in") {
      return fetch(request); // GitHub Pages origin
    }
    if (host === "prodigyorigin.com" || host === "www.prodigyorigin.com") {
      return Response.redirect(`https://playorig.in${url.pathname}${url.search}`, 301);
    }
    const m = host.match(/^([^.]+)\.(playorig\.in|prodigyorigin\.com)$/);
    if (m) {
      const [, label, domain] = m;
      const rule = SUBDOMAINS[label];
      if (rule && (domain === "playorig.in" || OLD_DOMAIN_LABELS.has(label))) {
        return Response.redirect(rule[0], rule[1]);
      }
    }
    return new Response("Not found", { status: 404 });
  },
};
