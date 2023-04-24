const buildFolder = `./dist`;
const srcFolder = `./src`;

import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
  build: {
    maincss: `${buildFolder}/main-min-css`,
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    css: `${srcFolder}/files/*.css`,
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    css: `${srcFolder}/files/*.css`,
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
