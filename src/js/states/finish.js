'use strict';

function FinishState() {}

FinishState.prototype = {
	preload: function () {
	
	},
	create: function () {
		var style = { font: '64px ' + this.game.theme.font, fill: '#ffffff', align: 'center'};
		this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
		this.titleText.anchor.setTo(0.5, 0.5);

		this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px ' + this.game.theme.font, fill: '#ffffff', align: 'center'});
		this.congratsText.anchor.setTo(0.5, 0.5);

		this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px ' + this.game.theme.font, fill: '#ffffff', align: 'center'});
		this.instructionText.anchor.setTo(0.5, 0.5);
	},
	update: function () {
		if(this.game.input.activePointer.justPressed()) {
			this.game.state.start('play');
		}
	}
};
module.exports = FinishState;
