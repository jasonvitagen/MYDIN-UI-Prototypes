module.exports = function (grunt) {

	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		watch : {

			less : {
				files : ['public/less/*.less'],
				options : {
					livereload : true,
					spawn : false
				}
			}

		},

		less : {
			development : {
				files : {
					'public/stylesheets/main.css' : 'public/less/main.less'
				}
			}
		}


	});

	grunt.event.on('watch', function (action, filepath, target) {
		grunt.task.run('less:development');
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', [
		'watch:less'
	]);

}