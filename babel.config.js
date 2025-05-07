module.exports = {
    presets: [
      '@babel/preset-env',  // Transpiles modern JavaScript to compatible versions
      '@babel/preset-react', // Transpiles JSX
      '@babel/preset-typescript', // Add support for TypeScript
    ],
    plugins: [
      '@babel/plugin-transform-runtime',  // For polyfills
    ],
  };
  