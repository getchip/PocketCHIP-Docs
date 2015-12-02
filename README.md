Next Thing Documentation
========

All documentation is written in markdown and staged on github pages. Stage is [currently here](http://nyboer.github.io/slate/#introduction) but will soon move to github pages on this repo.

If you want to add a document, add your markdown file to the [includes](https://github.com/NextThingCo/slate/tree/master/source/includes) directory and make a pull request. You can use [Github markdown](https://help.github.com/articles/github-flavored-markdown/) or [regular markdown](https://daringfireball.net/projects/markdown/syntax). 
Each include represents a top-level topic in the left-hand navigation.

If you view the files in the `include/` directory here on github, the image links appear broken. This is to be expected because these pages have yet to be rendered into a viewable state. 

Uses the Slate Documentation Generator
------------------------------
This repo is [forked from Slate](https://github.com/tripit/slate). Read the docs on the original Slate repo [wiki](https://github.com/tripit/slate/wiki) if you want all the details. There are also some [sample docs](http://tripit.github.io/slate) worth perusing.

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

