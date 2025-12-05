# Image Files

Place your image files in this directory:

## Required Images

1. **logo.png** (or logo.jpg)
   - J.NAU REAL ESTATE logo with house and mustache
   - Recommended size: 320x80px or larger (2:1 aspect ratio)
   - Used in: Header navigation

2. **headshot.jpg** (or headshot.png)
   - Joshua Nau professional headshot
   - Recommended size: 800x1000px or larger (portrait orientation)
   - Used in: Homepage hero section and About page

## Image Formats

- PNG: Best for logos with transparency
- JPG: Best for photos
- WebP: Also supported (best performance)

## File Naming

The code expects these exact filenames:
- `/images/logo.png` (or `.jpg`)
- `/images/headshot.jpg` (or `.png`)

If you use different filenames, update the image paths in:
- `components/ui/Header.tsx` (logo)
- `app/page.tsx` (headshot)
- `app/about/page.tsx` (headshot)

