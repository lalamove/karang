const path = require('path');

module.exports = {
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/_story.{js,jsx,ts,tsx}',
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    const p = path.join(componentPath, '../..');
    const ComponentName = componentPath
      .split(path.sep)
      .pop()
      .split('.')
      .shift();
    return path.join(p, `${ComponentName}.md`);
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'UI Components',
      components: 'src/components/**/[A-Z]*.js',
    },
  ],
};
