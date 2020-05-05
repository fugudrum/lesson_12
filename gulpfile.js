const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task ('hello', function(done) {
 console.log('Привет, Мир!');
});

// Static server
gulp.task('browser-sync', function() {
 browserSync.init({
     server: {
         baseDir: "./"
     }
 });
 gulp.watch("./*.html").on('change', browserSync.reload);
 gulp.watch("./*.css").on('change', browserSync.reload);
});

//Изменения в CSS
