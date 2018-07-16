# CSS
``` <link href="something.css" type="text/css" rel="stylesheet" />```
--> empty element i.e. no closing tag; reusing the same stylesheet over all pages not only means fast editing/consistency, it also means the user only needs to download the css file once

For the differene between src and href, see here:
https://stackoverflow.com/questions/3395359/difference-between-src-and-href
TL;DR: href established a relationship vs src replaces the element

or place a ```<style type="text/css"></style>``` tag in the head
and to style an element directly ```<p style="color:red;">Hi</p>``` (don't do this)

## Different selectors

Universal selector: *

Type selector: h1, p, ...

Class selector: .class-name

Id selector: #id-name

Child selector: li>a

Descendant selector: p a 

Adjacent sibling selector: h1+p --> only targets first <p> element after any <h1> element

General sibling selector: h1~p --> targets all <p> elements that are siblings of an <h1> elements

p[class]: all p elements with attribute called class

p[class="hello"]: all p elements with attribute class="hello"

p[class~="hello"]: all p elements with attribute class and one of them is hello e.g. class="hi hello you"

p[attr^"d"]: all p elements with attributes that start with d

p[attr*"do"]: all p elements that contain "do"

p[attr$"p"]: all p elements with attributes ending in "p"

Things like font-family are inherited while background (transparent by default), border, padding, and margins are not inherited. Use the ```inherit``` keyword if needed.

selector { 
    /* declarations go inside here */
    property: value;
}

## Color
{
    color: #123456 or white or rgb(100, 200, 80) or rgba(100, 200, 80, 0.5); /* rgba has opacity too, not inherited */
    opacity: 0.5; /* inherited by child elements */
}

fallback for older browsers:

{
    color: rgb(...);
    color: rgba(...); /* old browsers will fall back to rgb, fallback color */
}

CSS3 Color

HSL: Hue (degree on color wheel from 0 to 360), saturation (amount of gray, the more grey, the less saturation, percentage), lightness (amount of white or black in color, 0% lightness is black; lightness offers white and black, brightness only offers black)

Alpha: transparency from 0% to 100%

{
    color: hsl(0, 50%, 50%);
    color: hsla(0, 50%, 50%, 0.5);
}

## Text
### Typeface 
Serif - extra little detail on end of main strokes, easier to read in print

Sans-Serif - straight ends to letters, cleaner design, good for small text

Monospace - every letter is the same width, used for code

Cursive - joiing strokes or cursive characteristics (e.g. handwriting styles)

Fantasy - decorative fonts (good for titles)

weight: light, medium, bold, black

style: normal, italic (some letters have cursive aspect), oblique (normal font style at an angle)

stretch: condensed, regular, extended (horizontal distance between letters)

font-stack e.g. `font-family: Georgia, Times, serif;` note that both Georgia and Times are serif fonts; use double quotes if font-type has name of more than one word

font-family: uses fonts installed on computer

font-face: specifies where font can be downloaded (make sure @font-face copyright is available)

@font-face {
    font-family: someFontName;
    src: url(blabla.woff); /* supply different formats for different browsers */
}

h1 {
    font-family: someFontName;
}

### font-size
px, % (standard size in browser is 16px), em (an em is equivalent to width of a letter m)

Note that if the body has 75% (i.e. 12 px) and h1 has 75%, then h1 has 9px i.e. they are dependent

1pt is approx 1px since 1pt is 1/72 of an inch and most browsers have resolution of 72 dots per inch; use pt for printer friendly versions of pages

### more font-formating
text-transform: uppercase, lowercase, capitalize (first letter only)

text-decoration: none, underline, line-through, blink

line-height: 1.4 to 1.5ems is a good staring point, use ems so that it's relative to text size user set in browser

letter-spacing: good for uppercase; default is around 0.25ems

word-spacing

## Alignment
text-align: left, right, center, justify

vertical-align: baseline, sub, super, top, text-top, middle, bottom, text-bottom, <a length in px, em, percentage>

--> not meant to align in block level elements, does align in td and th, used with <img>, <em> or <strong> elements
text-indent: px, em; also used with-background image and text outside the browser window for ADA (-9999px)

text-shadow: left top/bottom blur (optional) color-of-shadow; lacks support in all browsers

pseudo-elements:

:first-letter

:first-line

:first-child

:last-child

:nth-child(n)

:nth-of-type(n)

pseudo-classes:

a:link

a:visited

a:hover (note: does not work on touch screen, duh)

a:focus

a:active

## Box model
width, height: em, % relative to surrounding; 

min-width, max-width, min-height, max-height

overflow: hidden, scroll (what happens when box is too small for content), auto

border, margin, padding --> height/width of element is content area only, to find total size, add border, margin and padding

given two margins between elements (top and bottom), browser shows the bigger of both, if same size, only shows one

border-width: px, thin/medium/thick; (border-top-width, ..., or border: top, right, bottom, left)

border-style: solid, dotted, dashed, double, groove (carved into the page), ridge, inset, outset, hidden/none; (border-top-style, ..., border-style: top, right, bottom, left)

border-color: #123456; (border-top-color, ..., border-color: top, right, bottom, left)

border: width style color;

padding: px, em, %

margin: px, em, %

padding cannot be negative (negative will be consdiered 0), margins can be negative

IE6 needs <!DOCTYPE html> declation (html = html5)

To center: give element that contains box a width, then margin: 0 auto;

In IE6 also needs text-align: center (note that this is inherited, i.e. needs to be removed for elements contained in the box if not desired)

display: inline, block, inline-block (block element flows like inline element), none

--> inline-block allows to set width and height to an element, padding/margins are repsected as well, that is not the case for inline

visibility: hidden, visible --> unlike display: none, hidden leaves a blank space

CSS3

border-image (-moz-border-image and -webkit-border-image)

box-shadow

border-radius (rounded corners)

## lists, tables, forms
### list
list-style-type: none, disc, circle, square or decimal, decimal-leading-zero, lower-alpha, upper-alpha, lower-roman, upper-roman (these go inside the ul or ol or li selectors)

list-style-image: url("bla");

list-style-position: inside, outside (normal)

list-style: marker/image/position in any order

### table
tr:hover --> highlights a table row when mouse goes over

th element is font-weight: bold by default

td and th elements do not inherit size from parent elements

table {
    empty-cells: hide (hides borders of empty cells), show, inherit (inherit rules of parent table)
    border-spacing: gap between table cells, varies by browser; in px, vertical and horizontal
    border-collapse: collapse (avoids double border on adjacent cells, ignores border-spacing), separate
}

### forms
https://formalize.me/

common properties for form: font-size, color, background-color, border, border-radius, :focus, :hover

common properties for submit: color, text-shadow, border-bottom, background-color, :hover

<form>
    <fieldset>
    <legend>Hi</legend>
    <label for"name">Name: </label>
    <input type="text" id="name">
    <input type="radio" name="gender" id="female">
    <label for="female">F</label>
    <label for="location">Location</label>
    <select name="location" id="location">
        <option value="ny">New York</option>
        <option value="la">Los Angeles</option>
    </select>
    </fieldset>
    <input type="submit" value="submit" />
</form>

### Cursor styles
cursor: auto, crosshair, default, pointer, move, text, wait, help, url("cursor.gif")

## Layout
position: relative // relative to where it would be in normal flow, does not affect surrounding elements

position: absolute // wrt its conntaining element; taken out of normal flow i.e. does not take up any space from other elements

position: fixed // a way of absolute positioning wrt browser window rather than its containing element; doesn't take any space out of normal flow either

position: static // default i.e. normal flow

top/bottom/left/right: px, percent, em

Indexing: elements that occur later in the code sit on top if there is an overlap

z-index: the higer the index, the further in the front it is

float: left/right // take out of normla flow and position to the far left or right of containing box; becomes block-level element around which other content that comes after in the html code can flow

float needs to be used along with width property, else it might take up the whole width; if everything inside a container is floated, background will go away since goes to 0 --> clearfix

// class for the containing element
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

clear: left/right/both/none; // indicates that the element does not touch anything within the box on e.g. the left

If a box contains all floated elements, its height is seen as zero. To fix this
{
    overflow: auto;
    width: 100%;
} --> old version of clearfix

The higher the resolution (dots per inch), the smaller the text appears

iPhone4: 960 - iPad: 1024 - laptop: 1280 - desktop: 2560

Designers usually try to fit the most important part on the first 570-600px of the site (before scrolling)

960.gs grid (width of 12, clearfix class for browser to know height of everything since it's floated)

Using different stylesheets for modular approach:

@import url("bla.css"); // alternative would be multiple links in the header of the html

## images
specify size to avoid waittimes in loading (can just render as space)

common image sizes

small portrait: 220x360, small landscape: 330x210, feature photo: 620x400

// good habit for page consistency
img.small {
    width: 100px;
    height: 100px;
}

img is displayed inline, may use `display: block;`

// by default the image repeats to fill entire box
background-image: url("blabla.gif");

background-repeat: no-repeat/repeat/repeat-x/repeat-y;

background-attachment:fixed/scroll;

background-position: left top/left center/left bottom/center top/center center/center bottom/ right top/right center/right bottom;

only specifying first value, the second will default to center; can also use percentages

*shortcut*

background: color, image, repeat, attachment, position; // in this order but leave out anything that is not needed

image sprite: one image containing several logos for example; browser only needs to only load one image; only display one at a time using background-position: -175px 0px; i.e. the first 175px are not shown

<a class="button" id="sup">sup</a>

a.button {
    background-image: url("bla.jpg");
    text-indent: -9999px;
}
a#sup {
    background-position: 0px 0px;
}
a#sup:hover {
    background-position: 0px -40px;
}
--> this is called a rollover

background: linear-gradient(direction (goes down/up/left/right/diagonally, color-stop1, color-stop2, ...);

there is also: radial-gradient and repeat-linear-gradient

background images should have lower contrast

```
<figure><img src="bla.jpg" alt="bla">
    <figcaption>Bla</figcaption>
</figure>
```

## html5 layout
<body>
<div id="page">
    <header>
        <nav>
    </header>
    <div id="content">
        <article>
        <aside>
        <footer>
    </div>
</div>

<hgroup> // to group h1 to h6 elements if they all belong together e.g. title and subtitle

for older browsers:

header, section, footer, aside, nav, article, figure, figcaption {
    display: block;
}