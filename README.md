# Iboga Domains — Technical Infrastructure Research

Researched: 2026-05-12

Domains covered: **iboga.store** (legitimate shop) · **iboga.blog** (SEO spam / gambling redirect)

---

# iboga.store

Researched: 2026-05-12

---

## Domain & Registration

| Field | Value |
|-------|-------|
| **Domain** | iboga.store |
| **Registrar** | Namecheap, Inc. (IANA ID 1068) |
| **Registered** | 2018-10-10 |
| **Expires** | 2027-10-10 |
| **Last updated** | 2024-11-19 |
| **DNSSEC** | Unsigned |
| **Status** | clientTransferProhibited |

---

## DNS

| Field | Value |
|-------|-------|
| **Provider** | Wix DNS (fully managed) |
| **Nameservers** | `ns2.wixdns.net`, `ns3.wixdns.net`, `cdn1.wixdns.net` |
| **SOA admin** | `support.wix.com` |
| **A records** | `185.230.63.171`, `185.230.63.186`, `185.230.63.107` |
| **MX** | `eforward1.registrar-servers.com` (Namecheap email forwarding — no real mail server) |
| **TXT** | none |

---

## Hosting & Infrastructure

| Field | Value |
|-------|-------|
| **Provider** | **Wix.com Ltd.** (AS58182) |
| **IP block** | 185.230.63.0/24 — Wix anycast cluster |
| **rDNS pattern** | `unalocated.63.wixsite.com` |
| **Location** | New York City, US (anycast — edge PoPs globally) |
| **Web server** | **Pepyaka** (Wix proprietary Nginx-based server) |
| **Protocol** | HTTP/2 + HTTP/3 (`alt-svc: h3=":443"`) |

---

## CDN / Delivery

| Field | Value |
|-------|-------|
| **Primary CDN** | **Fastly** — confirmed via `x-served-by: cache-fra-eddf8230182-FRA` (Frankfurt PoP) |
| **Secondary** | **Google CDN / GFE** — `via: 1.1 google` |
| **Asset CDN** | `static.wixstatic.com`, `static.parastorage.com`, `siteassets.parastorage.com` |
| **Caching** | Varnish SSR cache (`ssr-caching` cookie) + Fastly edge cache |
| **Image formats** | AVIF with dynamic quality/resize params |

---

## CMS / Platform

| Field | Value |
|-------|-------|
| **Platform** | **Wix** (SaaS website builder, closed-source) |
| **eCommerce** | Wix Stores (built-in) |
| **Booking** | Wix Bookings (`/book-online`) |
| **Gift cards** | Wix native gift card feature |
| **Languages** | English + German |

No custom framework, no self-hosted CMS. Fully managed Wix environment.

---

## TLS / Security

| Field | Value |
|-------|-------|
| **Certificate** | Let's Encrypt (R12 intermediate) |
| **Subject** | `CN=iboga.store` |
| **HSTS** | `max-age=31556952` (~1 year) |
| **x-content-type-options** | `nosniff` |
| **CSP** | Not detected |
| **DNSSEC** | Not enabled |

---

## Notable HTTP Headers

```
server: Pepyaka
x-wix-request-id: <per-request UUID>
x-cache-status: MISS / HIT
x-served-by: cache-fra-eddf8230182-FRA
server-timing: cache, varnish, dc (fastly_g)
ssr-caching: miss / hit (Varnish SSR layer)
content-language: uk  ← suspicious, likely Wix misconfiguration (site is EN/DE)
via: 1.1 google
alt-svc: h3=":443"; ma=2592000
```

---

## Site Structure (from search index)

| Path | Description |
|------|-------------|
| `/en` | Homepage (English) |
| `/en/shop` | Product shop |
| `/en/book-online` | Booking system (Wix Bookings) |
| `/en/product-page/*` | Individual product pages |
| `/en/gift-card` | Gift cards |
| `/en/leere-seite` | Shipping & payment info |
| `/en/über-uns` | About Us |

