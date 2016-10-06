'use strict';
/* global Phaser, localStorage */
var MuteButton = require('../components/mute_button.js');
var md5 = require('js-md5');
var _ = require('lodash');

function Intro() {}

Intro.prototype = {
	init: function() {
		var gameSave = _.extend({
			hash: null,
			progress: {}
		}, JSON.parse(localStorage.getItem('gameSave')) || {});
		
		if (gameSave.hash !== md5(gameSave.progress)) {
			gameSave.progress = {};
		}
		
		this.game.progress = _.merge({}, gameSave.progress);
	},
	preload: function() {

	},
	create: function() {
		this.sprite = this.game.add.sprite(this.game.world.centerX, 180, 'game-logo');
		this.sprite.anchor.setTo(0.5, 0.5);

		this.titleText = this.game.add.text(this.game.world.centerX, 360, 'Title', { font: '64px ' + this.game.theme.font, fill: '#ffffff', align: 'center'});
		this.titleText.anchor.setTo(0.5, 0.5);

		this.authorText = this.game.add.text(this.game.world.centerX, 420, 'Game by Xesenix', { font: '36px ' + this.game.theme.font, fill: '#ffffff', align: 'center'});
		this.authorText.anchor.setTo(0.5, 0.5);

		this.instructionsText = this.game.add.text(this.game.world.centerX, 460, 'Click anywhere to play "Title"', { font: '24px ' + this.game.theme.font, fill: '#dddddd', align: 'center'});
		this.instructionsText.anchor.setTo(0.5, 0.5);

		this.game.add.tween(this.sprite).from({ y: -120 }, 500, Phaser.Easing.Linear.NONE, true, 0, 0, false);
		this.game.add.tween(this.titleText).from({ y: this.game.world.height + 40}, 500, Phaser.Easing.Linear.NONE, true, 500, 0, false);
		this.game.add.tween(this.authorText).from({ alpha: 0 }, 500, Phaser.Easing.Linear.NONE, true, 1000, 0, false);
		this.game.add.tween(this.instructionsText).from({ alpha: 0 }, 500, Phaser.Easing.Linear.NONE, true, 1500, 0, false);
		
		if (typeof this.game.music === 'undefined') {
			this.game.music = this.game.add.audio('melody');

			this.game.music.loopFull();
			
			MuteButton.loadState(this.game);
		}
	},
	update: function() {
		if (this.game.input.activePointer.justPressed()) {
			this.game.state.start('service');
		}
	}
};

module.exports = Intro;