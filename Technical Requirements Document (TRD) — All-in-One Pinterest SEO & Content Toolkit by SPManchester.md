# Technical Requirements Document (TRD)

## 1. Technical Overview

### Product

**All-in-One Pinterest SEO & Content Toolkit by SPManchester**

### Official Company

**SPManchester Private Limited Company**

### Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- Next.js App Router
- Route Handlers / Server Actions
- PostgreSQL
- Prisma
- Vercel
- GitHub

Basic tools should work without a database where possible.

---

# 2. Architecture

```text
User
  │
  ▼
Next.js Frontend
  │
  ├── SEO Pages
  ├── Tool UI
  ├── Content Pages
  └── Company Pages
  │
  ▼
Next.js Server Layer
  │
  ├── Keyword APIs
  ├── Trends APIs
  ├── AI APIs
  ├── Downloader APIs
  └── Rate Limiting
  │
  ├── AI Provider
  ├── Pinterest/Public Media Sources
  └── PostgreSQL / Cache
```

---

# 3. Project Structure

```text
/
├── app/
│   ├── page.tsx
│   ├── pinterest-trends/
│   ├── pinterest-seo-keywords/
│   ├── pinterest-trending-keywords-generator/
│   ├── pinterest-hashtag-generator/
│   ├── pinterest-title-generator/
│   ├── pinterest-description-generator/
│   ├── pinterest-pin-ideas/
│   ├── pinterest-downloader/
│   ├── pinterest-video-downloader/
│   ├── pinterest-image-downloader/
│   ├── pinterest-gif-downloader/
│   ├── seasonal-pinterest-trends/
│   ├── compare-keywords/
│   ├── about-sp-manchester/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   ├── disclaimer/
│   ├── copyright/
│   ├── become-a-partner/
│   ├── blog/
│   └── api/
│       ├── trends/
│       ├── keywords/
│       ├── hashtags/
│       ├── titles/
│       ├── descriptions/
│       ├── pin-ideas/
│       └── downloader/
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ToolCard.tsx
│   ├── ToolInput.tsx
│   ├── ResultCard.tsx
│   ├── CopyButton.tsx
│   ├── DownloadButton.tsx
│   ├── FAQ.tsx
│   └── Breadcrumbs.tsx
│
├── lib/
│   ├── seo.ts
│   ├── keywords.ts
│   ├── trends.ts
│   ├── hashtags.ts
│   ├── titles.ts
│   ├── descriptions.ts
│   ├── pin-ideas.ts
│   ├── ai.ts
│   ├── downloader.ts
│   ├── rate-limit.ts
│   └── validation.ts
│
├── data/
│   ├── seasonal-trends.ts
│   ├── tools.ts
│   └── faqs.ts
│
├── public/
│   ├── logo/
│   ├── icons/
│   └── images/
│
├── prisma/
│   └── schema.prisma
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

# 4. Frontend Requirements

## Framework

Use Next.js App Router.

## Language

TypeScript.

## Styling

Tailwind CSS.

## UI Principles

- Clean
- Fast
- Minimal
- Professional
- Mobile-first
- SEO-friendly
- Accessible

Avoid excessive gradients, animations, popups, and unnecessary client-side JavaScript.

---

# 5. Tool Component Architecture

Each tool should use reusable components.

Example:

```text
ToolPage
 ├── Breadcrumb
 ├── SEO Intro
 ├── ToolInput
 ├── GenerateButton
 ├── LoadingState
 ├── Results
 │    ├── ResultCard
 │    └── CopyButton
 ├── HowTo
 ├── FAQ
 └── RelatedTools
```

---

# 6. API Architecture

## Trends

```http
GET /api/trends?keyword=summer%20outfits
```

Response:

```json
{
  "keyword": "summer outfits",
  "trend": "rising",
  "related": [
    "summer outfit ideas",
    "summer fashion",
    "beach outfits"
  ]
}
```

---

## Keywords

```http
GET /api/keywords?keyword=summer%20outfits
```

Response:

```json
{
  "keyword": "summer outfits",
  "keywords": [
    {
      "keyword": "summer outfit ideas",
      "type": "long-tail"
    },
    {
      "keyword": "casual summer outfits",
      "type": "related"
    }
  ]
}
```

---

## Hashtags

```http
POST /api/hashtags
```

Input:

```json
{
  "topic": "summer fashion"
}
```

---

## Titles

```http
POST /api/titles
```

Input:

```json
{
  "topic": "summer outfit ideas",
  "keyword": "summer outfits"
}
```

---

## Descriptions

```http
POST /api/descriptions
```

Input:

```json
{
  "topic": "summer outfit ideas",
  "keyword": "summer outfits"
}
```

---

## Pin Ideas

```http
POST /api/pin-ideas
```

Input:

```json
{
  "topic": "home decor"
}
```

---

# 7. AI Architecture

AI requests must execute server-side.

Never expose:

```text
NEXT_PUBLIC_AI_API_KEY
```

Use:

```text
AI_API_KEY
```

AI functionality should be isolated in:

```text
lib/ai.ts
```

Example flow:

```text
Browser
  ↓
