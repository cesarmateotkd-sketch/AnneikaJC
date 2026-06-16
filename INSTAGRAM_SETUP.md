# Instagram Portfolio Setup

The portfolio section auto-fetches the latest 12 Instagram posts using the Instagram Basic Display API. Follow these steps once to connect Anneika's account.

## Steps

### 1. Create a Meta Developer App
1. Go to [developers.facebook.com](https://developers.facebook.com) and log in with a Facebook account.
2. Click **My Apps → Create App**.
3. Choose **"Other"** as the use case, then **"Consumer"** as the type.
4. Name the app (e.g. `AnneikaJC Portfolio`) and click **Create App**.

### 2. Add Instagram Basic Display
1. Inside the app dashboard, click **Add Products** and find **Instagram Basic Display**.
2. Click **Set Up**.
3. Under **Valid OAuth Redirect URIs**, add: `https://localhost/`
4. Under **Deauthorize Callback URL**, add: `https://localhost/`
5. Save changes.

### 3. Add Anneika's Instagram as a Test User
1. Go to **Roles → Test Users**.
2. Click **Add Instagram Testers** and enter Anneika's Instagram username.
3. Anneika must then accept the invite inside Instagram app → Settings → Apps and Websites → Tester Invites.

### 4. Generate an Access Token
1. In the app dashboard, go to **Instagram Basic Display → User Token Generator**.
2. Click **Generate Token** next to the test user.
3. Log in as Anneika and grant permissions.
4. Copy the short-lived token.

### 5. Exchange for a Long-Lived Token (60 days)
Run this in your terminal (replace the placeholders):

```bash
curl -X GET \
  "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=SHORT_LIVED_TOKEN"
```

Copy the `access_token` from the response.

### 6. Add to Environment Variables
Create a `.env.local` file in the project root:

```
INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
```

For production (Vercel), add `INSTAGRAM_ACCESS_TOKEN` as an environment variable in the Vercel dashboard under **Project → Settings → Environment Variables**.

### 7. Refresh the Token (every ~60 days)
Long-lived tokens expire after 60 days. To refresh:

```bash
curl -X GET \
  "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_LONG_LIVED_TOKEN"
```

Or automate this with a cron job / Vercel Cron Function.

---

## Token Security
- Never commit `.env.local` to git (it is already in `.gitignore`).
- Only add the token to `.env.example` as a placeholder.
- Rotate immediately if accidentally exposed.
