# Robin Japar portfolio

Static site. Eight pages, no build step, no dependencies. Upload the contents
of this folder to a GitHub repository and enable Pages.

## Publishing

1. Push these files to a repository, with `index.html` at the repository root.
2. Settings, then Pages, then set Source to **Deploy from a branch**, branch
   `main`, folder `/ (root)`.
3. Wait for the first deploy, then open the URL Pages shows you.

Works unchanged from a project subfolder such as
`https://username.github.io/repo-name/`. Every internal link, image, and icon
uses a relative path, and all eight pages sit at one level so there is no
directory depth to get wrong. Verified by serving the folder from a subfolder
and loading every page in a browser.

`.nojekyll` is included. Without it GitHub runs Jekyll, which silently skips
files and folders beginning with an underscore.

## Files

    index.html                                          home
    about.html                                          about
    work-flash-vendor-transition.html                   case study
    work-enterprise-personalization.html                case study
    work-executive-ux-scorecard.html                    case study
    work-servicenow-employee-experience-taxonomy.html   case study
    work-taxonomy-consulting-service.html               case study
    work-friction-mapping-framework.html                case study
    assets/                                             images and icons
    .nojekyll

Each page carries its own CSS and JavaScript inline, so there is nothing to
link, bundle, or compile. To change something, edit the HTML file directly.

This README is documentation for the repository, not part of the site. Delete
it if you would rather not have it visible.

## Two things to check before you announce the site

### 1. The canonical URLs point at japarofcontent.com

Every page declares `<link rel="canonical">` and `og:url` pointing at
`https://www.japarofcontent.com`. That is correct **only if** you attach that
custom domain to this Pages site.

If you publish at a `github.io` address instead and leave these as they are,
you are telling Google that the real version of every page lives somewhere
else. Search engines will prefer that other address and may leave the Pages
site out of results.

To repoint them, find and replace across all eight HTML files:

    https://www.japarofcontent.com   ->   https://username.github.io/repo-name

Any text editor with project-wide find and replace will do it. No rebuild.

### 2. The social share image does not exist yet

`og:image` on every page points at `assets/social-card.jpg`, which has not been
created. Until it exists, links shared to LinkedIn, Slack, or iMessage render
without a preview image. Recommended size 1200x630. Drop the file into
`assets/` with that exact name and it will start working.

## Known limitations

**The forms are connected, but confirm the first submission.** Both forms post
to Formspree: contact goes to `mzepdbae`, resume requests to `mgawoelz`. The
wiring was tested against a Formspree-compatible mock covering validation, a
successful send, a server error, and the honeypot, all passing.

What could not be tested from here is real delivery, because the build
environment blocks outbound requests to formspree.io. Formspree also holds the
first submission on a new form until you confirm it by email. So after
publishing, submit each form once, watch for the Formspree confirmation email,
confirm it, then submit again to verify the message reaches your inbox.

The destination inbox is set inside the Formspree dashboard, not in these
files, which is deliberate: published HTML is public and gets scraped by
address harvesters.

Formspree's free tier allows 50 submissions per month across both forms
combined. If that becomes tight, upgrading is a plan change with no edits here.

**Fonts load from Google Fonts.** Fraunces and Lato come from
`fonts.googleapis.com` rather than being served from `assets/`. Self-hosting
them would remove the last external dependency and is worth doing if you want
the site fully self-contained or need to avoid third-party requests for privacy
reasons.

**Two pages build most of their body text with JavaScript.** The ServiceNow
taxonomy and taxonomy consulting pages render their chapters from a data object
at load time. They look correct in any browser, but crawlers that do not run
JavaScript see roughly a third to a half of the copy. Google executes
JavaScript; many AI answer engines and social scrapers do not.

## Case study navigation

Each of the six case studies ends with a Previous / All work / Next block above
the footer. The sequence follows the order of the work grid on the home page
and wraps circularly, so the last project leads back to the first. All work
targets `index.html#work`, which scrolls to the project selection area.
