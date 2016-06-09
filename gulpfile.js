var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var reload      = browserSync.reload;

/**
 * Compile jade files into HTML
 */
gulp.task('templates', function() {

    var YOUR_LOCALS = {};
    return gulp.src('./app/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('include', function() {

    var YOUR_LOCALS = {};
    return gulp.src('./app/includes/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['include','templates'], reload);

/**
 * Sass task for live injecting into all browsers
 */
gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['sass','templates','include'], function () {

    browserSync({server: './dist'});

    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./dist/*.html', reload);
    gulp.watch('./dist/js/*.js', reload);
    gulp.watch('./app/includes/*.jade', ['include','templates']);
    gulp.watch('./app/*.jade', ['jade-watch']);
});
