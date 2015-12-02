var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var handlebars  = require('gulp-handlebars');
var wrap        = require('gulp-wrap');
var declare     = require('gulp-declare');
var concat      = require('gulp-concat');
var prefix      = require('gulp-autoprefixer');
var path        = require('path');

gulp.task('serve', ['compile-css', 'compile-templates', 'compile-partials'], function() {
  browserSync.init({
    server: './app',
    port: 3300,
    ui: { port: 3301 }
  });

  gulp.watch('./app/styles/*.scss', ['compile-css']);
  gulp.watch(
    ['./app/**/*.hbs', './app/index.html'],
    ['compile-templates', 'compile-partials']
  ).on('change', browserSync.reload);
});

gulp.task('compile-css', function() {
  return gulp.src('./app/styles/app.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: 'map'
    }, { errLogToConsole: true }))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('./app'))
    .pipe(browserSync.stream());
});

gulp.task('compile-templates', function() {
  return gulp.src(['./app/templates/*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MFP.templates',
      noRedeclare: true,
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('compile-partials', function() {
  return gulp.src(['./app/partials/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('partials.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('default', ['serve']);
