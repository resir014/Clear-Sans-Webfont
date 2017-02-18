---
layout: page
title: Include via CDN link
---

To include the CSS files through a CDN link, use the following HTML.

{% highlight html %}
<link rel="stylesheet" type="text/css" media="screen" href="https://cdn.rawgit.com/resir014/Clear-Sans-Webfont/v{{ site.version }}/css/clear-sans.css">
{% endhighlight %}

**Heads up:** The files are hosted on [RawGit](https://rawgit.com/)'s CDN, which is a free service, so there are no uptime or support guarantees. It is highly preferred that you manually host the files yourself.
