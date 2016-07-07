// TODO: smooth ring rotation

var fc = require('fc')
var center = require('ctx-translate-center')

var gameMode = require('./mode-game')

var mode = gameMode

// which ring should be at the bottom
var segments = 2
var innerRadius = 200


window.AudioContext = window.AudioContext||window.webkitAudioContext;
var audioCtx = new AudioContext()



gameMode.init(segments, innerRadius)

gameMode.audioOn(audioCtx)


var ctx = fc(function() {
  ctx.clear()
  center(ctx)
  mode.tick && mode.tick()
  mode.render(ctx)
}, true)


window.addEventListener('keydown', function(e) {
  mode.keyboard && mode.keyboard(e)
})