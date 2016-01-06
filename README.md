# Next Thing C.H.I.P. Documentation


All documentation is written in markdown and staged on github pages. Published documentation is viewable [on the github pages](http://getchip.github.io/chipdocs/#introduction) or [getchip site](http://docs.getchip.com).

If you want to add or modify a document, add your markdown file to the [includes](https://github.com/getchip/chipdocs/tree/master/source/includes) directory and make a pull request. You can use [Github markdown](https://help.github.com/articles/github-flavored-markdown/) or [regular markdown](https://daringfireball.net/projects/markdown/syntax). 

Each include represents a top-level topic in the left-hand navigation if it is in the list of includes in `index.html`.

Note: If you view the files in the `include/` directory here on github, the image links appear broken. This is to be expected because these pages have yet to be rendered into a viewable state. 

## Uses the Slate Documentation Generator

This repo is [forked from Slate](https://github.com/tripit/slate). Read the docs on the original Slate repo [wiki](https://github.com/tripit/slate/wiki) if you want all the details. There are also some [sample docs](http://tripit.github.io/slate) worth perusing.

Here's the crux of the matter, though:

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Publish

If you are a contributor, it is easy to publish any changes you make. First, push your local changes to the master branch, then, in a terminal `cd` to your local repo and use the command `rake publish`. This will render static html pages, and push the changes to the gh-pages branch of this repo, making them live at http://docs.getchip.com

