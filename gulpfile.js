var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');


gulp.task('hello', function() {
	console.log('Hello Denis!');
});

gulp.task('less', function() {
	gulp.src('app/less/style.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', function(){
	gulp.watch('app/less/**/*.less', ['less']);
});
