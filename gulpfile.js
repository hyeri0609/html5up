var gulp = require('gulp'),
    hyeriserver = require('gulp-hyeriserver'),
    morgan = require('morgan');
    
const BLACK = '\x1b[30m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW ='\x1b[33m';
const BLUE = '\x1b[34m';
const MAGENTA = '\x1b[35m';
const CYAN = '\x1b[36m';
const WHITE = '\x1b[37m';
const CLEAR_COLOR = '\x1b[0m';

var logger = morgan(CYAN + ':method :status' + CLEAR_COLOR + ' (:response-time ms) [:date[clf]] :url (size: :res[content-length])');
gulp.task('hs', function() {
  gulp.src('.')
    .pipe(hyeriserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: true,
      open: false,
      middleware: logger
    }));
});
