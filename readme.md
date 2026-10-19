# techconfsouthtyrol.it

The landing page of Tech Conf South Tyrol, a possible future tech conference in South Tyrol.
It is a project of the community behind [Tech Talks South Tyrol](https://www.techtalkssouthtyrol.it).

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- [NPM](https://www.npmjs.com)

### Setup

#### GitHub Registry

Some packages (`@aboutbits/eslint-config`, `@aboutbits/prettier-config` and `@aboutbits/ts-config`) are hosted on the
GitHub registry.

In order to get access to packages (public and private) hosted on the GitHub registry, generate a classic personal
access token on GitHub with `read:packages` permissions: https://github.com/settings/tokens

Next, you have to paste the following snippet including your generated token to the `~/.npmrc` file on your machine.

```
//npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
@aboutbits:registry=https://npm.pkg.github.com
```

#### Dependencies

Install all dependencies by executing the following command:

```bash
npm ci
```

#### Execution

Next, you can start the application:

```bash
npm run dev
```

The project will be served at http://localhost:3000.

## Development

For linting the source files, execute the following command:

```bash
npm run lint

# or

npm run lint:fix
```

For type checking, execute the following command:

```bash
npm run typecheck
```

## Content

All content is managed in the code. There is no CMS.

The site is a single landing page. The texts and the links (e-mail, Discord, Tech Talks South Tyrol) are in
`src/data/site.ts` and in the components in `src/components/pages/home`.
