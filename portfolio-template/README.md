# Portfolio Template (Future Imperfect)


## What you get

| File | Purpose |
|---|---|
| `index.html` | Home page: header bar, slide-out menu, project cards, sidebar (intro, About, Skills, social icons) |
| `project.html` | Project detail page. Copy it once per project |
| `assets/css/custom.css` | **Your style overrides** (accent colour, fonts, sidebar width, image heights) |
| `assets/js/main.js` | Behaviour (fade-in, menu, intro move). Settings are commented |
| `assets/css/main.css`, `assets/js/*.min.js`, `util.js`, `webfonts/` | The theme itself. Leave as is |
| `assets/sass/` | Theme source for deep style changes. Optional, safe to delete |
| `images/` | Placeholder images. Replace them with yours |
| `resume.pdf` | Placeholder. Replace with your own |

## Behaviour carried over from the original site

- Fade-in on page load
- Header links on desktop, collapsing into a **Menu** button on small screens
- Slide-out menu from the right (closes on link click or swipe)
- Sidebar on desktop; on screens 1280px wide or smaller the intro block moves above the posts
- Project cards with title, date, author avatar, featured image, summary, button and tags
- Anchor links: `#main` (Projects), `#about`, `#skills`, `#footer` (Contact)
- Detail pages in a single centred column with a footer
- External-link project variant (opens in a new tab)
- No search box, as on the original. Optional markup is included, commented out, in `index.html`

## Customizing: quick checklist

Every spot to change is marked in the code with a comment. Use your editor's
Find (`Ctrl/Cmd + F`) across the folder:

| Search for | Meaning |
|---|---|
| `EDIT:` | Change the text, link or date below the comment |
| `REPLACE:` | Swap an image or file |
| `DUPLICATE:` | Copy the block to add more (projects, links, icons) |
| `OPTIONAL:` | Safe to delete, or enable by removing the comment markers |
| `KEEP:` | Required by the layout or script. Do not rename or remove |

Or search for `[` to find every bracketed placeholder such as `[Your Name]`.

### First pass (about 10 minutes)

1. **Your name** in `index.html` and `project.html` (title, header, author lines, intro, copyright).
2. **Email** `you@example.com`: appears in the menu buttons and the footer icons.
3. **Social links**: replace the LinkedIn, GitHub and X URLs in the footer. Delete any icon you do not need.
4. **Photo**: replace `images/avatar.jpg` (small author thumbnail) and `images/logo.jpg` (intro photo, shown small).
5. **Resume**: replace `resume.pdf`, or delete the three Resume links (header, menu, About).
6. **About** and **Skills** text in the sidebar.
7. **Projects**: edit the four sample cards (see below).

### Adding a project

1. Copy an entire `<article class="post"> ... </article>` block in `index.html` and paste it where you want it. Newest goes first.
2. Replace the cover image (`images/project-N.jpg`). Around 1200px wide works well.
3. Copy `project.html`, rename it (for example `hr-dashboard.html`) and write your story there.
4. In the card, point the title link, image link and button at the new file name.

### Changing colours and fonts

Open `assets/css/custom.css`. Change `--accent` to recolour link and button hovers. Font and sidebar-width options are included, commented out.

### Changing behaviour

Open `assets/js/main.js`. Menu side, slide speed, close-on-click and the intro behaviour are marked `EDIT:`.

## Publishing on GitHub Pages

1. Create a repository named `your-username.github.io`.
2. Upload everything in this folder to the repository root.
3. In **Settings > Pages**, choose the main branch. The site goes live at `https://your-username.github.io`.

## Notes

- **Image sizes:** large photos slow the page down. Keep `avatar.jpg` and `logo.jpg` small (a few hundred pixels square) and compress project screenshots.
- **Licence:** Future Imperfect is free under CCA 3.0 *with attribution*. Keep the "Design: HTML5 UP" credit in the footer and `LICENSE.txt` in the folder.
- **Fonts:** body and heading fonts load from Google Fonts, so they need an internet connection to display as designed.
