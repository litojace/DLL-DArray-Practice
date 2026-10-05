# Enable the teacher dashboard

The website stays on Render. Supabase holds anonymous totals across restarts and deployments.

## 1. Create Supabase

1. Open https://supabase.com/dashboard and sign up or sign in.
2. Create a new project on the Free plan. Choose a project name, region, and database password. Wait for the project to finish provisioning.
3. Open SQL Editor, create a new query, paste the contents of supabase/setup.sql from this folder, and run it. This creates a private table and two server-only functions.
4. Find the project URL in the project's Connect dialog or API settings. It looks like https://your-project.supabase.co.
5. Under Settings > API Keys, create or copy a secret key (sb_secret_...). Use a server secret key, not a publishable/anon key. A legacy service_role key is also supported.

## 2. Configure Render

In your existing Render service, open Environment and add:

| Variable | Value |
| --- | --- |
| SUPABASE_URL | Your Supabase project URL |
| SUPABASE_SECRET_KEY | Your Supabase secret key |
| ANALYTICS_ADMIN_USER | teacher, or a username you choose |
| ANALYTICS_ADMIN_PASSWORD | A long, unique password you choose |

Keep the secret key and dashboard password in Render's environment settings. Never put them in public files, GitHub, or chat. Save the variables and redeploy.

Push these new files to the GitHub repository: analytics.js, teacher.html, supabase/setup.sql, ANALYTICS-SETUP.md, .env.example. Also push the updated server.js, public/script.js, and README.md.

## 3. View your totals

Open https://YOUR-RENDER-SITE/teacher. Sign in with your dashboard username and password when the browser prompts you. The dashboard has a Refresh button. Never share that password with students. Use Render's HTTPS URL.

To confirm tracking, open the practice site in a browser, then refresh the dashboard. Reloading or using another tab within 30 minutes should not add a visit. A return after 30 minutes of inactivity adds another visit.

## Local check

Copy .env.example to .env, fill in your values privately, and start with Node 22 or later:

~~~powershell
node --env-file=.env server.js
~~~

Open http://localhost:3000/teacher. .env is excluded from Git. Localhost activity and deployed-site activity have separate anonymous browser IDs and will both count if they use the same database.

## What the totals mean

- Visits: sessions beginning on first activity or after 30 minutes without activity. Mouse/touch and keyboard actions refresh activity, at most once per minute.
- Unique browsers: one anonymous random ID per browser and website address.
- Returning browsers: browsers with more than one visit.
- DArray and DLL completed: all exercises in that topic complete, once per browser.
- Both completed: the same browser has completed each topic.

Existing saved completion progress is counted when students revisit after tracking is enabled. Historical visits cannot be recovered. Clearing storage or changing devices creates a new browser ID. Completion is browser-reported, suitable for engagement totals rather than official grading. No student names, code, or IP addresses are stored in the tracking database.

Without environment settings, practice still works and the dashboard explains that configuration is missing. Database outages do not block grading or autosave. Activity missed during an outage is not counted retroactively; completion totals are retried on later activity.

The SQL enables Row Level Security and denies anonymous access. Only the server's secret key can invoke the tracking functions. Supabase's free plan has usage limits and may pause inactive projects; check its dashboard if totals stop updating.
