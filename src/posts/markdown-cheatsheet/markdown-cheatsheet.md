---
date: "31-07-2019"
title: "Markdown Cheatsheet"
---

Headers
----
~~~
# H1
## H2
### H3
#### H4
##### H5
###### H6

H1 with line breaker
======

H2 with line breaker
-------
~~~

Emphasis
----
~~~
*Italics* or _italics_
**Bold** or __bold__
~~Strikethrough~~
~~~

List
----

Unordered list
~~~
+ List
  - Nested sublist 1 (Two spaces)
    * Nested sublist 2 (Four spaces)
  - Nested sublist 1 (Two spaces)

~~~

Ordered list
~~~
1. First
2. Second (1. can also be used all the way)

Ordered with offset
4. Fourth
5. Fifth
~~~

Task list
~~~
- [ ] Not complete
- [x] Complete
- [ ] Not complete
~~~

Code
-----
``` 
`Inline code`

~~~ 
var foo = function (bar) {
  return bar++;
};
~~~
Can also be written inside (```)
Supports syntax highlighting by specifying language after ~~~

```


Links
-----
~~~
[Text of the link](url of the link "alt tag of the link")

Can also be referenced with
[link text][id]
[id]

[id]: link
~~~

Images
-----
~~~
![name of image](url of image "hover image text")

Can also be referenced with
![name of image][id]

[id]: url of image "hover image text"
~~~

Tables
-----
~~~
Table header | Table header 2 | Table header 3
---|---|---
Cell 1 | Cell 2 | Cell 3

Content can be aligned with colons:
---:|:---:|---
right center default
~~~

Blockquotes
-----
~~~
> Blockquote
> > Blockquote nested
~~~

Other
-----
~~~
:rocket: Emoji support

--- or ___ Horizontal line

<b></b> HTML will most likely also work
~~~
