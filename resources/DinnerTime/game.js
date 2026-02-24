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
let moveTimer = "";
var counter = 0
var level = 0
PS.colorMultiple = function (allCoordinates, specificColor)
{
    for (let i = 0; i < allCoordinates.length; i++)
    {
        PS.color(allCoordinates[i][0], allCoordinates[i][1], specificColor);
    }
};


var xpos = 3; // x-pos of sprite
var ypos = 6; // y-pos of sprite
var G; // establish game namespace

( function () {
    var player;
    var fish;// sprite identifiers

    var floorPlane = 0;
    var spritePlane = 1;

    G = {
        width : 10, // width of grid
        height : 10, // height of grid

        // Draw floor and initialize sprite

        drawMap : function () {
            var x, y, val, eatfish;

            // Create random gray floor

            PS.gridPlane( floorPlane );
            for ( y = 0; y < G.height; y += 1 ) {
                for ( x = 0; x < G.width; x += 1 ) {
                    PS.color( x, y, 0xDF9DEB);
                    PS.glyph(8,8,0x1FA91) // chair
                    PS.glyphAlpha(8,8,140)
                    PS.glyph(8,6,0x1FA91) //chair
                    PS.glyphAlpha(8,6,140)
                    PS.glyph(8,7,0x1F7EB) //table
                    PS.glyphAlpha(8,7,140)
                    PS.glyph(7,0,0x1F6AA) // door
                    PS.glyphAlpha(7,0,140)
                    PS.glyph(5,0,0x1FA9F) //window
                    PS.glyphAlpha(5,0,140)
                    PS.glyph(0,4,0x1FA9F) //window
                    PS.glyphAlpha(0,4,140)
                    PS.glyph(1,8,0x1FAB4)//plant
                    PS.glyphAlpha(1,8,140)
                    PS.glyph(2,0, 0x1F550) //clock
                    PS.glyphAlpha(2,0,140)
                    PS.glyph(7,6, 0x1f9f6) //yarn
                    PS.glyphAlpha(7,6,140)
                    //U+260E // phone
                    //U+1F3AE // game controller
                   // PS.colorMultiple([ //[0,0] [0, 1], [0,2], [0, 3],[0, 4], [0,5], [0, 6],[0, 7], [0,8], [0, 9]
                                       //[1,0] [2, 0], [3,0], [4, 0],[5, 0], [6,0], [7, 0],[8, 0], [9,0],
                                      // [9,1], [9,2], [9, 3],[9, 4], [9,5], [9, 6],[9, 7], [9,8], [9, 9],
                                      // [1,9] [2, 9], [3,9], [4,9],[5, 9], [6,9], [7, 9],[8, 9]




                    if (level == 0){
                        PS.colorMultiple(
                            [ [3, 6], [3,5], [3, 4], [3, 3], [4, 3], [5, 3], [6, 3]],
                            0xF7E5FF);
                    }

                }
            }




            // Create 3x3 solid sprite, save its ID

            player = PS.spriteSolid(1,1 );

            // Set color to red

            PS.spriteSolidColor(player);
            PS.spriteSolidAlpha(player, 0)

            // Set plane to 1 (above floor)

            PS.spritePlane(player, spritePlane );

            // Position sprite at center of grid

            PS.spriteMove(player, xpos, ypos );
            PS.glyph (xpos,ypos, 0x1F408)

            fish = PS.spriteSolid(1,1);
            PS.spriteSolidAlpha(fish, 0)
            PS.spritePlane(fish, spritePlane );
            PS.spriteMove(fish, 6, 3 );
            PS.glyph (6,3, 0x1F41F);
            eatfish = function ( s1, p1, s2, p2, type ) {
                if (type == PS.SPRITE_OVERLAP){
                    levelLoader();
                    PS.audioPlay("slurp", {
                        path: "./",
                        volume: 1.00,
                        fileTypes: ["wav"]
                    } );
                }


            }
            PS.spriteCollide( player, eatfish );


        //PS.spriteCollide(fish, eatfish);
        },

        // move( x, y )
        // Move sprite relative to current position

        move : function ( x, y ) {
            PS.glyph (xpos,ypos, 0)
            xpos = xpos + x;
            ypos = ypos + y;
            PS.spriteMove(player, xpos, ypos );
            PS.glyph (xpos,ypos, 0x1F408)
            


        }
    };

    function levelLoader(){
        level = level+1;
        PS.statusText("level " + level);
        if (level == 1){
            //reset glyphs
            PS.glyph (PS.ALL, PS.ALL, 0);
            //re-establish background glyphs
            PS.glyph(8,8,0x1FA91) // chair
            PS.glyphAlpha(8,8,140)
            PS.glyph(8,6,0x1FA91) //chair
            PS.glyphAlpha(8,6,140)
            PS.glyph(8,7,0x1F7EB) //table
            PS.glyphAlpha(8,7,140)
            PS.glyph(7,0,0x1F6AA) // door
            PS.glyphAlpha(7,0,140)
            PS.glyph(5,0,0x1FA9F) //window
            PS.glyphAlpha(5,0,140)
            PS.glyph(0,4,0x1FA9F) //window
            PS.glyphAlpha(0,4,140)
            PS.glyph(1,8,0x1FAB4)//plant
            PS.glyphAlpha(1,8,140)
            PS.glyph(2,0, 0x1F550) //clock
            PS.glyphAlpha(2,0,140)
            PS.glyph(7,6, 0x1f9f6) //yarn
            PS.glyphAlpha(7,6,140)
            //reset colors
            PS.color(PS.ALL, PS.ALL, 0xDF9DEB)
            PS.colorMultiple( //assign floor tiles
                [ [6, 8], [6,7], [3,6], [4,6], [6,6],
                    [1,5], [2,5], [3,5], [4,5], [5,5], [6,5],
                    [2,4], [3,4], [5,4], [6,4], [7,4],
                    [3,3], [4,3], [5,3], [6,3], [7,3], [3,2],
                    [4,2], [5,2], [6,2], [7,2]],
                0xF7E5FF);
            //set player spawn
            xpos = 6
            ypos = 8
            PS.spriteMove(player, xpos, ypos);
            PS.glyph (xpos,ypos, 0x1F408)
            //set fish spawn
            PS.spriteMove(fish, 1, 5 );
            PS.glyph (1,5, 0x1F41F);
        }
        if(level == 2) {
            //reset glyphs
            PS.glyph (PS.ALL, PS.ALL, 0);
            //re-establish background glyphs
            PS.glyph(8,8,0x1FA91) // chair
            PS.glyphAlpha(8,8,140)
            PS.glyph(8,6,0x1FA91) //chair
            PS.glyphAlpha(8,6,140)
            PS.glyph(8,7,0x1F7EB) //table
            PS.glyphAlpha(8,7,140)
            PS.glyph(7,0,0x1F6AA) // door
            PS.glyphAlpha(7,0,140)
            PS.glyph(5,0,0x1FA9F) //window
            PS.glyphAlpha(5,0,140)
            PS.glyph(0,4,0x1FA9F) //window
            PS.glyphAlpha(0,4,140)
            PS.glyph(1,8,0x1FAB4)//plant
            PS.glyphAlpha(1,8,140)
            PS.glyph(2,0, 0x1F550) //clock
            PS.glyphAlpha(2,0,140)
            PS.glyph(7,6, 0x1f9f6) //yarn
            PS.glyphAlpha(7,6,140)
            //reset colors
            PS.color(PS.ALL, PS.ALL, 0xDF9DEB)
            PS.colorMultiple( //assign floor tiles
                [ [2,2], [3,2], [4,2], [5,2], [6,2],[7,2],
                  [2,3], [3,3], [4,3], [5,3], [7,3],
                  [5,4], [7,4],
                  [1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5],
                  [2,6], [3,6], [4,6], [5,6], [6,6],
                  [2,7], [3,7], [4,7], [6,7]],
                0xF7E5FF);
            //set player spawn
            xpos = 1
            ypos = 5
            PS.spriteMove(player, xpos, ypos);
            PS.glyph (xpos,ypos, 0x1F408)
            //set fish spawn
            PS.spriteMove(fish, 6, 7 );
            PS.glyph (6,7, 0x1F41F);
        }
        if (level == 3){
            PS.statusText("You win!");
            PS.glyph (PS.ALL, PS.ALL, 0);
            PS.color(PS.ALL, PS.ALL, 0xDF9DEB)
            PS.glyph (1,4, 0x0059)
            PS.glyph (2,4, 0x006F)
            PS.glyph (3,4, 0x0075)

            PS.glyph (5,4, 0x0057)
            PS.glyph (6,4, 0x0069)
            PS.glyph (7,4, 0x006E)
            PS.glyph (8,4, 0x0021)
            xpos = 0
            ypos = 0
            PS.spriteMove(player, xpos, ypos);
            PS.glyph (xpos,ypos, 0x1F965)
            PS.glyphAlpha (xpos,ypos, 0) //<- load bearing coconut (otherwise the cat doesnt go away. idk.)
        }

    }

}() );

