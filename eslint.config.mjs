// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier'

export default withNuxt(
	{
		files: ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx'],
		plugins: { prettier },
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // 未使用变量黄色警告
			'no-unused-vars': 'off',
			'prettier/prettier': 'warn'
		}
	}
)
