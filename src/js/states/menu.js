'use strict';
/* global Phaser */
var _ = require('lodash');
var LabelButton = require('../components/label_button.js');
var MuteButton = require('../components/mute_button.js');

function Menu() {}

Menu.prototype = {
	init: function() {
		this.menuItemIndex = 0;
	},
	preload: function() {

	},
	create: function() {
		this.createInterface();
	},
	createInterface: function() {
		this.createBackground();
		this.createMenu();
		
		this.muteButton = new MuteButton(this.game, 24, this.world.height - 24, 'mute');
		this.muteButton.anchor.setTo(0.5, 0.5);
		this.muteButton.width = 32;
		this.muteButton.height = 32;
		
		this.world.add(this.muteButton);
	},
	createBackground: function() {
		this.sprite = this.game.add.sprite(this.game.world.centerX, 220, 'game-logo');
		this.sprite.anchor.setTo(0.5, 0.5);

		this.sprite.angle = -20;
		this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
	},
	createMenu: function() {
		this.startButton = this.createMenuButton(
			'Start', _.bind(function() { this.game.state.start('play', true, false);}, this)
		);
	},
	createMenuButton: function(label, callback) {
		var button = new LabelButton(this.game, this.world.centerX, 420 + 60 * (this.menuItemIndex++), 'btn', label, callback, this, this);
		button.anchor.setTo(0.5, 0);
		button.width = 220;	
		button.height = 50;
		button.label.setStyle({ font: '24px ' + this.game.theme.font, fill: '#000000', align: 'center' }, true);
		
		this.game.world.add(button);
		
		return button;
	}
};

module.exports = Menu;
