'use strict';

function stepsLabel(value) {
	return value + "%20points";
}
		
module.exports = {
	gameId: '##replace##',
	privateKey: '##replace##',
	scoresTables: {
		'TotalPoints': {
			tableId: '##replace##',
			label: stepsLabel
		}
	},
	checkTrophies: function(api, data) {
		console.log(api, data);
	}
};