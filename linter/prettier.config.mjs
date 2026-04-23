/** @type {import('prettier').Config} */
const config = {
  // --- Core Formatting ---
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  // --- Logic & React ---
  experimentalTernaries: true,
  singleAttributePerLine: true,

  // --- Global Standards ---
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  requirePragma: false,

  // --- Legacy & Specialized ---
  // @ts-ignore
  experimentalOperatorPosition: 'start',
  // @ts-ignore
  objectWrap: 'preserve',
  proseWrap: 'always',
  vueIndentScriptAndStyle: false,
};

export default config;
