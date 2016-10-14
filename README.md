Not Linking
===

Hot linking getting you down? Stop them linking with Not Linking.

Originally built to offer a layer of protection for font files which are [available for self hosting](http://www.trackerfr.ee/).
This tiny slice of middleware for [express](http://expressjs.com/) checks a request and makes sure that this file is only available if the `Referrer` matches the current server's address.

Installation
---

```
npm install notlinking
```

Usage
---

```js
const express = require('express');
const notlinking = require('notlinking');

app.use(notlinking());

// Available options
app.use(notlinking({
	pattern      : /regex/,
	publisherUrl : 'http://example.com',
	message      : 'Customisable message for would be thieves'
}));
```
