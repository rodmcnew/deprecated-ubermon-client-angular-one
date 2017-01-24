module.exports = function (grunt) {

    //@TODO run loop-back model sync during grunt build

    grunt.initConfig(
        {
            concat: {
                generated: {
                    files: [
                        {
                            dest: 'dist/all.js',
                            src: [


                                'bower_components/angular/angular.min.js',

                                'bower_components_not_installed_with_bower/Chart.js-skip-xlabels/Chart.min.js',
                                'bower_components_not_installed_with_bower/angular-chart.js/angular-chart.js',
                                'bower_components/angular-recaptcha/release/angular-recaptcha.min.js',
                                'bower_components_not_installed_with_bower/angular/angular-resource.js',

                                'app_components/loopback/loopback-services.js',

                                'app_components/ubermon/module.js',
                                'app_components/ubermon/config.js',
                                'app_components/ubermon/misc-todo-split-me/script.js',
                                'app_components/ubermon/contact-edit/contact-edit.js',
                                'app_components/ubermon/monitor-edit/monitor-edit.js',
                                'app_components/ubermon/reset-password/reset-password.js',
                                'app_components/ubermon/dashboard/dashboard.js',
                                'app_components/ubermon/home/home.js',
                                'app_components/ubermon/contact-us-form/contact-us-form.js',
                                'app_components/ubermon/reset-password/reset-password.js',
                                'app_components/ubermon/monitor-details-display/monitor-details-display.js',
                                'app_components/ubermon/edit-monitor-dialog/edit-monitor-dialog.js',
                                'app_components/ubermon/create-monitor-dialog/create-monitor-dialog.js',

                                'app_components/google-analytics/google-analytics.js'
                            ]
                        }
                    ]
                }
            },
            uglify: {
                generated: {
                    options: {
                        mangle: false,
                        sourceMap: true
                    },
                    files: [
                        {
                            dest: 'dist/all.min.js',
                            src: ['dist/all.js']
                        }
                    ]
                }
            },
            watch: {
                src: {
                    files: [
                        'Gruntfile.js',
                        'app_components/*.js',
                        'app_components/*.html',
                        'app_components/**/*.js',
                        'app_components/**/*.html'
                    ],
                    tasks: ['uglify', 'concat']
                }
            },
            forever: {//@todo remove doesn't work (and uninstall package)
                server: {
                    options: {
                        index: 'server/server.js',
                        logDir: 'logs'
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-forever');//@todo remove doesn't work
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify']);
};
