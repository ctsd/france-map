module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		dirs: {
			srcPath: 'src'
		},

    concat: {
      js: {
        src: [
					'<%= dirs.srcPath %>/paths/*.js',
          '<%= dirs.srcPath %>/main.js'
        ],
        dest: 'france-map.js'
      },
    },

    uglify: {
      base: {
        files: {
          'france-map.min.js': [
						'<%= dirs.srcPath %>/paths/*.js',
	          '<%= dirs.srcPath %>/main.js'
          ]
        }
      },
      options: {
	      mangle: false
    	}
    },

		watch: {
			js: {
				files: '<%= dirs.srcPath %>/**/*.js',
				tasks: [ 'uglify', 'concat' ]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);

};
