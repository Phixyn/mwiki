# ZURB Foundation Cheatsheet

_I use these components very frequently, so I like to keep them handy._

- [Blank Template](#blank-template)
- [Grid With Container And Padding](#grid-with-container-and-padding)
- [Media Object](#media-object)
- [Card](#card)
- [Callouts](#callouts)
- [Labels](#labels)
- [Typography](#typography)
    - [Small Header Segments](#small-header-segments)
    - [Subheader](#subheader)
    - [Typescale](#typescale)
    - [Lead Paragraph](#lead-paragraph)
    - [Lists Without Bullets](#lists-without-bullets)
    - [Definition List](#definition-list)

## Blank Template

```html
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foundation Template</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/app.css" />
  </head>
  <body>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

## Grid With Container And Padding

```html
<div class="grid-container">
  <div class="grid-x grid-padding-x grid-padding-y">
    <div class="cell">
        <!-- Content -->
    </div> <!-- .cell -->
  </div> <!-- .grid-x -->
</div> <!-- .grid-container -->
```

## Media Object

```html
<div class="media-object">
  <div class="media-object-section">
    <div class="thumbnail">
      <img src="img/thumbnail.png" alt="Media Object Image" />
    </div>
  </div> <!-- .media-object-section -->

  <div class="media-object-section">
    <h2 class="h4">Header</h2>

    <p>Some text here.</p>
  </div> <!-- .media-object-section -->
</div> <!-- .media-object -->
```

## Card

```html
<div class="card">
  <div class="card-divider">
    <h2 class="h5">Card Header</h2>
  </div> <!-- .card-divider -->

  <img src="img/thumbnail.png" alt="Card Image" />

  <div class="card-section">
    <p>Card content.</p>
  </div> <!-- .card-section -->

  <div class="card-section">
    <a href="#" class="button">There could be a link in another card-section.</a>
  </div> <!-- .card-section -->
</div> <!-- .card -->
```

## Callouts

```html
<div class="callout">
  <h2 class="h5">This is a normal callout.</h2>
  <p>Content here.</p>
</div>
```

```html
<div class="callout secondary">
  <h2 class="h5">This is a secondary callout.</h2>
  <p>Content here.</p>
</div>
```

## Labels

```html
<span class="label">Default Label</span>
<span class="label primary">Primary Label</span>
<span class="label secondary">Secondary Label</span>
<span class="label success">Success Label</span>
<span class="label alert">Alert Label</span>
<span class="label warning">Warning Label</span>
```

## Typography

### Small Header Segments

```html
<h3>Foundation for Sites <small>Version 6.5.1</small></h3>
```

> By inserting a `<small>` element into a header Foundation will scale the header font size down for an inline element, allowing you to use this for subtitles or other secondary header text.

### Subheader

```html
<h1 class="subheader">h1.subheader</h1>
<h2 class="subheader">h2.subheader</h2>
<h3 class="subheader">h3.subheader</h3>
<h4 class="subheader">h4.subheader</h4>
<h5 class="subheader">h5.subheader</h5>
<h6 class="subheader">h6.subheader</h6>
```

Lighter colored headers.

### Typescale

```html
<h2 class="h1">Lorem Ipsum Dolor</h2>
<h3 class="h2">Lorem Ipsum Dolor</h3>
<h4 class="h3">Lorem Ipsum Dolor</h4>
<h5 class="h4">Lorem Ipsum Dolor</h5>
<h6 class="h5">Lorem Ipsum Dolor</h6>
```

> Adjust font-size by overriding an element’s default size. This can be useful to size a `<p>` or `<h1>` through `<h6>` using Foundation's existing header sizes.

Helps screen readers to their job better by avoiding skipping header levels in a document.

### Lead Paragraph

```html
<p class="lead">What are your cats <em>really</em> dreaming about while they sleep?</p>
```

> A slightly-larger-than-normal block of text, useful for decks, blurbs, or other descriptive text.

### Lists Without Bullets

```html
<ul class="no-bullet">
  <li>List item.</li>
</ul>
```

### Definition List

```html
<dl>
  <dt>Title 1</dt>
  <dd>Definition 1</dd>
  <dt>Title 1</dt>
  <dd>Definition 2. Maybe it has <a href="#">a link.</a></dd>
</dl>
```
