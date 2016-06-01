# Next Thing DIP Documentation


All documentation is written in markdown and staged on github pages. Published documentation is viewable on the github pages.

If you want to add or modify a document, add your markdown file to the [includes](https://github.com/NextThingCo/DIP-Docs/tree/master/source/includes) directory and make a pull request. You can use [Github markdown](https://help.github.com/articles/github-flavored-markdown/) or [regular markdown](https://daringfireball.net/projects/markdown/syntax). 

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

#### Ubuntu 14.04 LTS
Install the following packages, then jump to the Preview section.
```
sudo apt-get install git ruby-dev
sudo gem install bundler
cd 
git clone git@github.com:NextThingCo/DIP-Docs.git
cd DIP-Docs
bundle install
```



#### Getting El Capitan to Behave
Installing on El Capitan (OS X 10.11) can be difficult. 
Once you clone the directory, you may need to `cd` to the chipdocs directory, then run the command `bundle install`. 
If you get errors when you try to run `./deploy.sh` after that, try `bundle update` to install the bundler, and then try `./deploy.sh` again. 

There may be some other black magic involved in getting it working on El Capitan, including:
```
brew install ruby
sudo gem install therubyracer -v '0.12.2'
sudo gem install libv8 -v '3.16.14.13' -- --with-system-v8
```
or perhaps even adding `-n /usr/local/bin` to the end of those last two items. I had to fumble around with a lot of various suggestions on the internets to finally get this working on El Capitan, so it is hard to say exactly which one fixed it. The last command I tried before it worked was `bundle update`, so I'd try that first!

### Preview
If you want to preview your changes to the documents in a browser before you make a pull request or push changes, navigate to the chipdocs/ directory, and use the middleman server to render and serve the documentation in HTML. The terminal will tell you the URL to use to check out the docs.
```
bundle install
bundle exec middleman server
```

### Publish

If you are a contributor, it is easy to publish any changes you make. First, push your local changes to the master branch, then, in a terminal `cd` to your local repo and use the command `./deploy.sh`. This will render static html pages, and push the changes to the gh-pages branch of this repo, making them live at http://docs.getchip.com

