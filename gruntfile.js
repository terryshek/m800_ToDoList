module.exports = function(grunt){
grunt.initConfig({
    nodemon: {
        dev: {
            script: 'bin/www'
        }
    }
});
    // load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default',['nodemon'])
}