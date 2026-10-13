# Copilot Instructions

Single-page personal portfolio (jbcamps.dev) built with Nuxt 3 + TypeScript, Vuetify 3 (dark theme), and `@nuxtjs/i18n`.

## Commands

Package manager is Bun (`bun.lockb`).

- `bun install` (runs `nuxt prepare` via postinstall)
- `bun run dev` — dev server
- `bun run build` / `bun run generate` / `bun run preview`

There is no test or lint setup.

## Architecture

- `pages/index.vue` is the only page; it composes the components in `components/` (kebab-case filenames, e.g. `project-card.vue`, auto-imported as `<ProjectCard>`).
- **All site content lives in `i18n/config.ts`** (`defineI18nConfig`, messages for `en`, `pt`, `es`: experience, education, projects, testimonials, section titles). Components render it via `$t(...)`, so content edits go there, and any new key must be added to all three locales.
- `nuxt.config.ts`: i18n uses `strategy: 'prefix'` (`/pt`, `/en`, `/es`), `defaultLocale: 'pt'`, no browser-language detection; `/` has `isr: 60`; Nitro prerender crawls links.
- Vuetify is registered manually in `plugins/vuetify.ts` (all components/directives imported, SSR on, single custom dark theme `customDark`) plus `vite-plugin-vuetify`'s `transformAssetUrls` in the Vite config. Icon fonts (mdi, devicon, flag-icons, bootstrap-icons) are loaded globally via `css`/modules in `nuxt.config.ts`.
- Global SEO meta (Portuguese title/description) is set in `app.vue`; Google Analytics via `nuxt-gtag`.