Products include iboga root bark, total alkaloids (TA), HCL, homeopathic preparations, and essence formulations.

---

## MCP Servers for Tech Stack Detection

Tools that can automate this kind of fingerprinting via Claude Code:

### 1. Apify — Wappalyzer Replacement
- **Actor:** `nexgendata/wappalyzer-replacement`
- **Fingerprints:** 6,000+ technologies / 100+ categories
- **Pricing:** $10 / 1,000 domains
- **Method:** HTTP analysis, no browser automation required
- **Config:**
  ```json
  {
    "mcpServers": {
      "apify": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "https://mcp.apify.com/?tools=nexgendata/wappalyzer-replacement",
          "--header",
          "Authorization: Bearer <YOUR_API_TOKEN>"
        ]
      }
    }
  }
  ```

### 2. Apify — Website Tech Stack Detector
- **Actor:** `santamaria-automations/website-tech-detector`
- **Fingerprints:** 2,000+ technologies
- **Pricing:** $5 / 1,000 sites
- **Config:**
  ```json
  {
    "mcpServers": {
      "apify": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "https://mcp.apify.com/?tools=santamaria-automations/website-tech-detector",
          "--header",
          "Authorization: Bearer <YOUR_API_TOKEN>"
        ]
      }
    }
  }
  ```

### 3. BuiltWith MCP
- **Database:** 100,000+ tracked technologies (largest available)
- **Pricing:** $295/mo (API subscription required)
- **Strength:** Historical data, tracking relationships

### 4. TheirStack MCP
- **URL:** `mcp.theirstack.com`
- **Method:** Job posting analysis — reveals backend/infra not exposed in HTTP
- **Pricing:** Free tier (200 credits/mo), $59/mo paid
- **Strength:** Detects databases, DevOps tools, ERPs invisible to frontend scanners
- **Compatible with:** Claude, Cursor, ChatGPT, Windsurf

### 5. Wappalyzer
- No MCP available, but free browser extension exists at wappalyzer.com

---

## Summary

iboga.store is **entirely built and hosted on Wix** with zero custom infrastructure. Every layer — DNS, web server, CDN, eCommerce, booking — is Wix-managed. The only third-party components are:
- **Namecheap** as domain registrar
- **Fastly + Google** as the underlying CDN network (used by Wix itself, not configured by the site owner)
- **Let's Encrypt** for TLS (auto-provisioned by Wix)
- **Namecheap email forwarding** for the MX record

The site owner has no direct control over infrastructure; all configuration happens through the Wix dashboard.

---
---

# iboga.blog

Researched: 2026-05-12

> **Warning:** iboga.blog is currently NOT a legitimate iboga business site. It was a legitimate German ibogaine blog (companion to iboga.store) for 5+ years before the domain expired and was captured by a gambling spam operator in April 2026. The original owner's Wix content is intact; only the domain registration changed hands.

---

## Domain & Registration

| Field | Value |
|-------|-------|
| **Domain** | iboga.blog |
| **Registrar** | Spaceship, Inc. (IANA ID 3862) |
| **Registered** | 2026-04-20 (22 days before research) |
| **Expires** | 2027-04-20 |
| **Last updated** | 2026-04-25 |
| **DNSSEC** | Unsigned |
| **Status** | clientTransferProhibited, serverTransferProhibited |
| **Registrant** | Fully redacted (GDPR/privacy protection) |

---

## DNS

| Field | Value |
|-------|-------|
| **Provider** | **Cloudflare** (fully managed) |
| **Nameservers** | `gemma.ns.cloudflare.com`, `jason.ns.cloudflare.com` |
| **A records** | `172.67.147.44`, `104.21.95.192` (Cloudflare anycast — real origin IP hidden) |
| **MX** | None — no email configured |
| **TXT** | `google-site-verification=Eft6DlaQCIrqBkERum5SQsGYDkJE0H37vbZEz19Sllc` |

The Google site verification TXT record is used to submit the spam sitemaps to Google Search Console and maximize indexing.

