# CyodaLight Website — Final Design & Build Specification

**Project:** CyodaLight  
**Domain:** `[DOMAIN_PLACEHOLDER]` — confirm before build (options: cyodalight.io / light.cyoda.com / cyoda.com/light)  
**Version:** 2.0 (merged from two prior drafts)  
**Date:** April 2026  
**Purpose:** Complete specification for Claude Code to generate the CyodaLight developer-first website  
**Mode:** Light mode only. No dark mode toggle.

> **Placeholder convention:** Any value marked `[PLACEHOLDER]` is not yet confirmed and must be resolved before handoff to Claude Code. Do not guess or invent values — leave the placeholder visible.

---

## 1. Product Framing

CyodaLight is the free, open source, locally-runnable version of the Cyoda platform.

It gives backend developers a way to build and run Cyoda-style applications locally with minimal setup. It implements the core Cyoda APIs, workflow engine, gRPC integrations, and entity lifecycle behaviour in a single Go binary. It runs in two modes:

- **In-memory mode** — zero external dependencies, resets on restart, starts in under 2 seconds. For fast local development and automated testing.
- **PostgreSQL mode** — durable, transactional entity storage. For local integration testing against a real database.

CyodaLight is not a simulation or a demo. The gRPC API it exposes is identical to Cyoda Cloud. Code written against CyodaLight runs against Cyoda Cloud without modification.

---

## 2. Website Objective

The homepage must help a technical visitor answer three questions in under 10 seconds:

1. What is CyodaLight?
2. Why should I care?
3. How do I run it locally?

