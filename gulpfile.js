var gulp = require('gulp');
var sass = require('gulp-sass');



// Basic pattern:
//
//  gulp.task('task-name', function() {
//    // Stuff here
//  });

// Applying a plugin to a directory:
//
//  gulp.task('task-name', function () {
//    return gulp.src('source-files') // Get source files with gulp.src
//      .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//      .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//  })

// Watching a directory:
//
//  gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 



gulp.task('default', function() {
  console.log('Hello!');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
});
