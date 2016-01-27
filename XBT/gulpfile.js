/**
 * Created by wungcq on 15/10/31.
 */
//引入外挂模块
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass  = require('gulp-sass'),
  babel = require('gulp-babel'),
  react = require('gulp-react'),
  watch = require('gulp-watch');
//
////样式
//gulp.task('styles', function () {
//  return gulp.src('public/css/**/*.css')
//    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
//    .pipe(gulp.dest('dist/css'))
//    .pipe(rename({suffix: '.min'}))
//    .pipe(minifycss())
//    .pipe(gulp.dest('dist/css'))
  //  .pipe(notify({message: 'Styles task complete'}));
//});
//
////脚本
//gulp.task('scripts', function () {
//  return gulp.src('public/js/**/*.js')
//    .pipe(rename({suffix: '.min'}))
//    .pipe(uglify())
//    .pipe(gulp.dest('dist/js'))
//    .pipe(notify({message: 'Scripts task complete'}));
//});

//图片
//gulp.task('images', function () {
//  return gulp.src('public/img/**/*')
//    .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
//    .pipe(gulp.dest('dist/img'))
//    .pipe(notify({message: 'Images task complete'}));
//});
gulp.task('jsx', function(){
  watch('jsx/**/*.jsx', function () {
    gulp.src("jsx/**/*.jsx")
      .pipe(babel())
      .pipe(gulp.dest("assets/javascripts"));
  });
});

gulp.task('bs', function (cb) {
  watch('bs/**/*.scss', function () {
    gulp.src("bs/scss/bootstrap.scss")
      .pipe(sass())
      //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
      .pipe(gulp.dest("assets/stylesheets"));
  });
});
gulp.task('style',function(cb){
  return gulp.src("dev/sass/pages/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(gulp.dest("assets/stylesheets"));
});
gulp.task('s', function (cb) {
  var watcher = gulp.watch('dev/sass/**/*.scss', ['style']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