---

## Hosting & Infrastructure

| Field | Value |
|-------|-------|
| **Proxy** | **Cloudflare** (AS13335) — origin server IP hidden |
| **Proxy IPs** | `172.67.147.44`, `104.21.95.192` (San Francisco, anycast) |
| **Origin** | Unknown — Cloudflare proxy conceals real host |
| **Web server** | Cloudflare edge (origin server identity masked) |
| **Backend language** | **PHP/7.4.33** (`x-powered-by` header) — EOL since November 2022 |
| **Session** | `PHPSESSID` cookie — classic PHP session management |
| **Protocol** | HTTP/2 + HTTP/3 (`alt-svc: h3=":443"; ma=86400`) |

The use of PHP 7.4 (unsupported for 3+ years) suggests either a very cheap shared host or a deliberately minimal spam setup.

---

## CDN / Delivery

| Field | Value |
|-------|-------|
| **CDN** | **Cloudflare** (both proxy and CDN) |
| **cf-cache-status** | DYNAMIC (no caching — all requests hit origin) |
| **Cache-control** | `no-store, no-cache, must-revalidate` — caching explicitly disabled |

Caching is disabled, likely because each page hit needs to fire the redirect and analytics tracker.

---

## Observed Behavior — Redirect & Spam

The site performs an **immediate JavaScript redirect** on every page load:

```javascript
// LiveInternet analytics ping (Russian service)
new Image().src = "//counter.yadro.ru/hit;iboga?r" + escape(document.referrer) + ...

// Then immediately redirect all visitors:
window.location = "https://vibexconnect.life/?s=157&t1=904&t2=&t3=u27sn8trep4r&t4=casino20";
```

| Parameter | Meaning |
|-----------|---------|
| `s=157` | Affiliate source/site ID |
| `t1=904` | Campaign/tracker ID |
| `t3=u27sn8trep4r` | Sub-affiliate tracking token |
| `t4=casino20` | Campaign tag |

**Redirect target:** `vibexconnect.life` (online casino/gambling affiliate)
- Also behind Cloudflare (IPs: `104.21.43.172`, `172.67.182.139`)
- Returns HTTP 403 to bots/direct requests

---

## Analytics

| Service | Detail |
|---------|--------|
| **LiveInternet** | `counter.yadro.ru` — Russian web analytics platform, fires before redirect |

LiveInternet is a Russian analytics service. Its presence is a strong indicator of a Russian/Eastern European operator.

---

## SEO Spam Infrastructure

The `robots.txt` lists **50+ randomly-named sitemaps**, each containing hundreds of random-slug URLs:

```
Sitemap: https://iboga.blog/sitemap-gstictrxgi.xml
Sitemap: https://iboga.blog/sitemap-mthsidhmzl.xml
Sitemap: https://iboga.blog/sitemap-upiqm.xml
... (50+ more)
```

Each sitemap entry:
```xml
<url>
  <loc>https://iboga.blog/dbvkac4jt3</loc>
  <lastmod>2026-05-12T19:17:36+03:00</lastmod>   <!-- +03:00 = Moscow timezone -->
  <changefreq>always</changefreq>
  <priority>1.0</priority>
</url>
```

The `+03:00` timezone in `lastmod` timestamps points to **Moscow Standard Time (MSK)** as the server's local timezone — consistent with a Russian operation.

This is a classic **doorway page / SEO poisoning** attack:
1. Register a plausible domain (`iboga.blog`)
2. Set up Cloudflare for protection and IP masking
3. Generate thousands of random-slug doorway pages
4. Submit all sitemaps to Google via Search Console (verified with TXT record)
5. When Google users click through → redirect to casino affiliate → earn commission

---

## TLS / Security

| Field | Value |
|-------|-------|
| **Certificate** | Let's Encrypt (E8 intermediate) |
| **Subject** | `CN=iboga.blog` |
| **HSTS** | Not detected |
| **DNSSEC** | Not enabled |
| **Cloudflare NEL** | Network Error Logging enabled (operator monitors delivery failures) |

