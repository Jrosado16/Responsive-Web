const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src([
            'src/scss/main.scss'
        ])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './src'
    });

    gulp.watch([
        'src/scss/*.scss'
    ], ['sass']);

    gulp.watch('src/*.html').on('change', browserSync.reload);
    // gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);