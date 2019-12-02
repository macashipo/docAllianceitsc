---
id: basic_syntax_markdown
title: Basic Syntax Markdown
---

## **Headings**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| # Heading level 1 | \<h1>Heading level 1\</h1> | <h1> Heading level 1 </h1>|
| ## Heading level 2 | \<h2>Heading level 2\</h2> | <h2>Heading level 2</h2> |
| ### Heading level 3 | \<h3>Heading level 3\</h3> | <h3>Heading level 3</h3> |
| #### Heading level 4 | \<h4>Heading level 4\</h4> | <h4>Heading level 4</h4> |
| ##### Heading level 5 | \<h5>Heading level 5\</h5> | <h5>Heading level 5</h5> |
| ###### Heading level 6 | \<h6>Heading level 6\</h6> | <h6>Heading level 6</h6> |

## **Alternate Syntax**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| Heading level 1 <br> =============== </br>| \<h1>Heading level 1\</h1> | <h1> Heading level 1 </h1>|
| Heading level 2 <br> --------------- </br> | \<h2>Heading level 2\</h2> | <h2>Heading level 2</h2> |

## **Paragraphs**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| I really like using Markdown.<br><br>I think I'll use it to format all of my documents from now on.</br>| \<p>I really like using Markdown.\</p> <br>\<p>I think I'll use it to format all of my documents from now on.\</p></br> | <p>I really like using Markdown.</p><p>I think I'll use it to format all of my documents from now on.</p>|

## **Line Breaks**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| This is the first line.<br>And this is the second line.| \<p>This is the first line.\<br>And this is the second line.\</p> | <p>This is the first line.<br>And this is the second line.</p>|

## **Emphasis**

You can add emphasis by making text bold or italic.

## **Bold**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| I just love \*\*bold text**.| I just love \<strong>bold text\</strong>. | I just love <strong>bold text</strong>.|
| I just love \_\_bold text__. | I just love \<strong>bold text\</strong>. | I just love <strong>bold text</strong>. |
| Love\*\*is**bold | Love\<strong>is\</strong>bold | Love<strong>is</strong>bold |

## **Italic**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| Italicized text is the \*cat's meow*.| Italicized text is the \<em>cat's meow\</em>. | Italicized text is the <em>cat's meow</em>.|
| Italicized text is the \_cat's meow_. | Italicized text is the \<em>cat's meow\</em>. | Italicized text is the <em>cat's meow</em>. |
| A\*cat*meow | A\<em>cat\</em>meow | A<em>cat</em>meow |

## **Bold and Italic**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| This text is \*\*\*really important***.| This text is \<strong>\<em>really important\</em>\</strong>. | This text is <strong><em>really important</em></strong>.|
| This text is \_\_\_really important___. | This text is \<strong>\<em>really important\</em>\</strong>. | This text is <strong><em>really important</em></strong>. |
| This text is \_\_\*really important*__. | This text is \<strong>\<em>really important\</em>\</strong>. | This text is <strong><em>really important</em></strong>.	 |
| This text is \*\*\_really important_**. | This text is \<strong>\<em>really important\</em>\</strong>. | This text is <strong><em>really important</em></strong>. |

## **Blockquotes**

To create a blockquote, add a > in front of a paragraph.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
```
The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

## **Blockquotes with Multiple Paragraphs**

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## **Nested Blockquotes**

Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## **Blockquotes with Other Elements**

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

The rendered output looks like this:

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

## **List**

You can organize items into ordered and unordered lists.

## **Ordered Lists**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
|1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item| \<ol><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ol> | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| 1. First item<br>1. Second item<br>1. Third item<br>1. Fourth item | \<ol><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ol> | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| 1. First item<br>8. Second item<br>3. Third item<br>5. Fourth item | \<ol><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ol> | <ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol> |
| 1. First item<br>2. Second item<br>3. Third item<ol>1. Indented item<br>2. Indented item</ol>4. Fourth item | \<ol><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item<br>\<ol><br>\<li>Indented item\</li><br>\<li>Indented item\</li><br>\</ol><br>\</li><br>\<li>Fourth item\</li><br>\</ol> | <ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol> |

## **Unordered Lists**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| - First item<br>- Second item<br>- Third item<br>- Fourth item| \<ul><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ul> | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
| * First item<br>* Second item<br>* Third item<br>* Fourth item | \<ul><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ul> | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| + First item<br>* Second item<br>- Third item<br>+ Fourth item | \<ul><br>\<li>First item\</li><br>\<li>Second item\</li><br>\<li>Third item\</li><br>\<li>Fourth item\</li><br>\</ul> | <ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul> |
| - First item<br>- Second item<br>- Third item<ol>- Indented item<br>- Indented item</ol>- Fourth item | \<ul><br>\<li>First item\</li><br>\<li>Second item</li><br>\<li>Third item<br>\<ul><br>\<li>Indented item\</li><br>\<li>Indented item\</li><br>\</ul><br>\</li><br>\<li>Fourth item\</li><br>\</ul> | <ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul> |

## **Adding Elements in Lists**

To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following example

## **Paragraphs**

```
*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.
```

The rendered output looks like this:

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

## **Blockquotes**

```
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
```

The rendered output looks like this:

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

## **Code Blocks**

Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

```
1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
```

The rendered output looks like this:

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

## **Images**

```
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