---

## Notable HTTP Headers

```
server: cloudflare
x-powered-by: PHP/7.4.33
cf-cache-status: DYNAMIC
cf-ray: 9faaba805d9e5b2d-VIE   ← VIE = Vienna Cloudflare PoP
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
set-cookie: PHPSESSID=...
cache-control: no-store, no-cache, must-revalidate
pragma: no-cache
alt-svc: h3=":443"; ma=86400
```

The `cf-ray` suffix `VIE` indicates the request was served from Cloudflare's **Vienna, Austria** edge — consistent with a European visitor/researcher and the site's apparent Central/Eastern European targeting.

---

## Summary (Current State)

iboga.blog is currently controlled by a **gambling SEO spam operator** (registered April 2026). Key current characteristics:

- All traffic silently redirected to a casino affiliate network
- Cloudflare proxy masks origin server and real host
- Russian analytics (LiveInternet) and Moscow timezone suggest Eastern European operation
- Thousands of doorway pages for Google indexing
- PHP 7.4 (severely outdated), cheap/minimal hosting
- No email, no real content, no legitimate purpose

---

## Site History — What iboga.blog Was

iboga.blog was a **legitimate, actively maintained German ibogaine information blog** for at least 5 years, run by the same person/entity who operates iboga.store.

### What the original site was

| Field | Value |
|-------|-------|
| **Title** (2020–2024) | "Iboga-Blog \| Iboga Behandlung" |
| **Title** (2025–early 2026) | "Iboga Treatment in Deutschland – Infos, Begleitung & Termine" |
| **Language** | German (primary), then multilingual: DE, EN-GB, ES, FR, PL |
| **Platform** | Wix (same as iboga.store — likely the same Wix account) |
| **Connection to iboga.store** | Explicitly linked: *"Informiere dich über den Kauf von Iboga aus nachhaltigem Anbau bei iboga.store"* |
| **Content** | Ibogaine treatment information, preparation/guidance ("Begleitung"), appointment booking, video content ("Dellas persönlichen Erfahrungen mit Ibogain") |
| **Wix Site ID** | `3e09bf5b-8a79-4a84-a317-5cc5ff7bf522` |
| **Wix metaSiteId** | `78635bb1-87de-4c43-a1ef-d0247f5f68fd` |
| **Verification** | Pinterest domain verify + Google Search Console |

The 2025 version was an improved, multilingual site — the owner was actively investing in the blog through at least October 2025.

### Wayback Machine capture timeline

| Date | Status | What was there |
|------|--------|----------------|
| 2020-12-10 | 200 | First capture — legitimate Wix ibogaine blog |
| 2021–2022 | 200 | Continuous legitimate site |
| 2023-09-22 | 200 | Still Wix, video-focused content |
| 2024-02–08 | 200 | Legitimate site, regularly updated |
| 2024-12-15 | 200 | Last capture of original "Iboga-Blog" branding |
| 2025-02-15 | 200 | **Still legitimate** — updated title and multilingual |
| 2025-06-23 | 200 | **Still legitimate** — 5-language Wix site |
| 2025-08-03 | 200 | **Still legitimate** |
| 2025-10-14 | 200 | **Still legitimate** |
| **2026-01-18** | **200** | **Last legitimate capture** |
| *gap* | — | Domain expires (estimated Feb–Mar 2026) |
| **2026-04-20** | — | **Re-registered by spam operator via Spaceship** |
| 2026-04-25 | — | DNS changed to Cloudflare, spam deployed |
| 2026-05-12 | 200 | Gambling redirect (current state) |

### What happened — root cause

The domain **expired** sometime between January 18, 2026 and April 20, 2026 (~90-day gap). Standard expiry timeline:
- Domain stops renewing → 30-day grace period → 30-day redemption period → pending delete → publicly available
- A drop-catching service or the spam operator was monitoring the domain and registered it the day it became available (April 20, 2026)

