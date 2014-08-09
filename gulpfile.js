//Aqui eu carrego todos os modulos necessarios pra que aconteça a magica
var gulp = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat');

// Minifica novas imagens
gulp.task('imagemin', function() {

    return gulp.src('files/img/**/*')
      .pipe(changed('build/img/'))
      .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest('build/img/'));
});

// Concatena e minifica script
gulp.task('scripts', function() {
    return gulp.src(['files/js/paxaslider.js'])
      .pipe(concat('paxaslider.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js/'));
});

//minifica e compila o sass
gulp.task('sass', function() {
    gulp.src(['files/sass/paxaslider.sass'])
      .pipe(sass())
      .on('error', function (err) { console.error('Error :'+err.message); })
      .pipe(gulp.dest('build/css/'))
      .pipe(concat('paxaslider.min.css'))
      .pipe(minifyCSS({
        keepSpecialComments: 0
      }))
      .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['imagemin', 'scripts','sass'], function() {

    // watch for JS changes
    gulp.watch('files/js/paxaslider.js', function() {
        gulp.run('scripts');
    });
    //wath for img changes
    gulp.watch('files/img/**/*', function() {
        gulp.run('imagemin');
    });
    // watch for CSS changes
    gulp.watch('files/sass/**/*', function() {
        gulp.run('sass');
    });

});
//npm install gulp gulp-changed gulp-imagemin gulp-uglify gulp-ruby-sass gulp-minify-css gulp-concat