// eslint.config.js
const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Плагины
const pluginReact = require('eslint-plugin-react');
const pluginReactNative = require('eslint-plugin-react-native');
const pluginPrettier = require('eslint-plugin-prettier');
const configPrettier = require('eslint-config-prettier');
const tseslint = require('typescript-eslint');

module.exports = defineConfig([
	// 1. Игнорируемые файлы и папки
	globalIgnores([
		'**/node_modules/**',
		'**/.expo/**',
		'**/dist/**',
		'**/build/**',
		'**/coverage/**',
	]),

	// 2. Базовая конфигурация Expo (включает поддержку TypeScript и React Native)
	expoConfig,

	// 3. Правила TypeScript (парсер и рекомендованные правила)
	...tseslint.configs.recommended,

	// 4. Правила React (плоский конфиг)
	{
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	pluginReact.configs.flat['jsx-runtime'],

	// 5. Правила React Native — применяются к .tsx и .ts файлам
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-native': pluginReactNative,
		},
		rules: {
			'react-native/no-unused-styles': 'error',
			'react-native/split-platform-components': 'error',
			'react-native/no-inline-styles': 'error',
			'react-native/no-color-literals': 'error',
			'react-native/no-raw-text': 'error',
			'react-native/no-single-element-style-arrays': 'error',
		},
	},

	// 6. Правила Prettier — применяются к .tsx и .ts файлам
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					useTabs: true,
					tabWidth: 4,
					semi: false,
					trailingComma: 'all',
					bracketSpacing: true,
					printWidth: 100,
					endOfLine: 'auto',
				},
			],
		},
	},

	// 7. Специфичные правила TypeScript (ваши настройки)
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-require-imports': [
				'error',
				{ allow: ['^@/assets/'] },
			],
		},
	},

	// 8. Отключает правила ESLint, конфликтующие с Prettier (должен быть в конце)
	configPrettier,
]);