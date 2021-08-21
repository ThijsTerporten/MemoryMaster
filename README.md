# Project summary:

This is a simple and fun memory game created for my milestone 2 project for the code institute full stack development program.

# UX

## Owners goals:

The goal off the project is to provide a fun experience while playing the game.

## User Stories: 

- As a user I would like to have the rules off the game explained to me in a simple to understand way.
- As a user I would like to have a challenge while playing the game.
- As a user I would like to feel rewarded for completing the game.
- As a user I would like to keep track of my performence throughout the game. 
- As a user I would like a nice clean interface while playing the game.
- As a user I would like to be able to reset my progress and try again.
- As a user I would like to be able to easily navigate between game modes.

## Structure: 

The web application is responsive across all devices.
> Minor bugs and visual glitches on certain devices, browser compatabillity has been added to accompany most issues.
The web application is layed out in the following way:

1. The landing page has the name of the game in a large font size.
2. Underneath the title is a carousel which explains the rules of the game.
> Replaced with a list because of time restrictions.
3. Underneath the carousel is a large button which brings you to the game mode selection screen.

On the game selection screen there will be three cards shown which function as buttons.

1. Game mode = EASY
2. Game mode = NORMAL   
3. Game mode = HARD
4. At the bottom off the screen is a back button to bring the user back to the game select page.

Game Type page structure:

1. Each GameType has the same layout the only difference being
 - Easy = 10 cards, 5 matches.
 - Normal = 20 cards, 10 matches.
 - Hard = 40 cards, 20 matches. 
2. On the top of the page a timer will start running to keep track of the time elapsed. 
> In a later version this will be stopped when the game ends and shows time remaining in the win screen.
3. A counter will be next to that which counts the ammount of moves made by the user.
4. In the top right will be two buttons. 
 - One to reset the current game.
 - One to bring the user back to the gameType selection page.
5. Once a user has matched all cards a modal will popup and congratulate the user.

## Wireframes: 

Wireframes for the layout of the project can be found here: 

## Surface: 

### Fonts: 

The font used is Roboto with a fallback off sans-serif.

### Colors:

To have a clean layout I have decided to use black and white as the dominant colors. This matches very well with the glassmorphism effect used for the cards.
Black is the main background-color and text color is white. This has later been changed to a scenic background that matches with the memory game cards which has you find matching pokemon.
A background linear gradient has been used to darken the images a little bit. 


### Images:

All images are taken from: 

- Pokemon Company website (Main background images)
- Unsplash: the pokeball cover for the cards.  
- Game winning modal image has been taken from bulbapedia.


# Features: 

## Current Features: 

- At this moment there are 3 game modes. Easy, normal, hard.
- All three game modes have different animations on their respective selection screen.
> Not added due to time restrictions yet. They just have different colors at this moment.
- A timer will keep track off how long it takes to complete the game.
- A counter will show how much moves a user has made.
- Completing the game will show the users score. 
> Shows how many moves a user has made at this moment. 
- The user is easily able to navigate between game modes.
- The user is able to manually refresh the game. 
- Popup warnings are shown to prevent the user from resetting or returning by accident.
> Not implemented as of yet.
- Once a user has matched cards they are removed from the game. 
> They remain opened as of now

## Future Features: 

- An extreme game mode.
- Turn the app in a game library with severel different classic games.
- Link to different API's so that a user never sees the same images.
- Implement a star rating based on the users score.
> Star rating has been implemented. 

# Technologies used:

## Languages: 

- HTML
- CSS
- javaScript

## Libraries:

- JQuery: for easier and faster javascript and DOM manipulation.
- Bootstrap: to simplify page layout and make the game responsive across all devices.

## Other programs used:

