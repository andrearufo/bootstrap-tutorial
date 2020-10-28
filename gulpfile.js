const { src, dest } = require('gulp');
const sass = require('gulp-sass');

function build(cb) {
    return src('dev/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('.'));

        cb();
}

exports.build = build;