3.  Close the file.
```

The rendered output looks like this:

1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    <!-- ![Tux, the Linux mascot](/assets/images/tux.png) -->
    <!-- ![Tux, the Linux mascot](/website/static/img/tux.png) -->


3.  Close the file.

## **Code**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| At the command prompt, type \`nano`.| At the command prompt, type <code>nano</code>. | At the command prompt, type <code>nano</code>.|

## **Escaping Backticks**

| Markdown | HTML | Rendered Output |
| --- | ---- |------ |
| \`\`Use \`code\` in your Markdown file.\`\`| \<code>Use \`code\` in your Markdown file.\</code> | <code>Use `code` in your Markdown file.</code>|

## **Code Blocks**

To create code blocks, indent every line of the block by at least four spaces or one tab.

```    
    <html>
      <head>
      </head>
    </html>
```
The rendered output looks like this:


    <html>
      <head>
      </head>
    </html>

## **Horizontal Rules**

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

```
***

---

_________________
```

The rendered output of all three looks identical:

***

---

_________________

## **Links**

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## **Adding Titles**

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

## **URLs and Email Addresses**

To quickly turn a URL or email address into a link, enclose it in angle brackets.

```
<https://www.markdownguide.org>
<fake@example.com>
```

The rendered output looks like this:

<https://www.markdownguide.org><br>
<fake@example.com>

## **Formatting Links**

To emphasize links, add asterisks before and after the brackets and parentheses. To denote links as code, add backticks in the brackets.

```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

The rendered output looks like this:

I love supporting the **[EFF](https://eff.org)**.

This is the *[Markdown Guide](https://www.markdownguide.org)*.

See the section on [`code`](#code).

## **Reference-style Links**

Reference-style links are a special kind of link that make URLs easier to display and read in Markdown. Reference-style links are constructed in two parts: the part you keep inline with your text and the part you store somewhere else in the file to keep the text easy to read.

## **Formatting the First Part of the Link**

The first part of a reference-style link is formatted with two sets of brackets. The first set of brackets surrounds the text that should appear linked. The second set of brackets displays a label used to point to the link you’re storing elsewhere in your document.

Although not required, you can include a space between the first and second set of brackets. The label in the second set of brackets is not case sensitive and can include letters, numbers, spaces, or punctuation.

This means the following example formats are roughly equivalent for the first part of the link:

[hobbit-hole][1]

[hobbit-hole] [1]

## **Formatting the Second Part of the Link**

The second part of a reference-style link is formatted with the following attributes:

The label, in brackets, followed immediately by a colon and at least one space (e.g., [label]: ).

The URL for the link, which you can optionally enclose in angle brackets.

The optional title for the link, which you can enclose in double quotes, single quotes, or parentheses.

This means the following example formats are all roughly equivalent for the second part of the link:

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)

You can place this second part of the link anywhere in your Markdown document. Some people place them immediately after the paragraph in which they appear while other people place them at the end of the document (like endnotes or footnotes).

## **An Example Putting the Parts Together**

```
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.
```

Though it may point to interesting additional information, the URL as displayed really doesn’t add much to the existing raw text other than making it harder to read. To fix that, you could format the URL like this instead:

```
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
```

In both instances above, the rendered output would be identical:

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

and the HTML for the link would be:

```
<a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>
```

## **Images**

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

```
![Philadelphia's Magic Gardens. This place was so cool!](/img/tux.png "Philadelphia's Magic Gardens")
```

The rendered output looks like this:

![Philadelphia's Magic Gardens. This place was so cool!](/img/tux.png "Philadelphia's Magic Gardens")

## **Linking Images**

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```
[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
```

The rendered output looks like this:

[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

## **Escaping Characters**

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (\) in front of the character.

```
\* Without the backslash, this would be a bullet in an unordered list.
```

The rendered output looks like this:

\* Without the backslash, this would be a bullet in an unordered list.

## **Characters You Can Escape**

| Character	 | Name |
| --- | ---- |
| \ | backslash |
| ` | backtick (see also escaping backticks in code) |
| * | asterisk |
| - | underscore |
| { } | curly braces |
| [ ] | brackets |
| ( ) | parentheses |
| # | pound sign |
| + | plus sign |
| - | minus sign (hyphen) |
| . | dot |
| ! | exclamation mark |
| &verbar; | pipe (see also escaping pipe in tables) | 


- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media