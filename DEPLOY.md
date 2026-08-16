# GitHub Pages update package

Target repository: robinc1240/robin-japar-portfolio
Live site: https://robinc1240.github.io/robin-japar-portfolio/

## What this package contains

    index.html                                     REPLACES the existing file
    work-ai-transformation-roadmap-framework.html  NEW
    assets/ai-transformation-roadmap-card.webp     NEW
    assets/aitr-01-roadmap.webp                    NEW
    assets/aitr-02-content-model.webp              NEW
    assets/aitr-03-activity-detail.webp            NEW
    assets/aitr-04-portfolio-mapping.webp          NEW
    assets/aitr-05-scoped-roadmap.webp             NEW
    assets/aitr-06-roi-methodology.webp            NEW
    assets/aitr-07-roi-calculator.webp             NEW
    assets/aitr-08-roi-report.webp                 NEW

Eleven files. One replacement, ten additions. Nothing is deleted.

## How to deploy

Copy the contents of this folder into the repository root, keeping the
structure. Do not create a nested folder.

    index.html                    -> repo root, overwrite
    work-ai-...-framework.html    -> repo root, new file
    assets/*.webp                 -> repo assets/, all new filenames

The nine webp filenames do not collide with anything already in assets/,
so nothing existing is overwritten.

Resulting URLs:

    https://robinc1240.github.io/robin-japar-portfolio/index.html
    https://robinc1240.github.io/robin-japar-portfolio/work-ai-transformation-roadmap-framework.html

## Assets the pages use that are NOT in this package

These already exist in assets/ and were verified live (HTTP 200):

    apple-touch-icon.png   favicon.ico   favicon.svg
    flash-01-card.webp     friction-01-card.webp   offer-01-card.webp
    pers-01-card.webp      score-01-card.webp      tax-03-card.webp
    robin-japar-portrait-circle.webp

No duplicates were packaged.

## Path corrections made

None were needed. Both files already used relative paths only.
