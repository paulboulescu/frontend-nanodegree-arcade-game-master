# Classic Arcade Game Clone

## About
This is the 4th Project created under Udacity's Front-End Web Developer Nanodegree. The task was to re-create a _Classic Arcade Game_.

## First Run
* Clone the repository `$ git clone https://github.com/paulboulescu/frontend-nanodegree-arcade-game-master.git`
* Open `index.html` with a browser

## Description
The game consists of a canvas split into 3 areas: grass (_Start Area_), road (_Action Area_), and water (_Finish Area_). The road is split into 3 lanes, passed by _Enemies_ having different speeds. The purpose of the game is to guide the _Player_ character until it reaches the water. The User should be careful not to get hit by one of the _Enemies_, since this resets the game and moves the _Player_ at initial starting position, in the grass area.

## Features
* **Moving** - by pressing keyboard keys, the User can do the follow:
  * :arrow_left: - Moves the _Player_ 1 cell left
  * :arrow_up: - Moves the _Player_ 1 cell up
  * :arrow_right: - Moves the _Player_ 1 cell right
  * :arrow_down: - Moves the _Player_ 1 cell down
* **Start Area** - in which _Enemies_ can't enter
* **Action Area** - the area the User has to pass in order to complete the game; while within this area, the _Player_ is vulnerable to _Enemies_
* **Finish Area** - the User wins the game when the _Player_ enters this area

## Internal Dependencies
* _index.html_ - stores the HTML
* _css/style.css_ - stores the CSS
* _js/app.js_ - stores the JavaScript code
* _js/engine.js_ - provides the game loop functionality by repeatedly drawing the visible canvas and its components
* _js/resources.js_ - an image loading utility
* _images/*_ - image resources for different game elements
* _.gitattributes_ - sets the default behavior, in case people don't have `core.autocrlf set. \# https://help.github.com/articles/dealing-with-line-endings/ * text=auto`
* _CONTRIBUTING.md_ - guideline for contributing to this project
* _README.md_ - this current document

## External Dependencies
* There are no external dependencies.

## Known Issues
The game does not work on mobile and tablets.

## Use Example
The project can be used as it is, for entertainment purposes, or to develop other similar projects, based on its current functionalities.

## License
**MIT License**
Copyright (c) 2018 Paul Boulescu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
For details about contributing, please check out [CONTRIBUTING.md](CONTRIBUTING.md).