PS.init = function( system, options ) {
    PS.gridSize( G.width, G.height ); // init grid
    PS.border( PS.ALL, PS.ALL, 0 ); // no borders
    G.drawMap(); // draws walls
    PS.audioLoad( "fx_click" ); // preload sound
    PS.statusText( "Level 1" );
    PS.audioLoad("purr", {
        path: "./",
        autoplay: false,
        fileTypes: ["wav"]
    } );
    PS.audioLoad("mrrp", {
        path: "./",
        autoplay: false,
        fileTypes: ["mp3"]
    } );
    PS.audioLoad("slurp", {
        path: "./",
        autoplay: false,
        fileTypes: ["wav"]
    } );

};



PS.keyDown = function( key, shift, ctrl, options ) {

    switch ( key ) {
        case PS.KEY_ARROW_UP:
        case 119: // lower-case w
        case 87: // upper-case W
        {
            PS.audioPlay("purr", {
                path: "./",
                volume: 0.3,
                fileTypes: ["wav"]
            } );
            while (xpos>=0 && xpos<9 && ypos-1>=0 && ypos-1<9 && PS.color(xpos,ypos-1) == 0xF7E5FF){
                //while position is within the size of the grid AND the color of the grid is the floor color (not a wall)
                G.move(0, -1)
            }

            break;
        }
        case PS.KEY_ARROW_DOWN:
        case 115: // lower-case s
        case 83: // upper-case S
        {
            PS.audioPlay("purr", {
                path: "./",
                volume: 0.3,
                fileTypes: ["wav"]
            } );
            while (xpos>=0 && xpos<9 && ypos+1>=0 && ypos+1<9 && PS.color(xpos,ypos+1) == 0xF7E5FF){
                //while position is within the size of the grid AND the color of the grid is the floor color (not a wall)
                G.move(0, +1)

            }
            break;
        }
        case PS.KEY_ARROW_LEFT:
        case 97: // lower-case a
        case 65: // upper-case A
        {
            PS.audioPlay("purr", {
                path: "./",
                volume: 0.3,
                fileTypes: ["wav"]
            } );
            while (xpos-1>=0 && xpos-1<9 && ypos>=0 && ypos<9 && PS.color(xpos-1,ypos) == 0xF7E5FF){
                //while position is within the size of the grid AND the color of the grid is the floor color (not a wall)
                G.move(-1, 0)

            }
            break;
        }
        case PS.KEY_ARROW_RIGHT:
        case 100: // lower-case d
        case 68: // upper-case D
        {
            PS.audioPlay("purr", {
                path: "./",
                volume: 0.3,
                fileTypes: ["wav"]
            } );
            while (xpos+1>=0 && xpos+1<9 && ypos>=0 && ypos<9 && PS.color(xpos+1,ypos) == 0xF7E5FF){
                //while position is within the size of the grid AND the color of the grid is the floor color (not a wall)
                G.move(+1, 0)

            }
            break;
        }

        //check if touching fish
            //if touching fish, level ++
            //if (level == 1) {}

    }
};

