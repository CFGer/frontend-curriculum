# Session 1
## Intro to web development and HTML

## Overview of course
* Week 1 - HTML
* Week 2 - CSS
* Week 3 - Project Overview and HTML / CSS recap
* Week 4 - JS: 1 - Overview, data types, loops and conditionals
* Week 5 - JS: 2 - Functions and Scope
* Week 6 - JS: 3 - Objects and the DOM
* Week 7 - Project 1: Github pages and frameworks
* Week 8 - Project 2: Project presentation


## Overview of Lesson
* Learning Outcomes
* Tools: VSCode, Chrome and Github Desktop installation
* HTML: Background and Getting Started
* Code along
* Exercise
* Recap & Closing
* Summary
* Homework

## Learning outcomes
Students will:
* be able to define HTML and what its main purpose is
* know how to create an HTML file and add the basic boilerplate (DOCTYPE, html, head and body)
* understand what an element is and how they’re constructed
* understand the difference between URLs, absolute and relative file paths
* know a few of the basic elements used for typography and structure

## HTML: Background and Getting Started 

* HTML Background
  * Structure & typography
  * block & inline
* Elements & tags:  explain what an element is made up of
* Importance of closing tags and indentation
* The most commonly used elements


## Code Along
 
> Send out the _starter-code_ to the students and have them open it in VSCode.
> 
> _IMPORTANT:_ Have them create a new folder either in Desktop or Documents called CodeFirst:Girls, and sub folder called 01_HTML
>
> File structure should look like
>
> ```
> CodeFirst:Girls
>   |
>   |- 01_HTML/
>   |----index.html
>   |----pages/
>   |--------page2.html
>   |----img/
>   |--------img1.jpg
>   |--------img2.jpg
>   |--------img3.jpg
> ```
>

---

> Introduce the Dev Tools

---


1. The `<!DOCTYPE html>` tag

> When our HTML file first hits the browser, this is the first thing that's read and tells the browser to use HTML5 (the latest version)

```html
<!DOCTYPE html>
```

2. The `<html></html>` tag

> All of our HTML needs to go inside these tags, and falls into 2 places...

```html
<!DOCTYPE html>
<html>

</html>
```

3. ...the `<head></head>`...

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

4. ...or the `<body></body>`

> This is where we actually see our content

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Intro to HTML</head>
  </head>
  <body>
    
  </body>
</html>
```

5. HTML, being pure structure, falls loosely into two categories: Typography and Structure so let's set up our project

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
    <title>Intro to HTML</head>
  </head>
  <body>
    <!-- STRUCTURE -->
    <!-- TYPOGRAPHY -->
  </body>
</html>
```

6. STRUCTURE - div

> Definately the most structure: briefly explain that its used as a wrapper

```html
<body>
  ...
  <!-- STRUCTURE -->
  <!-- div -->
  <div>
    By far the most commonly used stucture element, divs are useful for separating content. They are generic
    'wrappers' for other elements
  </div>
</body>
```

7. STRUCTURE - semantic tags

> at the Instructor's discretion. Could mention them, but stress that they are identical to `<div>`s just with different names

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
</body>
```

---

#### Mini-recap

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues
* If no questions, get students to create a new HTML file (**./pages/page2.html**) and practice adding the fundamental tags

---

8. TYPOGRAPHY - Headers

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

9. TYPOGRAPHY - Paragraphs

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

10. TYPOGRAPHY - breaks

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


* lists, links and img elements (inline) 
  * paths (Slide 12)
  * Short recap
* table (if time - possible small exercise)
  * Short recap


11. TYPOGRAPHY - lists

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

12. TYPOGRAPHY - links

> explain URL vs relative filepath

```html
<body>
  ...
  <!-- links (target opens a new tab) -->
  <!-- URL link -->
  <a href="http://www.google.com" target="_blank">Go to google</a>
  <!-- relative link -->
  <a href="./pages/page2.html">Go to page 2</a>
  <hr>
</body>
```

13. TYPOGRAPHY - images

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

14. TYPOGRAPHY - tables

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

#### Mini-recap

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues

---


---
#### CHALLENGE

* Send out the mini-challenge:
* The challenge is for the students to fix the broken HTML using VSCode and the Dev Tools
---


## Session Recap

By the end of the lesson, students should:

* Be able to structure a basic HTML file
* Understand the importance of indentation, comments and closing tags
* Understand the difference between the basic HTML tags 
* Understand URLs, absolute and relative paths

## Homework

- Basic

Create a single HTML site including the elements from the brief. Special attention paid to the file structure, indenation, structure and comments

- Extended

Create the second page so it contains the elements from the brief, and link the two pages together

> HINT - will need to use relative links
