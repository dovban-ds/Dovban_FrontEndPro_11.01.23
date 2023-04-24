import concat from "gulp-concat";
import cleanCss from "gulp-clean-css";

export const concats = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(concat("main.min.css"))
    .pipe(cleanCss())
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.plugins.browsersync.stream());
};
