# aresDOM Philosophy

**Many developers have asked: "why not just use vanillaJS"?

If that works for you, use vanillaJS. The repeating issue I've come across after 12 years in front-end development is you will encounter the same logic problems over and over again, like selector declaring or CSS injections. 

As a mentor of mine once told me earily in my development carrier; "Work smart. Not hard. Don't repeat yourself if you can help it." 
I've always heeded his advice and so the most probable next step was building some custom JS functions that will help in dealing with using vanillaJS, especially now with ES8 syntax available.

**What kind of syntax will you use for your custom functions?

Logically, most developers are familiar with *drumroll, please...* -> jQuery syntax. That is the origin story of aresDOM. Wanting the ease of use jQuery provides in DOM manipulation and method chaining, but without the now bloat jQuery adds to a page when performance is of upmost priority.

Other important thing is every method should be independent (standalone) of other methods. This practice is strongly encouraged so that you can add or remove methods without compromising the integrity of the whole library.

All methods should use native JavaScript if possible. All methods should have readable and clear syntax.

Code readability has advantage over browser support. We need to push web technology forward. At this time, almost all of the library works in IE9. Some methods will not work in IE9 and I'm okay with that.

I encourage you to interact with ares.js directly and change whatever you like, add or remove methods, change the names of the methods .. go crazy make it your own!
