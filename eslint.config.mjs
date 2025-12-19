import nextConfig from 'eslint-config-next';
import eslintConfigPrettier from 'eslint-config-prettier';

const config = [
  ...nextConfig,
  eslintConfigPrettier,
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
];

export default config;
