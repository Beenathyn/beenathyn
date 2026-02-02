/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

    PS.gridSize( 16, 16 );
    PS.gridColor(21,0,26);
    PS.border( PS.ALL, PS.ALL, 0 ); // no borders
    // Set initial bead colors
    PS.color( PS.ALL, PS.ALL, PS.COLOR_BLACK);

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText( "Color Piano" );
    PS.statusColor(PS.COLOR_WHITE);
    

	// Add any other initialization code you need here.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.

};

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/



PS.keyDown = function( key, shift, ctrl, options ) {
	// KEY ORDER: Q2W3ER5T6Y7UI9O0P
    //ascii is lowercase
    // Q == C, Q == Red

//-----Q-----
    if (key == 113) { //Q
        PS.audioPlay (PS.piano(40))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(140) - 1;
        let b = PS.random(20) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

//-----2-----
    if (key == 50) { //2
        PS.audioPlay (PS.piano(41))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)

    }

//-----W-----
    if (key == 119) { //W
        PS.audioPlay (PS.piano(42))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)

    }

//-----3-----
    if (key == 51) { //3
        PS.audioPlay (PS.piano(43))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

//-----E-----
    if (key == 101) { //E
        PS.audioPlay (PS.piano(44))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

//-----R-----
    if (key == 114) { //R
        PS.audioPlay (PS.piano(45))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }


//-----5-----
    if (key == 53) { //5
        PS.audioPlay (PS.piano(46))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

//-----T----    
    if (key == 116) { //T
        PS.audioPlay(PS.piano(47))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----6----
    if (key == 54) { //6
        PS.audioPlay (PS.piano(48))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

//-----Y----
    if (key == 121) { //Y
        PS.audioPlay (PS.piano(49))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----7----
    if (key == 55) { //7
        PS.audioPlay (PS.piano(50))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----U----
    if (key == 117) { //U
        PS.audioPlay (PS.piano(51))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----I----
    if (key == 105) { //I
        PS.audioPlay (PS.piano(52))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----9----
    if (key == 57) { //9
        PS.audioPlay (PS.piano(53))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----o----
    if (key == 111) { //o
        PS.audioPlay (PS.piano(54))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----0----
    if (key == 48) { //0
        PS.audioPlay (PS.piano(55))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }
//-----P----
    if (key == 112) { //P
        PS.audioPlay (PS.piano(56))
        let x = PS.random(16) - 1;
        let y = PS.random(16) - 1;
        let r = PS.random(256) - 1;
        let g = PS.random(256) - 1;
        let b = PS.random(256) - 1;

        PS.fade(x,y, 1);
        PS.color(x,y,r,g,b);
        PS.fade(x,y, 120);
        PS.color(x,y, PS.COLOR_BLACK)
    }

    //on key press, pick a random bead to be a random color, then slowly fade back out.









};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.

};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};
