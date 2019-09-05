# Session 1
## Intro to web development and HTML

## Overview of course
* Module 1 - HTML
* Module 2 - CSS
* Module 3 - Peer Programming, Recap & Project Design
* Module 4 
  - JavaScript [Overview, data types, loops and conditionals]
  - JavaScript [Functions and Scope]
  - JavaScript [Objects and the DOM]
* Module 5 - Github pages and frameworks
* Module 6 - Project presentations & Careers in Web Dev



## Session Outline
* Learning Outcomes
* Tools: VSCode, Chrome and Github Desktop installation
* HTML: Background and Getting Started
* Code along
* Recap
* Exercise
* Summary
* Homework

## Learning outcomes
Students will:
* be able to define HTML and what its main purpose is
* know how to create an HTML file and add the basic boilerplate (DOCTYPE, html, head and body)
* understand what an element is and how they’re constructed
* understand the difference between URLs, absolute and relative file paths
* know a few of the basic elements used for typography and structure

## Tools

* Make sure the student have downloaded and installed:
  * VSCode
  * Google Chrome
  * Github Desktop

* Make sure they have a Github account

## HTML: Background and Getting Started 

* What is HTML?
* Why do we need / use it?
* Elements: 
  * tags and content
  * inline vs block


## Getting Started
  
> 1. Walk through creating a new folder on their desktop called Code First Girls with a sub folder Week 1 - HTML
> 
> 2. Send out the `lesson/starter-code` zip code to the students on Slack
> 
> 3. Have them unzip the code and copy / move it to the new desktop folder `Desktop/Code First Girls/Week 1 - HTML`
>
> 4. Open VSCode, and open `Desktop/Code First Girls/Week 1 - HTML/starter-code` folder (NOT individual files)
>
> File structure should look like
>
> ```
> Code First Girls
>   |
>   |- starter-code/
>   |---- Week 1 - HTML/
>   |--------index.html
>   |--------pages/
>   |------------page2.html
>   |--------img/
>   |------------img1.jpg
>   |------------img2.jpg
>   |------------img3.jpg
> ```
>
> Ensure that they only need to focus on index.html for now

## Code Along

> IMPORTANT: Talk through what they can expect from a code along
> 
> Refer to the ground rules again if necessary
> 
> this first bit is just to talk though the basic outline of a HTML template along with the slides

___

### 1. The `<!DOCTYPE html>` tag

> When our HTML file first hits the browser, this is the first thing that's read and tells the browser to use HTML5 (the latest version)

```html
<!DOCTYPE html>
```
___

### 2. The `<html></html>` tag

> All of our HTML needs to go inside these tags, and falls into 2 places...

```html
<!DOCTYPE html>
<html>

</html>
```
___

### 3. ...the `<head></head>`...

> This is the 'thinking' part of our HTML, where we can fetch data (CSS, fonts, scripts, JSON, SEO etc). It all gets run 'behind-the-scenes', so to speak
>
> The `<title></title>` bit will change the text in our browser tab

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to HTML</title>
  </head>
</html>
```
___

### 4. ...or the `<body></body>`

> This is where we actually see our content

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Intro</head>
  </head>
  <body>
    
  </body>
</html>
```
___ 

### 5. HTML, being pure structure, falls loosely into two categories: Typography and Structure so let's set up our project

> There's obviously more to it, but for now this is enough
>
> Stress that its very similar to how a newspaper is organised
>
> One way to make things clearer is comments
> 
> A simple way to make a comment is __cmd + /__ on a mac or __ctrl + /__  on a PC

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Intro</head>
  </head>
  <body>
    <!-- STRUCTURE -->
    ...
    <!-- TYPOGRAPHY -->
  </body>
</html>
```
___

### 6. STRUCTURE - div

> Definately the most structure: briefly explain that its used as a wrapper

```html
<body>
  <!-- STRUCTURE -->
  <!-- div -->
  <div>
    By far the most commonly used stucture element, divs are useful for separating content. They are generic
    'wrappers' for other elements
  </div>
</body>
```

___

### 7. STRUCTURE - semantic tags

> They are identical to `<div>`s just with different names

```html
<body>
  ...
  <!-- semantic -->
  <header>
    Headers are used for grouping eye-grabbing content, like navbars, jumbotrons / heroes / advert banners
  </header>

  <nav>Navs are used for navbars, and usually wrap around styled lists</nav>

  <main>
    A wrapper for the main body of content
  </main>

  <article>Less used but can be useful for blog sites</article>

  <aside>Useful for side-navs or strip advertising down the side of a page</aside>

  <footer>Wrapper for the site page links / FAQs / contact us usually found at the bottom of a page</footer>
  ...
</body>
```

---

#### Mini-Exercise

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues
* Spend 5 minutes nesting semantic elements how you think they might look on a web site
* For example:

```html
<body>
  ...
  <!-- semantic -->
  <header>
    <nav>Navs are used for navbars, and usually wrap around styled lists</nav>
    Headers are used for grouping eye-grabbing content, like navbars, jumbotrons / heroes / advert banners
  </header>

  <main>
    A wrapper for the main body of content
    <article>Less used but can be useful for blog sites</article>
    <aside>Useful for side-navs or strip advertising down the side of a page</aside>
  </main>


  <footer>Wrapper for the site page links / FAQs / contact us usually found at the bottom of a page</footer>
  ...
