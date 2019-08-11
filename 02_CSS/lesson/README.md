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

---

## Intro

### What is CSS?

CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, colour, size and spacing of your content, split it into multiple columns, or add animations and other decorative features

### How does it work?

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
<!-- index.html -->
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
/* ./css/main.css */
h1 {
  font-size: 30px;
  color: blue;
}
```

This is the preferred way because it allows for greater separation of code, a crucial part of programming in general

---

## What can it do?

The short answer is: a LOT!

The web is a whole different beast than what it was when CSS was first invented. Today, entire careers are centered around what you can do with CSS (front-end developers, graphic design and UX/UI).

CSS loosely falls into several categories:

* Typography, Colors and Fonts
* Positioning, Spacing and Display
* Animation and User Interaction (hover / click etc)
* Responsiveness

> The scope of this lesson will only be able to cover the first 2

---

## Code along

#### 1. Wildcard

> incredibly useful technique for getting an idea of how elements fit on the page
> 
> You'll see how useful this is as we code through the lesson

```css
* {
  /* overlays every item on the page with an outline. VERY useful for development */
  outline: 1px solid orange;
}
```

#### 2. Box-model

> the cornerstone of CSS - don't need to go into too much detail, just show the diagram that every element is made up of **content**, **padding**, **border** and **margin**
>

![Box-model](./resources/ss1.png)

```css
body {
  /* Its common to remove default styles */
  margin: 0;
  padding: 0;
}
```
> explain that here we're targeting the ELEMENTS

---

### Typography, Colors and Fonts

#### 3. Typography - size, weight, decoration and alignment

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

#### 4. Colors - solid, hexadecimal, rgb and hsl

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

#### 5. Fonts - native and external

> IMPORTANT - only do external if you have time

NATIVE
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

EXTERNAL - Standard
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

**./css/main.css**
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


#### Display, Spacing and Positioning

> Introduce CLASSES

6. Display

> `display: flex` is perhaps one of the most useful advances in CSS
> 
> There's far more to it than what we can cover here

**index.html**

```html
  <div class="hero">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, soluta quas consequatur facere numquam voluptatum
      labore, eum ratione dolor placeat assumenda fugit iusto accusamus atque, porro eveniet tenetur perferendis quis!
    </p>
  </div>
```

**./css/main.css**

```css
.hero {
  width: 100%;
  height: 200px;
  /* Use the below 3 for perfect centering  */
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  width: 300px;
  text-align: justify;
}
```

7. Spacing

> Expanding the Box Model using a div
> 
> Show the students the integrated box model in the chrome dev tools

```html
<div class="hero">
  ...
  <div class="box">Box</div>
</div>
```

```css
.box {
  /* content */
  width: 300px;
  height: 200px;
  /* padding - top-right-bottom-left */
  padding: 20px 40px 20px 40px; // or 20px 40px;
  /* border - width-style-color */
  border: 5px solid black;
  /* margin */
  margin: 40px;
}
```

8. Positioning

> ONLY IF TIME
> 
> Positioning can be tough for beginners, especially when dealing with absolute

```css

```


## Cascading

CSS works by inheritanbce: elements inherit their styles from other elements further down the tree and apply the most recent. The trick is knowing when and how to be specific

Looking at the `<table>` example, we're going to target different elements using a mix of selectors and inheritance

> Talk through briefly about what they're looking at

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th><a href="#">Col 2</a></th>
      <th>Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="row">
      <td>Col 1</td>
      <td><a href="#">Col 2</a></td>
      <td>Col 3</td>
    </tr>
    <tr class="row">
      <td>Col 1</td>
      <td><a href="#">Col 2</a></td>
      <td>Col 3</td>
    </tr>
    <tr>
      <td>Col 1</td>
      <td><a href="#">Col 3</a></td>
      <td>Col 3</td>
    </tr>
  </tbody>
</table>
```

> Add some padding and color to every cell, explaining applying CSS to to multiple elements

```css
th, td {
  padding: 15px;
  color: red;
}
```

> change the color of all links in the table

```css
table a {
  color: purple
}
```

> but only change the font size of the links in the `<thead>`

```css
thead a {
  font-size: 30px;
}
```

> change the background of all elements in the table with a `.class`

```css
.row {
  background: pink;
}
```

> change the letter spacing of the links withing these classes

```css
.row a {
  letter-spacing: 3px;
}
```

## Bad pracices

**ID**

> Stress that it's regarded as VERY bad practice to use either IDs or !important to target elements as they're almost impossible to overwrite

```css
#h-rule {
  margin: 20px 0;
}
```

**!important**

```css
.row a {
  font-family: sans-serif !important;
}
```

## Challenge

## Resources

* [Traversy Media CSS - 60mins](https://www.youtube.com/watch?v=yfoY53QXEnI&t=6s)
* [Traversy Media Flexboox - 20mins](https://www.youtube.com/watch?v=JJSoEo8JSnc&t=512s)
* [W3Schools](https://www.w3schools.com/css/default.asp)
* [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)