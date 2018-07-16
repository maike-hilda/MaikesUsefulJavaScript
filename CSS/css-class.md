# Advanced CSS and SASS course
* box-sizing: border-box; // padding and margins are no longer added to the total size of the box

## SASS
darken(color, %)

lighten(color, %)

@mixin clearfix {
    &::after {
        content: "";
        clear: both;
        display: table;
    }
}

@mixin style-link-text($color) {
    text-decoration: none;
    color: $color;
}

.navigation {
    @include clearfix;
}

a:link {
    @include style-link-text($blue-color);
}

@function divide($a, $b) {
    @return $a / $b;
}

%btn-placeholder {
    all the styles that the buttons have in common
}

btn-main {
    @extend %btn-placeholder;
    // other specific stuff
}

btn-main {
    @extend %btn-placeholder;
    // other specific code
}

--> extend should only be used when they are related vs mixin just for DRY

npm i node-sass --save-dev

"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
  },

npm run compile:sass

npm i live-server --save

live-server

utility classes
