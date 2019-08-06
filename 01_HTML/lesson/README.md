# HTML

## Content

> ### Instructor Notes
> 
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
>   |----img/
>   |--------img1.jpg
>   |--------img2.jpg
>   |--------img3.jpg
> ```
>

## Learning outcomes

1. Learn how to structure a simple website project
2. Learn the basic HTML elements, the importance of indentation of page structure
3. Learn the difference betwene URL paths, absolute paths and relative paths, and when and how to use what

## Intro

HTML (currently HTML5) stands for Hyper Text Markup Language, and was developed to make data more human-readable when the world wide web was in its infancy.

Its job is pure structure (it has basic styling by default which is almost always overw-ridden).

Think of it like a skeleton, or a bookshelf, or a wardrobe: it doesn't have to be pretty but its crucial for layout and organisation.

### Code Along

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
    <!-- TYPOGRAPHY -->
    <!-- STRUCTURE -->
  </body>
</html>
```

6. TYPOGRAPHY - Headers

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

7. TYPOGRAPHY - Paragraphs

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

8. TYPOGRAPHY - breaks

> Talk about `<br>` vs `<hr>`

```html
<body>
  ...
  <!-- the HR (horizontal rule) is useful for separting content -->
  <hr>
  <br>
</body>
```

9. TYPOGRAPHY - styling

> Talk about `<b>`, `<i>` and `<u>` and how they're now less used as CSS is preferred

```html
<body>
  ...
  <!-- styling (not recommended but need to know) -->
  <b>Bold text</b>
  <hr>
  <i>Italic text</i>
  <hr>
  <u>Underlined text</u>
  <hr>
</body>
```

10. TYPOGRAPHY - lists

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

11. TYPOGRAPHY - links

> explain URL vs relative filepath

```html
<body>
  ...
  <!-- links (target opens a new tab) -->
  <!-- relative link -->
  <a href="./page2.html">Go to page 2</a>
  <!-- URL link -->
  <a href="http://www.google.com" target="_blank">Go to google</a>
  <hr>
</body>
```

12. TYPOGRAPHY - images

> Ok, probably drifting away from Typography right now, but useful to explain how you can wrap them in links
>
> if time, show them how to use a simple URL:  `<img src="http:/fillmurray.com/200/200">`

```html
<body>
  ...
  <!-- images -->
  <img src="./img/pic1.jpg" alt="Pic one name">
  <img src="./img/pic2.jpg" alt="Pic two name">
  <img src="./img/pic3.jpg" alt="Pic three name">
  <hr>
</body>
```

12. TYPOGRAPHY - tables

> DO NOT USE FOR PAGE STRUCTURE!!
>
> similar structure to `<html></html>` in that its made up of a `<thead>` `<tbody>`
>
> Order must go `<thead>` or `<tbody>` > `<tr>` > `<th>` or `<td>`

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

13. STRUCTURE - div

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

13. STRUCTURE - semantic tage

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

## Recap

By the end of the lesson, students should:

* Be able to structure a basic HTML file
* Understand the importance of indentation, comments and closing tags
* Understand the difference between the basic HTML tags 
* Understand URLs, absolute and relative paths

## Homework

- Basic

Create a 2-page HTML site including the elements from the brief. Special attention paid to the file structure, indenation, structure and comments

## Resources
