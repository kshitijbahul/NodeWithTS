'use strict;'
import { gulp  } from "gulp";
import { concat } from "gulp-concat";
import { del } from "del";
import { clean } from "gulp-clean";
import { connect } from "gulp-connect";
import { path } from "path";
import { nodemon } from "nodemon";
import { browserify } from "browserify";
import { babelify } from "babelify";
import { vinylSourceStream } from "vinyl-source-stream";
import { vinylBuffer } from "vinyl-buffer";
import { gulpSequence } from "gulp-sequence"

gulp.task("clean",()=>{
    del(['./build'],{force:true})
});

gulp.task("runExpress",(cb)=>{
    const options={
        watch: ['./build/'],
        script: 'app.js',
        
    }
    return nodemon(options).once('start',cb);
});


gulp.task("local",[]);
gulp.task("default",[runExpress]);