- Balsamiq: for wireframing.
- Google Fonts: for the font size.
- Can I use: to check for browser compatibillity.
- [Github](https://github.com/): for hosting the projects repository and creating a live page with [Github pages](https://pages.github.com/)
- [Visual Studio Code](https://code.visualstudio.com/): as a IDE (Integrated Development Environment) for developing the project
- [Git](https://en.wikipedia.org/wiki/Git): for version control

## Code validation:

- [JShint](https://jshint.com/) to validate JavaScript code
- [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS code
> Warns user that backdrop-fliter isn't a property. 
- [W3 HTML Validator](https://validator.w3.org/) to validate HTML code
> All HTML-code passes the test.

# Testing: 

For this projects testing chrome devtools has been used extensively to check whether everything functions the way it was intended as far as responsiveness goes. 
The following screen sizes have been used: 
- A 27 inch monitor screen.
- A 16 inch laptop.
- A iphone 11. 

The following browsers have been used to test the web application:
- Google Chrome.
- Safari.
- Mozilla Firefox.

Layout should be the same across all devices but the preferred method to play the game has to be on a larger screen. This gives more room to layout the cards in a spacious way and have the images visible.
The first thing done on each page is check whether everything acts as intended as far as responsiveness goes.

## Instruction page:

Testing for the landing page has been conducted in the following way.

1. Open devTools and check responsivness across screen sizes.
2. Click the carousel icons to check whether they move as intended.
3. Press the Play button to check whether it takes the user to the gameType selection page.

## gameType-selection page.

Testing for the gameType page has been conducted in the following way:

1. Hover over each gameType card to check whether it is a button.
2. Click on the gameType card to check whether it takes the user to the correct gameType page.
3. Click on the back button to check whether it takes the user back to the instructions page.

## gameType pages:

1. Count the ammount of cards generated by JQuery depending on the gameType chosen.
2. Make a move to check whether the timer and the move counter are working and start when the user makes its first move.
3. Match two cards to check whether they are removed from the game.
4. Press the reset button to check whether the popup works as intended.
5. Press the button that takes the user back to the gameType selection screen to check whether the popup works as intended.

## User Stories Testing:

- As a user I would like to have the rules off the game explained to me in a simple to understand way.
    > The landing page carousel takes the user through the rules step by step.
- As a user I would like to have a challenge while playing the game.
    > There are 3 different gameTypes for a user to try and complete as fast as possible.
- As a user I would like to feel rewarded for completing the game.
    > A congratulatory message pops up showing the user how fast and in how many moves they have completed the game.
- As a user I would like to keep track of my performence throughout the game. 
    > A timer shows the user how much time has elapsed since their first move, and a move counter shows the user how many moves they have made.
- As a user I would like a nice clean interface while playing the game.
    > Black and white layout with a nice contrast with the cards and simple buttons help keep the screen clear for the user.
- As a user I would like to be able to reset my progress and try again.
    > A reset button in the top right helps the user to easily reset the game.
- As a user I would like to be able to easily navigate between game modes.
    > A button has been made to take the user back to the selection screen. 

# BUGS and other issues:

## Content not showing in the carousel sliders:

When I layed out the carousel on the homepage. The content wasn't showing in the slides. A quick search in bootstrap documentation stated that you need to set a height for the carousel-item and carousel-sliders. 

## Clicking cards really fast makes the game bug out.

When clicking on cards really quickly after one another the game would crash and not display properly anymore. Causing some cards to stay open. 
This has been fixed by creating a new variable to Time Out the game board which checks whether the function is already running and otherwise blocks flipCard function from running.


## Double Clicking causes card to stay open

When accidentally double clicking on cards the function would count the first and second click on the same card. A new if-statement has been added at the start of the flipCard function to prevent the same card being counted as the first and second card. 

# Deployment:

## [Github pages](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

The project has been deployed to github pages in the following way:

1. Go to repository 
2. Click on "Settings"
3. Scroll on the lefthand menu until the section "Pages". This will open the section "Github Pages"
4. Select on the "source" dropdown menu the "main branch" option
5. A success message (in green) appears and shows you the link for your live preview page in Github Pages.

## [Local deployment](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

A local clone of this repository can be made in the following way:

1. Go to repository
2. Click on the button "code"
3. Select the "HTTPS" option.
4. Copy the URL presented
5. Open your Terminal
6. Create a directory for storing this repository
7. Type "git clone" and paste the URL in that you previously copied
8. Press enter to create local clone repository

# Credits: 

## Content: 

## Code:

## Acknowledgments: