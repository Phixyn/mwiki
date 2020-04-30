---
title: ZURB Foundation Cheatsheet
description: A reference of Foundation components that I use frequently.
date: 2020-01-20 22:11
category: Web Development
tag:
  - web-development
  - front-end
  - ui
  - zurb-foundation
  - foundation
layout: page
---

# ZURB Foundation Cheatsheet

_I use these components very frequently, so I like to keep them handy._

- [Blank Template](#blank-template)
- [Grid With Container And Padding](#grid-with-container-and-padding)
- [Media Object](#media-object)
- [Card](#card)
- [Callouts](#callouts)
- [Forms](#forms)
- [Labels](#labels)
- [Typography](#typography)
    - [Small Header Segments](#small-header-segments)
    - [Subheader](#subheader)
    - [Typescale](#typescale)
    - [Lead Paragraph](#lead-paragraph)
    - [Lists Without Bullets](#lists-without-bullets)
    - [Definition List](#definition-list)
- [Navigation](#navigation)
    - [Breadcrumbs](#breadcrumbs)
- [Orbit](#orbit)

> Latest docs: https://foundation.zurb.com/sites/docs/index.html

- - -

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

## Forms

```html
<form>
  <div class="input-group">
    <span class="input-group-label">Name</span>
    <input class="input-group-field" type="text" placeholder="Name" />
  </div> <!-- .input-group -->

  <div class="input-group">
    <span class="input-group-label">Email</span>
    <input class="input-group-field" type="email" placeholder="Email" />
  </div> <!-- .input-group -->

  <div class="input-group">
    <span class="input-group-label">Message</span>
    <textarea class="input-group-field" placeholder="Message"></textarea>
  </div> <!-- .input-group -->
</form>
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

## Navigation

### Breadcrumbs

```html
<nav aria-label="You are here:" role="navigation">
  <ul class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Features</a></li>
    <li class="disabled">Gene Splicing</li>
    <li>
      <span class="show-for-sr">Current: </span> Cloning
    </li>
  </ul>
</nav>
```

> A CSS `::after` element containing a slash character is used to create the separator between items. Some screen readers will read this character out loud. If this is an issue, use a background image or a separate element with `aria-hidden="true"` to create the separator instead.

**See also:**

* [Breadcrumbs - Google Developers](https://developers.google.com/search/docs/data-types/breadcrumbs)
* [BreadcrumbList - schema.org](https://schema.org/BreadcrumbList)

## Orbit

```html
<!-- ORBIT -->
<div class="orbit" role="region" aria-label="Featured" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
  <div class="orbit-wrapper">
    <div class="orbit-controls">
      <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
      <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
    </div> <!-- .orbit-controls -->
    <ul class="orbit-container">
      <li class="is-active orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://foundation.zurb.com/sites/docs/assets/img/orbit/01.jpg" alt="Space" />
          <figcaption class="orbit-caption">Space, the final frontier. (Captions are optional)</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://foundation.zurb.com/sites/docs/assets/img/orbit/02.jpg" alt="Space" />
          <figcaption class="orbit-caption">Lets Rocket!</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://foundation.zurb.com/sites/docs/assets/img/orbit/03.jpg" alt="Space" />
          <figcaption class="orbit-caption">Encapsulating</figcaption>
        </figure>
      </li>
      <li class="orbit-slide">
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://foundation.zurb.com/sites/docs/assets/img/orbit/04.jpg" alt="Space" />
          <figcaption class="orbit-caption">Outta This World</figcaption>
        </figure>
      </li>
    </ul> <!-- .orbit-container -->
  </div> <!-- .orbit-wrapper -->

  <!-- Optional nav for orbit (see below for full snippet) -->
  <nav class="orbit-bullets">
    ...
  </nav>
</div> <!-- .orbit -->
```

_Also known as a Carousel._

```html
<!-- ORBIT NAV -->
<nav class="orbit-bullets">
  <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
  <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
  <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
  <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
</nav>
```

Optionally, an Orbit navigation component can be added to the orbit, just before closing the `.orbit` class div element and directly below the closing `.orbit-wrapper` div element.