DEBUG = false;
var GAME_OPTS = {
	canvasId : 'game',
	canvasClass : 'game-clone layer-'
};
var ALPHA = 1;
if (DEBUG === true) {
	ALPHA = 0.5;
}
var COLORS = {
	laser : '#F00',
	grid : '#FF0',
	text : '#000',
	stroke : '#000',

	none : 'transparent',
	empty : rgba('#CCC', ALPHA),
	mirror : rgba('#FFF', ALPHA),
	blackhole : rgba('#444', ALPHA),
	glass : rgba('#F90', ALPHA),
	prism : rgba('#FF0', ALPHA),
	mirror_stuck : rgba('#0F0', ALPHA),
	blackhole_stuck : rgba('#0FF', ALPHA)
};
var LAYOUT = {
	padding : 10, // px padding
	line : 1
};