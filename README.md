# Chung-Yang Yeh — Personal Academic Website

Personal academic website for Chung-Yang Yeh (葉崇揚), Associate Professor, Department of Sociology, Soochow University, Taiwan.

## How to deploy on GitHub Pages

1. Create a new GitHub repository named **`cy-yeh.github.io`**
   (or any name — but `[username].github.io` will give you a clean URL)

2. Upload all files in this folder to that repository:
   - `index.html`
   - `css/style.css`
   - `js/main.js`
   - `README.md`

3. Go to your repository **Settings → Pages**

4. Under **Source**, select `Deploy from a branch` → branch `main` → folder `/ (root)`

5. Click **Save**. Your site will be live at `https://[username].github.io` within a few minutes.

## Adding your photo

To add your profile photo:

1. Save your photo as `photo.jpg` in the root folder (same level as `index.html`)
2. Open `index.html` and find this comment:
   ```
   <!-- To add your photo, replace the div above with: ... -->
   ```
3. Replace the `<div class="hero-photo-placeholder">...</div>` block with:
   ```html
   <img src="photo.jpg" alt="Chung-Yang Yeh" style="width:100%;height:100%;object-fit:cover;" />
   ```

## Structure

```
cy-yeh.github.io/
├── index.html        ← Main page (all content)
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Navigation + tab switching + scroll animations
└── README.md
```

## Updating content

All content lives in `index.html`. Search for the relevant section:
- **About**: `id="about"`
- **Publications**: `id="publications"`
- **Research Projects**: `id="research"`
- **Contact**: `id="contact"`
