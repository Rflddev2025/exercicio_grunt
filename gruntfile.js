module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('packge.json'),

    less: {
        development: {
            files: {
                'dev/styles/main.css': 'src/styles/main.less'
            }
        },
        production: {
            options: {
                compress: true,
            },
            files: {
                'dist/styles/main.min.css': 'src/styles/main.less'
            }
        }
    },

    uglify: {
        build: {
            files: {
                'dist/scripts.min.js': 'src/scripts/mainjs'
            }
        }
    }
});

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production', 'uglyfy']);
};