Next.js API
  ↓
Validation
  ↓
Rate Limit
  ↓
AI Provider
  ↓
Sanitized Response
  ↓
Browser
```

---

# 8. Input Validation

Every API must validate:

- Input length
- Required fields
- URL format
- Content type
- Maximum request size

Example limits:

```text
keyword: 2–100 characters
topic: 2–200 characters
Pinterest URL: HTTPS only
```

Reject malformed requests with:

```http
400 Bad Request
```

---

# 9. Rate Limiting

Anonymous users:

**10 requests/hour/IP**

Future authenticated users:

**50 requests/day**

Limits should be configurable.

Recommended environment variable structure:

```text
RATE_LIMIT_URL=
RATE_LIMIT_SECRET=
```

---

# 10. Caching

Normalize keyword input:

```text
Summer Outfits
summer-outfits
SUMMER OUTFITS
```

into a consistent cache key.

Example:

```text
keyword:summer outfits
```

Cache popular keyword/trend results to:

- Reduce API costs
- Improve response time
- Reduce duplicate requests

---

# 11. Downloader Architecture

The downloader should accept a Pinterest URL.

Flow:

```text
Pinterest URL
     ↓
URL Validation
     ↓
Domain Validation
     ↓
Fetch Public Resource
     ↓
Media Detection
     ↓
Metadata Extraction
     ↓
Quality Detection
     ↓
Preview
     ↓
Download
```

Supported media:

```text
Image
Video
GIF
```

---

# 12. Downloader Security

Downloader endpoints require strong SSRF protection.

Rules:

- HTTPS only
- Allowlisted Pinterest domains
- Block localhost
- Block private IP ranges
- Block internal network addresses
- Validate redirects
- Validate content type
- File-size limits
- Request timeouts
- Download time limits
- Prevent arbitrary URL fetching

The system must not:

- Access private Pins
- Bypass authentication
- Bypass DRM
- Circumvent platform protections
- Download restricted/private content

---

# 13. Download Limits

Suggested initial limits:

```text
Maximum file size: configurable
Request timeout: configurable
Maximum redirects: configurable
Maximum concurrent downloads: configurable
```

These should be environment-configurable rather than hard-coded.

---

# 14. SEO Technical Requirements

Every indexable page must have:

```text
<title>
<meta name="description">
<link rel="canonical">
Open Graph
Twitter/X metadata
```

Example title:

```text
Pinterest Trending Keywords Generator by SPManchester
```

Example description:

```text
Find Pinterest trending keywords and content opportunities with the free Pinterest Trending Keywords Generator by SPManchester.
```

---

# 15. Structured Data

Use appropriate JSON-LD schemas.

### Organization

```text
Organization
```

Publisher:

**SPManchester Private Limited Company**

### Website

```text
WebSite
```

### Tools

Where appropriate:

```text
SoftwareApplication
WebApplication
```

### Navigation

```text
BreadcrumbList
```

### FAQs

```text
FAQPage
```

only where visible FAQ content genuinely exists on the page.

---

# 16. Company Schema

Company information should be represented consistently.

```json
{
  "@type": "Organization",
  "name": "SPManchester Private Limited Company",
  "url": "https://spmanchester.com/",
  "email": "info@spmanchester.com",
  "telephone": "+92 306 4350580",
  
}
```

Social profiles should be represented through `sameAs` where appropriate.

---

# 17. Navigation

### Header

```text
Logo
Tools
Pinterest SEO
Trends
Downloader
Resources
About
```

### Footer

```text
Pinterest Tools
Pinterest SEO
Resources

Company
About SPManchester
Contact
Become a Partner

Legal
Privacy Policy
Terms
Disclaimer
Copyright

Developed & operated by
SPManchester Private Limited Company
```

---

# 18. SPManchester Service Integration

The toolkit should include a lightweight company section.

Suggested:

> **Built by SPManchester**
>
> SP Manchester Private Limited Company provides web development, mobile app development, graphic design and UI/UX, IT consultancy, digital product and ads management, SEO, eCommerce development, and artificial intelligence services.

Service links should be available from the company area/footer without distracting users from the Pinterest tools.

---

# 19. Social Integration

Footer/social area can include:

- Facebook
- WhatsApp
- LinkedIn
- Behance

Do not load heavy third-party social widgets on initial page load.

Use simple links/icons.

---

# 20. Environment Variables

Example:

```env
NEXT_PUBLIC_SITE_URL=

AI_API_KEY=

DATABASE_URL=

