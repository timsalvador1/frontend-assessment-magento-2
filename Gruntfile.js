module.exports = function(grunt) {
	grunt.initConfig({
		less: {
            // Configuration for the 'less' Task
			development: {
				options: {
					paths: ['assets/less'] // Specifying path for the Less files
				},
				files: {
					'assets/css/customStyles.css': 'assets/less/_customStyles.less'
				}
			}
		},
		watch: {
            // Configuration for the 'watch' Task
			styles: {
				files: ['assets/less/**/*.less'],
				tasks: ['less']
			}
		}
	});

    // Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Define the default Grunt task
	grunt.registerTask('default', ['less', 'watch']);
};
