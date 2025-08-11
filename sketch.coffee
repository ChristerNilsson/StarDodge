touching = false

echo = console.log

buttons = []

S = {x:0, y:0, level:0, d:50, stars:[]}
start = new Date

class Button 
	constructor : (@x,@y,@text,@click) -> @r = 0.05 * height
	inside : (mx,my) -> 
		dx = mx-@x
		dy = my-@y
		dx*dx + dy*dy < @r*@r

	draw : ->
		push()
		strokeWeight 1
		noFill()
		circle @x,@y,@r
		textSize 16
		fill 'black'
		noStroke()
		text @text,@x,@y
		pop()

startNewGame = (rand = false) ->
	start = new Date()
	if rand then S.stars = range(height*width/S.d/S.d).map((i) -> [width*random(), height*random()])
	Object.assign S,{level:S.level, x:0, y:height/2}

draw = ->
	bg 0.5

	fill 'red'
	sc()
	text S.level, width/2, height/2

	fill 'yellow'
	circle x,y,S.level for [x,y] in S.stars 

	rect width-3,0.4*height,2,0.2*height

	[S.x,S.y] = [S.x+1, S.y + if mouseIsPressed or keyIsDown 32 then 1 else -1]
	sc 0

	line S.x, S.y, S.x + 500, S.y + 500
	line S.x, S.y, S.x + 500, S.y - 500

	if S.x > width and 0.4*height < S.y < 0.6*height 
		S.level++
		localStorage.stardodge = JSON.stringify {level: S.level}
		echo 'saved',localStorage.stardodge
		start = new Date()
		return startNewGame true
	if S.y < 0 or S.y > height or S.x > width 
		return startNewGame false
	for [x,y] in S.stars
		if S.level > dist S.x,S.y, x,y then return startNewGame false

	for button in buttons
		button.draw()

setup = ->
	createCanvas windowWidth,windowHeight
	value = localStorage.stardodge
	if value == undefined or value == null or value == 'null' then value = {level: 1} 
	else value = JSON.parse value
	echo 'loaded',value
	S.level = value.level
	textAlign CENTER,CENTER
	textSize height
	startNewGame true
	h = 0.1*height
	buttons.push new Button h,h,'Random', -> startNewGame true
	buttons.push new Button h,height-h,'Back', -> if S.level > 1
		S.level--
		startNewGame true

touchEnded = -> touching = false; false

touchStarted = -> 
	if touching then return
	touching = true
	
	for button in buttons
		if button.inside mouseX, mouseY 
			button.click()
			return
	false

mouseReleased = -> touching = false