RATE_LIMIT_URL=
RATE_LIMIT_SECRET=
```

Only public configuration should use `NEXT_PUBLIC_`.

Secrets must remain server-side.

---

# 21. Database

The MVP can operate without a database for static tools.

PostgreSQL + Prisma can later support:

- Users
- Saved searches
- Generated content
- Usage history
- Favorites
- API usage
- Premium subscriptions
- Analytics summaries

Potential tables:

```text
User
Search
KeywordResult
GeneratedContent
SavedProject
Usage
Subscription
```

---

# 22. Analytics Architecture

Use privacy-conscious anonymous analytics.

Example event:

```json
{
  "event": "keyword_generated",
  "tool": "pinterest-trending-keywords",
  "timestamp": "..."
}
```

Do not store unnecessary:

- Personal data
- Private Pin data
- Sensitive information

---

# 23. Sitemap

Generate sitemap dynamically or through Next.js metadata APIs.

Include:

- Homepage
- Tool pages
- Company pages
- Blog pages
- High-quality SEO landing pages

Do not include:

- API endpoints
- Duplicate pages
- Thin pages
- Internal utility routes

---

# 24. Robots

Allow search engines to crawl public SEO pages.

Disallow:

```text
/api/
```

and other internal routes where appropriate.

---

# 25. Canonicalization

Every SEO page must have one canonical URL.

Example:

```text
/pinterest-title-generator
```

should be canonicalized consistently and should not create duplicate indexable versions through query parameters.

---

# 26. Error Handling

API errors should return structured responses.

Example:

```json
{
  "success": false,
  "error": "Invalid Pinterest URL"
}
```

Frontend should show human-readable messages.

Never expose:

- Stack traces
- API secrets
- Internal server paths
- Provider credentials

---

# 27. Loading States

All AI/trend/download operations require:

- Loading indicator
- Disabled submit button
- Clear progress/status
- Error state
- Retry option where appropriate

---

# 28. Accessibility

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels
- ARIA only when necessary
- Sufficient contrast
- Accessible buttons
- Accessible form errors

---

# 29. Responsive Design

Breakpoints should prioritize:

```text
Mobile
Tablet
Desktop
Large Desktop
```

The main tool interaction should be usable on a mobile phone without horizontal scrolling.

---

# 30. Deployment

### Source Control

GitHub

### Hosting

Vercel

### Deployment

```text
Developer
   ↓
GitHub
   ↓
Vercel
   ↓
Production
```

Recommended environments:

```text
Development
Preview
Production
```

---

# 31. CI/CD

On every pull request:

- TypeScript check
- ESLint
- Build
- Basic tests

Production deployment should occur only after successful build/checks.

---

# 32. Security Checklist

Before launch:

- [ ] No secrets in GitHub
- [ ] Environment variables configured
- [ ] API validation
- [ ] Rate limiting
- [ ] SSRF protection
- [ ] File-size limits
- [ ] Request timeouts
- [ ] HTTPS
- [ ] Secure headers
- [ ] Dependency audit
- [ ] Error sanitization
- [ ] Abuse protection

---

# 33. Testing

## Unit Tests

Test:

- Keyword normalization
- Input validation
- URL validation
- SEO metadata
- Trend parsing
- AI response parsing
- Downloader validation

## Integration Tests

Test:

- Tool API
- AI provider
- Downloader
- Rate limiter
- Database

## E2E Tests

Test:

```text
Homepage → Tool → Generate → Copy
Homepage → Downloader → URL → Preview → Download
```

---

# 34. SEO Content Template

Every tool page should follow approximately:

```text
H1 — Tool Name by SPManchester

Intro

Tool UI

How to Use

Benefits

Example

Tips

Related Pinterest Tools

FAQ

CTA
```

This prevents tool pages from becoming thin SEO pages.

---

# 35. Future API Expansion

Potential endpoints:

```text
/api/keyword-clusters
/api/content-calendar
/api/pin-seo-score
/api/bulk-keywords
/api/bulk-titles
/api/bulk-descriptions
/api/trend-alerts
```

---

# 36. Future Premium Architecture

Possible plans:

### Free

- Basic keyword generation
- Basic hashtags
- Limited AI generations
- Basic downloader

### Pro

- Higher limits
- Advanced AI
- Bulk generation
- Keyword history
- Saved projects
- Advanced trend insights

### Agency

- Multiple projects
- Bulk processing
- Team access
- API
- White-label options

---

# 37. Technical Definition of Done

The production release is technically complete when:

- Next.js application builds successfully.
- All MVP routes exist.
- All primary tools work.
- APIs are validated.
- AI keys remain server-side.
- Downloader has SSRF protections.
- Rate limiting is active.
- Metadata is implemented.
- JSON-LD is implemented where applicable.
- Sitemap is generated.
- Robots configuration is active.
- Canonicals are correct.
- Mobile layout works.
- Accessibility checks pass.
- GitHub repository is clean.
- Vercel deployment succeeds.
- Production environment variables are configured.
- SP Manchester Private Limited Company information is consistently represented.
- Tool names use the **“by SPManchester”** attribution.