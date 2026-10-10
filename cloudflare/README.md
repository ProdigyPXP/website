# play-redirects Worker

`redirects-worker.js` is deployed as the Cloudflare Worker `play-redirects`
(routes `*.playorig.in/*`, `prodigyorigin.com/*`, `*.prodigyorigin.com/*`).

| Host | Destination | Status |
|---|---|---|
| `playorig.in`, `www.playorig.in` | pass-through to GitHub Pages | - |
| `prodigyorigin.com`, `www.prodigyorigin.com` | `https://playorig.in<path><query>` | 301 |
| `firefox.*` (both domains) | Firefox Add-ons listing | 301 |
| `edge.*` (both domains) | Microsoft Edge Add-ons listing | 301 |
| `chrome.*` (both domains) | Chrome Web Store listing | 301 |
| `extension.*` (both domains), `ext.playorig.in` | `https://playorig.in/get` | 302 |
| `discord.`/`dsc.playorig.in` | `https://dsc.gg/ProdigyPXP` | 301 |
| `youtube.`/`yt.playorig.in` | `https://youtube.com/@ProdigyPXP` | 301 |
| `github.`/`gh.playorig.in` | `https://github.com/ProdigyPXP` | 301 |
| `privacy.`/`privacypolicy.playorig.in` | PRIVACY_POLICY.md on GitHub | 301 |

Unknown hosts return 404. DNS: playorig.in apex = GitHub Pages A records (DNS-only);
wildcard and prodigyorigin.com records are proxied dummies (192.0.2.1) so the Worker answers.
