touching = false
touchStarted = -> touching = true; false
touchEnded = -> touching = false; false
mouseReleased = -> touching = false

S = {x:0, y:0, level:0, d:50, stars:[]}

startNewGame = (dlevel, rand = false) ->
	if rand then S.stars = range(height*width/S.d/S.d).map((i) -> [width*random(), height*random()])
	Object.assign S,{level:S.level+dlevel, x:0, y:height/2}
	
draw = ->
	bg 0.5

	fill 'red'
	sc()
	text S.level, width/2, height/2

	fill 'yellow'
	circle x,y,S.level for [x,y] in S.stars 

	rect width-3,0.4*height,2,0.2*height

	if mouseIsPressed and 0.1*height > dist mouseX,mouseY, 0,0 then startNewGame 0,true
	
	[S.x,S.y] = [S.x+1, S.y + if mouseIsPressed or keyIsDown 32 then 1 else -1]
	sc 0

	line S.x, S.y, S.x + 500, S.y + 500
	line S.x, S.y, S.x + 500, S.y - 500

	if S.x > width and 0.4*height < S.y < 0.6*height then return startNewGame 1, true
	if S.y < 0 or S.y > height or S.x > width then return startNewGame 0, false
	for [x,y] in S.stars
		if S.level > dist S.x,S.y, x,y then return startNewGame 0, false

setup = ->
	createCanvas windowWidth,windowHeight
	textAlign CENTER,CENTER
	textSize height
	startNewGame 1, true
