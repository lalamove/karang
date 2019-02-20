const path = require('path');

module.exports = {
  require: [path.resolve(__dirname, '.styleguide/setup.js')],
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
    let ComponentName = componentPath
      .split(path.sep)
      .pop()
      .split('.')
      .shift();

    let p;
    if (ComponentName === 'index') {
      p = path.join(componentPath, '..');
      ComponentName = p.split(path.sep).pop();
    } else {
      p = path.join(componentPath, '../..');
    }

    return path.join(p, `${ComponentName}.md`);
  },
  title: 'Lalamove UI Library',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'UI Components',
      components: 'src/components/!(Input|TextArea)/**/{index,[A-Z]*}.js',
      sections: [
        {
          name: 'Input',
          components: 'src/components/@(Input|TextArea)/**/{index,[A-Z]*}.js',
        },
      ],
      sectionDepth: 1,
    },
    {
      name: 'Contributing Guidelines',
      content: 'CONTRIBUTING.md',
    },
  ],
  template: {
    favicon: 'https://web.dev.lalamove.com/favicon.png',
    head: {
      meta: [
        {
          name: 'description',
          content:
            'React components that implement Lalamove Design, for all web projects.',
        },
        {
          name: 'keywords',
          content: 'lalamove, ui, react, library, github',
        },
        {
          property: 'og:title',
          content: 'Lalamove UI Library',
        },
        {
          property: 'og:description',
          content:
            'React components that implement Lalamove Design, for all web projects.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://ui.lalamove.com',
        },
        {
          property: 'og:image',
          content: 'https://web.dev.lalamove.com/meta.png',
        },
      ],
    },
  },
  theme: {
    color: {
      link: '#f26722',
      linkHover: '#f26722',
    },
    fontFamily: {
      base: ['BlinkMacSystemFont', 'sans-serif'],
    },
  },
};