Beyond that, it must make it easy to:
- reach the documentation at [docs.cyoda.net](https://docs.cyoda.net)
- reach the GitHub repository at [github.com/cyoda-io/cyodalight](https://github.com/cyoda-io/cyodalight)
- understand the path from local development to production Cyoda
- be accurately interpreted by AI assistants and search engines

---

## 3. Design Philosophy

**Primary inspiration:** DuckDB.org — studied for structure and tone, not copied.

### Desired feel
- Developer-first
- Light, clean, technical
- Calm and confident
- Practical, not promotional
- Documentation-adjacent
- Fast to scan
- High signal, low friction

### What to avoid
- Heavy marketing language
- Generic SaaS gradients
- Large decorative illustrations
- Enterprise-corporate tone
- Long hero paragraphs
- Animations that delay content
- "Book a demo" as primary action

### Emotional outcome
A developer landing on this page should think:
- "I understand this."
- "This looks real."
- "I can try this now."
- "This is not bloated."

---

## 4. Target Audience

Backend developers who write in Java, Python, Go, or Kotlin, building stateful, workflow-driven systems in financial, compliance, operational, or orchestration domains. They may also be:

- Solution architects evaluating Cyoda before full platform adoption
- Technical buyers assessing platform fit before a commercial conversation
- Startup or enterprise backend teams wanting to prove the entity model locally
- Partners building integrations against Cyoda APIs

They are comfortable with gRPC, Docker, CLI tools, and reading code on a webpage. They do not want to talk to sales.

---

## 5. Content Strategy

Every section of this site must be:

- Self-contained — readable and meaningful in isolation
- Fact-based — no vague claims, no adjectives where specifics exist
- AI-readable — useful when extracted and cited by an LLM assistant
- Technically precise — define any jargon used
- Written in plain English

**Copy style rules:**
- Short sentences
- Specifics over adjectives: "starts in under 2 seconds" not "starts fast"
- Show code, do not only describe code
- No banned words: seamless, robust, cutting-edge, revolutionary, game-changing, leverage, streamline, transformative, unprecedented
- No rhetorical questions posed for dramatic effect
- No "think of it as..." metaphors unless the analogy is genuinely clearer than the direct explanation
- No em dashes — use commas or parentheses

---

## 6. Information Architecture

The homepage is a single focused page. Section order is fixed:

1. Header / nav
2. Hero with immediate run command
3. Proof bar (language and tech badges)
4. What it is (prose + diagram)
5. Hello World (minimal code example)
6. Key capabilities grid
7. Start local, deploy later (progression diagram)
8. FAQ
9. Final CTA
10. Footer

Do not add sections beyond these for V1. If a section doesn't increase understanding, remove it.

---

## 7. Visual Design System

### 7.1 Mode

**Light mode only.** No dark mode toggle. No `prefers-color-scheme` auto-switching.

### 7.2 Colour Palette

```css
/* Backgrounds */
--bg-primary:       #ffffff       /* Main page background */
--bg-secondary:     #f8fafc       /* Section alternates, cards */
--bg-code:          #f1f5f9       /* Code block backgrounds */
--bg-proof-bar:     #f1f5f9       /* Trust bar background */

/* Borders */
--border-default:   #e2e8f0       /* Standard borders */
--border-strong:    #cbd5e1       /* Emphasis borders, table lines */

/* Text */
--text-primary:     #0f172a       /* Main body text */
--text-secondary:   #475569       /* Labels, captions, metadata */
--text-muted:       #94a3b8       /* Placeholders, disabled states */

/* Accent — electric blue */
--accent-primary:   #2563eb       /* Links, primary buttons, highlights */
--accent-hover:     #1d4ed8       /* Button hover */
--accent-light:     #eff6ff       /* Accent background tints */

/* Semantic */
--success:          #059669       /* Green — in-memory badge */
--warning:          #d97706       /* Amber — PostgreSQL badge */
--code-keyword:     #1e40af       /* Code: keywords */
--code-string:      #065f46       /* Code: strings */
--code-comment:     #94a3b8       /* Code: comments */
--code-function:    #7c3aed       /* Code: function names */
--code-number:      #b45309       /* Code: numbers */
```

### 7.3 Typography

**Body font:** Inter (self-hosted) with system-ui fallback  
**Code font:** JetBrains Mono (self-hosted) with monospace fallback

```css
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

/* Scale */
--text-xs:   0.75rem    /* 12px — badges, labels */
--text-sm:   0.875rem   /* 14px — captions, code */
--text-base: 1rem        /* 16px — body copy */
--text-lg:   1.125rem   /* 18px — subheads */
--text-xl:   1.25rem    /* 20px — feature card titles */
--text-2xl:  1.5rem     /* 24px — section headings */
--text-3xl:  1.875rem   /* 30px — hero subhead */
--text-4xl:  2.25rem    /* 36px — hero headline mobile */
--text-5xl:  3rem        /* 48px — hero headline desktop */

/* Line heights */
--leading-tight:  1.25
--leading-normal: 1.6
--leading-code:   1.5
```

### 7.4 Spacing

8px base grid. All spacing is a multiple of 8px: 8, 16, 24, 32, 40, 48, 64, 80, 96.

### 7.5 Border Radius

```css
--radius-sm:  4px
--radius-md:  8px
--radius-lg:  12px
--radius-pill: 9999px
```

### 7.6 Style Principles

- Utility over decoration
- Code before illustration
- Borders over shadows
- No "blob" backgrounds
- No glassmorphism
- No noisy textures
- No full-bleed gradients
- Subtle box-shadow only on cards: `0 1px 3px rgba(0,0,0,0.08)`

---

## 8. Header / Navigation

### Content

```
[CyodaLight logo + wordmark]          [Docs]  [GitHub ★]  [Cyoda]
```

- **Logo:** Cyoda "C" glyph + wordmark `cyoda` in regular weight + `light` in semibold. SVG, provided separately.
- **Docs** → `https://docs.cyoda.net` (same tab)
- **GitHub** → `https://github.com/cyoda-io/cyodalight` (same tab). Show live star count via GitHub API, gracefully omit if unavailable.
- **Cyoda** → `https://cyoda.com` (same tab)

### Rules

- Height: 56px
- Background: `--bg-secondary` with a 1px bottom border (`--border-default`)
- Sticky on scroll, no opacity change or blur effect
- No dropdown menus for V1
- Mobile: hamburger collapses Docs, GitHub, Cyoda into a full-width drawer
- No CTA button in the nav for V1

---

## 9. Hero Section

This is the most important section. A developer must understand the product and see how to run it without scrolling.

### Layout

Two-column on desktop (text left, install panel right). Single column on mobile, install panel below text.

### Left column

```
[Badge: Open Source · MIT License]

Run workflow-driven backend
applications locally.

CyodaLight is the open-source local runtime for Cyoda.
Run in memory for speed, or use PostgreSQL for durable state.

[Get started →]   [View on GitHub]
```

- **Headline:** `Run workflow-driven backend applications locally.`
- **Subhead:** One sentence, max 25 words. See above.
- **Primary CTA:** `Get started →` — scrolls to Quick Start / links to docs quickstart
- **Secondary CTA:** `View on GitHub` — text link style, not a button

**Headline font:** 48px desktop / 32px mobile. Weight: 700. Colour: `--text-primary`.

### Right column — install panel

Tabbed code panel. Tab labels: `In-Memory` | `PostgreSQL` | `Docker`

**Tab: In-Memory**
```bash
# [PLACEHOLDER: confirm install command]
# Example format:
[INSTALL_COMMAND] start --mode=memory

# Starts at http://localhost:8080
# gRPC available at localhost:9090
```

**Tab: PostgreSQL**
```bash
[INSTALL_COMMAND] start --mode=postgres \
  --postgres-url=postgres://localhost:5432/cyoda
```

**Tab: Docker**
```bash
# [PLACEHOLDER: confirm Docker image name]
docker run -p 8080:8080 \
  [DOCKER_IMAGE]:latest --mode=memory
```

Below the panel, a single supporting line:
```
✓ Zero dependencies in memory mode  ·  Starts in under 2 seconds
```

### Hero rules

- No video
- No carousel
- No illustration
- No animated text
- Code visible above the fold on desktop
- Hero background: `--bg-primary` white. Subtle CSS grid pattern optional (CSS only, no image file).

---

## 10. Proof Bar

Immediately below the hero. A single quiet horizontal row that reinforces technical credibility.

```
Compatible with:  Java  ·  Python  ·  Go  ·  Kotlin  |  gRPC API  |  MIT License  |  Open Source
```

- Background: `--bg-proof-bar`
- Small pill tags or inline text labels. No external icon CDN.
- Language icons: inline SVG only (Java, Python, Go, Kotlin official mark colours)
- Font size: `--text-sm`
- No links, no hover effects — this is purely visual confirmation

---

## 11. What It Is

**Section heading:** `What it is`

### Layout

Two-column on desktop (prose left, diagram right). Stacked on mobile.

### Prose (80-120 words)

CyodaLight is a Go implementation of the Cyoda platform API. It runs the same entity workflow engine, gRPC integrations, and entity lifecycle behaviour as the full Cyoda platform — in a single binary you can start on your laptop in under two seconds.

Two modes are available. In-memory mode has zero external dependencies and resets on restart, making it useful for development and automated testing. PostgreSQL mode persists entity state durably across restarts, suitable for local integration testing against a real database.

The APIs are identical to Cyoda Cloud. Code written against CyodaLight runs against Cyoda Cloud without modification.

### Diagram

Static inline SVG. Dark text on light background. Labels:

```
Your Application Code
         |
        gRPC
         |
  [CyodaLight Binary]
  ┌──────────────────┐
  │   Entity Engine  │
  │   Workflow FSM   │
  │   State History  │
  └────────┬─────────┘
           │
  ┌────────┴─────────┐
  │   In-Memory  OR  │
  │    PostgreSQL    │
  └──────────────────┘
```

Diagram width: max 420px. No animation. Readable at 1x on mobile.

---

## 12. Hello World

**Section heading:** `Hello World`

This section is required. Show the smallest useful CyodaLight example.

The microcopy framing: *The smallest useful Cyoda example: one entity, one workflow, one branch, one result.*

### The example

Use a time-based "Good morning / Good afternoon" example — a single entity that takes one of two workflow paths depending on the time of day. This is intentionally non-domain-specific to maximise approachability.

The example must demonstrate:
- one entity definition
- one workflow with two states
- one branching condition
- one printed outcome

### Layout

Brief explanation left. Code block right. Below the code block: `→ Full quick start on docs.cyoda.net`

### Language tabs

Show the example in all four languages: `Java` | `Python` | `Go` | `Kotlin`

Tab state persisted in `localStorage`. If a user picks Go, they stay on Go across all code blocks on the page.

### Go example (model for other languages)

```go
package main

import (
    "context"
    "fmt"
    "time"
    cyoda "[PLACEHOLDER: confirmed Go module path]"
)

func main() {
    client, _ := cyoda.NewClient("localhost:8080")
    ctx := context.Background()

    // Create a Greeting entity
    entity, _ := client.CreateEntity(ctx, &cyoda.Entity{
        Type:  "Greeting",
        State: "PENDING",
        Data: map[string]any{
            "hour": time.Now().Hour(),
        },
    })

    // Workflow branches on the hour field
    if time.Now().Hour() < 12 {
        client.Transition(ctx, entity.ID, "MORNING")
        fmt.Println("Good morning")
    } else {
        client.Transition(ctx, entity.ID, "AFTERNOON")
        fmt.Println("Good afternoon")
    }
}
```

> **Note:** The Go module path, function signatures, and client API shape are `[PLACEHOLDER]` until the library is confirmed. Adjust all language examples to match actual published APIs before build.

---

## 13. Key Capabilities

**Section heading:** `What you get`

Grid layout: 4-column desktop, 2-column tablet, 1-column mobile.

Each card:
- Inline SVG icon, 24x24, `--accent-primary` colour
- Short title, 3-5 words
- One sentence. Max two lines on desktop.
- Background: `--bg-secondary`, border: `--border-default`, `--radius-md`

| Icon | Title | Description |
|------|-------|-------------|
| ⚡ | In-memory mode | Zero dependencies. Starts in under 2 seconds. Resets cleanly between runs. |
| 🐘 | PostgreSQL mode | Durable, transactional entity storage for local integration testing. |
| 🔁 | Full workflow engine | Finite state machine with explicit transition rules, identical to Cyoda Cloud. |
| 🔌 | gRPC API | Same API surface as production Cyoda. One config change to switch targets. |
| 🕓 | Entity lifecycle | Immutable state history, auditable transitions, queryable at any point in time. |
| 🌐 | Language-agnostic | Client libraries for Java, Python, Go, and Kotlin. Any gRPC-capable language works. |
| 🧪 | Test harness | Reset entity state between tests via a single API call. No teardown scripts needed. |
| 🚀 | Path to production | Applications built on CyodaLight deploy to Cyoda Cloud without API changes. |

Card hover state: border colour changes to `--border-strong`. No lift effect, no shadow change.

---

## 14. Start Local, Deploy Later

**Section heading:** `Start local. Deploy later.`

A horizontal three-stage progression diagram. Static SVG or CSS-drawn. Arrows between stages.

```
[CyodaLight · In-Memory]  →  [CyodaLight · PostgreSQL]  →  [Cyoda Cloud]
      Development                Integration Testing              Production
```

Under each stage, a two-line description:

**Stage 1 — CyodaLight · In-Memory**  
Start here. Run your entity model, try the APIs, build your workflow logic.

**Stage 2 — CyodaLight · PostgreSQL**  
Add durable state. Run your integration tests with the same code.

**Stage 3 — Cyoda Cloud**  
Managed, distributed, horizontally scalable. Same APIs. No code changes.

CTA below diagram: `Learn about Cyoda →` links to `https://cyoda.com`

---

## 15. FAQ

**Section heading:** `Common questions`

Required for both SEO and AI/LLM consumption. Each Q&A is a native HTML `<details>/<summary>` accordion — no JS required. Marked up with `FAQPage` + `Question` + `AcceptedAnswer` JSON-LD schema.

**Required questions and answers:**

**1. What is CyodaLight?**  
CyodaLight is a free, open source Go implementation of the Cyoda platform. It runs the Cyoda entity workflow engine and gRPC API locally, as a single binary, with no distributed cluster required. It supports in-memory mode for development and PostgreSQL mode for durable local testing.

**2. Is it free and open source?**  
Yes. CyodaLight is released under the MIT License. There are no usage limits, no telemetry, and no account required to run it.

**3. What is the difference between in-memory and PostgreSQL mode?**  
In-memory mode stores entity state in process memory. It has zero external dependencies and resets when the process stops. PostgreSQL mode stores entity state durably in a PostgreSQL database. Use in-memory for development and fast test cycles; use PostgreSQL when you need persistence across restarts.

**4. Who is CyodaLight for?**  
Backend developers building stateful, workflow-driven applications. Technical evaluators assessing Cyoda before a commercial deployment. Teams wanting to test their application logic locally before moving to Cyoda Cloud.

**5. Can I build locally and deploy to Cyoda later?**  
Yes. CyodaLight exposes the same gRPC API as Cyoda Cloud. Applications built against CyodaLight run against Cyoda Cloud without API changes. Change the target host; nothing else changes.

**6. What languages are supported?**  
Java, Python, Go, and Kotlin via gRPC client libraries. Any language with a gRPC implementation can connect to the API.

**7. How does CyodaLight relate to Cyoda Cloud?**  
CyodaLight is the local development version of the Cyoda platform. Cyoda Cloud is the fully distributed, managed version with horizontal scalability, multi-node replication, and Cassandra-backed storage. CyodaLight is designed to be API-compatible so that local work transfers to the cloud platform directly.

**8. Where is the documentation?**  
Full documentation is at [docs.cyoda.net](https://docs.cyoda.net). The CyodaLight quick start guide is the recommended first stop.

---

## 16. Final CTA

**Section heading:** `Run it locally`

Repeat the shortest run path. Background: `--bg-secondary`.

```bash
[PLACEHOLDER: shortest confirmed single install + start command]
```

Below the command:
- `[Get started →]` — primary button, links to docs quickstart
- `[View on GitHub]` — secondary text link

No newsletter signup. No sales form. No contact form.

---

## 17. Footer

```
[CyodaLight wordmark]

Open source under the MIT License.
A project by Cyoda — cyoda.com

[GitHub]  [docs.cyoda.net]  [cyoda.com]

© 2026 Cyoda Ltd. All rights reserved.
```

- No social media links beyond GitHub
- No cookie banner (static site with no tracking cookies does not require one under most jurisdictions — confirm with legal if analytics are added later)
- Footer background: `--bg-secondary`, top border: `--border-default`

---

## 18. Technical Implementation Requirements

### Stack

- **Static site** — Hugo (preferred for build speed) or Jekyll
- **No JavaScript framework** on initial render — page must be fully readable with JS disabled
- **JavaScript is used only for:** language tab switching, copy-to-clipboard buttons
- **CSS:** single compiled stylesheet, no CSS-in-JS
- **Fonts:** self-hosted Inter + JetBrains Mono. No Google Fonts CDN.
- **No render-blocking resources** — CSS in `<head>`, JS at end of `<body>` with `defer`

### File Structure

```
/
├── index.html
├── llms.txt
├── llms-full.txt
├── robots.txt
├── sitemap.xml
├── /assets
│   ├── /css
│   │   └── main.css
│   ├── /js
│   │   └── main.js       (tabs + copy buttons only)
│   └── /fonts
│       ├── inter/
│       └── jetbrains-mono/
├── /static
│   ├── og-card.png       (1200x630px)
│   └── favicon.svg
└── /content               (Hugo Markdown sources)
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | ≥ 98 |
| Lighthouse Accessibility | ≥ 95 |
| LCP | < 1.5s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS bundle (gzipped) | < 20KB |
| CSS (gzipped) | < 15KB |
| Total page weight | < 200KB |

- Images: WebP only. `width` and `height` attributes set on all `<img>` to prevent CLS.
- Below-fold images: `loading="lazy"`
- Font loading: `font-display: swap`

### Responsive Breakpoints

```
Mobile:   < 640px
Tablet:   640px – 1024px
Desktop:  > 1024px
Max content width: 1200px, centred
```

---

## 19. Accessibility

- WCAG 2.1 AA minimum
- Colour contrast: ≥ 4.5:1 for body text, ≥ 3:1 for large text
- All interactive elements keyboard-accessible (logical tab order)
- Focus indicators visible — do not remove with `outline: none`
- First element in `<body>`: skip-to-content link
- Code copy buttons: keyboard operable, `aria-label="Copy code to clipboard"`, `aria-live="polite"` confirmation on copy
- Language tab group: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- No content conveyed by colour alone

---

## 20. SEO Requirements

### Page-Level Meta Tags

```html
<title>CyodaLight — Run Cyoda Workflows Locally | Open Source</title>
<meta name="description" content="CyodaLight is a free, open source Go runtime for the Cyoda entity workflow platform. In-memory or PostgreSQL mode. No cluster required. Java, Python, Go, and Kotlin via gRPC.">
<link rel="canonical" href="https://[DOMAIN_PLACEHOLDER]/">

<!-- Open Graph -->
<meta property="og:title" content="CyodaLight — Run Cyoda Workflows Locally">
<meta property="og:description" content="Free, open source local runtime for the Cyoda entity workflow platform. Starts in under 2 seconds. In-memory or PostgreSQL mode.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://[DOMAIN_PLACEHOLDER]">
<meta property="og:image" content="https://[DOMAIN_PLACEHOLDER]/static/og-card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CyodaLight — Run Cyoda Workflows Locally">
<meta name="twitter:description" content="Open source Go runtime for Cyoda entity workflows. In-memory or PostgreSQL. Java, Python, Go, Kotlin via gRPC.">
<meta name="twitter:image" content="https://[DOMAIN_PLACEHOLDER]/static/og-card.png">
```

### JSON-LD Structured Data

**SoftwareApplication:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CyodaLight",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS, Windows",
  "programmingLanguage": ["Go", "Java", "Python", "Kotlin"],
  "description": "CyodaLight is a free, open source local runtime for the Cyoda entity workflow platform. It implements the full Cyoda gRPC API and workflow engine in a single binary, with in-memory or PostgreSQL storage modes.",
  "url": "https://[DOMAIN_PLACEHOLDER]",
  "downloadUrl": "https://github.com/cyoda-io/cyodalight/releases",
  "softwareVersion": "[VERSION_PLACEHOLDER]",
  "license": "https://opensource.org/licenses/MIT",
  "author": {
    "@type": "Organization",
    "name": "Cyoda Ltd",
    "url": "https://cyoda.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**FAQPage:** (generated from Section 15 content, all 8 questions)

**BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "CyodaLight",
      "item": "https://[DOMAIN_PLACEHOLDER]"
    }
  ]
}
```

### Semantic HTML Requirements

- `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` used correctly
- Every `<section>` has `aria-labelledby` pointing to its heading
- All images have meaningful `alt` text
- Code blocks: `<pre><code class="language-go">` (Prism-compatible)
- Descriptive anchor text throughout — no "click here" or "learn more" without context

### Keyword Targets

**Primary:**
- `cyodalight`
- `cyoda open source`
- `cyoda local development`
- `workflow engine Go open source`
- `entity lifecycle gRPC`

**Secondary:**
- `open source workflow engine Java`
- `finite state machine backend local`
- `grpc workflow engine free`
- `cyoda free version`

**AI / conversational search:**
- `how to run cyoda locally without a cluster`
- `cyoda free version open source`
- `difference between cyodalight and cyoda cloud`
- `entity workflow engine go binary in-memory`

---

## 21. AI / LLM Consumption Layer

This is a first-class requirement, not a late addition.

### `/llms.txt`

Place at root. Follows the [llms-txt.org](https://llmstxt.org/) standard:

```markdown
# CyodaLight

> CyodaLight is the free, open source local development runtime for the Cyoda entity 
> workflow platform. Written in Go. Single binary. In-memory or PostgreSQL mode. 
> Full gRPC API parity with Cyoda Cloud. Client libraries for Java, Python, Go, and Kotlin.
> MIT License. No sign-up required.

## Documentation

- [Quick Start](https://docs.cyoda.net/cyodalight/quickstart): Get CyodaLight running in under 5 minutes
- [API Reference](https://docs.cyoda.net/cyodalight/api): Full gRPC API documentation
- [Entity Model](https://docs.cyoda.net/cyodalight/entities): How entities and state machines work
- [Configuration](https://docs.cyoda.net/cyodalight/config): In-memory and PostgreSQL configuration
- [Examples](https://docs.cyoda.net/cyodalight/examples): Runnable examples in Java, Python, Go, Kotlin

## Project

- [GitHub Repository](https://github.com/cyoda-io/cyodalight): Source code, issues, releases
- [Cyoda Platform](https://cyoda.com): Full distributed Cyoda platform (production use)
- [Changelog](https://[DOMAIN_PLACEHOLDER]/changelog): Release history

## Optional

- [Full Content](https://[DOMAIN_PLACEHOLDER]/llms-full.txt): Complete site content in plain markdown
```

### `/llms-full.txt`

A plain markdown file containing the complete site content in LLM-readable form:
- Full product description
- All FAQ questions and answers verbatim
- All install commands for all modes (once confirmed)
- Hello World example for all four languages
- Feature descriptions
- Architecture progression explanation
- Links to docs and GitHub

Update this file with every release. Include a `Last updated:` line at the top.

### `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://[DOMAIN_PLACEHOLDER]/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Googlebot-Extended
Allow: /
```

---

## 22. OG Card Specification

Static image: 1200x630px, PNG.

```
Background: --bg-primary white
Top-left:   CyodaLight wordmark (SVG embedded, dark)
Centre:     Large heading "Run Cyoda workflows locally"
Below:      "In-memory · PostgreSQL · gRPC · MIT License"
Right:      Stylised workflow state machine graphic or code snippet
Bottom-right: cyoda.com (muted text)
```

No stock photography. No decorative gradients. Matches site colour palette exactly.

---

## 23. Component Inventory

All components implemented as reusable Hugo partials or HTML includes:

| Component | Notes |
|---|---|
| `NavBar` | Sticky, 56px, responsive with hamburger drawer |
| `HeroSection` | Two-column, install panel with mode tabs |
| `ProofBar` | Horizontal badge strip, no JS |
| `InstallPanel` | Tabbed code block (In-Memory, PostgreSQL, Docker) |
| `CodeBlock` | Syntax-highlighted, copy button, filename label optional |
| `LanguageTabGroup` | Java/Python/Go/Kotlin tabs, localStorage persistence |
| `WhatItIs` | Two-column prose + SVG diagram |
| `HelloWorld` | Two-column prose + language-tabbed code example |
| `FeatureGrid` | 4-col grid of FeatureCard components |
| `FeatureCard` | Icon + title + one-line description |
| `ProgressionDiagram` | Three-stage SVG, static |
| `FAQAccordion` | `<details>/<summary>`, no JS required |
| `CalloutBox` | Highlighted note or tip |
| `FinalCTA` | Section with command + two links |
| `Footer` | Logo, links, license |
| `Badge` | Small pill tag (MIT, Open Source, version) |

---

## 24. Deployment

**Hosting:** Cloudflare Pages or Netlify (static CDN)  
**Build command (Hugo):** `hugo --minify`  
**Output directory:** `public/`  
**Branch:** `main` auto-deploys to production. PRs generate preview URLs.

**Environment variable:** `CYODALIGHT_VERSION` — injected at build time into structured data and install command displays.

**Cache headers:**
```
Static assets (fonts, images, JS, CSS):
  Cache-Control: public, max-age=31536000, immutable

HTML pages:
  Cache-Control: public, max-age=0, must-revalidate
```

**External links:** All use same-tab navigation. If `target="_blank"` is ever used, include `rel="noopener noreferrer"`.

---

## 25. Success Criteria

The homepage succeeds if:

- A backend developer understands the product in under 10 seconds
- The local run path is visible without scrolling on a 1280px desktop viewport
- The page feels lightweight, credible, and technical
- It is readable and useful when extracted by an AI assistant
- It scores ≥ 95 performance, ≥ 95 accessibility, ≥ 98 SEO on Lighthouse
- It clearly supports Java, Python, Go, and Kotlin audiences
- The relationship to docs.cyoda.net and cyoda.com is unambiguous

The homepage fails if:

- It feels generic or promotional
- It hides the run command below the fold
- It explains too much before showing the product
- It depends on JS to render primary content
- It contains unresolved `[PLACEHOLDER]` values in visible copy
- Any install command shown is not real and confirmed

---

## 26. Pre-Build Checklist

Resolve all of the following before passing to Claude Code for generation:

**Domain & hosting:**
- [ ] Domain confirmed: cyodalight.io / light.cyoda.com / cyoda.com/light
- [ ] DNS and Cloudflare Pages / Netlify project created

**Assets:**
- [ ] CyodaLight logo and wordmark provided as SVG
- [ ] OG card design approved (or spec handed to designer)
- [ ] Favicon SVG provided

**Technical:**
- [ ] Go install command confirmed (`go install github.com/cyoda-io/cyodalight@latest` or equivalent)
- [ ] Docker image name and registry confirmed
- [ ] Homebrew tap confirmed (or removed from spec)
- [ ] Go module path for client library confirmed
- [ ] Java client library: package name + Maven/Gradle dependency confirmed
- [ ] Python client library: pip package name confirmed
- [ ] Kotlin client library: confirmed (shared with Java or separate)
- [ ] PostgreSQL minimum supported version confirmed
- [ ] Current release version number confirmed

**Content:**
- [ ] Hello World example reviewed and code validated against actual API
- [ ] docs.cyoda.net CyodaLight section live (or confirmed ETA)
- [ ] GitHub repo at github.com/cyoda-io/cyodalight is public
- [ ] FAQ answers reviewed for accuracy

**Legal:**
- [ ] MIT License text confirmed for footer
- [ ] Copyright holder name confirmed ("Cyoda Ltd" assumed)

---

*This specification is the authoritative source for the Claude Code generation task. All design decisions are binding. Deviations require explicit discussion and an updated version of this document.*
