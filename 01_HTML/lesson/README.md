# Session 1
## Intro to web development and HTML

## Overview of course
* Module 1 - HTML
* Module 2 - CSS
* Module 3 - Recap & Project Design
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

* Make sure they have a Github account and have access to the slack channel

## Interactive Code Along

> IMPORTANT: Talk through what they can expect from a code along
> 
> Refer to the ground rules you set at the start of the session if necessary
> 
> Once all students have the index.html file open, point out the HTML tags that make up the structure. You can ask students to recap and get them to share what each one is.

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

> This is where you put content you want your users to see
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

### 5. HTML tags fall loosely into two categories: Structure and Typography

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
### 6. STRUCTURE - Semantic tags

> Semantic tags are basically elements with a meaning. The browser and the developer know what it means. For example, a table tag tells the browser that the content within the tag is a table. But a span or a div tag tells us nothing about the content.

```html
<body>
  ...
  <!-- semantic -->
  <header>
    Headers are used for grouping eye-grabbing content, like navigation bars/ heroes / advert banners
  </header>

  <nav>Navs are used for navbars, and to consist of lists at the top of the website to help people find their way around the website </nav>

  <p> A paragraph.. </p>
  
  <main>
    A wrapper for the main body of content
  </main>

  <article> Useful for blog sites </article>

  <aside>Useful for side-navs or advertising down the side of a page</aside>

  <footer> Wrapper for the site page links / FAQs / contact us usually found at the bottom of a page </footer>
  ...
</body>
___

### 7. STRUCTURE - Non-semantic tags

> Non-semantic elements that don't tell us anything about its content. A div can be used for images or text or video - it's basically used as a 'wrapper' for content. 

```html
<body>
  <!-- STRUCTURE -->
  <!-- div -->
  <div>
    A very commonly used stucture element, divs are useful for organising and separating content. They are basically just
    'wrappers' for anything - could be an image, a collection of images, a block of text, an entire section of a page etc..
  </div>
</body>
```

___

#### Recap - 5 mins

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues. Students may ask questions that are useful for the whole class - address those on the screen. Specific questions can be taken one-on-one. Then, move onto the exercises (also displayed on the slides) 

#### Exercise 1.1 
* Replace the text in the header and footer tag with your own content

#### Exercise 1.2 
* Try including a paragraph and a h1 tag within an article tag.

#### Exercise 1.3 
* Create three articles with different text. Try placing one article inside an aside tag and two outside it. Enclose all content except the header and footer in the main tag
  
* Sample solution (available for students in the student guides):

```html
<body>
  <header>
    <nav>Navs are used for navbars, and usually wrap around styled lists</nav>
    Welcome to my page!
  </header>

  <main>
    All content 
    <article>Article 1</article>
    <article>
      <h1> Article 2 </h1>
      <p> If you would like more information on Article 2 and want to read the latest news..</p>
    </article>
    <aside>
      <article>Article 3</article>
    </aside>
  </main>


  <footer>
    <div> Click here for links </div> 
    <div>  FAQs </div>
    <div> Contact us </div> 
  </footer>
  ...
</body>
```

---

### 8. TYPOGRAPHY - Headers
> Now that we've got a basic structure for our page, let's look at some typography elements. Encourage students to use their own text and content within the tags. Headers are used for headings, there are different default sizes you can use. 
> Header is different from the tag head This is a common confusion. 

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

> We've used a paragraph tag already, so let's try doing something more with it. 
> 
> Mention how `<span>` is used to target text in elements and make changes to the content within the span tag and not the whole paragraph. 

```html
<body>
  ...
  <!-- paragraph and span-->
  <p>
    This is a bunch of text that I want in the paragraph. It's not super important, but I've got it here for people to read. But I want them to remembder that <span style="color:red">this bit is important</span> so I used a span tag to make it look different to the rest of the text. 
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
  <!-- the HR (horizontal rule) is useful for separating content -->
  <hr>
  <!-- the BR (horizontal rule) is also useful for separating content -->
  <br>
</body>
```

---

#### Recap - 5 mins

* Pause here for recap / questions and to allow assistant instructors time to help students who have encountered issues. Students may ask questions that are useful for the whole class - address those on the screen. Specific questions can be taken one-on-one. Then, move on to lists

---

### 11. TYPOGRAPHY - lists

> Lists are of two types - Unordered vs Ordered

```html
<body>
  ...
  <!-- lists - unordered -->
  <ul>
    <li> Beyonce </li>
    <li> Mabel </li>
    <li> Norah Jones </li>
  </ul>

  <!-- lists - ordered -->
  <ol>
    <li> Honda 1992 </li>
    <li> Honda 1996 </li>
    <li> Honda 2006 </li>
  </ol>
</body>
```
#### Exercise 1.4
* Create your own list, add a heading to the list. If you finish quickly, try combining an unordered and ordered list. (Exercise displayed on slides) 

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
  <a href="/Users/username/Desktop/Code First Girls/Week 1 - HTML/starter-code/pages/page2.html">Go to page 2 (Absolute Link)</a>
  <!-- relative link -->
  <a href="./pages/page2.html">Go to page 2 (Relative Link)</a>
</body>
```

---

#### Go over links and paths with this example

* Pathing is a more abstract topics for beginners
* Good way to expain it is like this:
  * Relative is like explaining where you live to a friend who lives in the same city
  * Absolute is like the address you would put on the front of an envelope. It's not in relation to anything - it just is. 
  * URL is a website

---

### 13. Images

> Images can be included in many ways (either from the web / from your computer / from within the project file) 
> The Image tag can have attributes such as src, alt and width - each with its own purpose. 

> Show them how to use a simple URL:  `<img src="http:/fillmurray.com/200/200">`
> Discuss the disadvantages of having an image from a URL. 

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
#### Exercise 1.5
* Add some images to your webpage. Remember to use a relative path.

### 14. Optional - Tables

> DO NOT USE FOR PAGE STRUCTURE!
> If there is time, introduce tables. If not, let them know what it is and move onto the recap for the session. 

> A table is made up of a `<thead>` `<tbody>`
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
- [ ] Name an element that is self-closing?
- [ ] What is a semantic element? Think about 2 examples. 
- [ ] What is the smallest header size?
- [ ] What are some of the attributes used in the <img> tag?
- [ ] How do we open a link in a new tab?

---

#### Exercise 1.6

* Have the students create a new folder in their `Week 1 - HTML` folder called **exercise**
* Send out the Session 1_Exercise Guide
* Get them to copy paste the incorrect code from the exercise guide into a new index.html file
* The challenge is for the students to fix the broken HTML using VSCode and the Dev Tools

---

## Homework

- Homework Task

  - Create a single HTML site including the elements from the brief. Special attention paid to the file structure, indenation, structure and comments

- Extended Homework Task

  - Create the second page so it contains the elements from the brief, and link the two pages together
  - HINT - will need to use relative links
