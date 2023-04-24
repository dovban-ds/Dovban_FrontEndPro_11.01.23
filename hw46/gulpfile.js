import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { concats } from "./gulp/tasks/concat.js";

// gulp.watch(path.watch.files, copy);
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  // gulp.watch(path.watch.concat, concats);
}

const mainTasks = gulp.parallel(html, scss, js, concats);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task("default", dev);
