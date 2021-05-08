# zavid-config

The ESLint, Prettier and Stylelint configurations for TypeScript React projects developed by Zavid Egbue.

## Configuration

First, install all required dependencies:

```
npm i -D @zzavidd/eslint-config @zzavidd/stylelint-config @zzavidd/prettier-config eslint stylelint prettier @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-react stylelint-config-sass-guidelines
```

In your `package.json`, add the following top-level properties:

```json
"eslintConfig": {
  "extends": "@zzavidd/eslint-config"
},
"stylelint": {
  "extends": "@zzavidd/stylelint-config"
},
"prettier": "@zzavidd/prettier-config",
```

## Update configuration

To force-update the installed configuration, run the following command:

```
npm i -D @zzavidd/eslint-config@latest @zzavidd/stylelint-config@latest @zzavidd/prettier-config@latest
```