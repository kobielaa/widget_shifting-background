module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'nasted'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['sass']);
};