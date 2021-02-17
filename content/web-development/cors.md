---
title: CORS
description: Information about the Cross-Origin Resource Sharing (CORS) mechanism.
date: 2021-02-17 22:12
category: Web Development
tags: 
  - back-end
  - backend
  - full-stack
  - servers
  - http
  - web-security
layout: page
---

# CORS

- [Definition](#definition)
- [Use](#use)
- [Examples](#examples)
- [Making a CORS-Friendly Server](#making-a-cors-friendly-server)
- [Bypassing CORS](#bypassing-cors)
- [Resources](#resources)

- - -

## Definition

> **Cross-Origin Resource Sharing** ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

&mdash; Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Use

> For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, `XMLHttpRequest` and the Fetch API follow the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

&mdash; Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- CORS mechanism is enforced by web browsers, by making use of certain HTTP headers
- API testing tools such as Postman and Insomnia **don't** enforce CORS and don't care about these HTTP headers

## Examples

Cross-origin request examples:

- A client application running on a web browser on [localhost:4000](#examples) making a request to a RESTful API hosted on [localhost:3000](#examples)
- The front-end JavaScript code served from [https://domain-a.com](#examples) using `XMLHttpRequest` to make a request for [https://domain-b.com/data.json](#examples)

## Making a CORS-Friendly Server

When developing services such as a RESTful API, it is important that the server hosting this sends the appropriate headers for CORS. Otherwise, front-end application using the service will get a CORS error on the browser.

To set up CORS on a server:

- Send certain HTTP headers to the browser (see [this section](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#the_http_response_headers) on the MDN page)
- Node.js with Express: add CORS headers via middleware, or use the [CORS middleware package](https://www.npmjs.com/package/cors)
- Nginx setup: see [this gist](https://gist.github.com/Stanback/7145487)

## Bypassing CORS

When developing a front-end application that makes requests to an external server out of your control, and that server doesn't set any CORS headers, you will get a CORS error in the browser. However, it may be possible to bypass CORS entirely.

As mentioned in the [#Use](#use) section, API testing tools such as Postman do not care about CORS headers or the lack of them. You can also write your own application that makes HTTP requests without caring about CORS. For example, a simple Python application using `urllib`. This application can make the request on the client's behalf and send back the output of the request.

In other words, make a proxy server that proxies your front-end application's request, handles it and sends back the response. This is what I did in my [No BS Looper](https://github.com/Phixyn/no-bs-looper) project, where I need to send a request to a particular YouTube API which (for some reason) is behind a server that doesn't allow CORS. You can see the Python code [here](https://github.com/Phixyn/no-bs-looper/blob/f51c861227f1a993b9d9aad55be0b05a091793ad/ws_server.py).

If you're working with Node and Express, you could also perform the external requests from your Express application. There are also other approaches which you can find on this Medium post: [Hacking It Out: When CORS won't let you be great | by Shalvah | Netscape | Medium](https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646).

## Resources

[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)  
[CORS - MDN Web Docs Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/CORS)  
[Ajax Cross Origin - How it works](http://www.ajax-cross-origin.com/how.html)  
