var gulp = require('gulp');
var sass = require('gulp-sass');

// Basic pattern:
//
//  gulp.task('task-name', function() {
//    // Stuff here
//  });

gulp.task('default', function() {
  console.log('Hello!');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});