**This is NOT a hack.** The Wix account and all site content are still intact. Only the domain registration changed hands when the renewal lapsed. The owner's Wix site still exists at its Wix infrastructure IDs (above) — it just no longer has iboga.blog pointing to it.

---

## Recovery Guide for the Original Owner

### Step 0 — Confirm your Wix content is safe

Log into your Wix account. Your site (metaSiteId `78635bb1-87de-4c43-a1ef-d0247f5f68fd`) and all its content should still be there. Wix stores the site independently of which domain points to it. **You have not lost your content — only the domain.**

---

### Step 1 — Immediate: get a new domain and restore the site (days)

This is the fastest path to being back online:

1. Register a new domain — suggestions:
   - `iboga-behandlung.de` (your primary audience is German-speaking)
   - `ibogablog.de`
   - `iboga.blog` is lost, but `.de` is probably more appropriate for your audience anyway
2. In your Wix dashboard → **Settings → Domains** → connect the new domain to your existing site
3. Submit the new sitemap to Google Search Console to recover SEO rankings

This takes hours, not months, and costs ~€10–15/year.

---

### Step 2 — Parallel: file abuse reports (days, no cost)

These won't get the domain back directly but can get the spam site taken down, which reduces harm to your brand and audience:

| Target | Where to report | What to say |
|--------|----------------|-------------|
| **Spaceship (current registrar)** | `abuse@spaceship.com` | Domain is being used for malicious gambling redirect / SEO spam. Include Wayback Machine links showing your prior legitimate use. |
| **Cloudflare** | cloudflare.com/abuse/ | Phishing/malware redirect — the site immediately redirects visitors to a gambling affiliate without consent |
| **.blog TLD registry** | `abuse@nic.blog` (Knock Knock WHOIS There / Fury Registry) | Domain registered for SEO spam gambling redirect after expiry drop |
| **Google Safe Browsing** | safebrowsing.google.com/safebrowsing/report_phish/ | Report as malicious redirect |
| **Google Search Console** | If you still have GSC access for iboga.blog, submit a spam report for the new content and disavow any links |

---

### Step 3 — Optional: UDRP complaint to reclaim the domain (60–90 days, €1,500–5,000)

UDRP (Uniform Domain-Name Dispute-Resolution Policy) is the ICANN mechanism to reclaim domains from bad-faith registrants. You need to prove three things:

1. The domain is identical/confusingly similar to a name/mark you have rights to
2. The current registrant has no legitimate interest in the domain
3. The domain was registered and is being used in bad faith

**Your case is strong on points 2 and 3** — the gambling redirect is clear bad-faith use, the operator has zero connection to iboga, and your 5+ year prior use is documented in the Wayback Machine.

**Point 1 is the weakest link.** UDRP was designed for registered trademarks. However, some UDRP panels accept unregistered ("common law") marks if you can show significant continuous use. Your 5 years of documented iboga content and documented connection to iboga.store strengthens this.

**How to file:**
- **WIPO** (recommended): wipo.int/amc/en/domains/ — most experienced, ~$1,500 for a single panelist
- **ICANN accredited providers**: also Forum (adrforum.com), ADNDRC, CAC

**Evidence to gather before filing:**
- Screenshots of the Wayback Machine snapshots showing your legitimate site
- Links to archived versions: `web.archive.org/web/20251014095800/https://www.iboga.blog/`
- Any domain registration receipts, invoices, or emails from your previous registrar
- Google Analytics / Search Console data showing traffic to iboga.blog when you owned it
- Proof of connection to iboga.store (same branding, cross-links)

---

### Step 4 — Protect yourself going forward

Once you recover or replace the domain:
- Set **auto-renewal** on ALL your domains
- Enable **domain lock** (clientTransferProhibited) at your registrar
- Set renewal reminders 60 and 30 days before expiry
- Consider registering `iboga.blog` again immediately if you win UDRP (it will be transferred to you)
- Also register defensive variants: `.de`, `.at`, `.com` if not already done
