var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var fileinclude = require('gulp-file-include');
gulp.task('start', function() {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});


gulp.task('fileinclude', function() {
    gulp.src(['./app/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./public'));

})



gulp.task('default', ['start','fileinclude'], function() {
    gulp.watch('./app/**/*.html', ['fileinclude']);
});
