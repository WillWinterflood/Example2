# Trades Website Template

A professional, mobile-responsive website template for UK tradespeople (decorators, plumbers, electricians, builders, etc.).

**To create a new client site — only edit `config.js`.**

---

## The Loop (new client in ~10 minutes)

### 1. Copy this repo on GitHub
Go to this repo on GitHub → click **"Use this template"** → **"Create a new repository"**
Name it after the client, e.g. `abc-plumbing`

### 2. Clone it locally
```
git clone https://github.com/YOUR_USERNAME/abc-plumbing
cd abc-plumbing
```

### 3. Edit config.js only
Open `config.js` and fill in the client's details:
- Business name, phone, location
- Services (title, icon, description)
- Testimonials
- Colours (primary + accent)

### 4. Preview locally
Just open `index.html` in your browser — no server needed.

### 5. Push to GitHub
```
git add config.js
git commit -m "Configure for ABC Plumbing"
git push
```

### 6. Deploy on Netlify (free)
1. netlify.com → Add new site → Import from GitHub
2. Select the new repo, leave build settings blank → Deploy
3. Live in ~30 seconds

### 7. Add client's domain (optional)
Netlify → Domain management → Add domain → follow DNS instructions

---

## File structure

| File | Purpose |
|---|---|
| `config.js` | **Edit this per client** — all business content |
| `index.html` | HTML shell — do not edit |
| `style.css`  | Styles — do not edit |
| `main.js`    | Builds the page from config — do not edit |

---

## Customising colours

In `config.js`:
```js
colorPrimary: "#0f2744",   // dark background (navbar, hero, footer)
colorAccent:  "#c8963e",   // highlight colour (buttons, icons)
```

Ready-made combos:
- **Plumber**: `#0a3d62` / `#e67e22` (navy + orange)
- **Electrician**: `#1a1a2e` / `#f9ca24` (dark + yellow)
- **Builder**: `#2d3436` / `#e17055` (charcoal + terracotta)
- **Gardener**: `#1a472a` / `#f0a500` (green + amber)
- **Decorator**: `#0f2744` / `#c8963e` (navy + gold)

## Service icons

Pick any free icon at fontawesome.com/icons

Common trades:
- Plumber: `fa-faucet` `fa-wrench` `fa-toilet` `fa-shower`
- Electrician: `fa-bolt` `fa-plug` `fa-lightbulb`
- Builder: `fa-hammer` `fa-hard-hat` `fa-bricks`
- Decorator: `fa-paintbrush` `fa-paintroller` `fa-layer-group`
- Gardener: `fa-leaf` `fa-seedling` `fa-tree`
