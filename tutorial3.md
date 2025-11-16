# Tutorial 3 - Project Structure

package.json
- project dependencies & scripts live

next.config.ts
- nextjs settings

tsconfig.json
- typescript settings

eslint.config.mjs
- eslint config

postcss.config.mjs
- tailwind css config

next-env.d.ts
- typescript declaration for nextjs

.next folder
- gets created when run either dev or build scripts
- where you app get serves from
- folder is gitignored

node_modules
- installed dependencies
- npm install <> stores here

public folder
- storage for static assets, like images and svgs

src/apps
- app router
    - favicon.ico 
        - browser tab icon
    - globals.css
        - for application wide styles
    - layout.tsx
        - for shared UI elements across pages
    - page.tsx
        - creates what you see when site loads
        - home componenet defined here

When you run `npx run de` command
1. execution start from package.json
2. moves to layout.tsx, rendering the root layout component for the url local host 3000
3. It then looks for the component in the page.tsx which is our Home component
4. It renders the home component in the root layout