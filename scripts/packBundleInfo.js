/* eslint-disable no-console */
const path = require('path');
const fs = require('fs').promises;
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');
const srcPath = path.join(packagePath, './src');

async function createModulePackages({ from, to }) {
  const directoryPackages = glob
    .sync('*/**/index.js', { cwd: from })
    .map(path.dirname);
  await Promise.all(
    directoryPackages.map(async pack => {
      const relativePath = pack
        .split('/')
        .map(() => '../')
        .join('');
      const packageJson = {
        sideEffects: false,
        module: path.join(relativePath, 'esm', pack, 'index.js'),
      };
      const packageJsonPath = path.join(to, pack, 'package.json');
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    })
  );
}

async function copyPackageJson({ from, to }) {
  const directoryPackages = glob
    .sync('*/**/package.json', { cwd: from })
    .map(path.dirname);
  await Promise.all(
    directoryPackages.map(async pack => {
      const outPutPath = [
        path.join(to, pack, 'package.json'),
        path.join(to, 'esm', pack, 'package.json'),
      ];
      await Promise.all(
        outPutPath.map(async out =>
          fs.copyFile(path.join(from, pack, 'package.json'), out)
        )
      );
    })
  );
}

async function createPackageFile(from) {
  const packageData = await fs.readFile(
    path.resolve(from, './package.json'),
    'utf8'
  );
  const {
    jest,
    scripts,
    devDependencies,
    files,
    ...packageDataOther
  } = JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: './esm/index.js',
  };
  const targetPath = path.resolve(buildPath, './package.json');

  await fs.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function main() {
  try {
    await createPackageFile(packagePath);
    await createModulePackages({
      from: srcPath,
      to: buildPath,
    });
    await copyPackageJson({
      from: srcPath,
      to: buildPath,
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
