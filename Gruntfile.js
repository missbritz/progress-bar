module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 
    uglify:{
        options: {
            manage: false,
            preserveComments: 'all' //preserve all comments on JS files
        },
        target:{
            files: {
                'js/main.min.js' : ['app/js/*.js']
            }
        }
    },

    jshint: {
        // define the files to lint
        files: ['Gruntfile.js','app/js/*.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          // more options here if you want to override JSHint defaults
          globals: {
            jQuery: true,
            console: true,
            module: true,
            browser: true,
            node: true,
            strict: false
          },
          reporterOutput: ""
        }
    },
   
 
    cssmin:{
        target:{
            files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
 
            }]
        }
    }
 
  });
 
 
    // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Validate JS
  grunt.loadNpmTasks('grunt-contrib-jshint');
 
   // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

 
   // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin', 'jshint']);
};