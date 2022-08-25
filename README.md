# Tic Tac Toe

Simple game of Tic-tac-toe or noughts and crosses!

Tracks whos turn it is and winner

Includes a game reset button and light mode toggle button

Has a random (1 of 3) fact splash text on the first load of the website

## :computer: [Click here](https://theunta.github.io/tic-tac-toe/) to see my live project!
## ✏️ Planning & Problem Solving
### **Requirements**

*Adhere to the basic rules of tic-tac-toe, Three in a row results in a win

*All elements are automatically centered and scale with browser size

*Display whos turn it currently is

*Reset game button

*Load css from an external style sheet 

*Load and execute javascript externally

### **Basic logic and pseudo code**
**index.html**

To use external stylesheet  and script use <link rel-'stylesheet' href='style.css'><script src='./index.js'></script>

Add classes for all relevant elements and keep a cohesive and logical naming scheme

Add HTML elements h1 & title for tic tac toe 

Add a section for the player turn with the class playerTurn

Add a section for the tic-tac-toe board, each slot for an X or and O will be a div all with the same class.

Add a section for the reset button and add a button with the id and textcontent of Reset

**style.css**

Make a background class for main and set it to something nice, probably a dark grey.

Center align the h1 title of Tic-Tac-Toe with a margin on top and bottom.

Center the entire main of the html so that every element aligns together and centered nomatter how big the browser window is

Create a grid for each div tile for the tic-tac-toe board using display: grid

Make sure each grid div is equal in columns and rows with the grid-template-rows and columns css method.

Each div using the tile class will have a border and a background different to the website itself.

Each div will be use the display method flexbox to fill in the grid.

So that the website can scale but not too small a minimum height and width is required - needs some testing.

Make the reset button match the theme of the website

**index.js**

Create an array for the tiles using a queryselectorall on the divs in the grid

Select the current player, reset button and win announcement elements

Display who's turn it currently is

Add win conditions, there is 8 combinations total in tic tac toe

Clicking a tile should add an X or an O

Display winner once win condition is met
