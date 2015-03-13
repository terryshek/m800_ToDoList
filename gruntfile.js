module.exports = function(grunt){
grunt.initConfig({
    nodemon: {
        
        dev: {
            script: 'bin/www'
        }
    },
    open: {
        delayed: {
            path: 'http://localhost:8337',
            app: 'Google Chrome',
            options: {
                openOn: 'serverListening'
            }
        }
    }
});
    // load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-open');
    grunt.registerTask('default',['nodemon', 'open'])
}