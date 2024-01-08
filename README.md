# React boilerplate

## Introduction

This template provides the setup for React to work in Vite with SWC mode.

- Node: >= 18.16.0
- React: v18.2.0
- Vite: 5.0.8
- Typescript: 5.2.2

## Run project

Use the [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install package.

```bash
npm i
```

Run the project in development mode.

```bash
npm run dev
```

Build project

```bash
npm run build
```

Run the project in production mode.

```bash
npm run preview
```

Check and fix coding conventions

```bash
npm run lint
npm run lint:fix
npm run prettier
npm run prettier:fix
```

## Technologies Used

- React + Vite SWC
- [React query](https://tanstack.com/query/latest/docs/react/overview)
- [React hook form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React i18next](https://react.i18next.com/)
- [React router dom](https://reactrouter.com/en/main)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Tailwindcss](https://tailwindcss.com/)
- [Husky](https://typicode.github.io/husky/)
- [Commitlint](https://commitlint.js.org/#/)

## Project structure

```bash
.
├── .husky                     # Config husky
├── .vscode                    # Config for VScode workspace
├── public
├── src
│   ├── apis                   # Declare the APIs used in the project
│   ├── components
│   ├── constants
│   ├── contexts               # Containing React contexts
│   ├── hooks                  # Declare React custom hooks
│   ├── i18n                   # Config i18n
│   ├── layouts
│   ├── locales                # Contain localization json files
│   ├── pages
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── index.scss
│   ├── main.tsx
│   └── vite-env.d.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.cjs              # Config eslint
├── .gitignore
├── .prettierignore
├── .prettierrc                # Config prettier
├── commitlint.config.cjs      # Config commitlint
├── tailwind.config.js         # Config tailwind
├── tsconfig.json              # Config typescript
└── vite.config.ts             # Config vite
```
