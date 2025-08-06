S = {x:0, y:0, level:0, d:50, stars:[]}
startNewGame = (dlevel) ->
	if dlevel==1 then S.stars = range(height*width/S.d/S.d).map((i) -> [width*random(), height*random()])
	Object.assign S,{level:S.level+dlevel, x:0, y:height/2}
	bg 0.5
	fc 1,1,0
	sc()
	circle x,y,S.level for [x,y] in S.stars
	rect width-3,0.4*height,2,0.2*height
	textAlign CENTER,CENTER
	textSize height
	fc 1,1,1,0.5
	sc()
	text S.level,width/2,height/2
draw = ->
	[S.x,S.y] = [S.x+1, S.y + if mouseIsPressed or keyIsDown 32 then 1 else -1]
	sc 0
	sw 1.5
	point S.x,S.y
	if S.x > width and 0.4*height < S.y < 0.6*height then return startNewGame 1
	if S.y<0 or S.y>height or S.x>width then return startNewGame 0
	for [x,y] in S.stars
		if S.level > dist S.x,S.y,x,y then return startNewGame 0
setup = ->
	createCanvas windowWidth,windowHeight
	startNewGame 1
