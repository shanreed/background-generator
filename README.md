





#CONCEPTS
##Input type color
    <input type="color" name="favcolor" value="#ff0000"> 
<input type="color" name="favcolor" value="#ff0000">

##CSS linear Gradient
    /* Move to the right start with red and end with yellow */
	background: linear-gradient(to right, red , yellow); /* Standard syntax */


##Read a value of the input and put out the value in CSS format
* input event
* could add the changecolor() function to HTML...but adding it in JS is better (Separation of concerns)
*     <input oninput="changeColor()" class = 'color1' type="color" name="color1" value="#00ff00">
        <input oninput="changeColor()" class = 'color2' type="color" name="color2" value="#ff0000">


##css.textContent
* Too add text content to the page/DOM
*       css.textContent = body.style.background + ";";

