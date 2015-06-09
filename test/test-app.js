'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('node-kata:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.gitignore'
    ]);
  });

  it('creates an app folder which contains app and spec files', function () {
    assert.file([
      'app/app.js',
      'app/app.spec.js'
    ])
  });

  it('should create a gulpfile', function () {
    assert.file([
      'gulpfile.js'
    ]);
  });

  it('should create a helpers file that can be used to import test globals', function () {
    assert.file([
      'helpers.js'
    ]);
  })
});
