module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({

		/*
		 * 初期設定
		 * */
		dirs	: {
			deploy	:	'deploy',
			release	:	'_release',
			src		:	'src'
		},

		pkg		:	grunt.file.readJSON('package.json'),

		copy	:	{
			toRelease : {
				files : [{
					expand : true,
					cwd : '<%= dirs.deploy %>',
					src : ['**'],
					dest : '<%= dirs.release %>'
				}],
				dot : true
			}
		},

		clean : {
			allRelease : ['<%= dirs.release %>/**']
		},

		watch : {
			deploy : {
				files : ['<%= dirs.src %>/**'],
				tasks : ['deploy']
			},

			release : {
				files : ['<%= dirs.src %>/**'],
				tasks : ['release']
			},

			// カスタム設定
			ftp : {
				files	:	['<%= dirs.deploy %>/**'],
				tasks	:	['ftp-deploy:changed'],
				options	:	{nospawn: true}
			},

			livereload : {
				options: {
					livereload: true
				},
				files	:	['<%= dirs.deploy %>/**']
			}
		},

		/*
		 * カスタム設定
		 * */
		compass : {
			options: {
				cssDir: '<%= dirs.deploy %>/css',
				imagesPath:'<%= dirs.deploy %>/images'
			},

			deploy : {
				options: {
					sassDir: 'src/scss',
					noLineComments: true,
					environment: 'development'
				}
			},

			release : {
				options: {
					sassDir: 'src/scss',
					noLineComments: true,
					environment: 'production',
					outputStyle:'compact'
				}
			}
		},

		connect: {
			deploy: {
				options: {
					port:9001,
					hostname: "*"
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('commonBefore', 	[/* ここに共通タスクネーム記述 */]);
	grunt.registerTask('deploy', 		['commonBefore', 'compass:deploy']);
	grunt.registerTask('release', 		['commonBefore', 'clean:allRelease', 'copy:toRelease', 'compass:release']);
	grunt.registerTask('default', 		['release']);

	grunt.registerTask('livereload', 		['connect','watch:livereload']);
};
