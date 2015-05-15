/**
 * Module dependencies.
 */

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../../templates/'));
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Generate files for a Flight template
 *
 * @api public
 */

Generator.prototype.createTemplateFiles = function createTemplateFiles() {
  this.name = this.name || 'my_page';
  this.template('template.jsx', 'app/js/template/' + this.name + '.jsx');
  this.template('spec.js', 'test/spec/template/' + this.name + '.spec.js', {
    'requirePath': 'template/' + this.name,
    'type': 'template'
  });
};
