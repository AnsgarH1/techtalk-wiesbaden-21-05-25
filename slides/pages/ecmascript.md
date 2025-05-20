# Birth of ECMAScript

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ecma_International_Logo.svg/1280px-Ecma_International_Logo.svg.png" class="abs-tr w-80 mr-15 mt-20 object-contain" />

- **1997**: JavaScript standardized as ECMAScript (ECMA-262)
  - European Computer Manufacturers Association
  - Netscape submitted JavaScript for standardization
  - Goal: Create a vendor-neutral, cross-platform language standard

- **Early versions**:
  - ES1 (1997) - Initial standardization
  - ES2 (1998) - Editorial changes
  - ES3 (1999) - Regular expressions, try/catch, etc.
  - ES4 - Abandoned after disagreements
  - ES5 (2009) - JSON, strict mode, many improvements

---
layout: two-cols-header
---

# The Dark Ages (2000-2009)

::left::
- Internet Explorer dominance (IE6)
- Stagnation in browser innovation
- **JavaScript libraries emerge to handle cross-browser issues**:
  - jQuery (2006)
  - Prototype.js
  - MooTools
  - Dojo Toolkit

::right::

```js
// jQuery example - hiding cross-browser complexity
$("#myButton").click(function() {
  $(".elements").fadeIn(500).addClass("active");
});
``` 