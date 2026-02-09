# QR Code Component (Bootstrap Version)

This project recreates the Frontend Mentor **QR Code Component** using **Bootstrap 5** as the primary styling system.
The layout is a centered card containing a QR image, headline, and supporting text.

## Tech Used
- **HTML5**
- **Bootstrap 5 (CDN)** for layout, spacing, typography, and responsive image behavior
- **Custom CSS (`326Qr.css`)** only for design-token accuracy (colors, radius, shadow)

## Where Bootstrap Is Used
Bootstrap replaces most of the original custom layout CSS:

### Centering / Layout
- `min-vh-100` to fill the viewport height
- `d-flex align-items-center justify-content-center` to center the card
- `p-4` for responsive padding

### Card + Spacing
- Bootstrap `.card` + `.card-body` for structure
- Utility spacing classes like `px-3`, `pt-3`, `pb-4`, `mb-3`

### Responsive Image
- `img-fluid` ensures the QR image scales correctly on smaller screens
- `text-center` centers text content

## Why There Is Still a `326Qr.css`
Bootstrap does not include the exact Frontend Mentor color tokens and exact border-radius/shadow values.
`326Qr.css` keeps only what Bootstrap can’t replicate precisely:
- Slate background + slate text colors
- Card max-width, border radius, and shadow
- Image radius
- Minor typography tuning (letter-spacing + line-height)


## File Structure
- `index.html` – Bootstrap-based layout
- `326Qr.css` – minimal design overrides
- `images/` – QR image from Frontend Mentor
