# Intro to Cascading Style Sheets (CSS)

## Content

* What is CSS?
* How does it work?
* What can it do?

## Learning outcomes

By the end of this lesson you will:

* Know how to bring CSS into HTML
* Understand the 'Cascading' part
* Understand some basic styling features
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

**index.html**

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

**./css/main.css**

```css
h1 {
  font-size: 30px;
  color: blue;
}
```

> This is the preferred way because it allows for greater separation of code, a crucial part of programming in general

* What can it do?

The short answer is: a LOT!

The web is a whole different beast than what it was when CSS was first invented. Today, entire careers are centered around what you can do with CSS (front-end developers, graphic design and UX/UI).

CSS loosely falls into several categories:

> The scope of this lesson will only be able to cover a couple

* Typography, Colors and Fonts
* Positioning, Spacing and Display
* Animation and User Interaction (hover / click etc)
* Responsiveness

## Code along

1. Wildcard

> incredibly useful technique for getting an idea of how elements fit on the page
> 
> You'll see how useful this is as we code through the lesson

```css
* {
  /* overlays every item on the page with an outline. VERY useful for development */
  outline: 1px solid orange;
}
```

2. Box-model

> the cornerstone of CSS - don't need to go into too much detail, just show the diagram that every element is made up of **content**, **padding**, **border** and **margin**

![Box-model](./resources/ss1.png)

```css
body {
  /* Its common to remove default styles */
  margin: 0;
  padding: 0;
}
```

#### Typography, Colors and Fonts

3. Typography - size, weight, decoration and alignment

> let's start with a simple `<h1>`

```html
<h1>Intro to CSS</h1>
```

```css
h1 {
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}
```

4. Colors - solid, hexadecimal, rgb and hsl

> make sure the **color-picker** plugin is installed
>
> NOTE: different browsers can interpret colors slightly differently
>
> hex and rgb() are the most popular

```css
h1 {
  ...
  color: blue;
  color: #002280;
  color: rgb(0,0,255);
  color: hsl(224, 100%, 25%);
}
```

5. Fonts - native and external

> IMPORTANT - only do external if you have time

> NATIVE
>
> HTML and CSS have a number of default fonts, but obviously there are hundreds of thousands
>
> default is Times New Roman, but Emmet will show you the rest of the defaults.
>
> Left is priority; if it can't be found it moves right until one can be loaded

```css
h1 {
  ...
  font-family: Arial, Helvetica, sans-serif;
}
```

> EXTERNAL - Standard
> 
> Go to [Google Fonts](https://fonts.google.com/)
> Pick a font
> In the popup, you can either use **standard** or **import**

**index.html**
```html
  <head>
    ...
    <link href="https://fonts.googleapis.com/css?family=Blinker&display=swap" rel="stylesheet">
  </head>
```

```css
h1 {
  ...
  font-family: 'Blinker', sans-serif;
}
```

> EXTERNAL - Imported

**./css/main.css**
```css
  @import url('https://fonts.googleapis.com/css?family=Blinker&display=swap');
```


#### Positioning, Spacing and Display

## Challenge

## Homework

- Basic

Use the starter code to create a coded version of the image provided

- Extended

Add a second page, styled similarly

## Resources