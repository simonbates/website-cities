module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            uio: ["static/js/lib/infusion"],
        },
        copy: {
            uio: {
                files: [
                    // Copy Infusion
                    {
                        expand: true,
                        cwd: "node_modules/infusion/",
                        src: "**",
                        dest: "static/js/lib/infusion/"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("buildUIO", "Build UIO for website-cities", ["clean:uio", "copy:uio"]);
};
