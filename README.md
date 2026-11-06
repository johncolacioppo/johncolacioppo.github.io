# John Colacioppo — Engineering Portfolio

Static site (plain HTML and CSS, no build step) for GitHub Pages.

## Put it online

1. Create a new public GitHub repository named `YOUR-USERNAME.github.io` (use your exact GitHub username).
2. Upload everything in this folder to the repository root (drag the files into "Add file → Upload files", or push with git).
3. In the repository, go to **Settings → Pages**, set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io`.

## Before you share it

Search the project for `class="todo"` and `class="ph"`. Those are the spots that still need your input:

- `class="todo"` (yellow highlight): text only you can fill in, like test results.
- `class="ph"` (dashed box): an image placeholder. Each one names the file path it expects, and the HTML comment just above it has the `<img>` tag to paste in.

Image folders:

- `assets/img/aip/` — anti-intrusion plate. Fabrication, test and analysis images are in. Put full-size images here and 640 px versions in `aip/thumbs/`.
- `assets/img/cola/` — COLA (pipeline diagram, results, code screenshot, explainer video)
- `assets/img/organizer/` — already filled from the IB project PDF

Save screenshots as `.jpg` around 1400 px wide to keep pages fast.

## Adding gallery photos

Each project page has a Gallery section split into groups (CAD and drawings, Analysis, Physical testing). To add a photo, put the file in the project's image folder and replace one of the dashed placeholder `<li>` blocks with:

```html
<li><figure><a class="g-item" href="../assets/img/aip/FILE.jpg"><img src="../assets/img/aip/FILE.jpg" alt="What the image shows" loading="lazy"></a><figcaption>Your caption.</figcaption></figure></li>
```

Clicking any gallery image opens it full size with its caption, and the arrow keys move between images. For a short video clip (keep it under about 20 MB, GitHub's web upload limit is 25 MB), use:

```html
<li><figure><video src="../assets/img/aip/FILE.mp4" controls muted playsinline preload="metadata"></video><figcaption>Your caption.</figcaption></figure></li>
```

## Page structure

Every project page follows the same order: title, timeframe and outcome first, then overview, objective and constraints, my role, process and technical details, gallery, and results and impact.

## Updating the resume

Replace `assets/John_Colacioppo_Resume.pdf` with the new PDF, keeping the same file name.

## Files

```
index.html                        Home: intro, projects, skills, contact
resume.html                       Embedded resume with download button
projects/anti-intrusion-plate.html
projects/cola.html                COLA (Composite Optimization & Logistics Automation)
projects/nightstand-organizer.html
css/style.css                     All styling (light and dark mode)
js/gallery.js                     Full-size image viewer for galleries
assets/                           Resume PDF, favicon, images
```
