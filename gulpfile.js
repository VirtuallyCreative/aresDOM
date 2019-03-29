var gulp = require('gulp'),
	replace = require('gulp-replace'),
	jshint = require('gulp-jshint'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	qunit = require('gulp-qunit'),
	package = require('./package.json');

var paths = {
	source: ['ares.js'],
	readme: ['README.md'],
	test: ['tests/runner.html']
};

var handleError = function(err) {
	process.exit(1);
}

gulp.task('update', function(callback) {
	gulp.src(paths.source)
		.pipe(replace(/(\/\*!)(.*)(\*\/)/g, '$1aresDOM '+package.version+', Copyright '+(new Date()).getUTCFullYear()+' '+package.author.name+', released under '+package.license+' license $3'))
		.pipe(gulp.dest(''))
	gulp.src(paths.readme)
		.pipe(replace(/(\# ares v)([\d\.]*)/g, '$1'+package.version))
		.pipe(gulp.dest(''))
		.on('end', callback);
});

gulp.task('lint', function() {
	gulp.src(paths.source)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
		.on('error', handleError);
});

gulp.task('compress', function() {
	gulp.src(paths.source)
		.pipe(rename('ares-min.js'))
		.pipe(uglify({output: {comments: /^!/i}}))
		.pipe(gulp.dest(''));
});

gulp.task('test', function() {
	gulp.src(paths.test)
		.pipe(qunit())
        .on('error', handleError);
});

gulp.task('watch', function() {
	gulp.watch(paths.source, ['lint', 'compress']);
});

gulp.task('default', ['lint', 'compress', 'test']);
