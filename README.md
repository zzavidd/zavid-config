# zavid-config

The ESLint, Prettier and Stylelint configurations for TypeScript React projects developed by Zavid Egbue.

## Dependencies

First, install all required dependencies for a full project:

```
yarn add -D @zzavidd/eslint-config @zzavidd/stylelint-config @zzavidd/prettier-config eslint stylelint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks postcss stylelint-config-sass-guidelines stylelint-processor-styled-components stylelint-config-styled-components
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

<details>
<summary>React TypeScript (SASS)</summary>

```
yarn add -D @zzavidd/eslint-config @zzavidd/stylelint-config @zzavidd/prettier-config eslint prettier stylelint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks postcss stylelint-config-sass-guidelines
```

</details>

<details>
<summary>React TypeScript (Styled Components)</summary>

```
yarn add -D @zzavidd/eslint-config @zzavidd/prettier-config eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-better-styled-components
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
module.exports = {
  extends: '@zzavidd/eslint-config/react-ts',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['**/tsconfig.json'],
  },
};
```

## Update configuration

To force-update the installed configuration, run the following command:

```
yarn up @zzavidd/eslint-config @zzavidd/prettier-config
```

Or with Stylelint:
```
yarn up @zzavidd/eslint-config @zzavidd/stylelint-config @zzavidd/prettier-config
```