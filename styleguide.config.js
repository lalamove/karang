const path = require('path');
const fs = require('fs');

module.exports = {
  require: [path.resolve(__dirname, '.styleguide/setup.js')],
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/_story.{js,jsx,ts,tsx}',
  ],
  exampleMode: 'collapse',
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const compDir = /(^src\/components\/[a-zA-Z]+)/.exec(componentPath)[1];
    const configPath = path.join(__dirname, compDir, 'doc.json');
    try {
      const stats = fs.lstatSync(configPath);
      if (stats.isFile()) {
        const compConfig = require(configPath); // eslint-disable-line global-require, import/no-dynamic-require
        return compConfig.import;
      }
    } catch (error) {
      console.warn(error);
    }
    return componentPath;
  },
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
  webpackConfig: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|svg|gif)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
