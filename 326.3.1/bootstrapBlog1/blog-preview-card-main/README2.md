# Blog Preview Card (Bootstrap Version)

This project recreates the Frontend Mentor **Blog Preview Card** layout using **Bootstrap 5** as the primary styling system.  
The page is a single responsive card centered vertically and horizontally, featuring an illustration, tag, publish date, title, description, and author section.

## Tech Used
- **HTML5**
- **Bootstrap 5 (CDN)** for layout, spacing, and core component styling
- **Custom CSS (`blog.css`)** only for brand-specific overrides (colors, exact shadow, exact radii)
- Frontend Mentor assets (images + favicon)

## Where Bootstrap Is Used
Bootstrap replaces most of the original custom layout CSS:

### Layout / Centering
- `min-vh-100` + `d-flex` + `align-items-center` + `justify-content-center`
- `p-4` for responsive padding around the layout

### Card Component
- Bootstrap `.card` + `.card-body` for structure
- Bootstrap spacing utilities: `p-4`, `mt-3`, `mb-2`, `mb-3`, `mb-4`

### Tag Badge
- Bootstrap `.badge` plus `rounded-3`, `px-3`, `py-2`, `fw-bold`

### Author Row
- Bootstrap flex utilities: `d-flex`, `align-items-center`, `gap-2`
- Avatar uses Bootstrap `rounded-circle`

## Why There Is Still a `blog.css`
Bootstrap doesn’t ship with the exact Frontend Mentor design tokens (slate colors, custom shadow and radius), so `blog.css` contains small overrides for:
- Custom color variables (`--slate-*`)
- Card max-width, shadow, and border radius
- Image radius and spacing
- Tag color (#f97316) and small typography tweaks


## File Structure
- `index.html` – main page using Bootstrap classes
- `blog.css` – minimal overrides to match the design
- `assets/` – Frontend Mentor images + favicon


