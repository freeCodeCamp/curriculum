const gulp = require('gulp');
const util = require('gulp-util');
const jsonMinify = require('gulp-json-minify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const path = require('path');
const fs = require('fs');

gulp.task('json:minify', () =>
  gulp
    .src('./challenges/**/*.json')
    .pipe(jsonMinify())
    .pipe(gulp.dest('dist/challenges/'))
    .on('error', util.log)
);

gulp.task('json:copy', () =>
  gulp
    .src('./challenges/**/*.json')
    .pipe(gulp.dest('dist/challenges/'))
    .on('error', util.log)
);

gulp.task('json:watch', ['json:copy'], () => {
  gulp.watch('./challenges/**/*.json', event => {
    // Copying via streams can result in dist files being updated incrementally
    // this means that, if it is watching, Gatsby might try to read an
    // unfinished file.
    util.log('Updating', event.path);
    const src = event.path;
    const tail = src.split(path.sep).slice(-2);
    const dest = path.join(__dirname, 'dist', 'challenges', ...tail);
    fs.copyFileSync(src, dest);
  });
});

gulp.task('babel-getChallenges', () =>
  gulp
    .src('./getChallenges.js')
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(gulp.dest('dist'))
);

gulp.task('babel', ['babel-getChallenges'], () =>
  gulp
    .src('./package-entry.js')
    .pipe(rename('./index.js'))
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(gulp.dest('dist/'))
);
