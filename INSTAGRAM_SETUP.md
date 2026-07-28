# Instagram Portfolio Setup

The portfolio section auto-fetches the latest 12 Instagram posts. Follow these steps once to connect Anneika's account.

## Prerequisites

Anneika's Instagram must be a **Professional account** (Creator or Business).

To switch: Instagram → **Settings → Account type and tools → Switch to Professional Account** → choose Creator.

Free, reversible, and does not change how the profile looks publicly.

---

## Step 1 — Create the Meta Developer App

1. Go to **[developers.facebook.com/apps/creation/](https://developers.facebook.com/apps/creation/)**
2. Enter an app name (e.g. `AnneikaJC Portfolio`) and a contact email
3. Under **"Add use cases"**, find the *Content management* category and select **"Manage messaging & content on Instagram"**
4. Click **Next** and finish creating the app

> Note: The old "Add Products" section no longer exists. The current Meta dashboard uses a **use cases** model instead.

---

## Step 2 — Add Anneika's Account

1. Inside the app dashboard, find the **"Generate access tokens"** section
2. Click **"Add account"**
3. Click **Continue** — a popup opens for Anneika to log in with her Instagram credentials
4. She approves the permissions and the token is generated automatically

> The permission `instagram_business_basic` (read-only access to her profile and media) is added by default when selecting this use case.

---

## Step 3 — Copy the Token

Copy the generated token. It is already long-lived (valid for 60 days).

---

## Step 4 — Add to the Site

**Locally** — create a `.env.local` file in the project root:

```
INSTAGRAM_ACCESS_TOKEN=paste_your_token_here
```

**Production (Vercel)** — go to your project → **Settings → Environment Variables** → add:
- Key: `INSTAGRAM_ACCESS_TOKEN`
- Value: the token

---

## Step 5 — Refresh Every ~50 Days

Long-lived tokens expire after 60 days. Refresh before they expire with:

```bash
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_TOKEN"
```

Set a calendar reminder at day 50, or ask to have a Vercel Cron Function added to auto-refresh it.

---

## If You Hit a Business Verification Wall

Meta may ask you to verify a business entity before publishing the app. You can avoid this by keeping the app in **Development Mode** (the default) and adding Anneika as a **Tester or Admin** on the app. In development mode, tokens work immediately for any account added to the app — no verification required.

To add a tester: App dashboard → **Roles → Testers → Add** → enter her Facebook account.

---

## Token Security

- Never commit `.env.local` to git (already covered by `.gitignore`)
- Only `.env.example` (the placeholder file) is committed
- Rotate the token immediately if it is ever accidentally exposed
