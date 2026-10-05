# C++2 Practice

Combined DArray and Doubly Linked List practice website, ready for GitHub and Render. This folder is a standalone project; upload its contents as the repository root.

## Folder layout

```text
public/             Website HTML, CSS, and browser JavaScript
cpp/                Class definitions and supporting C++ implementations
graders/            Test harnesses for the two topics
server.js           Node web server and online compiler integration
package.json        Start command and Node version requirement
package-lock.json   Reproducible npm setup
render.yaml         Optional automatic Render configuration
.node-version       Node 22
.gitignore          Files to exclude from GitHub
```

## Run locally

Install Node.js 22 or later, then run these commands from this folder:

```sh
npm ci
npm start
```

Open http://localhost:3000. No npm dependencies or local C++ compiler are required.

## Upload to GitHub

Create a GitHub repository and upload everything in this folder, preserving the `public`, `cpp`, and `graders` directories. Include `.gitignore` and `.node-version`. Do not upload the parent DArrayPractice folder, node_modules, or the old Sites hosting files.

Alternatively, initialize Git here, commit the files, add your GitHub repository as the remote, and push.

## Deploy on Render

1. In Render, select **New > Web Service** and connect this GitHub repository.
2. Choose **Node** as the runtime.
3. Leave **Root Directory** empty when these files are at the repository root. If you uploaded the entire folder as a subdirectory instead, set Root Directory to `cpp-practice-render`.
4. Set **Build Command** to `npm ci` and **Start Command** to `npm start`.
5. Set **Health Check Path** to `/health`, then deploy.

Render supplies the PORT environment variable automatically. The server listens on 0.0.0.0. No secrets or API keys are required. Render provides a shareable HTTPS URL after deployment. Future pushes to the connected branch can deploy automatically.

You can also select **New > Blueprint** and use the included `render.yaml` for these settings.

## How grading works

The browser sends the chosen problem and student's code to `/run`. The server combines it with the class and test harness and sends it to Compiler Explorer (Godbolt) for C++17 compilation and execution. Both topics retain five test cases per problem. Compiler line numbers refer to the student's editor through `#line` directives.

Student code is sent to Compiler Explorer (Godbolt); grading needs internet access and depends on that service's availability. CodeMirror is loaded from a CDN. On Render's free plan the service may sleep while idle, so the first request can take longer.

Edit the frontend in `public/`. Problem descriptions and displayed cases are in `public/script.js`; keep those consistent with the corresponding C++ test harnesses in `graders/` when changing exercises. The original Site is unaffected by this export.

## Student autosave

Drafts, completion progress, hints, and the last selected topic/question save in localStorage on the same browser and website address. Clearing browser data removes them; they do not sync across devices or domains. A congratulations dialog with confetti appears once for each topic after all its questions are completed. Reduced-motion preferences disable confetti.
