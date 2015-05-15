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
 * Generate files for a Flight service
 *
 * @api public
 */

Generator.prototype.createServiceFiles = function createServiceFiles() {
  this.name = this.name || 'my_component';
  this.template('service.js', 'app/js/service/' + this.name + '.js');
  this.template('spec.js', 'test/spec/service/' + this.name + '.spec.js', {
    'requirePath': 'service/' + this.name,
    'type': 'service'
  });
};