</body>
```

---

### 8. TYPOGRAPHY - Headers

```html
<body>
  <!-- TYPOGRAPHY -->
  <!-- headers 1- 6 -->
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
</body>
```
___

### 9. TYPOGRAPHY - Paragraphs

> Can talk about typing "lorem" and auto complete
> 
> Mention how `<span>` is used to target text in elements

```html
<body>
  ...
  <!-- paragraph and span-->
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam corporis inventore aperiam voluptates numquam
    debitis esse optio eos, sit exercitationem quos quasi eaque <span>blanditiis fuga incidunt</span> in commodi sunt
    saepe!
  </p>
</body>
```

### 10. TYPOGRAPHY - breaks

> Talk about `<br>` vs `<hr>`
> 
> mention they're called self-closing tags (elements with no text content)

```html
<body>
  ...
  <!-- the HR (horizontal rule) is useful for separting content -->
  <hr>
  <!-- the BR (horizontal rule) is useful for separting content -->
  <br>
</body>
```

---

#### Mini-recap

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues

---

### 11. TYPOGRAPHY - lists

> Unordered vs Ordered
>
> `<li>` MUST be direct children of `<ul>`

```html
<body>
  ...
  <!-- lists - unordered -->
  <ul>
    <li>UL List Item 1</li>
    <li>UL List Item 2</li>
    <li>UL List Item 3</li>
  </ul>

  <!-- lists - ordered -->
  <ol>
    <li>OL List Item 1</li>
    <li>OL List Item 2</li>
    <li>OL List Item 3</li>
  </ol>
</body>
```

___

### 12. TYPOGRAPHY - links

> explain URL vs absolute vs relative filepaths
>
> Use http://www.google.com for link 1
>
> right-click `pages/page2.html` and select "Copy Path" (absolute) and use for link 2
>
> right-click `pages/page2.html` and select "Copy Relative Path" and use for link 3

```html
<body>
  ...
  <!-- URL link -->
  <a href="http://www.google.com" target="_blank">Go to google</a>
  <!-- absolute link -->
  <a href="/Users/username/Desktop/Code First Girls/Week 1 - HTML/starter-code/pages/page2.html">Go to page 2</a>
  <!-- relative link -->
  <a href="./pages/page2.html">Go to page 2</a>
</body>
```

---

#### Paths Mini-recap

* Pathing is one of the more abstract topics for beginners
* Good way to expain it is like this:
  * Relative is like explaining where you live to a friend who lives in the same city
  * Absolute is like the address you would put on the front of an envelope
  * URL is a website

---

### 13. TYPOGRAPHY - images

> Ok, not exactly Typography per se, but useful to explain how you can wrap them in links
>
> if time, show them how to use a simple URL:  `<img src="http:/fillmurray.com/200/200">`

```html
<body>
  ...
  <!-- images -->
  <img src="./img/pic1.jpeg" alt="Pic one name" width="200">
  <img src="./img/pic2.jpeg" alt="Pic two name" width="200">
  <img src="./img/pic3.jpeg" alt="Pic three name" width="200">
  <hr>
</body>
```

### 14. TYPOGRAPHY - tables

> DO NOT USE FOR PAGE STRUCTURE!!
>
> similar structure to `<html></html>` in that its made up of a `<thead>` `<tbody>`
>
> Order must go `<thead>` or `<tbody>` => `<tr>` => `<th>` or `<td>`

```html
<body>
  ...
  <!-- tables -->
  <table>
    <thead>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
        <th>Col 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Col 1</td>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
      <tr>
        <td>Col 1</td>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
    </tbody>
  </table>
  <hr>
</body>
```

---

#### Recap

- [ ] What are key components of a HTML element? 
- [ ] What kind of information goes in the HTML `<head>`?
- [ ] What is a semantic element?
- [ ] What is the smallest header size?
- [ ] What is an attribute and what's an example of one?
- [ ] How do we open a link in a new tab?
- [ ] Name an element that is self-closing?

---

#### CHALLENGE

* Have the students create a new folder in their `Week 1 - HTML` folder called **exercise**
* Send out the `exercise/starter-code` and have them copy / move the unzipped starter-code to that folder
* You will need to explain that `README.md` is a common documentation standard
* To open preview view, right click on `README.md` in the starter-code and select Open Preview
* The challenge is for the students to fix the broken HTML using VSCode and the Dev Tools

---


## Session Recap

You should now:

* [ ] Be able to recreate a basic code project
* [ ] Understand the importance of indentation, comments and closing tags
* [ ] Understand the difference between the basic HTML tags 
* [ ] Understand URLs, absolute and relative paths

## Homework

- Basic

  - Create a single HTML site including the elements from the brief. Special attention paid to the file structure, indenation, structure and comments

- Extended

  - Create the second page so it contains the elements from the brief, and link the two pages together

> HINT - will need to use relative links
