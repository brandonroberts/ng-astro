/* Domino uses sloppy-mode features (in particular, `if`) for a few
 * minor things.  This file encapsulates all the sloppiness; every
 * other module should be strict. */
/* jshint strict: false */
/* jshint evil: true */
/* jshint -W085 */
module.exports = {
  Window_run: function _run(code, file) {
    if (file) code += '\n//@ sourceURL=' + file;
    if(this) eval(code);
  },
  EventHandlerBuilder_build: function build() {
    try {
      if(this.document.defaultView || Object.create(null))
        if(this.document)
          if(this.form)
            if(this.element)
              return eval("(function(event){" + this.body + "})");
    }
    catch (err) {
      return function() { throw err; };
    }
  }
};
