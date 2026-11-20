# CheeseySMP Brand Color Palette

> Canonical design reference for CheeseySMP websites. Filename intentionally spelled `pallete.md` as requested.

## Brand direction

A dark, cheese-inspired palette: deep aubergine rind and toasted-plum surfaces with warm cream text, cheddar-orange primary accents, and golden cheese highlights. Keep the site dark overall; use the bright cheese colors as restrained highlights and buttons, not as large backgrounds.

## Core colors

| Token | Hex | Purpose |
| --- | --- | --- |
| `--cs-bg` | `#171116` | Deep aubergine page background |
| `--cs-surface` | `#241820` | Cards, footer, navigation, panels |
| `--cs-surface-raised` | `#33212A` | Raised cards, menus, hover backgrounds |
| `--cs-border` | `#59404A` | Subtle toasted-plum borders and dividers |
| `--cs-text` | `#FFF4D8` | Warm cream main text and headings |
| `--cs-text-muted` | `#D1BFA5` | Supporting text and hints |
| `--cs-cheddar` | `#F2AD38` | Primary buttons and strong cheese accents |
| `--cs-cheddar-hover` | `#FFC65B` | Primary button hover state |
| `--cs-cheese` | `#FFD166` | Bright cheese-gold secondary accents |
| `--cs-cheese-hover` | `#FFDF8C` | Secondary highlight hover state |
| `--cs-plum` | `#542B3A` | Deep plum for accents and button text |
| `--cs-plum-hover` | `#71374A` | Plum surface hover state |
| `--cs-danger` | `#FF8F86` | Error text and destructive-action warnings |
| `--cs-success` | `#A8D992` | Success messages and confirmed states |

## Usage rules

1. Use dark aubergine as the default canvas, with raised plum surfaces and subtle toasted borders.
2. Use cheddar orange for primary calls to action and cheese gold as a secondary highlight; avoid competing accents on one control.
3. Use `--cs-text` for body copy and `--cs-text-muted` for supporting text. Both are light enough for dark surfaces.
4. Put deep plum text (`--cs-plum`) on bright cheddar/gold buttons. Use warm cream text on dark plum surfaces.
5. Keep content cards on `--cs-surface`, raised/hover elements on `--cs-surface-raised`, and borders on `--cs-border`.
6. Use `--cs-danger` only for destructive actions, errors, or real warnings. Do not use red as decoration.
7. Keep links recognizable with underlines or clear interaction states, not only a color difference.
8. Keyboard focus must be visible, with a 2px cheddar outline and offset.
9. Apply these tokens consistently to header, footer, navigation, forms, cards, buttons, and reusable footer components.
10. Do not alter the spelling of domains or URLs: `https://cheeseysmp.net`, `https://store.cheeseysmp.net`, `https://rules.cheeseysmp.net`, `https://discord.gg/cheeseysmp`.

## CSS tokens

```css
:root {
  color-scheme: dark;
  --cs-bg: #171116;
  --cs-surface: #241820;
  --cs-surface-raised: #33212A;
  --cs-border: #59404A;
  --cs-text: #FFF4D8;
  --cs-text-muted: #D1BFA5;
  --cs-cheddar: #F2AD38;
  --cs-cheddar-hover: #FFC65B;
  --cs-cheese: #FFD166;
  --cs-cheese-hover: #FFDF8C;
  --cs-plum: #542B3A;
  --cs-plum-hover: #71374A;
  --cs-danger: #FF8F86;
  --cs-success: #A8D992;
}

body {
  background: var(--cs-bg);
  color: var(--cs-text);
}

.cs-card {
  background: var(--cs-surface);
  border: 1px solid var(--cs-border);
  border-radius: 14px;
}

.cs-button-primary {
  background: var(--cs-cheddar);
  color: var(--cs-plum);
}

.cs-button-primary:hover { background: var(--cs-cheddar-hover); }

.cs-button-secondary {
  background: var(--cs-cheese);
  color: var(--cs-plum);
}

:focus-visible {
  outline: 2px solid var(--cs-cheddar);
  outline-offset: 3px;
}
```

## UI mapping

| UI element | Recommended colors |
| --- | --- |
| Header & footer | Dark plum surface with warm cream text and cheese-gold links |
| Hero section | Dark background, warm cream text, restrained gold decoration |
| Primary button | Cheddar fill, dark plum text |
| Secondary button | Raised dark surface with toasted border or gold fill with plum text |
| Cards / command listings | Dark surface, subtle toasted border, cream heading |
| Input / search bar | Deep background, cream text, cheddar focus ring |
| Links | Cheese gold with underline or obvious hover treatment |
| Status feedback | Light green success / soft coral danger only as appropriate |

## Shared implementation notes

- Define the `--cs-*` tokens in `:root` and use them across pages. Avoid copied one-off hex values in component styles.
- Reusable or standalone footer components should use these same palette tokens and contrast pairings.
- Translucent decorative tints may be derived from palette colors, but never use them for essential text or state indicators.
- The reusable footer components live in separate files; keep their colors aligned with these same canonical palette tokens.

## Accessibility

The following text/background combinations exceed WCAG AA for normal text (approximate contrast ratios):

- Main text `#FFF4D8` on background `#171116`: approximately **16.8:1**.
- Muted text `#D1BFA5` on background `#171116`: approximately **9.1:1**.
- Plum text `#542B3A` on cheddar `#F2AD38`: approximately **5.4:1**.
- Plum text `#542B3A` on cheese gold `#FFD166`: approximately **7.4:1**.
- Warm cream text `#FFF4D8` on surface `#241820`: approximately **15.1:1**.

Check all newly created state combinations and interactive controls for contrast and keyboard accessibility.

## Implementation checklist

- [x] Define the CSS variables in the global stylesheet.
- [x] Refactor the command-guide styles to use palette tokens.
- [x] Apply the cheese palette to the reusable footer copies present in this project.
- [x] Preserve current functionality, responsive layout, content, and working links.
- [x] Keep this file at the project root as the single source of truth for brand colors.
- [ ] Apply and test this palette on separate Home, Store, and Rules project codebases when those projects are available.
- [ ] Test desktop and mobile responsive layouts and interactive states in a browser.
