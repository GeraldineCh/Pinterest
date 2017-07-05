//Leerá gulp para reconocer las tareas y ponerlas en el pipe
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

var config = {
	source:'./src/',
	dist: './public/'
};

var paths = {
	assets: "assets/",
	html: "**/*.html",
	sass: "scss/**/*.scss",
	mainSass: "scss/main.scss",
	js: "js",
	vendor:"js/vendor/*",
    components:"js/components/*",
	mainJS: "js/app.js",
	img: "img/*.png",
	bootstrapJS: "js/vendor/bootstrap/*"
};

var sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: paths.assets + paths.sass,
	js: config.source + paths.js,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJS: config.source + paths.assets + paths.mainJS,
	img: config.source + paths.assets + paths.img,
	vendor: config.source + paths.assets + paths.vendor,
    components: config.source + paths.assets + paths.components,
	bootstrap: config.source + paths.assets + paths.bootstrapJS
};


gulp.task('vendor',function () {
	gulp.src(sources.vendor).pipe(gulp.dest(config.dist + paths.assets + "js/vendor"))

});

gulp.task('components',function () {
	gulp.src(sources.components).pipe(gulp.dest(config.dist + paths.assets + "js/components"))

});

gulp.task('bootstrapJS',function () {
	gulp.src(sources.bootstrap).pipe(gulp.dest(config.dist + paths.assets + "js/vendor/bootstrap"))

});

gulp.task('img',function () {
	gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"))

});



gulp.task('html', function () {
	gulp.src(sources.html).pipe(gulp.dest(config.dist))
});

gulp.task("sass", function () {
	gulp.src(sources.rootSass)
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function () {
	gulp.src(sources.rootJS)
		//.pipe(concat(sources.rootJS)
		.pipe(browserify())
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest(config.dist + paths.assets + "js"));
});



gulp.task("sass-watch", ["sass"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("js-watch", ["js"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("html-watch", ["html"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("serve", function () {
	browserSync.init({
		server: {
			baseDir: config.dist
		}
	});
	gulp.watch(sources.html, ["html-watch"]);
	gulp.watch(sources.sass, ["sass-watch"]);
	gulp.watch(sources.js, ["js-watch"]);
});




gulp.task('run', ['serve', 'html-watch', 'js-watch', 'sass-watch', 'vendor', 'components', 'img', 'vendor','bootstrapJS']);