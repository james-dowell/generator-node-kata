'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the outstanding ' + chalk.red('NodeKata') + ' generator!'
            ));

        var prompts = [];

        this.prompt(prompts, function (props) {
            this.props = props;
            done();
        }.bind(this));
    },

    scaffoldFolders: function(done){
        mkdirp('app');
    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );

            this.fs.copy(
                this.templatePath('_.gitignore'),
                this.destinationPath('.gitignore')
            );

            this.fs.copy(
                this.templatePath('_gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );

            this.fs.copy(
                this.templatePath('_helpers.js'),
                this.destinationPath('helpers.js')
            );

            this.fs.copy(
                this.templatePath('app/_app.js'),
                this.destinationPath('app/app.js')
            );

            this.fs.copy(
                this.templatePath('app/_app.spec.js'),
                this.destinationPath('app/app.spec.js')
            );
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );

            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
        }
    },

    install: function () {
        this.npmInstall();
    }
});
