const path = require('path');
const fs = require('fs').promises;
const glob = require('glob');

const packagePath = process.cwd();
const IconSrc = path.join(packagePath, 'src', 'components/Icon/icons');

async function createIndexJs({ from }) {
  const files = glob
    .sync('*.js', { cwd: from })
    .filter(x => !x.endsWith('index.js'))
    .map(x => path.parse(x).name);

  const content = files
    .map(x => `export { default as ${x} } from './${x}';`)
    .join('\n');
  const targetIndexJs = path.join(from, 'index.js');
  await fs.writeFile(targetIndexJs, `${content}\n`);
}

async function createRootIndexJs({ root }) {
  const dirs = glob
    .sync('*', { cwd: root })
    .filter(x => !x.endsWith('.js'))
    .filter(x => x !== 'utils');
  const content = dirs.map(x => `export * from './${x}';`).join('\n');
  const targetIndexJs = path.join(root, 'index.js');
  await fs.writeFile(targetIndexJs, `${content}\n`);
}

async function main() {
  const directoryPackages = glob
    .sync('*/**/index.js', { cwd: IconSrc })
    .map(path.dirname)
    .filter(x => x !== 'others');
  await Promise.all(
    directoryPackages.map(async pack =>
      createIndexJs({
        from: path.join(IconSrc, pack),
      })
    )
  );
  await createRootIndexJs({
    root: IconSrc,
  });
}

main();
