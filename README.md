## Linda Liu's Portfolio Website 2026

Built using React and Vite
To run locally:

1. Clone the repo
2. Run pnpm install
3. Run pnpm run dev
4. Open your browser and navigate to localhost:5173

# Problems I faced

The initial loading of the site was slow:

Solutions:
I checked if the page performance was good by using the lighthouse tool and disabled the cache in the Network tab of the dev tool, but the score performance turned out to be 77 on desktop and 55 on mobile which is slow. So, I decided to do Route Based Lazy Loading: I implemented the lazy loading and Suspense with a fallback (e.g. loading spinner or loading...) So it would load the components only when needed. After the implementation, the score performance went up to 81 on desktop and 58 on mobile.

I ran into the problem of "Could not Fast Refresh ("ThemeContext" export is incompatible)", I solved the problem by placing the ThemeContext component into its own dedicated component file, so it would only import when needed. I also made sure to exit the terminal and npm run dev to make sure it worked.

I tried code splitting to improve the performance by splitting them into: Routes, Components, Libraries, and Features

I imported only what I use instead of the full library from React.

---

I had trouble creating a separate page for the project pages:
Solution: I made them a sibling component instead of a child component

I had trouble keeping the background to 100% height:
Solution: I added a site-wrapper class to the entire site and set the min-height: 100vh

Other finds:
I found out how to link the sibling component to the project component by Link to="../projects" from the sibling component. This allows the sibling component to have it's own entire page while linked to the project component.

Images from the asset folder weren't showing after being deployed on Vercel, so I moved it to the public folder instead of the src folder.

The site doesn't reload and goes to page 404 when on child or sibling pages:
Solution: I added a vercel.json file with a code to fix this issue

I had trouble flexing the nav menu on bigger screen.
Solution: I use the dev tool to analyze the problem. I realized the nav-menu is set to display block inside the function, however, I liked how it looked. So, I left it as it is.

---

What to improve on:
CSS:
Change the variabl CSS names and re-use the variable names where colors are the same.

Performance:

1. Replacing heavy libraries with native code.
2. I will also try removing unused dependencies by doing npm uninstall moment once I finish the project.
3. I will analyze my bundle by doing npm run build. And makes sure to analyze it by doing example: npx source-map-explorer build/static/js/\*.js
4. Tree shaking. do -> import {formatDate} from "./utils"; instead of const utils = require("./utils") so I only use what I need.
5. Avoid files that runs code as soon as they are imported. If file has side effects, bundlers won't touch it.
6. Avoid barrel files
7. Optimize images & assets by adding loading = "lazy" for example:
   <!-- <img src ="hero".png loading="lazy" /> -->
   use SVGs for icons, compress images before shipping, avoid massive background images unless absolutely necessary
8. Always ship production builds
   includes: extra warnings, debug checks, unoptimized code paths Examples: don't use npm start
   instead... use npm run build (because it minify your code, strip out dead logic, optimize executio paths) this can cut bundle size by 30-50% and improves load time

Always remember: load less, load later, letting the browser work less

<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
