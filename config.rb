require 'nokogiri'

# Markdown
set :markdown_engine, :redcarpet
set :markdown,
    fenced_code_blocks: true,
    smartypants: true,
    disable_indented_code_blocks: true,
    prettify: true,
    tables: true,
    with_toc_data: true,
    no_intra_emphasis: true

# Assets
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

# Activate the syntax highlighter
activate :syntax

activate :autoprefixer do |config|
  config.browsers = ['last 2 version', 'Firefox ESR']
  config.cascade  = false
  config.inline   = true
end

# Github pages require relative links
activate :relative_assets
set :relative_links, true

# Build Configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  # activate :relative_assets
  # activate :asset_hash
  # activate :gzip
end

helpers do
  def toc_data(page_content)
    html_doc = Nokogiri::HTML::DocumentFragment.parse(page_content)

    # get a flat list of headers
    headers = []
    html_doc.css('h1, h2, h3').each do |header|
      headers.push({
        id: header.attribute('id').to_s,
        content: header.content,
        level: header.name[1].to_i,
        children: []
      })
    end

    [3,2].each do |header_level|
      header_to_nest = nil
      headers = headers.reject do |header|
        if header[:level] == header_level
          header_to_nest[:children].push header if header_to_nest
          true
        else
          header_to_nest = header if header[:level] == (header_level - 1)
          false
        end
      end
    end
    headers
  end
end
