<span class="md-heading md-heading-1"># Mou</span>

<span class="md-link">![Mou icon](http://mouapp.com/Mou_128.png)</span>

<span class="md-heading md-heading-2">## Overview</span>

<span class="md-strong">**Mou**</span>, the missing Markdown editor for <span class="md-em">*web developers*</span>.

<span class="md-heading md-heading-3">### Syntax</span>

<span class="md-heading md-heading-4">#### Strong and Emphasize </span>

<span class="md-strong">**strong**</span> or <span class="md-strong">__strong__</span> ( Cmd + B )

<span class="md-em">*emphasize*</span> or <span class="md-em">_emphasize_</span> ( Cmd + I )

<span class="md-strong">**Sometimes I want a lot of text to be bold.
Like, seriously, a <span class="md-em">_LOT_</span> of text**</span>

<span class="md-heading md-heading-4">#### Blockquotes</span>

<span class="md-blockquote"><span class="md-blockquote-symbol">></span> Right angle brackets are used for block quotes.</span>
<span class="md-blockquote"><span class="md-blockquote-symbol">>></span> Right angle brackets are used for block quotes.</span>

<span class="md-heading md-heading-4">#### Links and Email</span>

An email <span class="md-autolink">&lt;example@example.com&gt;</span> link.

Simple inline link <span class="md-autolink">&lt;http://chenluois.com&gt;</span>, another inline link <span class="md-link">[Smaller](http://smallerapp.com)</span>, one more inline link with title <span class="md-link">[Resize](http://resizesafari.com "a Safari extension")</span>.

You can also simply put an url like this <span class="md-url">http://chenluois.com</span>

A <span class="md-nolink">[no link]</span> is also possible.

A <span class="md-reflink">[reference style][id]</span> link. Input id, then anywhere in the doc, define the link with corresponding id:

<span class="md-def">[id]: http://mouapp.com "Markdown editor on Mac OS X"</span>

Titles ( or called tool tips ) in the links are optional.

<span class="md-heading md-heading-4">#### Images</span>

An inline image <span class="md-link">![Smaller icon](http://smallerapp.com/favicon.ico "Title here")</span>, title is optional.

A <span class="md-reflink">![Resize icon][2]</span> reference style image.

<span class="md-def">[2]: http://resizesafari.com/favicon.ico "Title"</span>

<span class="md-heading md-heading-4">#### Inline code and Block code</span>

Inline code are surround by <span class="md-icode">`backtick`</span> key. To create a block code:

<span class="md-bcode">    Indent each line by at least 1 tab, or 4 spaces.
    var Mou = exactlyTheAppIwant; </span>

<span class="md-heading md-heading-4">####  Ordered Lists</span>

Ordered lists are created using &quot;1.&quot; + Space:

<span class="md-listitem"><span class="md-listitem-symbol">1.</span> Ordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">2.</span> Ordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">3.</span> Ordered list item</span>

<span class="md-heading md-heading-4">#### Unordered Lists</span>

Unordered list are created using &quot;*&quot; + Space:

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Unordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Unordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Unordered list item </span>

Or using &quot;-&quot; + Space:

<span class="md-listitem"><span class="md-listitem-symbol">-</span> Unordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">-</span> Unordered list item</span>
<span class="md-listitem"><span class="md-listitem-symbol">-</span> Unordered list item</span>

<span class="md-heading md-heading-4">#### HTML</span>

<span class="md-html">&lt;dl&gt;
  &lt;dt&gt;Definition list&lt;/dt&gt;
  &lt;dd&gt;Is something people use sometimes.&lt;/dd&gt;

  &lt;dt&gt;Markdown in HTML&lt;/dt&gt;
  &lt;dd&gt;Does *not* work **very** well. Use HTML &lt;em&gt;tags&lt;/em&gt;.&lt;/dd&gt;
&lt;/dl&gt;</span>

<span class="md-html">&lt;span&gt;
    foo
&lt;/span&gt;</span>

<span class="md-heading md-heading-4">#### Hard Linebreak</span>

End a line with two or more spaces will create a hard linebreak, called <span class="md-icode">`&lt;br /&gt;`</span> in HTML. ( Control + Return )  
Above line ended with 2 spaces.

<span class="md-heading md-heading-4">#### Horizontal Rules</span>

Three or more asterisks or dashes:

<span class="md-hr">***</span>

<span class="md-hr">---</span>

<span class="md-hr">- - - -</span>

<span class="md-heading md-heading-4">#### Headers</span>

Setext-style:

<span class="md-heading md-heading-2">This is H1
==========</span>

<span class="md-heading md-heading-2">This is H2
----------</span>

atx-style:

<span class="md-heading md-heading-1"># This is H1</span>
<span class="md-heading md-heading-2">## This is H2</span>
<span class="md-heading md-heading-3">### This is H3</span>
<span class="md-heading md-heading-4">#### This is H4</span>
<span class="md-heading md-heading-5">##### This is H5</span>
<span class="md-heading md-heading-6">###### This is H6</span>


<span class="md-heading md-heading-3">### Extra Syntax</span>

<span class="md-heading md-heading-4">#### Footnotes</span>

Footnotes work mostly like reference-style links. A footnote is made of two things: a marker in the text that will become a superscript number; a footnote definition that will be placed in a list of footnotes at the end of the document. A footnote looks like this:

That&#39;s some text with a footnote.<span class="md-nolink">[^1]</span>

<span class="md-nolink">[^1]</span>: And that&#39;s the footnote.


<span class="md-heading md-heading-4">#### Strikethrough</span>

Wrap with 2 tilde characters:

<span class="md-del">~~Strikethrough~~</span>


<span class="md-heading md-heading-4">#### Fenced Code Blocks</span>

Start with a line containing 3 or more backticks, and ends with the first line with the same number of backticks:

<span class="md-code">```
Fenced code blocks are like Stardard Markdown’s regular code
blocks, except that they’re not indented and instead rely on
a start and end fence lines to delimit the code block.
```

</span><span class="md-heading md-heading-4">#### Tables</span>

A simple table looks like this:

<span class="md-table"><span class="md-icode">`First Header`</span> | Second Header | Third Header
-------------- | ------------- | ------------
<span class="md-icode">`Content Cell`</span> | Content Cell  | Content Cell
<span class="md-icode">`Content Cell`</span> | Content Cell  | Content Cell

</span>If you wish, you can add a leading and tailing pipe to each line of the table:

<span class="md-table">| <span class="md-icode">`First Header`</span> | Second Header | Third Header |
| -------------- | ------------- | ------------ |
| <span class="md-icode">`Content Cell`</span> | Content Cell  | Content Cell |
| <span class="md-icode">`Content Cell`</span> | Content Cell  | Content Cell |

</span>Specify alignment for each column by adding colons to separator lines:

<span class="md-table"><span class="md-icode">`First Header`</span> | Second Header | Third Header
:------------- | :-----------: | -----------:
<span class="md-icode">`Left `</span>        | Center        | Right
<span class="md-icode">`Left`</span>         | Center        | Right


</span><span class="md-heading md-heading-3">### Shortcuts</span>

<span class="md-heading md-heading-4">#### View</span>

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle live preview: Shift + Cmd + I</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle Words Counter: Shift + Cmd + W</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle Transparent: Shift + Cmd + T</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle Floating: Shift + Cmd + F</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Left/Right = 1/1: Cmd + 0</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Left/Right = 3/1: Cmd + +</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Left/Right = 1/3: Cmd + -</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle Writing orientation: Cmd + L</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Toggle fullscreen: Control + Cmd + F</span>

<span class="md-heading md-heading-4">#### Actions</span>

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Copy HTML: Option + Cmd + C</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Strong: Select text, Cmd + B</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Emphasize: Select text, Cmd + I</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Inline Code: Select text, Cmd + K</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Strikethrough: Select text, Cmd + U</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Link: Select text, Control + Shift + L</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Image: Select text, Control + Shift + I</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Select Word: Control + Option + W</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Select Line: Shift + Cmd + L</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Select All: Cmd + A</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Deselect All: Cmd + D</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to Uppercase: Select text, Control + U</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to Lowercase: Select text, Control + Shift + U</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to Titlecase: Select text, Control + Option + U</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to List: Select lines, Control + L</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to Blockquote: Select lines, Control + Q</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H1: Cmd + 1</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H2: Cmd + 2</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H3: Cmd + 3</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H4: Cmd + 4</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H5: Cmd + 5</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert to H6: Cmd + 6</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert Spaces to Tabs: Control + [</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Convert Tabs to Spaces: Control + ]</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert Current Date: Control + Shift + 1</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert Current Time: Control + Shift + 2</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert entity &lt;: Control + Shift + ,</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert entity &gt;: Control + Shift + .</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert entity &amp;: Control + Shift + 7</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert entity Space: Control + Shift + Space</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Insert Scriptogr.am Header: Control + Shift + G</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Shift Line Left: Select lines, Cmd + [</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Shift Line Right: Select lines, Cmd + ]</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> New Line: Cmd + Return</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Comment: Cmd + /</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Hard Linebreak: Control + Return</span>

<span class="md-heading md-heading-4">#### Edit</span>

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Auto complete current word: Esc</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Find: Cmd + F</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Close find bar: Esc</span>

<span class="md-heading md-heading-4">#### Post</span>

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Post on Scriptogr.am: Control + Shift + S</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Post on Tumblr: Control + Shift + T</span>

<span class="md-heading md-heading-4">#### Export</span>

<span class="md-listitem"><span class="md-listitem-symbol">*</span> Export HTML: Option + Cmd + E</span>
<span class="md-listitem"><span class="md-listitem-symbol">*</span> Export PDF:  Option + Cmd + P</span>


<span class="md-heading md-heading-3">### And more?</span>

Don&#39;t forget to check Preferences, lots of useful options are there.

Follow <span class="md-link">[@chenluois](http://twitter.com/chenluois)</span> on Twitter for the latest news.

For feedback, use the menu <span class="md-icode">`Help`</span> - <span class="md-icode">`Send Feedback`</span>
