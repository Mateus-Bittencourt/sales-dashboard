import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['cypress/**/*.{js,ts,jsx,tsx}', '**/*.cy.{js,ts,jsx,tsx}'],
    plugins: { cypress },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...cypress.environments.globals,
      },
    },
    rules: {
      ...cypress.configs.recommended.rules,
    },
  },
])
