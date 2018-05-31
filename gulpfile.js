// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var order = require('gulp-order');
var cssmin = require('gulp-cssmin');
var concatCss = require('gulp-concat-css');



// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('css', function() {
    gulp.src([
        'src/css/*.css'
        ])
        .pipe(concatCss("bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/cookieconsent/build/cookieconsent.min.js',
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/parsleyjs/dist/parsley.min.js', 
        'js/custom.js',
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('dist/js/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'css', 'scripts']);