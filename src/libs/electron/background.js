//by @nodws
/*
Using trianglify.js and d3.js library
Also not possible without Tim Berners Lee creator of the www, Brendan Eich creator of javascript, Michael S. Dell founder of Dell Computer who manufactured my PC, my Mom and Dad who manufactured me and The BigBang creator of the universe.
Hope these credits are enough  to satisfy my impostor syndrome 
*/
//Click to change bg
var rn = Math.floor(Math.random() * 150 + 60)
var rs = Math.floor(Math.random() * 11 + 4)
var t = new Trianglify({
  x_gradient: Trianglify.colorbrewer.Spectral[rs],
  noiseIntensity: 0,
  cellsize: rn
})
var pattern = t.generate(window.innerWidth, window.innerWidth + 200)
document.body.setAttribute('style', 'background-image: ' + pattern.dataUrl)
