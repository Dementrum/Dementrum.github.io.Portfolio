module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    // $.gulp.task('img:build', () => {
    //     return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
	// 		.pipe($.gp.imagemin({
	// 			optimizationLevel: 5, 
	// 			progressive: true, 
	// 			svgoPlugins: [{removeViewBox: false}], 
	// 			interlaced: true
	// 		}))
    //         .pipe($.gulp.dest('./build/static/img/'));
    // });
    
    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('ROs7wvgvqNPWKO1oKB70pi2cZByPlN6t'))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });
};
;
