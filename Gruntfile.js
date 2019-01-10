module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            uio: ["static/js/lib/infusion"],
        },
        copy: {
            uio: {
                files: [
                    // Copy Infusion source files needed by UIO
                    {
                        expand: true,
                        cwd: "node_modules/infusion/",
                        src: [
                            "src/components/tableOfContents/**",
                            "src/framework/core/**",
                            "src/framework/preferences/**",
                            "src/lib/normalize/**",
                            "src/lib/opensans/**"
                        ],
                        dest: "static/js/lib/infusion/"
                    },
                    // Copy the UIO Infusion build
                    {
                        expand: true,
                        cwd: "node_modules/infusion/dist/",
                        src: "infusion-uio.min.js",
                        dest: "static/js/lib/infusion/"
                    },
                    // Overlay the generated assets
                    {
                        expand: true,
                        cwd: "node_modules/infusion/dist/assets/",
                        src: "src/framework/preferences/**",
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
