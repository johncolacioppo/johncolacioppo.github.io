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

- `assets/img/aip/` — anti-intrusion plate (ACP screenshot, SOLIDWORKS model, stress plot, punch-shear photo)
- `assets/img/cola/` — layup optimizer (pipeline diagram or results)
- `assets/img/organizer/` — already filled from the IB project PDF

Save screenshots as `.jpg` around 1400 px wide to keep pages fast.

## Updating the resume

Replace `assets/John_Colacioppo_Resume.pdf` with the new PDF, keeping the same file name.

## Files

```
index.html                        Home: intro, projects, skills, contact
resume.html                       Embedded resume with download button
projects/anti-intrusion-plate.html
projects/layup-optimizer.html
projects/nightstand-organizer.html
css/style.css                     All styling (light and dark mode)
assets/                           Resume PDF, favicon, images
```
