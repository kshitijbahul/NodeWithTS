'use strict;'
const gulp  = require("gulp");
const concat = require("gulp-concat");
const del = require("del");
const clean = require("gulp-clean");
const connect = require("gulp-connect");
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const path = require("path");
const nodemon = require("nodemon");
const browserify = require("browserify");
//const babelify = require("babelify");
const vinylSourceStream = require("vinyl-source-stream");
const vinylBuffer = require("vinyl-buffer");
const gulpSequence = require("gulp-sequence");

gulp.task('clean',()=>{
    del(['./build'],{force:true})
});

gulp.task('runExpress',(cb)=>{
    const options={
        watch: ['./build/'],
        script: './build/app.ts',
        
    }
    return nodemon(options).once('start',cb);
});

gulp.task('buildBackend',()=> {
    return gulp
      .src('src/**/*.ts')
      .pipe(typescript(tscConfig.compilerOptions))
      .on('error', function(){process.exit(1);})
      .pipe(gulp.dest('build/'));
});


gulp.task('local',[]);
gulp.task('default',['buildBackend','runExpress']);