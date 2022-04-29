# zavid-config

The ESLint, Prettier and Stylelint configurations for TypeScript React projects developed by Zavid Egbue.

## Dependencies

First, install all required dependencies for a full project:

```
yarn add -D @zzavidd/eslint-config @zzavidd/stylelint-config @zzavidd/prettier-config eslint stylelint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks stylelint-config-sass-guidelines
```

<details>
<summary>Node Javascript</summary>

```
yarn add -D @zzavidd/eslint-config @zzavidd/prettier-config eslint prettier eslint-plugin-import
```

</details>

<details>
<summary>Node TypeScript</summary>

```
yarn add -D @zzavidd/eslint-config @zzavidd/prettier-config eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

</details>

## Configuration

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

Although it's recommended to add your own `.eslintrc.js` file.

```js
/**
 * @type {import('eslint').Linter.Config}
 */
const eslintConfig = {
  extends: '@zzavidd/eslint-config/react-ts',
  root: true,
  // If TypeScript is used.
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['**/tsconfig.json'],
  },
};

module.exports = eslintConfig;
```

## Update configuration

To force-update the installed configuration, run the following command:

```
yarn upgrade @zzavidd/eslint-config@latest @zzavidd/stylelint-config@latest @zzavidd/prettier-config@latest
```
