# Intro to Cascading Style Sheets (CSS)

## Content

* What is CSS?
* How does it work?
* Wat can it do?

## Learning outcomes

By the end of this lesson you will:

* Know how to bring CSS into HTML
* Understand the 'Cascading' part
* Have a brief introduction to display and position

## Intro

* What is CSS?

* How does it work?

CSS is written and imported in one of 3 ways:

1. Inline (not recommended)

```html
<h1 style="font-size: 30px; color: blue;">Hello world</h1>
```

2. Internal (not recommended)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      h1 {
        font-size: 30px;
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

3. External (recommended)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="./css/main.css">
  </head>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```css
h1 {
  font-size: 30px;
  color: blue;
}
```

This is the preferred way because it allows for greater separation of code, a crucial part of programming in general

* Wat can it do?

The short answer is: a LOT!

The web is a whole beast than what it was when CSS was first invented. Today, entire careers are centered around what you can do with CSS (front-end developers, graphic design and UX/UI).

CSS loosely falls into several categories:

* Typography, Colors and Fonts
* Positioning, Spacing and Display
* Animation and User Interaction (hover / click etc)
* Responsiveness

#### Typography, Colors and Fonts


#### Positioning, Spacing and Display

## Challenge

## Homework

- Basic

Use the starter code to create a coded version of the image provided

- Extended

Add a second page, styled similarly

## Resources