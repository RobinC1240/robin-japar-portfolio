# GitHub Pages update package: GenAI Marketing Operating System

Target repository: robinc1240/robin-japar-portfolio

## What this package contains

    work-genai-marketing-operating-system.html   NEW   the case study
    assets/gmos-00-card.webp                      NEW   home page card thumbnail
    assets/gmos-01-social-square.webp             NEW   Static Social output, 1:1
    assets/gmos-02-social-portrait.webp           NEW   Static Social output, 4:5
    index.html                                    REPLACES  adds the work card (1st position)
    assets/work-pagination.js                     REPLACES  adds the page to the sequence (01)
    assets/work-pagination.css                    REPLACES  keeps 8 numbers inside 320px screens

Seven files. Three replacements, four additions. Nothing is deleted.

## How to deploy

Copy the contents of this folder into the repository root, keeping the
structure. Relative paths only, as before.

## Notes

- Page shell, header, footer, contact and resume forms, and lightbox are
  ported from work-ai-transformation-roadmap-framework.html. New CSS is
  scoped with the gm- prefix and lives inline in the new page only.
- The new case study is 01 in the pagination and the AI transformation page
  becomes 02; every other case study shifts one number. The order itself is set in
  PROJECTS in assets/work-pagination.js.
- The two social graphics have the platform wordmark, page title, tab
  title, search field, and client logo blurred.
- Canonical and og:url point at japarofcontent.com/work/genai-marketing-operating-system,
  matching the other pages.
